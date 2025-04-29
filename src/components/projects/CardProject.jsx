import Tools from "./Tools";

export default function CardProject({ data }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className=" p-10 rounded-2xl md:h-[350px] card-grainy card-shine-effect shadow-white shadow-sm bg-primary my-5 relative overflow-hidden"
    >
      <div className="card-body">
        <div className="hero">
          <div className="hero-content grid md:grid-cols-2 grid-cols-1 md:relative">
            <div className="flex flex-col justify-between pb-10 mt-3">
              <h1 className="md:text-4xl text-3xl font-bold text-white">
                {data.title}
              </h1>
              <p className="py-3 text-white text-sm font-thin opacity-70 md:pr-10 mt-5">
                {data.description}
              </p>
              <div className="grid md:grid-cols-4 grid-cols-2 gap-2">
                {data.list &&
                  data.list.map((list, index) => (
                    <Tools key={index} tools={list} />
                  ))}
              </div>
            </div>
            <img
              src={data.image}
              className="md:max-w-md rounded-lg shadow-3xl md:absolute right-0 md:mt-20  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
