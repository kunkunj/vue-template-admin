<template>
	<div>
		<template v-if="item.subs && item.subs.length">
			<el-sub-menu :index="item.index">
				<template #title>
					<div class="flex items-center">
						<svg-icon :name="item.icon" class="mr-2" />
						{{ item.title }}
					</div>
				</template>
				<template v-if="item.subs && item.subs.length">
					<template v-for="cur in item.subs">
						<SubMenu :item="cur" />
					</template>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<div class="flex items-center">
							<svg-icon :name="item.icon" class="mr-2" />
							{{ item.title }}
						</div>
					</el-menu-item>
				</template>
			</el-sub-menu>
		</template>
		<template v-else>
			<el-menu-item :index="item.index" :key="item.index">
				<div class="flex items-center">
					<svg-icon :name="item.icon" class="mr-2" />
					{{ item.title }}
				</div>
			</el-menu-item>
		</template>
	</div>
</template>

<script setup name="SubMenu">
const props = defineProps({
	item: {
		require: true,
		type: Object,
		default: () => ({})
	}
})
</script>
<style scoped lang="less"></style>
