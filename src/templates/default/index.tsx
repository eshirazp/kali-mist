import React, { FC } from "react";
import { AppWrapper, AppContent, AppFooter } from "./styles";
import Hero from "../../components/hero";
import Header from "../../components/header";
import { useLocation } from "react-router-dom";

// PART 1 - Routing
// Section 4
// Implement the following logic: When a user is not on the homepage, hide the Hero component

const DefaultTemplate: FC = ({ children }) => {
  const location = useLocation();
  return (
    <AppWrapper>
      {/* Elush- removed the old code since it was what `Header` was available. 
      That includes wrapping around the `AppHeader` styled comp */}
      <Header />
      {location.pathname === "/" && <Hero />}
      <AppContent>{children}</AppContent>
      <AppFooter>{"Worked on by Elush Shirazpour"}</AppFooter>
    </AppWrapper>
  );
};

export default DefaultTemplate;
