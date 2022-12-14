import React from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, theme } from '../styles/Theme';

// import { Container } from './styles';

const { width } = Dimensions.get('window');

const ViewCharts = () => {

    

    return (
        <SafeAreaView style={theme.container}>
            
        </SafeAreaView>
    );
}

export default ViewCharts;