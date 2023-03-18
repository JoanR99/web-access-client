const failTestData = {
	H25: {
		name: 'Title',
		description: 'There is no title or the title is empty',
		successCriterion: [
			{
				name: 'Success Criterion 2.4.2: Page Titled',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/page-titled',
			},
		],
	},

	H32: {
		name: 'Form',
		description: 'Form elements must have a submit option',
		successCriterion: [
			{
				name: 'Success Criterion 3.2.2: On Input',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/on-input',
			},
		],
	},

	H35: {
		name: 'Applet',
		description:
			'Applet elements must contain an equal description on an alt attribute and on the body of the element',
		successCriterion: [
			{
				name: 'Success Criterion 1.1.1: Non-text Content',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content',
			},
		],
	},

	H36_H37: {
		name: 'Image and Input of type Image',
		description: [
			'Image and input of type image must contain a description of the image on an alt attribute',
		],
		successCriterion: [
			{
				name: 'Success Criterion 1.1.1: Non-text Content',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content',
			},
		],
	},

	H44: {
		name: 'Input, Select and Checkbox',
		description:
			'Input elements of type text, file, password and select or textarea elements must have an associated label element to describe their purpose',
		successCriterion: [
			{
				name: 'Success Criterion 1.1.1: Non-text Content',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content',
			},
			{
				name: 'Success Criterion 1.3.1: Info and Relationships',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships',
			},
			{
				name: 'Success Criterion 3.3.2: Labels or Instructions',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions',
			},
			{
				name: 'Success Criterion 4.1.2: Name, Role, Value',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value',
			},
		],
	},

	H46: {
		name: 'Embed',
		description:
			'Each embed element must have a noembed element that describes it',
		successCriterion: [
			{
				name: 'Success Criterion 1.1.1: Non-text Content',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/non-text-content',
			},
			{
				name: 'Success Criterion 1.2.8: Media Alternative (Prerecorded)',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/media-alternative-prerecorded',
			},
		],
	},

	H57: {
		name: 'Html',
		description:
			'Html tag must define the language of the page in the lang attribute',
		successCriterion: [
			{
				name: 'Success Criterion 3.1.1: Language of Page',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/language-of-page',
			},
		],
	},

	H63: {
		name: 'Th',
		description:
			'Th tags must contain the scope attribute to associate with cells',
		successCriterion: [
			{
				name: 'Success Criterion 1.3.1: Info and Relationships',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships',
			},
		],
	},

	H64: {
		name: 'Iframe',
		description:
			'Iframe elements must define a title attribute that describes them',
		successCriterion: [
			{
				name: 'Success Criterion 2.4.1: Bypass Blocks',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks',
			},
			{
				name: 'Success Criterion 4.1.2: Name, Role, Value',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/name-role-value',
			},
		],
	},

	H93: {
		name: 'Id attribute',
		description: 'Two or more elements can not have the same id attribute',
		successCriterion: [
			{
				name: 'Success Criterion 4.1.1: Parsing',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/parsing',
			},
		],
	},

	H95: {
		name: 'Video Captions',
		description:
			'Video elements must contain a track element with a kind attribute of type captions',
		successCriterion: [
			{
				name: 'Success Criterion 1.2.2: Captions (Prerecorded)',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded',
			},
		],
	},

	H96: {
		name: 'Video Descriptions',
		description:
			'Video elements must contain a track element with a kind attribute of type descriptions',
		successCriterion: [
			{
				name: 'Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded',
			},
			{
				name: 'Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded',
			},
			{
				name: 'Success Criterion 1.2.5: Audio Description (Prerecorded)',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded',
			},
			{
				name: 'Success Criterion 1.2.7: Extended Audio Description (Prerecorded)',
				link: 'https://www.w3.org/WAI/WCAG21/Understanding/extended-audio-description-prerecorded',
			},
		],
	},
};

export default failTestData;
