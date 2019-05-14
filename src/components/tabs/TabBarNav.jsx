import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const TabBarNav = ({
	navLabel, className, onChangeActiveTab
}) => {
	const Button = styled.button`
		flex: 1;
    background-color: #FFF;
    border: 1px solid #EDEDED;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    outline: none;
    text-transform: uppercase;
    font-weight: 600;
	
	${className && css`
    background-color: #7CC6FE;
    border-bottom-color: transparent;
    color: #FFF;
  	`}
	`;


	return(
		<Button onClick = {() => {onChangeActiveTab(navLabel)}} >
			{navLabel}
		</Button>
	)

};

TabBarNav.propTypes = {
	navLabel: PropTypes.string,
	className: PropTypes.bool,
	onChangeActiveTab: PropTypes.func
};

TabBarNav.defaultProps = {
	navLabel: 'Tab',
	classNames: false,
	onChangeActiveTab: () => {}
};

export default TabBarNav;