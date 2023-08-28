<script>
	export let href;
	export let text;

	export let variant = 'default';
</script>

<a
	class={`transition-colors duration-200 px-8 py-2 inline-block rounded-2xl no-underline
${
	variant === 'default'
		? 'bg-blue hover:bg-violet text-white'
		: 'bg-white hover:bg-gray-300 text-gray-900'
}`}
	{href}>{text}</a
>
