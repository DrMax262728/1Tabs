import React, {Fragment} from 'react';
import TabBarItem from './TabBarItem';
import TabBar from "./TabBar";

const Sandbox = () => (
  <Fragment>
    <TabBar>
      <TabBarItem label="Tab 1">
				<p>Item 1</p>
			</TabBarItem>
      <TabBarItem label="Tab 2">
        <p>Item 2</p>
      </TabBarItem>
      <TabBarItem label="Tab 3">
        <p>Item 3</p>
      </TabBarItem>
    </TabBar>
  </Fragment>
);

export default Sandbox;
