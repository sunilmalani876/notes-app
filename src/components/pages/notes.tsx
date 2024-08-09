import { currentUser } from "@/api/auth";
import userStore from "@/store/user";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const Notes = () => {
  const { setUserState } = userStore();
  // const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  const token = Cookies.get("token");
  console.log("token1", token);
  // console.log(Cookies.get);
  // console.log("token", cookies);

  useEffect(() => {
    try {
      currentUser();
      // console.log(data);
      //   setUserState(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    // <div className="w-full h-full flex justify-center items-center">Notes</div>
    <div className="w-full">Notes</div>
  );
};

export default Notes;
