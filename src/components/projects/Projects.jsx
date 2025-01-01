import projects from "../../helpers/projects.json";
import CardProject from "./CardProject";

export default function Projects() {
  return (
    <div className="md:px-20 pt-28 px-5 bg-gradient-to-b from-primary to-dark">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-orange font-bold text-5xl mb-3"
      >
        Recent Projects
      </div>
      <div className="flex flex-col gap-8">
        {projects.map((list, index) => (
          <div key={index}>
            <CardProject data={list} />
          </div>
        ))}
      </div>
    </div>
  );
}
