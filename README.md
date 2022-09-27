# backend-bad-connection

An example 'express' backend with GET, POST, PUT and DELETE endpoints implemented at the root of the server, to be deployed on Glitch.

The purpose of this backend is to simulate an untrustworthy REST endpoint and/or a bad connection.

It is also useful in the learning and testing of Promise concepts in Javascript.

## Note

Please replace `http://localhost:3000` in all the examples with the correct hostname if you are using the Glitch deployment.

> _Update:_ the glitch hostname as of this writing is `https://backend-bad-connection.glitch.me/`

## Basic examples

### Constant delay of 1s

Just call the root of the backend without any parameters:

> ```
> http://localhost:3000/
> ```

The result is a constant delay of 1000 ms and a successful request.

### Variable delay, more than 1s

Use the `delay_range` query parameter. For example:

> ```
> http://localhost:3000/?delay_range=5000
> ```

will result in a variable delay from 1s to 1 + 5 = 6s, and a successful request.

### A request that can fail

Use the `can_fail` query parameter:

> ```
> http://localhost:3000/?can_fail
> ```

This will result in a request that sometimes fails (50% chance) with an HTTP return code of 404 and an empty body.

### A request with a constant delay

Use the `min_delay` query parameter. For example:

> ```
> http://localhost:3000/?min_delay=5000
> ```

will result in a constant delay of 5s, and a successful request.

## Advanced examples

These are more examples of requests that have constant/variable delays and are sometimes susceptible to failure.

For each one in the list, try to answer the following questions:
- Is the delay associated with the request constant or variable?
- If variable, what is the minimum and the maximum values for the delay
- Can the request fail sometimes?

### List of advanced examples

1. `http://localhost:3000/?min_delay=0&can_fail`
1. `http://localhost:3000/?delay_range=0&can_fail`
1. `http://localhost:3000/?min_delay=0&delay_range=10000`
1. `http://localhost:3000/?can_fail=false`
1. `http://localhost:3000/?can_fail=false&delay_range=9000`
1. `http://localhost:3000/?can_fail&delay_range=10000&min_delay=0`

## Make your own

Try to come up with requests that:
1. Fail sometimes with no delay
1. Do not fail with a constant delay of 10s
1. Fail sometimes with a variable delay from 5s to 10s

