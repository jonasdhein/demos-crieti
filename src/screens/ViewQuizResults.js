import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// import { Container } from './styles';

const ViewQuizResults = ({ navigation, route }) => {
  return (
    <SafeAreaView>
        <Text>Acertos: {route.params.acertos}</Text>
        <Text>Erros: {route.params.erros}</Text>
    </SafeAreaView>
  );
}

export default ViewQuizResults;