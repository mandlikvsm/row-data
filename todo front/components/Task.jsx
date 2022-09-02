import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const Task = ({ title, description, status, taskId }) => {

    const [completed, setCompleted] = useState(status);

    const handleCheckbox = () => {
        setCompleted(!completed)
    }

    const deleteHandler = () => {
        console.log('delting task')
    }

    return (
        <View style={style.view}>
            <View style={style.view2}>
                <Text style={style.text}>{title}</Text>
                <Text style={style.text2}>{description}</Text>
            </View>
            <Checkbox
                status={completed ? 'checked' : 'unchecked'}
                color='#474747'
                onPress={handleCheckbox}
            />
            <Icon
                name='delete'
                color='#fff'
                size={20} s
                style={style.icon}
                onPress={deleteHandler}
            />
        </View>
    )
}

export default Task

const style = StyleSheet.create({
    view: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    view2: {
        width: '70%',
    },
    text: {
        fontSize: 20,
        marginVertical: 7,
        color: '#900',
    },
    text2: {
        color: '#4a4a4a'
    },
    icon: {
        backgroundColor: '#900',
        padding: 10,
        borderRadius: 100,
    }
})