<script lang="ts">
	import type {Job} from "../../interfaces/Job";

	export let job: Job;
</script>

<a href={`jobs/${job.id}`}>
    <article class="job">
        <h1>{job.company}</h1>
    </article>
</a>

<style lang="scss">
    .job {
        padding: 32px;
        background-color: var(--color-background-lighter);
        border-radius: 8px;
    }
</style>