import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const Counter = ({}) => {
  const [counter, setCounter] = useState(0);

  function updateCounter( currentCounter, x ){
    if(currentCounter + x < 0)
      return(0);
    else
      return(currentCounter + x);
  }

  return (
    <View>
      <Button
        title="Incrementa"
        onPress={() => setCounter(prev => updateCounter(prev,1))}
      />
      <Button
        title="Decrementa"
        onPress={() => setCounter(prev => updateCounter(prev,-1))}
      />
      <Text>
        {counter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default Counter;
