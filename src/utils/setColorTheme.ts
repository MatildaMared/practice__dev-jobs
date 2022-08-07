export function setLightTheme() {
	document.documentElement.style.setProperty(
		"--color-background",
		"var(--color-background-light)",
	);
	document.documentElement.style.setProperty(
		"--color-text",
		"var(--color-text-light)",
	);
}

export function setDarkTheme() {
	document.documentElement.style.setProperty(
		"--color-background",
		"var(--color-background-dark)",
	);
	document.documentElement.style.setProperty(
		"--color-text",
		"var(--color-text-dark)",
	);
}
