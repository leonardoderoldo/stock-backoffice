const banks = [
	{ item: '332 - Acesso Soluções De Pagamento S.A.', id: '332' },
	{ item: '117 - Advanced Corretora De Câmbio Ltda', id: '117' },
	{ item: '272 - Agk Corretora De Cambio S.A.', id: '272' },
	{ item: '349 - Al5 S.A. Crédito', id: '349' },
	{ item: '172 - Albatross Ccv S.A', id: '172' },
	{ item: '313 - Amazónia Corretora De Câmbio Ltda.', id: '313' },
	{
		item: '188 - Ativa Investimentos S.A. Corretora De Títulos, Câmbio E Valores',
		id: '188'
	},
	{ item: '280 - Avista S.A. Crédito', id: '280' },
	{ item: '280 - Avista S.A. Crédito', id: '280' },
	{ item: '80 - B&T Corretora De Cambio Ltda.', id: '80' },
	{ item: '246 - Banco Abc Brasil S.A.', id: '246' },
	{ item: '75 - Banco Abn Amro S.A.', id: '75' },
	{ item: '121 - Banco Agibank S.A.', id: '121' },
	{ item: '25 - Banco Alfa S.A.', id: '25' },
	{ item: '641 - Banco Alvorada S.A.', id: '641' },
	{ item: '65 - Banco Andbank (Brasil) S.A.', id: '65' },
	{ item: '213 - Banco Arbi S.A.', id: '213' },
	{ item: '96 - Banco B3 S.A.', id: '96' },
	{ item: '24 - Banco Bandepe S.A.', id: '24' },
	{ item: '330 - Banco Bari De Investimentos E Financiamentos S.A.', id: '330' },
	{ item: '318 - Banco BMG S.A.', id: '318' },
	{ item: '752 - Banco Bnp Paribas Brasil S.A.', id: '752' },
	{ item: '107 - Banco Bocom Bbm S.A.', id: '107' },
	{ item: '63 - Banco Bradescard S.A.', id: '63' },
	{ item: '36 - Banco Bradesco BBI S.A.', id: '36' },
	{ item: '122 - Banco Bradesco Berj S.A.', id: '122' },
	{ item: '204 - Banco Bradesco Cartões S.A.', id: '204' },
	{ item: '394 - Banco Bradesco Financiamentos S.A.', id: '394' },
	{ item: '237 - Banco Bradesco S.A.', id: '237' },
	{ item: '218 - Banco Bs2 S.A.', id: '218' },
	{ item: '208 - Banco BTG Pactual S.A.', id: '208' },
	{ item: '626 - Banco C6 Consignado S.A.', id: '626' },
	{ item: '336 - Banco C6 S.A.', id: '336' },
	{ item: '473 - Banco Caixa Geral – Brasil S.A.', id: '473' },
	{ item: '412 - Banco Capital S.A.', id: '412' },
	{ item: '40 - Banco Cargill S.A.', id: '40' },
	{ item: '266 - Banco Cedula S.A.', id: '266' },
	{ item: '739 - Banco Cetelem S.A.', id: '739' },
	{ item: '233 - Banco Cetelem S.A.', id: '233' },
	{ item: '745 - Banco Citibank S.A.', id: '745' },
	{ item: '241 - Banco Classico S.A.', id: '241' },
	{ item: '756 - Banco Cooperativo Do Brasil S.A. – Bancoob – Sicoob', id: '756' },
	{ item: '748 - Banco Cooperativo Sicredi S.A.', id: '748' },
	{ item: '222 - Banco Crédit Agricole Brasil S.A.', id: '222' },
	{ item: '505 - Banco Credit Suisse (Brasil) S.A.', id: '505' },
	{ item: '69 - Banco Crefisa S.A.', id: '69' },
	{
		item: '133 - Banco Cresol – Confederação Nacional Das Cooperativas Centrais De Crédito e Economia Familiar e Solidária',
		id: '133'
	},
	{ item: '368 - Banco CSF S.A.', id: '368' },
	{ item: '3 - Banco da Amazonia S.A.', id: '3' },
	{ item: '83 - Banco da China Brasil S.A.', id: '83' },
	{ item: '707 - Banco Daycoval S.A.', id: '707' },
	{ item: '51 - Banco de Desenvolvimento do Espírito Santo S.A.', id: '51' },
	{ item: '300 - Banco De La Nacion Argentina', id: '300' },
	{ item: '495 - Banco De La Provincia De Buenos Aires', id: '495' },
	{ item: '494 - Banco de La Republica Oriental del Uruguay', id: '494' },
	{ item: '654 - Banco Digimais S.A.', id: '654' },
	{ item: '335 - Banco Digio S.A.', id: '335' },
	{ item: '1 - Banco do Brasil S.A.', id: '1' },
	{ item: '47 - Banco Do Estado De Sergipe S.A.', id: '47' },
	{ item: '37 - Banco Do Estado Do Pará S.A.', id: '37' },
	{ item: '41 - Banco Do Estado Do Rio Grande Do Sul S.A. (BANRISUL)', id: '41' },
	{ item: '4 - Banco Do Nordeste Do Brasil S.A.', id: '4' },
	{ item: '265 - Banco Fator S.A.', id: '265' },
	{ item: '224 - Banco Fibra S.A.', id: '224' },
	{ item: '94 - Banco Finaxis S.A.', id: '94' },
	{ item: '390 - Banco Gm S.A.', id: '390' },
	{ item: '612 - Banco Guanabara S.A.', id: '612' },
	{ item: '269 - Banco HSBC S.A.', id: '269' },
	{ item: '12 - Banco Inbursa S.A.', id: '12' },
	{ item: '604 - Banco Industrial Do Brasil S.A.', id: '604' },
	{ item: '653 - Banco Indusval S.A.', id: '653' },
	{ item: '77 - Banco Inter S.A.', id: '77' },
	{ item: '249 - Banco Investcred Unibanco S.A.', id: '249' },
	{ item: '184 - Banco Itaú BBA S.A.', id: '184' },
	{ item: '29 - Banco Itaú Consignado S.A.', id: '29' },
	{ item: '479 - Banco Itaubank S.A.', id: '479' },
	{ item: '74 - Banco J. Safra S.A.', id: '74' },
	{ item: '376 - Banco J.P. Morgan S.A.', id: '376' },
	{ item: '217 - Banco John Deere S.A.', id: '217' },
	{ item: '76 - Banco Kdb Do Brasil S.A.', id: '76' },
	{ item: '757 - Banco Keb Hana Do Brasil S.A.', id: '757' },
	{ item: '600 - Banco Luso Brasileiro S.A.', id: '600' },
	{ item: '243 - Banco Master S.A.', id: '243' },
	{ item: '720 - Banco RNX', id: '720' },
	{ item: '389 - Banco Mercantil do Brasil S.A.', id: '389' },
	{ item: '381 - Banco Mercedes-Benz Do Brasil S.A.', id: '381' },
	{ item: '370 - Banco Mizuho Do Brasil S.A.', id: '370' },
	{ item: '746 - Banco Modal S.A.', id: '746' },
	{ item: '66 - Banco Morgan Stanley S.A.', id: '66' },
	{ item: '456 - Banco Mufg Brasil S.A.', id: '456' },
	{ item: '7 - Banco Nacional De Desenvolvimento Economico E Social', id: '7' },
	{ item: '169 - Banco Olé Consignado S.A.', id: '169' },
	{ item: '79 - Banco Original Do Agronegócio S.A.', id: '79' },
	{ item: '212 - Banco Original S.A.', id: '212' },
	{ item: '712 - Banco Ourinvest S.A.', id: '712' },
	{ item: '623 - Banco Pan S.A.', id: '623' },
	{ item: '611 - Banco Paulista S.A.', id: '611' },
	{ item: '643 - Banco Pine S.A.', id: '643' },
	{ item: '747 - Banco Rabobank International Brasil S.A.', id: '747' },
	{ item: '88 - Banco Randon S.A.', id: '88' },
	{ item: '633 - Banco Rendimento S.A.', id: '633' },
	{ item: '741 - Banco Ribeirao Preto S.A.', id: '741' },
	{ item: '120 - Banco Rodobens S.A.', id: '120' },
	{ item: '422 - Banco Safra S.A.', id: '422' },
	{ item: '33 - Banco Santander (Brasil) S.A.', id: '33' },
	{ item: '743 - Banco Semear S.A.', id: '743' },
	{ item: '754 - Banco Sistema S.A.', id: '754' },
	{ item: '630 - Banco Smartbank S.A.', id: '630' },
	{ item: '366 - Banco Societe Generale Brasil S.A.', id: '366' },
	{ item: '637 - Banco Sofisa S.A.', id: '637' },
	{ item: '464 - Banco Sumitomo Mitsui Brasileiro S.A.', id: '464' },
	{ item: '82 - Banco Topázio S.A.', id: '82' },
	{ item: '387 - Banco Toyota Do Brasil S.A.', id: '387' },
	{ item: '634 - Banco Triangulo S.A.', id: '634' },
	{ item: '18 - Banco Tricury S.A.', id: '18' },
	{ item: '393 - Banco Volkswagen S.A.', id: '393' },
	{ item: '655 - Banco Votorantim S.A.', id: '655' },
	{ item: '610 - Banco Vr S.A.', id: '610' },
	{ item: '119 - Banco Western Union Do Brasil S.A.', id: '119' },
	{ item: '124 - Banco Woori Bank Do Brasil S.A.', id: '124' },
	{ item: '348 - Banco Xp S.A.', id: '348' },
	{ item: '81 - Bancoseguro S.A.', id: '81' },
	{ item: '21 - Banestes S.A. Banco Do Estado do Espirito Santo', id: '21' },
	{ item: '755 - Bank of America Merrill Lynch Banco Múltiplo S.A.', id: '755' },
	{ item: '268 - Bari Companhia Hipotecária', id: '268' },
	{ item: '378 - Bbc Leasing S.A. – Arrendamento Mercantil', id: '378' },
	{ item: '250 - Bcv – Banco De Crédito E Varejo S.A.', id: '250' },
	{ item: '144 - Bexs Banco De Câmbio S/A', id: '144' },
	{ item: '253 - Bexs Corretora De Câmbio S/A', id: '253' },
	{
		item: '134 - Bgc Liquidez Distribuidora De Títulos E Valores Mobiliários Ltda',
		id: '134'
	},
	{ item: '17 - Bny Mellon Banco S.A.', id: '17' },
	{ item: '408 - Bónuscred Sociedade De Crédito Direto S.A.', id: '408' },
	{ item: '301 - Bpp Instituição De Pagamento S.A.', id: '301' },
	{ item: '126 - Br Partners Banco De Investimento S.A.', id: '126' },
	{ item: '70 - BrB – Banco De Brasilia S.A.', id: '70' },
	{ item: '92 - Brk S.A. Crédito', id: '92' },
	{
		item: '173 - Brl Trust Distribuidora De Títulos E Valores Mobiliários S.A.',
		id: '173'
	},
	{ item: '142 - Broker Brasil Corretora De Câmbio Ltda.', id: '142' },
	{ item: '292 - Bs2 Distribuidora De Títulos E Valores Mobiliários S.A.', id: '292' },
	{ item: '104 - Caixa Economica Federal', id: '104' },
	{ item: '309 - Cambionet Corretora De Câmbio Ltda.', id: '309' },
	{ item: '288 - Carol Distribuidora De Titulos E Valores Mobiliarios Ltda.', id: '288' },
	{ item: '324 - Cartos Sociedade De Crédito Direto S.A.', id: '324' },
	{ item: '130 - Caruana S.A. – Sociedade De Crédito', id: '130' },
	{
		item: '159 - Casa Do Crédito S.A. Sociedade De Crédito Ao Microempreendedor',
		id: '159'
	},
	{
		item: '114 - Central Cooperativa De Crédito No Estado Do Espírito Santo – Cecoop',
		id: '114'
	},
	{
		item: '91 - Central De Cooperativas De Economia E Crédito Mútuo Do Estado Do Rio Grande Do S',
		id: '91'
	},
	{ item: '320 - China Construction Bank (Brasil) Banco Múltiplo S.A.', id: '320' },
	{ item: '362 - Cielo S.A.', id: '362' },
	{ item: '477 - Citibank N.A.', id: '477' },
	{
		item: '180 - Cm Capital Markets Corretora De Câmbio, Títulos E Valores Mobiliários Ltda',
		id: '180'
	},
	{ item: '127 - Codepe Corretora De Valores E Câmbio S.A.', id: '127' },
	{ item: '31 - Código Banco Beg S.A.', id: '31' },
	{ item: '163 - Commerzbank Brasil S.A. – Banco Múltiplo', id: '163' },
	{ item: '60 - Confidence Corretora De Câmbio S.A.', id: '60' },
	{ item: '85 - Cooperativa Central De Crédito – Ailos', id: '85' },
	{
		item: '16 - Cooperativa de Crédito Mutuo dos Despachantes de Trânsito de Santa Catarina e Rio Grande do Sul',
		id: '16'
	},
	{ item: '281 - Cooperativa De Crédito Rural Coopavel', id: '281' },
	{
		item: '322 - Cooperativa De Crédito Rural De Abelardo Luz – Sulcredi/Crediluz',
		id: '322'
	},
	{ item: '391 - Cooperativa De Credito Rural De Ibiam – Sulcredi/Ibiam', id: '391' },
	{ item: '286 - Cooperativa De Crédito Rural De Ouro Sulcredi/Ouro', id: '286' },
	{ item: '279 - Cooperativa De Credito Rural De Primavera Do Leste', id: '279' },
	{
		item: '273 - Cooperativa De Crédito Rural De São Miguel Do Oeste – Sulcredi/São Miguel',
		id: '273'
	},
	{ item: '403 - Cora Sociedade De Crédito Direto S.A.', id: '403' },
	{ item: '98 - Credialiança Cooperativa De Crédito Rural', id: '98' },
	{ item: '10 - Credicoamo Credito Rural Cooperativa', id: '10' },
	{ item: '89 - Credisan Cooperativa De Crédito', id: '89' },
	{ item: '97 - Credisis – Central De Cooperativas De Crédito Ltda.', id: '97' },
	{ item: '11 - Credit Suisse Hedging-Griffo Corretora De Valores S.A', id: '11' },
	{ item: '342 - Creditas Sociedade De Crédito Direto S.A.', id: '342' },
	{
		item: '321 - Crefaz Sociedade De Crédito Ao Microempreendedor E A Empresa De Pequeno Porte Lt',
		id: '321'
	},
	{ item: '289 - Decyseo Corretora De Cambio Ltda.', id: '289' },
	{ item: '487 - Deutsche Bank S.A. – Banco Alemao', id: '487' },
	{ item: '140 - Easynvest – Título Corretora De Valores Sa', id: '140' },
	{
		item: '149 - Facta Financeira S.A. – Crédito Financiamento e Investimento',
		id: '149'
	},
	{ item: '196 - Fair Corretora De Cambio S.A.', id: '196' },
	{
		item: '343 - Ffa Sociedade De Crédito Ao Microempreendedor E À Empresa De Pequeno Porte Ltda.',
		id: '343'
	},
	{
		item: '331 - Fram Capital Distribuidora De Títulos E Valores Mobiliários S.A.',
		id: '331'
	},
	{ item: '285 - Frente Corretora De Câmbio Ltda.', id: '285' },
	{ item: '278 - Genial Investimentos Corretora De Valores Mobiliários S.A.', id: '278' },
	{ item: '364 - Gerencianet S.A.', id: '364' },
	{ item: '138 - Get Money Corretora De Câmbio S.A.', id: '138' },
	{
		item: '384 - Global Financas – Sociedade De Credito Ao Microempreendedor E A Empresa De Pequeno Porte Ltda',
		id: '384'
	},
	{ item: '64 - Goldman Sachs Do Brasil Banco Multiplo S.A.', id: '64' },
	{ item: '177 - Guide Investimentos S.A. Corretora De Valores', id: '177' },
	{ item: '146 - Guitta Corretora De Cambio Ltda.', id: '146' },
	{ item: '78 - Haitong Banco De Investimento Do Brasil S.A.', id: '78' },
	{ item: '62 - Hipercard Banco Múltiplo S.A.', id: '62' },
	{ item: '189 - HS Financeira S/A Credito', id: '189' },
	{ item: '396 - Hub Pagamentos S.A', id: '396' },
	{ item: '271 - Ib Corretora De Câmbio, Títulos E Valores Mobiliários S.A.', id: '271' },
	{
		item: '157 - Icap Do Brasil Corretora De Títulos E Valores Mobiliários Ltda.',
		id: '157'
	},
	{ item: '132 - Icbc Do Brasil Banco Múltiplo S.A.', id: '132' },
	{ item: '492 - Ing Bank N.V.', id: '492' },
	{ item: '139 - Intesa Sanpaolo Brasil S.A. – Banco Múltiplo', id: '139' },
	{ item: '652 - Itaú Unibanco Holding S.A.', id: '652' },
	{ item: '341 - Itaú Unibanco S.A.', id: '341' },
	{ item: '488 - Jpmorgan Chase Bank', id: '488' },
	{ item: '399 - Kirton Bank S.A. – Banco Múltiplo', id: '399' },
	{
		item: '293 - Lastro Rdv Distribuidora De Títulos E Valores Mobiliários Ltda.',
		id: '293'
	},
	{ item: '105 - Lecca Crédito', id: '105' },
	{ item: '145 - Levycam – Corretora De Cambio E Valores Ltda.', id: '145' },
	{ item: '397 - Listo Sociedade De Credito Direto S.A.', id: '397' },
	{ item: '113 - Magliano S.A. Corretora De Cambio E Valores Mobiliarios', id: '113' },
	{ item: '323 - Mercadopago.Com Representacoes Ltda.', id: '323' },
	{
		item: '274 - Money Plus Sociedade De Crédito ao Microempreendedor e a Empresa De Pequeno Port',
		id: '274'
	},
	{ item: '259 - Moneycorp Banco De Câmbio S.A.', id: '259' },
	{ item: '128 - Ms Bank S.A. Banco De Câmbio', id: '128' },
	{
		item: '354 - Necton Investimentos S.A. Corretora de Valores Mobiliários e Commodities',
		id: '354'
	},
	{ item: '735 - Neon Pagamentos', id: '735' },
	{
		item: '191 - Nova Futura Corretora de Títulos e Valores Mobiliários Ltda.',
		id: '191'
	},
	{ item: '753 - Novo Banco Continental S.A. – Banco Múltiplo', id: '753' },
	{ item: '260 - Nu Pagamentos S.A.', id: '260' },
	{
		item: '111 - Oliveira Trust Distribuidora de Títulos e Valores Mobiliarios S.A.',
		id: '111'
	},
	{ item: '319 - Om Distribuidora de Títulos e Valores Mobiliários Ltda', id: '319' },
	{ item: '613 - Omni Banco S.A.', id: '613' },
	{ item: '325 - Órama Distribuidora de Títulos e Valores Mobiliários S.A.', id: '325' },
	{ item: '355 - Ótimo Sociedade de Crédito Direto S.A.', id: '355' },
	{ item: '290 - Pagseguro Internet S.A.', id: '290' },
	{ item: '254 - Paraná Banco S.A.', id: '254' },
	{ item: '326 - Parati – Credito', id: '326' },
	{
		item: '194 - Parmetal Distribuidora de Títulos e Valores Mobiliários Ltda',
		id: '194'
	},
	{ item: '174 - Pefisa S.A. – Crédito', id: '174' },
	{ item: '315 - Pi Distribuidora de Títulos e Valores Mobiliários S.A.', id: '315' },
	{ item: '380 - Picpay Servicos S.A.', id: '380' },
	{ item: '100 - Planner Corretora de Valores S.A.', id: '100' },
	{ item: '125 - Plural S.A. Banco Múltiplo', id: '125' },
	{ item: '108 - Portocred S.A. – Credito', id: '108' },
	{
		item: '306 - Portopar Distribuidora de Titulos e Valores Mobiliarios Ltda.',
		id: '306'
	},
	{ item: '306 - Qi Sociedade de Crédito Direto S.A.', id: '306' },
	{ item: '329 - Qi Sociedade de Crédito Direto S.A.', id: '329' },
	{
		item: '283 - Rb Capital Investimentos Distribuidora de Títulos e Valores Mobiliários Limitada',
		id: '283'
	},
	{ item: '374 - Realize Crédito', id: '374' },
	{
		item: '101 - Renascenca Distribuidora de Títulos e Valores Mobiliários Ltda',
		id: '101'
	},
	{ item: '270 - Sagitur Corretora De Câmbio Ltda.', id: '270' },
	{ item: '751 - Scotiabank Brasil S.A. Banco Múltiplo', id: '751' },
	{ item: '276 - Senff S.A. – Crédito', id: '276' },
	{ item: '545 - Senso Corretora De Cambio E Valores Mobiliarios S.A', id: '545' },
	{
		item: '190 - Servicoop – Cooperativa De Crédito Dos Servidores Públicos Estaduais Do Rio Gran',
		id: '190'
	},
	{ item: '363 - Socopa Sociedade Corretora Paulista S.A.', id: '363' },
	{
		item: '183 - Socred S.A. – Sociedade De Crédito Ao Microempreendedor e a Empresa De Pequeno P',
		id: '183'
	},
	{ item: '365 - Solidus S.A. Corretora de Cambio e Valores Mobiliarios', id: '365' },
	{ item: '299 - Sorocred Crédito', id: '299' },
	{ item: '14 - State Street Brasil S.A. – Banco Comercial', id: '14' },
	{ item: '197 - Stone Pagamentos S.A.', id: '197' },
	{ item: '404 - Sumup Sociedade De Crédito Direto S.A.', id: '404' },
	{ item: '340 - Super Pagamentos e Administração de Meios Eletrônicos S.A.', id: '340' },
	{
		item: '370 - Terra Investimentos Distribuidora de Títulos e Valores Mobiliários Ltda.',
		id: '370'
	},
	{ item: '352 - Toro Corretora De Títulos E Valores Mobiliários Ltda', id: '352' },
	{ item: '95 - Travelex Banco De Câmbio S.A.', id: '95' },
	{ item: '143 - Treviso Corretora De Câmbio S.A.', id: '143' },
	{ item: '131 - Tullett Prebon Brasil Corretora de Valores e Câmbio Ltda', id: '131' },
	{ item: '129 - Ubs Brasil Banco de Investimento S.A.', id: '129' },
	{
		item: '15 - Ubs Brasil Corretora de Câmbio, Títulos e Valores Mobiliários S.A.',
		id: '15'
	},
	{
		item: '136 - Unicred Do Brasil – Confederação Nacional Das Cooperativas Centrais Unicred Ltda.',
		id: '136'
	},
	{
		item: '99 - Uniprime Central – Central Interestadual De Cooperativas de Credito Ltda.',
		id: '99'
	},
	{
		item: '84 - Uniprime Norte Do Paraná – Coop de Economia e Crédito Mútuo Dos Médicos',
		id: '84'
	},
	{ item: '373 - UP.P Sociedade de Empréstimo Entre Pessoas S.A.', id: '373' },
	{ item: '298 - Vip’s Corretora de Câmbio Ltda.', id: '298' },
	{ item: '296 - Vision S.A. Corretora De Cambio', id: '296' },
	{ item: '367 - Vitreo Distribuidora de Títulos e Valores Mobiliários S.A.', id: '367' },
	{ item: '310 - Vortx Distribuidora de Titulos e Valores Mobiliarios Ltda.', id: '310' },
	{
		item: '102 - Xp Investimentos Corretora de Câmbio,Títulos d Valores Mobiliários S/A',
		id: '102'
	}
]

export default banks
