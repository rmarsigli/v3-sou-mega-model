import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import Page from './layouts/Page';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import ScrollToTop from './hooks/ScrollToTop'

const App: React.FC = () => {
	return (
		<I18nextProvider i18n={i18n}>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="*" element={<Landing><Home /></Landing>} />
					<Route index element={<Landing><Home /></Landing>} />
					<Route path='/politica-de-privacidade' element={<Page title={'Política de Privacidade'}><PrivacyPolicy /></Page>} />
					<Route path='/termos-de-uso' element={<Page title={'Termos de Uso'}><TermsOfUse /></Page>} />
				</Routes>
			</BrowserRouter>
		</I18nextProvider>
	);
}

export default App;
