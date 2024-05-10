import ContentDefault from '../../components/app/layout/content/contentDefault'
import { Col, Row } from '../../components/global'

const Dashboard = () => {
	return (
		<ContentDefault title="Dashboard">
			<Row>
				<Col>
					<Row>
						<Col className="col-md-3">
							<div className="info-box">
								<span className="info-box-icon bg-info elevation-1">
									<i className="fal fa-dollar" />
								</span>

								<div className="info-box-content">
									<span className="info-box-text">Cobranças</span>
									<span className="info-box-number">10.000</span>
								</div>
							</div>
						</Col>
						<Col className="col-md-3">
							<div className="info-box mb-3">
								<span className="info-box-icon bg-danger elevation-1">
									<i className="fal fa-messages" />
								</span>

								<div className="info-box-content">
									<span className="info-box-text">Mensagens</span>
									<span className="info-box-number">41.410</span>
								</div>
							</div>
						</Col>
						<Col className="col-md-3">
							<div className="info-box mb-3">
								<span className="info-box-icon bg-success elevation-1">
									<i className="fal fa-shopping-cart" />
								</span>

								<div className="info-box-content">
									<span className="info-box-text">Vendas</span>
									<span className="info-box-number">760</span>
								</div>
							</div>
						</Col>
						<Col className="col-md-3">
							<div className="info-box mb-3">
								<span className="info-box-icon bg-warning elevation-1">
									<i className="fal fa-users" />
								</span>

								<div className="info-box-content">
									<span className="info-box-text">Alunos</span>
									<span className="info-box-number">2.000</span>
								</div>
							</div>
						</Col>
					</Row>

					<Row>
						<Col className={'col-md-8'}>
							<div className="card">
								<div className="card-body">
									<div className="row">
										<div className="col-md-12">
											<p className="text-center">
												<strong>Mês corrente vs Mês atual</strong>
											</p>

											<div className="chart">
												<canvas
													id="salesChart"
													height="180"
													style={{
														height: 180
													}}
												/>
											</div>
										</div>
									</div>
								</div>
								<div className="card-footer">
									<Row>
										<Col className="col-sm-3 col-6">
											<div className="description-block border-right">
												<span className="description-percentage text-success">
													<i className="fas fa-caret-up" /> 17%
												</span>
												<h5 className="description-header">$35,210.43</h5>
												<span className="description-text">
													TOTAL REVENUE
												</span>
											</div>
										</Col>
										<Col className="col-sm-3 col-6">
											<div className="description-block border-right">
												<span className="description-percentage text-warning">
													<i className="fas fa-caret-left" /> 0%
												</span>
												<h5 className="description-header">$10,390.90</h5>
												<span className="description-text">TOTAL COST</span>
											</div>
										</Col>
										<Col className="col-sm-3 col-6">
											<div className="description-block border-right">
												<span className="description-percentage text-success">
													<i className="fas fa-caret-up" /> 20%
												</span>
												<h5 className="description-header">$24,813.53</h5>
												<span className="description-text">
													TOTAL PROFIT
												</span>
											</div>
										</Col>
										<Col className="col-sm-3 col-6">
											<div className="description-block">
												<span className="description-percentage text-danger">
													<i className="fas fa-caret-down" /> 18%
												</span>
												<h5 className="description-header">1200</h5>
												<span className="description-text">
													GOAL COMPLETIONS
												</span>
											</div>
										</Col>
									</Row>
								</div>
							</div>
						</Col>
						<Col className={'col-md-4'}>
							<Row>
								<Col>
									<div className="info-box mb-2 bg-warning">
										<span className="info-box-icon">
											<i className="fal fa-tag" />
										</span>

										<div className="info-box-content">
											<span className="info-box-text">Inventory</span>
											<span className="info-box-number">5,200</span>
										</div>
									</div>
									<div className="info-box mb-2 bg-success">
										<span className="info-box-icon">
											<i className="fal fa-heart" />
										</span>

										<div className="info-box-content">
											<span className="info-box-text">Mentions</span>
											<span className="info-box-number">92,050</span>
										</div>
									</div>
									<div className="info-box mb-2 bg-danger">
										<span className="info-box-icon">
											<i className="fal fa-cloud-download-alt" />
										</span>

										<div className="info-box-content">
											<span className="info-box-text">Downloads</span>
											<span className="info-box-number">114,381</span>
										</div>
									</div>
									<div className="info-box bg-info">
										<span className="info-box-icon">
											<i className="fal fa-comment" />
										</span>

										<div className="info-box-content">
											<span className="info-box-text">Direct Messages</span>
											<span className="info-box-number">163,921</span>
										</div>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>

					<Row>
						<Col className={'col-md-8'}>
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">Últimas matrículas</h3>
								</div>
								<div className="card-body p-0">
									<ul className="users-list">
										<li>
											<img src="dist/img/user1-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Alexander Pierce
											</span>
											<span className="users-list-date">Today</span>
										</li>
										<li>
											<img src="dist/img/user8-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Norman
											</span>
											<span className="users-list-date">Yesterday</span>
										</li>
										<li>
											<img src="dist/img/user7-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Jane
											</span>
											<span className="users-list-date">12 Jan</span>
										</li>
										<li>
											<img src="dist/img/user6-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												John
											</span>
											<span className="users-list-date">12 Jan</span>
										</li>
										<li>
											<img src="dist/img/user2-160x160.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Alexander
											</span>
											<span className="users-list-date">13 Jan</span>
										</li>
										<li>
											<img src="dist/img/user5-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Sarah
											</span>
											<span className="users-list-date">14 Jan</span>
										</li>
										<li>
											<img src="dist/img/user4-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Nora
											</span>
											<span className="users-list-date">15 Jan</span>
										</li>
										<li>
											<img src="dist/img/user3-128x128.jpg" alt="User" />
											<span className="users-list-name" href="#">
												Nadia
											</span>
											<span className="users-list-date">15 Jan</span>
										</li>
									</ul>
								</div>
							</div>
						</Col>
						<Col>
							<div className="card">
								<div className="card-header">
									<h3 className="card-title">Dispositivos usados</h3>
								</div>
								<div className="card-body">
									<div className="row">
										<div className="col-md-8">
											<div className="chart-responsive">
												<canvas id="pieChart" height="150" />
											</div>
										</div>
										<div className="col-md-4">
											<ul className="chart-legend clearfix">
												<li>
													<i className="far fa-circle text-danger" /> WEB
												</li>
												<li>
													<i className="far fa-circle text-warning" /> IOS
												</li>
												<li>
													<i className="far fa-circle text-primary" />{' '}
													Android
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</ContentDefault>
	)
}

export default Dashboard
