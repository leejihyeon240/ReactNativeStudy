import { StyleSheet, View, Text, Pressable } from 'react-native'; // 앞으로는 Pressable을 써야함

function GoalItem(props) {
      return (
          <View style={styles.goalItem}>
            <Pressable 
              android_ripple={{color: '#210644'}}
              onPress={props.onDeleteItem.bind(this, props.id )}
              style={({pressed}) => pressed && styles.pressedItem}
            >
            <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
          </View>
        // style은 터치할 때마다 pressable이 자동으로 호출되도록 함, 아이폰은 이 설정을 해줘야 물결 효과가 가능함
        );
};

export default GoalItem;

const styles = StyleSheet.create({
      goalItem: {
          margin: 8,
          borderRadius: 6,
          backgroundColor: '#5e0acc'
        },
      pressedItem: {
        opacity: 0.5
      },
      goalText: {
        color: 'white',
        padding: 8,
      }
});