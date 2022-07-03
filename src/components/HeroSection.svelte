<script lang="ts">
    export let waitListFunction;
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
            on:submit|preventDefault={waitListFunction}
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
