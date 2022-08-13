<script lang="ts">
	export let secondary = false;
	export let onClick;
</script>

<button on:click={onClick} class={secondary ? "secondary button" : "primary button"}>
    <slot/>
</button>

<style lang="scss">
    button {
        background-color: var(--color-primary);
        border: none;
        padding: 16px 32px;
        cursor: pointer;
        border-radius: 6px;
        transition: all 0.2s ease-in-out;
        color: var(--color-white);
        font-weight: 700;

        &:focus {
            outline: 2px solid var(--color-primary);
            outline-offset: 4px;
        }

        &:hover {
            background-color: var(--color-button-hover);
        }

        &.secondary {
            background-color: var(--color-button-secondary);
            color: var(--color-button-secondary-text);

            &:hover {
                background-color: var(--color-button-secondary-hover);
            }
        }
    }
</style>