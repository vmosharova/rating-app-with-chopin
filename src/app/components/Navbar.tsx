"use client";

import { Wallet } from 'lucide-react';
import { useAddress } from '@chopinframework/react';

export default function Navbar() {
  const { address: chopinAddress, login } = useAddress();

  return (
    <nav className="bg-gradient-to-r from-teal-100 to-purple-300">
      <div className="container px-4 pt-4">
        <div className="flex justify-end items-center h-16">
          <div 
            className={`bg-gradient-to-r from-teal-200 to-purple-500 text-purple-900
                        font-bold py-2 rounded-xl hover:bg-slate-200 transition-all 
                        px-4 sm:px-8 md:px-16 lg:px-20
                        duration-200 ${! chopinAddress ? "animate-bounce transform hover:scale-110" : ""} flex items-center gap-2`}>
            <Wallet size={18} />
            {chopinAddress ? (
              <>
              <span className="hidden sm:inline">Logged in as: {chopinAddress}</span>
              <span className="sm:hidden">
                Logged is as: {chopinAddress.slice(0, 6)}...{chopinAddress.slice(-4)}
              </span>
              </>
            ) : (
              <button onClick={login}>Login</button>
            )} 
          </div>
        </div>
      </div>
    </nav>
  );
}