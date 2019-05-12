import React from 'react'
import PropTypes from 'prop-types'


const TabBarItem = ({
	children, label, activeTab, ...attrs
}) => {

	return (
		<div>

		</div>
	)

};

TabBarItem.propTypes = {
	children: PropTypes.string.isRequired,
	label: PropTypes.node,
	activeTab: PropTypes.string
};

TabBarItem.defaultProps = {
	children: null,
	activeTab: ""
};


export default TabBarItem;