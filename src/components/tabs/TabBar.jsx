import React from 'react'
import PropTypes from 'prop-types'
import TabBarNav from "./TabBarNav";
import styled from 'styled-components'

class TabBar extends React.Component{


	state = {
		activeTab: null
	};

	componentDidMount() {
		const {children = []} = this.props;
		const activeTab = this.getChildrenLabels(children)[0];
		this.setActiveTab(activeTab);
	}

	getChildrenLabels = (children) =>
		children.map( ({props}) => props.label );

	setActiveTab = activeTab => {
		const {activeTab: currentTab} = this.state;
		if(currentTab !== activeTab) {
			this.setState({activeTab} )
		}
	};

	renderTabs = () => {
		const {children = []} = this.props;
		const {activeTab} = this.state;

		return this.getChildrenLabels(children).map(navLabel => (
			<TabBarNav
				key = {navLabel}
				navLabel={navLabel}
				className={activeTab === navLabel}
				onChangeActiveTab={this.setActiveTab}
			/>
		))
	};


	render() {
		const {activeTab} = this.state;
		const {children} = this.props;
		const DivNav = styled.div`
			position: relative;
			display: flex;
			z-index: 2;
		`;
		const DivContainer = styled.div`
			padding: 20px;
			min-height: 100px;
			border: 1px solid #EDEDED;
			border-radius: 0 0 5px 5px;
			position: relative;
			top: -1px;
		`;

		return(
			<div>
				<DivNav>
					{this.renderTabs()}
				</DivNav>
				<DivContainer>
					{React.Children.map(children, child =>
					React.cloneElement(child,{activeTab}))}
				</DivContainer>
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