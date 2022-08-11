export function setLightTheme() {
	const root = document.documentElement;

	root.style.setProperty(
		"--color-background",
		"var(--color-background-light)",
	);
	root.style.setProperty("--color-text", "var(--color-text-light)");
	root.style.setProperty(
		"--color-background-lighter",
		"var(--color-background-lighter-light)",
	);
	root.style.setProperty(
		"--color-button-secondary",
		"var(--color-button-secondary-light)",
	);
	root.style.setProperty(
		"--color-button-secondary-hover",
		"var(--color-button-secondary-hover-light)",
	);
	root.style.setProperty(
		"--color-button-secondary-text",
		"var(--color-button-secondary-text-light)",
	);
}

export function setDarkTheme() {
	const root = document.documentElement;

	root.style.setProperty(
		"--color-background",
		"var(--color-background-dark)",
	);
	root.style.setProperty("--color-text", "var(--color-text-dark)");
	root.style.setProperty(
		"--color-background-lighter",
		"var(--color-background-lighter-dark)",
	);
	root.style.setProperty(
		"--color-button-secondary",
		"var(--color-button-secondary-dark)",
	);
	root.style.setProperty(
		"--color-button-secondary-hover",
		"var(--color-button-secondary-hover-dark)",
	);
	root.style.setProperty(
		"--color-button-secondary-text",
		"var(--color-button-secondary-text-dark)",
	);
}
