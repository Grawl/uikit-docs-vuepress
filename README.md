# [UIkit](https://getuikit.com) documentation on [VuePress](https://vuepress.vuejs.org)

> UIkit is a large and good front-end framework and more than 50 components library.

## Why rebuild UIkit documentation on VuePress

[UIkit website repository](https://github.com/uikit/uikit-site) is broken: it's not possible to clone git repository and launch it on local machine.

There is an instruction in issue [uikit-site#152](https://github.com/uikit/uikit-site/issues/152) on how to build it.

This issue referenced in following issues:

> incorrect installation of the offline version [uikit-site#121](https://github.com/uikit/uikit-site/issues/121)

> uikit-site v3. how to install on owner local or virtual hosting? [uikit-site#119](https://github.com/uikit/uikit-site/issues/119)

> Can't install after last update [uikit-site#114](https://github.com/uikit/uikit-site/issues/114)

> can't install/update after last release [uikit-site#112](https://github.com/uikit/uikit-site/issues/112)

> How to install? [uikit-site#104](https://github.com/uikit/uikit-site/issues/104)

> Your website is not visibile for error [uikit-site#150](https://github.com/uikit/uikit-site/issues/150)

> Cannot Access Web [uikit-site#134](https://github.com/uikit/uikit-site/issues/134)

> I can't start local site [uikit-site#126](https://github.com/uikit/uikit-site/issues/126)

So, there is docs-only repository using [Vue CLI](https://cli.vuejs.org) to run UIkit documentation:

- [Grawl/uikit-site-vue-cli](https://github.com/Grawl/uikit-site-vue-cli)

For software documentation, we want plain HTML files to put it into [Dash](https://kapeli.com/dash), [Zeal Docs](https://zealdocs.org) and other offline documentation software. But UIkit documentation repository [render MarkDown files on client browser](https://github.com/uikit/uikit-site/commit/2c8f6e01eeedd8fe354b70373650d4963a974435#diff-edc7164e7239b856a2e7161cd97035e2R85), without converting it into HTML on build process.

So, there is [`uikit-docs-vuepress`](https://github.com/Grawl/uikit-docs-vuepress) repository: VuePress created for rendering MarkDown files as HTML pages.

## Benefits of using VuePress for UIkit documentation

1. Render all documentation pages to HTML files
2. VuePress search across documentation titles and page names
3. Faster website updates

    [`uikit/uikit-site`](https://github.com/uikit/uikit-site/issues) has a lot of open issues, plus some issues from [UIkit repository](https://github.com/uikit/uikit) about documentation and website. There is [a lot of Pull Requests](https://github.com/uikit/uikit-site/pulls) in UIkit website repository, some of them are older than a year

## How this repository built

`docs/` is copy of [`uikit/uikit-site/docs/pages/`](https://github.com/uikit/uikit-site/tree/develop/docs/pages)

### Added UIkit support to Vuepress theme

1. Ejexted VuePress theme with `vuepress eject`
2. Added `require('uikit')` to `beforeMount()` of `docs/.vuepress/theme/layouts/Layout.vue`
3. Added `<style src="uikit/dist/css/uikit.css"></style>` to end of Layout

### Destroyed UIkit code examples

As of UIkit code examples uses `example` language that uses `utils.js` extensions, we have to integrate this extensions into VuePress.

So, all `example` have replaced with `html` in all code blocks.

## TODO

- [ ] Replace version in `installation.md`
- [ ] Integrate `utils.js` to make usage examples work
- [ ] Pull [uikit-site#135](https://github.com/uikit/uikit-site/pull/135) Added Tests section
- [x] Pull [uikit-site#113](https://github.com/uikit/uikit-site/pull/113) Organize components by function
- [ ] Design theme to make it looks 1:1 as other UIkit pages?

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run dev
```

### Compiles and minifies for production

```
yarn run build
```
