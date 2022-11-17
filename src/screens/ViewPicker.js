import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ViewPicker = () => {

    const [selected, setSelected] = useState();

    const lista_linguagens = [
        {
            value: 1,
            name: "Java"
        },
        {
            value: 2,
            name: "Javascript"
        },
        {
            value: 3,
            name: "C#"
        }
    ];

    return (
        <View style={styles.container}>
            <Picker
                mode='dropdown'
                selectedValue={selected}
                onValueChange={(value) => setSelected(value)}>
                {
                    lista_linguagens.map((item) => {
                        return <Picker.Item 
                                    key={item.value}
                                    value={item.value}
                                    label={item.name}
                                />
                    })
                }
            </Picker>

        </View>
    );
}

export default ViewPicker;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})