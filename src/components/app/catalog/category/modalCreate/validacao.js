import * as Yup from 'yup'

const cadastroValidacao = (step) => {
	return Yup.object().shape({
		template: Yup.string().test('template_required', 'O tipo da categoria é obrigatório', (val) => {
			if (step !== 1) {
				return true
			}
			return !!val
		}),
		name: Yup.string().test('name_required', 'O nome da categoria é obrigatório', (val) => {
			if (step !== 2) {
				return true
			}
			return !!val
		})
	})
}

export default cadastroValidacao
