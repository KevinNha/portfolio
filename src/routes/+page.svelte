<script lang="ts">
	import { theme } from '$lib/store';
</script>

<svelte:head>
	<title>this is who i am</title>
</svelte:head>

<div class="container border dark:border-white m-auto max-w-[1000px] max-h-[626px] h-max">
	<div class="relative h-full w-full">
		<div
			class="absolute inset-0 bg-cover bg-no-repeat bg-center transition-[background-image] ease-linear duration-300"
			style="background-image: url({`${$theme === 'dark' ? 'src/lib/assets/Vancouver_Night.jpg' : 'src/lib/assets/Vancouver_Day.jpg'}`})"
		/>
		<div class="absolute inset-0 bg-black opacity-50" />

		<div class="relative flex flex-col gap-0.5 px-6 py-4">
			<h1
				class="afont-passionone font-bold text-3xl text-white"
				style={'-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;'}
			>
				IDENTIFICATION
			</h1>
			<div class="flex justify-between">
				<span
					class="text-4xl font-passionone font-bold dark:text-[#435AEF] text-[#1431eb] tracking-widest"
					style={$theme === 'light'
						? '-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white;'
						: '-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white;'}
					>Vancouver, BC</span
				>
				<span
					class="text-4xl font-passionone font-bold dark:text-[#435AEF] text-[#1431eb] tracking-widest"
					style={$theme === 'light'
						? '-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white;'
						: '-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: white;'}>CAN</span
				>
			</div>
			<div class="pl-4 flex flex-col">
				<span
					class="text-2xl font-bold text-white"
					style={'-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;'}>NHA,</span
				>
				<span
					class="text-2xl font-bold text-white"
					style={'-webkit-text-stroke-width: 1px; -webkit-text-stroke-color: black;'}>HYUNJIN</span
				>
			</div>

			<div class="grid grid-cols-7 gap-6 font-montserrat text-white">
				<div class="col-span-2 pl-4 pt-6">
					<img class="max-h-60" src="src/lib/assets/profile.png" alt="profile" />
				</div>
				<div class="col-span-3 flex flex-col gap-6 pt-6">
					<span class="text-xs">
						Title: <span class="text-base">Sr. Cloud Software Engineer</span>
					</span>
					<span class="text-xs">
						Current Employer:
						<a href="https://caylent.com/" target="_blank" class="underline text-base">Caylent</a>
					</span>
					<span class="text-xs">Employed Since: <span class="text-base">07/2023</span></span>
					<span class="text-xs">Location: <span class="text-base">Vancouver, Canada</span></span>
				</div>
				<div class="col-span-2">
					<span class="text-xs">
						Contact: <span class="text-base underline">
							<a href="mailto:hyunjinnha@gmail.com">hyunjinnha@gmail.com</a>
						</span>
					</span>
					<span class="text-xs">DOB: <span class="text-base">1995-July</span></span>
				</div>
			</div>
		</div>
	</div>
</div>
