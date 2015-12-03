# tingle-rate [![npm version](https://badge.fury.io/js/tingle-rate.svg)](http://badge.fury.io/js/tingle-rate)

## Install

```js
npm install tingle-rate --save
```

截图：
![tingle-rate](https://img.alicdn.com/tps/TB11XrrKpXXXXc0aXXXXXXXXXXX-726-694.png)

## usage

```js
<Rate totalScore={5} height={30} gap={15} score={t.state.score} onChange={t.handleChange.bind(t)} />
```

## Props

#### className

描述：自定义样式的class名称。

类型：String

默认：''

必选：否

#### totalScore

描述：icon的个数，即总分。

类型：Number

默认：5

必选：否



#### height

描述：icon的尺寸，icon一定是正方形的，也就是width=height。

类型：Number 或 String

默认：30

必选：否


#### gap

描述：每一项的padding-let 和 padding-right的总和。但第一项的padding-let和最后一项padding-right均为: 0 !important。

类型：Number 或 String

默认：10

必选：否


#### score

描述：默认已得到的分数。

类型：Number

默认：0

必选：否


#### onChange

描述：回调函数，会返回选中的分数onChange(currentScore)。

类型：Function

默认：noop

必选：否



## Links

- [Issues](http://github.com/tinglejs/tingle-rate/issues)
