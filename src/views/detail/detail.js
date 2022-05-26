import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import BarTitleDetail from '../../components/common/barTitleDetail';
import styles from './stylesdetail';

const backgroundColor = mode => {
  if (mode) {
    return styles.nightcolorcontainer;
  } else {
    return styles.normalcolorcontainer;
  }
};

export default function Detail({navigation, route}) {
  return (
    <ScrollView
      style={{...styles.container, ...backgroundColor(route.params.mode)}}>
      <BarTitleDetail
        navigation={navigation}
        type={route.params.type}
        name={route.params.name}
        mode={route.params.mode}
        dish={route.params.dish}
      />
      <View style={styles.padding}>
        <Text style={route.params.mode ? styles.a1 : styles.na1}>
          Ingredients
        </Text>
        <Text style={route.params.mode ? styles.a2 : styles.na2}>
          for {route.params.dish.servings} servings
        </Text>
        {route.params.dish.ingredients.map((item, i) => (
          <View key={i.toString()} style={styles.listcontainer}>
            <Text
              style={route.params.mode ? styles.lefttext : styles.nlefttext}>
              {item.ingredient}
            </Text>
            <Text
              style={route.params.mode ? styles.righttext : styles.nrighttext}>
              {item.size}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
