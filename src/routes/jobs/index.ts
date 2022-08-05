import jobs from '../../data/data.json';

export function GET() {
	return {
		body: {
			jobs
		}
	};
}
