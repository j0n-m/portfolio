import navItems from "../../utils/navItems";
import HamburgerMenu from "./HamburgerMenu";

function Nav() {
  return (
    <nav className="py-3 px-6 sticky top-0 bg-white shadow-md">
      <ul className="flex">
        <li>
          <a href="/">
            <div className="logo p-2 font-bold text-[1.25rem]">Jon.dev</div>
          </a>
        </li>
        <li className="ml-auto flex items-center">
          <div className="hidden lg:flex lg:gap-3">
            {navItems.map((link) => (
              <a href={link.href} key={link.id} className="flex items-center">
                <div className="p-3 font-bold text-black-a0 hover:text-secondary transition-colors duration-300">
                  {link.label}
                </div>
              </a>
            ))}
          </div>
          <div className="mobile-menu lg:hidden">
            <HamburgerMenu />
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
