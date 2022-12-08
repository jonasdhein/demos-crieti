import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../styles/Theme';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

const ViewQuiz = ({ navigation }) => {

    const [count, setCount] = useState(0);
    const [success, setSuccess] = useState(false);

    const perguntas = [
        {
            "titulo": "São exemplos de declarações de variáveis",
            "altA": "func e import",
            "altB": "const e let",
            "altC": "function e operation",
            "altCorreta": "altB"
        },
        {
            "titulo": "O React native nos permite:",
            "altA": "Criar um servidor apache",
            "altB": "Criar aplicativos mobile",
            "altC": "Configurar um servidor de e-mail",
            "altCorreta": "altB"
        }
    ]

    const validarResposta = (alternativa) => {

        if (perguntas[count].altCorreta == alternativa) {
            setSuccess(true);
        } else {

        }

        //setCount(count + 1);
    }

    const finalizarQuiz = () => {
        try{

            navigation.navigate("ViewQuizResults", {
                erros: "1",
                acertos: "95"
            });

        }catch(error){

        }
    }

    return (
        <SafeAreaView style={[theme.container, {
            alignItems: 'center',
            backgroundColor: '#2d77a6'
        }]}>
            <View style={[styles.question, styles.shadows]}>
                <Text style={[
                    styles.questionTitle,
                    theme.titleBoldAveriaLibre
                ]}>{perguntas[count].titulo}</Text>
            </View>

            <TouchableOpacity
                style={[styles.question, styles.shadows]}
                onPress={() => validarResposta('altA')}>
                <Text
                    style={[
                        styles.questionAlt,
                        theme.titleBoldAveriaLibre
                    ]}>A) {perguntas[count].altA}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.question, styles.shadows]}
                onPress={() => validarResposta('altB')}>
                <Text
                    style={[
                        styles.questionAlt,
                        theme.titleBoldAveriaLibre
                    ]}>B) {perguntas[count].altB}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.question, styles.shadows]}
                onPress={() => validarResposta('altC')}>
                <Text
                    style={[
                        styles.questionAlt,
                        theme.titleBoldAveriaLibre
                    ]}>C) {perguntas[count].altC}</Text>
            </TouchableOpacity>

            {success &&
                <View
                    style={styles.animation}>
                    <LottieView
                        autoPlay
                        onAnimationFinish={() => {
                            if (count + 1 < perguntas.length) {
                                setCount(count + 1);
                                setSuccess(false);
                            }else{
                                finalizarQuiz();
                            }
                        }}
                        loop={false}
                        style={{
                            width: width * 0.8
                        }}
                        source={require('../assets/animations/success.json')}
                    />
                </View>
            }

        </SafeAreaView>

    );
}

export default ViewQuiz;

const styles = StyleSheet.create({
    animation: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#a0d3d955',
        justifyContent: 'center',
        alignItems: 'center'
    },
    question: {
        width: width * 0.9,
        height: 100,
        borderRadius: 8,
        padding: 8,
        margin: 8,
        backgroundColor: '#a0d3d9',
        justifyContent: 'center',
    },
    shadows: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 5
    },
    questionTitle: {
        fontSize: 26
    },
    questionAlt: {
        fontSize: 20
    }
});