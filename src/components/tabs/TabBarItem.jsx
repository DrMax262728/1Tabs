import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const TabBarItem = ({children, label, activeTab}) => {
	const Div = styled.div`
		height: 0;
    overflow: hidden;
		${activeTab === label  && css`
    	height: auto;
  	`}
	`;

	return (
		<Div>
			{children}
		</Div>
	)

};

TabBarItem.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string.isRequired,
	activeTab: PropTypes.string
};

TabBarItem.defaultProps = {
	children: null,
	activeTab: ""
};

export default TabBarItem;