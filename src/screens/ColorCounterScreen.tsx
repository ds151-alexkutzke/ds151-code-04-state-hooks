import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GeneralCounter from '../components/GeneralCounter';

type ColorComponent = 'red' | 'green' | 'blue';

const COLOR_INCREMENT = 10;

const validateColorValue = (val: number): number => Math.min(255, Math.max(0, val));

const ColorCounterScreen = () => {

  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

  const updateColor = (color: ColorComponent, increment: number) => {
    setColor(prevColor => ({
      ...prevColor,
      [color]: validateColorValue(prevColor[color] + increment)
    }));
  };

  return (
    <View>
      <GeneralCounter
        labelInc="Incrementa Vermelho"
        labelDec="Decrementa Vermelho"
        onInc={() => updateColor('red', COLOR_INCREMENT)}
        onDec={() => updateColor('red', -COLOR_INCREMENT)}
        value={color.red}
      />
      <GeneralCounter
        labelInc="Incrementa Verde"
        labelDec="Decrementa Verde"
        onInc={() => updateColor('green', COLOR_INCREMENT)}
        onDec={() => updateColor('green', -COLOR_INCREMENT)}
        value={color.green}
      />
      <GeneralCounter
        labelInc="Incrementa Azul"
        labelDec="Decrementa Azul"
        onInc={() => updateColor('blue', COLOR_INCREMENT)}
        onDec={() => updateColor('blue', -COLOR_INCREMENT)}
        value={color.blue}
      />
      <View style={[styles.colorView, { backgroundColor: `rgb(${color.red},${color.green},${color.blue})` }]}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  colorView: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  }
});

export default ColorCounterScreen;
