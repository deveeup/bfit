import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import { TrainingScreen } from "../screens/Training/TrainingScreen";
import { RoutineScreen } from "../screens/Training/RoutineScreen";

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
      <Stack.Screen name={SCREENS.TRAINING.ROUTINE} component={RoutineScreen} />
    </Stack.Navigator>
  );
}
