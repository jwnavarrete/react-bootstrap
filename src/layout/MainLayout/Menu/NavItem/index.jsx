import { forwardRef } from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

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
      <Nav.Link {...listItemProps} disabled={item.disabled}>
        {/* <Icon /> */}
        {item.title}

        {item.caption && item.caption}
      </Nav.Link>
    </>
  );
};

export default NavItem;
