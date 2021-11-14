exports.onPreInit = (_, pluginOptions) =>
	console.log(`
	GATSBY BUSINESS IN BUILD

	Application Name: ${pluginOptions.name}
	Version: ${pluginOptions.version}
	Developer: ${pluginOptions.developer}
	Coauthor Business: ${pluginOptions.coauthorBusiness}
	Project: ${pluginOptions.project}
	Website: ${pluginOptions.url}
	Message: ${pluginOptions.message}

	`)
