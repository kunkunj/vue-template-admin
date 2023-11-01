
<template>
	<div class="w-full h-full flex flex-col">
		<Head />
		<div class="flex flex-1 overflow-hidden">
			<Slider></Slider>
			<div class="flex-1">
				<Tag :tags-list="tagsList" @close="closeTag" />
				<router-view v-slot="{ Component }">
					<!-- 缓存组件-----setup标签必须文件名和路由的name一致，不然会失效 -->
					<keep-alive :include="tagsList.map((item) => item.name)">
						<component :key="route.name" :is="Component" v-if="route.meta.KeepAlive" />
					</keep-alive>
					<component :key="route.name" :is="Component" v-if="!route.meta.KeepAlive" />
				</router-view>
			</div>
		</div>
	</div>
</template>

<script setup>
import { watch } from 'vue'
import Head from './Head'
import Slider from './Slider'
import { useThemeStore } from '@store/useThemeStore'
import Tag from './Tag.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const themeStore = useThemeStore()
const tagsList = ref([])
const route = useRoute()
const closeTag = (index) => {
	if (tagsList.value.length == 1) {
		return
	}
	router.replace(tagsList.value[index-1] ? tagsList.value[index-1].path : tagsList.value[index+1].path)
	tagsList.value.splice(index, 1)
}
const setTags = (val) => {
	const isExist = tagsList.value.some((item) => {
		return item.path === val.fullPath
	})
	if (!isExist) {
		if (tagsList.value.length >= 8) {
			tagsList.value.shift()
		}
		tagsList.value.push({
			title: val.meta.title,
			path: val.fullPath,
			name: val.name
		})
	}
}

watch(
	() => route,
	(val) => {
		setTags(val)
	},
	{
		deep: true,
		immediate: true
	}
)

onMounted(() => {
	themeStore.setTheme('dark')
})
</script>
<style scoped lang="less"></style>
