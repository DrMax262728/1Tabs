import React, { Fragment } from "react";

const Tab = props => <button>{props.label}</button>;

const Tabs = props => (
  <Fragment>
    <Tab onClick={props} label="tab1" />
    <Tab label="tab2" />
    <Tab label="tab3" />
  </Fragment>
);

export default Tabs;
