import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';

const ViewNav1 = (props) => {
  return (
    <Animatable.View
      animation="fadeIn"
      style={styles.container}>

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
  );
}

export default ViewNav1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  }
});