import { useState } from 'react'; // 리액트에서 상태관리 가져옴
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  // GoalInput으로 이동 -> const [enteredGoalText, setEnteredGoalText] = useState(''); // enteredGoalText 상태를 빈 문자열로 생성, setEnteredGoalText 함수로 업데이트 됨
  const [courseGoals, setCourseGoals] = useState([]); // 강의 목표 리스트
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) { // 버튼을 누르면 작동하는 함수, enteredGoalText를 매개변수 취급
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, 
      { text: enteredGoalText, id: Math.random().toString() }, 
    ]); // 새 상태를 얻도록 React에서 자동으로 호출하는 함수, 기존 강의 목표를 전개해서 새로운 배열에 넣어줌
  }; // 기존 강의 목표를 유지할 수 있도록 -> ...courseGoals

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id); // 반환된 최신 상태 currentCourseGoals는 배열이므로 .filter를 입력, filter는 배열에서 호출할 수 있음
      // 필터는 이전 배열에서 필터로 걸러낸 모든 아이템을 제외한 새로운 배열을 반환함
      // goal이 이 ID를 가진 경우에는 false를 반환하도록 함
    });
  }

  return ( // onAddGoal는 GoalInput.js에 있는 놈을 연결, addGoalHandler는 App.js에 있는 놈
  <>
  <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color="#a065ec"
        onPress={startAddGoalHandler} 
        />
      <GoalInput 
        visible={modalIsVisible} 
        onAddGoal={addGoalHandler} 
        onCancel={endAddGoalHandler} 
      />
      <View style={styles.goalsContainer} >
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return (
            <GoalItem 
              text={itemData.item.text} 
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler} // deleteGoalHandler 함수를 여기로 전송
            />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
            alwaysBounceVertical={false} 
          />
      </View>
    </View>
    </>
  ); // courseGoals 배열을 가져와서 map 메소드를 호출, courseGoals.map() -> 강의 목표에 저장된 개별적인 값을 가져옴
  // React의 효율적인 목록 업데이트를 내부에서 돕도록 목록의 일부로 출력되는 개별 항목에는 항상 key 프로퍼티를 추가해야 함
  // FlatList가 자동으로 key 프로퍼티를 찾음
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 4
  }
});
