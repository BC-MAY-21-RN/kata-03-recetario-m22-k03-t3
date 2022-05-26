import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 16,
    paddingTop: 72 - StatusBar.currentHeight,
  },
  nightcolorcontainer: {backgroundColor: '#282828'},
  normalcolorcontainer: {backgroundColor: '#ffffff'},
  br: {
    height: 25,
  },
});

export default styles;
