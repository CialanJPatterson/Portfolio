<svelte:head>
    <title>My Animations</title>
</svelte:head>

<script>
    import { base } from "$app/paths";
    import { ImgLink } from "$lib";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#623e96`);
</script>

<div class="container" bind:this={rootElement}>
    <a href="{base}/">HOME</a>
    <a href="{base}/art">ART</a>
    <br>

    <div id="animation-gallery-link" class="gallery">
        <ImgLink title="GALLERY" link="/gallery" size=20vw targetFontSize= 3.5vw/>
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