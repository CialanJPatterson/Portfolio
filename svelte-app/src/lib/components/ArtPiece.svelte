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
    <img src={source} onclick={() => popout(index)} style="width:{size};" alt={title}>
</div>
{:else}
<div class="unpop">
    <img src={source} onclick={() => popout(index)} style="width:100%;" alt={title}>
</div>
{/if}

<style>
    div {
        display:inline;
        width:fit-content;
        background-color: aqua;
        padding:0px;
        margin:0px;
    }
    div.unpop {
        width:100%;
        height:fit-content;
        float:inline-end;
        z-index:2;
    }
    div.pop {
        position:sticky;
        float:inline-start;
        right:0px;
        top:0px;
        width:300%;
        z-index:4;
    }
</style>