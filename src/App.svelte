<script lang="ts">
    import Navbar from "./components/Navbar.svelte";
    import HeroSection from "./components/HeroSection.svelte";
    import WhatWeAreBuilding from "./components/WhatWeAreBuilding.svelte";
    import Footer from "./components/Footer.svelte";
    import FaqBlock from "./components/FAQBlock.svelte";
    import SecondCta from "./components/SecondCTA.svelte";
    async function sendWaitlistData() {
        const name_input = document.getElementById("name") as HTMLInputElement;
        const name_arr = name_input.value.split(" ");
        var first_name = name_arr[0];
        for (let i = 0; i < name_arr.length - 2; i++) {
            first_name = first_name.concat(" ", name_arr[i + 1]);
        }
        const email = document.getElementById("email") as HTMLInputElement;
        const response = await fetch(
            `https://${window.location.hostname}/addWaitlist`,
            {
                method: "POST",
                body: JSON.stringify({
                    email: email.value,
                    first_name: first_name,
                    last_name: name_arr[name_arr.length - 1],
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        if (!response.ok) {
            throw new Error("Please enter valid email address and name.");
        }
    }
</script>

<main>
    <div class="bg-black flex flex-col pb-10">
        <Navbar />
        <HeroSection waitListFunction={sendWaitlistData()}/>
    </div>
    <hr class="border border-gray-300 w-full mx-auto" />
    <WhatWeAreBuilding />
    <div class="flex flex-col bg-[#323232] mb-2">
        <FaqBlock />
    </div>
    <SecondCta waitListFunction={sendWaitlistData()}/>
    <Footer />
</main>

<style>
</style>
