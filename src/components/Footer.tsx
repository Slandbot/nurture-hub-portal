
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-saffron text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nurture Hub</h3>
            <p className="text-sm mb-4">
              Dedicated to providing expert prenatal care, parenting resources, and
              community support with Dr. Nitika.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-brand-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-brand-white transition-colors">
                  Dr. Nitika's Profile
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-brand-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-brand-white transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brand-white transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-white transition-colors">
                  E-Books
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-white transition-colors">
                  Online Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-white transition-colors">
                  Baby Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-white transition-colors">
                  Calculators
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm">
              <p className="mb-2">Email: info@nurturehub.com</p>
              <p className="mb-2">Phone: +91 1234567890</p>
              <p>Address: Nurture Hub Center, New Delhi, India</p>
            </address>
            <div className="mt-4">
              <Link
                to="/contact"
                className="bg-white text-brand-saffron px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Nurture Hub by Dr. Nitika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
