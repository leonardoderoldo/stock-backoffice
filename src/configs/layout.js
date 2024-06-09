const MENU_ITEMS = [
	{
		id: 1,
		icon: 'fal fa-tachometer-alt',
		name: 'Dashboard',
		link: '/dashboard',
		active: true
	},
	{
		id: 2,
		header: true,
		name: 'Desempenho e Vendas'
	},
	{
		id: 3,
		icon: 'fal fa-chart-line',
		name: 'Desempenho',
		link: '/performance',
		active: false
	},
	{
		id: 3,
		icon: 'fal fa-receipt',
		name: 'Pedidos',
		link: '/orders',
		active: false
	},
	{
		id: 3,
		icon: 'fal fa-dollar-sign',
		name: 'Financeiro',
		link: '/revenue',
		active: false
	},
	{
		id: 3,
		icon: 'fal fa-star',
		name: 'Avaliações',
		link: '/reviews',
		active: false
	},
	{
		id: 2,
		header: true,
		name: 'Configurações da loja'
	},
	{
		id: 1,
		icon: 'fal fa-burger-soda',
		name: 'Cardápio',
		link: '/menu',
		active: false
		// component: () => <Dashboard />
	},
	{
		id: 2,
		icon: 'fal fa-map-location-dot',
		name: 'Áreas de entrega',
		link: '/merchant-delivery-area',
		active: false
	},
	{
		id: 3,
		icon: 'fal fa-clock',
		name: 'Horário',
		link: '/opening-hours/schedules',
		active: false
		// component: () => <Students />
	},
	{
		id: 4,
		icon: 'far fa-credit-card',
		name: 'Formas de pagamento',
		link: '/payment-methods',
		active: false
		// component: () => <Students />
	},
	{
		id: 3,
		icon: 'fal fa-store',
		name: 'Minha loja',
		link: '/payments',
		active: false,
		widget: {
			text: 'Novo',
			badge: 'warning'
		},
		subItems: [
			{
				id: 1,
				icon: 'fal fa-store',
				name: 'Loja',
				link: '/profile/restaurant',
				active: false
				// component: () => <Dashboard />
			},
			{
				id: 2,
				icon: 'fal fa-map-location-dot',
				name: 'Endereço',
				link: '/profile/address',
				active: false
			},
			{
				id: 3,
				icon: 'fal fa-clipboard-user',
				name: 'Gestão de acessos',
				link: '/profile/access-management',
				active: false
			},
			{
				id: 4,
				icon: 'fal fa-map-location-dot',
				name: 'Contato',
				link: '/communications',
				active: false
			}
		]
	},
	{
		id: 4,
		name: 'Marketing',
		header: true
	},
	{
		id: 4,
		icon: 'fal fa-users',
		name: 'Clientes',
		link: '/clients',
		active: false
	},
	{
		id: 4,
		icon: 'fal fa-badge-percent',
		name: 'Promoções',
		link: '/promotions',
		active: false
	},
	{
		id: 4,
		icon: 'fal fa-bullhorn',
		name: 'Anúncios',
		link: '/ads',
		active: false
	},
	{
		id: 4,
		name: 'Serviços e Produtos',
		header: true
	},
	{
		id: 4,
		icon: 'fal fa-grid-2',
		name: 'Integrações',
		link: '/integrations',
		active: false
	}
]

export { MENU_ITEMS }
