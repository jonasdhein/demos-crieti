import Toast from 'react-native-toast-message';

export const messages = {
    success,
    error,
}

function success(title, text){
    Toast.show({
        type: 'success',
        text1: title,
        text2: text,
      });
}

function error(title, text){
    Toast.show({
        type: 'error',
        text1: title,
        text2: text
      });
}