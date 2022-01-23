import { StyleSheet } from "react-native";
import { theme } from "../../../utils/constants/theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
    flexGrow: 0.10,
  },
  text: {
      fontSize: 30,
      color: theme.white,
      fontFamily: 'Lobster-Regular',
  }
  });