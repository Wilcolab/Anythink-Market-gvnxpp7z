import "./custom.scss";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import React from "react";
import { store } from "./store";
import theme from "./styles/theme";
import {ThemeProvider} from 'styled-components';
import styled from "styled-components";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import StyledBanner from "./components/StyledBanner";
const Content=styled.div`
background-color:"#170539",
`;
ReactDOM.render(
  <Provider store={store}>
    <StyledBanner props={{theme}}>
    <BrowserRouter basename="/">
      <Content>
      <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
      </Content>
    </BrowserRouter>
      </StyledBanner>
  </Provider>,

  document.getElementById("root")
);
