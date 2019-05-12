import React from 'react'
import PropTypes from 'prop-types'

class TabBar extends React.Component{


	render() {

		return(
			<div>

			</div>
		)

	}

	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		vertical: PropTypes.bool
	};

	static defaultProps = {
		children: null,
		className: "",
		vertical: false
	};

}

export default TabBar;