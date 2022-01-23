import { StyleSheet } from "react-native";
import { theme } from "../../../utils/constants/theme";

export const styles = StyleSheet.create({
  container: {
      width: '75%',
    justifyContent: "center",
    alignItems: 'center',
    flexGrow: 0.10,
    borderWidth: 1,
    marginHorizontal: 20,
    backgroundColor: theme.white

  },
  input: {
      
      height: 40,
      backgroundColor: theme.white
  }
  });