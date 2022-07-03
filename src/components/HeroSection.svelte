<script lang="ts">
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
    <div class="flex flex-col items-center">
        <h1
            class="font-semibold text-white text-6xl font-Raleway text-center px-3"
        >
            Tools To Manage Your Freelancing Business
        </h1>
        <p
            class="font-medium font-Raleway text-xl text-white text-center w-3/4 pt-3 px-3"
        >
            With Duelance, you can carry out project management, accounting,
            invoicing, time tracking, and other *boring* stuff all in one place!
        </p>
        <form
            on:submit|preventDefault={sendWaitlistData}
            class="inline-block mx-auto p-5"
        >
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

<style>
</style>
