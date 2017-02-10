# USAGE & INFO
Outputs the hash of the given file by the given algorithm.

Possible algorithms supported:

* sha1
* sha256
* md5

## Prequisites
`npm i`

## Output all the algorithms
`node index.js path/to/file`

## Output with command line options

### Examples

Get sha1:

`node index.js path/to/file --sha1`

Get sha256:

`node index.js path/to/file --sha256`

Get md5:

`node index.js path/to/file --md5`

Get md5 and sha1:

`node index.js path/to/file --md5 --sha1`

## Run tests
`npm test`
