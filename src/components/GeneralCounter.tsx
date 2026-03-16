import { View, Button, Text } from 'react-native';

interface generalCounterProps {
  labelInc: string,
  labelDec: string,
  onInc: () => void,
  onDec: () => void,
  value: number,
}

const GeneralCounter = ({ labelInc, labelDec, onInc, onDec, value }: generalCounterProps) => {

  return (
    <View>
      <Button
        title={labelInc}
        onPress={onInc}
      />
      <Button
        title={labelDec}
        onPress={onDec}
      />
      <Text>
        {value}
      </Text>
    </View>
  );
};

export default GeneralCounter;
