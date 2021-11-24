import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RadioButton } from 'react-native-radio-buttons-group';
import { IQuestion } from '../../common/types/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';

interface IProps {
  id: number;
  question: IQuestion;
  Icon: React.ElementType;
  onHandleChange: (id: number, value: string) => void;
}

const Question = ({ id, question, Icon, onHandleChange }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Icon />
        <Text style={styles.titleText}>{question.name}</Text>
      </View>
      <Text style={styles.descriptionText}>
        {question.description}
        <Text style={styles.idText}>
          {` [${id+1}]`}
        </Text>
      </Text>
      <View style={styles.radioGroup}>
        <RadioButton
          id={'yes'}
          label='Si'
          value='yes'
          size={16}
          color={Color.PRIMARY}
          labelStyle={styles.radioButton}
          selected={question.isYes}
          onPress={(value) => onHandleChange(id, value)}
        />
        <RadioButton
          id={'no'}
          label='No'
          value='no'
          size={16}
          color={Color.PRIMARY}
          labelStyle={styles.radioButton}
          selected={question.isYes === false}
          onPress={(value) => onHandleChange(id, value)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 26,
    paddingBottom: 40,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    marginLeft: 20,
    color: Color.PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.ABOUT,
  },
  descriptionText: {
    color: Color.TEXT_QUESTION,
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ABOUT,
  },
  idText: {
    color: Color.TEXT_QUESTION,
    fontFamily: Font.REGULAR,
    fontSize: 10,
  },
  radioButton: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
  },
});

export default Question;
