import React, { Component } from "react";
import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Modal
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome";
import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker"

export default class Add_Tarefa extends Component {
    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.visivel}
                onRequestClose={this.props.cancelar}
                animationType="slide"
            >
                <TouchableWithoutFeedback>
                onPress={this.props.cancelar}
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
                <View style={styles.principal}>
                    <Text style={styles.cabecalho}>Nova Tarefa</Text>
                    <view style={styles.container}>
                    <Icon name="clipboard-check" size={25}></Icon>
                    <TextInput style={styles.input}
                        placeholder="Descrição da tarefa"
                    />
                    </view>
                    <TouchableOpacity style={styles.container}>
                        <Icon name="calendar" size={25}></Icon>
                        <Text>Data Formatada</Text>
                    </TouchableOpacity>
                    <View style={StyleSheet.botoes}>
                        <TouchableOpacity>
                            <Text style={styles.botao}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.botao}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableWithoutFeedback>
                    <View style={styles.fundo}></View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    principal: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    cabecalho:{
        backgroundColor: "#B13B44",
        color: '#FFF',
        textAlign: 'center',
        padding: 20,
        fontSize: 25
    },
    input:{
        width: '85%',
        margin: 15,
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    },
    botoes:{
        felxDirection: 'row',
        justfyContent: 'flex-end'
    },
    botao:{
        margin: 20,
        marginRight: 30,
        color: '#B13B44'
    },
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    data:{
        margin: 10
    }
})
