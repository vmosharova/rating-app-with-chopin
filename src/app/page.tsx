'use client';

import { useState, useEffect } from 'react';
import { Package, MessageSquare, Star, RotateCcw } from 'lucide-react';

export default function Rating() {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/ratings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productName: productName.trim(),
          productDescription: productDescription.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Rating submitted successfully!');
        setProductName('');
        setProductDescription('');
      } else {
        setMessage(data.error || 'Failed to submit rating');
      }
    } catch (error: any) {
      setMessage(error.message || 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-purple-300 relative">
      {message && (
        <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 p-4 rounded-xl font-medium shadow-lg ${
          message.includes('successfully') 
            ? 'bg-teal-200 text-teal-700 border border-teal-400' 
            : 'bg-rose-100 text-rose-700 border border-rose-400'
          }`}>
            {message}
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl shadow-xl border border-purple-300 overflow-hidden">
            <div className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-900 mb-3">
                    <Package size={16} />
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
                <div className="flex items-center gap-2 text-sm font-semibold text-purple-900 mb-3">
                    <MessageSquare size={16} />
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
                    onClick={handleSubmit}
                    disabled={isSubmitting || !productName.trim() || !productDescription.trim()}
                    className="flex-1 bg-gradient-to-r text-purple-600 bg-slate-50 font-semibold 
                             py-4 px-8 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-lg 
                             hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <Star size={18} />
                    {isSubmitting ? 'Submitting...' : 'Submit Rating'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProductName('');
                      setProductDescription('');
                    }}
                    className="flex-1 sm:flex-none bg-slate-50 text-purple-400 font-semibold 
                             py-4 px-8 rounded-xl hover:bg-slate-100 flex items-center justify-center gap-2"
                  >
                    <RotateCcw size={16} />
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