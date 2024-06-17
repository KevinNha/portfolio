<script>
	import DarkModeToggler from './DarkModeToggler.svelte';
	import favicon from '../assets/favicon.ico';
</script>

<div class="relative dark:bg-[#2e2727]/75 bg-[#E6E6E6]/25 h-20 flex items-center">
	<div
		class="relative container mx-auto my-4 max-w-[1250px] px-4 h-12 flex items-center justify-between"
	>
		<div>
			<a
				href="/"
				class="dark:text-[#E6E6E6] text-[#2e2727s] relative inline-block h-8 flex items-center flex-row gap-4 font-montserrat font-bold hover:underline tracking-widest text-3xl"
			>
				<img src={favicon} alt="logo" class="h-8 w-8" />
				<span>kevin nha</span>
			</a>
		</div>
		<div>
			<DarkModeToggler />
		</div>
	</div>
</div>
