import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Buttom, Col, Row } from '../../../components/global'
import { metrics } from '../../../configs'
import { EmployeeContext, RestaurantContext } from '../../../contexts'

const Terms = () => {
	const navigate = useNavigate()

	const { getRedirectPage } = useContext(EmployeeContext)
	const { acceptTerms } = useContext(RestaurantContext)

	const [btnNextDisabled, setBtnNextDisabled] = useState(false)

	const formik = useFormik({
		initialValues: {},
		onSubmit: () => {
			setBtnNextDisabled(true)
			acceptTerms('1.0.0')
				.then(() => {
					getRedirectPage().then((rResult) => {
						navigate(rResult.page.name)
					})
				})
				.catch(() => {
					setBtnNextDisabled(false)
				})
		}
	})

	return (
		<div>
			<h3 className="login-box-msg">Termos</h3>

			<form onSubmit={formik.handleSubmit}>
				<Row>
					<Col class="col-sm-12 mb-3">
						<div style={{ maxHeight: window.innerHeight / 2, overflowY: 'scroll' }}>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								1. A Política de Privacidade e Segurança da <strong>Escola Na Mão</strong> garante
								segurança e privacidade de identidade aos usuários que forneçam suas informações ao
								sistema (web e mobile) e site. Dados pessoais cadastrados são protegidos por sistemas
								avançados de criptografia.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								2. A plataforma pertencente à <strong>Escola Na Mão</strong> adota os níveis legalmente
								requeridos quanto à segurança na proteção de dados, com respectiva utilização de todos
								os meios e medidas técnicas para inibição da perda, mau uso, alteração, acesso não
								autorizado ou subtração indevida dos dados pessoais recolhidos. Não obstante, o usuário
								deve estar ciente de que as medidas de segurança relativas à Internet não são
								integralmente infalíveis.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								3. A presente empresa reserva-se ao direito de modificar a Política para adaptá-la a
								alterações legislativas ou jurisprudenciais, ou àquelas relativas às práticas
								comerciais. Em qualquer caso, as mudanças serão anunciadas por meio do site
								https://escolanamao.com.br, sendo as mudanças introduzidas com uma antecedência razoável
								a sua colocação em prática.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								4. Importante salientar que o site poderá fornecer acesso a links para outros sites
								externos cujos conteúdos e Políticas de Privacidade, bem como segurança da informação,
								não são de responsabilidade da Escola Na Mão. Dessa forma, recomenda-se aos usuários
								que, ao serem redirecionados para sites externos, consultem sempre as respectivas
								Políticas de Privacidade antes de fornecer seus dados.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								5. Nas hipóteses em que houver integração da plataforma pertencente à
								<strong>Escola Na Mão</strong> com outros servidores ou plataformas externas, por
								exemplo nas integrações com Google Calendar ou com Google Drive, os dados e/ou arquivos
								somente serão compartilhados com o prévio consentimento e a autorização do usuário. Além
								disso, os dados sensíveis informados para aquelas plataformas externas não serão
								mantidos pela <strong>Escola Na Mão</strong>, ocorrendo a integração apenas de dados ou
								arquivos previamente autorizados.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								6. Os usuários poderão exercer os direitos de acesso e de retificação dos seus dados,
								bem como têm reconhecido o direito de obterem informações através do e-mail
								contato@escolanamao.com.
							</p>
							<strong
								style={{
									marginBottom: metrics.marginBottomLarge
								}}
							>
								COLETA DAS INFORMAÇÕES
							</strong>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								7. Ao se cadastrar, os usuários determinam voluntariamente que desejam fornecer os seus
								dados pessoais requeridos.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								8. Os dados dos usuários também poderão ser coletados por meio da integração de
								plataformas externas com a plataforma pertencente à<p> Escola Na Mão</p>, por meio da
								autorização e do consentimento do usuário em compartilhar, por exemplo, seus dados e
								arquivos constantes nas plataformas Google Drive, Google Calendar, dentre outros. Nesses
								casos, usaremos suas Credenciais Google (Google Credentials) para sua autenticação e,
								assim, possibilitar a integração das plataformas.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								9. Os dados recolhidos serão objeto de tratamento automatizado, sendo incorporados aos
								correspondentes registros eletrônicos de dados pessoais, dos quais a{' '}
								<strong>Escola Na Mão</strong> será titular e responsável. As informações obtidas e
								utilizadas por esta fazem parte dessa Política.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								PARCEIRO COMERCIAL: é a pessoa física ou jurídica com a qual a{' '}
								<p>
									<strong>Escola Na Mão</strong>{' '}
								</p>
								possua relação contratual, presente ou futura, firmada com o escopo de ofertar outros
								tipos de serviços, produtos ou facilidades aos PROFISSIONAIS e/ou aos CLIENTES
								cadastrados na plataforma, os quais, se o caso, serão contratados diretamente com o
								respectivo PARCEIRO COMERCIAL.
							</p>
							<strong
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								UTILIZAÇÃO DAS INFORMAÇÕES
							</strong>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								10. As informações pessoais fornecidas pelos usuários são utilizadas com o propósito
								básico de identificar o público usuário e seu respectivo perfil, para gestão (business
								intelligence), administração, atendimento, ampliação e melhorias nos produtos e serviços
								oferecidos; também para a adequação dos serviços às preferências e anseios dos usuários,
								para a criação de novos produtos e serviços e para o envio de informações operacionais e
								comerciais relativas aos produtos e serviços, por meios tradicionais e/ou eletrônicos,
								sempre em relacionamento constante com seus parceiros.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								11. Compromisso da <strong>Escola Na Mão</strong>: a) corrigir prontamente quaisquer
								alterações relativas aos dados pessoais do usuário. Para tanto, este sempre deverá
								informar as mudanças nos respectivos dados; b) possibilitar ao usuário o cancelamento, a
								qualquer momento, do envio por e-mail de material informativo (newsletter) solicitado
								anteriormente; e c) não comercializar ou divulgar os dados de usuários para outros fins
								que não sejam para ações da <strong>Escola Na Mão</strong> e fornecimento de dados para
								parceiros, com os fins já explicitados na presente Política de Privacidade.
							</p>
							<strong
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								POLÍTICA DO USUÁRIO
							</strong>
							<p
								style={{
									marginBottom: metrics.marginBottomLarge
								}}
							>
								12. O usuário garante a veracidade e a exatidão dos dados pessoais que fornecer ao site
								https://escolanamao.com, bem como ao sistema (mobile), pelo que assume a correspondente
								responsabilidade. A Escola Na Mão não se responsabiliza por incongruência dos dados
								pessoais introduzidos pelo usuário no referido site.
							</p>
							<strong
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								HISTÓRICO DE VISUALIZAÇÃO
							</strong>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								13. A <strong>Escola Na Mão</strong> pode receber e armazenar automaticamente em seus
								servidores, por meio de cookies, informações originadas do navegador (web e mobile) do
								usuário, incluindo endereço IP e página eletrônica acessada.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								14. O login nas áreas restritas do site e do aplicativo (mobile) está condicionado ao
								fornecimento de dados pessoais do usuário, bem como à aceitação de cookies de navegação.
								Ao decidir fornecer seus dados pessoais, o usuário declara conhecer e aceitar os termos
								da presente Política.
							</p>
							<p
								style={{
									marginBottom: metrics.marginBottomLarge
								}}
							>
								15. Qualquer informação fornecida pelos usuários será coletada e guardada de acordo com
								os mais rígidos padrões de segurança e confiabilidade.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								16. Todos os dados pessoais coletados serão incorporados ao banco de dados da empresa
								supramencionada
							</p>
							<strong
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								POLÍTICA DE E-MAIL MARKETING
							</strong>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								17. O envio de e-mail marketing está dentro dos padrões estabelecidos pela legislação e
								codificação pertinente, inclusive nos termos do Código de Autorregulamentação para
								Prática de E-mail Marketing (CAPEM), o qual prevê a utilização desta ferramenta de
								marketing com base na ética e na responsabilidade, sem prejuízo da concomitante
								aplicação da legislação vigente aplicável.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								18. O envio de e-mails será realizado após consentimento prévio (por meio ao cadastro no
								site) e poderá ser desativado a qualquer momento através de link de desvinculação, fato
								que poderá perdurar por até 5 (cinco) dias úteis.
							</p>
							<p
								style={{
									textAlign: 'justify',
									marginBottom: metrics.marginBottomLarge
								}}
							>
								O valor da ASSINATURA MENSAL será cobrado via débito automático a cada período de 30
								(trinta) dias, sendo a primeira cobrança efetivada 30 (trinta) dias após a conclusão do
								período de adaptação.
							</p>
							<p
								style={{
									marginBottom: metrics.marginBottomLarge
								}}
							>
								19. A <strong>Escola Na Mão</strong> é contra o envio de e-mails sem autorização prévia
								(Política Anti-SPAM). Perfaz-se inexistente a utilização, por parte da empresa
								mencionada, da confirmação de dados/cadastro com anexos executáveis (extensão exe, com,
								scr, bat) e links para download/arquivamento.
							</p>
						</div>
						<div className="row">
							<div className="col-12 pt-3">
								<Buttom submit disabled={btnNextDisabled} class="float-right">
									Aceitar os termos
								</Buttom>
							</div>
						</div>
					</Col>
				</Row>
			</form>
		</div>
	)
}

export default Terms
