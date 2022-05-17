import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 385,
  },
  viewfront: {
    position: 'absolute',
    width: '100%',
    height: 385,
    backgroundColor: 'rgba(43,41,41,0.53)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingBottom: 42.5,
    paddingHorizontal: 26.8,
  },
  iconcontainer: {
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: StatusBar.currentHeight,
    left: 25,
    right: 28,
  },
  touchable1: {padding: 8},
  touchable2: {padding: 8, marginRight: 15},
  texttype: {
    fontSize: 18,
    lineHeight: 22,
    color: '#fff',
    marginBottom: 2.4,
  },
  textname: {fontSize: 25, lineHeight: 30, color: '#fff'},
  iconsright: {flex: 1},
});

export default styles;
