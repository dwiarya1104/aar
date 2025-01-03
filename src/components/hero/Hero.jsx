import img from "../../assets/pict.png";
import cv from "../../assets/CV - Dwi Arya Putra.pdf";


export default function Hero() {
  return (
    <div className="md:px-20 px-5">
      <div className="relative p-2">
        <div className="relative flex flex-col justify-center items-center z-10 pt-20">
          <img
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="rounded-full md:w-80 w-56  bg-gradient-to-r from-dark to-primary"
            src={img}
            alt="Hero"
          />
          <div className="flex flex-col text-center">
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="font-bold text-orange md:text-[90px] text-[50px] mt-3 text-blink"
            >
              Dwi Arya Putra
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-orange md:text-4xl text-2xl font-thin"
            >
              Fullstack Developer
            </h3>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-white font-extralight mt-20 text-start"
            >
              I am an experienced full-stack developer specializing in creating
              scalable and efficient web applications and software solutions. As
              an active student at Indraprasta PGRI University, I am
              continuously enhancing my skills in computer science and emerging
              technologies. I am adept at addressing challenges that arise
              during the development process and finding effective solutions.
              Additionally, I excel in collaborative environments and enjoy
              engaging in discussions to determine the best approaches for
              completing each project.
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              id="button-resume"
              className="hover:cursor-pointer w-36 mt-3"
            >
              <span className="spark__container">
                <span className="spark" />
              </span>
              <span className="backdrop" />
              <span className="text">
                <a href={cv} download="Resume - Dwi Arya Putra.pdf">My Resume</a> 
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
