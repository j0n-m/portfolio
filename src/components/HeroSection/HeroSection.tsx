import links from "../../utils/links";

function HeroSection() {
  return (
    <section className="hero min-h-[calc(100svh-56px)] bg-gray-a0 px-4 md:px-10 lg:px-20 py-24">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="heading-section text-4xl md:text-5xl font-bold text-center">
          <span>Aspiring Full-Stack</span>
          <br />
          <span className="mt-2 inline-block">Web Developer</span>
        </h1>
        <p className="intro-section-1 text-gray-t0 text-center my-6 text-lg">
          Hello, I'm Jon Monarrez.
        </p>
        <p className="intro-section-2 mt-[-1rem] text-gray-t0 text-center my-6 text-lg">
          I am passionate and eager to learn when it comes to Web Developement.
        </p>
        <div className="icon-section flex gap-6 my-12 justify-center items-center">
          <a
            href={links["linkedin"]}
            target="_blank"
            className=""
            title="LinkedIn Profile"
          >
            <div className="linkedin-icon size-8 hover:scale-110 transition-all duration-300"></div>
          </a>
          <a
            href={links["github"]}
            target="_blank"
            className=""
            title="Github Profile"
          >
            <div className="github-icon size-8 hover:scale-110 transition-all duration-300"></div>
          </a>
        </div>
        <div className="tech-section mt-12 lg:mt-20 flex flex-col items-center justify-center py-6">
          <p className="tech-section-label mb-6 w-max text-lg font-bold relative py-1 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-[30%] after:bg-secondary after:rounded-lg after:transition-all after:duration-500">
            Tech Stack
          </p>
          <div className="tech-stack">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
              <img
                src="https://skillicons.dev/icons?i=js,ts"
                alt="Javascript & Typescript"
                title="Javascript & Typescript"
                className="hover:-translate-y-1 transition-all duration-300"
              />
              <img
                src="https://skillicons.dev/icons?i=react,tailwind"
                alt="ReactJS & Tailwind CSS"
                title="ReactJS & Tailwind CSS"
                className="hover:-translate-y-1 transition-all duration-300"
              />
              <img
                src="https://skillicons.dev/icons?i=html,css"
                alt="HTML 5 & CSS 3"
                title="HTML 5 & CSS 3"
                className="hover:-translate-y-1 transition-all duration-300"
              />
              <img
                src="https://skillicons.dev/icons?i=mongodb,express"
                alt="MongoDB & Express JS"
                title="MongoDB & Express JS"
                className="hover:-translate-y-1 transition-all duration-300"
              />
              <img
                src="https://skillicons.dev/icons?i=git,"
                alt="Git"
                title="Git"
                className="hover:-translate-y-1 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
