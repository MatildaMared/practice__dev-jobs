export async function getJobById(id: string) {
	const response = await fetch(`/api/jobs/${id}`);
	const data = await response.json();

	if (response.ok) {
		return data.job;
	} else {
		throw new Error(data);
	}
}
