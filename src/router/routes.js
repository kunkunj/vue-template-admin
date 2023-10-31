import Layout from '@/layout/Home.vue'
export default [
	{
		path: '/table',
		name: 'table',
		meta: {
			title: '表格',
		},
		component: () => import('@/views/table/index.vue')
	},
	{
		path: '/tabs',
		name: 'tabs',
		meta: {
			title: 'tabs选项卡'
		},
		component: () => import('@/views/tabs/index.vue')
	},
	{
		path: '/form',
		name: 'form',
		meta: {
			title: '表单'
		},
		component: Layout,
		children: [
			{
				path: '/form/baseForm',
				name: 'baseForm',
				meta: {
					title: '基本表单'
				},
				component: () => import('@/views/tabs/index.vue')
			},
			{
				path: '/form/mk',
				name: 'mk',
				meta: {
					title: '富文本'
				},
				component: Layout,
				children: [
					{
						path: '/form/mk/editor',
						name: 'editor',
						meta: {
							title: '富文本编辑器'
						},
						component: () => import('@/views/tabs/index.vue')
					}
				]
			},
			{
				path: '/form/upload',
				name: 'upload',
				meta: {
					title: '文件上传'
				},
				component: () => import('@/views/tabs/index.vue')
			}
		]
	}
]
