module.exports = {
	//Copyright © 2018-2022 深圳杰睿联科技有限公司 粤ICP备20020278号

	title: 'SIM.Express',
	description: 'SIM.Express Documnet Center',
	theme: 'reco',
	dest: 'dist',
	//base: '/docs/',
	head: [
        [
            'link', { rel: 'icon', href: '/logo.png' }
        ],
    ],
	themeConfig: {
		logo: 'https://static-rcp-qa.redteamobile.com/simlessly/logo/simlessly.png',
		noFoundPageByTencent: false,
		mode: 'light',
		author: '深圳杰睿联科技有限公司',
		recordLink: 'https://beian.miit.gov.cn/',
		record: '粤ICP备20020278号',
		startYear: '2015',
		modePicker: false ,
		
		nav: [
			{
				text: 'RSP', link: '/RSP/ApiRefence/signature'
			},
			// {
			// 	text: 'eIM', link:'/eIM/SimExpress/introduction'
			// },
			// {
			// 	text: 'Forum',
			// 	link: 'https://forum.sim.express/'
			// },
			
		],
		subSidebar: 'auto',
		
		sidebar: {
			
			// '/eIM/':
			// [
			// 	{
			// 		title: 'SIM.Express',
			// 		collapsable: true,
			// 		sidebarDepth: 3, // 可选的, 默认值是 0
			// 		children: [
			// 			{title:'Introduction',path:'/eIM/SimExpress/introduction'},
			// 			{title:'Product Highlights',path:'/eIM/SimExpress/highlights'},
			// 			{title:'Product Architecture',path:'/eIM/SimExpress/product'},
			// 			{title:'Pricing',path:'/eIM/SimExpress/pricing'},
			// 			{title:'About us',path:'/eIM/SimExpress/about'},
			// 		],
			//
			// 	},
			// 	{
			// 		title: 'Quick Start',
			// 		collapsable: true,
			// 		sidebarDepth: 3, // 可选的, 默认值是 0
			// 		children: [
			// 			{title:'Process Flow',path:'/eIM/QuickStarted/process'},
			// 			{title:'Apply for eSIM Chip and Test Profile',path:'/eIM/QuickStarted/hardware'},
			// 			{title:'Request Lookup Server API Keys',path:'/eIM/QuickStarted/authority'},
			// 			{title:'Configure Bootstrap Allowlist',path:'/eIM/QuickStarted/ip'},
			// 			{title:'Import Profiles to Lookup Server',path:'/eIM/QuickStarted/profile'},
			// 			{title:'LookUp Server Open API Integration',path:'/eIM/QuickStarted/api'},
			// 			{title:'Integrate IPA SDK',path:'/eIM/QuickStarted/sdk'},
			// 		],
			// 	},
			//
			// 	{
			// 		title: 'Product Specifications & Details',
			// 		collapsable: true,
			// 		sidebarDepth: 3, // 可选的, 默认值是 0
			// 		children: [
			// 			{title:'List of SM-DP+ Vendors and Operators Compatible with SIM.Express',path:'/eIM/Specification/dp'},
			// 			{title:'eUICC Specifications',path:'/eIM/Specification/euuic'},
			// 		],
			// 	},
			// 	{
			// 		title: 'FAQ',
			// 		collapsable: true,
			// 		sidebarDepth: 3, // 可选的, 默认值是 0
			// 		children: [
			// 			{title:'Overall Product',path:'/eIM/FAQ/product'},
			// 			{title:'eUICC chip',path:'/eIM/FAQ/euuic'},
			// 			{title:'Device SDK',path:'/eIM/FAQ/sdk'},
			// 		],
			// 	},
			// 	{
			// 		title: 'API Reference',
			// 		collapsable: false,
			// 		sidebarDepth: 3, // 可选的, 默认值是 0
			// 		children: [
			// 			// {
			// 			// 	title: 'Platform OPEN API',
			// 			// 	collapsable: false,
			// 			// 	sidebarDepth: 3, // 可选的, 默认值是 　
			// 			// 	children: [
			// 			// 		{title:'Signature',path:'/eIM/api/ApiRefence/signature'},
			// 			// 		{title:'QueryDownloadInfo',path:'/eIM/api/ApiRefence/query',},
			// 			// 		{title:'DeleteDownloadInfoResult',path:'/eIM/api/ApiRefence/delete',},
			// 			// 		{title:'GeteSIMOSUpgradePackageURL',path:'/eIM/api/ApiRefence/get',},
			// 			// 		{title:'Batch Import',path:'/eIM/api/ApiRefence/import',},
			// 			//
			// 			// 	],
			// 			// },
			// 			{
			// 				title:'IPA SDK API',
			// 				collapsable: false,
			// 				path:'/eIM/api/ApiRefence/sdk'
			// 			},
			// 			{
			// 				title: 'HAL Port API',
			// 				collapsable: false,
			// 				sidebarDepth: 3, // 可选的, 默认值是 0
			// 				children: [
			// 					{title:'Standard C Library Interface',path:'/eIM/api/ApiRefence/library'},
			// 					{title:'Interfaces of Basic Functions',path:'/eIM/api/ApiRefence/basic',},
			// 					{title:'Thread and Synchronization Interfaces',path:'/eIM/api/ApiRefence/thread',},
			// 					{title:'Modem Interfaces',path:'/eIM/api/ApiRefence/modem',},
			// 					{title:'HTTP Communication Interface',path:'/eIM/api/ApiRefence/http',},
			// 					{title:'Others',path:'/eIM/api/ApiRefence/others',},
			//
			// 				],
			// 			},
			// 		],
			// 	},
			//
			// ],
			'/RSP/': [
				{
					title: 'API Reference',
					collapsable: false,
					sidebarDepth: 3, // 可选的, 默认值是 0
					children: [
						{title:'Signature',path:'/RSP/ApiRefence/signature'},
						{title:'Single Generate AC',path:'/RSP/ApiRefence/singleGenerate',},
						// {title:'Generate AC By UPP',path:'/RSP/ApiRefence/upp-generate',},
						{title:'Batch Generate AC',path:'/RSP/ApiRefence/batchGenerate',},
						{title:'Query Batch AC Generation Results',path:'/RSP/ApiRefence/queryBatchResult',},
						{title:'Delete Profile',path:'/RSP/ApiRefence/deleteProfile',},
						{title:'Query Profile Type',path:'/RSP/ApiRefence/queryProfileType',},
						{title:'Cancel Order',path:'/RSP/ApiRefence/cancelOrder',},
						{title:'Download Order',path:'/RSP/ApiRefence/downloadOrder',},
						{title:'Confirm Order',path:'/RSP/ApiRefence/confirmOrder',},
						// {title:'Release Order',path:'/RSP/ApiRefence/releaseOrder',},
						{title:'Expired Order',path:'/RSP/ApiRefence/expiredOrder',},
					],
				},
				{
					title: 'User Manual',
					collapsable: false,
					sidebarDepth: 3, // 可选的, 默认值是 0
					children: [
						{title:'Introduction',path:'/RSP/UserManual/introduction'},
						{title: 'Function Overview',path:'/RSP/UserManual/overview'},
						{title: 'Quick Start',path:'/RSP/UserManual/quickstart'},
						{title: 'Operations',path:'/RSP/UserManual/operations'},
					],
				},
			]
		}
	},
	plugins: [['vuepress-plugin-code-copy', true]],
}
