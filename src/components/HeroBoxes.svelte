<script lang="ts"></script>

<main>
    <div class="flex flex-row justify-evenly mt-10 flex-wrap mx-2">
        <div class="flex bg-blue-400 flex-col rounded-lg justify-evenly mb-8 px-2" id="invoice-money-box">
            <p class="text-black font-Raleway font-semibold text-xl px-5" id="invoices-sent">Invoices Sent</p>
            <div class="flex flex-row flex-wrap items-start">
                <p class="text-black font-Montserrat font-semibold text-4xl pl-5 pr-2" id="money-received">$8900</p>
                <div class="bg-green-700 text-white font-Montserrat p-1 h-5/12" id="percentage-money-received">+42.6%</div>
            </div>
            <p class="text-black font-Raleway font-semibold text-xl px-5">Money Received</p>
            <div class="flex flex-row flex-wrap items-start">
                <p class="text-black font-Montserrat font-semibold text-4xl pl-5 pr-2 pb-5">$6400</p>
                <div class="bg-green-700 text-white font-Montserrat p-1 h-1/2 mr-3 mt-2">+22.4%</div>
            </div>
        </div>

        <div class="flex flex-col bg-blue-400 rounded-lg justify-evenly mb-8 px-2">
            <p class="text-black font-Raleway font-semibold text-xl px-3 pt-4">EXPENSES</p>
            <div class="flex flex-row mr-3">
                <p class="text-black font-Montserrat font-semibold text-5xl px-3 pt-4">$923</p>
                <div class="bg-red-700 text-white font-Montserrat p-1 h-1/2 mt-6 mr-2">+3.5%</div>
            </div>
            <div class="flex flex-row justify-between py-10 px-5">
                <div class="w-1/6 h-20 bg-blue-900"></div>
                <div class="w-1/6 mt-10 h-10 bg-yellow-600"></div>
                <div class="w-1/6 mt-5 h-15 bg-green-900"></div>
                <div class="w-1/6 h-18 mt-2 bg-blue-900"></div>
                <div class="w-1/6 h-10 mt-10 bg-yellow-600"></div>
            </div>
        </div>
        <div class="flex flex-col bg-blue-400 rounded-lg p-5 justify-evenly mb-8 px-4">
            <p class="text-2xl font-Raleway text-black font-semibold">Projects Due This</p>
            <p class="text-2xl font-Raleway text-black font-semibold">Month </p>
            <div class="bg-yellow-600 text-lg font-Montserrat text-white font-medium p-2 rounded-md">Not Started - 4</div>				
            <div class="bg-blue-900 text-lg font-Montserrat text-white font-medium p-2 rounded-md mt-2">In Progress - 2</div>				
            <div class="bg-green-800 text-lg font-Montserrat text-white font-medium p-2 rounded-md mt-2">Completed - 0</div>				
        </div>
        <div class="flex flex-col bg-blue-400 rounded-lg p-7 mb-8">
            <p class="text-2xl font-Raleway text-black font-semibold">Technical Blog</p>
            <p class="text-2xl font-Raleway text-black font-semibold">On Kubernetes</p>
            
            <div class="w-full border-t border-black m-auto p-2"></div>
            <p class="text-xl font-Montserrat text-black font-semibold">Client #1</p>
            <div class="bg-blue-900 text-lg font-Montserrat text-white font-medium p-2 rounded-md mt-2 w-3/4">In Progress</div>
            <div class="flex flex-row flex-wrap items-center mt-3">
                <div class="border-4 border-white rounded-full mr-3">
                    <img src="https://assets.website-files.com/61ee3797b5357cac8a845d07/61ee3797b5357c4cb5845e4f_Avatar%2001.png" loading="lazy" alt="">
                </div>
                <p class="font-xl text-black font-Montserrat font-medium">Stephanie</p>
            </div>
        </div>
    </div>
</main>

<style>
    @media(max-width: 415px) {
		#invoice-money-box {
			padding-top: 1.2em;
			padding-bottom: 1.2em;
		}
		#money-received {
			margin-bottom: 0.8em;
		}
	}
</style>