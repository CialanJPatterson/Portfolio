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

    open = function(){
        size = "100%";
        poppedout = true;
    };
    close = function(){
        poppedout = false;
        size = initial_size;
    };
</script>

{#if poppedout}
<div class="pop">
    <button onclick={() => popout(index)}><img src={source} style="width:100%;" alt={title}></button>
</div>
{:else}
<div class="unpop">
    <button onclick={() => popout(index)}><img src={source} style="width:100%;" alt={title}></button>
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
    div.pop {
        position:sticky;
        right:0px;
        top:0px;
        bottom:0px;
        width:300%;
        z-index:4;
    }
    div button {
        width: 100%;
        min-height:fit-content;
        max-height: 100%;
        padding: 0px;
        margin: 0px;
    }
    @media (min-width: 769px) {
        div.pop {
            position:fixed;
            width:40vw;
            left:55vw;
        }
    }
</style>