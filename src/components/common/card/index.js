import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import functions from './functions';

export default function Card({isLast, type, onPress, mode, dish}) {
  //const url = '../../../assets/images/' + encodeURIComponent(dish.image);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={functions.isLastStyle(!isLast, type === 'TRENDING')}>
      <Image
        source={{uri: dish.image}}
        style={type === 'TRENDING' ? styles.imagetrending : styles.imagerecent}
      />
      <Text style={functions.textStyle(mode, type === 'TRENDING')}>
        {dish.title}
      </Text>
    </TouchableOpacity>
  );
}

// {
//   uri: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg',
// }
