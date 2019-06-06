import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import configureStore from "./configureStore";

import AppContainer from "./src/navigation";

const store = configureStore();

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7760b5',
    accent: '#f1c40f',
  }
};

export default class App extends React.Component {
  render() {
    return (
      <StoreProvider store={store}>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </StoreProvider>
    );
  }
}
