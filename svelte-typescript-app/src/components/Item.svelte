<script>
    import{ createEventDispatcher } from "svelte";
    export let id, text, completed;

    const dispatch = createEventDispatcher();

    function triggerUpdate() {
        dispatch("update", {id, text, completed});
    }

    function handleDoubleClick() {
        const yes = confirm("Are you sure you wish to delete this item? This action cannot be undone.");

        if (yes) {
            dispatch("delete", id);
        }
    }
</script>

<style>
    .item {
        display: flex;
        align-items: center;
        padding: 15px;
        background-color: rgb(245, 250, 255);
    }

    .item.completed {
        background: #dddddd;
    }

    .item.completed .text-input {
        color: #555555;
        text-decoration: line-through;
    }

    .item:focus-within {
        background: rgba(219, 238, 255, 0.952);
    }

    .text-input {
        flex-grow: 1;
        background: none;
        border: none;
        outline: none;
        font-weight: 500;
        font-size: 1em;
    }

    .completed-checkbox {
        margin-left: 15px;
    }
</style>

<div class="item" class:completed on:dblclick={handleDoubleClick}>
    <input 
    class="text-input" 
    type="text" 
    bind:value={text} 
    readonly={completed}
    on:keyup={({key, target}) => key === "Enter" && target.blur()}
    on:blur={() => triggerUpdate()} />
    <input class="completed-checkbox" type="checkbox" bind:checked={completed} on:change={() => triggerUpdate()} />
</div>