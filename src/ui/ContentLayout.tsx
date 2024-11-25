import  { ReactNode } from "react";
function ContentLayout({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <section className="flex w-11/12 justify-center">
      <div className="w-full 2xl:container flex  justify-center">
        <div className="w-10/12 bg-white rounded-xl px-6 py-8  mt-4 ">
          {children}
        </div>
      </div>
    </section>
  );
}

export default ContentLayout;

// چون پیج های دیگری وجود ندارد  من تصمیم گرفتم یک لی اوت کلی برای کانتنت پیج در نظر بگیرم برای تمیزی  کار
