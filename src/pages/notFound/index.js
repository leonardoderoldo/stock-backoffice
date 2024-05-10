const NotFoundLoggedOut = () => {
	return (
		<container className="container-fluid d-flex justify-content-center align-items-center  h-100">
			<div className="error-page">
				<h2 className="headline text-warning"> 404</h2>
				<div className="error-content">
					<h3>
						<i className="fas fa-exclamation-triangle text-warning" /> Oops! Página não
						encontrada.
					</h3>
					<p>
						Não foi possível encontrar a página que você estava procurando. Enquanto
						isso, você pode <a href="/dashboard">ir para o dashboard</a>.
					</p>
				</div>
			</div>
		</container>
	)
}

export default NotFoundLoggedOut
