import { IQuestion } from '../../common/types/types';

const question1: IQuestion = {
  name: 'Retención de placa',
  description:
    '¿La persona tiene retención de placa dental, es decir tiene alguna de éstas condiciones: mal-posición dentaria, fosas y fisuras profundas, rehabilitación protésica o aparatología ortodóntica?',
  weight: 2,
  isYes: undefined,
};

const question2: IQuestion = {
  name: 'Dieta con alto contenido de azúcar',
  description:
    '¿Consume refrigerios con alto contenido de azúcar (dulces, gaseosas, harinas, jugos envasados)?',
  weight: 1.5,
  isYes: undefined,
};

const question3: IQuestion = {
  name: 'Factores de riesgo salivares',
  description:
    '¿Al colocar el espejo en el piso de la boca este no se separa, se queda pegado?',
  weight: 2,
  isYes: undefined,
};

const question4: IQuestion = {
  name: 'Presencia de factores que afectan el cumplimiento del paciente con las indicaciones',
  description:
    'Presencia de factores que afectan el cumplimiento del paciente con las indicaciones ¿Se realiza control o chequeo odontológico al menos una vez al año?',
  weight: 2,
  isYes: undefined,
};

const question5: IQuestion = {
  name: 'Experiencia pasada o actual de caries',
  description:
    '¿La persona tuvo caries en los dientes temporales? o ¿Tienes caries activa?',
  weight: 75,
  isYes: undefined,
};

const question6: IQuestion = {
  name: 'Presencia de placa bacteriana /cálculos dentales',
  description:
    '¿En el momento del examen la persona tiene abundante placa dental y/o cálculos abundantes?',
  weight: 13,
  isYes: undefined,
};

const question7: IQuestion = {
  name: 'Restauración con más de 5 años',
  description: '¿La persona tiene restauraciones en resina de más de 5 años?',
  weight: 1.5,
  isYes: undefined,
};

const question8: IQuestion = {
  name: 'Más de 8 dientes restaurados',
  description: '¿La persona tiene más de ocho dientes restaurados?',
  weight: 1,
  isYes: undefined,
};

const question9: IQuestion = {
  name: 'Historia o peridontitis activa',
  description: '¿La persona ha tenido o tiene peridontitis?',
  weight: 1,
  isYes: undefined,
};

const question10: IQuestion = {
  name: 'Presencia de condición sistémica .(cardiovasculares, diabetes, asma, depresión hepatitis)',
  description: '¿La persona tiene una enfermedad crónica de larga duración?',
  weight: 1,
  isYes: undefined,
};

export const initialQuestions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
