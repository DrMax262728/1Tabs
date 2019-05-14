import React from 'react'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'

const TabBarNav = ({
	navLabel, className, onChangeActiveTab
}) => {
	const Button = styled.button`
		background-color: #2196f3;
		border: 1px solid #2196f3;
    padding: 15px 15px;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    text-transform: uppercase;
    font-weight: 600;
    width:150px;
		color: lightgrey;
	${className && css`
    border-bottom: 2px rgb(225, 0, 80) solid;
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