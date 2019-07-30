const hljs = require('highlight.js')
const nanoid = require('nanoid')
module.exports.example = code => {
	const id = `code-${nanoid()}`
	return `
<div class='uk-position-relative uk-margin-medium'>
	<ul uk-tab='swiping: false'>
		<li><a href='#'>Preview</a></li>
		<li><a href='#'>Markup</a></li>
	</ul>
	<ul class='uk-switcher uk-margin'>
		<li>${code}</li>
		<li>
			<pre>
				<code>${hljs.highlight('html', code, true).value}</code>
			</pre>
		</li>
	</ul>
	<div class='uk-position-top-right uk-margin-small-top'>
		<ul class='uk-iconnav'>
			<li>
				<a class='js-copy' uk-tooltip='Copy to Clipboard' rel='#${id}'>
					copy
				</a>
			</li>
			<li>
				<a class='js-codepen' uk-tooltip='Edit on Codepen' rel='#${id}'>
					codepen
				</a>
			</li>
		</ul>
	</div>
</div>
`
}