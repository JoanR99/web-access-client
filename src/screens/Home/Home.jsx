import React from 'react';
import {
	Button,
	HeroIllustration,
	ContrastIllustration,
} from '../../components';

const Home = () => (
	<>
		<section className="section">
			<div className="section__content">
				<h1 className="heading-1 heading-1--primary">
					We want to help you make the web more accessible
				</h1>
				<p>
					Evaluate the accessibility of your websites through their url or HTML
					code following the latest standard of the guidelines established by
					the WCAG.
				</p>
				<Button to="/evaluation">Evaluate</Button>
			</div>

			<div className="section__illustration">
				<HeroIllustration />
			</div>
		</section>

		<section className="section">
			<div className="section__illustration">
				<ContrastIllustration />
			</div>
			<div className="section__content">
				<h1 className="heading-1 heading-1--secondary">
					Choose the right colors for your website
				</h1>
				<p>
					Check the contrast between the colors used for the text and the
					background on your websites, ensuring that people with visual
					disabilities can use them.
				</p>
				<Button to="/contrast">Check Contrast</Button>
			</div>
		</section>
	</>
);

export default Home;
