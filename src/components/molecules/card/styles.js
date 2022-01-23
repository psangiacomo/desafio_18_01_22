import { StyleSheet } from "react-native";
import { theme } from "../../../utils/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 0.25,
    justifyContent: "space-around",
    alignItems: 'center',
    elevation: 2,
    marginHorizontal: 30,
    marginVertical: 20,
    backgroundColor: '#fafafa'
  },
  text: {
    fontSize: 25,
    color: theme.darkGray,
    fontFamily: 'Dongle-Regular',
  },
  buttonContainer: {
    width: "100%",
    flexGrow: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
  });