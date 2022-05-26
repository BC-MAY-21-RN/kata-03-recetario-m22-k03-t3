import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  nightcolorcontainer: {backgroundColor: '#282828'},
  normalcolorcontainer: {backgroundColor: '#ffffff'},
  a1: {
    fontSize: 20,
    lineHeight: 24,
    color: '#fff',
    marginBottom: 6.5,
  },
  a2: {fontSize: 18, lineHeight: 22, color: '#fff'},
  padding: {padding: 20.3},
  listcontainer: {
    height: 50,
    borderBottomColor: '#3B3B3B',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lefttext: {
    fontSize: 16,
    lineHeight: 19,
    color: '#fff',
  },
  righttext: {fontSize: 16, lineHeight: 19, color: '#fff'},
  na1: {
    fontSize: 20,
    lineHeight: 24,
    color: '#000',
    marginBottom: 6.5,
  },
  na2: {fontSize: 18, lineHeight: 22, color: '#000'},
  nlefttext: {
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
  },
  nrighttext: {fontSize: 16, lineHeight: 19, color: '#000'},
});

export default styles;
