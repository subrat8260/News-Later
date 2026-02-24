import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 border-t mt-10 px-6 py-10">
        <h3 className="text-2xl font-bold mb-2">News Later</h3>

        <h5 className="text-gray-600 mb-6 max-w-xl">
          Join our newsletter to stay up to date on News and releases.
        </h5>

        <div className="mb-10">
          <form className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>

          <h6 className="text-sm text-gray-500 mt-3 max-w-md">
            By subscribing you agree to with our Privacy Policy and provide
            consent to receive updates from our company.
          </h6>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Company</h3>
            <Link className="text-gray-600 hover:text-black" to="#">
              About us
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              Careers
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              Our Team
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              Investors
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              News
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Platform</h3>
            <Link className="text-gray-600 hover:text-black" to="#">
              Analytics
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              Automation
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              Integrations
            </Link>
            <Link className="text-gray-600 hover:text-black" to="#">
              API
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg mb-2">Social</h3>

            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              to="#"
            >
              <FaSquareFacebook /> Facebook
            </Link>

            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              to="#"
            >
              <FaInstagramSquare /> Instagram
            </Link>

            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              to="#"
            >
              <FaTwitter /> Twitter
            </Link>

            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              to="#"
            >
              <FaLinkedin /> LinkedIN
            </Link>

            <Link
              className="flex items-center gap-2 text-gray-600 hover:text-black"
              to="#"
            >
              <FaYoutube /> Youtube
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
