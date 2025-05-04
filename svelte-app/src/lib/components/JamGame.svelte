<script>
    let { 
        icon = "/placeholder.png",
        altText = "placeholder",
        title = "[SAMPLE] Game",
        link = "https://ampisbad.itch.io",
        jam = "[SAMPLE] game jam",
        paragraph = "This game was inspired by my love of [SAMPLE] hobbies"
    } = $props();
</script>

<div class="outer">
    <img src={icon} alt={altText}>
    <div class="inner">
        <h3>{title}</h3>
        <a href={link}>{jam}</a>
        <br>
        <p>{paragraph}</p>
    </div>
</div>

<style>
    img {
        width:40vw;
    }
    div.outer {
        width:100vw;
        height:fit-content;
        display: flex;
        background-color: aqua;
        margin-bottom:2vh;
    }
    div.inner {
        width: 60vw;
        display:inline-flex;
        flex-wrap: wrap;
    }
</style>