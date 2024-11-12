import links from "../../utils/links";

function Portfolio() {
  return (
    <section className="min-h-[calc(100svh-56px)] bg-gray-a0 px-4 md:px-10 lg:px-20 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[1000px] mx-auto">
          <div className="w-[85%] mx-auto lg:w-full">
            <h2
              id="projects"
              className="font-bold text-start py-3 text-secondary uppercase text-sm scroll-mt-[80px]"
            >
              Portfolio
            </h2>
            <p className="font-bold text-xl md:text-2xl text-start">Projects</p>
          </div>
          <div className="project-list grid grid-cols-1 grid-rows-2 place-content-center py-10 gap-20">
            <div className="project-card row-start-1 lg:grid grid-cols-2 ">
              <div className="object-cover flex flex-col mx-auto justify-center max-w-[75%] lg:w-full">
                <img
                  src="https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-mobile/cyberden-project_dkkzky.jpg"
                  srcSet="
                  https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-mobile/cyberden-project_dkkzky.jpg 200w,
                  https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-tablet/cyberden-project_dkkzky.jpg 600w,
                  https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-desktop/cyberden-project_dkkzky.jpg 1024w,
                  "
                  alt="Cyber Den website image preview"
                  sizes="(max-width: 1024px) 75vw, 50vw"
                  className="w-full rounded-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="col-start-2 flex flex-col p-4 md:py-10 md:px-20 lg:p-6 items-center justify-center">
                <p className="text-center font-bold text-xl">Cyber Den</p>
                <p className="text-center text-gray-600 mt-6">
                  An E-commerce website inspired by Amazon and Newegg. This
                  website is a fully functional full-stack site that allows
                  users to login/sign up for an account, shop for products, and
                  pay for said items (fake payments of course).
                </p>
                <div className="tags mt-6 flex flex-wrap gap-4 justify-center text-gray-600 font-bold">
                  <div className="text-center">Full-Stack</div>
                  <div className="text-center">React</div>
                  <div className="text-center">MongoDB</div>
                  <div className="text-center">ExpressJS</div>
                </div>
                <div className="flex items-center justify-center gap-8 mt-6">
                  <a
                    href={links["github-cyberden-frontend"]}
                    target="_blank"
                    className="hover:text-secondary focus-visible:text-secondary transition-colors duration-300 hover:fill-secondary focus-visible:fill-secondary"
                  >
                    <div className="flex items-center">
                      <span className="text-lg">Code </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fillRule="evenodd"
                            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                  <a
                    href={links["cyberden"]}
                    target="_blank"
                    className="hover:text-secondary focus-visible:text-secondary transition-colors duration-300 hover:fill-secondary focus-visible:fill-secondary"
                  >
                    <div className="flex items-center">
                      <span className="text-lg">Live Demo </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 64 64"
                        >
                          <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card row-start-2 grid lg:grid-cols-2">
              <div className="flex flex-col p-4 md:py-10 md:px-20 lg:p-6 items-center justify-center order-1 lg:order-none">
                <p className="text-center font-bold text-xl">
                  Clash Fitness Center
                </p>
                <p className="text-center text-gray-600 mt-6">
                  A polished and cleanly presented fake fitness center website
                  where users can join classes, view membership details, and
                  more.
                </p>
                <div className="tags mt-6 flex flex-wrap gap-4 justify-center font-bold text-gray-600">
                  <div className="text-center">Front-End</div>
                  <div className="text-center">React</div>
                  <div className="text-center">Tailwind CSS</div>
                  <div className="text-center">Single Page App</div>
                </div>
                <div className="flex items-center justify-center gap-8 mt-6">
                  <a
                    href={links["github-clash"]}
                    target="_blank"
                    className="hover:text-secondary focus-visible:text-secondary transition-colors duration-300 hover:fill-secondary focus-visible:fill-secondary"
                  >
                    <div className="flex items-center">
                      <span className="text-lg">Code </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fillRule="evenodd"
                            d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                  <a
                    href={links["clash"]}
                    target="_blank"
                    className="hover:text-secondary focus-visible:text-secondary transition-colors duration-300 hover:fill-secondary focus-visible:fill-secondary"
                  >
                    <div className="flex items-center">
                      <span className="text-lg">Live Demo </span>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="28"
                          height="28"
                          viewBox="0 0 64 64"
                        >
                          <path d="M 40 10 C 38.896 10 38 10.896 38 12 C 38 13.104 38.896 14 40 14 L 47.171875 14 L 30.585938 30.585938 C 29.804938 31.366938 29.804938 32.633063 30.585938 33.414062 C 30.976938 33.805063 31.488 34 32 34 C 32.512 34 33.023063 33.805062 33.414062 33.414062 L 50 16.828125 L 50 24 C 50 25.104 50.896 26 52 26 C 53.104 26 54 25.104 54 24 L 54 12 C 54 10.896 53.104 10 52 10 L 40 10 z M 18 12 C 14.691 12 12 14.691 12 18 L 12 46 C 12 49.309 14.691 52 18 52 L 46 52 C 49.309 52 52 49.309 52 46 L 52 34 C 52 32.896 51.104 32 50 32 C 48.896 32 48 32.896 48 34 L 48 46 C 48 47.103 47.103 48 46 48 L 18 48 C 16.897 48 16 47.103 16 46 L 16 18 C 16 16.897 16.897 16 18 16 L 30 16 C 31.104 16 32 15.104 32 14 C 32 12.896 31.104 12 30 12 L 18 12 z"></path>
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="object-cover flex flex-col mx-auto justify-center max-w-[75%] lg:w-full">
                <img
                  src="https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-mobile/clash-project_olruin.png"
                  srcSet="
                  https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-mobile/clash-project_olruin.png 200w,
                  https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-tablet/clash-project_olruin.png 600w,
                  https://res.cloudinary.com/dgio3wn9w/image/upload/t_portfolio-desktop/clash-project_olruin.png 1024w,
                  "
                  alt="Clash Fitness website image preview"
                  sizes="(max-width: 1024px) 75vw, 50vw"
                  className="w-full rounded-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
