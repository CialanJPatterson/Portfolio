<script>
    import { ImgLink } from "$lib";
</script>

<footer>
    <div id="icons">
        <div>
            <div id="info">
                <ImgLink title="" link="/" size="var(--footer-icon-width)" targetFontSize=3.5vw/>
            </div>
            <div id="home-link">
                <ImgLink title="" link="/" size="var(--footer-icon-width)" targetFontSize=3.5vw/>
            </div>
        </div>
        <div>
            <div id="contact">
                <ImgLink title="" link="/" size="var(--footer-icon-width)" targetFontSize=3.5vw/>
            </div>
            <div id="french">
                <ImgLink title="" link="/" size="var(--footer-icon-width)" targetFontSize=3.5vw/>
            </div>
        </div>
    </div>
</footer>

<style>
    footer{
        background-color: #b1b2b5bb;
        color: var(--text-color);
        text-align: center;
        height: var(--footer-height);
        position:fixed;
        left:0px;
        bottom:0;
        width:100%;
        z-index: 9;
    }
    div#icons{
        position:absolute;
        left:var(--footer-gutters);
        top:var(--footer-gutters);
        width:calc(98%);
        background-color: aqua;
    }
    div#icons > div {
        display:grid;
        grid-template-columns: auto auto auto;
        gap:var(--footer-gutters);
    }
    div#icons > div:first-child {
        position:absolute;
        left:0px;
        padding-right:var(--footer-gutters);
    }
    div#icons > div:last-child {
        position:absolute;
        right:0px;
        padding-left:var(--footer-gutters);
    }
</style>
