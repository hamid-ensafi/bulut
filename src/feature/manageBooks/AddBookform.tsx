import Button from "@/ui/Button";
import { IoMdClose } from "react-icons/io";
import uploadImage from "@/assets/image/uploadIcon.png";
import { useDispatch } from "react-redux";
import { closeModal } from "@/components/modal/slice";
function AddBookform(): React.JSX.Element {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-center">
      <div className=" 2xl:container flex justify-center ">
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          className="py-10 px-12 w-2/3 bg-white rounded-lg"
        >
          <div className="flex justify-between pb-10 border-b border-dark-200">
            <h4>افزودن کتاب</h4>
            <Button onClick={() => dispatch(closeModal())} type="simple">
              <IoMdClose></IoMdClose>
            </Button>
          </div>
          <form
            action=""
            className="text-sm text-dark-800 flex flex-col gap-10 mt-6"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor="name">
                نام کتاب
                <span className="text-red-500"> * </span>
              </label>
              <div className="border rounde-lg border-dark-200">
                <input
                  className="py-4 px-4"
                  id="name"
                  placeholder="مثال: تئوری انتخاب"
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="price">
                قیمت (تومان)
                <span className="text-red-500"> * </span>
              </label>
              <div className="border rounde-lg border-dark-200">
                <input
                  className="py-4 px-4"
                  id="price"
                  placeholder="مثال : 50.000"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="flex flex-col justify-center items-center bg-dark-400 px-16 py-2 gap-4 rounded-lg">
                <figure>
                  <img src={uploadImage} alt=" لوگو اپلود " />
                </figure>
                <div className="flex flex-col items-center gap-4  ">
                  <h4 className="font-semibold text-xl"> بارگذاری عکس</h4>
                  <p className="text-sm">
                    در این قسمت عکس محصول خودتان را میتوانید بارگزاری کنید.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end  ">
              <div className="w-1/2 flex gap-4">
                <Button
                  onClick={() => dispatch(closeModal())}
                  kind="button"
                  type="row"
                  text="انصراف"
                ></Button>
                <Button kind="submit" type="rowRevers" text="افزودن"></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBookform;
