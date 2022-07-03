<script lang="ts">
    import Navbar from "./components/Navbar.svelte";
    import HeroSection from "./components/HeroSection.svelte";
    import WhatWeAreBuilding from "./components/WhatWeAreBuilding.svelte";
    import Footer from "./components/Footer.svelte";
    import FaqBlock from "./components/FAQBlock.svelte";
    import SecondCta from "./components/SecondCTA.svelte";
</script>

<main>
    <div class="bg-black flex flex-col pb-10">
        <Navbar />
        <HeroSection />
    </div>
    <hr class="border border-gray-300 w-full mx-auto" />
    <WhatWeAreBuilding />
    <div class="flex flex-col bg-[#323232] mb-2">
        <FaqBlock />
    </div>
    <SecondCta />
    <Footer />
</main>

<style>
</style>
