import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-[#094C3D] to-[#116955]  text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Us</h3>
          <p>Plot No. 12, ABC Pocket, Sector-08, Uttam Nagar,<br/> New Delhi - 110058</p>
          <p className="flex items-center mt-2">
            <span className="mr-2">📞</span> (+91) 9876543210
          </p>
          <p className="flex items-center mt-2">
            <span className="mr-2">✉️</span> contactedu@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4">Social Media</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" aria-label="Facebook" className=" text-white transition-transform duration-300 transform hover:scale-125">
              <FaFacebookSquare size={30} />
            </a>
            <a href="https://twitter.com" aria-label="X (Twitter)" className=" text-white transition-transform duration-300 transform hover:scale-125">
            <FaSquareXTwitter size={30} />

            </a>
          </div>
        </div>
        <div>
          <img src="/images/footerbot1.png" alt="Robot" className="w-24" />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
