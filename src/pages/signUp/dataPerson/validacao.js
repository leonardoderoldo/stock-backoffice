import { cpf } from 'cpf-cnpj-validator'
import * as Yup from 'yup'

import { moment } from '../../../configs'
import { removeFormatDocument } from '../../../utils'

export default Yup.object().shape({
	//Personal
	firstName: Yup.string().test('firstName_required', 'O primeiro nome é obrigatório', (val) => {
		return !!val
	}),
	lastName: Yup.string().test('lastName_required', 'O sobrenome é obrigatório', (val) => {
		return !!val
	}),
	email: Yup.string()
		.email('Digite um email válido')
		.test('email_required', 'O e-mail é obrigatório', (val) => {
			return !!val
		}),
	birthDate: Yup.string()
		.test('birthdate_require', 'A data de nascimento é obrigatório', (val) => {
			return !!val
		})
		.test('birthdate_above', 'Você deve ser maior de idade', (value) => {
			return moment().diff(moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'), 'years') >= 18
		})
		.test('birthdate_below', 'Você deve ter até 65', (value) => {
			return moment().diff(moment(value, 'DD/MM/YYYY').format('YYYY-MM-DD'), 'years') <= 65
		}),
	cpf: Yup.string()
		.test('cpf_required', 'O CPF é obrigatório', (val) => {
			return !!val
		})
		.test('cpf', 'Digite um CPF válido', (val) => {
			return cpf.isValid(val)
		})
		.test('cpf_existe', 'O CPF digitado já está sendo usado', async (val) => {
			if (val) {
				let cpf = removeFormatDocument(val)
				if (cpf.length >= 11) {
					try {
						// setIsloading(true);
						let response = false //await checkUsuarioCpfService(cpf);
						return !response
					} catch (error) {
						return true
					} finally {
						// setIsloading(false);
					}
				}
			}
			return false
		})
	//Personal
})
