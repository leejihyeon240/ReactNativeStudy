// 추측한 숫자 출력을 담당할 간단한 컨테이너
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function NumberContainer({children}) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width; // Dimensions은 최대 사용 가능한 공간을 파악할 수 있음

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24, // Dimensions API
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    }
});