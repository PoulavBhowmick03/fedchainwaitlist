import { ButtonBody } from "@/components/Button";
import { SignupForm } from "@/components/Form";
import { Header } from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import starknet from "./starknet-token-strk-logo.png"
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-between relative dark:bg-gray-950 bg-white dark:bg-dot-white/[0.3] bg-dot-black/[0.3] overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      
      <Navbar />

      <div className="flex-grow flex flex-col items-center justify-center z-10 px-4">
        
        <p className="text-5xl sm:text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-blue-900 m-3 mb-2">
          Signup to start earning
        </p>
        
        <p className="text-2xl sm:text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 p-2 mb-4 flex items-center justify-center">
          Get a chance to win 1
          <Image src={starknet} width={40} height={40} alt="" className="ml-2" />
        </p>
        
        <SignupForm />
      </div>

      <footer className="text-center text-white text-sm pb-4 z-10">
        © 2024 FedChain. All rights reserved.
      </footer>
    </div>
  );
}


