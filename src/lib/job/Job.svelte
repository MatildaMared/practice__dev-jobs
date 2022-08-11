<script lang="ts">
	import type {Job} from "../../interfaces/Job";
	import Button from "../button/Button.svelte";

	export let job: Job;
</script>

<svelte:head>
    <title>DevJobs 👩‍💻 – {job.company}</title>
</svelte:head>

<section class="header">
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
</section>
<section class="main">
    <div class="overview">
        <div>
            <p class="posted-at">{job.postedAt} – {job.contract}</p>
            <h2>{job.position}</h2>
            <p class="location">{job.location}</p>
        </div>
        <Button onClick={() => window.open(job.apply, "_blank")}>Apply Now</Button>
    </div>
    <p class="description">
        {job.description}
    </p>
    <h3>Requirements</h3>
    <p>{job.requirements.content}</p>
    <ul>
        {#each job.requirements.items as requirement}
            <li>{requirement}</li>
        {/each}
    </ul>
    <h3>What You Will Do</h3>
    <p>{job.role.content}</p>
    <ol>
        {#each job.role.items as role}
            <li>{role}</li>
        {/each}
    </ol>
</section>

<style lang="scss">
    @use "../../styles/breakpoints" as *;

    .header {
        padding: 32px;
        margin-top: -32px;
        margin-bottom: 32px;
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

    .main {
        padding: 32px;
        border-radius: 8px;
        background-color: var(--color-background-lighter);
        margin-bottom: 32px;

        p {
            margin-bottom: 16px;
        }

        h3 {
            margin: 32px 0;
        }

        li {
            padding-left: 16px;
        }

        li:not(:last-of-type) {
            margin-bottom: 16px;
        }

        li::marker {
            color: var(--color-primary);
            font-weight: bold;
        }
    ;


        .overview {
            margin-bottom: 32px;

            > div {
                margin-bottom: 32px;
                flex: 1;

            }

            :global(.button) {
                width: 100%;
            }


            @media (min-width: $breakpoint-tablet-portrait) {
                display: flex;
                align-items: center;

                > div {
                    margin-bottom: 0;
                }

                .location {
                    margin-bottom: 0;
                }

                :global(.button) {
                    width: auto;
                }
            }
        }

        .posted-at {
            color: var(--color-gray);
            font-size: 14px;
            margin-bottom: 0;
        }

        .location {
            color: var(--color-primary);
            font-weight: 700;
        }
    }
</style>