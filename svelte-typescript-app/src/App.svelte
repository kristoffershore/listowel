<script lang="ts">
	import Header from "./components/Header.svelte";
	import List from "./components/List.svelte";
</script>

<style>
	.container {
		width: 800px;
		background: #270092;
		margin: auto;
	}

	:global(.container *) {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
</style>

<div class="container">
	<Header />
	<List />
</div>


