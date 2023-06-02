import { extendTheme } from 'native-base';

export const THEMES = extendTheme({
	colors: {
		gray: {
			300: '#8D8D99'
		},
		blue: {
			500: '#339CFF',
			600: '#',
		},
		white: '#fff',
		black: '#000',
	},
	fontSize: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 20,
		xl: 24,
	}
})