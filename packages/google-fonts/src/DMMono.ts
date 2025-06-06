import {loadFonts} from './base';

export const getInfo = () => ({
	fontFamily: 'DM Mono',
	importName: 'DMMono',
	version: 'v14',
	url: 'https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500',
	unicodeRanges: {
		'latin-ext':
			'U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF',
		latin:
			'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
	},
	fonts: {
		italic: {
			'300': {
				'latin-ext':
					'https://fonts.gstatic.com/s/dmmono/v14/aFTT7PB1QTsUX8KYth-orYadYY35Zlk.woff2',
				latin:
					'https://fonts.gstatic.com/s/dmmono/v14/aFTT7PB1QTsUX8KYth-orYadb435.woff2',
			},
			'400': {
				'latin-ext':
					'https://fonts.gstatic.com/s/dmmono/v14/aFTW7PB1QTsUX8KYth-gCKSIUKw.woff2',
				latin:
					'https://fonts.gstatic.com/s/dmmono/v14/aFTW7PB1QTsUX8KYth-gBqSI.woff2',
			},
			'500': {
				'latin-ext':
					'https://fonts.gstatic.com/s/dmmono/v14/aFTT7PB1QTsUX8KYth-o9YedYY35Zlk.woff2',
				latin:
					'https://fonts.gstatic.com/s/dmmono/v14/aFTT7PB1QTsUX8KYth-o9Yedb435.woff2',
			},
		},
		normal: {
			'300': {
				'latin-ext':
					'https://fonts.gstatic.com/s/dmmono/v14/aFTR7PB1QTsUX8KYvrGyEY2tbZX9.woff2',
				latin:
					'https://fonts.gstatic.com/s/dmmono/v14/aFTR7PB1QTsUX8KYvrGyEYOtbQ.woff2',
			},
			'400': {
				'latin-ext':
					'https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthSQBLyM.woff2',
				latin:
					'https://fonts.gstatic.com/s/dmmono/v14/aFTU7PB1QTsUX8KYthqQBA.woff2',
			},
			'500': {
				'latin-ext':
					'https://fonts.gstatic.com/s/dmmono/v14/aFTR7PB1QTsUX8KYvumzEY2tbZX9.woff2',
				latin:
					'https://fonts.gstatic.com/s/dmmono/v14/aFTR7PB1QTsUX8KYvumzEYOtbQ.woff2',
			},
		},
	},
	subsets: ['latin', 'latin-ext'],
});

export const fontFamily = 'DM Mono' as const;

type Variants = {
	italic: {
		weights: '300' | '400' | '500';
		subsets: 'latin' | 'latin-ext';
	};
	normal: {
		weights: '300' | '400' | '500';
		subsets: 'latin' | 'latin-ext';
	};
};

export const loadFont = <T extends keyof Variants>(
	style?: T,
	options?: {
		weights?: Variants[T]['weights'][];
		subsets?: Variants[T]['subsets'][];
		document?: Document;
		ignoreTooManyRequestsWarning?: boolean;
	},
) => {
	return loadFonts(getInfo(), style, options);
};
