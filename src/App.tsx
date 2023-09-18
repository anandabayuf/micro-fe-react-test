import { ChakraProvider } from '@chakra-ui/react';
import { TourProvider } from '@reactour/tour';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router } from 'react-router-dom';

// import AlertListener from 'lib/components/alert/AlertListener';
import { BASENAME } from 'lib/constants/env';
// import Layout from 'lib/layout';
import locales from 'lib/locales';
import Routings from 'lib/router/Routings';
import { useLocale } from 'lib/store/locale';
import customTheme from 'lib/styles/customTheme';
import { defaultLang, systemLang } from 'lib/utils/i18n';
import 'lib/styles/globals.css';

const App = () => {
	const { locale } = useLocale();
	const activeLocale = locale || systemLang;

	return (
		<IntlProvider
			locale={activeLocale}
			messages={locales[activeLocale]}
			defaultLocale={defaultLang}
		>
			<ChakraProvider theme={customTheme}>
				<TourProvider
					steps={[]}
					showNavigation={false}
					showBadge={false}
					showCloseButton={false}
					showPrevNextButtons={false}
				>
					<Router basename={BASENAME}>
						{/* <AlertListener /> */}
						{/* <Layout> */}
						<Routings />
						{/* </Layout> */}
					</Router>
				</TourProvider>
			</ChakraProvider>
		</IntlProvider>
	);
};

export default App;
