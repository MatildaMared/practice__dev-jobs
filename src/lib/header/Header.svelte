<script lang="ts">

</script>

<header>
    <h1>Header</h1>
</header>

<style lang="scss">
    @use "../../styles/breakpoints.scss" as *;

    header {
        display: flex;
        justify-content: space-between;
        background: url("/images/mobile/bg-pattern-header.svg") no-repeat center;
        background-size: cover;
        padding: 32px;

        @media (min-width: $breakpoint-tablet-portrait) {
            background: url("/images/tablet/bg-pattern-header.svg") no-repeat bottom;
            background-size: cover;
        }

        @media (min-width: $breakpoint-laptop) {
            background: url("/images/desktop/bg-pattern-header.svg") bottom left;
            background-size: cover;
        }
    }
</style>
