/**
 * Rate Component for tingle
 * @author quanyun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const Icon = require('tingle-icon');
const {noop} = require('tingle-context');
const {unitize} = require('tingle-style');

class Rate extends React.Component {

    constructor(props) {
        super(props);
    }

    handleItemClick(v) {
        this.props.onChange(v);
    }

    render() {
        let t = this;
        let items = [];
        for (let i = 1; i <= t.props.totalScore; i++) {
            let item = (
                <i className={classnames('tRateItem', {
                    'active': i <= t.props.score
                })} key={i} onClick={t.handleItemClick.bind(t, i)} style={{
                    width: unitize(t.props.height),
                    height: unitize(t.props.height),
                    marginRight: unitize(t.props.gap)
                }}>
                    <Icon id='tingle-rate-icon' className={'tRateIcon'} />
                </i>);
            items.push(item);
        }
        return <div ref='root' className={classnames('tRate tFBH', {
            [t.props.className]: !!t.props.className
        })}>
            {items}
        </div>;
    }
}

Rate.defaultProps = {
    totalScore: 5,
    score: 0,
    height: 30,
    gap: 15,
    onChange: noop
};

// http://facebook.github.io/react/docs/reusable-components.html
Rate.propTypes = {
    className: React.PropTypes.string,
    totalScore: React.PropTypes.number,
    score: React.PropTypes.number,
    height: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    gap: React.PropTypes.oneOfType([
        React.PropTypes.number,
        React.PropTypes.string
    ]),
    onChange: React.PropTypes.func
};

Rate.displayName = 'Rate';

module.exports = Rate;
