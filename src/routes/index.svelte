<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {onMount} from "svelte";

	import type {Job} from "../interfaces/Job";
	import Header from "../lib/header/Header.svelte";
	import JobCard from "../lib/job-card/JobCard.svelte";
	import Search from "../lib/search/Search.svelte";

	let jobs: Job[] = [];
	let filteredJobs: Job[] = [];

	async function getJobs() {
		const result = await fetch("/api/jobs");
		const data = await result.json();
		jobs = data.jobs;
		filteredJobs = data.jobs;
	}

	function filterJobs(event) {
		const {titleSearchString, locationSearchString, activeFilter, showFullTimeOnly} =
			event.detail;
		let newJobs = [...jobs];

		if (titleSearchString.length > 0) {
			newJobs = newJobs.filter(job => {
				return job.position.toLowerCase().includes(titleSearchString.toLowerCase());
			});
		}

		if (locationSearchString.length > 0) {
			newJobs = newJobs.filter(job =>
				job.location.toLowerCase().includes(locationSearchString.toLowerCase()));
		}

		if (showFullTimeOnly) {
			newJobs = newJobs.filter(job => job.contract === "Full Time");
		}

		filteredJobs = newJobs;
	}

	onMount(() => {
		getJobs();
	});
</script>

<svelte:head>
    <title>Dev Jobs 👩‍💻</title>
    <meta name="description" content="Find your next developer job today!"/>
</svelte:head>

<Search on:filter={filterJobs}/>

<div class="content">
    <section class="job-cards">
        {#each filteredJobs as job}
            <JobCard job={job}/>
        {/each}
    </section>
</div>

<style lang="scss">
    @use "../styles/breakpoints" as *;

    .content {
        padding: 32px 16px;
    }

    .job-cards {
        width: 100%;
        max-width: var(--max-width);
        margin: 32px auto;
        display: grid;
        grid-template-columns: 1fr;
        gap: 48px 32px;

        @media (min-width: $breakpoint-tablet-portrait) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (min-width: $breakpoint-desktop) {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
