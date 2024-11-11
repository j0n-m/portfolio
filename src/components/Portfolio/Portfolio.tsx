function Portfolio() {
  return (
    <section className="min-h-[calc(100svh-56px)] bg-gray-a0 px-4 md:px-10 lg:px-20 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="max-w-[1000px] mx-auto">
          <div className="w-[85%] mx-auto lg:w-full">
            <h2
              id="portfolio"
              className="font-bold text-start py-3 text-secondary uppercase text-sm"
            >
              Portfolio
            </h2>
            <p className="font-bold text-xl md:text-2xl text-start">Projects</p>
          </div>
          <div className="project-list grid grid-cols-1 grid-rows-2 place-content-center py-10 gap-20">
            <div className="project-card row-start-1 lg:grid grid-cols-2 ">
              <div className="w-[400px] h-[400px] bg-gray-400 mx-auto">
                picture
              </div>
              <div className="col-start-2 flex flex-col p-4 md:py-10 md:px-20 lg:p-6 items-center justify-center">
                <p className="text-center font-bold text-xl">Cyber Den</p>
                <p className="text-center text-gray-600 mt-6">
                  An E-commerce website inspired by Amazon and Newegg. This
                  website is a fully functional full-stack site that allows
                  users to login/sign up for an account, shop for products, and
                  pay for said items (fake payments of course).
                </p>
                <div className="tags mt-6 flex gap-4 justify-center">
                  <div className="text-center">Full-Stack</div>
                  <div className="text-center">React</div>
                  <div className="text-center">MongoDB</div>
                  <div className="text-center">ExpressJS</div>
                </div>
                <div className="flex items-center justify-center mt-6">
                  <div>Code (github icon)</div>
                  <div>Live Demo (new window icon)</div>
                </div>
              </div>
            </div>
            <div className="project-card row-start-2 grid lg:grid-cols-2">
              <div>clash fitness</div>
              <div className="w-[400px] h-[400px] bg-gray-400 mx-auto">
                picture
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
