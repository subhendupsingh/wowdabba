const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily : {
				'poppins' : ['inter', 'sans-serif'],
			},
			colors: {
				'brand': '#9AD6D1',
				'heading': '#1D1B84',
				'text': '#344B80',
				'green': '#3DC78A',
				'orange': '#F6B73F',
				'grayb': '#F3F9FE',
				'teal': '#3E8E7E'
			}
		}
	},

	plugins: []
};

module.exports = config;
