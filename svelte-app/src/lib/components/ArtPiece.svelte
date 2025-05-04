<script>
    let { 
        index = $bindable(),
        title = "art work", 
        source = "/placeholder.png", 
        initial_size = "25%", 
        size = "25%", 
        poppedout = $bindable(),
        open = $bindable(),
        close = $bindable(),
        popout
    } = $props();

    poppedout = false;
    open = function(){
        size = "100%";
        poppedout = true;
    };
    close = function(){
        poppedout = false;
        size = initial_size;
    };
</script>

{#if poppedout == true}
<div class="pop">
    <button onclick={() => popout(index)} tabindex=-1><img src={source} style="width:100%;" alt={title}></button>
    <button onclick={() => popout(index)} tabindex=0><h1>X</h1></button>
    <div class="background"></div>
</div>
{:else}
<div class="unpop">
    <button onclick={() => popout(index)}><img src={source} style="width:100%;" alt={title}></button>
    <div class="background"></div>
</div>
{/if}

<style>
    div {
        display:inline;
        width:fit-content;
        padding:0px;
        margin:0px;
    }
    div.unpop {
        position: relative;
        width:100%;
        height:fit-content;
        z-index:2;
    }
    div.unpop > div {
        visibility:hidden;
    }
    div.pop {
        position:sticky;
        grid-column:span 3;
        grid-row:1/1;
        width:100%;
        right:0px;
        top:0px;
        bottom:0px;
        max-height:calc(98vh - var(--footer-height));
        z-index:4;
        background-color: #000a;
    }
    div.pop > div {
        visibility:visible;
        width: 100%;
        background-color: #000a;
    }
    div.pop * h1 {
        position:absolute;
        top: 5px;
        right: 5px;
        margin:0px;
        padding:0px;
        color:aliceblue;
    }
    div button {
        width: 100%;
        max-width:50vh;
        min-height:fit-content;
        max-height: 50vh;
        padding: 0px;
        margin: 0px;
    }
    @media (min-width: 769px) {
        div.pop {
            position:fixed;
            width:40vw;
            left:55vw;
            max-height: calc(100vh - var(--footer-height));
        }
        div.pop > button {
            max-width:60vh;
        }
    }
</style>