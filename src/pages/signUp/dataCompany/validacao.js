import * as Yup from 'yup'

export default Yup.object().shape({
	//Businness
	companyName: Yup.string().test('businessName_required', 'O nome da empresa é obrigatório', (val) => {
		return !!val
	}),
	// businessName: Yup.string()
	// 	.test('companyName_required', 'A razão social é obrigatório', (val) => {
	// 		return !!val
	// 	})
	// 	.test('companyName_complete', 'Digite a razão social completo', (val) => {
	// 		if (val) {
	// 			return val.includes(' ')
	// 		}
	// 		return false
	// 	}),
	celPhone: Yup.string()
		.test('celPhone_required', 'O celular é obrigatório', (val) => {
			if (val) val = val.split('_').join('').replace('(', '').replace(')', '')
			return !!val
		})
		.min(11, ({ min }) => `O celular deve conter no mínimo ${min} caracteres.`)
		.max(15, ({ max }) => `O celular deve conter no máximo ${max} caracteres.`)
	// cnpj: Yup.string()
	// 	.test('cnpj_required', 'O CNPJ é obrigatório', (val) => {
	// 		return !!val
	// 	})
	// 	.test('cnpj', 'Digite um CNPJ válido', (val) => {
	// 		return cnpj.isValid(val)
	// 	})
	// 	.test('cnpj_existe', 'O CNPJ digitado já está sendo usado', async (val) => {
	// 		if (val) {
	// 			let _cnpj = removeFormatDocument(val)
	// 			if (_cnpj.length >= 14) {
	// 				try {
	// 					let response = false //await checkUsuarioCpfService(cpf);
	// 					return !response
	// 				} catch (error) {
	// 					return true
	// 				}
	// 			}
	// 		}
	// 		return false
	// 	})
})
