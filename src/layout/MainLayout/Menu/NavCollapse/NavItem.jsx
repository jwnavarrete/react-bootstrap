import { forwardRef } from "react";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavItem = ({ item, level }) => {
  const Icon = item.icon;
  //
  let itemTarget = "_self";
  if (item.target) {
    itemTarget = "_blank";
  }

  let listItemProps = {
    component: forwardRef((props, ref) => (
      <Link ref={ref} {...props} to={`${item.url}`} target={itemTarget} />
    )),
  };

  if (item?.external) {
    listItemProps = { component: "a", href: item.url, target: itemTarget };
  }

  return (
    <>
      <Nav.NavDropdown {...listItemProps} disabled={item.disabled}>
        {/* <Icon /> */}
        {item.title}

        {item.caption && item.caption}
      </Nav.NavDropdown>
    </>
  );
};

export default NavItem;
