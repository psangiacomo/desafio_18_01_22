/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
   SafeAreaView,
   StyleSheet,
   View,
} from 'react-native';

import GameScreen from './src/screens/gamescreen/index';
import GameStart from './src/screens/gamestart/index';
import Header from './src/components/molecules/header/index';
import { theme } from './src/utils/constants/theme';

const App = () => {
   const [userNumber, setUserNumber] = useState('');
 
   const handlerStartGamer = (selectedNumber) => {
     setUserNumber(selectedNumber);
   } 
 
   let content = userNumber ? 
     <GameScreen userOption={userNumber} /> :
     <GameStart onStartGame={handlerStartGamer} />
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.container}>
       <Header title="Adivina el número" />
         {content}
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     fontFamily: 'Lobster-Regular',
   },
   confirmedContainer: {
     justifyContent: 'center',
     alignItems: 'center',
     flexGrow: 0.15,
   },
   confirmedtext: {
     fontSize: 16,
     color: theme.darkGray,
     marginVertical: 10,
   },
 });
 
 export default App;
 