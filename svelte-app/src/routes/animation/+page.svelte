<svelte:head>
    <title>My Animations</title>
</svelte:head>

<script>
    import { ImgLink } from "$lib";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#623e96`);
</script>

<div class="container" bind:this={rootElement}>
    <h1>Welcome to SvelteKit</h1>
    <p>Source Code: <a href="https://github.com/CialanJPatterson/Portfolio">GitHub</a></p>

    <a href="/">HOME</a>
    <a href="/art">ART</a>
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