import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import theme from "./styles/theme";
import {ThemeProvider} from 'styled-components';

import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
const div=styled.div`dark: "#170539";`;
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <div>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
