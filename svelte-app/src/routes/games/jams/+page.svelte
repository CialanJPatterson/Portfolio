<script>
    import { ButtonLink } from "$lib";
	import JamGame from "$lib/components/JamGame.svelte";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#c36f47`);
</script>

<svelte:head>
    <title>Game Jams Portfolio</title>
</svelte:head>

<div class="container" bind:this={rootElement}>
    <div style="display:inline-flex; position:relative;">
    <ButtonLink title="BACK" link="/games" width="34vw" height="15vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
    <ButtonLink title="Itch.io" link="https://ampisbad.itch.io" width="34vw" height="15vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
    </div>

    <div id="jam games" style="overflow:hidden scroll; max-height:calc(84vh - var(--footer-height));">
        <JamGame />
        <JamGame />
        <JamGame />
        <JamGame />
        <JamGame />
        <JamGame />
        <JamGame />
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