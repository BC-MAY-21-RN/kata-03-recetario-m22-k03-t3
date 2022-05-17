import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ExitSVG from '../../../assets/icons/exit.svg';
import ShareSVG from '../../../assets/icons/share.svg';
import HeartSVG from '../../../assets/icons/heart.svg';
import styles from './styles';

const IconButtons = ({navigation}) => {
  return (
    <View style={styles.iconcontainer}>
      <TouchableOpacity style={styles.touchable1} onPress={navigation.goBack}>
        <ExitSVG />
      </TouchableOpacity>
      <View style={styles.iconsright} />
      <TouchableOpacity style={styles.touchable2}>
        <ShareSVG />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable1}>
        <HeartSVG />
      </TouchableOpacity>
    </View>
  );
};

export default function BarTitleDetail({navigation, type, name}) {
  return (
    <View>
      <Image
        source={require('../../../assets/images/pizza.jpg')}
        style={styles.image}
      />
      <IconButtons navigation={navigation} />
      <View style={styles.viewfront}>
        <Text style={styles.texttype}>{type}</Text>
        <Text style={styles.textname}>{name}</Text>
      </View>
    </View>
  );
}
