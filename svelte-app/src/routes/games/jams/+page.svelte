<script>
    import { ButtonLink } from "$lib";
	import JamGame from "$lib/components/JamGame.svelte";
</script>

<svelte:head>
    <title>Game Jams Portfolio</title>
</svelte:head>

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