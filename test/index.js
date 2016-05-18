var assert = require('assert');
var lib = require('../');

assert(!lib.polyfill);
assert(!lib.Promise);

assert(typeof lib.resolve === 'function');
assert(typeof lib.reject === 'function');
assert(typeof lib.all === 'function');
assert(typeof lib.race === 'function');

var p = new lib(function() {});
assert(typeof p.then === 'function');
assert(typeof p.catch === 'function');

console.log('all good');
