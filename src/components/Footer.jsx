import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
        <p className="text-gray-400 mb-6">
          Join our community to receive the latest updates and insights into membership management.
        </p>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Nextcent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
