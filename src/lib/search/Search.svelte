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
    <label>
        <img src="/images/desktop/icon-search.svg" alt="Search"/>
        <input type="text" bind:value={titleSearchString} placeholder="Filter by title...">
    </label>
    <label>
        <img src="/images/desktop/icon-location.svg" alt="Location"/>
        <input type="text" bind:value={locationSearchString} placeholder="Filter by location...">
    </label>
    <div>
        <label>
            <input name="fulltime-only" type="checkbox" bind:checked={showFullTimeOnly}>
            Full Time Only
        </label>
        <Button type="submit" onClick={() => filterJobs(titleSearchString, locationSearchString, 
    activeFilter, showFullTimeOnly)}>
            Search
        </Button>
    </div>
</form>

<style lang="scss">
    form {
        background-color: var(--color-background-lighter);
        width: 100%;
        max-width: var(--max-width);
        margin: -24px auto 0 auto;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 80px;

        & > label {
            display: flex;
            align-items: center;
            padding: 0 32px 0 32px;
            flex: 1;
            border-right: 1px solid hsla(214, 17%, 51%, .2);
            min-height: 80px;

            img {
                margin-right: 8px;
            }
        }

        & input {
            padding: 16px 8px;
            background: transparent;
            border: none;
            font: inherit;
            color: var(--color-text-heading);
        }

        & div {
            padding: 0 16px;
        }
    }
</style>