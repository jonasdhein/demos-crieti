import React, { useEffect } from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import { colors, theme } from '../styles/Theme';

// import { Container } from './styles';

const { width } = Dimensions.get('window');

const ViewCharts = ({ navigation }) => {

    useEffect(() => {
        console.log('PASSOU POR GRAFICOS')
      })

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };

    const dataProgress = {
        labels: ["Swim", "Bike", "Run"], // optional
        data: [0.2, 0.5, 1]
    };

    const dataBar = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => colors.chart,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <SafeAreaView style={theme.container}>

            <Header
                navigation={navigation}
                label="Gráficos"
                logout={false} />

            <View style={theme.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <>
                        <LineChart
                            data={data}
                            width={width}
                            height={220}
                            chartConfig={chartConfig}
                            fromZero={true}
                            withHorizontalLines={false}
                            withVerticalLines={false}
                        />

                        <LineChart
                            data={data}
                            width={width}
                            height={220}
                            verticalLabelRotation={30}
                            chartConfig={chartConfig}
                            bezier
                            fromZero={true}
                        />

                        <ProgressChart
                            data={dataProgress}
                            width={width}
                            height={220}
                            strokeWidth={16}
                            radius={32}
                            chartConfig={chartConfig}
                            hideLegend={false}
                        />

                        <BarChart
                            data={dataBar}
                            width={width}
                            height={250}
                            yAxisLabel="R$ "
                            yAxisSuffix=''
                            chartConfig={chartConfig}
                            verticalLabelRotation={10}
                            fromZero={true}
                        />
                    </>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default ViewCharts;