import React from "react";
import Footer from "./footer";
import Header from "./header";
import styled from "styled-components";
const Main = styled.main`
  min-height: 100vh;
`;
const Layout = ({ children }) => (
  <Main>
    <Header />
    {children}
    <Footer />
  </Main>
);
export default Layout;
