import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  accountContainer: {
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    padding: 10,
  },
  accountHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  accountTitle: {
    left: 40,
  },
  accountTitleLabel: {
    color: '#9e9e9e',
    left: 2
  },
  accountTitleText: {
    color: '#181818',
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 5,
  },

  iconsContainer: {
    flexDirection: 'row',
    gap: 10,
    right: 20,
  },
});
