<script>
	import { ScrollWheel } from "$lib";
    import { ButtonLink } from "$lib";
</script>

<svelte:head>
    <title>Games Portfolio</title>
</svelte:head>

<ScrollWheel />
<div style="position:absolute; bottom:var(--footer-height); left:1vw;">
    <ButtonLink title="Itch.io" link="https://ampisbad.itch.io" width="44vw" height="20vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
</div>
<div style="position:absolute; bottom:var(--footer-height); right:1vw;">
    <ButtonLink title="Jam Games" link="/games/jams" width="44vw" height="20vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
</div>