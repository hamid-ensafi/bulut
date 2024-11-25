import { fetchBooks } from "@/service/apiBooks";
import { IBook } from "@/types/feature/books/books.interface";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
export function useGetBooks() {
  const { data: Books,isLoading, error: booksError }: UseQueryResult<IBook[], Error> = useQuery({
    queryKey: ["Books"],
    queryFn: fetchBooks,
    
  });
  return { Books, booksError,isLoading };
}