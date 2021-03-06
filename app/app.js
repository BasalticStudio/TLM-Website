/**
 * Application
 */

import React from 'react'
import Application from './components/Application'

Parse.initialize("<%= PARSE_APP_ID %>", "<%= PARSE_JAVASCRIPT_KEY %>");
window.onload = () => { React.render(<Application />, document.getElementById("app")) }
