import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonPrimary from '../../common/components/ButtonPrimary/ButtonPrimary';
import SimpleLayout from '../../common/layouts/SimpleLayout';
import { RootStackParamList } from '../../navigation/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';

const References = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'References'>) => {
  const handleOnBack = () => {
    navigation.goBack();
  };

  return (
    <SimpleLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../res/assets/images/logo.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Referencias</Text>
          <View style={styles.useTerms}>
            <Text style={styles.useTermsText}>
              [1] van der Kaaij NCW. Preventie van wittevleklaesies die ontstaan
              tijdens een behandeling met vaste orthodontische apparatuur
              [Prevention of white spot lesion formation during treatment with
              fixed orthodontic appliances]. Ned Tijdschr Tandheelkd.
              2020;127(12):699-704.{'\n\n'}[2] Sanders A, Cardel M, Laniado N,
              Kaste L, Finlayson T, Perreira K, Sotres-Alvarez D. Diet quality
              and dental caries in the Hispanic Community Health Study/Study of
              Latinos. J Public Health Dent. 2020;80(2):140-149.{'\n\n'}[3]
              Vahabzadeh Z, Hashemi ZM, Nouri B, Zamani F, Shafiee F. Salivary
              enzymatic antioxidant activity and dental caries: A
              cross-sectional study. Dent Med Probl. 2020;57(4):385-391.{'\n\n'}
              [4] Badr F, Sabbah W. Inequalities in Untreated Root Caries and
              Affordability of Dental Services among Older American Adults. Int
              J Environ Res Public Health. 2020 Nov 17;17(22):8523{'\n\n'}[5]
              Brons-Piche E, Eckert GJ, Fontana M. Predictive Validity of a
              Caries Risk Assessment Model at a Dental School. J Dent Educ. 2019
              Feb;83(2):144-150.{'\n\n'}[6] Figuero E, Nóbrega DF,
              García-Gargallo M, Tenuta LM, Herrera D, Carvalho JC. Mechanical
              and chemical plaque control in the simultaneous management of
              gingivitis and caries: a systematic review. J Clin Periodontol.
              2017 Mar;44 Suppl 18:S116-S134.{'\n\n'}[7] Mejàre, I.; Axelsson,
              S.; Dahlén, G.; Espelid, I.; Norlund, A.; Tranæus, S.; Twetman, S.
              Caries risk assessment. A systematic review. Acta Odontol. Scand.
              2014, 72, 81–91.{'\n\n'}[8] Mejàre, I.; Axelsson, S.; Dahlén, G.;
              Espelid, I.; Norlund, A.; Tranæus, S.; Twetman, S. Caries risk
              assessment. A systematic review. Acta Odontol. Scand. 2014, 72,
              81–91.{'\n\n'}[9] Merchant AT. Periodontitis and dental caries
              occur together. J Evid Based Dent Pract. 2012 Sep;12(3
              Suppl):18-9.{'\n\n'}[10] Johnston, L.; Vieira, A.R. Caries
              experience and overall health status. Oral Health Prev. Dent.
              2014, 12, 163–170.
            </Text>
          </View>
          <ButtonPrimary text="Regresar" onPress={handleOnBack} />
        </View>
      </ScrollView>
    </SimpleLayout>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height * 0.13,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
    textAlign: 'center',
  },
  useTerms: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '95%',
  },
  useTermsText: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
  },
  moreInfo: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    textDecorationLine: 'underline',
  },
  referenceText: {
    fontFamily: Font.BOLD,
  },
  privacyPolicies: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
    textDecorationLine: 'underline',
  },
});

export default References;
