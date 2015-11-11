# tingle-rate [![npm version](https://badge.fury.io/js/tingle-rate.svg)](http://badge.fury.io/js/tingle-rate)

## Install

```js
npm install tingle-rate --save
```

截图：
[tingle-rate](//img.alicdn.com/tps/TB1gUbDKpXXXXbqXXXXXXXXXXXX-582-944.png)

## usage

```js
<Rate iconNumber={5} defaultIcon={'tingle-rate-icon'} activeIcon={'tingle-rate-icon-active'} grade={t.state.grade} onChange={t.handleChange.bind(t)} />
```

## Props

| 配置项 | 必填 | 默认值 | 功能/备注 |
|---|----|---|----|
|className| optional |-|-|
|totalScore| optional |-|总分|
|height| optional |-|默认30px，icon一定是正方形的，也就是width=height|
|score|optional|-|默认分数|
|onChange| optional |-|返回选中的score|


## Links

- [Fire a bug/Issues](http://github.com/tinglejs/tingle-rate/issues)
