import {StyleSheet} from 'react-native';

export const screenStyle = StyleSheet.create({
  homeComponent: {
    paddingLeft: 20,
    paddingRight: 20,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    flex: 1,
  },
  homeHeader: {
    fontSize: 40,
    fontWeight: '900',
    flexWrap: 'wrap',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 24,
    paddingTop: 10,
    paddingBottom: 10,
  },
  homeOptions: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  homeOptionsColumn: {
    justifyContent: 'space-between',
    maxWidth: '47%',
  },
  homeFooter: {
    fontSize: 24,
    paddingBottom: 40,
    paddingTop: 40,
    textAlign: 'center',
  },
  grow1: {
    flex: 1,
  },
});
