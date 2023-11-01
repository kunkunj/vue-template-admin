<template>
	<div class="flex tags items-center pl-3 pr-3 w-full">
		<el-tag
			class="cursor-pointer mr-3"
			v-for="(item, index) in props.tagsList"
			:key="item.path"
			size="mini"
			:type="route.name == item.name ? '' : 'info'"
			:closable="route.name == item.name"
			@close="handleClose(index)"
			@click="navTo(item)"
			>{{ item.title }}</el-tag
		>
	</div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const router = useRouter()
const props = defineProps(['tagsList'])
const emit = defineEmits(['close'])
const navTo = (route) => {
	router.push(route.path)
}
const handleClose = (index) => {
	emit('close', index)
}
</script>
<style scoped lang="less">
.tags {
	height: 40px;
	background: var(--main-tag-background-color);
}
</style>
