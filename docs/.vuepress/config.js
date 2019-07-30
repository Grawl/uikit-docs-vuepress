const hljs = require('highlight.js')
const { example } = require('./utils')
module.exports = {
	dest: 'dist',
	extendMarkdown: md => {
		md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
			const token = tokens[idx]
			const lang = token.info
			const code = token.content
			if (lang === 'example') {
				try {
					return example(code)
				} catch (__) {}
			} else if (lang && hljs.getLanguage(lang)) {
				try {
					return `<pre class="hljs"><code>${
						hljs.highlight(lang, code, true).value
					}</code></pre>`
				} catch (__) {}
			}
			return `<pre class="hljs"><code>${
				md.utils.escapeHtml(code)
			}</code></pre>`
		}
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
				title: 'Layout',
				collapsable: false,
				children: [
					['container', 'Container'],
					['flex', 'Flex'],
					['grid', 'Grid'],
					['section', 'Section'],
					['tab', 'Tab'],
				],
			},
			{
				title: 'Navigation',
				collapsable: false,
				children: [
					['breadcrumb', 'Breadcrumb'],
					['dotnav', 'Dotnav'],
					['iconnav', 'Iconnav'],
					['nav', 'Nav'],
					['navbar', 'Navbar'],
					['pagination', 'Pagination'],
					['slidenav', 'Slidenav'],
					['subnav', 'Subnav'],
					['thumbnav', 'Thumbnav'],
					['totop', 'Totop'],
				],
			},
			{
				title: 'Containers',
				collapsable: false,
				children: [
					['accordion', 'Accordion'],
					['article', 'Article'],
					['card', 'Card'],
					['column', 'Column'],
					['description-list', 'Description List'],
					['form', 'Form'],
					['lightbox', 'Lightbox'],
					['list', 'List'],
					['modal', 'Modal'],
					['offcanvas', 'Off-canvas'],
					['sortable', 'Sortable'],
					['switcher', 'Switcher'],
					['slider', 'Slider'],
					['slideshow', 'Slideshow'],
					['table', 'Table'],
					['tile', 'Tile'],
				],
			},
			{
				title: 'Elements',
				collapsable: false,
				children: [
					['alert', 'Alert'],
					['badge', 'Badge'],
					['button', 'Button'],
					['close', 'Close'],
					['comment', 'Comment'],
					['countdown', 'Countdown'],
					['divider', 'Divider'],
					['drop', 'Drop'],
					['dropdown', 'Dropdown'],
					['filter', 'Filter'],
					['heading', 'Heading'],
					['icon', 'Icon'],
					['image', 'Image'],
					['label', 'Label'],
					['leader', 'Leader'],
					['link', 'Link'],
					['marker', 'Marker'],
					['notification', 'Notification'],
					['overlay', 'Overlay'],
					['placeholder', 'Placeholder'],
					['progress', 'Progress'],
					['search', 'Search'],
					['spinner', 'Spinner'],
					['svg', 'SVG'],
					['toggle', 'Toggle'],
					['tooltip', 'Tooltip'],
					['upload', 'Upload'],
					['video', 'Video'],
				],
			},
			{
				title: 'Style',
				collapsable: false,
				children: [
					['align', 'Align'],
					['animation', 'Animation'],
					['background', 'Background'],
					['base', 'Base'],
					['cover', 'Cover'],
					['height', 'Height'],
					['inverse', 'Inverse'],
					['margin', 'Margin'],
					['padding', 'Padding'],
					['parallax', 'Parallax'],
					['position', 'Position'],
					['print', 'Print'],
					['sticky', 'Sticky'],
					['text', 'Text'],
					['transition', 'Transition'],
					['utility', 'Utility'],
					['visibility', 'Visibility'],
					['scroll', 'Scroll'],
					['scrollspy', 'Scrollspy'],
					['width', 'Width'],
				],
			},
		]
	},
}
