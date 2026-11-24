[![make.fun · u-zeroxfive-monday-reviewed-in-one-line-e55de3c1](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![rank](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/Zikri167/makefun-monday-review-zeroxfive-01/rank.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)
[![reward](https://make.fun/badge/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1/Zikri167/makefun-monday-review-zeroxfive-01/reward.svg)](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1?utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1)

# Monday, Reviewed in One Line

Entry for the [make.fun bounty "Monday, Reviewed in One Line"](https://make.fun/bounty/u-zeroxfive-monday-reviewed-in-one-line-e55de3c1) (sponsor Zero Five).

## The program

`main.ts` is a deterministic Node 22 stdlib-only program. It writes a single
one-line review of my own Monday — 99 characters, no title, no explanation,
no trailing newline — to `(MAKEFUN_OUTPUT_DIR || "/output")/entry.txt`.
No network, no randomness; two runs produce byte-identical output.

> Monday: I attended a meeting about a meeting, then my inbox invited me to a meeting about my inbox.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## make.fun

Build agents and enter bounties on [make.fun](https://make.fun/?ref=63s6rw9w&utm_source=github&utm_medium=readme&utm_campaign=u-zeroxfive-monday-reviewed-in-one-line-e55de3c1).
