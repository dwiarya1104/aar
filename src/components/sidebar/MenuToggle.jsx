const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);
export const MenuToggle = ({ toggle }) => (
  <button
    data-aos="fade-right"
    data-aos-duration="1000"
    onClick={toggle}
    className="fixed top-4 left-4 w-12 h-12 rounded-full bg-secondary p-2 hover:cursor-pointer z-50 flex items-center justify-center"
  >
    <svg width="18" height="14" viewBox="0 0 23 18" className="text-white">
      <Path
        d="M 2 2.5 L 20 2.5"
        className="top"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path
        d="M 2 16.346 L 20 16.346"
        className="bottom"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);
