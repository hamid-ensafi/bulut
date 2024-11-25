import BookItems from "@/feature/Books/BookList";
import BooksTitle from "../feature/Books/BooksTitle";

function Books(): React.JSX.Element {
  return (
    <>
      <BooksTitle />
      <BookItems />
    </>
  );
}

export default Books;
