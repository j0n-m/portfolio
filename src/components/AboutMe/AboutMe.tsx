import codingPicture from "../../assets/images/resources/coding.webp";

function AboutMe() {
  return (
    <section className="min-h-[calc(100svh-80px)] px-4 md:px-10 lg:px-20 py-24">
      <div className="section-container max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 xl:gap-0">
        <div className="flex-1 lg:flex lg:items-center">
          <img
            src={codingPicture}
            alt=""
            className="aspect-auto w-[500px] rounded-md mx-auto"
          />
        </div>
        <div className="flex-1">
          <h2
            id="about"
            className="font-bold text-center py-3 text-secondary uppercase text-sm scroll-mt-[80px]"
          >
            About me
          </h2>
          <p className="font-bold text-2xl md:text-3xl text-center">
            A Dedicated,
            <br />
            Up-and-Coming <br />
            Full Stack Web Developer
          </p>
          <p className="text-gray-500 text-xs mt-1 text-center font-bold mb-5">
            From Kansas City, MO
          </p>
          <div className="text-gray-600">
            <p>
              Hi there, my name is Jonathan, but you can call me Jon, and I'm an
              aspiring Web Developer.
            </p>
            <p className="py-3">
              As an up-and-coming Web Developer, I'm constantly learning and
              gaining valuable experience in many of the modern technologies and
              frameworks. My current tech stack that I work with is the MERN
              stack (MongoDB, ExpressJS, React, and NodeJS) in order to create
              clean and professional-looking web applications.
            </p>
            <p className="">
              Furthermore, I am a team player. I thrive in collaborative team
              environments in which we learn and support each other to be the
              best in our field.
            </p>
            <p className="pt-2">
              For any questions you may have, feel free to{" "}
              <a href="#contact" className="text-secondary">
                email me
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
