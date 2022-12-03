import { useState, useEffect } from "react";
import { StyleSheet, View, Alert, Text, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons'

import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";
import GuessLogItem from "../components/game/GuessLogItem";

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

function GameScreen({userNumber, onGameOver}) {
    // initialGuess은 한번만 필요하므로 하드코딩을 한다 *1, 100으로 설정한 것
    const initialGuess = generateRandomBetween(1, 100, userNumber) // 사용자가 고른 숫자를 배제(userNumber를 추측 못 하도록), 프로퍼티를 통해 다른 컴포너트의 값을 도출해옴
    const [currentGuess, setCurrentGuess] = useState(initialGuess); // 이 상태의 초기값은 최초 추측값이 되어야 함, initialGuess값을 초기값으로 설정
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber){
            onGameOver(); // 게임이 정말 끝났다면 onGameOver를 호출
        }
    }, [currentGuess, userNumber, onGameOver]); // *의존성 => userNumber, onGameOver 함수가 변경될 때마다 effect 함수가 재실행되고 게임 종료 여부를 확인 함

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        const newRndNumber = generateRandomBetween(
            minBoundary, 
            maxBoundary,
            currentGuess
            ); 

        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]); // 휴대폰이 말한 이전 숫자들(newRndNumber)을 기록하는 것
    }

    const guessRoundsListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Higher or lower?</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}> Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="md-remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="md-add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                {/*guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)*/}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} // 몇 라운드인지
                    guess={itemData.item} />} // 해당 라운드에서 추측한 숫자를 알아냄
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    instructionText: {
        marginBottom: 12
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});