import { Text, Image, StyleSheet, View } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/success.png')} />
            </View>
            <Text>
                Your phone needed X rounds to guess the number Y.
            </Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden', // 이미지의 사각형 모서리를 숨김, 컨테이너를 이미지의 마스크 = 오버레이로 사용하는 것
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    }
})