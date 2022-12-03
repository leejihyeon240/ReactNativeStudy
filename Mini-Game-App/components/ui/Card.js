import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
    return <View style={styles.card}> 
        {children}
    </View>;
}

export default Card;


const deviceWidth = Dimensions.get('window').width; // Dimensions은 최대 사용 가능한 공간을 파악할 수 있음

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal:24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        // 안드로이드용 그림자
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
});