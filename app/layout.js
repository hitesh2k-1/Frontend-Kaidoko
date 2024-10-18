import BlendedLearning from "./components/BlendedLearning";
import Category from "./components/Category";
import ChatBot from "./components/ChatBot";
import Collaborations from "./components/Collaborations";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import TopSelling from "./components/TopSelling";
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
        <Navbar />
        <div className="content min-h-screen shadow-inner shadow-[#F8E2B4]" >
          <HomePage />
          <TopSellingCourses />
          <Category />
          <TopSelling />
          <Collaborations />
          <BlendedLearning />
          <Testimonials />
          <ChatBot />
        </div>
        <Footer />
      </body>
    </html>
  );
}