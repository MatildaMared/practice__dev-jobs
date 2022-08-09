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
	import Button from "../../lib/button/Button.svelte";

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
            <div class="company-name">
                <h2>{job.company}</h2>
                <p class="website">{job.company}.com</p>
            </div>
            <Button secondary onClick={() => window.open(job.website, "target: _blank")}>
                Company Site
            </Button>
        </div>
    {:catch error}
        <p>Could not find a job with that ID, please try again.</p>
    {/await}
</section>

<style lang="scss">
    section {
    }

    .header {
        padding: 32px;
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

    .company-name {
        text-align: center;
        margin-bottom: 16px;
    }

    .website {
        color: var(--color-gray);
        text-transform: lowercase;
    }
</style>