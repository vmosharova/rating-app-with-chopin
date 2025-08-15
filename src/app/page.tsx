'use client';

import { useState } from 'react';

export default function RatingApp() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-blue to-purple-300">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl shadow-xl border border-purple-300 overflow-hidden">
            <div className="p-8 md:p-12">
              <form className="space-y-8">
                <div
                className="block text-sm font-semibold text-purple-900 mb-3"
                >
                    Product Name
                </div>
                <input
                    type="text"
                    id="productName"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter product name..."
                    className="w-full px-4 py-4 text-purple-800 bg-slate-50 border border-slate-200 rounded-xl 
                                focus:outline-none focus:ring-2 focus:ring-purple-300
                                transition-all duration-200 placeholder:text-slate-400"
                />
                <div 
                    className="block text-sm font-semibold text-purple-900 mb-3"
                >
                    Product Description & Review
                </div>
                <textarea
                    id="productDescription"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    placeholder="Describe the product and share your experience..."
                    rows={6}
                    className="w-full px-4 py-4 text-purple-800 bg-slate-50 border border-slate-200 rounded-xl 
                                focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent 
                                transition-all duration-200 placeholder:text-slate-400 resize-none"
                    />
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-r from-teal-300 to-purple-800 text-teal-50 font-semibold 
                             py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg 
                             hover:shadow-xl"
                  >
                    Submit Rating
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProductName('');
                      setProductDescription('');
                    }}
                    className="flex-1 sm:flex-none bg-teal-50 text-purple-500 font-semibold 
                             py-4 px-8 rounded-xl hover:bg-slate-200"
                  >
                    Clear
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}