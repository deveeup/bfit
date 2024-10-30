import { StyleSheet, StatusBar, Platform } from 'react-native';

// constants
import { DEVICE } from "../../constants/devices";


const { ANDROID } = DEVICE;

export const WrapperStyles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === ANDROID ? StatusBar.currentHeight : 0
  }
});
