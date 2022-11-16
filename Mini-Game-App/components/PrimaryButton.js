import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPress }) {

    return (
            <View style={styles.buttonOuterContainer}>
                <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] // 참일 때
                        : styles.buttonInnerContainer
                    } // 거짓이라면 컨테이너 스타일의 기본 버튼을 적용
                    onPress={onPress}
                    android_ripple={{color: '#640233'}}
                > 
                <Text style={styles.buttonText}> {children} </Text>
                </Pressable>
            </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#ddb52f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }, // 물결 효과
})