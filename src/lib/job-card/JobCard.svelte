<script lang="ts">
	import type {Job} from "../../interfaces/Job";

	export let job: Job;
</script>

<a href={`jobs/${job.id}`}>
    <article class="job">
        <div class="job__logo" style="background-color: {job.logoBackground};">
            <img src={job.logo} alt={job.company}/>
        </div>
        <p class="job__posted-at">{job.postedAt} – {job.contract}</p>
        <h2>{job.position}</h2>
        <p>{job.company}</p>
        <p class="job__location">{job.location}</p>
    </article>
</a>

<style lang="scss">
    .job {
        padding: 32px;
        background-color: var(--color-background-lighter);
        border-radius: 8px;
        transition: all 0.2s ease-in-out;

        &__logo {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px;
            margin-bottom: 24px;
            margin-top: -54px;
        }

        &__posted-at {
            font-size: 14px;
        }

        h2 {
            font-size: 1.25rem;
            margin: 8px 0;
        }

        &__location {
            margin-top: 32px;
            color: var(--color-primary);
            font-weight: 700;
        }

        &:hover {
            transform: translateY(-8px);
        }
    }
</style>