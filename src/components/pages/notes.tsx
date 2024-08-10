import { currentUser, deleteNote, getAllNotes } from "@/api/auth";
import { SquarePen, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Notes = () => {
  // const { setUserState, userState } = userStore();
  const [email, setEmail] = useState("");
  const [userNotes, setUserNotes] = useState(null);

  useEffect(() => {
    const getuser = async () => {
      try {
        const email = await currentUser();
        const {
          data: { data },
        } = await getAllNotes();

        if (data) setUserNotes(data);

        setEmail(email);
      } catch (error) {
        console.log(error);
      }
    };

    getuser();
  }, []);

  const handleDelete = async (i: any) => {
    const data = await deleteNote(i.title);

    if (data.success) {
      const filterdNotes = userNotes.filter(
        (note: any) => note.title !== i.title
      );
      setUserNotes(filterdNotes);

      toast.success(data.message);
    }

    // console.log(i);
  };

  return (
    <div className="w-full">
      <p className="px-2 py-2 pb-6 text-center flex flex-col items-center">
        <span className="max-w-[800px] text-center text-4xl font-extrabold leading-tight text-pink-400 drop-shadow-[2px_2px_0px_rgba(var(--pink-800))] md:text-3xl">
          Hi, Welcome back 👋.
        </span>
        <span className="text-4xl font-extrabold leading-tight text-pink-400 drop-shadow-[2px_2px_0px_rgba(var(--pink-800))] md:text-3xl">
          {email && email}
        </span>
      </p>

      <div className="w-full pb-3 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {userNotes && userNotes.length > 0
          ? userNotes.map((i, index) => (
              <div
                key={index}
                className={`dark:${i.color} ${i.color} size-full min-h-64 rounded-md shadow-md`}
              >
                <div className="font-medium flex flex-col justify-between h-full p-5">
                  <div className="flex flex-col gap-1">
                    <h4 className="w-full text-xl line-clamp-1 break-words">
                      {i.title}
                    </h4>
                    <p className="text-slate-900 dark:text-slate-200 line-clamp-6 break-words">
                      {i.content}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-900 dark:text-white">
                      Aug 09, 2024
                    </p>

                    <div className="flex gap-2 items-center">
                      <Link
                        to={`edit/${i.title}`}
                        state={{ color: i.color }}
                        className="cursor-pointer"
                      >
                        <SquarePen className="h-6 w-6 text-slate-900 dark:text-white" />
                      </Link>

                      <div
                        className="cursor-pointer"
                        onClick={() => handleDelete(i)}
                      >
                        <Trash2 />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : "No Notes Found"}
      </div>
    </div>
  );
};

export default Notes;
