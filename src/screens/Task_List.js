import React, { Component } from "react"
import { StyleSheet, View, Text, ImageBackground } from "react-native"

import moment from "moment"

import today_Image from "../../assets/imgs/today.jpg"
import common_Styles from "../styles/common_Styles"
import Task from "../components/Task"

import "moment/locale/pt-br"

export default class TaskList extends Component {
    render() {
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM')
        return (
            <View style={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Hoje</Text>
                        <Text style={styles.subTitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <Task description={"Comprar jogo GTA 6"} estimateAt={new Date()} doneAt={new Date()} />
                    <Task description={"Jogar GTA 6"} estimateAt={new Date()} doneAt={null} />
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
        fontFamily: common_Styles.fontfamily,
        color: common_Styles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    subTitle: {
        fontFamily: common_Styles.fontfamily,
        color: common_Styles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    },

})