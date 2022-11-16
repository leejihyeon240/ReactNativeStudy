import { StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground 
          source={require('./assets/background.png')} 
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    rootScreen: {
      flex: 1, // flex 1을 추가하면 View가 스타일을 전달받아 최대한의 공간을 차지함
    },
    backgroundImage: {
      opacity: 0.15
    }
});
