import React from 'react';
import { SafeAreaView, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ViewPicker = () => {
    return (
        <View>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Football', value: 'football' },
                    { label: 'Baseball', value: 'baseball' },
                    { label: 'Hockey', value: 'hockey' },
                ]}
            />
        </View>
    );
}

export default ViewPicker;