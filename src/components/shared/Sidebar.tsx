import { cn } from "@/lib/utils";
import colorStore from "@/store/color";
import { CirclePlus, LucidePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const { colorVariants, showColorVariants, toggleColorVariants } =
    colorStore();

  return (
    <div className="w-full max-w-[80px] h-screen bg-neutral-100 dark:bg-gray-800 flex flex-col items-center sticky left-0 top-0 gap-2 overflow-y-auto pt-12">
      <div className="flex flex-col gap-5">
        <button
          className={`transition-all ${
            showColorVariants ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleColorVariants}
        >
          <CirclePlus className="" />
        </button>

        <div
          className={cn([
            "flex flex-col gap-2.5 pt-3 sm:gap-4 opacity-0",
            { "opacity-100": showColorVariants },
          ])}
        >
          {showColorVariants
            ? colorVariants.map((item) => (
                <button
                  key={item.name}
                  className={`size-5 rounded-full block ${item.style}`}
                  onClick={() => navigate("/create", { state: { ...item } })}
                ></button>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
