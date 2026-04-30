import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        
        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Hadi Wiranata
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-10 font-semibold">
          <li><a href="#home" className="hover:text-cyan-400">Home</a></li>
          <li><a href="#about" className="hover:text-cyan-400">About</a></li>
          <li><a href="#project" className="hover:text-cyan-400">Project</a></li>
          <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl transition-transform duration-300"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 bg-zinc-900 text-white font-semibold">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#project" onClick={() => setOpen(false)}>Project</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Kontak</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;