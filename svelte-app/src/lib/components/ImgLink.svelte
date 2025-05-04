<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    export let title = "";
    export let link = "/error";
    export let size = "30vw"; // expressed as a percentage of the view width
    export let icon = "/favicon.png";
    export let bg = "indigo";
    export let targetFontSize = "1vw";
    export let fontSize = targetFontSize;
    export let hasTitle = true;
    let visible = "hidden";
    onMount(() => {
        if (title === "") hasTitle = false;
        fontSize = sizeText(title, size, parseFloat(targetFontSize));
        visible = "visible";
    })
</script>

<script module>
    /**
     * Resizes text to fit into textbox
     * @param text{String} text to be resized
     * @param des{String} desired width relative to viewport
     * @param target{Number} desired font size relative to viewport
     */
    function sizeText(text, des, target) {
        if (text == ""){
            return "0vw";
        }
        
        if (des.startsWith("var(")){
            const temp = des.slice(4, des.length-1);
            des = window.getComputedStyle(document.body).getPropertyValue(temp);
        }
        const fUnit = des.substring(des.length - 2);
        const size = parseInt(des);
        let fSize = 0;
        let numChar = text.length;
        for (let i = numChar - 1; i > -1; i--) {
            const c = text[i];
            if (c == "M" || c == "W") {
                numChar += 0.3;
            }
            else if (c == "I") {
                numChar -= 0.45;
            }
        }
        const maxSize = size * 0.85;
        if (numChar * target < maxSize ) {
            const returnString = target + "vw";
            return returnString;
        }
        else while (numChar * fSize < maxSize) {
            fSize += 0.001;
        }
        const returnString = fSize + fUnit;
        return returnString;
    }
</script>

<div class="super" style="width:{size}; height:{size}; visibility:{visible}">
  <a href="{base}{link}">
    <div class="container" style="background-color:{bg}; width:{size}; height:{size}; font-size:{fontSize};">
        <div class="textbox-wrapper" style="width:{size}; height:{size}">
            {#if hasTitle}
                <div class="textbox">
                    <h2>{title}</h2>
                </div>
            {/if}
            <img src="{base}{icon}" alt={title}>
        </div>
    </div>
  </a>
</div>

<style>
    div.super {
        display:inline-flex;
        align-items:center;
        width:fit-content;
        height:fit-content;
    }

    div.container {
        min-height:fit-content;
        min-width:fit-content;
        vertical-align:top;
        text-align:center;
    }
    div.textbox-wrapper {
        display:inline-flex;
        position:relative;
        top:0px;
        left:0px;
    }
    div.textbox {
        align-content:center;
        height: fit-content;
        min-height:20%;
        display: block;
        z-index:7;
        width:100%;
        background-color: #0005;
    }
    h2 {
        padding:0px;
        margin:0px;
        color:var(--white-text);
    }
    img {
        position:absolute;
        top:0px;
        left:0px;
        width:100%;
        vertical-align: super;
        z-index:6;
    }
</style>