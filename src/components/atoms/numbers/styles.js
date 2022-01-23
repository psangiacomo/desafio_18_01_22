import { StyleSheet } from "react-native";
import { theme } from "../../../utils/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number : {
    fontSize: 24,
    color: theme.secondaryColor,
    marginVertical: 10,
    fontWeight: 'bold',
  }
  });