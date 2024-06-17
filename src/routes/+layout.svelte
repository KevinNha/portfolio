<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/store';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		if (localStorage.theme === 'dark') {
			theme.set('dark');
		} else {
			theme.set('light');
		}
		document.body.classList.remove('hidden');
	});
</script>

<main class="min-h-lvh flex flex-col justify-between">
	<Navbar />
	<div class="container mx-auto max-w-[1250px] px-4">
		<slot />
	</div>
	<Footer />
</main>
