import { sideBarItems } from "@/data/menuData";
import Button from "./Button";

function MenuItem():React.JSX.Element {

  return (
    <ul className="flex flex-col gap-2">
      {sideBarItems.map((item) => (
        <li key={item.link}>
          <Button type="linkSimple" to={ item.link} >
            <div className="flex items-center gap-2">
              {item.icon}
              <span>{item.name}</span>
            </div>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default MenuItem;
