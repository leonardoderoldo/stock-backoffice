import * as Yup from 'yup'

const validacao = Yup.object().shape({
	bankCode: Yup.string().test('bankCode_required', 'O Banco é obrigatório', (val) => {
		return !!val
	}),
	agency: Yup.string().test('agency_required', 'A agência é obrigatório', (val) => {
		return !!val
	}),
	accountNumber: Yup.string().test('accountNumber_required', 'O número da conta é obrigatório', (val) => {
		return !!val
	}),
	verifyingDigit: Yup.string().test('verifyingDigit_required', 'O dígito verificador é obrigatório', (val) => {
		return !!val
	})
})

export default validacao
