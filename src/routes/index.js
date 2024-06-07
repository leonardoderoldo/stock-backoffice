import { Routes } from 'react-router'
import { Route } from 'react-router-dom'

import { Dashboard, DataCompany, DataPerson, NotFoundLoggedOut, SignIn, SignUp, Terms } from '../pages'
import ActivatePerson from '../pages/signUp/activatePerson'
import AddressRegister from '../pages/signUp/addressRegister'

import RegistrytLayout from '../pages/layout/registryLayout'
import WithoutLayout from '../pages/layout/withoutLayout'
import SecureDefaultLayout from '../pages/layout/defaultLayout'
import AccountBankingRegister from '../pages/signUp/accountBanking'

export default function Routers() {
	return (
		<>
			<Routes>
				<Route element={<WithoutLayout />}>
					<Route index path="/" element={<SignIn />} />
					<Route index path="/signin" element={<SignIn />} />
					<Route path="sign-up" element={<SignUp />}>
						<Route index path="" element={<DataCompany />} />
						<Route index path="person" element={<DataPerson />} />
						<Route path="activate" element={<ActivatePerson />} />
					</Route>
					<Route path="*" element={<NotFoundLoggedOut />} />
				</Route>
				{/* Registry */}
				<Route element={<RegistrytLayout />}>
					<Route path="sign-up" element={<SignUp />}>
						<Route index path="company" element={<DataPerson />} />
						<Route path="address-register" element={<AddressRegister />} />
						<Route path="account-banking" element={<AccountBankingRegister />} />
					</Route>
					<Route path="sign-up/custom" element={<SignUp percentage={90} />}>
						<Route path="accept-school-terms" element={<Terms />} />
					</Route>
					<Route path="*" element={<NotFoundLoggedOut />} />
				</Route>
				<Route element={<SecureDefaultLayout />}>
					<Route path="dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</>
	)
}
