import menuItem from "@menu-items";
import NavGroup from "./NavGroup";

const Menu = () => {
  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item} />;
      default:
        return <h6>Menu Items Error</h6>;
    }
  });

  return <>{navItems}</>;
};

export default Menu;
