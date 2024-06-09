import * as Yup from 'yup'

const cadastroValidacao = () => {
	return Yup.object().shape({
		title: Yup.string().test('title_required', 'O título é obrigatória', (val) => {
			return !!val
		})
	})
}

export default cadastroValidacao
