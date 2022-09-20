const luminance = (r, g, b) => {
	const [lumR, lumG, lumB] = [r, g, b].map((component) => {
		let proportion = component / 255;

		return proportion <= 0.03928
			? proportion / 12.92
			: Math.pow((proportion + 0.055) / 1.055, 2.4);
	});

	return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB;
};

const contrastRatio = (luminance1, luminance2) => {
	const lighterLum = Math.max(luminance1, luminance2);
	const darkerLum = Math.min(luminance1, luminance2);

	return (lighterLum + 0.05) / (darkerLum + 0.05);
};

export const checkContrast = (color1, color2) => {
	const [luminance1, luminance2] = [color1, color2].map((color) => {
		color = color.startsWith('#') ? color.slice(1) : color;

		const r = parseInt(color.slice(0, 2), 16);
		const g = parseInt(color.slice(2, 4), 16);
		const b = parseInt(color.slice(4, 6), 16);

		return luminance(r, g, b);
	});

	return contrastRatio(luminance1, luminance2);
};

export const formatRatio = (ratio) => {
	const ratioAsFloat = ratio.toFixed(2);
	const isInteger = Number.isInteger(parseFloat(ratioAsFloat));
	return `${isInteger ? Math.floor(ratio) : ratioAsFloat}:1`;
};

const WCAG_MINIMUM_RATIOS = [
	['AA Large', 3],
	['AA', 4.5],
	['AAA', 7],
];

export const meetsMinimumRequirements = (ratio) => {
	let didPass = false;
	let maxLevel = null;

	for (const [level, minRatio] of WCAG_MINIMUM_RATIOS) {
		if (ratio < minRatio) break;

		didPass = true;
		maxLevel = level;
	}

	return { didPass, maxLevel };
};
