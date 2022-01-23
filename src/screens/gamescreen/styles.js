import { StyleSheet } from "react-native";
import { theme } from "../../utils/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  subtitle: {
      fontSize: 22,
      color: theme.darkGray,
      fontFamily: 'Dongle-Regular',
  },
  buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
  }
  });