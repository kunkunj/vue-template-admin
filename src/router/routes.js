import Layout from '@/layout/Home.vue'
/**
 * @param title : 页签名称
 * @param hidden : 是否隐藏（不显示在菜单栏）
 * @param KeepAlive : 是否可缓存
 */
export default [
	{
		path: '/icon',
		name: 'icon',
		meta: {
			title: '图标',
			KeepAlive:true
		},
		component: () => import('@/views/icon/icon.vue')
	},
	{
		path: '/page',
		name: 'page',
		meta: {
			title: '隐藏页面',
			hidden:true
		},
		component: () => import('@/views/page/page.vue')
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
				component: () => import('@/views/form/index.vue')
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
						component: () => import('@/views/editor/index.vue')
					}
				]
			},
			{
				path: '/form/upload',
				name: 'upload',
				meta: {
					title: '文件上传'
				},
				component: () => import('@/views/upload/index.vue')
			}
		]
	}
]
