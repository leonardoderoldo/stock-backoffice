import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Routers from './routes'

import { EmployeeProvider } from './contexts/employee'
import { RestaurantProvider } from './contexts/restaurant'
import { RootProvider } from './contexts/root'
import { ModalProvider } from './contexts/modal'

function App() {
	return (
		<Router>
			<RootProvider>
				<EmployeeProvider>
					<RestaurantProvider>
						<ModalProvider>
							<Routers />
						</ModalProvider>
					</RestaurantProvider>
				</EmployeeProvider>
			</RootProvider>
			<Toaster position="top-right" />
		</Router>
	)
}

export default App
