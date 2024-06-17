<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/store';
	import Navbar from '$lib/components/Navbar.svelte';

	onMount(() => {
		if (localStorage.theme === 'dark') {
			theme.set('dark');
		} else {
			theme.set('light');
		}
		document.body.classList.remove('hidden');
	});
</script>

<div>
	<div class="container mx-auto max-w-[1250px]">
		<Navbar />
		<slot />
	</div>
</div>
