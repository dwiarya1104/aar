export function Menu({ isOpen }) {
  return (
    <nav
      className={`menu fixed top-0 left-0 bottom-0 w-80 bg-secondary transform transition duration-400 z-20 ${
        isOpen ? "" : "menu-hidden"
      }`}
    >
      <ul className="flex flex-col gap-2 p-4">
        <li className="text-primary text-2xl font-bold hover:cursor-pointer">Portfolio</li>
        <li className="text-primary text-2xl font-bold hover:cursor-pointer">About</li>
        <li className="text-primary text-2xl font-bold hover:cursor-pointer">Contact</li>
        <li className="text-primary text-2xl font-bold hover:cursor-pointer">Search</li>
      </ul>
    </nav>
  );
}
