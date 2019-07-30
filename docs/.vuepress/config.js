const hljs = require('highlight.js')
const { example } = require('./utils')
module.exports = {
	dest: 'dist',
	extendMarkdown: md => {
		md.set({
			highlight: function (str, lang) {
				if (lang === 'example') {
					try {
						return example(str);
					} catch (__) {}
				} else if (lang && hljs.getLanguage(lang)) {
					try {
						return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
					} catch (__) {}
				}

				return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
			}
		})
	},
	themeConfig: {
		logo: '/images/uikit-logo.svg',
		nav: [
			{ text: 'Pro', link: 'https://getuikit.com/pro' },
			{ text: 'Changelog', link: 'https://getuikit.com/changelog' },
			{ text: 'Download', link: 'https://getuikit.com/download' },
		],
		sidebar: [
			{
				title: 'Getting started',
				collapsable: false,
				children: [
					['introduction', 'Introduction'],
					['installation', 'Installation'],
					['less', 'Less'],
					['sass', 'Sass'],
					['javascript', 'JavaScript'],
					['webpack', 'Webpack'],
					['custom-icons', 'Custom icons'],
					['avoiding-conflicts', 'Avoiding conflicts'],
					['rtl', 'RTL support'],
					['migration', 'Migration'],
				],
			},
			{
				title: 'Components',
				collapsable: false,
				children: [
					['accordion', 'Accordion'],
					['alert', 'Alert'],
					['align', 'Align'],
					['animation', 'Animation'],
					['article', 'Article'],
					['background', 'Background'],
					['badge', 'Badge'],
					['base', 'Base'],
					['breadcrumb', 'Breadcrumb'],
					['button', 'Button'],
					['card', 'Card'],
					['close', 'Close'],
					['column', 'Column'],
					['comment', 'Comment'],
					['container', 'Container'],
					['countdown', 'Countdown'],
					['cover', 'Cover'],
					['description-list', 'Description List'],
					['divider', 'Divider'],
					['dotnav', 'Dotnav'],
					['drop', 'Drop'],
					['dropdown', 'Dropdown'],
					['filter', 'Filter'],
					['flex', 'Flex'],
					['form', 'Form'],
					['grid', 'Grid'],
					['heading', 'Heading'],
					['height', 'Height'],
					['icon', 'Icon'],
					['iconnav', 'Iconnav'],
					['image', 'Image'],
					['inverse', 'Inverse'],
					['label', 'Label'],
					['leader', 'Leader'],
					['lightbox', 'Lightbox'],
					['link', 'Link'],
					['list', 'List'],
					['margin', 'Margin'],
					['marker', 'Marker'],
					['modal', 'Modal'],
					['nav', 'Nav'],
					['navbar', 'Navbar'],
					['notification', 'Notification'],
					['offcanvas', 'Off-canvas'],
					['overlay', 'Overlay'],
					['padding', 'Padding'],
					['pagination', 'Pagination'],
					['parallax', 'Parallax'],
					['placeholder', 'Placeholder'],
					['position', 'Position'],
					['print', 'Print'],
					['progress', 'Progress'],
					['scroll', 'Scroll'],
					['scrollspy', 'Scrollspy'],
					['search', 'Search'],
					['section', 'Section'],
					['slidenav', 'Slidenav'],
					['slider', 'Slider'],
					['slideshow', 'Slideshow'],
					['sortable', 'Sortable'],
					['spinner', 'Spinner'],
					['sticky', 'Sticky'],
					['subnav', 'Subnav'],
					['svg', 'SVG'],
					['switcher', 'Switcher'],
					['tab', 'Tab'],
					['table', 'Table'],
					['text', 'Text'],
					['thumbnav', 'Thumbnav'],
					['tile', 'Tile'],
					['toggle', 'Toggle'],
					['tooltip', 'Tooltip'],
					['totop', 'Totop'],
					['transition', 'Transition'],
					['upload', 'Upload'],
					['utility', 'Utility'],
					['video', 'Video'],
					['visibility', 'Visibility'],
					['width', 'Width']
				],
			},
		]
	},
}
