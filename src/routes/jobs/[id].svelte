<script context="module">
	export async function load ({params}) {
		const {id} = params;
		return {
			props: {id}
		};
	}
</script>

<script lang="ts">
	import {getJobById} from "../../utils/getJobById";

	export let id;
</script>

<h1>{id}</h1>
{#await getJobById(id)}
    <p>Loading...</p>
{:then job}
    <p>{job.company}</p>
{:catch error}
    <p>No job found</p>
{/await}

<style lang="scss"></style>