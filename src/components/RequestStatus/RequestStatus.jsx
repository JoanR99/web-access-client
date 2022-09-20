import React from 'react';
import { RequestStatusCard, Spinner } from '..';

const RequestStatus = ({ isSuccess, isError, errorMessage, isLoading }) => (
	<>
		{isLoading && <Spinner />}
		{isError && <RequestStatusCard status='error'>{errorMessage}</RequestStatusCard>}
		{isSuccess && <RequestStatusCard status='success'>Success!</RequestStatusCard>}
	</>
);

export default RequestStatus;
