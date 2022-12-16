import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';
import { colors, theme } from '../styles/Theme';
import { MaterialIcons } from '@expo/vector-icons';
import Header from '../components/Header';
import Avatar from '../components/Avatar';

const { width, height } = Dimensions.get('window');

const ViewMenu = (props) => {

  return (
    <SafeAreaView style={theme.safeArea}>

      <Header navigation={props.navigation} label="Menu Principal"
        leftItem={<Avatar />}
        logout={true} />

      <ScrollView
        showsVerticalScrollIndicator={false}>
        <Animatable.View
          style={styles.container}
          animation="fadeIn">

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewCharts")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="show-chart"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Gráficos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewUsers",
              {
                parametro1: "PARAM1",
                parametro2: "PARAM2",
              }
            )}>
            <View style={styles.cardItem}>
              <MaterialIcons name="supervised-user-circle"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Lista de Usuários</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewFranUsers")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="supervised-user-circle"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Lista de Usuários da Fran</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewQuiz")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="question-answer"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Quiz</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewTasks")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="list-alt"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Lista de Tarefas</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewPicker")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="filter-list"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Exemplos com Picker</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewState")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="cached"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Exemplos com useState</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewEffect")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="mode-edit"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Exemplos com useEffect</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.card, theme.shadows]}
            onPress={() => props.navigation.navigate("ViewImages")}>
            <View style={styles.cardItem}>
              <MaterialIcons name="image"
                style={{ marginRight: 20 }}
                size={60} color={colors.alternative} />
              <Text style={theme.subTitle}>Exemplos com Imagens</Text>
            </View>
          </TouchableOpacity>

        </Animatable.View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ViewMenu;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
  },
  card: {
    width: width * 0.9,
    height: 100,
    justifyContent: 'center',
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    backgroundColor: colors.secondary
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});