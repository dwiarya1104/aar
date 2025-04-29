import CardProject from "./CardProject";
import idsc from "../../assets/idsc.png";
import stiqr from "../../assets/stiqr.png";
import mag from "../../assets/mag.png";
import ws from "../../assets/ws.png";
export default function Projects() {
  const projects = [
    {
      title: "STIQR Apps",
      description: "An Application for Small Businesses and Personal Needs",
      image: stiqr,
      list: ["React", "Typescript"],
    },
    {
      title: "idSmartcare",
      description: "Application for Pharmacy and Clinic",
      image: idsc,
      list: ["React", "Laravel", "Tailwind"],
    },
    {
      title: "CMS MAG",
      description: "A Content Management Application for Mobile Apps",
      image: mag,
      list: ["Laravel", "JQuery", "Bootstrap"],
    },
    {
      title: "WorkSpace",
      description: "An Application for Managing Office Needs",
      image: ws,
      list: ["Laravel", "Bootstrap"],
    },
  ];

  return (
    <div className="md:px-52 pt-28 px-5 bg-gradient-to-b from-dark via-primary to-dark">
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="text-orange font-bold md:text-5xl md:text-start text-center text-4xl mb-3"
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
