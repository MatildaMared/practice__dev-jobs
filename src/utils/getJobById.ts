export async function getJobById(id: string) {
	console.log("Hi");
	console.log("Id is: ", id);
	const response = await fetch(`/api/jobs/${id}`);
	const data = await response.json();

	if (response.ok) {
		return data.job;
	} else {
		throw new Error(data);
	}
}
