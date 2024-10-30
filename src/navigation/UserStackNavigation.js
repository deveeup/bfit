import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { UserScreen } from "../screens/User/UserScreen";

// constants
import { SCREENS } from "../constants/screenNames";

const Stack = createNativeStackNavigator();

export function UserStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={SCREENS.USER.KEY} component={UserScreen} />
    </Stack.Navigator>
  );
}
