import { memo, type FC } from "react";
import Box from "../ui/Box";
import { Bookmark, SquarePen, Trash } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleBookmark } from "@/lib/features/bookmarkSlice";
import { useStudent } from "@/api/hooks/useStudent";

interface Props {
  data: any[];
}

const StudentView: FC<Props> = (students) => {
  const { deleteStudent } = useStudent();
  const { data } = students;
  const dispatch = useDispatch();

  const handleBookmark = (item: any) => {
    dispatch(toggleBookmark(item));
    console.log(item);
  };

  return (
    <Box>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-3">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border border-slate-200 p-4 rounded-xl text-center"
          >
            <div className="relative">
              <div className="size-20 rounded-full grid place-items-center bg-slate-200 mx-auto">
                <span className="text-4xl font-bold text-slate-400">
                  {item.f_name[0]}
                </span>
              </div>
              <div className="absolute top-0 right-0 flex flex-col gap-3">
                <button className="cursor-pointer">
                  <Bookmark
                    onClick={() => handleBookmark(item)}
                    className="size-5 text-gray-600"
                  />
                </button>
                <button className="cursor-pointer">
                  <Trash
                    onClick={() => deleteStudent.mutate(item.id)}
                    className="size-5 text-red-500"
                  />
                </button>
                <button className="cursor-pointer">
                  <SquarePen
                    onClick={() => item}
                    className="size-5 text-green-600"
                  />
                </button>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="font-bold">
                {item.f_name} {item.l_name}
              </h3>
              <p>{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default memo(StudentView);
