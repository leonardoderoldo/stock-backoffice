// import StepsEnum from './stepsEnum'

import StepsEnum from './stepsEnum'

const TelasEnum = {
	DASHBOARD: { name: '/dashboard' },
	PROFILE: { name: '/profile' },
	SETTINGS: { name: 'School' },
	SPLASH_SCREEN: { name: 'Splashscreen' },
	INTRUDUTION: { name: '/introduction' },
	DEPENDENTS: { name: '/dependents' },
	SIGNIN: { name: '/signin' },
	SIGNUP: { name: '/signup' },
	CHANGE_PASSWORD: { name: '/change-password' },
	CREATE_RESTAURANT: {
		name: '/sign-up/company',
		task: { name: StepsEnum.CREATE_RESTAURANT.task, order: 0 }
	},
	CREATE_RESTAURANT_ACCOUNT_BANKING: {
		name: '/sign-up/account-banking',
		task: { name: StepsEnum.CREATE_RESTAURANT_ACCOUNT_BANKING.task, order: 0 }
	},
	CREATE_ADDRESS: {
		name: '/sign-up/address-register',
		task: { name: StepsEnum.CREATE_RESTAURANT_ADDRESS.task, order: 0 }
	},
	ACCPECT_RESTAURANT_TERMS: {
		name: '/sign-up/custom/accept-school-terms',
		task: { name: StepsEnum.ACCPECT_RESTAURANT_TERMS.task, order: 0 }
	},

	INVITE: { name: '/invite' },
	EMPLOYEES: { name: '/employees' },
	EMPLOYEES_REGISTER: { name: '/employees-register' },
	REPORTS: { name: '/reports' }
}

export default TelasEnum
