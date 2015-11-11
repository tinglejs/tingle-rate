/**
 * Rate Component for tingle
 * @author quanyun
 *
 * Copyright 2014-2015, Tingle Team, Alinw.
 * All rights reserved.
 */
const classnames = require('classnames');
const Icon = require('tingle-icon');

class Rate extends React.Component {

    constructor(props) {
        super(props);
    }

    handleItemClick(v) {
        this.props.onChange && this.props.onChange(v);
    }

    render() {
        let t = this;
        let starItem = [];
        for (let i = 1; i <= t.props.iconNumber; i++) {
            let isActive = i <= t.props.grade;
            let _item = (
                <i className={classnames("tRateItem",{
                    'active': isActive
                })} key={i} id={'tRate-' + i} onClick={t.handleItemClick.bind(t, i)}>
                    {
                        isActive ?
                            <Icon id={t.props.activeIcon} /> :
                            <Icon id={t.props.defaultIcon} />
                    }
                </i>);
            starItem.push(_item);
        }
        return <div ref='root' className={classnames('tRate tCL', {
            [t.props.className]: !!t.props.className
        })}>
            {starItem}
        </div>;
    }
}

Rate.defaultProps = {
    iconNumber: 5,
    defaultIcon: 'tingle-rate-icon',
    activeIcon: 'tingle-rate-icon-active',
    grade: 0
};

// http://facebook.github.io/react/docs/reusable-components.html
Rate.propTypes = {
    className: React.PropTypes.string,
    iconNumber: React.PropTypes.number,
    defaultIcon: React.PropTypes.string,
    activeIcon: React.PropTypes.string,
    grade: React.PropTypes.number
};

Rate.displayName = 'Rate';

module.exports = Rate;
