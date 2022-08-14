import PropTypes from "prop-types";

// project imports
import NavItem from "../NavItem";
import NavCollapse from "../NavCollapse";
import Nav from "react-bootstrap/Nav";

// ==============================|| SIDEBAR MENU LIST GROUP ||============================== //

const NavGroup = ({ item }) => {
  // menu list collapse & items
  const items = item.children?.map((menu) => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return <h6>Menu Items Error</h6>;
    }
  });

  return (
    <>
      <Nav className="me-auto" navbarScroll>
        {item.title && item.title}

        {item.caption && item.caption}

        {items}
      </Nav>
    </>
  );
};

NavGroup.propTypes = {
  item: PropTypes.object,
};

export default NavGroup;
