<script>
    import { items } from "../stores";

    $: itemCount = $items.length;
    $: completedItemCount = $items.filter(item => item.completed).length;
</script>

<style>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        color: aliceblue;
        font-weight: bold;
        font-size: 1.5em;
        -webkit-margin-bottom-collapse: rgba(0,0,0,0.1);
    }
</style>

<div class="header">
    <span>Listowel</span>
    <span>{completedItemCount}/{itemCount}</span>
</div>