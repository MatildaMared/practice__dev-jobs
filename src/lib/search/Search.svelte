<script lang="ts">
	import {createEventDispatcher} from "svelte";
	import Button from "../button/Button.svelte";

	const dispatch = createEventDispatcher();

	let titleSearchString = "";
	let locationSearchString = "";
	let activeFilter: "title" | "location" = "title";
	let showFullTimeOnly = false;

	$: {
		filterJobs(titleSearchString, locationSearchString, activeFilter, showFullTimeOnly);
	}

	function filterJobs(titleSearchString, locationSearchString, activeFilter, showFullTimeOnly) {
		dispatch("filter", {
			titleSearchString,
			locationSearchString,
			activeFilter,
			showFullTimeOnly
		});
	}

	function onSubmit(e) {
		e.preventDefault();
		filterJobs(titleSearchString, locationSearchString, activeFilter, showFullTimeOnly);
	}
</script>

<form on:submit={onSubmit}>
    <input type="text" bind:value={titleSearchString} placeholder="Filter by title...">
    <input type="text" bind:value={locationSearchString} placeholder="Filter by location...">
    <Button type="submit" onClick={() => filterJobs(titleSearchString, locationSearchString, 
    activeFilter, showFullTimeOnly)}>
        Search
    </Button>
</form>

<style lang="scss">
    form {
        background-color: var(--color-background-lighter);
        width: 100%;
        max-width: var(--max-width);
        margin: -24px auto 0 auto;
        border-radius: 8px;
        padding: 32px;
    }
</style>