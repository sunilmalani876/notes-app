import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/api/auth";
import userStore from "@/store/user";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useAuth } from "@/context/authProvider";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "minimum length is 6.",
  }),
});

const LogIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setUserState, userState } = userStore();
  const { setToken } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const isPassword = watch("password", "");

  const createAccount = async (values: { email: string; password: string }) => {
    try {
      const { data } = await registerUser(values);

      if (data.success === true) {
        Cookies.set("token", data.data.accessToken);
        setToken(data.data.accessToken);
        setUserState(data.data);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {/* LogIn */}

      <form
        className="w-full space-y-6 flex flex-col items-center gap-2"
        onSubmit={handleSubmit(createAccount)}
      >
        <div>
          <span className="max-w-[800px] text-center text-4xl font-extrabold leading-tight text-pink-400 drop-shadow-[2px_2px_0px_rgba(var(--pink-800))] md:text-5xl">
            Hi, Welcome back 👋.
          </span>
        </div>
        <div className="w-full max-w-sm flex flex-col gap-2">
          <label className="font-bold" htmlFor="email">
            Enter your email
          </label>
          <Input
            className="w-full h-[42px] bg-neutral-200 dark:bg-gray-800 outline-none border-none focus-visible:ring-2 font-bold dark:focus-visible:ring-pink-400 focus-visible:ring-opacity-80 rounded-md px-2"
            {...register("email", {
              required: true,
            })}
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            autoComplete="on"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        <div className="w-full max-w-sm flex flex-col gap-2">
          <label className="font-bold" htmlFor="password">
            Enter your password
          </label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: true,
              })}
              id="password"
              name="password"
              className="w-full h-[42px] bg-neutral-200 dark:bg-gray-800 outline-none border-none focus-visible:ring-2 font-bold dark:focus-visible:ring-pink-400 focus-visible:ring-opacity-80 rounded-md px-2"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
              autoComplete="on"
            />

            {isPassword.length > 0 && (
              <button
                type="button"
                className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span className="text-2xl text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-100 ">
                  {showPassword ? <Eye /> : <EyeOff />}
                </span>
              </button>
            )}
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
          {/* <p className="error-text">{errors.password}</p> */}
        </div>

        <Button
          disabled={isSubmitting}
          className="w-full max-w-sm dark:bg-pink-400 dark:text-white dark:hover:bg-pink-400/90 text-lg px-5"
          type="submit"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default LogIn;
