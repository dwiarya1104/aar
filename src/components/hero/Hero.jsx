import img from "../../assets/pict.png";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center px-5 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl w-full">
        <div className="flex justify-center">
          <img
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="rounded-md md:w-80 w-56 bg-gradient-to-t from-dark to-primary"
            src={img}
            alt="Hero"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1500"
            className="font-bold text-orange md:text-[70px] text-[45px] mt-3 text-blink"
          >
            Dwi Arya Putra
          </h1>
          <h3
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-orange md:text-4xl text-2xl font-thin"
          >
            Fullstack Developer
          </h3>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="text-info opacity-75 font-extralight mt-10 text-sm italic"
          >
            Sometimes you need a <q>break</q>, so you don’t end up in an{" "}
            <q>infinite loop</q> of stress.
          </p>
        </div>
      </div>
    </div>
  );
}
