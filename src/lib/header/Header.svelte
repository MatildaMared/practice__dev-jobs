<script lang="ts">
	import {setDarkTheme, setLightTheme} from "../../utils/setColorTheme";

	let value = "light";
	let checked = false;

	function handleToggleTheme(event) {
		const isChecked = event.target.getAttribute("aria-checked");
		checked = isChecked !== "true";
		value = checked ? "dark" : "light";
		updateColorTheme(value);
	}

	function updateColorTheme(value) {
		if (value === "dark") {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	}
</script>

<header>
    <div class="content">
        <a href="/">
            <h1 class="heading">devjobs</h1>
        </a>
        <div class="theme-toggle">
            <img src="/images/desktop/icon-sun.svg" alt="Sun icon"/>
            <button class="toggle" aria-checked={checked} on:click={handleToggleTheme}
                    role="switch"></button>
            <img src="/images/desktop/icon-moon.svg" alt="Moon icon"/>
        </div>
    </div>
</header>

<style lang="scss">
    @use "../../styles/breakpoints.scss" as *;

    header {
        min-height: 136px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
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

        a:focus {
            outline: 2px solid var(--color-white);
            border-radius: 8px;
            outline-offset: 4px;
        }

        .heading {
            color: var(--color-white);
        }

        .theme-toggle {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .toggle {
            width: 40px;
            height: 24px;
            border: none;
            border-radius: 16px;
            background: var(--color-white);
            cursor: pointer;
            transition: all .2s ease-in-out;

            &:focus {
                outline: 2px solid var(--color-white);
                outline-offset: 4px;
            }

            &::before {
                content: "";
                display: block;
                width: 14px;
                height: 14px;
                border-radius: 16px;
                background: var(--color-primary);
                transition: all .2s ease-in-out;

            }

            &[aria-checked="true"] {
                &::before {
                    transform: translateX(14px);
                }
            }

            &:hover {
                &::before {
                    width: 16px;
                    height: 16px;
                    background: var(--color-primary-light);
                }
            }
        }
    }
</style>
