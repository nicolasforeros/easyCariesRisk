import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import ButtonPrimary from '../../common/components/ButtonPrimary/ButtonPrimary';
import InputPrimary from '../../common/components/InputPrimary/InputPrimary';
import ImageLayout from '../../common/layouts/ImageLayout';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';
import Segues from '../../res/constants/segues';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

const radioButtonsStyles = {
  size: 18,
  color: Color.PRIMARY,
  labelStyle: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.INPUT,
  },
};

const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Femenino',
    value: 'femenino',
    ...radioButtonsStyles,
  },
  {
    id: '2',
    label: 'Masculino',
    value: 'masculino',
    ...radioButtonsStyles,
  },
];

const RegisterPatient = () => {
  const navigation: any = useNavigation();

  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    setRadioButtons(radioButtonsArray);
  }

  const handleOnRegister = () => {
    navigation.navigate(Segues.TEST);
  };

  return (
    <ImageLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.content}>
          <Text style={styles.title}>Registro del Paciente</Text>
          <InputPrimary placeholder='Edad' />
          <View>
            <RadioGroup
              containerStyle={{ marginBottom: 40 }}
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout='row'
            />
          </View>
          <ButtonPrimary text='Consultar' onPress={handleOnRegister} />
        </View>
      </ScrollView>
    </ImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 50,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
});

export default RegisterPatient;
