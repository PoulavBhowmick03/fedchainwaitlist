import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import braavosLogo from '../app/braavos.svg'; 
import windowsLogo from '../app/windows.png';
import Playstore from '../app/playstore.png';

const DownloadBraavosWallet = () => {
  return (
    <div className="rounded-lg shadow-md text-center">
        <h2 className="text-2xl sm:text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-blue-900 mb-2">
        Download the Braavos Wallet
      </h2>
      <div className="flex justify-between items-center gap-7 sm:gap-40">
        <div className="flex flex-col items-center">
          <Image src={windowsLogo} width={50} height={50} alt="Windows" />
          <a href="https://www.braavos.com/windows-download">
            <div className="text-blue-600 dark:text-blue-400 font-semibold mt-2">Download for Windows</div>
          </a>
        </div>
        <div className="flex flex-col items-center">
          <Image src={Playstore} width={50} height={50} className='' alt="Playstore" />
          <a href="https://play.google.com/store/apps/details?id=com.braavos">
            <div className="text-blue-600 dark:text-blue-400 font-semibold mt-2">Download on Playstore</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadBraavosWallet;
