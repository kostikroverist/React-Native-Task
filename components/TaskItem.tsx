import { FC } from "react";
import { ListRenderItemInfo, StyleSheet, Text, View, Pressable, Modal } from "react-native";
import { Task } from "../App";


type Props = {
    itemData: ListRenderItemInfo<Task>,
    deleteTaskHandler: () => void,
}

const TaskItem: FC<Props> = ({ itemData, deleteTaskHandler }) => {

    return (
        <Pressable onPress={deleteTaskHandler.bind(itemData.item.id)} android_ripple={{ color: '#210644' }}>
            <View key={itemData.item.id} style={styles.taskItem}>
                <Text style={styles.taskText}>{itemData.item.task}</Text>
            </View>
        </Pressable>

    )
}

export default TaskItem;

const styles = StyleSheet.create({
    taskItem: {
        margin: 5,
        borderRadius: 10,
        padding: 8,
        backgroundColor: '#5e0acc',
    },
    taskText: {
        color: '#fff',

    }
})