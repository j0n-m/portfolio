import links from "../../utils/links";
import navItems from "../../utils/navItems";

function Footer() {
  return (
    <footer className="bg-slate-800 text-gray-50 font-sans">
      <div className="flex flex-col justify-center items-center py-8">
        <p className="my-5 text-lg italic">Jonathan Monarrez, Web Developer</p>
        <div className="flex gap-4">
          {navItems.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className="hover:text-blue-400 focus-visible:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4 my-3">
          <a
            href={links["github"]}
            className="hover:underline focus-visible:underline underline-offset-2"
          >
            GitHub
          </a>
          <a
            href={links["linkedin"]}
            className="hover:underline focus-visible:underline underline-offset-2"
          >
            LinkedIn
          </a>
        </div>
        <p className="my-5">&copy; 2024 | Jon Monarrez</p>
      </div>
    </footer>
  );
}

export default Footer;
