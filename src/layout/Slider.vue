<template>
	<div class="slider h-full overflow-auto">
		<el-scrollbar>
			<el-menu
				:collapse="false"
				:background-color="styles.bgColor"
				:text-color="styles.fontColor"
				:active-text-color="styles.activeFontColor"
				unique-opened
			>
				<template v-for="(item, index) in items" :key="index">
					<SubMenu :item="item" />
				</template>
			</el-menu>
		</el-scrollbar>
	</div>
</template>

<script setup>
import { usePermise } from '@/store/permise'
import SubMenu from './components/sub-menu.vue'
import { useThemeStore } from '@store/useThemeStore'

const themeStore = useThemeStore()

const { menus: items } = usePermise()

const styles = computed(() => {
	return themeStore.theme == 'light'
		? {
				bgColor: '#fff',
				fontColor: '#000',
				activeFontColor: '#20a0ff'
		  }
		: {
				bgColor: '#324157',
				fontColor: '#bfcbd9',
				activeFontColor: '#20a0ff'
		  }
})

</script>
<style scoped lang="less">
.slider {
	padding: 20px 0;
	width: @main-slider-width;
	background-color: var(--main-head-background-color);
}
</style>
