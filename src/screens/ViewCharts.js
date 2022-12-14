import React from 'react';
import { Dimensions, SafeAreaView, Text, View } from 'react-native';
import { BarChart, LineChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, theme } from '../styles/Theme';

// import { Container } from './styles';

const { width } = Dimensions.get('window');

const ViewCharts = () => {

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
        data: [0.4, 0.6, 0.8]
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
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    };

    return (
        <SafeAreaView style={theme.container}>
            <View style={theme.container}>
                <ScrollView>
                    <>
                        <Text>
                            Bezier Line Chart
                        </Text>

                        <LineChart
                            data={data}
                            width={width}
                            height={220}
                            chartConfig={chartConfig}
                        />

                        <LineChart
                            data={data}
                            width={width}
                            height={220}
                            verticalLabelRotation={30}
                            chartConfig={chartConfig}
                            bezier
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
                            chartConfig={chartConfig}
                            verticalLabelRotation={20}
                        />
                    </>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default ViewCharts;