
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-pink">Virtue</span>
              <span className="text-primary-foreground">Baby</span>
            </h3>
            <p className="text-sm mb-4">
              Dedicated to providing expert prenatal care, parenting resources, and
              community support with Dr. Nitika.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-brand-pink transition-colors">
                  Virtue Baby Store
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-brand-pink transition-colors">
                  Virtues/Sanskaras
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-brand-pink transition-colors">
                  Article
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-brand-pink transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-pink transition-colors">
                  Feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-pink transition-colors">
                  Online Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-pink transition-colors">
                  Baby Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-pink transition-colors">
                  Pregnancy Calculator
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-sm">
              <p className="mb-2 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                virtuebabybydrnitika@gmail.com
              </p>
              <p className="mb-2 flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                08130292616
              </p>
            </address>
            <div className="mt-4">
              <Link
                to="/appointments"
                className="bg-brand-pink text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Virtue Baby by Dr. Nitika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
