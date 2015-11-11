/**
 * Rate Component Demo for tingle
 * @author quanyun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
require('tingle-context');
window.FastClick && FastClick.attach(document.body);
var Demo = require('./RateDemo');
React.render(<Demo/>, document.getElementById('TingleDemo'));
