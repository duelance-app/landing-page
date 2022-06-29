<script lang="ts">
    var data = new FormData();
    async function sendWaitListdata() {
        const name = document.getElementById("name") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const response = await fetch("https://duelance.app/addWaitlist", {
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                first_name: name.value,
                last_name: null,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            /* Handle */
            throw new Error("Please enter valid email and name");
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
        <form action="" class="inline-block mx-auto p-5">
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
            <button class="btn text-white bg-blue-600 mt-3"
                >Join The Waitlist</button
            >
        </form>
    </div>
</main>

<style>
</style>
