<script>
    let { 
        title = "game", 
        source = "/placeholder.png", 
        link = "https://ampisbad.itch.io/",
    } = $props();

    function gotoLink(){
        window.location.href = link;
    }
</script>

<div>
    <button onclick={gotoLink}><img src={source} alt={title} style="width:20vh"></button>
</div>

<style>
    div {
        display:inline;
        width:20vh;
        padding:0px;
        margin:0px;
    }
    div button {
        min-height:fit-content;
        max-height: 50%;
        padding: 0px;
        margin: 0px;
    }
</style>