import "../index.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Expertise Hub Foundation",
  description: "Empowering tech ecosystems through partnership and innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
