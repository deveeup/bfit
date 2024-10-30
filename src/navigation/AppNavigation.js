import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// stacks
import { HomeStack } from "./HomeStackNavigation";
import { TrainingStack } from "./TrainingStackNavigation";
import { NotificationsStack } from "./NotificationsStackNavigation";
import { UserStack } from "./UserStackNavigation";

// constants
import { SCREENS } from "../constants/screenNames";
import { COLORS } from "../constants/colors";

// utils
import { renderIcon } from "../utils/renderButton";

const Tab = createBottomTabNavigator();

export const AppNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: COLORS.STATUS.ACTIVE,
      tabBarInactiveTintColor: COLORS.STATUS.INACTIVE,
      tabBarShowLabel: false,
      tabBarIcon: ({ color, size }) => renderIcon(color, route, size),
    })}
  >
    <Tab.Screen name={SCREENS.HOME.STACK} component={HomeStack}></Tab.Screen>
    <Tab.Screen
      name={SCREENS.TRAINING.STACK}
      component={TrainingStack}
    ></Tab.Screen>
    <Tab.Screen
      name={SCREENS.NOTIFICATIONS.STACK}
      component={NotificationsStack}
    ></Tab.Screen>
    <Tab.Screen name={SCREENS.USER.STACK} component={UserStack}></Tab.Screen>
  </Tab.Navigator>
);
