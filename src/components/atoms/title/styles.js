import { StyleSheet } from "react-native";
import { theme } from "../../../utils/constants/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    flexGrow: 0.10,
  },
  text: {
      fontSize: 22,
      color: theme.darkGray,
      fontFamily: 'Dongle-Regular',
  }
  });