import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground, FlatList } from "react-native"
import moment from "moment"
import 'moment/locale/pt-br'

import Task from "../components/Task"

import today_Image from '../../assets/imgs/today.jpg'

export default class Task_List extends Component {

    state = {
        show_done_task: true,
        visible_task: [],
        tasks: [{
            id: Math.random(),
            description: "Estudar para prova de DDM I",
            estimate_at: new Date(),
            done_at: new Date()
        },
        {
            id: Math.random(),
            description: "Fazer a prova de DDM I",
            estimate_at: moment(new Date()).add(5, "days"),
            done_at: null
        }]
    }

toggle_task = task_id => {
    const tasks = [...this.state.tasks]
    tasks.forEach(task => {
        if(task.id === task_id){
            task.done_at = task.done_at ? null : new Date()
        }
    })
   this.setState({tasks}) 
}

    render() {
        const today = moment().locale('pt-br').format('dddd, DD [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                <FlatList 
                    data = {this.state.tasks} 
                    keyExtractor={item => `${item.id}`}
                    renderItem={({item}) => <Task{...item} toggle_task = {this.toggle_task}/>}
                />
                    {/* <Task 
                        description="Estudar para prova de DDM I"
                        estimate_at={new Date()}
                        done_at={new Date()}
                    />
                    <Task 
                        description="Fazer a prova de DDM I"
                        estimate_at={moment(new Date()).add(5, "days")}
                        done_at={null}
                    /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: 'Arial',
        fontSize: 20,
        color: '#FFF',
        marginLeft: 20,
        marginBottom: 30
    }
})