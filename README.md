This is a pretty simple implementation of a take algorithm, where a number of elements are 'taken' from a source array.

eg.

`take(['foo','bar','baz'], 2) === ['foo','bar']`

When the number of elements to take is greater than the array length, go back to the start eg.

`take(['foo','bar','baz'], 5) === ['foo','bar','baz', 'foo','bar']`
