import { currentUser } from "@/api/auth";
import { ModeToggle } from "../theme/mode";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Cookies from "js-cookie";
import userStore from "@/store/user";
import { useAuth } from "@/context/authProvider";

const Header = () => {
  // const { setUserState, userState } = userStore();
  const { setToken } = useAuth();

  const [data, setData] = useState("");
  useEffect(() => {
    const getUser = async () => {
      const data = await currentUser();
      if (data) return setData(data);
    };

    getUser();
  }, []);

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("accessToken");
    setToken("");
  };

  return (
    <div className="fixed w-full top-0 bg-neutral-100 text-black dark:text-white dark:bg-gray-800 border-b dark:border-none flex flex-row-reverse px-12 py-2 gap-4 items-center">
      <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold uppercase border-[2px] border-dashed border-pink-400">
        {data && data.charAt(0)}
      </div>
      <Button
        onClick={logout}
        className="dark:bg-pink-400 dark:text-white dark:hover:bg-pink-400/90"
        size={"sm"}
      >
        Log Out
      </Button>
      <ModeToggle />
    </div>
  );
};

export default Header;
