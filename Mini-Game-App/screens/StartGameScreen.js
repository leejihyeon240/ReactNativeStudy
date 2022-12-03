import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert } from "react-native";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({onPickNumber}) { // onPickNumber -> App.js
    const [ enteredNumber, setEnteredNumber ] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    } // TextInput 입력할 때 마다 입력되는 텍스트로 상태가 업데이트

    function resetInputHandler() { // 초기 상태이기도 했던 빈 문자열로 되돌리는 것
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber); // 문자열을 숫자로 변환, 숫자가 아닌 문자가 입력되면 변환에 실패함

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) { // chosenNumber가 숫자가 아니라서 변환에 실패하였으면 True를 반환
            Alert.alert( // 경고창
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }] // 버튼, onPress: resetInputHandler -> 누를 때마다 빈 문자열로 초기화
            );
            return; // 함수의 실행을 취소
        }

        onPickNumber(chosenNumber); // 선택된 숫자를 전달, 유효성 검사를 통과한 숫자

    } // 현재 상태를 확인해서 숫자인지 확인하고 범위 내의 숫자만 허용, 입력값이 유효하다면 다음 화면으로 넘어가고 유효하지 않다면 경고를 띄움

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={numberInputHandler}
                    value={enteredNumber} 
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
                </Card>
        </View>
    );
    // onPress는 <PrimaryButton>의 인수, confirmInputHandler 함수가 가리키는 값이 Pressable(PrimaryButton)의 onPress에 전달
    // 버튼을 누를 때 마다 confirmInputHandler 함수 실행

    // maxLength는 최대 길이 수 제한인데, 숫자니까 "" 이거 말고, {} 이거 써야함
    // keyboardTypes는 숫자 패드만 뜨도록 하는 것
    // autoCorrect 자동 대소문자나 자동 수정 끄기
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center' // 늘어나지말고 상하좌우 넉넉한 여백을 두고 센터에 있으렴
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});