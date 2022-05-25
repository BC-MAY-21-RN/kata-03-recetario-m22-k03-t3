import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Card from '../card';
import styles from './styles';

export default function List({type, navigation, mode}) {
  const data = new Array(5).fill(0);
  return (
    <View>
      <Text style={styles.text}>{type}</Text>
      <ScrollView horizontal={true}>
        {data.map((item, i) => (
          <Card
            key={i}
            mode={mode}
            isLast={i === data.length - 1}
            type={type}
            onPress={() =>
              navigation.navigate('Detail', {
                type,
                name: 'Pizza de colima',
                mode,
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
