import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Twitter, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-white pt-12 pb-8 z-40">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

  
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              
              <img src="/assets/logo.png" className='h-8 w-8' alt="logo" />
              <span className="text-2xl font-bold gradient-text">Bubble.IO</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
               A simple and interactive web application to install, uninstall, and manage apps seamlessly.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-white hover:text-secondary transition"><Twitter /></Link>
              <Link to="#" className="text-white hover:text-secondary transition"><Facebook /></Link>
              <Link to="#" className="text-white hover:text-secondary transition"><Instagram /></Link>
              <Link to="#" className="text-white hover:text-secondary transition"><Linkedin /></Link>
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4 gradient-text">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white hover:text-secondary transition">Home</Link></li>
              <li><Link to="/apps" className="text-white hover:text-secondary transition">Apps</Link></li>
              <li><Link to="/about" className="text-white hover:text-secondary transition">About </Link></li>
              <li><Link to="/installation" className="text-white hover:text-secondary transition">Installed</Link></li>
              <li><Link to="/contact" className="text-white hover:text-secondary transition">Contact</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4 gradient-text">Technologies</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white">React.js</span></li>
              <li><span className="text-white">Node.js</span></li>
              <li><span className="text-white">Tailwind CSS</span></li>
              <li><span className="text-white">Next.js</span></li>
              <li><span className="text-white">MongoDB</span></li>
            </ul>
          </div>

      
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4 gradient-text">Contact Me</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center text-white"><Mail className="w-4 h-4 mr-2" /> hello@projecthub.com</p>
              <p className="flex items-center text-white"><Phone className="w-4 h-4 mr-2" /> +88 (019) 123-45657</p>
              <p className="flex items-center text-white"><MapPin className="w-4 h-4 mr-2" /> Jashore, Bangladesh</p>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-2">Subscribe for Updates</h4>
              <form className="flex flex-col flex-wrap lg:flex-row gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 rounded-md text-white text-sm focus:outline-none focus:ring-2 border border-orange-400 focus:ring-secondary bg-[#001931]"
                />
                <button
                  type="submit"
                  className="gradient-bg text-white px-4 py-2 rounded-md font-semibold   text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>


        <div className="border-t border-blue-800 pt-6 mt-8 text-center text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2025 ProjectHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition">Cookie Policy</Link>
            </div>
            <p>Developed By Biplob Sordar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
