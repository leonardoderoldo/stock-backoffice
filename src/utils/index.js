/**
 * Number.prototype.format(n, x, s, c)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function (n, x, s, c) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
		num = this.toFixed(Math.max(0, ~~n))

	return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','))
}

export const converteMoeda = (currency = 0, digits = 2) => {
	return currency.toLocaleString('pt-br', { minimumFractionDigits: digits })
}

export const formatarCEP = (str) => {
	var re = /^([\d]{5})-*([\d]{3})/ // Pode usar ? no lugar do *
	if (re.test(str)) {
		return str.replace(re, '$1-$2')
	} else {
		alert('CEP inválido!')
	}
	return str
}

export const formatarCPF = (cpf = '') => {
	cpf = cpf?.replace(/[^\d]/g, '')
	return cpf?.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

// Funcao para retornar o menor valor de um array
export const Array = {
	min: (array) => {
		return Math.min.apply(Math, array)
	},
	max: function (array) {
		return Math.max.apply(Math, array)
	}
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
export const Base64 = {
	btoa: (input = '') => {
		let str = input
		let output = ''

		for (
			let block = 0, charCode, i = 0, map = chars;
			str.charAt(i | 0) || ((map = '='), i % 1);
			output += map.charAt(63 & (block >> (8 - (i % 1) * 8)))
		) {
			charCode = str.charCodeAt((i += 3 / 4))

			if (charCode > 0xff) {
				throw new Error(
					"'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
				)
			}

			block = (block << 8) | charCode
		}

		return output
	},

	atob: (input = '') => {
		let str = input.replace(/=+$/, '')
		let output = ''

		if (str.length % 4 == 1) {
			throw new Error("'atob' failed: The string to be decoded is not correctly encoded.")
		}
		for (
			let bc = 0, bs = 0, buffer, i = 0;
			(buffer = str.charAt(i++));
			~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
				? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
				: 0
		) {
			buffer = chars.indexOf(buffer)
		}

		return output
	}
}

export const objectIsEmpty = (obj) => {
	return Object.keys(obj).length === 0
}

export const castMinutesToHours = (minutes = 0) => {
	return Number((minutes / 60).toFixed(1))
}

export const minutesToHours = (n) => {
	var num = n
	var hours = num / 60
	var rhours = Math.floor(hours)
	var minutes = (hours - rhours) * 60
	var rminutes = Math.round(minutes)

	rhours = rhours < 10 ? '0' + rhours : rhours
	rminutes = rminutes < 10 ? '0' + rminutes : rminutes

	return rhours + ':' + rminutes
}

export const formatName = (fullName = '', maxName = 3) => {
	const split = fullName.trim().split(' ')
	const length = split.length
	let total = Math.floor(length / 2)
	if (length > maxName) total = maxName - 1
	let newName = ''

	for (let i = 0; i <= total; i++) {
		newName += split[i] + ' '
	}

	return toCamelCase(newName)
}

export const toCamelCase = (str) => {
	return str.replace(/\b\w/g, function (l) {
		return l.toUpperCase()
	})
}

export const getIniciais = (fullName) => {
	if (!fullName) return ''
	const split = formatName(fullName).split(' ')
	const length = split.length
	let newName = ''

	for (let i = 0; i <= length; i++) {
		const text = split[i]
		newName += text ? text.substr(0, 1) : ''
	}

	return newName.substr(0, 2)
}

export const getFirstName = (fullName) => {
	if (!fullName) return ''
	const split = formatName(fullName).split(' ')
	return split[0]
}

export const getLastName = (fullName) => {
	if (!fullName) return ''
	const split = formatName(fullName).split(' ')
	const length = split.length
	if (length <= 1) return ''
	return split[length - 1]
}

export const removeFormatDocument = (document) => {
	if (!document) return ''
	return document.split('.').join('').split('-').join('').split('/').join('')
}

export const removeFormatPhone = (phone) => {
	if (!phone) return ''
	return phone.split('(').join('').split(')').join('').split('-').join('')
}

export const removeFormatCEP = (cep) => {
	if (!cep) return ''
	return cep.split('.').join('').split('-').join('').split('/').join('')
}

export const parseJwt = (token) => {
	try {
		return JSON.parse(atob(token.split('.')[1]))
	} catch (e) {
		return null
	}
}

export const toBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onload = () => resolve(reader.result)
		reader.onerror = reject
	})
}
