---
---

# Gatsby Business in Build

#### BiB _by [Edu4Dev](https://edu4.dev)_

---

Request business data written on `gatsby-config.js`.

## 🚀 Quick start

To get started to log data on your build, you can follow these steps:

1. Install The Business Log - gatsby-plugin with:

```shell
npm i gatsby-business-in-build
```

If you already have customize your `gatsby-config.js`, you can use it. Otherwise, you can [create a new gatsby-config.js file](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) to setting your plugin.

## 🧐 What's inside?

This plugin generates the [files Gatsby looks for inside node_modules](https://www.gatsbyjs.com/docs/files-gatsby-looks-for-in-a-plugin/).

/gatsby-business-in-build
├── gatsby-node.js
├── index.js
├── LICENSE(0BSD)
├── package.json
└── README.md

The plugin files structure will merge both `gatsby-node` file:

```text
/your-gatsby-site
├── gatsby-node.js

/gatsby-business-in-build
├── gatsby-node.js
└── (*.*)
```

With `your-gatsby-site` being your Gatsby site, the plugin will inject the plugin file "gatsby-node.js" inside your build.

2. Configure the plugin

Inside of the `gatsby-config.js` file of your site (in this case, `your-gatsby-site/gatsby-config.js`, inject the plugin in the `plugins` list:

```javascript
module.exports = {
{
	resolve: `gatsby-business-in-build`,
		options: {
			name: 'Gatsby Business in Build',
			version: '0.0.0',
			developer: 'Milton Bolonha',
			coauthorBusiness: 'Edu4Dev',
			project: 'Atomic Theme',
			url: 'https://dominiofinal.com',
			message: 'Copy not comedy.',
		},
	},
}
```

3. Verify the plugin was added correctly

You can verify your plugin was added to your site correctly by running `gatsby develop` or `gatsby build` for the site.

You should now see a message logged to the console in the preinit phase of the Gatsby build process:

```shell
$ gatsby develop
success open and validate gatsby-configs - 0.033s

		GATSBY BUSINESS IN BUILD

		Aplication Name: Atomic Theme
		Version: 1.0.0
		Developer: Milton Bolonha
		Coauthor Business: Edu4Dev
		Project: Gatsby Business in Build
		Website: https://www.npmjs.com/package/gatsby-business-in-build
		Mensage: Copy not comedy.

(...)

```

## 🎓 Learning Gatsby

If you're looking for more guidance on plugins, how they work, or what their role is in the Gatsby ecosystem, check out some of these resources:

- The [Creating Plugins](https://www.gatsbyjs.com/docs/creating-plugins/) section of the docs has information on authoring and maintaining plugins yourself.
- The conceptual guide on [Plugins, Themes, and Starters](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/) compares and contrasts plugins with other pieces of the Gatsby ecosystem. It can also help you [decide what to choose between a plugin, starter, or theme](https://www.gatsbyjs.com/docs/plugins-themes-and-starters/#deciding-which-to-use).
- The [Gatsby plugin library](https://www.gatsbyjs.com/plugins/) has over 1750 official as well as community developed plugins that can get you up and running faster and borrow ideas from.
