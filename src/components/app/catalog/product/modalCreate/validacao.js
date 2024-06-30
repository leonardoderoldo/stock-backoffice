import * as Yup from 'yup'

const cadastroValidacao = (step) => {
	return Yup.object().shape({
		template: Yup.string().test('template_required', 'O tipo da categoria é obrigatório', (val) => {
			if (step !== 1) {
				return true
			}
			return !!val
		}),
		name: Yup.string().test('name_required', 'O nome do produto é obrigatório', (val) => {
			if (step !== 2) {
				return true
			}
			return !!val
		}),
		description: Yup.string().test('description_required', 'A descrição do produto é obrigatória', (val) => {
			if (step !== 2) {
				return true
			}
			return !!val
		})
	})
}

export default cadastroValidacao
