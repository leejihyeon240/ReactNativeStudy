import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber) // 사용자가 고른 숫자를 배제(userNumber를 추측 못 하도록), 프로퍼티를 통해 다른 컴포너트의 값을 도출해옴
    const [currentGuess, setCurrentGuess] = useState(initialGuess); // 이 상태의 초기값은 최초 추측값이 되어야 함, initialGuess값을 초기값으로 설정

    return (
        <View style={styles.screen}>
            <Title>Higher or lower?</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text> Higher or lower?</Text>
                {/* + - */}
            </View>
            {/*<View> LOG ROUNDS </View>*/}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    }
});