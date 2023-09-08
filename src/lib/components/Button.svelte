<script>
	export let href;
	export let text;
	export let variant = 'default';

	const variantClasses =
		variant === 'default'
			? 'bg-blue text-white hover:bg-violet'
			: 'bg-white text-gray-900 hover:bg-gray-300';

	const buttonClasses =
		'inline-block rounded-2xl px-8 py-2 no-underline transition-colors duration-200 ' +
		variantClasses;
</script>

<a class={buttonClasses} {href}>
	{text}
</a>
