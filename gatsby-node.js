exports.onPreInit = (_, pluginOptions) =>
	console.log(`
	Atomic Theme Build ${pluginOptions.version}

	Aplication Name: ${pluginOptions.appName}
	Autor: ${pluginOptions.author.name} <${pluginOptions.author.email}>
	Empresa Coautora: ${pluginOptions.businessCoauthor}
	Projeto: ${pluginOptions.project}
	Site: ${pluginOptions.siteUrl}
	Mensagem: ${pluginOptions.message}
	`)
