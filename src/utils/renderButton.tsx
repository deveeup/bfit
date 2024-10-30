import { Icon } from "@rneui/themed";

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
        <Icon type="material-community" name="home" color={color} size={size} />
      );
    case SCREENS.USER.STACK:
      return (
        <Icon
          type="material-community"
          name="account"
          color={color}
          size={size}
        />
      );
  }
};
