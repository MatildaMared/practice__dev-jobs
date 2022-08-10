<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import "../styles/variables.css";
	import "../styles/reset.css";
	import "../styles/global.css";
</script>

<Header/>

<main>
    <slot/>
</main>

<style lang="scss">
    @use "../styles/breakpoints" as *;

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 0 16px;
        width: 100%;
        max-width: calc(var(--max-width) + 32px);
        margin: 0 auto;
        box-sizing: border-box;

        @media (min-width: $breakpoint-tablet-portrait) {
            padding: 0 32px;
            max-width: calc(var(--max-width) + 64px);
        }
    }
</style>
