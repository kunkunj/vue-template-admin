<template>
	<div class="w-full h-full flex flex-col">
		<Head />
		<div class="flex flex-1 overflow-hidden">
			<Slider></Slider>
			<transition name="move" mode="out-in">
				<keep-alive :include="tagsList">
					<router-view></router-view>
				</keep-alive>
			</transition>
		</div>
	</div>
</template>

<script setup>
import Head from './Head'
import Slider from './Slider'
import { useThemeStore } from '@store/useThemeStore'
const themeStore = useThemeStore()
const tagsList = ref([])

onMounted(() => {
	themeStore.setTheme('dark')
})
</script>
<style scoped lang="less"></style>
