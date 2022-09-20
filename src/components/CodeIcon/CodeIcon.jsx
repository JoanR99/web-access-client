import React from 'react';
import './CodeIcon.scss';

const CodeIcon = () => (
	<svg
		data-name="Layer 1"
		id="Layer_1"
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			className="cls-1"
			d="M462,144V448H142V232H305.2a9.83,9.83,0,0,0,9.8-9.8V141.8a9.83,9.83,0,0,0-9.8-9.8H142V64H366v64a16,16,0,0,0,16,16Z"
		/>
		<line className="cls-1" x1="366" x2="462" y1="64" y2="144" />
		<rect
			className="cls-1"
			height="100"
			rx="9.8"
			ry="9.8"
			width="280"
			x="35"
			y="132"
		/>
		<path
			d="M85.07,203V161h7.08v18.18H113V161H120V203H113V185.81H92.15V203Z"
			className="code-icon"
		/>
		<path
			d="M145.73,167.51V203h-7.08V167.51H125.93V161h32.52v6.48Z"
			className="code-icon"
		/>
		<path
			d="M171.42,203h-7.08V161h11L188,187.37,200.7,161h11V203H204.6V170.21L190,199.31h-4l-14.58-29.1Z"
			className="code-icon"
		/>
		<path d="M222.14,203V161h7.08v35.22h19.14V203Z" className="code-icon" />
		<polyline className="cls-2" points="260 274 196 338 260 402" />
		<line className="cls-2" x1="276" x2="324" y1="402" y2="274" />
		<polyline className="cls-2" points="344 274 408 338 344 402" />
	</svg>
);

export default CodeIcon;
