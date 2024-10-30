import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { TrainingScreen } from "../screens/Training/TrainingScreen";

// constants
import { SCREENS } from "../constants/screenNames";

const Stack = createNativeStackNavigator();

export function TrainingStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name={SCREENS.TRAINING.KEY} component={TrainingScreen} />
    </Stack.Navigator>
  );
}
