<script>
    import { ButtonLink } from "$lib";
</script>

<svelte:head>
    <title>My Portfolio</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
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
