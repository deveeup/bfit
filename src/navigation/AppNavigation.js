import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// stacks
import { HomeStack } from "./HomeStackNavigation";

// screens
import { UserScreen } from "../screens/UserScreen";

// constants
import { SCREENS } from "../constants/screenNames";

// utils
import { renderIcon } from "../utils/renderButton";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: "red",
      tabBarInactiveTintColor: "green",
      tabBarShowLabel: false,
      tabBarIcon: ({ color, size }) => renderIcon(color, route, size),
    })}
  >
    <Tab.Screen name={SCREENS.HOME.STACK} component={HomeStack}></Tab.Screen>
    <Tab.Screen name={SCREENS.USER.STACK} component={UserScreen}></Tab.Screen>
  </Tab.Navigator>
);
