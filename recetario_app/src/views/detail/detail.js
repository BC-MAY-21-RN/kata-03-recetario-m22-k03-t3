import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import BarTitleDetail from '../../components/common/barTitleDetail';

import ExitSVG from '../../assets/icons/exit.svg';
import ShareSVG from '../../assets/icons/share.svg';
import HeartSVG from '../../assets/icons/heart.svg';

export default function Detail({navigation, route}) {
  const ingredients = new Array(4).fill(0);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#282828',
        height: '100%',
      }}>
      <BarTitleDetail
        navigation={navigation}
        type={route.params.type}
        name={route.params.name}
      />
      <View style={{padding: 20.3}}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 24,
            color: '#fff',
            marginBottom: 6.5,
          }}>
          Ingredients
        </Text>
        <Text style={{fontSize: 18, lineHeight: 22, color: '#fff'}}>
          for 3 servings
        </Text>
        {ingredients.map((_, i) => (
          <View
            key={i.toString()}
            style={{
              height: 50,
              borderBottomColor: '#3B3B3B',
              borderBottomWidth: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 19,
                color: '#fff',
              }}>
              Ingredient
            </Text>
            <Text style={{fontSize: 16, lineHeight: 19, color: '#fff'}}>
              {3} {'cups'}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

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
