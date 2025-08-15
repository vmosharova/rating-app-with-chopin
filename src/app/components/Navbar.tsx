export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-teal-100 to-purple-300">
      <div className="container px-4 pt-4">
        <div className="flex justify-end items-center h-16">
          <button className="bg-gradient-to-r from-teal-200 to-purple-600 text-teal-50 font-bold px-20 py-2 rounded-xl hover:bg-slate-200 transition-all duration-200 animate-bounce transform hover:scale-110">
            Login via wallet
          </button>
        </div>
      </div>
    </nav>
  );
}