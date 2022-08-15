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

<div class="container">
    <form on:submit={onSubmit}>
        <label>
            <img src="/images/desktop/icon-search.svg" alt="Search"/>
            <input type="text" bind:value={titleSearchString} placeholder="Filter by title...">
        </label>
        <label>
            <img src="/images/desktop/icon-location.svg" alt="Location"/>
            <input type="text" bind:value={locationSearchString}
                   placeholder="Filter by location...">
        </label>
        <div>
            <label>
                <input class="checkbox" name="fulltime-only" type="checkbox"
                       bind:checked={showFullTimeOnly}>
                Full Time
            </label>
            <Button type="submit" onClick={() => filterJobs(titleSearchString, locationSearchString, 
    activeFilter, showFullTimeOnly)}>
                <span class="search-text">Search</span>
                <img class="search-icon" src="/images/desktop/icon-search-white.svg" alt="Search"/>
            </Button>
        </div>
    </form>
</div>

<style lang="scss">
    @use "../../styles/breakpoints" as *;

    .container {
        padding: 0 16px;
    }

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
            border-radius: 8px;

            &[type="text"] {
                width: 100%;
            }

            &:focus {
                outline: 2px solid var(--color-primary);

                &[type="checkbox"] {
                    outline-offset: 16px;
                    border-radius: 100%;
                }
            }
        }

        & div {
            padding: 0 16px;

            .checkbox {
                border: 1px solid red;
            }

            & label {
                font-weight: 700;
                margin: 0 16px 0 8px;
            }
        }

        .search-text {
            display: none;
            @media (min-width: $breakpoint-tablet-landscape) {
                display: block;
            }
        }

        .search-icon {
            @media (min-width: $breakpoint-tablet-landscape) {
                display: none;
            }
        }
    }
</style>