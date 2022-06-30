<script lang="ts">
    async function sendWaitlistData() {
        const name_input = document.getElementById("name") as HTMLInputElement;
        const name_arr = name_input.value.split(" ");
        var first_name = name_arr[0];
        for (let i = 0; i < name_arr.length - 2; i++) {
            first_name = first_name.concat(" ", name_arr[i + 1]);
        }
        const email = document.getElementById("email") as HTMLInputElement;
        const response = await fetch("https://duelance.app/addWaitlist", {
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                first_name: first_name,
                last_name: name_arr[name_arr.length - 1],
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Please enter valid email and name");
        }
    }
</script>

<main>
    <div class="flex flex-row justify-evenly items-center flex-wrap mb-2">
        <div class="flex flex-col px-24 mt-10">
            <p class="font-Raleway text-5xl text-white mb-3">
                Save Time And Hassle <br /> With Duelance
            </p>
            <p class="font-Raleway text-xl text-white font-normal md:mb-10">
                For creatives like you, time is literally money.
                <br />
                Duelance centralizes all the operational aspects of your <br />
                self-employed business to help you save time and <br />
                hassle. Now, you don't need to switch between ten <br />
                different apps for ten different tasks.
                <br />
                Everything in one place.
            </p>
        </div>
        <form class="inline-block mx-auto p-5" on:submit|preventDefault={sendWaitlistData}>
            <input
                type="text"
                placeholder="John Doe"
                class="input w-full max-w-4xl bg-white"
                id="name"
            />
            <input
                type="email"
                placeholder="example@example.com"
                class="input w-full max-w-4xl bg-white mt-3"
                id="email"
            />
            <button type="submit" class="btn text-white bg-blue-600 mt-3">
                Join The Waitlist
            </button>
        </form>
    </div>
</main>

<style></style>
