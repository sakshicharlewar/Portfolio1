import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Sakshi Charlewar. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
