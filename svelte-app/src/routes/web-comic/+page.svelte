<svelte:head>
    <title>Redirecting to Webcomic</title>
</svelte:head>

<script>
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#239ed0`);
</script>

<div class="container" bind:this={rootElement}>
    <h1>This page will redirect out of the svelte website in the actual portfolio</h1>
    <a href="/">HOME</a>
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