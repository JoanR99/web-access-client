import React from 'react';
import './StatusPanel.scss';
import { useAtom } from 'jotai';
import { formatedRatioAtom, levelAtom, statusAtom } from '../../atoms';

const StatusPanel = () => {
	const [{ didPass }] = useAtom(levelAtom);
	const [ratioStatus] = useAtom(formatedRatioAtom);
	const [levelStatus] = useAtom(statusAtom);

	return (
		<section className="status-panel">
			<p>
				Cotrast ratio:{' '}
				<span style={{ color: `${didPass ? 'green' : 'red'}` }}>
					{ratioStatus} {levelStatus}
				</span>
			</p>
		</section>
	);
};

export default StatusPanel;
