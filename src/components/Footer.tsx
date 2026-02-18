import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-footer-dark via-primary-blue to-footer-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-blue rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="group">
            <Link to="/" className="flex items-center space-x-3 mb-6 hover:scale-105 transition-transform">
              <img
                src="/esslogo.png"
                alt="ES Structural Consultant"
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xl leading-tight">
                  ES Structural
                </span>
                <span className="text-accent-green text-xs font-semibold">Consultant</span>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              Engineering strong structures for a sustainable tomorrow since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-accent-green rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center">
              Quick Links
              <div className="h-1 w-12 bg-accent-green ml-3 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-accent-green transition-all duration-300 inline-flex items-center group">
                  <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-accent-green transition-all duration-300 inline-flex items-center group">
                  <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-gray-300 hover:text-accent-green transition-all duration-300 inline-flex items-center group">
                  <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-300 hover:text-accent-green transition-all duration-300 inline-flex items-center group">
                  <ArrowRight size={14} className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center">
              Services
              <div className="h-1 w-12 bg-accent-green ml-3 rounded-full"></div>
            </h3>
            <ul className="space-y-3">
              <li className="text-sm text-gray-300 hover:text-accent-green transition-colors cursor-pointer flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                Structural Design & Analysis
              </li>
              <li className="text-sm text-gray-300 hover:text-accent-green transition-colors cursor-pointer flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                Precast Concrete Engineering
              </li>
              <li className="text-sm text-gray-300 hover:text-accent-green transition-colors cursor-pointer flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                Industrial Buildings
              </li>
              <li className="text-sm text-gray-300 hover:text-accent-green transition-colors cursor-pointer flex items-start">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                Bridges & Infrastructure
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center">
              Contact
              <div className="h-1 w-12 bg-accent-green ml-3 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center group-hover:bg-accent-green transition-all duration-300 flex-shrink-0">
                  <Phone size={18} className="text-accent-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Phone</p>
                                  <span className="text-sm text-gray-300 group-hover:text-accent-green transition-colors">+91 98658 03764</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center group-hover:bg-accent-green transition-all duration-300 flex-shrink-0">
                  <Mail size={18} className="text-accent-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Email</p>
                                  <span className="text-sm text-gray-300 group-hover:text-accent-green transition-colors">prabhu@esstruc.com</span>
                </div>
              </li>
              <li className="flex items-start space-x-3 group cursor-pointer">
                <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center group-hover:bg-accent-green transition-all duration-300 flex-shrink-0">
                  <MapPin size={18} className="text-accent-green group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Location</p>
                                  <span className="text-sm text-gray-300 group-hover:text-accent-green transition-colors">B167, 12th Cross Street, <br />Jawahar Nagar, NGO A Colony, Palayamkottai,<br /> Tirunelveli – 627007</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div>
              <h4 className="font-heading font-bold text-xl mb-2">Ready to Start Your Project?</h4>
              <p className="text-sm text-gray-300">Let's discuss how we can help bring your vision to life.</p>
            </div>
            <Link to="/contact">
              <button className="px-8 py-4 bg-accent-green text-primary-text font-bold rounded-lg hover:bg-opacity-90 hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 group">
                <span>Get Started</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 ES Structural Consultant. All rights reserved. Crafted with precision.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-sm text-gray-400 hover:text-accent-green transition-all duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link to="/contact" className="text-sm text-gray-400 hover:text-accent-green transition-all duration-300 relative group">
                Terms of Service
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-green group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
