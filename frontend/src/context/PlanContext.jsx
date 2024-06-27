import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
	const [selectedPlan, setSelectedPlan] = useState('Essentiel');

	return (
		<PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
			{children}
		</PlanContext.Provider>
	);
};

PlanProvider.propTypes = {
	children: PropTypes.node,
};

export default PlanContext;
