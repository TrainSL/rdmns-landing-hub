
import { Mail, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-rdmns-dark/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-rdmns-dark">RDMNS.LK</h3>
            <p className="text-rdmns-gray mb-4 text-pretty">
              Experience the future of mobile applications with our intuitive and powerful platform.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-rdmns-gray hover:text-rdmns-blue transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-rdmns-gray hover:text-rdmns-blue transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-rdmns-gray hover:text-rdmns-blue transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:contact@rdmns.lk" 
                className="text-rdmns-gray hover:text-rdmns-blue transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rdmns-dark">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rdmns-dark">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rdmns-dark">Get the App</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  iOS App
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Android App
                </a>
              </li>
              <li>
                <a href="#" className="text-rdmns-gray hover:text-rdmns-blue transition-colors">
                  Feature Requests
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-rdmns-dark/5 text-center text-rdmns-gray">
          <p>© {currentYear} RDMNS.LK. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
