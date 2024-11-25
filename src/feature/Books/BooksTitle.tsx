import CartIcon from "../cart/CartIcon";

function BooksTitle(): React.JSX.Element {
  // متاسفانه من  ساعت 8 عصر به خانه میرسم و نتوانستم پروژه را کامل و تمام کمال تکمیل کنم معذرت میخواهم
  // یک هفته است که شبا دیر میخوابم و مشغول تکمیل این پروژه هستم
  return (
    <div className="flex justify-between items-center pb-6 border-b border-b-dark-200">
      <div>
        <h3 className="text-xl font-bold text-dark-800">مدیریت کتاب ها </h3>
      </div>
      <CartIcon />
    </div>
  );
}

export default BooksTitle;
