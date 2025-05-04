<script>
	import { ScrollWheel } from "$lib";
    import { ButtonLink } from "$lib";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#008e23`);
</script>

<svelte:head>
    <title>Games Portfolio</title>
</svelte:head>

<div class="container" bind:this={rootElement}>
    <ScrollWheel />
    <div style="position:absolute; bottom:var(--footer-height); left:1vw;">
        <ButtonLink title="Itch.io" link="https://ampisbad.itch.io" width="44vw" height="20vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
    </div>
    <div style="position:absolute; bottom:var(--footer-height); right:1vw;">
        <ButtonLink title="Jam Games" link="/games/jams" width="44vw" height="20vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
    </div>
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