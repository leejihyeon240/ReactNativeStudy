# Udemy Course
### 【한글자막 React Native – 완벽 가이드 [2022]

- Mini-Game-App
<br>

# Record01
### DATE. 2022-11-17
🔥분노의 배경 선형 그라데이션!!!!🔥
<br>
　　ㄴ 3번의 오류를 이겨내고 해결...
<br>
- node.js 버전 바꿈 (19 -> 16) <br>
- VScode Terminal Settings/Command Prompt로 다시 설정함 <br>
- expo-cli 어쩌고 그래서 expo도 재설치함 <br>

<img width="300" alt="image" align="right" src="https://user-images.githubusercontent.com/59243729/202198956-4fda4f3c-7190-442f-ac35-d48a01dca0d0.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/59243729/202198177-ef648e8c-d9db-433b-90ee-89e023152d11.png">  


<br>
<br>
<br>

# Record02
### DATE. 2022-12-04
useWindowDimensions => 반응형 UI를 만들 때 최적

ex) 가로 모드 UI

```javascript
import { StyleSheet, View, Alert, FlatList, useWindowDimensions } from "react-native";

const { width, height } = useWindowDimensions();

let content = ( // 세로 모드
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card>
                    <InstructionText style={styles.instructionText}> Higher or lower?</InstructionText>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="md-remove" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="md-add" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    </View>
                </Card>
        </>
    );

    if (width > 500 ) { // 가로 모드 UI 만드는 법
        content = (
            <>
                <View style={styles.buttonContainerWide}>
                        <View style={styles.buttonsContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="md-remove" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <View style={styles.buttonsContainer}>
                            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="md-add" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                </View>
            </>
        );
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/*guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)*/}
                <FlatList
                    data={guessRounds}
                    renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} // 몇 라운드인지
                    guess={itemData.item} />} // 해당 라운드에서 추측한 숫자를 알아냄
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    );
```
