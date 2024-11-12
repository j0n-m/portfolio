import { CopyIcon, MailIcon } from "lucide-react";
import { useState } from "react";
import { Button, Tooltip, TooltipTrigger } from "react-aria-components";
import links from "../../utils/links";

function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [email] = useState("jon.monarrez10@gmail.com");
  const [showClipboardOverlay, setShowClipboardOverlay] = useState(false);
  const [clipboardToolTipText, setClipboardToolTipText] =
    useState("Copy email");

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(email);
    setShowClipboardOverlay(true);
    setClipboardToolTipText("Copied");
    setTimeout(() => {
      setShowClipboardOverlay(false);
      setClipboardToolTipText("Copy email");
    }, 2000);
  };

  return (
    <section className="min-h-[calc(100svh-56px)] px-4 md:px-10 lg:px-20 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[1000px] mx-auto">
          <div className="w-[85%] mx-auto lg:w-full">
            <h2
              id="contact"
              className="font-bold text-start py-3 text-secondary uppercase text-sm scroll-mt-[80px]"
            >
              Contact
            </h2>
            <p className="font-bold text-xl md:text-2xl text-start">
              Feel free to reach out to me.
            </p>
            <div className="mt-8">
              <div className="mail w-max grid grid-cols-[repeat(2,max-content)] gap-3 my-6">
                <div className="border-2 p-2 rounded-full border-black-a0">
                  <MailIcon size={20} className="" />
                </div>
                <div className="flex items-center flex-wrap whitespace-pre text-sm md:text-base">
                  {showEmail ? (
                    <div
                      className={`flex flex-wrap items-center relative gap-1`}
                    >
                      <span>{email}</span>
                      <TooltipTrigger
                        delay={250}
                        isOpen={showClipboardOverlay}
                        onOpenChange={setShowClipboardOverlay}
                      >
                        <Button
                          onPress={handleCopyEmail}
                          className={({
                            isFocusVisible,
                            isHovered,
                            isPressed,
                            isFocused,
                          }) =>
                            `select-none text-gray-t0 transition-colors p-1 duration-500 ${
                              isFocusVisible
                                ? "outline outline-secondary text-secondary"
                                : isHovered || isPressed || isFocused
                                ? "text-secondary"
                                : ""
                            }`
                          }
                        >
                          <CopyIcon size={16} strokeWidth={3} className="" />
                        </Button>
                        <Tooltip
                          placement="bottom"
                          offset={6}
                          className={
                            "bg-gray-200 px-2 py-1 rounded-lg shadow-md"
                          }
                        >
                          {clipboardToolTipText}
                        </Tooltip>
                      </TooltipTrigger>
                    </div>
                  ) : (
                    <button
                      className="underline underline-offset-2 focus-visible:outline outline-secondary hover:text-secondary focus-visible:text-secondary"
                      onClick={() => setShowEmail(true)}
                    >
                      Show E-mail
                    </button>
                  )}
                </div>
              </div>
              <div className="linkedin w-max grid grid-cols-[repeat(2,max-content)] gap-3 my-4">
                <div className="border-2 p-2 rounded-full border-black-a0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </div>
                <a
                  href={links["linkedin"]}
                  target="_blank"
                  className="flex items-center hover:text-secondary focus-visible:text-secondary hover:fill-secondary focus-visible:fill-secondary transition-colors duration-300 underline underline-offset-2"
                >
                  <p className="flex items-center gap-1">
                    Jonathan M.
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="22"
                        height="22"
                        viewBox="0 0 64 64"
                      >
                        <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                      </svg>
                    </span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
