import { BrowserRouter as Router } from 'react-router-dom'

import Routers from './routes'
import { EmployeeProvider } from './contexts/employee'
import { RestaurantProvider } from './contexts/restaurant'
import { RootProvider } from './contexts/root'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<Router>
			<RootProvider>
				<EmployeeProvider>
					<RestaurantProvider>
						<Routers />
					</RestaurantProvider>
				</EmployeeProvider>
			</RootProvider>
			<Toaster position="top-right" />
		</Router>
	)
}

export default App
