<script>
    import { ImgLink } from "$lib";
</script>

<footer>
    <div class="home-link">
        <ImgLink title="" link="/" size="var(--footer-icon-width)" targetFontSize=3.5vw/>
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
    div.home-link{
        position:absolute;
    }
</style>
