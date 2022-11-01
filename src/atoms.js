import { atom } from 'jotai';
import {
	checkContrast,
	formatRatio,
	meetsMinimumRequirements,
} from './utils/contrast.utils';

export const textColorAtom = atom('#ffffff');

export const backgroundColorAtom = atom('#1A8FE3');

export const contrastRatioAtom = atom((get) =>
	checkContrast(get(textColorAtom), get(backgroundColorAtom))
);

export const levelAtom = atom((get) =>
	meetsMinimumRequirements(get(contrastRatioAtom))
);

export const formatedRatioAtom = atom((get) =>
	formatRatio(get(contrastRatioAtom))
);

export const statusAtom = atom((get) =>
	get(levelAtom).didPass
		? `Meets the level ${get(levelAtom).maxLevel} of WCAG.`
		: 'It does not meet the minimum level of WCAG.'
);
