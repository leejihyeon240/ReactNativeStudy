import { useState } from 'react'; // useState를 쓰기 때문에 import 해야함
import {View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

function GoalInput(props) { // props는 프로퍼티, 프로퍼티를 통해 이벤트 핸들러 기능을 보내서 부모 컴포넌트(APP.js)를 호출하는 것
    const [enteredGoalText, setEnteredGoalText] = useState(''); // enteredGoalText 상태를 빈 문자열로 생성, setEnteredGoalText 함수로 업데이트 됨

    function goalInputHandler(enteredText) { // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 역할, 상태를 갱신하는 함수
        setEnteredGoalText(enteredText); // 터미널에 내가 입력하는 값이 실시간으로 뜸
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // 새로운 목표를 추가할 때마다 빈칸이 되도록 할 수 있음
    }

    // console.log('GoalInput 컴포넌트 렌더링 됨')
    // console.log(enteredGoalText);

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} 
                source={require('../assets/image/goal.png')}
                />
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your course goal!' 
                    onChangeText={goalInputHandler} // 함수를 호출하는 건 React
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
    
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: '30%',
        marginHorizontal: 8
      }
});