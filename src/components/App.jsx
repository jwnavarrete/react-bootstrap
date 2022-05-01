import React from "react";
import Layout from "../containers/layout";
import Login from "../containers/login";
import "../style/global.css";

const App = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default App;