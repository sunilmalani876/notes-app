import { useLocation } from "react-router-dom";
import { Input } from "../ui/input";
import { cn, extractColorCode } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

const NotesCreate = () => {
  const location = useLocation();

  const { name, style } = location?.state;
  const color = `dark:focus-visible:ring-[${extractColorCode(style)}]`;

  //   ${
  //     color
  // ? `focus-visible:ring-[${color}] dark:focus-visible:ring-[${color}]`
  // : ""
  //   }

  console.log(style, color);

  return (
    <div className="w-full pt-2">
      <div className="w-full flex gap-5">
        <div>icon</div>
        <div className="w-full max-w-sm pl-4">
          {/* <Header iconsOnly /> */}
          <section className="space-y-3.5">
            <div className="flex gap-2">
              <div
                className={`w-1.5 rounded-full ${style || "bg-grey"} `}
              ></div>
              <Input
                className={
                  "w-full font-medium text-lg h-[56px] bg-neutral-200 dark:bg-gray-800 outline-none border-none focus-visible:ring-2 focus-visible:ring-opacity-80 rounded-md px-2 focus-visible:ring-pink-400"
                }
                // focus-visible:ring-pink-400
                // className="font-medium text-lg h-[56px]"
                placeholder="Note title..."
                // value={note.title}
                // onChange={(e) => dispatch({ title: e.target.value })}
              />
            </div>
            <Textarea
              placeholder="Enter your text here..."
              className="h-[65vh] text-lg resize-none pe-4 bg-neutral-200 dark:bg-gray-800 outline-none border-none focus-visible:ring-2 focus-visible:ring-opacity-80 rounded-md px-2 focus-visible:ring-pink-400"
              //   value={note.body}
              //   onChange={(e) => dispatch({ body: e.target.value })}
              autoCapitalize="off"
              autoCorrect="off"
              //   spellCheck="off"
            />
          </section>
        </div>
      </div>
      {/* name: {name} style:{style} */}
    </div>
  );
};

export default NotesCreate;
