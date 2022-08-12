<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../styles/variables.css";
	import "../styles/reset.css";
	import "../styles/global.css";
</script>

<Header/>

<slot/>

<style lang="scss">
    @use "../styles/breakpoints" as *;
</style>
