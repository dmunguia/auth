import React from 'react'
import { Paper, Tabs } from '@material-ui/core'
import Tab from '@material-ui/core/Tab';

const Footer = (props) =>
  <Paper>
    <Tabs
      value={0}
      onChange={this.handleChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>

export default Footer;
