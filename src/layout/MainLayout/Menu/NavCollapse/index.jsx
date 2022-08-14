import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavItem from "./NavItem";

const NavCollapse = ({ menu, level }) => {
  // 
  const Icon = menu.icon;

  const menus = menu.children?.map((item) => {
    switch (item.type) {
      case "collapse":
        return <NavCollapse key={item.id} menu={item} level={level + 1} />;
      case "item":
        return <NavItem key={item.id} item={item} level={level + 1} />;
      default:
        return <h6>Menu Items Error</h6>;
    }
  });

  return (
    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
      {menus}
    </NavDropdown>
  );
};

export default NavCollapse;
