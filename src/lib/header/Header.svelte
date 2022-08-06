<script lang="ts">

</script>

<header>
    <div class="content">
        <h1 class="heading">devjobs</h1>
        <div class="theme-toggle">
            <img src="/images/desktop/icon-sun.svg" alt="Sun icon"/>
            <img src="/images/desktop/icon-moon.svg" alt="Moon icon"/>
        </div>
    </div>
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
            padding: 32px 48px;
            background: url("/images/desktop/bg-pattern-header.svg") bottom left;
            background-size: cover;
        }

        .content {
            width: 100%;
            max-width: var(--max-width);
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .heading {
            color: var(--color-white);
        }

        .theme-toggle {
            display: flex;
            align-items: center;
            gap: 16px;
        }
    }
</style>
