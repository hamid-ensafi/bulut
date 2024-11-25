import BookListDashboard from "@/feature/manageBooks/BookListDashboard";
import BooksTitleDashboard from "@/feature/manageBooks/BooksTitleDashboard";

function ManageBooks(): React.JSX.Element {
  return (
    <>
      <BooksTitleDashboard />
      <BookListDashboard />
    </>
  );
}

export default ManageBooks;
