import type { SSTConfig } from 'sst';
import { SvelteKitSite } from 'sst/constructs';

export default {
	config(_input) {
		return {
			name: 'portfolio',
			region: 'us-west-1',
			profile: 'portfolio-main'
		};
	},
	stacks(app) {
		app.stack(function Site({ stack }) {
			const site = new SvelteKitSite(stack, 'site');
			stack.addOutputs({
				url: site.url
			});
		});
	}
} satisfies SSTConfig;
