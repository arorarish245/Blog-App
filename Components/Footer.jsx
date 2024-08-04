import { assets } from '@/Assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around items-center bg-black py-5'>
      <Image src={assets.logo_light} alt="Blogger Logo" width={120} />
      <p className='text-sm text-white mt-4 sm:mt-0'>All rights reserved. Copyright @blogger</p>
      <div className='flex space-x-4 mt-4 sm:mt-0'>
        <Image src={assets.facebook_icon} alt='Facebook' width={40} />
        <Image src={assets.twitter_icon} alt='Twitter' width={40} />
        <Image src={assets.googleplus_icon} alt='Google Plus' width={40} />
      </div>
    </div>
  );
};

export default Footer;
