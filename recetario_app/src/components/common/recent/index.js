import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import Card from '../card';

export default function Recent({type, navigation}) {
  const data = new Array(5).fill(0);
  return (
    <View>
      <Text style={{fontSize: 21, color: '#f91a81', marginBottom: 18.48}}>
        {type}
      </Text>
      <ScrollView horizontal={true}>
        {data.map((_, i) => (
          <Card
            isLast={i === data.length - 1}
            type={type}
            onPress={() =>
              navigation.navigate('Detail', {type, name: 'Pizsa de colima'})
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
