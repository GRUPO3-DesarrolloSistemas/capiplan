// src/components/MyAgenda/styles.ts

import { StyleSheet } from 'react-native';
import { colors } from '../../src/themes/colors';
import { sizes } from '../../src/themes/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#8A67FF',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#FFFFFF',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
  },
  emptyDateText: {
    color: '#868686',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    color: colors.gray,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.extraLarge,
    alignSelf: 'center',
    marginBottom: 20,
  },
  modalInput: {
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 7,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 10,
    color: colors.gray,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.medium,
    backgroundColor: colors.white,
  },
  modalButtonContainer: {
    flexDirection: 'column',
    gap: 20,
    marginTop: 20,
  },
  modalButton: {
    width: 150,
    backgroundColor: colors.purple,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  modalButtonCancel: {
    width: 150,
    backgroundColor: colors.lightOrange,
    borderRadius: 20,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  modalButtonText: {
    color: colors.white,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.large,
    lineHeight: sizes.large + 2,
  },
  modalButtonIcon: {
    color: colors.white,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#512BCF',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
  addButtonText: {
    color: colors.white,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: 'Comfortaa Bold',
    fontSize: sizes.large,
  },
});

export default styles;
