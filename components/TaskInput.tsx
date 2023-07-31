import { FC } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

type Props = {
    taskInputHandler: (text: string) => void;
    addTaskHandler: () => void;
    value: string;
    isVisibleOpen: boolean
    isModalVisibleClose: () => void;
}

const TaskInput: FC<Props> = ({ taskInputHandler, addTaskHandler, value, isVisibleOpen, isModalVisibleClose }) => {
    return (
        <Modal animationType="slide" visible={isVisibleOpen}>

            <View style={styles.spaceAddTaskContainer}>
                <Image style={styles.image} source={{ uri: 'https://d57439wlqx3vo.cloudfront.net/iblock/f5d/f5dcf76697107ea302a1981718e33c95/1f68f84b53199df9cae4b253225eae63.png' }} />
                <TextInput
                    style={styles.inputTextStyle}
                    placeholder="write your task"
                    onChange={(event) => taskInputHandler(event.nativeEvent.text)}
                    value={value}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Tap me" onPress={value === '' ? () => { } : addTaskHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cansel" onPress={isModalVisibleClose} color="#f31292"></Button>
                    </View>
                </View>
            </View>
        </Modal >

    )
}
const styles = StyleSheet.create({
    inputTextStyle: {
        marginTop: 15,
        width: '80%',
        padding: 5,
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'white',
        marginRight: 9,
        color: 'black',
        backgroundColor: 'white',
        marginBottom: 10,
    },

    spaceAddTaskContainer: {
        backgroundColor: '#210644',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        margin: 10,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: '40%',
        marginHorizontal: 9,
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 50,
    }
})
export default TaskInput;