import {
  appendSubmission as appendSubmissionDb,
  readAdminStore as readAdminStoreDb,
  saveContent as saveContentDb,
  saveUpdate as saveUpdateDb,
  updateSubmissionStatus as updateSubmissionStatusDb,
  writeAdminStore as writeAdminStoreDb,
} from "./admin-db.js";

export function readAdminStore() {
  return readAdminStoreDb();
}

export function writeAdminStore(nextStore) {
  return writeAdminStoreDb(nextStore);
}

export function appendSubmission(submission) {
  return appendSubmissionDb(submission);
}

export function saveContent(content) {
  return saveContentDb(content);
}

export function saveUpdate(update) {
  return saveUpdateDb(update);
}

export function updateSubmissionStatus(id, status, note) {
  return updateSubmissionStatusDb(id, status, note);
}
