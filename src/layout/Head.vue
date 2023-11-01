<template>
	<div class="head w-full flex justify-between items-center pl-4 pr-4">
		<div class="app-name">后台管理系统</div>
		<div class="flex items-center">
			<!-- <el-select v-model="languge" size="small" class="mr-4 w-20" placeholder="请选择语言">
				<el-option label="中文" value="1" />
				<el-option label="英文" value="2" />
			</el-select> -->
			<el-switch
				v-model="theme"
				size="large"
				@change="changeTheme"
				inline-prompt
				active-text="白亮"
				inactive-text="暗黑"
				inactive-color="#7c9fd196"
				:active-action-icon="Sunny"
				:inactive-action-icon="Moon"
			/>
			<el-dropdown>
				<div class="flex avatar items-center ml-20 mr-4">
					<el-image
						class="img mr-2"
						circle
						src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
					/>
					<span>admin</span>
					<el-icon class="el-icon--right"><arrow-down /></el-icon>
				</div>
				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item @click="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup>
import { Sunny, Moon, ArrowDown } from '@element-plus/icons-vue'
import { useThemeStore } from '@store/useThemeStore'
import { useAuth } from '@store/auth'

const theme = ref(false)
const themeStore = useThemeStore()
const changeTheme = (val) => {
	themeStore.setTheme(val ? 'light' : 'dark')
}
const languge = ref('1')
const logout = () => {
	const { logout } = useAuth()
	logout()
}
</script>
<style scoped lang="less">
.head {
	flex-shrink: 0;
	height: @main-head-height;
	background-color: var(--main-head-background-color);
	border-bottom: 1px solid var(--main-head-border-color);
}
.app-name {
	font-size: 28px;
	font-weight: bold;
	letter-spacing: 1px;
	color: var(--main-app-name-font-color);
}
.avatar {
	.img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	font-size: 15px;
	color: var(--main-app-name-font-color);
}
</style>
