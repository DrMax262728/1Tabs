import React, {Fragment} from 'react'
import PropTypes from 'prop-types'




const TabBarNav = ({
	navLabel, className, onChangeActiveTab
}) => {

	return(
		<Fragment>

		</Fragment>
	)

};

TabBarNav.propTypes = {
	navLabel: PropTypes.string,
	className: PropTypes.string,
	onChangeActiveTab: PropTypes.func
};

TabBarNav.defaultProps = {
	navLabel: PropTypes.string,
	classNames: PropTypes.string,
	onChangeActiveTab: PropTypes.func
};

export default TabBarNav;



