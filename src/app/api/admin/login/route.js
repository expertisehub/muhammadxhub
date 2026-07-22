import { NextResponse } from "next/server";
import { getAdminCredentials } from "../../../../lib/admin-auth.js";

export async function POST(request) {
  try {
    const body = await request.json();
    const configuredCredentials = getAdminCredentials();

    if (
      body?.email === configuredCredentials.email &&
      body?.password === configuredCredentials.password
    ) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      {
        ok: false,
        message: "The credentials do not match our secure admin records.",
      },
      { status: 401 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not sign you in right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
