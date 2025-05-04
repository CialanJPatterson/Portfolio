<svelte:head>
    <title>My Art</title>
</svelte:head>

<script>
    import { ImgLink } from "$lib";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#c513b8`);
</script>

<div class="container" bind:this={rootElement}>
    <div class="gallery-links">
        <div id="gallery-big-links">
            <ImgLink title="3-D" link="/gallery" size=28vw targetFontSize=7vw/>
            <ImgLink title="2-D" link="/gallery" size=28vw targetFontSize=7vw/>
        </div>
        <div id="gallery-small-links">
            <ImgLink title="PHOTOGRAPHY" icon="/placeholder.png" link="/gallery" size=13vw targetFontSize=1.2vw/>
            <ImgLink title="PIXEL ART" link="/gallery" size=13vw targetFontSize=1.2vw/>
            <ImgLink title="PAINTINGS" link="/gallery" size=13vw targetFontSize=1.2vw/>
            <ImgLink title="SCULPTURE" link="/gallery" size=13vw targetFontSize=1.2vw/>
        </div>
        <div class="gallery" id="gallery-link">
            <ImgLink title="GALLERY" link="/gallery" size=20vw targetFontSize= 3.5vw/>
        </div>
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