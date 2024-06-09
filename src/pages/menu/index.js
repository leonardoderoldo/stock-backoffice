import { useContext, useEffect, useState } from 'react'

import ContentDefault from '../../components/app/layout/content/contentDefault'

import { Buttom, Card, Col, Row } from '../../components/global'
import { ModalContext, RestaurantContext } from '../../contexts'

export default function Menu() {
	const { openMenuCreate } = useContext(ModalContext)
	const { getCatalog } = useContext(RestaurantContext)

	const [catalog, setCatalog] = useState({})

	useEffect(() => {
		getCatalog().then((result) => {
			setCatalog(result)
		})
	}, [])

	return (
		<>
			<ContentDefault title="Cardápio">
				<Row>
					<Col>
						<div className="card">
							<div className="card-header">
								<div className="card-title mb-0">
									<Buttom onClick={() => openMenuCreate()}>
										<i className="fas fa-plus mr-1" />
										Nova categoria
									</Buttom>
								</div>
								<div className="card-tools">
									<div className="input-group input-group-sm mt-1">
										<input
											type="text"
											name="table_search"
											className="form-control float-right"
											placeholder="Buscar"
										/>

										<div className="input-group-append">
											<button type="submit" className="btn btn-default">
												<i className="fas fa-search" />
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className="card-body table-responsive">
								{!catalog && (
									<div className="alert alert-danger">
										<h5>
											<i className="icon fas fa-ban"></i> Atenção
										</h5>
										Nenhuma categoria cadastrada, sua loja não será exibida até que categorias e
										produtos sejam adicionados.
									</div>
								)}
								{catalog && (
									<Card>
										<Row className="pt-3 pb-3">
											<Col className="pl-4 col-6">
												<h4 className=" h-100 d-flex flex-column justify-content-center">
													Nome da categoria
												</h4>
											</Col>
											<Col className="col-5 d-flex flex-row col-2 d-flex justify-content-end">
												<Buttom>
													<i className="fas fa-plus mr-1" />
													Adicionar item
												</Buttom>
											</Col>
											<Col className="col-1 pr-4 d-flex justify-content-end">
												<Buttom>
													<i className="fas fa-ellipsis-vertical" />
												</Buttom>
											</Col>
										</Row>
										<Row>
											<Col>
												<table className="table table-hover text-wrap projects">
													<thead>
														<tr>
															<th>#</th>
															<th className="col-9">Título</th>
															<th className="text-nowrap col-1">Refeições</th>
															<th className="text-center col-1">Status</th>
															<th className="text-center col-1">Ações</th>
														</tr>
													</thead>
													<tbody></tbody>
												</table>
											</Col>
										</Row>
									</Card>
								)}
							</div>
						</div>
					</Col>
				</Row>
			</ContentDefault>
		</>
	)
}
