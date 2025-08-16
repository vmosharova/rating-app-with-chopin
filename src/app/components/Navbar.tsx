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
                        font-bold px-20 py-2 rounded-xl hover:bg-slate-200 transition-all 
                        duration-200 ${! chopinAddress ? "animate-bounce transform hover:scale-110" : ""} flex items-center gap-2`}>
            <Wallet size={18} />
            {chopinAddress ? (
              <div>Logged in as: {chopinAddress}</div>
            ) : (
              <button onClick={login}>Login</button>
            )} 
          </div>
        </div>
      </div>
    </nav>
  );
}