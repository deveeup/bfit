import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { NotificationsScreen } from "../screens/Notifications/NotificationsScreen";

// constants
import { SCREENS } from "../constants/screenNames";

const Stack = createNativeStackNavigator();

export function NotificationsStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name={SCREENS.NOTIFICATIONS.KEY}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
}
