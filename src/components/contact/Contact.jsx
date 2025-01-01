import { Github, Instagram, Linkedin } from "./icons/IconsContact";

export default function Contact() {
  return (
    <div className="relative bg-white opacity-90 rounded-t-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Content Section */}
      <div className="relative z-10 mt-16 py-10 mx-auto max-w-xl">
        <p className="text-center mb-3 font-bold text-lg">
          {`Let's Know Me at`}
        </p>
        <div className="flex justify-center gap-6">
          {/* Github */}
          <a
            href="https://github.com/dwiarya1104"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Github />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dwiiaryaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Linkedin />
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/dwiiarya.p_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Instagram />
          </a>
        </div>
      </div>
    </div>
  );
}
