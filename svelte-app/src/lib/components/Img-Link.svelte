<script>
    export let title = "Page Link";
    export let link = "/error";
    export let size = "150px";
    export let photo = "/favicon.png";
    export let bg = "grey";
</script>

<div class="content" style="background-color:{bg};">
    <a href={link}>
    <h2>{title}</h2>
    <img src={photo} width={size} height={size} alt={title}>
    </a>
</div>

<style>
    div {
        width:fit-content;
        height:fit-content;
        text-align: center;
    }
    img {
        padding: 0px 25px 10px 25px;
    }
</style>