<script>
    import { Game } from "$lib";

    /**
	 * @type {any[]}
	 */
    let gamesArray = [];

    /**
	 * @param {import("svelte").Component<{ title?: string; source?: string; link?: string; }, {}, "">} game
	 */
    function addItem(game){
        gamesArray = [...gamesArray, game];
    };

    for (let i = 0; i < 60; i++) {
        addItem(Game);
    }
</script>

<grid class="scrollable">
    {#each gamesArray as gameIcon}
        <Game />
    {/each}
</grid>

<style>
    grid.scrollable {
        position:absolute;
        top:2vh;
        left:0px;
        display:grid;
        overflow: auto;
        grid-auto-flow: column;
        grid-template-rows: 20vh 20vh 20vh;
        scrollbar-gutter: 3vh;
        width:100vw;
        height: 63vh;
        border: 1px solid black;
        @media (min-width: 769px) {
        }
    }
</style>