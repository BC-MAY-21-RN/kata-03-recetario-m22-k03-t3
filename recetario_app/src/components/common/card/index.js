import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';

export default function Card({isLast, type, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: type === 'TRENDING' ? 110 : 160,
        height: type === 'TRENDING' ? 150 : 228,
        marginRight: !isLast ? 21.5 : 0,
      }}>
      <Image
        source={require('../../../assets/images/pizza.jpg')}
        style={{
          width: type === 'TRENDING' ? 110 : 160,
          height: type === 'TRENDING' ? 110 : 195,
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: type === 'TRENDING' ? 14 : 18,
          color: '#ffffff',
          marginTop: 13.8,
        }}>
        Pizza de colima
      </Text>
    </TouchableOpacity>
  );
}

// {
//   uri: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
// }
