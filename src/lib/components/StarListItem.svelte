<script>
	import { StarIcon } from 'svelte-feather-icons';

	export let text;
	export let index;

	const getStarClassName = (index) => {
		const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
		if (index > colours.length - 1) {
			index = index - colours.length;
		}
		const colour = colours[index];
		return `text-${colour} fill-${colour}`;
	};
</script>

<li class="flex gap-4 w-full items-center pb-2">
	<span class="max-w-24"> <StarIcon class={getStarClassName(index)} size="24" /></span>
	<span>{text}</span>
</li>
