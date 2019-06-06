import * as React from "react";
import { View } from "react-native";
import { BottomNavigation, Text, Button } from "react-native-paper";
import LogOut from "../Auth/logout";

const DummyScreen = ({ text }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ textAlign: "center" }}>{text}</Text>
      <LogOut />
    </View>
  );
};

const TabOne = () => <DummyScreen text={"TAB ONE"} />;

const TabTwo = () => <DummyScreen text={"TAB TWO"} />;

const TabThree = () => <DummyScreen text={"TAB THREE"} />;

export default class Dashboard extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: "tab1", title: "Tab 1" },
      { key: "tab2", title: "Tab 2" },
      { key: "tab3", title: "Tab 3" }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    tab1: TabOne,
    tab2: TabTwo,
    tab3: TabThree
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
