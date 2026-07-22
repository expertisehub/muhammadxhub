import "../index.css";
import SiteShell from "../components/SiteShell";

export const metadata = {
  title: "Expertise Hub Foundation",
  description: "Empowering tech ecosystems through partnership and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
