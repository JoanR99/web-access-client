import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import CodeForm from '../CodeForm/CodeForm';
import UrlForm from '../UrlForm/UrlForm';

const EvaluationTabs = () => (
	<Tab.Group>
		<Tab.List className="tabs">
			<Tab as={Fragment}>
				{({ selected }) => (
					<button className={selected ? 'tab tab--active' : 'tab'}>URL</button>
				)}
			</Tab>
			<Tab as={Fragment}>
				{({ selected }) => (
					<button className={selected ? 'tab tab--active' : 'tab'}>Code</button>
				)}
			</Tab>
		</Tab.List>
		<Tab.Panels className="panel">
			<Tab.Panel>
				<UrlForm />
			</Tab.Panel>
			<Tab.Panel>
				<CodeForm />
			</Tab.Panel>
		</Tab.Panels>
	</Tab.Group>
);

export default EvaluationTabs;
