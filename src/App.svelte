<script lang="ts">
    import Navbar from "./components/Navbar.svelte";
    import HeroBoxes from "./components/HeroBoxes.svelte";
    import WhatWeAreBuilding from "./components/WhatWeAreBuilding.svelte";
    import Footer from "./components/Footer.svelte";
</script>

<main>
    <div class="bg-black flex flex-col pb-10">
        <Navbar />
        <div class="flex flex-col items-center">
            <h1
                class="font-semibold text-white text-6xl font-Raleway text-center"
            >
                Tools To Manage Your Freelancing Business
            </h1>
            <p class="font-medium font-Raleway text-2xl text-white text-center w-3/4 pt-2">
                With Duelance, you can carry out project management, accounting, invoicing, time tracking, and other *boring* stuff all in one place!
            </p>
        </div>
        <HeroBoxes />
    </div>
    <WhatWeAreBuilding />
    <hr class="border border-gray-300 w-full" />
    <Footer />
</main>
<style>
</style>
