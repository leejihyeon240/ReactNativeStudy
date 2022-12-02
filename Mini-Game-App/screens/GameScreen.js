import { useState } from "react";
import { Text, StyleSheet, View } from "react-native";

import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

function GameScreen() {
    const [currentGuess, setCurrentGuess] = useState(); // 이 상태의 초기값은 최초 추측값이 되어야 함

    return (
        <View style={styles.screen}>
            <Title>Higher or lower?</Title>
            {/* GUESS */}
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