import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { theme } from '../styles/Theme';

const { width, height } = Dimensions.get('window');

const ViewNav1 = (props) => {
  return (
    <SafeAreaView style={theme.safeArea}>
      <Animatable.View
        style={styles.container}
        animation="fadeIn">

        <TouchableOpacity
          style={[styles.card, theme.shadows]}
          onPress={() => props.navigation.navigate("ViewUsers")}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <LottieView
              autoPlay
              loop={true}
              style={{
                width: 80,
                height: 80,
              }}
              source={require('../assets/animations/cadastro.json')}
            />
            <Text style={theme.subTitle}>Lista de Usuários</Text>
          </View>
        </TouchableOpacity>

        <CustomButton
          onPress={() => props.navigation.navigate("ViewTasks")}
          label="Navegar para ViewTasks" />

        <CustomButton
          onPress={() => props.navigation.navigate("ViewPicker")}
          label="Navegar para ViewPicker" />

        <CustomButton
          onPress={() => props.navigation.navigate("ViewState")}
          label="Navegar para ViewState" />

        <CustomButton
          onPress={() => props.navigation.navigate("ViewEffect")}
          label="Navegar para ViewEffect" />

        <CustomButton
          onPress={() => props.navigation.navigate("ViewImages")}
          label="Navegar para ViewImages" />

      </Animatable.View>
    </SafeAreaView>
  );
}

export default ViewNav1;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
  },
  card: {
    width: width * 0.9,
    height: 100,
    borderRadius: 8,
    padding: 8,
    backgroundColor: '#f1f1f1'
  }
});