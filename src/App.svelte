<script lang="ts">
	import Navbar from "./components/Navbar.svelte"; 
	import HeroBoxes from "./components/HeroBoxes.svelte";
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
	<div class="px-12 mx-auto bg-gradient-to-r from-gray-800 to-gray-900">
		<section class="py-12 px-4 text-center">
		  <div class="w-full text-center">
			<h1 class="text-5xl leading-tight font-bold text-white"> What We're Building </h1>
			<p class="mt-6 text-xl leading-relaxed text-white">Have a 👀 at how our product will change your freelancing business!</p>
			<button
			  class="text-white my-6 py-2 px-8 border-2 rounded-full hover:text-gray-200 hover:bg-blue-400 border-blue-400">Join The Waitlist</button>
		  </div>
		</section>
		<hr class="border border-gray-300">
		<section class="p-4">
		  <div class="flex flex-wrap text-center">
			<div class="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0">
				<img class="mx-auto mb-3 w-4/5"
				src="images/duelance-ui-update-2.png" alt="">
			  <h3 class="text-white text-2xl mb-3 font-heading font-medium">All-In-One Management Solution For Your Freelance Business.</h3>
			  <p class="text-white leading-relaxed">As a freelancer, you've got a lot on your plate already, along with stupid tasks like project management, invoicing, accounting, etc. Duelance is one platform that helps you manage all these aspects of your freelance business, from one place. No more shifting between ten different tools for ten different tasks.</p>
			</div>
			<div class="md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l">
				<div style="text-align: center" class="sender-form-field" data-sender-form-id="l49pypfgbq66dd622i1"></div>
			</div>
		  </div>
		</section>
		<hr class="border border-gray-300">
		<section class="py-8 px-4">
		  <div class="flex flex-wrap -mx-4 -mb-6">
			<div class="lg:w-1/3 px-4 mb-6"><img class="w-12 mb-2"
				src="https://cdn-icons-png.flaticon.com/128/2916/2916103.png" alt="">
			  <h3 class="text-2xl mb-3 font-heading text-white font-medium">Accounting & Invoicing</h3>
			  <p class="text-white leading-relaxed">Tools to easily track payments, expenses, revenue, profits, and more. Send beautiful invoices and receive payments in your bank directly. Stay on top of your numbers.</p>
			</div>
			<div class="lg:w-1/3 px-4 mb-6 "><img class="w-12 mb-2"
				src="https://cdn-icons-png.flaticon.com/128/2190/2190552.png" alt="">
			  <h3 class="text-2xl mb-3 font-heading text-white font-medium">Client Relationships</h3>
			  <p class="text-white leading-relaxed">They say, "Clients are God". Easily manage all the clients you're working for, and never forget a single detail about them.</p>
			</div>
			<div class="lg:w-1/3 px-4 mb-6"><img class="w-12 mb-2"
				src="https://cdn-icons-png.flaticon.com/128/1159/1159283.png" alt="">
			  <h3 class="text-2xl mb-3 font-heading text-white font-medium">Project Management</h3>
			  <p class="text-white leading-relaxed">Gone are the days of missing project due dates. Track all the things you're working on, their status, and more, in one place so that you can stay managed and sane.</p>
			</div>
		  </div>
		</section>
		<hr class="border border-gray-300 w-full">
    <footer class="bg-gray-900">
        <div class="w-full px-10 rounded-b-lg">
            <div
                class="max-w-7xl flex flex-col-reverse sm:flex-row py-4 mx-auto justify-between items-center"
            >
                <div class="text-center mt-4 sm:mt-0 text-gray-100">
                    &copy; 2022 <span class="font-bold text-gray-50"
                        >Duelance</span
                    >.
                </div>
                <div class="">
                    <p
                        class="font-Raleway text-xl text-gray-100 font-bold sm:text-5xl"
                    >
                        Duelance
                    </p>
                </div>
                <div class="text-center text-xl text-gray-100">
                    <p class="font-Raleway font-xl font-semibold">
                        Coming soon...
                    </p>
                </div>
            </div>
        </div>
    </footer>
</main>

<style>
	
</style>
