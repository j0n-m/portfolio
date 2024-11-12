import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import navItems from "../../utils/navItems";

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <DialogTrigger isOpen={showMenu} onOpenChange={setShowMenu}>
      <Button
        className={({ isHovered, isFocusVisible, isPressed }) =>
          `menu-btn h-full p-1 rounded-sm transition-colors duration-300 ${
            isHovered || isPressed
              ? "text-secondary"
              : isFocusVisible
              ? "outline outline-blue-600"
              : ""
          }`
        }
      >
        <MenuIcon aria-label="Menu" className="" size={28} strokeWidth={2} />
      </Button>
      <ModalOverlay className="menu-overlay z-40 fixed inset-0 bg-transparent">
        <Modal
          isDismissable={true}
          className="menu-modal z-50 bg-white fixed inset-0"
        >
          <Dialog className="relative z-50 min-h-svh flex items-center justify-center outline-none">
            {({ close }) => (
              <>
                <div className="absolute top-0 right-2 p-4 z-50">
                  <Button
                    aria-label="Close Menu"
                    className={({ isFocusVisible, isHovered }) =>
                      `p-1 transition-colors duration-300 rounded-sm ${
                        isFocusVisible ? "outline" : ""
                      } ${isHovered || isFocusVisible ? "text-secondary" : ""}`
                    }
                    onPress={close}
                  >
                    <XIcon size={28} strokeWidth={1.5} />
                  </Button>
                </div>
                <div className="nav-links flex justify-center items-center overflow-hidden">
                  <ul className="text-center flex flex-col gap-6 py-2">
                    {navItems.map((link) => (
                      <li
                        autoFocus={link.id === 100}
                        key={link.id}
                        className="py-2 px-4 text-2xl font-bold text-black-a0"
                      >
                        <a
                          onClick={() => setShowMenu(false)}
                          href={link.href}
                          className="py-1 px-3 hover:text-secondary focus-visible:text-secondary transition-colors duration-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export default HamburgerMenu;
