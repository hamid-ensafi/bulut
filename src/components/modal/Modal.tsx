import { ReactNode } from "react";
import { showModal, closeModal, getOpen } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import Button from "@/ui/Button";
import { IButton } from "@/types/ui/button/button.interface";
import ReactDOM from "react-dom";

function Modal({ children }: { children: React.JSX.Element }) {
  return <>{children}</>;
}

function OpenModal({ type, text, children, id }: IButton) {
  const dispatch = useDispatch();
  const { openId } = useSelector(getOpen);

  function handleClick(id: string | number | undefined) {
    if (openId === "" || openId !== id) {
      dispatch(showModal(id));
    }
  }

  return (
    <Button onClick={() => handleClick(id)} type={type} text={text}>
      {children}
    </Button>
  );
}

function Content({
  children,
  id,
}: {
  children: ReactNode;
  id: string | number;
}) {
  const { isOpen, openId } = useSelector(getOpen);
  const dispatch = useDispatch();

  if (isOpen && openId === id) {
    return ReactDOM.createPortal(
      <div
        onClick={() => dispatch(closeModal())} //
        className={`flex justify-center items-center fixed top-0 w-full h-full bg-dark-300  animate-fadeIn`}
      >
        {children}
      </div>,
      document.body as HTMLElement
    );
  }
  return null;
}
Modal.Content = Content;
Modal.OpenModal = OpenModal;
export default Modal;
