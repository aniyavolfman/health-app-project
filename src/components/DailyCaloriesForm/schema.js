import * as yup from 'yup';

export const schema = yup.object().shape({
    height: yup.number()
    .min(100, 'Мінімальне значення 100 см')
    .max(260, 'Максимальне значення 250 см')
    .required('Поле обовʼязкове'),
 age: yup.number().integer().required("Поле обовʼязкове"),
 weight: yup.number().integer().required("Поле обовʼязкове"),
    desiredWeight: yup.number().integer().required("Поле обовʼязкове"),
})