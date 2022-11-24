import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";

function GameScreen() {
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