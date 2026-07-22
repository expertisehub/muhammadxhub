export function getAdminCredentials() {
  const email =
    process.env.NEXT_PUBLIC_ADMIN_EMAIL?.trim() ||
    process.env.ADMIN_EMAIL?.trim() ||
    "";
  const password =
    process.env.NEXT_PUBLIC_ADMIN_PASSWORD?.trim() ||
    process.env.ADMIN_PASSWORD?.trim() ||
    "";

  return {
    email,
    password,
  };
}

export function getAdminProfile() {
  const { email } = getAdminCredentials();
  const configuredName = (
    process.env.NEXT_PUBLIC_ADMIN_NAME ||
    process.env.ADMIN_NAME ||
    ""
  ).trim();
  const configuredRole = (
    process.env.NEXT_PUBLIC_ADMIN_ROLE ||
    process.env.ADMIN_ROLE ||
    ""
  ).trim();

  const fallbackName = email
    ? email.split("@")[0].replace(/[._-]+/g, " ")
    : "Administrator";
  const name = configuredName || fallbackName;
  const role = configuredRole || "Operations Lead";

  return {
    email,
    name: name.replace(/\b\w/g, (char) => char.toUpperCase()),
    role,
  };
}
