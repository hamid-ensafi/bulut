import { IButton } from "@/types/ui/button/button.interface";
import { NavLink } from "react-router-dom";

const base = "flex items-center rounded-lg gap-2 ";

export const styles = {
  rowRevers:
    base +
    " flex-row-reverse bg-purpleprime-500 px-4 py-2 text-white justify-center w-full border border-transparent",
  row:
    base +
    " border border-purpleprime-500 text-purpleprime-500 p-2.5 justify-center w-full",
  purpleBg: "bg-purpleprime-100 rounded-lg p-1 justify-center",
  linkSimple:
    "block p-3 justify-center  rounded-lg [&.active]:bg-purpleprime-500 [&.active]:text-white",
  simple: base + " flex-row-reverse  justify-end border border-transparent",
  simpleRed: base + " flex-row-reverse p-2 justify-end text-red-500",
};

function Button({
  children,
  disabled,
  to,
  type,
  text,
  kind='button',
  onClick,
}: IButton) {
  if (to)
    return (
      <NavLink to={to} className={styles[type]}>
        {children}
      </NavLink>
    );
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {text && <span>{text}</span>}
        {children}
      </button>
    );
  }
  return (
    <button
      type={kind}
      disabled={disabled}
      className={styles[type]}
    >
      <span>{text}</span>
      {children && children}
    </button>
  );
}
export default Button;
