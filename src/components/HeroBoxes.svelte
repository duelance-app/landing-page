<script lang="ts">
    import MdWarning from "svelte-icons/md/MdWarning.svelte";

    const taxdate = new Date();
    const dd = String(taxdate.getDate() + 1).padStart(2, "0");
    const month = taxdate.toLocaleString("default", { month: "long" });
    console.log(month);
</script>

<main>
    <div class="flex flex-row justify-evenly mt-10 flex-wrap mx-2">
        <div
            class="flex bg-blue-400 flex-col rounded-lg justify-evenly mb-8 py-5 px-7"
            id="invoice-money-box"
        >
            <p
                class="text-black font-Raleway font-semibold text-3xl"
                id="invoices-sent"
            >
                Invoices
            </p>
            <p
                class="text-black font-Raleway font-semibold text-xl"
                id="invoices-sent"
            >
                Requested
            </p>
            <div class="flex flex-row flex-wrap items-center">
                <p
                    class="text-black font-Montserrat font-semibold text-4xl pr-2"
                    id="money-received"
                >
                    $8900
                </p>
                <div
                    class="bg-green-700 text-white font-Montserrat p-1 h-5/12 rounded-lg"
                    id="percentage-money-received"
                >
                    +42%
                </div>
            </div>
            <p class="text-black font-Raleway font-semibold text-xl">
                Received
            </p>
            <div class="flex flex-row flex-wrap items-start">
                <p
                    class="text-black font-Montserrat font-semibold text-4xl pr-2"
                >
                    $6400
                </p>
                <div
                    class="bg-green-700 text-white font-Montserrat p-1 h-4/5 mt-2 rounded-lg"
                >
                    +22%
                </div>
            </div>
        </div>

        <div
            class="flex flex-col bg-blue-400 rounded-lg justify-evenly mb-8 pl-7 pr-10 py-5 pt-6"
        >
            <p class="text-black font-Raleway font-semibold text-3xl pt-2">
                Tax Filing
            </p>
            <p class="text-black font-Raleway font-semibold text-xl pt-4">
                Estimated
            </p>
            <div class="flex flex-row items-start">
                <p
                    class="text-black font-Montserrat font-semibold text-4xl pr-2 pt-4"
                >
                    $3476
                </p>
                <div
                    class="bg-green-700 text-white font-Montserrat p-1 h-1/2 mt-5 mb-2 rounded-lg"
                >
                    -7%
                </div>
            </div>
            <p class="text-black font-Raleway font-semibold text-xl pt-3">
                Due
            </p>
            <p class="text-black font-Montserrat font-semibold text-4xl pt-3 pb-2">
                {dd}
                {month}
            </p>
            <div
                class="flex items-center bg-red-600 text-white text-sm font-bold px-3 py-2 h-1/6 w-3/5 shrink "
                role="alert"
            >
                <svg
                    width="23"
                    height="23"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g id="Frame 1" clip-path="url(#clip0_101_20)">
                        <path
                            id="Polygon 4"
                            d="M23.5 3L46.4497 40.5H0.550327L23.5 3Z"
                            fill="black"
                        />
                        <text
                            id="!"
                            fill="white"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Inter"
                            font-size="36"
                            letter-spacing="0em"
                            ><tspan x="18" y="38.0909">!</tspan></text
                        >
                    </g>
                    <defs>
                        <clipPath id="clip0_101_20">
                            <rect width="47" height="47" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <p class="text-sm pl-2">1 Day</p>
            </div>
        </div>
        <div
            class="flex flex-col bg-blue-400 rounded-lg justify-evenly mb-8 px-7 py-5"
        >
            <p class="text-3xl font-Raleway text-black font-semibold">
                Projects Due
            </p>
            <p class="text-2xl font-Raleway text-black font-semibold">
                This Month
            </p>
            <div
                class="bg-yellow-600 text-lg font-Montserrat text-white font-medium p-2 rounded-md w-full text-center"
            >
                Not Started - 4
            </div>
            <div
                class="bg-blue-900 text-lg font-Montserrat text-white font-medium p-2 rounded-md mt-2 text-center"
            >
                In Progress - 2
            </div>
            <div
                class="bg-green-800 text-lg font-Montserrat text-white font-medium p-2 rounded-md mt-2 text-center"
            >
                Completed - 0
            </div>
        </div>
        <div class="flex flex-col bg-blue-400 rounded-lg py-5 px-7 mb-8">
            <p class="text-2xl font-Raleway text-black font-semibold">
                Technical Blog
            </p>
            <p class="text-2xl font-Raleway text-black font-semibold">
                On Kubernetes
            </p>

            <div class="w-full border-t border-black mx-auto p-2" />
            <p class="text-xl font-Montserrat text-black font-semibold pt-2">
                Client: Stephanie
            </p>
            <p class="text-xl font-Montserrat text-black font-semibold pt-3">
                Payment: $315
            </p>
            <div
                class="bg-blue-900 text-lg font-Montserrat text-white font-medium p-2 rounded-md mt-4 w-3/4 text-center"
            >
                In Progress
            </div>
            <div class="flex flex-row flex-wrap items-center mt-6">
                <div class="border-4 border-white rounded-full mr-3">
                    <img
                        src="https://images-ext-1.discordapp.net/external/Ha03s1HrxlIcoXZ7Ep14-aVRnk4HhCRzijQKxyb-0dY/https/cdn.pixabay.com/photo/2019/10/04/13/19/woman-4525646_1280.jpg?width=50&height=50"
                        loading="lazy"
                        alt=""
                        class="rounded-full"
                    />
                </div>
                <p class="font-xl text-black font-Montserrat font-medium">
                    Stephanie
                </p>
            </div>
        </div>
    </div>
</main>

<style>
    @media (max-width: 415px) {
        #invoice-money-box {
            padding-top: 1.2em;
            padding-bottom: 1.2em;
        }
        #money-received {
            margin-bottom: 0.8em;
        }
    }
</style>
