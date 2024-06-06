import * as Yup from 'yup';

const validacao = Yup.object().shape({
  postalCode: Yup.string().test(
    'postalCode_required',
    'O CEP é obrigatório',
    val => {
      return !!val;
    },
  ),
  street: Yup.string().test(
    'street_required',
    'O endereço é obrigatório',
    val => {
      return !!val;
    },
  ),
  number: Yup.string().test(
    'number_required',
    'O número é obrigatório',
    val => {
      return !!val;
    },
  ),
  neighborhood: Yup.string().test(
    'neighborhood_required',
    'O bairro é obrigatório',
    val => {
      return !!val;
    },
  ),
  state: Yup.string().test('state_required', 'O estado é obrigatório', val => {
    return !!val;
  }),
  city: Yup.string().test('city_required', 'A cidade é obrigatória', val => {
    return !!val;
  }),
});

export default validacao;
