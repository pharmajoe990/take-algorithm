# Clover coding test

In this test we ask that you take the market data in `market.json` to calculate the value of a portfolio over the series of days in the portfolio

To calculate the value of a portfolio for a day you need to take the last security price for each day, and multiple the price by the quantity

## Scenario

Given a sample `market.json` of

```
[
  {"time": "2018-01-13T01:00:00Z", "security": "VGS", "price": 69.26},
  {"time": "2018-01-13T01:00:00Z", "security": "AAA", "price": 50.11},
  {"time": "2018-01-13T02:00:00Z", "security": "VGS", "price": 69.36},
  {"time": "2018-01-14T01:00:00Z", "security": "VGS", "price": 69.39},
  {"time": "2018-01-13T01:00:00Z", "security": "AAA", "price": 69.42}
]
```

Note: this market data can appear out of order


The daily prices for VGS would be

| Date       | Security | Price |
| ---------- | -------- | ----- |
| 2018-01-13 | VGS      | 69.36 |
| 2018-01-14 | VGS      | 69.39 |
| 2018-01-13 | AAA      | 50.11 |
| 2018-01-14 | AAA      | 49.86 |

We want to combine this with `portfolio.json` which looks like

```
[
  {"date": "2018-01-13", "holdings": {"VGS": 5, "AAA": 6}},
  {"date": "2018-01-13", "holdings": {"VGS": 7, "AAA": 6}},
]
```

The goal of this test is to write a program (in Ruby), which takes these two data files and returns an output JSON describing the portoflio balance for each day

Sample Output

```
[
  {
    "date": "2018-01-13",
    "holdings": {
      "VGS": 346.3,
      "AAA": 300.66,
    }
  },
  {
    "date": "2018-01-14",
    "holdings": {
      "VGS": 485.73,
      "AAA": 299.16
    }
  }
]
```

## What we are looking for

* Code written as you would for a production service
* Tests as appropriate
* A readme with any additional information you'd like to include

## Assumptions

* All times are UTC
* That you will stop after spending two hours on this challenge
* That there will be a security price for every day in a portfolio

## Discussion

* Is there anything you'd like to improve
* Could there be any improvements to the data structures used

## Submitting your solution

Assuming you use Git, when you’re ready to submit your solution, please use `git bundle` to package up a copy of your repository (with complete commit history) as a single file and send it to us as an email attachment.

```
git bundle create clover-coding-test-<your name>.bundle master
```
