const MENU_ITEMS = [
	{
		id: 1,
		icon: 'fal fa-tachometer-alt',
		sideBar: '',
		title: 'Painel',
		name: 'Dashboard',
		link: '/dashboard',
		active: true
		// component: () => <Dashboard />
	},
	{
		id: 2,
		icon: 'fal fa-sitemap',
		sideBar: '',
		name: 'Organização',
		link: '/organization',
		active: false,
		subItems: [
			{
				id: 1,
				icon: 'fal fa-landmark',
				name: 'Unidades',
				link: '/business-unit',
				active: false
				// component: () => <Dashboard />
			},
			{
				id: 2,
				icon: 'fal fa-screen-users',
				name: 'Cursos / Turmas',
				link: '/course',
				active: false
				// component: () => <Courses />
			},
			{
				id: 3,
				icon: 'fal fa-chalkboard-user',
				name: 'Funcionários',
				link: '/employees',
				active: false
				// widget: {
				// 	text: 'New',
				// 	badge: 'danger'
				// }
				// component: () => <Employees />
			},
			{
				id: 4,
				icon: 'fal fa-user-graduate',
				name: 'Alunos',
				link: '/students',
				active: false
				// component: () => <Students />
			}
		]
	},
	{
		id: 3,
		icon: 'fal fa-dollar-sign',
		sideBar: '',
		title: 'Pagamentos',
		name: 'Pagamentos',
		link: '/payments',
		active: false,
		widget: {
			text: 'Novo',
			badge: 'warning'
		}
	},
	{
		id: 4,
		icon: 'fal fa-images',
		name: 'Mural de fotos',
		link: '/photo-gallery',
		active: false
		// component: () => <Dashboard />
	},
	{
		id: 4,
		icon: 'fal fa-bullhorn',
		name: 'Comunicados',
		link: '/announcements',
		active: false
		// component: () => <Dashboard />
	},
	{
		id: 4,
		icon: 'fal fa-messages',
		name: 'Mensagens',
		link: '/chat',
		active: false
		// component: () => <Dashboard />
	},
	{
		id: 4,
		icon: 'fal fa-square-poll-vertical',
		name: 'Enquetes',
		link: '/surveys'
		// component: () => <Dashboard />
	},
	{
		id: 4,
		icon: 'fal fa-utensils',
		name: 'Cardápios',
		link: '/menu',
		active: false
		// component: () => <Dashboard />
	},
	{
		id: 4,
		icon: 'fal fa-chart-line-up',
		name: 'Relatórios',
		link: '/reports',
		active: false
		// component: () => <Dashboard />
	},
	{
		id: 3,
		icon: 'fal fa-gear',
		name: 'Configurações',
		link: '/settings',
		active: false,
		// component: () => <Dashboard />,
		subItems: [
			{
				id: 1,
				icon: 'fal fa-screwdriver-wrench',
				name: 'Grupos de conversa',
				link: '/chat-groups',
				active: false
				// component: () => <Dashboard />
			},
			{
				id: 1,
				icon: 'fal fa-screwdriver-wrench',
				name: 'Acompanhamento',
				link: '/appointment-book',
				active: false
				// component: () => <Dashboard />
			}
		]
	}
]

export { MENU_ITEMS }
