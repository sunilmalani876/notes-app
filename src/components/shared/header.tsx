import { ModeToggle } from "../theme/mode";

const Header = () => {
  return (
    <div className="fixed w-full top-0 bg-neutral-100 text-black dark:text-white dark:bg-gray-800 border-b dark:border-none flex flex-row-reverse px-12 py-2 gap-4 items-center">
      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold uppercase border-[2px] border-dashed border-pink-400">
        s
      </div>
      <ModeToggle />
    </div>
  );
};

export default Header;
