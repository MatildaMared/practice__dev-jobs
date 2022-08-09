import jobs from "../../../data/data.json";
import type { Job } from "../../../interfaces/Job";

interface Params {
	id: string;
}

export function GET({ params }: { params: Params }) {
	const { id } = params;

	const job: Job | undefined = jobs.find((job) => job.id === +id);

	if (!job) {
		return {
			status: 404,
			body: {
				message: "Could not find a job with the given id",
			},
		};
	}

	return {
		status: 200,
		body: {
			job,
		},
	};
}
