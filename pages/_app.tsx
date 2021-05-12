import React, { ReactElement } from "react";
import App from "next/app";
import { AppProps } from "next/app";
import { wrapper } from "../redux";
import { setInterceptor } from "./../utils/httpClient";
import { useDispatch } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./../components/Layout/layout";

interface Props {}

function PetkubApp({ Component, pageProps }: AppProps) {
  // https://material-ui.com/customization/theming/
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#135ab8",
      },
      secondary: {
        main: "#e85f5f",
      },
    },
  });

  setInterceptor(useDispatch());
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

PetkubApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default wrapper.withRedux(PetkubApp);
