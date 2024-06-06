import { useFormik } from 'formik'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Buttom, InputText } from '../../components/global'

import { images } from '../../configs'
// import { EmployeeContext } from '../../contexts'

import '../../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css'
import { EmployeeContext } from '../../contexts'

const SignIn = () => {
	const navigate = useNavigate()
	const { login, getRedirectPage } = useContext(EmployeeContext)

	const goTo = () => {
		getRedirectPage().then(async (rResult) => {
			const page = rResult.page
			if (!rResult.isLoggued) {
				setTimeout(() => {
					goTo()
				}, 2000)
			} else {
				navigate(page?.name)
			}
		})
	}

	const formik = useFormik({
		initialValues: {},
		onSubmit: (values) => {
			login(values.email, values.password).then(() => {
				alert('GOTO')
				goTo()
			})
		}
	})

	return (
		<div className="hold-transition login-page">
			<div className="login-box">
				<div className="login-logo">
					<img src={images.logo} alt="Escola na mão" className="" />
				</div>
				<div className="card">
					<div className="card-body login-card-body rounded">
						<h5 className="login-box-msg">Que bom que você está aqui!</h5>
						<p className="login-box-msg">
							<small>Para aproveitar todos os benefícios do APP, é necessário fazer login!</small>
						</p>

						<form onSubmit={formik.handleSubmit}>
							<div className="input-group mb-3">
								<InputText
									id="email"
									name="email"
									placeholder="E-Mail"
									icon={'fa-at'}
									value={formik.values.email}
									onChange={formik.handleChange('email')}
								/>
							</div>

							<div className="input-group mb-3">
								<InputText
									id="password"
									name="password"
									type="password"
									icon={'fa-lock'}
									placeholder="Senha"
									value={formik.values.password}
									onChange={formik.handleChange('password')}
								/>
							</div>
							<div className="row">
								<div className="col-8">
									<div className="icheck-primary">
										<input type="checkbox" id="remember" />
										<label htmlFor="remember">Lembrar de mim</label>
									</div>
								</div>
								<div className="col-4">
									<Buttom submit block>
										Entrar
									</Buttom>
								</div>
							</div>
						</form>

						<div className="social-auth-links text-center mb-3">
							<p>- OU -</p>
							<a href="/sign-up" className="btn btn-block btn-ascendent">
								Cadastre-se
							</a>
						</div>

						<p className="mb-1">
							<a href="forgot-password.html">Esqueci minha senha</a>
						</p>
						<p className="mb-0">
							<a href="register.html" className="text-center">
								Não possui uma senha? Clique aqui
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignIn
