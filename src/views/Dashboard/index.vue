<template>
	<div> </div>
</template>

<script>
import { defineComponent, onActivated, onMounted } from 'vue'

export default defineComponent({
	name: 'dashboard',
	setup() {
		onActivated(() => {
			console.log(2)
		})
		onMounted(() => {
			console.log(1)
		})
	}
})
</script>
<style scoped lang="less"></style>
