import { NextResponse } from "next/server";
import {
  readAdminStore,
  saveContent,
  saveUpdate,
  updateSubmissionStatus,
  writeAdminStore,
} from "../../../lib/admin-store.js";

export async function GET() {
  const store = await readAdminStore();
  return NextResponse.json(store);
}

export async function POST(req) {
  try {
    const body = await req.json();

    if (body.action === "saveContent") {
      const store = await saveContent(body.content || {});
      return NextResponse.json(store);
    }

    if (body.action === "saveUpdate") {
      const store = await saveUpdate({
        title: body.update?.title || "",
        category: body.update?.category || "Community News",
        content: body.update?.content || "",
        featuredImage:
          body.update?.featuredImage || "/Recovery_Photos/program-digital.jpg",
        published: body.update?.published ?? true,
        createdAt: body.update?.createdAt || new Date().toISOString(),
      });
      return NextResponse.json(store);
    }

    if (body.action === "updateSubmissionStatus") {
      const nextStore = updateSubmissionStatus(body.id, body.status, body.note);
      return NextResponse.json(nextStore);
    }

    return NextResponse.json({ error: "Unsupported action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
