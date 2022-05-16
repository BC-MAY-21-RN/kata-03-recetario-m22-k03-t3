import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 36,
    width: '100%',
    backgroundColor: 'rgba(142, 142, 147, 0.12)',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    paddingVertical: 0,
  },
  searchBar: {
    height: '100%',
    flex: 1,
    fontSize: 17,
    lineHeight: 20,
    paddingLeft: 8,
    paddingVertical: 0,
    color: '#fff',
  },
  dictationButton: {
    padding: 10,
  },
});

export default styles;
