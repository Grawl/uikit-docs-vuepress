const hljs = require('highlight.js')
const { example } = require('./utils')
const sidebar = require('./sidebar')
module.exports = {
	dest: 'dist',
	extendMarkdown: md => {
		md.renderer.rules.fence = function (tokens, idx, options, env, slf) {
			const token = tokens[idx]
			const lang = token.info
			let code = token.content
			if (code.match(/\[uikit-version]/)) {
				const UIkitPackage = require('uikit/package')
				code = code.replace(/\[uikit-version]/g, UIkitPackage.version)
			}
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
		sidebar,
	},
}
