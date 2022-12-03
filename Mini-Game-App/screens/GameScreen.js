import { useState } from "react";
import { Text, StyleSheet, View, Alert } from "react-native";

import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber) // 사용자가 고른 숫자를 배제(userNumber를 추측 못 하도록), 프로퍼티를 통해 다른 컴포너트의 값을 도출해옴
    const [currentGuess, setCurrentGuess] = useState(initialGuess); // 이 상태의 초기값은 최초 추측값이 되어야 함, initialGuess값을 초기값으로 설정

    // 새로운 난수를 가져올 함수
    function nextGuessHandler(direction) { // direction => 'lower', 'greater'
        if (
            (direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", 'You know that this is wrong...', [
                {text: 'Sorry!', style: 'cancel'},
            ]);
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess; // 만약 추측한 숫자가 정답이라면 게임에서 이겼을 테니, 현재 추측값보다 하나 작아야 함 하지만 만약 빼버리면 유효할지 모를 값을 배제하는 꼴이라 -1 하면 안 됨
        }else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess); 
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Higher or lower?</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text> Higher or lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        -
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        +
                    </PrimaryButton>
                </View>
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