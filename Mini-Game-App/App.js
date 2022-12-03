import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState(); // userNumberdml 상태를 활용하면 아직 사용자 번호가 없으면 StartGameScreen을 렌더링하고, 있으면 GameScreen을 렌더링

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  } // 사용자가 선택한 숫자

  let screen = <StartGameScreen onPickNumber = {pickedNumberHandler} />; // screen = 헬퍼 변수

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber}/>; // screen를 GameScreen으로 설정, 게임이 시작되자마자 userNumber가 GameScreen에 전달해야한다
    // 선택된 숫자가 게임 화면에 노출되도록
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
          source={require('./assets/background.png')} 
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.rootScreen}>
              {screen}
            </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  ); // <screen /> -> JSX 코드를 사용해 screen 변수를 렌더링, GameScreen or StartGameScreen 중 하나가 표시
} // SafeAreaView는 장치의 안전 영역 경계 안에서 컨텐츠를 렌더링 하는 것

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1, // flex 1을 추가하면 View가 스타일을 전달받아 최대한의 공간을 차지함
    },
    backgroundImage: {
      opacity: 0.15
    }
});
