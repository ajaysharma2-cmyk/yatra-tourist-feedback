import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import Facebook from '../assets/social/facebook.png';
import InstaGram from '../assets/social/instagram.png';
import Youtube from '../assets/social/youtube.png';
import LinkedIn from '../assets/social/linkedin.png';

const SocialIcons: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center my-5">
      <p className="text-[16px] text-[#666666] mb-5 font-lato">FOLLOW US ON</p>

      <div className="flex gap-4">
        <a href="https://facebook.com" className="text-black" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" className="w-[30px] h-[30px]" />
        </a>
        <a href="https://instagram.com" className="text-black" target="_blank" rel="noopener noreferrer">
          <img src={InstaGram} alt="Instagram" className="w-[30px] h-[30px]" />
        </a>
        <a href="https://youtube.com" className="text-black" target="_blank" rel="noopener noreferrer">
          <img src={Youtube} alt="YouTube" className="w-[30px] h-[30px]" />
        </a>
        <a href="https://linkedin.com" className="text-black" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="LinkedIn" className="w-[30px] h-[30px]" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
