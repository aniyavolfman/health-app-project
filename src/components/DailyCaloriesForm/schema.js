import * as yup from 'yup';

export const schema = yup.object().shape({
    height: yup.number()
      .typeError('Значення має бути числом')
    .min(120, 'Мінімальне значення 120 см')
    .max(220, 'Максимальне значення 220 см')
    .required('Поле обовʼязкове'),
  age: yup.number()
  .typeError('Значення має бути числом')
  .min(18, 'Мінімальне значення 18')
  .max(100, 'Максимальне значення 100')
  .required('Поле обовʼязкове'),
  weight: yup.number()
  .typeError('Значення має бути числом')
  .min(40, 'Мінімальне значення 40 кг')
  .max(200, 'Максимальне значення 200 кг')
  .required('Поле обовʼязкове'),
  desiredWeight: yup.number()
  .typeError('Значення має бути числом')
  .min(40, 'Мінімальне значення 40 кг')
  .max(200, 'Максимальне значення 200 кг')
  .required('Поле обовʼязкове'),
  bloodType: yup.mixed().oneOf(['1', '2', '3', '4'], 'Виберіть, будь ласка, групу крові').required('Поле обовʼязкове'),
  })