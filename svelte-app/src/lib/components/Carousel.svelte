<script>
    import { ArtPiece } from "$lib";

    /**
	 * @type {any[]}
	 */
    let artArray = [
        {
            index: 0
        }
    ];

    function addItem(){
        const n = artArray.length;
        artArray = [...artArray, {index:n, popped:false, open:function(){}, close:function(){}}];
    };

    /**
     * 
     * @param index{Number}
     */
    function closeAll(index){
        
        for (let i = 0; i < artArray.length; i++) {
            if (index == i && artArray[i].popped == false){
                artArray[i].open();
            }
            else {
                artArray[i].close();
            }
        }
    }

    for (let i = 0; i < 24; i++) {
        addItem();
    }
</script>

<table class="scrollable" style="">
    {#each artArray as artPiece}
        <ArtPiece bind:index={artPiece.index} bind:poppedout={artPiece.popped} bind:open={artPiece.open} bind:close={artPiece.close} popout={(/** @type {number} */ i) => closeAll(i)}/>
    {/each}
</table>

<style>
    table.scrollable {
        position:absolute;
        bottom:var(--footer-height);
        left:5%;
        display:grid;
        grid-template-columns: auto auto auto;
        width:90%;
        overflow: hidden scroll;
        height:fit-content;
        max-height: 80vh;
        border: 1px solid black;
    }
</style>