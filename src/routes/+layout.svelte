<script>
	import './app.css';
	import { MetaTags } from 'svelte-meta-tags';

	import OnMount from '$lib/components/OnMount.svelte';
	import logo from '$lib/assets/rainbowrocket.webp';

	import { MenuIcon, XCircleIcon } from 'svelte-feather-icons';

	const currentDate = new Date();
	let year = currentDate.getFullYear();

	import { page } from '$app/stores';

	$: path = $page.url.pathname;

	$: metaTags = {
		titleTemplate: '%s | Rainbow Rocket Physiotherapy', // Default title template.
		description: 'Specialist Physiotherapy for Babies, Children & Young Adults', // Default description.
		...$page.data.metaTagsChild // Override with child page meta tags if they exist.
	};

	const baseUrl = $page.url.pathname;

	const navItems = [
		{ hash: '#welcome', url: '/', title: 'Welcome' },
		{ hash: '#specialities', url: '/', title: 'Specialities' },
		{ hash: '#treatment', url: '/', title: 'Treatment' },
		{ hash: '#why', url: '/', title: 'Why Us' },
		{ hash: '#about', url: '/', title: 'About Me' },
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

	const navigate = (e, navItem) => {
		const el = navItem.hash.indexOf('#') !== -1 ? document.querySelector(navItem.hash) : null;
		let offset = 0;
		if (window.matchMedia(`(max-width: 767px)`).matches) {
			offset = -180;
		} else {
			offset = -65;
		}
		animateScroll.scrollTo({
			element: el,
			duration: window.matchMedia(`(prefers-reduced-motion: reduce)`).matches ? 0 : 500,
			offset: offset
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

<MetaTags {...metaTags} />
<OnMount>
	<main class="relative overflow-x-hidden">
		<div class="sticky top-0 z-10 max-w-full bg-white md:relative">
			<div class="container overflow-hidden py-4">
				<div
					class="flex w-full flex-row items-center justify-between gap-4 md:justify-start md:gap-8"
				>
					<div class="w-[120px] md:w-[160px]">
						<a href={baseUrl}>
							<img alt="Rainbow Rocket Physiotherapy" height="120" src={logo} width="120" />
						</a>
					</div>
					<span
						class="max-w-[280px] text-left font-brand text-4xl font-bold text-indigo lg:max-w-full xl:text-5xl"
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
		<div
			class="relative sticky top-0 z-20 hidden border border-violet bg-violet text-white shadow-md md:block"
		>
			<div class="container">
				<ul class="grid w-full grid-flow-row-dense grid-cols-2 text-center md:grid-cols-7 md:gap-4">
					{#each navItems as navItem}
						<a
							class="border-b-4 border-transparent py-4 font-deliusSwash hover:border-yellow hover:text-yellow lg:block lg:text-base xl:text-lg"
							class:active={currentElementInView.hash === navItem.hash}
							href={navItem.hash}
							on:click|preventDefault={(e) => navigate(e, navItem)}
						>
							<li>
								{navItem.title}
							</li>
						</a>
					{/each}
				</ul>
			</div>
		</div>
		<div class="relative">
			<slot />
		</div>
		<!-- Mobile nav-->
		<div class="{mobileNavOpen ? 'block' : 'hidden'} fixed left-0 top-0 h-screen w-screen bg-white">
			<button class="absolute right-8 top-16" on:click|preventDefault={toggleMobileNav}>
				<XCircleIcon class="text-indigo hover:text-violet" size="24" />
			</button>
			<div class="container pt-64 text-indigo">
				<ul class="mx-auto grid w-full max-w-xs grid-cols-1 text-center">
					{#each navItems as navItem}
						<a
							class="py-4 font-deliusSwash text-lg hover:text-yellow"
							class:mobile-active={currentElementInView.hash === navItem.hash}
							href={navItem.hash}
							on:click|preventDefault={(e) => navigate(e, navItem)}
						>
							<li>
								{navItem.title}
							</li>
						</a>
					{/each}
				</ul>
			</div>
		</div>
		<!-- End mobile nav-->
		<div class="w-full py-8 text-center">
			<a class="mx-auto block max-w-[64px]" href="/">
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
		<div class="relative z-10 bg-gray-900">
			<div class="px-4 py-4 text-white">
				<div class="w-full text-center lg:flex lg:justify-between lg:gap-4 lg:text-left">
					<div><p class="py-4 text-sm">&copy; Rainbow Rocket Physiotherapy {year}</p></div>
					<div>
						<ul class="flex w-full flex-row flex-wrap justify-around gap-x-4 gap-y-0 text-sm">
							{#each navItems as navItem}
								<li class="py-2">
									<a
										class="py-2 font-deliusSwash hover:text-violet lg:block"
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
						<p class="py-4 text-center text-sm">
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
</OnMount>

<style>
	.active {
		@apply border-b-4 border-blue text-blue;
	}

	.mobile-active {
		@apply m-0 inline-block font-bold text-blue;
	}
</style>
