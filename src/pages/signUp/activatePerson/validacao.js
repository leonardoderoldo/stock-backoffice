import * as Yup from 'yup'

export default Yup.object().shape({
	//Token
	token: Yup.string()
		.test('token_required', 'O token é obrigatória', (val) => {
			return !!val
		})
		.min(6, ({ min }) => `O token deve conter no mínimo ${min} caracteres.`)
		.max(6, ({ max }) => `O token deve conter no máximo ${max} caracteres.`),
	//END Token
	//Security
	password: Yup.string()
		.test('password_required', 'A senha é obrigatória', (val) => {
			return !!val
		})
		.min(6, ({ min }) => `A senha deve conter no mínimo ${min} caracteres.`)
		.max(15, ({ max }) => `A senha deve conter no máximo ${max} caracteres.`),
	confirmPassword: Yup.string()
		.test('confirmPassword_required', 'A confirmação da senha é obrigatória', (val) => {
			return !!val
		})
		.oneOf([Yup.ref('password')], 'As senhas não são iguais.')
	//END Security
})
