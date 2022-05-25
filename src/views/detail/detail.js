import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import BarTitleDetail from '../../components/common/barTitleDetail';
import styles from './stylesdetail';

/*import ExitSVG from '../../assets/icons/exit.svg';
import ShareSVG from '../../assets/icons/share.svg';
import HeartSVG from '../../assets/icons/heart.svg';*/
// ingredients

export default function Detail({navigation, route}) {
  const ingredients = new Array(4).fill(0);
  return (
    <ScrollView
      style={route.params.mode ? styles.container : styles.container2}>
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

/**
 *                     "ingredient": "Tomato",
                    "size": 4
 */

/*

      <Image
        source={require('../../assets/images/pizza.jpg')}
        style={{
          width: '100%',
          height: 385,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: 385,
          backgroundColor: 'rgba(43,41,41,0.53)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          paddingBottom: 42.5,
          paddingHorizontal: 26.8,
        }}>
        <View
          style={{
            height: 64,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            top: StatusBar.currentHeight,
            left: 25,
            right: 28,
          }}>
          <TouchableOpacity style={{padding: 8}} onPress={navigation.goBack}>
            <ExitSVG />
          </TouchableOpacity>
          <View style={{flex: 1}} />
          <TouchableOpacity style={{padding: 8, marginRight: 15}}>
            <ShareSVG />
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 8}}>
            <HeartSVG />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 18,
            lineHeight: 22,
            color: '#fff',
            marginBottom: 2.4,
          }}>
          {route.params.type}
        </Text>
        <Text style={{fontSize: 25, lineHeight: 30, color: '#fff'}}>
          {route.params.name}
        </Text>
      </View>

*/
