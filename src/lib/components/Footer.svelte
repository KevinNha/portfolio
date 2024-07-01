<script>
	import Github from '$lib/assets/Github.svelte';
	import Instagram from '$lib/assets/Instagram.svelte';
	import Linkedin from '$lib/assets/Linkedin.svelte';
</script>

<div class="relative dark:bg-[#2e2727]/75 bg-[#E6E6E6]/50 flex items-center font-montserrat">
	<div class="relative container mx-auto my-10 max-w-[1250px] px-4 flex items-center">
		<div class="relative flex flex-col items-start gap-8">
			<span
				>Written in
				<a href="https://kit.svelte.dev" class="text-[#e4931b] font-bold hover:underline"
					>SvelteKit
				</a>, deployed with
				<a href="https://docs.sst.dev/" class="text-[#ebb059] font-bold hover:underline">SST</a>,
				styled with
				<a href="https://tailwindcss.com/" class="text-[#4d85b2] font-bold hover:underline"
					>Tailwind</a
				>
			</span>
			<div class="flex flex-col gap-4">
				<a
					class="flex flex-row gap-4 items-center"
					href="https://www.linkedin.com/in/kevin-nha/"
					target="_blank"
				>
					<span class="h-6 w-6 flex items-center justify-center">
						<Linkedin class="dark:fill-white hover:cursor-pointer" />
					</span>
					<span class="underline">LinkedIn</span>
				</a>
				<a
					class="flex flex-row gap-4 items-center"
					href="https://github.com/KevinNha"
					target="_blank"
				>
					<span class="h-6 w-6 flex items-center justify-center">
						<Github class="dark:fill-white hover:cursor-pointer" />
					</span>
					<span class="underline">Github</span>
				</a>
				<a
					class="flex flex-row gap-4 items-center"
					href="https://www.instagram.com/95__nha/"
					target="_blank"
				>
					<span class="h-6 w-6 flex items-center justify-center">
						<Instagram class="dark:fill-white hover:cursor-pointer" />
					</span>
					<span class="underline">Instagram</span>
				</a>
			</div>
		</div>
	</div>
</div>
