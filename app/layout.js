import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Frontend app using Next.js",
  description: "Generated the app to show my skils",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}