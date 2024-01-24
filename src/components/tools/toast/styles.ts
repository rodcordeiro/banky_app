import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 99999,
    bottom: 20,
    left: 10,
    paddingHorizontal: 25,
    paddingVertical: 20,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
  },
  icon: {
    fontSize: 18,
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
  },
  text: {
    fontSize: 14,
    width: '80%',
  },
  info: {
    backgroundColor: '#33a9f6',
    color: 'white',
  },
  warning: {
    backgroundColor: '#d60',
    color: 'white',
  },
  error: {
    backgroundColor: '#a12',
    color: 'white',
  },
  success: {
    backgroundColor: '#3b3',
    color: 'white',
  },
});
