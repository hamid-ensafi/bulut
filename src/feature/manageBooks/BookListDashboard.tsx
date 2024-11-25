import Spinner from "@/ui/spinner";
import BookListItemsDashboard from "./BookListItemsDashboard";
import { useGetBooks } from "@/hooks/useGetBooks";

function BookListDashboard(): React.JSX.Element {
  const { Books, isLoading } = useGetBooks();

  return (
    <div className="mt-8 h-[732px]  overflow-y-auto scrollbar ">
      <div className="flex flex-wrap gap-2 h-full">
        {Books?.map((item) => (
          <BookListItemsDashboard
            key={item.id}
            data={item}
          ></BookListItemsDashboard>
        ))}
        {isLoading && <Spinner />}
      </div>
    </div>
  );
}

export default BookListDashboard;
