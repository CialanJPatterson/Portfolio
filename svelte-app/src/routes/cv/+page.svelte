<svelte:head>
    <title>My CV</title>
</svelte:head>

<script>
	let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#bbc`);
</script>

<div class="container" bind:this={rootElement}>
    <h1>Here will be a pdf of the CV</h1>
    <br>
    <a href="/">BACK</a>
</div>

<style>
	:root {
		--bg-colour: inherit;
	}
    .container {
        position:absolute;
        left:0px;
        top:0px;
		height: 100vh;
		width: 100vw;
		background-color: var(--bg-colour);
    }

</style>