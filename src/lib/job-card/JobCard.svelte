<script lang="ts">
	import type {Job} from "../../interfaces/Job";

	export let job: Job;
</script>

<a href={`jobs/${job.id}`}>
    <article class="job">
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