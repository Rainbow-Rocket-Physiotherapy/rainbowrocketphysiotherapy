<script>
	import { StarIcon } from 'svelte-feather-icons';

	export let text;
	export let className;
</script>

<li class="flex gap-4 w-full items-center pb-2">
	<span class="max-w-24"> <StarIcon class={className} size="24" /></span>
	<span>{text}</span>
</li>
