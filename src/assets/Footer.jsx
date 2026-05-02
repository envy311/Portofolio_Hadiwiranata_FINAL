import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-32 border-t bg-zinc-900/40 backdrop-blur-md py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Left side */}
        <div>
          <h3 className="text-white font-semibold text-lg">
            © {new Date().getFullYear()} Hadi Wiranata Portofolio
          </h3>
          <p className="text-gray-400 text-sm">
          </p>
        </div>

        {/* Right side - Socials */}
        <div className="flex space-x-5 text-cyan-400 text-2xl">
          <a
            href="https://github.com/envy311"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings/?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWq%2FsHWCTQ56D5f%2F4wd%2Fgag%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/nata_311/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
