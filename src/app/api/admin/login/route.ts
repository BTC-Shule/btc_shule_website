import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

const ADMIN_USER = {
  username: "admin",
  passwordHash: bcrypt.hashSync("btcshule123", 10),
};

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username !== ADMIN_USER.username) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, ADMIN_USER.passwordHash);
  if (!valid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  (await cookies()).set("btcshule_admin", "true", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return NextResponse.json({ success: true });
}
