
import pkg from '../../../../../package.json'

const Footer = () => {
	return (
		<footer className="main-footer">
			<div className="float-right d-none d-sm-block">
				<b>V</b>
				{pkg.version}
			</div>
			<strong>
				{`Copyright &copy; Deroldo Lab's`} || <a href="https://escolananamao.com.br">escolanamao.com.br</a>
			</strong>
		</footer>
	)
}

export default Footer
