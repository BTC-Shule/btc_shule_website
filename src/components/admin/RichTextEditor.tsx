"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import HardBreak from "@tiptap/extension-hard-break";
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

  /* -------- Sync external value into editor -------- */

  useEffect(() => {
    if (!editor) return;

    if (mode === "visual") {
      const current = editor.getHTML();
      if (value !== current) {
        editor.commands.setContent(value, { emitUpdate: false });
      }
    } else {
      setSourceValue(value);
    }
  }, [value, editor, mode]);

  /* -------- Switch modes safely -------- */

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
          className="prose max-w-none p-6 text-gray-700 focus:outline-none"
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editor: any;
  uploadImage: (file: File) => Promise<string>;
  mode: "visual" | "source";
  onSource: () => void;
  onVisual: () => void;
}) {
  function insertImage() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const url = await uploadImage(file);
      editor.chain().focus().setImage({ src: url }).createParagraphNear().run();
    };
    input.click();
  }

  return (
    <div className="flex flex-wrap items-center gap-2 border-b bg-gray-500 p-2">
      {mode === "visual" && (
        <>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            Bold
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            Italic
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
          >
            H2
          </button>
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
          >
            H3
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            List
          </button>
          <button type="button" onClick={insertImage}>
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
  