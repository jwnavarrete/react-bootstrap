import { Outlet } from "react-router-dom";
import Header from "./Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Outlet />
        </Row>
      </Container>
    </>
  );
};

export default MainLayout;
