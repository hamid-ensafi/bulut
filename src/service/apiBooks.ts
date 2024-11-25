import supabase from "./supabase";

export async function fetchBooks() {
  const { data: Books, error } = await supabase.from("Books").select("*");
  if (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
  return Books;
}
