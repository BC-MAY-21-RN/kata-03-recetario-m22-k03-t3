import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#282828',
    paddingHorizontal: 16,
    paddingTop: 72 - StatusBar.currentHeight,
  },
  container2: {
    height: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingTop: 72 - StatusBar.currentHeight,
  },
});

export default styles;
