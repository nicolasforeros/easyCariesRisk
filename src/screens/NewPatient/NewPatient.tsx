import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ImageLayout from '../../common/layouts/ImageLayout';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';
import Segues from '../../res/constants/segues';

const NewPatient = () => {
  
  const navigation: any = useNavigation();

  const handleOnPress = () => {
    navigation.navigate(Segues.REGISTER_PATIENT);
  };

  return (
    <ImageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo Paciente</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={handleOnPress}>
          <Image
            style={styles.image}
            source={require('../../res/assets/images/nuevoPaciente.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageLayout>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginBottom: 30,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
  imageContainer: {
    backgroundColor: Color.TEXT_SECONDARY,
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
  image: {
    resizeMode: 'contain',
    height: height*0.1,
    width: height*0.1,
    margin: 40,
  },
});

export default NewPatient;
