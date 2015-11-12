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

    handleChange(label, score) {
        this.setState({
            [label]: score
        });
    }

    render() {
        let t = this;
        let [totalScore, height, gap] = [5, 30, 15];
        return <div className="tM10">
            <div className="tFBH tFBAC tH44">
                <div className="tFB1">服务态度：</div>
                <div>
                    <Rate totalScore={totalScore} height={height} gap={gap} score={t.state.score1} onChange={t.handleChange.bind(t, 'score1')} />
                </div>
            </div>
            <div className="tFBH tFBAC tH44">
                <div className="tFB1">认路能力：</div>
                <div>
                    <Rate totalScore={totalScore} height={height} gap={gap} score={t.state.score2} onChange={t.handleChange.bind(t, 'score2')} />
                </div>
            </div>
            <div className="tFBH tFBAC tH44">
                <div className="tFB1">开车水平：</div>
                <div>
                    <Rate totalScore={totalScore} height={height} gap={gap} score={t.state.score3} onChange={t.handleChange.bind(t, 'score3')} />
                </div>
            </div>
        </div>
    }
}

module.exports = Demo;
