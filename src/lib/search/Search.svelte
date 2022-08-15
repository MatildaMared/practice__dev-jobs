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
            <span class="screen-reader-text">Filter by title</span>
            <input type="text" bind:value={titleSearchString} placeholder="Filter by title...">
        </label>
        <label>
            <img src="/images/desktop/icon-location.svg" alt="Location"/>
            <span class="screen-reader-text">Filter by location</span>
            <input type="text" bind:value={locationSearchString}
                   placeholder="Filter by location...">
        </label>
        <div>
            <label class="checkbox-label">
                <input class="checkbox" name="fulltime-only" type="checkbox"
                       bind:checked={showFullTimeOnly}>
                <span class="checkmark"></span>
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
            display: flex;
            align-items: center;

            .checkbox {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            .checkbox:focus + .checkmark {
                outline: 2px solid var(--color-primary);
                outline-offset: 5px;
            }

            .checkbox-label {
                font-weight: 700;
                margin: 0 16px 0 8px;
                padding-left: 32px;
                position: relative;
                cursor: pointer;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;

                &:hover input ~ .checkmark {
                    background-color: hsla(214, 17%, 51%, .25);
                }

                & input:checked ~ .checkmark:after {
                    display: block;
                }

                & .checkmark::after {
                    left: 8px;
                    top: 4px;
                    width: 7px;
                    height: 12px;
                    border: solid var(--color-primary);
                    border-width: 0 3px 3px 0;
                    -webkit-transform: rotate(45deg);
                    -ms-transform: rotate(45deg);
                    transform: rotate(45deg);
                }
            }

            .checkmark {
                position: absolute;
                top: 1px;
                left: 0;
                height: 22px;
                width: 22px;
                border-radius: 4px;
                background-color: hsla(214, 17%, 51%, .1);
                transition: all .2s ease-in-out;

                &::after {
                    content: "";
                    position: absolute;
                    display: none;
                }
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

        .screen-reader-text {
            position: absolute;
            height: 1px;
            width: 1px;
            clip: rect(1px, 1px, 1px, 1px);
            clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
            overflow: hidden;
        }
    }
</style>