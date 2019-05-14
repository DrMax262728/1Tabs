import React, { Fragment } from 'react';
import TabBarItem from './TabBarItem';
import TabBar from "./TabBar";


const Sandbox = () => (
  <Fragment>
    <TabBar>
      <TabBarItem label="1">
        <p>Tab 1</p>
      </TabBarItem>
      <TabBarItem label="2">
        <p>Tab 2</p>
      </TabBarItem>
      <TabBarItem label="3">
        <p>Tab 3</p>
      </TabBarItem>
    </TabBar>
  </Fragment>
);

export default Sandbox;
