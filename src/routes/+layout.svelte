<script>
	import './app.css';
	import logo from '$lib/assets/rainbowrocket.png';

	import { MenuIcon, XCircleIcon } from 'svelte-feather-icons';

	const currentDate = new Date();
	let year = currentDate.getFullYear();

	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	const navItems = [
		{ hash: '#about', url: '/', title: 'About Us' },
		{ hash: '#conditions', url: '/', title: 'Conditions Treated' },
		{ hash: '#treatment', url: '/', title: 'Treatment' },
		{ hash: '#why', url: '/', title: 'Why Us' },
		{ hash: '#fees', url: '/', title: 'Fees' },
		{ hash: '#contact', url: '/', title: 'Contact Us' }
	];

	let mobileNavOpen = false;
	const toggleMobileNav = () => {
		mobileNavOpen = !mobileNavOpen;
	};

	const animateScroll = {
		getAbsoluteTop: function (element) {
			let top = 0;
			while (element) {
				top += element.offsetTop || 0;
				element = element.offsetParent;
			}
			return top;
		},
		scrollTo: function ({ element, duration = 1000, offset = 0, container = 'body' }) {
			const containerElement =
				container === 'body' ? document.documentElement : document.querySelector(container);
			const containerTop = this.getAbsoluteTop(containerElement);
			const start = containerElement.scrollTop;
			const target = this.getAbsoluteTop(element) - containerTop + offset;
			const distance = target - start;
			const startTime = performance.now();
			let nextStep;

			if (duration > 0) {
				const easeInOutQuad = function (time) {
					time /= duration / 2;
					if (time < 1) return (distance / 2) * time * time + start;
					time--;
					return (-distance / 2) * (time * (time - 2) - 1) + start;
				};

				let scroll = (currentTime) => {
					const timeElapsed = currentTime - startTime;
					nextStep = easeInOutQuad(timeElapsed);

					containerElement.scrollTop = nextStep;

					if (timeElapsed < duration) {
						requestAnimationFrame(scroll);
					}
				};

				requestAnimationFrame(scroll);
			} else {
				requestAnimationFrame(() => (containerElement.scrollTop = target));
			}
		}
	};

	const navigate = (e, navItem, offsetOverride = null) => {
		const el = navItem.hash.indexOf('#') !== -1 ? document.querySelector(navItem.hash) : null;
		console.log(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
		animateScroll.scrollTo({
			element: el,
			duration: window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ? 0 : 500,
			offset: offsetOverride == null ? -67 : offsetOverride
		});
		mobileNavOpen = false;
		if (el) {
			window.location = navItem.hash;
		} else {
			window.history.replaceState(null, null, window.location.href.split('#')[0]);
		}
	};

	let elementsInView = [];
	let currentElementInView = navItems[0];

	async function updateElementsInView() {
		elementsInView = navItems.filter((item) => {
			const element = document.getElementById(`${item.hash.replace('#', '')}`);
			if (!element) return false;

			const rect = element.getElementsByTagName('h3')[0].getBoundingClientRect();
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

			return rect.top >= 0 && rect.bottom <= viewportHeight;
		});
		if (elementsInView.length === 1) {
			currentElementInView = elementsInView[elementsInView.length - 1];
		} else if (elementsInView.length) {
			currentElementInView = elementsInView[0];
		}
	}
</script>

<svelte:window on:scroll={updateElementsInView} />

<main class="relative">
	<div class="w-full bg-white z-10">
		<div class="container py-4">
			<div
				class="w-full flex flex-row gap-4 items-center justify-between md:justify-start md:gap-8"
			>
				<img alt="Rainbow Rocket Physiotherapy" class="" height="120" src={logo} width="120" />
				<span
					class="font-aboreto text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-left font-light text-indigo"
				>
					Rainbow Rocket Physiotherapy
				</span>
				<span class="md:hidden">
					<button on:click|preventDefault={toggleMobileNav}>
						<MenuIcon class="text-indigo hover:text-violet" size="24" />
					</button>
				</span>
			</div>
		</div>
	</div>
	<div class="sticky top-0 border border-grey shadow-md relative z-20 bg-white hidden md:block">
		<div class="container text-indigo">
			<ul class="w-full grid grid-cols-2 grid-flow-row-dense md:grid-cols-6 md:gap-4 text-center">
				{#each navItems as navItem}
					<li class="py-2" class:active={currentElementInView.hash === navItem.hash}>
						<a
							class="py-2 hover:text-violet lg:block lg:text-base xl:text-lg"
							href={navItem.hash}
							on:click|preventDefault={(e) => navigate(e, navItem)}
						>
							{navItem.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="relative">
		<slot />
	</div>
	<!-- Mobile nav-->
	<div class="{mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-screen h-screen bg-white">
		<button class="absolute top-16 right-8" on:click|preventDefault={toggleMobileNav}>
			<XCircleIcon class="text-indigo hover:text-violet" size="24" />
		</button>
		<div class="container text-indigo pt-32">
			<ul class="w-full max-w-xs mx-auto grid grid-cols-1 text-center">
				{#each navItems as navItem}
					<li class="py-2" class:mobile-active={currentElementInView.hash === navItem.hash}>
						{' '}
						<a
							class="py-2 hover:text-violet lg:block lg:text-base xl:text-lg"
							href={navItem.hash}
							on:click|preventDefault={(e) => navigate(e, navItem, -2)}>{navItem.title}</a
						>{' '}
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<!-- End mobile nav-->
	<div class="py-8 text-center w-full">
		<a class="block max-w-[64px] mx-auto" href="/">
			<img
				alt="Go Back to the Top"
				class="w-full text-center"
				height="144"
				src={logo}
				title="Go Back to the Top"
				width="144"
			/>
		</a>
	</div>
	<div class="bg-gray-900 relative z-10">
		<div class="container px-4 py-4 text-white">
			<div class="text-center w-full lg:text-left lg:flex lg:justify-between">
				<div><p class="text-sm py-4">&copy; Rainbow Rocket Physiotherapy {year}</p></div>
				<div>
					<ul class="w-full flex flex-wrap flex-row gap-4 text-sm justify-around">
						{#each navItems as navItem}
							<li class="py-2" class:active={currentElementInView.hash === navItem.hash}>
								<a
									class="py-2 hover:text-violet lg:block"
									href={navItem.hash}
									on:click|preventDefault={(e) => navigate(e, navItem)}
								>
									{navItem.title}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<p class="text-sm py-4 text-center">
						Hand-crafted by <a href="https://www.james-nock.co.uk">James Nock</a>
					</p>
				</div>
			</div>
		</div>
	</div>
	<!--	<div class="fixed bottom-[300px] left-0 z-100">-->
	<!--		<p>Elements in view:</p>-->
	<!--		<ul>-->
	<!--			{#each elementsInView as item}-->
	<!--				<li>{item.title}</li>-->
	<!--			{/each}-->
	<!--		</ul>-->
	<!--	</div>-->
</main>

<style>
	.active {
		@apply border-b-4 border-violet;
	}

	.mobile-active {
		@apply text-violet m-0 inline-block;
		box-sizing: border-box;
		white-space: nowrap;
	}

	.mobile-active:before,
	.mobile-active:after {
		@apply text-violet bg-violet;
		position: relative;
		top: -1px;
		vertical-align: middle;
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 4px;
		content: '';
	}
</style>
