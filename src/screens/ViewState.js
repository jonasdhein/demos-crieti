import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// import { Container } from './styles';

const ViewState = (props) => {

    console.log('PROPS', props)

    const [count, setCount] = useState(0);
    const [user, setUser] = useState({
      name: "Jonas",
      age: 33,
      city: "Teutônia"
    });
  
    function increment() {
      setCount((prevState) => prevState + 1);
      setCount((prevState) => prevState + 1);
      setCount((prevState) => prevState + 1);
    }
  
    return (
      <View style={styles.container}>
        <SafeAreaView>
  
          <View style={styles.views}>
            <View>
              <Text style={{ fontSize: 24 }}>
                CONTADOR: {count}
              </Text>
              <TouchableOpacity
                onPress={() => increment()}
                style={styles.button}>
                <Text style={styles.textButton}>Botão</Text>
              </TouchableOpacity>
            </View>
  
            <View>
              <Text style={{ fontSize: 24 }}>
                Nome:{user.name}
              </Text>
              <Text style={{ fontSize: 24 }}>
                Idade:{user.age}
              </Text>
              <Text style={{ fontSize: 24 }}>
                Cidade:{user.city}
              </Text>
              <TouchableOpacity
                onPress={() => setUser({ ...user, age: user.age + 1 })}
                style={styles.button}>
                <Text style={styles.textButton}>Botão</Text>
              </TouchableOpacity>
            </View>
          </View>
  
  
        </SafeAreaView>
      </View>
    );
}

export default ViewState;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 8,
      justifyContent: 'center',
      alignItems: 'center',
    },
    views: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-evenly',
    },
    button: {
      marginTop: 8,
      backgroundColor: '#154666',
      height: 36,
      borderRadius: 16,
      justifyContent: 'center',
    },
    textButton: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 24
    }
  });
  