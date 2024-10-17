import Category from "./components/Category";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import TopSellingCourses from "./components/TopSellingCourses";
import "./globals.css";

export const metadata = {
  title: "Frontend app using Next.js",
  description: "Generated the app to show my skils",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="content min-h-screen shadow-inner shadow-[#F8E2B4]" >
        <HomePage/>
        <TopSellingCourses/>
        <Category/>
        </div>
        <Footer />
      </body>
    </html>
  );
}