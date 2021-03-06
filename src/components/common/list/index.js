import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Card from '../card';
import styles from './styles';

export default function List({type, navigation, mode, data, insertData}) {
  return (
    <View>
      <Text style={styles.text}>{type}</Text>
      <ScrollView horizontal={true}>
        {data.map((item, i) => (
          <Card
            key={i}
            dish={item}
            mode={mode}
            isLast={i === data.length - 1}
            type={type}
            onPress={() => {
              insertData([item]);
              navigation.navigate('Detail', {
                type,
                name: item.title,
                mode,
                dish: item,
              });
            }}
          />
        ))}
      </ScrollView>
    </View>
  );
}
