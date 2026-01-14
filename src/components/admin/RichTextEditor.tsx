/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import HardBreak from "@tiptap/extension-hard-break";
import Link from "@tiptap/extension-link";
import { useEffect, useState } from "react";

type Props = {
  value: string;
  onChange: (html: string) => void;
  uploadImage: (file: File) => Promise<string>;
};

export default function RichTextEditor({
  value,
  onChange,
  uploadImage,
}: Props) {
  const [mode, setMode] = useState<"visual" | "source">("visual");
  const [sourceValue, setSourceValue] = useState(value);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        hardBreak: false,
      }),

      HardBreak.extend({
        addKeyboardShortcuts() {
          return {
            "Shift-Enter": () => this.editor.commands.setHardBreak(),
          };
        },
      }),

      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: "text-primary underline",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),

      Image.configure({
        inline: false,
        HTMLAttributes: {
          class: "rounded-xl my-8 w-full object-cover",
        },
      }),

      Placeholder.configure({
        placeholder: "Start writing your blog…",
      }),
    ],

    content: value,

    onUpdate({ editor }) {
      if (mode === "visual") {
        onChange(editor.getHTML());
      }
    },
  });

  /* ---------- Sync external value ---------- */

  useEffect(() => {
    if (!editor) return;

    if (mode === "visual") {
      const current = editor.getHTML();
      if (current !== value) {
        editor.commands.setContent(value, { emitUpdate: false });
      }
    } else {
      setSourceValue(value);
    }
  }, [value, editor, mode]);

  /* ---------- Mode switching ---------- */

  function switchToSource() {
    if (!editor) return;
    setSourceValue(editor.getHTML());
    setMode("source");
  }

  function switchToVisual() {
    if (!editor) return;

    editor.commands.setContent(sourceValue || "<p></p>", {
      emitUpdate: false,
    });

    onChange(sourceValue);
    setMode("visual");
  }

  if (!editor) return null;

  return (
    <div className="border rounded-xl overflow-hidden">
      <Toolbar
        editor={editor}
        uploadImage={uploadImage}
        mode={mode}
        onSource={switchToSource}
        onVisual={switchToVisual}
      />

      {mode === "visual" ? (
        <EditorContent
          editor={editor}
          className="prose max-w-none p-6 text-gray-700 focus:outline-none min-h-[120px]"
        />
      ) : (
        <textarea
          className="w-full min-h-[400px] font-mono text-sm text-gray-700 p-6 border-t focus:outline-none"
          value={sourceValue}
          onChange={(e) => setSourceValue(e.target.value)}
        />
      )}
    </div>
  );
}

/* ---------------- Toolbar ---------------- */

function Toolbar({
  editor,
  uploadImage,
  mode,
  onSource,
  onVisual,
}: {
  editor: any;
  uploadImage: (file: File) => Promise<string>;
  mode: "visual" | "source";
  onSource: () => void;
  onVisual: () => void;
}) {
  /* ---------- Helpers ---------- */

  function isMarkActive(mark: string) {
    return (
      editor.isActive(mark) ||
      !!editor.state.storedMarks?.some(
        (m: any) => m.type.name === mark
      )
    );
  }

  function btn(active: boolean) {
    return `
      px-2 py-1 rounded-md text-sm font-semibold transition
      ${active ? "text-primary" : "text-white hover:text-primary"}
    `;
  }

  /* ---------- Image ---------- */

  function insertImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const url = await uploadImage(file);
      editor
        .chain()
        .focus()
        .setImage({ src: url })
        .createParagraphNear()
        .run();
    };

    input.click();
  }

  /* ---------- Link (non-destructive toggle) ---------- */

  function toggleLink() {
    const isActive =
      editor.isActive("link") ||
      editor.state.storedMarks?.some(
        (m: any) => m.type.name === "link"
      );

    // TURN LINK OFF (keep existing linked text)
    if (isActive) {
      editor
        .chain()
        .focus()
        .insertContent("\u200B") // zero-width boundary
        .unsetMark("link") // clears stored mark only
        .run();
      return;
    }

    // TURN LINK ON
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL", previousUrl);

    if (!url) return;

    editor
      .chain()
      .focus()
      .setLink({ href: url }) // stored mark
      .run();
  }

  return (
    <div className="flex flex-wrap items-center gap-2 border-b bg-gray-500 p-2">
      {mode === "visual" && (
        <>
          <button
            type="button"
            className={btn(isMarkActive("bold"))}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            Bold
          </button>

          <button
            type="button"
            className={btn(isMarkActive("italic"))}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            Italic
          </button>

          <button
            type="button"
            className={btn(editor.isActive("heading", { level: 2 }))}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            H2
          </button>

          <button
            type="button"
            className={btn(editor.isActive("heading", { level: 3 }))}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            H3
          </button>

          <button
            type="button"
            className={btn(editor.isActive("bulletList"))}
            onClick={() =>
              editor.chain().focus().toggleBulletList().run()
            }
          >
            List
          </button>

          <button
            type="button"
            className={btn(isMarkActive("link"))}
            onClick={toggleLink}
          >
            Link
          </button>

          <button
            type="button"
            className={btn(false)}
            onClick={insertImage}
          >
            Image
          </button>
        </>
      )}

      <div className="ml-auto flex gap-2">
        {mode === "visual" ? (
          <button type="button" onClick={onSource}>
            {"</>"} Source
          </button>
        ) : (
          <button type="button" onClick={onVisual}>
            Visual
          </button>
        )}
      </div>
    </div>
  );
}
