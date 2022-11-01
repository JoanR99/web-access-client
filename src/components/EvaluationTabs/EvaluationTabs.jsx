import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import CodeForm from '../CodeForm/CodeForm';
import UrlForm from '../UrlForm/UrlForm';

const EvaluationTabs = ({ isLoading, dispatch, error }) => (
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
				<UrlForm isLoading={isLoading} dispatch={dispatch} error={error} />
			</Tab.Panel>
			<Tab.Panel>
				<CodeForm isLoading={isLoading} dispatch={dispatch} error={error} />
			</Tab.Panel>
		</Tab.Panels>
	</Tab.Group>
);

export default EvaluationTabs;
