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

<section>
    {#await getJobById(id)}
        <p>Loading...</p>
    {:then job}
        <div class="header">
            <div class="logo-wrapper" style={`background-color: ${job.logoBackground}`}>
                <img src={job.logo} alt={`${job.company} logo`}/>
            </div>
            <h2>{job.company}</h2>
        </div>
    {:catch error}
        <p>Could not find a job with that ID, please try again.</p>
    {/await}
</section>

<style lang="scss">
    section {
    }

    .header {
        padding: 16px;
        margin-top: -32px;
        background-color: var(--color-background-lighter);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .logo-wrapper {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        margin-top: -42px;
        margin-bottom: 16px;
    }
</style>