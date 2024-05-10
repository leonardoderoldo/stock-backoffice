import { Routes } from 'react-router'
import { Route } from 'react-router-dom'

import { NotFoundLoggedOut, SignIn } from '../pages'
import WithoutLayout from '../pages/layout/withoutLayout'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route element={<WithoutLayout />}>
					<Route index path="/" element={<SignIn />} />
					{/* <Route path="sign-up" element={<SignUp />}> */}
					{/* <Route index path="" element={<DataPerson />} /> */}
					{/* <Route path="activate" element={<ActivatePerson />} /> */}
					{/* </Route> */}
					<Route path="*" element={<NotFoundLoggedOut />} />
				</Route>
			</Routes>
		</>
	)
}
