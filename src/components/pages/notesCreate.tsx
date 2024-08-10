import { extractColorCode } from "@/lib/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import Rubber from "@/icons/rubber";
import Tick from "@/icons/tick";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { createNote, getNote, updateNote } from "@/api/auth";

const NotesCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [data, setData] = useState({
    title: "",
    content: "",
  });

  const { name, style, color } = location?.state ?? {};
  const color1 = style ? extractColorCode(style) : "";

  useEffect(() => {
    const getOneNote = async () => {
      try {
        if (id) {
          const { data } = await getNote(id);

          if (data) {
            setData({
              title: data.title,
              content: data.content,
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getOneNote();
  }, [id]);

  const handleReset = () => {
    setData({ title: "", content: "" });
  };

  const handleSubmit = async () => {
    if (id) {
      const content = { content: data.content, color };
      const result = await updateNote(content, id);

      if (result.success) {
        navigate("/");
      }
    } else {
      const newData = { ...data, color: style };

      const notesData = await createNote(newData);

      if (notesData.data.success) {
        navigate("/");
      }
    }
  };

  return (
    <div className="w-full pt-2">
      <div className="w-full flex gap-5">
        <div className="flex flex-col gap-5 px-1 items-center justify-start">
          <Button
            onClick={handleReset}
            size={"icon"}
            className="p-1.5 rounded-full bg-transparent dark:bg-transparent dark:text-white text-black hover:bg-transparent dark:hover:bg-transparent flex items-center justify-center border-[2px] border-white cursor-pointer"
          >
            <Rubber height={"28px"} width={"28px"} />
          </Button>
          <Button
            onClick={handleSubmit}
            size={"icon"}
            className="p-1.5 rounded-full bg-transparent dark:bg-transparent dark:text-white text-black hover:bg-transparent dark:hover:bg-transparent flex items-center justify-center border-[2px] border-white cursor-pointer"
          >
            <Tick height={"28px"} width={"28px"} />
          </Button>
        </div>
        <div className="w-full pl-4">
          {/* <Header iconsOnly /> */}
          <section className="space-y-3.5">
            <div className="flex gap-2.5">
              <div
                className={`w-1.5 rounded-full ${style || "bg-pink-400"} `}
              ></div>
              <Input
                disabled={id ? true : false}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                value={data.title ? data.title : ""}
                className={`w-full font-medium text-lg h-[56px] bg-neutral-200 dark:bg-gray-800 outline-none border-none focus-visible:ring-2 focus-visible:ring-opacity-80 rounded-md px-2 ${
                  color1
                    ? `focus-visible:ring-[${color1}] dark:focus-visible:ring-[${color1}]`
                    : "focus-visible:ring-pink-400 dark:focus-visible:ring-pink-400"
                }`}
                placeholder="Note title..."
              />
            </div>
            <Textarea
              onChange={(e) => setData({ ...data, content: e.target.value })}
              value={data.content ? data.content : ""}
              placeholder="Enter your text here..."
              className={`h-[65vh] custom-scrollbar text-lg resize-none pe-4 font-semibold bg-neutral-200 dark:bg-gray-800 outline-none border-none focus-visible:ring-2 focus-visible:ring-opacity-80 rounded-md px-2 ${
                color1
                  ? `focus-visible:ring-[${color1}] dark:focus-visible:ring-[${color1}]`
                  : "focus-visible:ring-pink-400 dark:focus-visible:ring-pink-400"
              }`}
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck="false"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default NotesCreate;
