<script lang="ts">
	import Job from "./Job.svelte";
	import Button from "../button/Button.svelte";

	export let job: Job;
</script>

<svelte:head>
    <title>DevJobs 👩‍💻 – {job.company}</title>
</svelte:head>

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

<style lang="scss">
    @use "../../styles/breakpoints" as *;

    .header {
        padding: 32px;
        margin-top: -32px;
        background-color: var(--color-background-lighter);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: $breakpoint-tablet-portrait) {
            max-height: 140px;
            flex-direction: row;
            padding: 0 40px 0 0;
        }
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

        @media (min-width: $breakpoint-tablet-portrait) {
            width: 140px;
            height: 140px;
            margin: 0;
            border-radius: 8px 0 0 8px;

            & img {
                width: 60%;
                height: auto;
            }
        }
    }

    .company-name {
        text-align: center;
        margin-bottom: 16px;

        @media (min-width: $breakpoint-tablet-portrait) {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0;
            padding: 40px;
        }
    }

    .website {
        color: var(--color-gray);
        text-transform: lowercase;
    }
</style>