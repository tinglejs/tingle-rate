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
            score: 0
        }
    }

    handleChange(g) {
        this.setState({
            score: g
        });
    }

    render() {
        let t = this;
        return <div>
            <div className="tFBH tFBAC tH44">
                <div className="tFB1">服务态度：</div>
                <div>
                    <Rate totalScore={5} height={30} gap={15} score={t.state.score} onChange={t.handleChange.bind(t)} />
                </div>
            </div>
            <div className="tFBH tFBAC tH44">
                <div className="tFB1">服务态度：</div>
                <div>
                    <Rate totalScore={5} height={30} gap={15} score={t.state.score} onChange={t.handleChange.bind(t)} />
                </div>
            </div>
            <div className="tFBH tFBAC tH44">
                <div className="tFB1">服务态度：</div>
                <div>
                    <Rate totalScore={5} height={30} gap={15} score={t.state.score} onChange={t.handleChange.bind(t)} />
                </div>
            </div>
        </div>
    }
}

module.exports = Demo;
