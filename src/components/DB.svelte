<script>
	import { draw } from 'svelte/transition';
	import { bounceIn } from 'svelte/easing';
</script>

<svg viewBox="0 0 5 5" xmlns="http://www.w3.org/2000/svg">
	{#if true}
		<path d="M2 1 h1 v1 h1 v1 h-1 v1 h-1 v-1 h-1 v-1 h1 z"
					fill="none"
					stroke="red"
					stroke-width="0.1px"
					stroke-linejoin="round"
		/>
        <circle cx="50%" cy="50%" r="0.5" fill="cornflowerblue"/>
	{/if}
</svg>