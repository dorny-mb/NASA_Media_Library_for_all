import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { css, Global } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import "react-dates/initialize";

import App from "./App";
import { APP_NAME } from "./constants";
import { theme } from "./theme";
import reportWebVitals from "./reportWebVitals";
import AppContextProvider from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Helmet titleTemplate={`${APP_NAME} | %s`} />
      <AppContextProvider>
        <CSSReset />
        <Global
          styles={css`
            :root {
              --primary-blue: #50698a;
              --secondary-blue: #2c4867;
            }
            * {
              box-sizing: border-box;
              font-family: ${theme.fonts.body};
            }
          `}
        />
        <App />
      </AppContextProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
