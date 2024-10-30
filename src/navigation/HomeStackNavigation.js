import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { HomeScreen } from "../screens/HomeScreen";

// constants
import { SCREENS } from "../constants/screenNames";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={SCREENS.HOME.KEY} component={HomeScreen} />
    </Stack.Navigator>
  );
}
