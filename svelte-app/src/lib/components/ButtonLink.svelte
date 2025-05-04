<script>
	import { goto } from "$app/navigation";

    import { onMount } from "svelte";
    export let title = "";
    export let link = "/error";
    export let width = "30vw"; // expressed as a percentage of the view width
    export let height = "30vh";
    export let icon = "/favicon.png";
    export let iconSize = "10vw";
    export let bg = "indigo";
    export let targetFontSize = "1vw";
    export let fontSize = targetFontSize;
    export let hasTitle = true;
    export let textColour = "var(--white-text)"
    let visible = "hidden";
    onMount(() => {
        if (title === "") hasTitle = false;
        fontSize = sizeText(title, width, height, iconSize, parseFloat(targetFontSize));
        visible = "visible";
    })
    function nav(){
        if (link.startsWith("/")){
            goto(link);
        }
        else {
            window.location.href = link;
        }
    }
</script>

<script module>
    /**
     * Resizes text to fit into textbox
     * @param text{String} text to be resized
     * @param desW{String} desired width relative to viewport
     * @param desH{String} desired height relative to viewport
     * @param icon{String} width of the img element attached to the button
     * @param target{Number} desired font size relative to viewport
     */
    function sizeText(text, desW, desH, icon, target) {
        if (text == ""){
            return "0vw";
        }
        if (desW.startsWith("var(")){
            const temp = desW.slice(4, desW.length-1);
            desW = window.getComputedStyle(document.body).getPropertyValue(temp);
        }
        if (desH.startsWith("var(")){
            const temp = desH.slice(4, desW.length-1);
            desH = window.getComputedStyle(document.body).getPropertyValue(temp);
        }
        const fUnit = desW.substring(desW.length - 2);
        const size = parseInt(desW) - parseInt(icon);
        let fSize = 0;
        let numChar = text.length;
        for (let i = numChar - 1; i > -1; i--) {
            const c = text[i];
            if (c == "M" || c == "W") {
                numChar += 0.3;
            }
            else if (c == "I" || c == " ") {
                numChar -= 0.45;
            }
        }
        const maxSize = size * 0.95;
        const maxHeight = parseInt(desH) * 0.3;
        if (numChar * target < maxSize ) {
            const returnString = target + "vw";
            return returnString;
        }
        else while (numChar * fSize < maxSize) {
            fSize += 0.001;
        }
        if (fSize > maxHeight){
            fSize = maxHeight;
            return fSize + "vw";
        }
        const returnString = fSize + fUnit;
        return returnString;
    }
</script>

<div class="super" style="width:{width}; height:{height}; visibility:{visible}">
        <button on:click={nav} class="container" style="background-color:{bg}; width:{width}; height:{height}; font-size:{fontSize};">
            <div style="width:{parseInt(width) - parseInt(iconSize) + "vw"};">
                <h2 style="color:{textColour}">{title}</h2>
            </div>
            <img src={icon} alt={title} style="width:{iconSize};">
        </button>
</div>

<style>
    * {
        position: relative;
        padding:0px;
        margin:0px;
    }
    button {
        position:absolute;
        left:0px;
        top:0px;
        display:grid;
        grid-template-columns: auto auto;
        text-align: center;
        align-items: center;
    }
    button > div {
        position:absolute;
        left:0px;
        height:fit-content;
        min-width: fit-content;
        text-align: center;
    }
    button * h2 {
        position:relative;
        top:0px;
        left:0px;
    }
    button > img {
        position:absolute;
        right:0px;
    }
</style>