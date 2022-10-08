import React from "react";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
  
} from "@ap.cx/react-fullpage";

import {FirstPage} from '../FirstPage/index'
import {SecondPage} from "../SecondPage/index"
import {ThirdPage} from "../ThirdPage/index"
import {FourthPage} from "../FourthPage/index"

export const FullPageScroll = () => {
  return (
    <Fullpage>
      <FullpageNavigation />
      <FullPageSections>
        <FullpageSection style={{ height: "100vh"}} >
          <FirstPage />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh"}}>
            <SecondPage />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh"}}>
          <ThirdPage />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh"}}>
          <FourthPage />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};
