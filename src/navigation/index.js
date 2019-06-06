import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../containers/Home";
import AuthScreen from "../containers/Auth";
import DashboardScreen from "../containers/Dashboard";
import LoginScreen from "../containers/Auth/login";

const AppNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
    Dashboard: DashboardScreen,
    Login: LoginScreen
  },
  {
    initialRouteName: "Auth",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#7760b5"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default createAppContainer(AppNavigator);
