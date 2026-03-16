import { useState } from 'react';
import { View, Button, Text } from 'react-native';

const updateCounter = (current: number, x: number): number => Math.max(0, current + x)
// ou ...
/*
function updateCounter( currentCounter, x ){
  if(currentCounter + x < 0)
    return(0);
    else
    return(currentCounter + x);
}
*/

const Counter = ({ }) => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Incrementa"
        onPress={() => setCounter(prev => updateCounter(prev, 1))}
      />
      <Button
        title="Decrementa"
        onPress={() => setCounter(prev => updateCounter(prev, -1))}
      />
      <Text>
        {counter}
      </Text>
    </View>
  );
};

export default Counter;
