import { useState } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const TextScreen = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite aqui"
        onChangeText={setText}
        onEndEditing={() => console.log('Edição concluída')}
        autoCapitalize="none"
        autoCorrect={false}
        value={text}
      />
      <Text style={styles.textOutput}>
        Valor atual: {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  textOutput: {
    fontSize: 16,
  }
});

export default TextScreen;
