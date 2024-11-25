import { useGetBooks } from "@/hooks/useGetBooks";
import BooksListItems from "./BooksListItems";
import Spinner from "@/ui/spinner";

function BookItems(): React.JSX.Element {
  const { Books, isLoading } = useGetBooks();
  // متاسفانه من  ساعت 8 عصر به خانه میرسم و نتوانستم پروژه را کامل و تمام کمال تکمیل کنم معذرت میخواهم 
  // یک هفته است که شبا دیر میخوابم و مشغول تکمیل این پروژه هستم 
  return (
    <div className="mt-8 h-[732px]  overflow-y-auto scrollbar ">
      <div className="flex flex-wrap gap-2 h-full">
        {Books?.map((item) => (
          <BooksListItems key={item.id} data={item}></BooksListItems>
        ))}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default BookItems;
