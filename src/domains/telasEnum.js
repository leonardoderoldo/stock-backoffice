// import StepsEnum from './stepsEnum'

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
	CREATE_SCHOOL: {
		name: '/sign-up/company'
		// task: { name: StepsEnum.CREATE_SCHOOL.task, order: 0 }
	},
	CREATE_ADDRESS: {
		name: '/sign-up/address-register'
		// task: { name: StepsEnum.CREATE_SCHOOL_ADDRESS.task, order: 0 }
	},
	CREATE_SCHOOL_TEACHER: {
		name: '/sign-up/teacher-register'
		// task: { name: StepsEnum.CREATE_SCHOOL_TEACHER.task, order: 0 }
	},
	CREATE_SCHOOL_COURSE: {
		name: '/sign-up/custom/course-register'
		// task: { name: StepsEnum.CREATE_SCHOOL_COURSE.task, order: 0 }
	},
	CREATE_SCHOOL_CLASS: {
		name: '/sign-up/custom/course-register'
		// task: { name: StepsEnum.CREATE_SCHOOL_CLASS.task, order: 0 }
	},
	ACCPECT_SCHOOL_TERMS: {
		name: '/sign-up/custom/accept-school-terms'
		// task: { name: StepsEnum.ACCPECT_SCHOOL_TERMS.task, order: 0 }
	},
	STUDENT: { name: '/student' },
	INVITE: { name: '/invite' },
	STUDENT_REGISTER: { name: '/student-register' },
	ANNOUNCEMENTS: { name: '/announcements' },
	ANNOUCEMENT_EDIT: { name: '/announcement-edit' },
	ANNOUCEMENT_REGISTER: { name: '/announcement-register' },
	APPOINTMENT_BOOK: { name: '/appointment-book' },
	APPOINTMENT_BOOK_DATA: { name: '/appointment-book-data' },
	APPOINTMENT_BOOK_EDIT: { name: '/appointment-book-edit' },
	APPOINTMENT_BOOK_REGISTER: { name: '/appointment-book-create' },
	COURSES: { name: '/courses' },
	CLASSES: { name: '/classes' },
	CLASS_REGISTER: { name: '/class-register' },
	CLASS_UPDATE: { name: '/class-update' },
	CLASS_ENROLLMENT: { name: '/class-enrollment' },
	COURSE_AND_CLASS_REGISTER: { name: '/course-cnd-class-register' },
	STUDENT_CLASS_ENROLLMENT: { name: '/student-class-enrollment' },
	EMPLOYEES: { name: '/employees' },
	EMPLOYEES_REGISTER: { name: '/employees-register' },
	REPORTS: { name: '/reports' },
	SURVEY: { name: '/survey' },
	SURVEY_CREATE: { name: '/survey-create' },
	SURVEY_INSIGHTS: { name: '/survey-insights' },
	PHOTO_GALLERY: { name: '/photo-gallery' },
	PHOTO_GALLERY_EDIT: { name: '/photo-gallery-edit' },
	PHOTO_GALLERY_CREATE: { name: '/photo-gallery-create' },
	MENU: { name: '/menu' },
	MENU_CREATE: { name: '-menu-create' },
	MENU_UPDATE: { name: '/menu-update' },
	CHAT_GROUP: { name: '/chat-group' },
	CHAT_GROUP_CREATE: { name: '/chat-group-create' },
	MESSAGE_FROM_GROUP: { name: '/message-from-group' },
	CHAT: { name: '/chat' }
}

export default TelasEnum
