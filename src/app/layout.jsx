import "../index.css";
<<<<<<< HEAD
import Header from "../components/Header";
import Footer from "../components/Footer";
=======
import SiteShell from "../components/SiteShell";
>>>>>>> e15cd74 (Admin commit)

export const metadata = {
  title: "Expertise Hub Foundation",
  description: "Empowering tech ecosystems through partnership and innovation.",
};

export default function RootLayout({ children }) {
  return (
<<<<<<< HEAD
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
=======
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <SiteShell>{children}</SiteShell>
>>>>>>> e15cd74 (Admin commit)
      </body>
    </html>
  );
}
