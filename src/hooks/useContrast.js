import { useState, useEffect } from 'react';
import {
	checkContrast,
	formatRatio,
	meetsMinimumRequirements,
} from '../utils/contrast.utils';

const useContrast = (textColor, backgroundColor) => {
	const [ratioStatus, setRatioStatus] = useState('');
	const [pass, setPass] = useState(false);
	const [levelStatus, setLevelStatus] = useState('');

	useEffect(() => {
		const evaluate = () => {
			const ratio = checkContrast(textColor, backgroundColor);
			const { didPass, maxLevel } = meetsMinimumRequirements(ratio);
			const status = didPass
				? `Meets the level ${maxLevel} of WCAG.`
				: 'It does not meet the minimun level of WCAG.';

			setRatioStatus(formatRatio(ratio));
			setLevelStatus(status);
			setPass(didPass);
		};

		evaluate();
	}, [textColor, backgroundColor]);

	return { ratioStatus, levelStatus, pass };
};

export default useContrast;
