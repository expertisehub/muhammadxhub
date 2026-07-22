import { DatabaseSync } from "node:sqlite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "data", "admin.db");

function getDb() {
  const db = new DatabaseSync(dbPath);
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY,
      type TEXT NOT NULL,
      category TEXT NOT NULL,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      subject TEXT,
      message TEXT NOT NULL,
      extra TEXT,
      status TEXT NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS updates (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      category TEXT NOT NULL,
      content TEXT NOT NULL,
      featuredImage TEXT,
      published INTEGER NOT NULL,
      createdAt TEXT NOT NULL,
      updatedAt TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS content (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
  return db;
}

function parseJson(value, fallback = {}) {
  if (!value) return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function toJson(value) {
  return JSON.stringify(value);
}

export function readAdminStore() {
  const db = getDb();
  const submissions = db
    .prepare("SELECT * FROM submissions ORDER BY createdAt DESC")
    .all();
  const updates = db
    .prepare("SELECT * FROM updates ORDER BY createdAt DESC")
    .all();
  const contentRows = db.prepare("SELECT key, value FROM content").all();

  const content = Object.fromEntries(
    contentRows.map((row) => [row.key, parseJson(row.value)]),
  );

  return {
    submissions: submissions.map((row) => ({
      ...row,
      extra: parseJson(row.extra),
      published: undefined,
    })),
    updates: updates.map((row) => ({
      ...row,
      published: Boolean(row.published),
    })),
    content: {
      heroTitle:
        content.heroTitle ||
        "Building practical skills for young people across Northern Nigeria",
      heroSummary:
        content.heroSummary ||
        "Expertise Hub Foundation equips learners with mentorship, training, and community outreach that lead to practical opportunity.",
      impactHeadline:
        content.impactHeadline || "Real impact across programs and communities",
      impactSummary:
        content.impactSummary ||
        "Every update, partnership request, and volunteer submission strengthens the evidence behind our work.",
      primaryMetricLabel: content.primaryMetricLabel || "Youth empowered",
      primaryMetricValue: content.primaryMetricValue || "5,000+",
      featuredImage:
        content.featuredImage || "/Recovery_Photos/program-digital.jpg",
    },
  };
}

export function writeAdminStore(nextStore) {
  const db = getDb();
  db.exec("DELETE FROM submissions");
  db.exec("DELETE FROM updates");
  db.exec("DELETE FROM content");

  const insertSubmission = db.prepare(`
    INSERT INTO submissions (id, type, category, name, email, subject, message, extra, status, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const item of nextStore.submissions || []) {
    insertSubmission.run(
      item.id,
      item.type,
      item.category,
      item.name,
      item.email,
      item.subject || "",
      item.message || "",
      toJson(item.extra || {}),
      item.status || "Pending",
      item.createdAt || new Date().toISOString(),
      item.updatedAt || new Date().toISOString(),
    );
  }

  const insertUpdate = db.prepare(`
    INSERT INTO updates (id, title, category, content, featuredImage, published, createdAt, updatedAt)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const item of nextStore.updates || []) {
    insertUpdate.run(
      item.id,
      item.title,
      item.category,
      item.content,
      item.featuredImage || "",
      item.published ? 1 : 0,
      item.createdAt || new Date().toISOString(),
      item.updatedAt || new Date().toISOString(),
    );
  }

  const insertContent = db.prepare(
    `INSERT INTO content (key, value) VALUES (?, ?)`,
  );
  for (const [key, value] of Object.entries(nextStore.content || {})) {
    insertContent.run(key, toJson(value));
  }

  return nextStore;
}

export function appendSubmission(submission) {
  const store = readAdminStore();
  const enriched = {
    ...submission,
    id: submission.id || `submission-${Date.now()}`,
    status: submission.status || "Pending",
    createdAt: submission.createdAt || new Date().toISOString(),
    updatedAt: submission.updatedAt || new Date().toISOString(),
  };
  const nextStore = {
    ...store,
    submissions: [enriched, ...(store.submissions || [])],
  };
  writeAdminStore(nextStore);
  return nextStore;
}

export function saveContent(content) {
  const store = readAdminStore();
  const nextStore = {
    ...store,
    content: {
      ...store.content,
      ...content,
    },
  };
  writeAdminStore(nextStore);
  return nextStore;
}

export function saveUpdate(update) {
  const store = readAdminStore();
  const nextStore = {
    ...store,
    updates: [
      {
        ...update,
        id: update.id || `update-${Date.now()}`,
        createdAt: update.createdAt || new Date().toISOString(),
        updatedAt: update.updatedAt || new Date().toISOString(),
      },
      ...(store.updates || []),
    ],
  };
  writeAdminStore(nextStore);
  return nextStore;
}

export function updateSubmissionStatus(id, status, note) {
  const store = readAdminStore();
  const nextStore = {
    ...store,
    submissions: (store.submissions || []).map((item) => {
      if (item.id !== id) return item;
      const history = Array.isArray(item.history) ? item.history : [];
      return {
        ...item,
        status,
        updatedAt: new Date().toISOString(),
        history: [
          ...history,
          {
            status,
            note: note || "Status updated",
            at: new Date().toISOString(),
          },
        ],
      };
    }),
  };
  writeAdminStore(nextStore);
  return nextStore;
}
