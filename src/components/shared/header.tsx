import { ModeToggle } from "../theme/mode";

const Header = () => {
  return (
    <div className="absolute w-full top-0 bg-neutral-100 text-black dark:text-white dark:bg-gray-800 border-b dark:border-none flex flex-row-reverse px-12 py-2 gap-2 items-center">
      Header
      <ModeToggle />
    </div>
  );
};

export default Header;
