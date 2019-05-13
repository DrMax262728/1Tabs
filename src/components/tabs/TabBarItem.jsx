import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const TabBarItem = ({children, label, activeTab}) => {

	const Div = styled.div`
		height: 100px;
    width: 100px;
		
		${activeTab === label  && css`
    	background-color: yellow;
  	`}
	`;

	return (
		<Div>
			{children}
		</Div>

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