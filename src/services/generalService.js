import { create } from 'apisauce'

const api = create({
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
})

export const buscaCEP = async (cep) => {
	const response = await api.get(`https://viacep.com.br/ws/${cep}/json`)
	if (response && response.status === 200) {
		return response.data
	}
	throw Error('Erro ao buscar CEP.')
}
