<script>
    import { ArtPiece } from "$lib";
    import { MediaQuery } from "svelte/reactivity";

    const desktop = new MediaQuery("min-width:769px");
    export let scrollDiv = "90%";

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
            if (index == i){
                if (artArray[i].popped == false) {
                    artArray[i].open();
                    scrollDiv = "50%";
                }
                else{
                    artArray[i].close();
                    scrollDiv = "90%";
                }
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

<grid class="scrollable" style="width:{desktop.current ? scrollDiv : "90%"};grid-template-columns:{desktop.current && scrollDiv == "90%" ? 'repeat(5, auto)' : 'repeat(3, auto)'}">
    {#each artArray as artPiece}
        <ArtPiece bind:index={artPiece.index} bind:poppedout={artPiece.popped} bind:open={artPiece.open} bind:close={artPiece.close} popout={(/** @type {number} */ i) => closeAll(i)}/>
    {/each}
</grid>

<style>
    grid.scrollable {
        position:absolute;
        bottom:var(--footer-height);
        left:5%;
        display:grid;
        overflow: hidden scroll;
        height:fit-content;
        max-height: calc(98vh - var(--footer-height));
        border: 1px solid black;
        @media (min-width: 769px) {
            max-height:calc(100vh - var(--footer-height));
        }
    }
</style>