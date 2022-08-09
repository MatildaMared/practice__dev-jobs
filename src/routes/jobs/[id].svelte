<script context="module">
	export async function load ({params}) {
		const {id} = params;
		return {
			props: {id}
		};
	}
</script>

<script lang="ts">
	export let id;
</script>

<h1>{id}</h1>

<style lang="scss"></style>