import CardProject from "./CardProject";
import idsc from "../../assets/idsc.png";
import mag from "../../assets/mag.png";
import ws from "../../assets/ws.png";
export default function Projects() {
  const projects = [
    {
      title: "idSmartcare",
      description:
        "IdSmartCare is an application designed to streamline the buying and selling process of goods, as well as manage inventory within healthcare facilities. This application enables users to efficiently manage stock levels, track inventory in real-time, and facilitate transactions with ease. Additionally, IdSmartCare seamlessly integrates with several third-party services, enhancing its functionality and ensuring smooth data exchange across platforms. The system aims to enhance operational efficiency in inventory management, ensuring the timely availability of goods while optimizing the transactional processes within healthcare environments.",
      image: idsc,
      list: ["React", "Laravel", "Tailwind"],
    },
    {
      title: "CMS MAG",
      description:
        "Content Management System - Asuransi MAG is a custom-built application designed to manage content efficiently, where the content is consumed through an API that I developed. The system allows users to create, update, and organize content seamlessly, ensuring smooth integration with the API for dynamic content delivery. This project aims to provide an intuitive platform for managing insurance-related content, ensuring that data is consistently available and easily accessible for external consumption in a structured and organized manner.",
      image: mag,
      list: ["Laravel", "JQuery", "Bootstrap"],
    },
    {
      title: "WorkSpace",
      description:
        "Workspace is an internal application designed to streamline various administrative and operational tasks within the office. The platform provides functionality for employee attendance tracking, data management, reimbursement processing, task management, and event coordination. By centralizing these processes, Workspace enhances organizational efficiency, ensuring smooth workflow and effective communication within the workplace. The application aims to simplify day-to-day operations, allowing employees and management to focus on their core responsibilities.",
      image: ws,
      list: ["Laravel", "Bootstrap"],
    },
  ];

  return (
    <div className="md:px-20 pt-28 px-5 bg-gradient-to-b from-primary to-dark">
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
