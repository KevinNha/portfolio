<script lang="ts">
	import { theme } from '$lib/store';
	import { DARK_THEME, LIGHT_THEME } from '$lib/constants/constants';
	import Darkmode from '$lib/assets/Darkmode.svelte';
	import Lightmode from '$lib/assets/Lightmode.svelte';

	let isDarkModeEnabled = $theme === DARK_THEME;

	const toggleDarkMode = () => {
		theme.set(isDarkModeEnabled ? LIGHT_THEME : DARK_THEME);
		isDarkModeEnabled = !isDarkModeEnabled;
	};
</script>

<div class="flex items-center">
	<button
		class="relative inline-flex items-center h-8 rounded-full w-14 focus:outline-none border"
		on:click={toggleDarkMode}
		aria-pressed={isDarkModeEnabled}
	>
		<span
			class="absolute left-1 inline-block w-6 h-6 transform bg-white rounded-full shadow ring-0 transition duration-300 ease-in-out flex items-center justify-center"
			class:translate-x-6={isDarkModeEnabled}
		>
			{#if isDarkModeEnabled}
				<Darkmode />
			{:else}
				<Lightmode />
			{/if}
		</span>
	</button>
</div>
