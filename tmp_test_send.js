async function main() {
  const res = await fetch("http://127.0.0.1:3000/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "test",
      name: "CLI Test",
      email: "test@example.com",
      subject: "API test",
      message: "This is a test message from node script.",
    }),
  });
  const text = await res.text();
  console.log("STATUS", res.status);
  console.log(text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
