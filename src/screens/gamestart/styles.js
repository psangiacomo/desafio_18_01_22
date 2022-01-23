import { StyleSheet } from "react-native";
import { theme } from "../../utils/constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      confirmedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 0.15,
      },
      confirmedtext: {
        fontSize: 20,
        color: theme.darkGray,
        marginVertical: 10,
        fontFamily: 'Dongle-Regular',
      },
  });