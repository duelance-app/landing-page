<script lang="ts">
	import Navbar from "./components/Navbar.svelte"; 
	import HeroBoxes from "./components/HeroBoxes.svelte";
    import WhatWeAreBuilding from "./components/WhatWeAreBuilding.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<main>
	<div class="bg-gray-900 flex flex-col pb-10">
		<Navbar />
		<div class="flex flex-col items-center">
			<h1 class="font-semibold text-white text-6xl font-Raleway text-center pt-7">Stay On Top Of Your</h1>
			<h1 class="font-semibold text-white text-7xl font-Raleway text-center pt-3">Freelance Business.</h1>
		</div>
		<HeroBoxes />
	</div>
    <WhatWeAreBuilding />
	<hr class="border border-gray-300 w-full">
    <Footer />
</main>

<style>
	
</style>
