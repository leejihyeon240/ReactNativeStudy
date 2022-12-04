import { Pressable, View, Text, StyleSheet, Platform } from "react-native";

function CategoryGridTile({ title, color }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null] // 참일 경우 buttonPressed(눌렀을 때 효과)를 추가하고, 그렇지 않으면 null을 추가
                }
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]// 아이템 색상 입히기,
                    // 배열로 변경하여 gridItem 기반의 스타일이 항상 추가되도록 하고, 배경색을 color로 설정한 다른 스타일 객체를 병합
                }>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1, // 사용 가능한 모든 공간을 확보
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 8,
        backgroundColor: 'white', // ios에서는 배경색을 추가해야 그림자를 볼 수 있음 
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible' //  안드로이드 물결 효과 넘어서지 않도록 설정하는 것
    },
    button: { // Pressable이 차지하고 있는 공간이 없기 때문에 만들어줘야함
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})