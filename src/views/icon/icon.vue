<template>
	<div>table</div>
</template>

<script setup name="table">
import { onActivated, onMounted } from 'vue'
onActivated(() => {
	console.log(2, 'table')
})
onMounted(() => {
	console.log(1, 'table')
})
</script>
<style scoped lang="less"></style>
