import {ThemeProvider} from '@/app/providers/ThemeProvider.tsx'
import '@/shared/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {store} from './appStore.ts'
import BaseLayout from './layouts/BaseLayout'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ThemeProvider>
			<Provider store={store}>
				<BaseLayout />
			</Provider>
		</ThemeProvider>
	</React.StrictMode>,
)
