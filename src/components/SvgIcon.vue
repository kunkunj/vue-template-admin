<template>
	<svg class="svg-icon">
		<use :xlink:href="`#icon-${props.name}`" />
	</svg>
</template>

<script setup>
const props = defineProps({
	name: {
		type: String,
		require: true,
		default: ''
	}
})
</script>
<style scoped>
.svg-icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	overflow: hidden;
	vertical-align: -0.15em;
	fill: currentColor;
}
</style>
