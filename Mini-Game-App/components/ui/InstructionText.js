import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText ({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
} // style 덮어쓰기, 기본값 스타일을 덮어쓸 수 있음

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24
    },
});