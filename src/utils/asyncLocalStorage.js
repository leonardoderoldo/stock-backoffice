const AsyncLocalStorage = {
	setItem: async (key, value) => {
		return new Promise((resolve) => {
			localStorage.setItem(key, value)
			resolve()
		})
	},
	getItem: async (key) => {
		return new Promise((resolve) => {
			resolve(localStorage.getItem(key))
		})
	},
	getMultiple: async (keys = []) => {
		return new Promise((resolve) => {
			const all = []
			Promise.all(
				keys.map((e) => {
					return Promise.resolve().then(() => {
						all.push(localStorage.getItem(e))
					})
				})
			).then(() => {
				resolve(all)
			})
		})
	},
	removeMultiple: async (keys) => {
		return new Promise((resolve) => {
			const all = keys.map((e) => {
				return Promise.resolve().then(() => {
					localStorage.removeItem(e)
				})
			})
			Promise.all(all).then(() => resolve())
		})
	}
}

export default AsyncLocalStorage
