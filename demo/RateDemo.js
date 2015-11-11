/**
 * Rate Component Demo for tingle
 * @author quanyun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */

const classnames = require('classnames');

const Rate = require('../src');

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            grade: 0
        }
    }

    handleChange(g) {
        this.setState({
            grade: g
        });
    }

    render() {
        let t = this;
        return <div>
            <Rate iconNumber={5} defaultIcon={'tingle-rate-icon'} activeIcon={'tingle-rate-icon-active'} grade={t.state.grade} onChange={t.handleChange.bind(t)} />
        </div>
    }
}

module.exports = Demo;
