import MaterialIcon from "react-native-vector-icons/MaterialIcons";

// constants
import { SCREENS } from "../constants/screenNames";

interface RouteInterface {
  key: string;
  name: string;
  params: any;
}

export const renderIcon = (color: string, route: RouteInterface, size: number) => {
  switch (route.name) {
    case SCREENS.HOME.STACK:
      return (
        <MaterialIcon name="home" color={color} size={size} />
      );
    case SCREENS.USER.STACK:
      return (
        <MaterialIcon
          name="manage-accounts"
          color={color}
          size={size}
        />
      );
    case SCREENS.NOTIFICATIONS.STACK:
      return (
        <MaterialIcon
          name="announcement"
          color={color}
          size={size}
        />
      );
    case SCREENS.TRAINING.STACK:
      return (
        <MaterialIcon
          name="fitness-center"
          color={color}
          size={size}
        />
      );
  }
};
