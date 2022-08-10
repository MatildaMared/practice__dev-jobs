<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import {onMount} from "svelte";

	import type {Job} from "../interfaces/Job";
	import Header from "../lib/header/Header.svelte";

	let jobs: Job[] = [];

	async function getJobs() {
		const result = await fetch("/api/jobs");
		const data = await result.json();
		jobs = data.jobs;
	}

	onMount(() => {
		getJobs();
	});
</script>

<svelte:head>
    <title>Dev Jobs 👩‍💻</title>
    <meta name="description" content="Find your next developer job today!"/>
</svelte:head>

<section>
    <h1>Dev Jobs</h1>
    {#each jobs as job}
        <a href={`jobs/${job.id}`}>
            <h2>{job.company}</h2>
        </a>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    h1 {
        width: 100%;
    }
</style>
