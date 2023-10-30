import { defineStore } from 'pinia'

export const usePermise = defineStore('permise', {
	state: () => ({
		menus: [
			{
				icon: 'index',
				index: 'dashboard',
				title: '首页'
			},
			{
				icon: 'index',
				index: 'table',
				title: '基础表格'
			},
			{
				icon: 'index',
				index: 'tabs',
				title: 'tab选项卡'
			},
			{
				icon: 'index',
				index: '3',
				title: '表单相关',
				subs: [
					{
						index: 'form',
						title: '基本表单'
					},
					{
						index: '3-2',
						title: '三级菜单',
						subs: [
							{
								index: 'editor',
								title: '富文本编辑器'
							},
							{
								index: 'markdown',
								title: 'markdown编辑器'
							}
						]
					},
					{
						index: 'upload',
						title: '文件上传'
					}
				]
			},
			{
				icon: 'index',
				index: 'icon',
				title: '自定义图标'
			},
			{
				icon: 'index',
				index: 'charts',
				title: 'echart图表'
			},
			{
				icon: 'index',
				index: '6',
				title: '拖拽组件',
				subs: [
					{
						index: 'drag',
						title: '拖拽列表'
					},
					{
						index: 'dialog',
						title: '拖拽弹框'
					}
				]
			},
			{
				icon: 'index',
				index: '7',
				title: '错误处理',
				subs: [
					{
						index: 'permission',
						title: '权限测试'
					},
					{
						index: '404',
						title: '404页面'
					}
				]
			}
		]
	}),
	actions: {
        //根据menu生成路由
		generateRoutersByMenu(router, asyncRoutes) {},
        //根据角色值生成路由
		generateRoutersByRole(role, asyncRoutes) {}
	}
})
