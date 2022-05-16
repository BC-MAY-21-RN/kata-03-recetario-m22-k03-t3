import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    marginBottom: 18,
    flexDirection: 'row',
    width: 142,
    height: 36,
    display: 'flex',
    alignItems: 'center',
  },
  oval: {
    backgroundColor: '#4422C5',
    width: 36,
    height: 36,
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {color: '#fff', fontSize: 15, lineHeight: 18, marginLeft: 14},
});

export default styles;
