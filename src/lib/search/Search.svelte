<script lang="ts">
	import {createEventDispatcher} from "svelte";

	const dispatch = createEventDispatcher();

	let searchString = "";
	let activeFilter: "title" | "location" = "title";
	let showFullTimeOnly = false;

	$: {
		filterJobs(searchString, activeFilter, showFullTimeOnly);
	}

	function filterJobs(searchString, activeFilter, showFullTimeOnly) {
		dispatch("filter", {
			searchString,
			activeFilter,
			showFullTimeOnly
		});
	}

	function onSubmit(e) {
		e.preventDefault();
		filterJobs(searchString, activeFilter, showFullTimeOnly);
	}
</script>

<h2>Search</h2>
<form on:submit={onSubmit}>
    <input type="text" bind:value={searchString} placeholder="Filter by title...">
</form>

<style lang="scss">
</style>