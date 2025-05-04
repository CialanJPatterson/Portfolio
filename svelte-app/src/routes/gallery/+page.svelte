<script>
    import { Carousel } from "$lib";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#973e40`);
</script>

<svelte:head>
    <title>Gallery</title>
</svelte:head>
    
<div class="container" bind:this={rootElement}>    
    <div id="gallery-carousel">
        <Carousel />
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