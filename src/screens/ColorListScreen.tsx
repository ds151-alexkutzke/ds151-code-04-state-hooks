import { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';

interface ColorItem {
  id: string;
  code: string;
}

const ColorListScreen = () => {

  // ['rgb(255,255,255)', 'rgb(122,122,122), ...']
  const [colors, setColors] = useState<ColorItem[]>([]);

  const addColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const newColor: ColorItem = {
      id: Date.now().toString() + Math.random().toString(), // Geração de ID único
      code: `rgb(${r},${g},${b})`
    };

    setColors(prevColors => [...prevColors, newColor]);
  }

  return (
    <View>
      <Button
        title="Adiciona Cor"
        onPress={() => addColor()}
      />
      <FlatList
        data={colors}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={{
            backgroundColor: item.code,
            width: 100,
            height: 100
          }} />
        }
      />

    </View>
  )
}

export default ColorListScreen;

