<script>
    import { ButtonLink } from "$lib";
    let rootElement;
	$: rootElement && rootElement.style.setProperty('--bg-colour', `#e2ce96`);
</script>

<svelte:head>
    <title>My Portfolio</title>
</svelte:head>


<div class="container" bind:this={rootElement}>
    <h1>Welcome to My Portfolio</h1>
    <p>Source Code: <a href="https://github.com/CialanJPatterson/Portfolio">GitHub</a></p>

    <div class="home-links">
        <ButtonLink title="ART" link="/art" width="40vw" height="20vh" targetFontSize="40vw" />
        <ButtonLink title="ANIMATION" link="/animation" width="40vw" height="20vh" targetFontSize="40vw" />
        <ButtonLink title="GAMES" link="/games" width="40vw" height="20vh" targetFontSize="40vw" />
        <ButtonLink title="WEB COMIC" link="/web-comic" width="40vw" height="20vh" targetFontSize="40vw" />
    </div>

    <div class="cv">
        <ButtonLink title="CV" link="/cv" width="20vw" height="10vh" iconSize=0 targetFontSize="40vw" bg="#0006" />
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