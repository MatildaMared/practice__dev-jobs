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
	import Job from "../../lib/job/Job.svelte";

	export let id;
</script>

<section>
    {#await getJobById(id)}
        <p>Loading...</p>
    {:then job}
        <Job {job}/>
    {:catch error}
        <p>Could not find a job with that ID, please try again.</p>
    {/await}
</section>

<style lang="scss">
    @use "./src/styles/breakpoints" as *;

    section {

        > p {
            margin-top: 32px;
            text-align: center;
        }
    }
</style>