import React from "react";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  
} from "@ap.cx/react-fullpage";

import {FirstPage} from '../FirstPage/index'
import {SecondPage} from "../SecondPage/index"
import {ThirdPage} from "../ThirdPage/index"

export const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ height: "100vh", background: "red" }} >
          <FirstPage />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh"}}>
            <SecondPage />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh", background: "green" }}>
            <ThirdPage />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh", background: "orange" }}>
          <h1>Screeen 4</h1>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};
