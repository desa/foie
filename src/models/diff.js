// var jsondiffpatch = require('jsondiffpatch').create({
//     // used to match objects when diffing arrays, by default only === operator is used
//     objectHash: function(obj) {
//         // this function is used only to when objects are not equal by ref
//         return obj._id || obj.id;
//     },
//     arrays: {
//         // default true, detect items moved inside the array (otherwise they will be registered as remove+add)
//         detectMove: true,
//         // default false, the value of items moved is not included in deltas
//         includeValueOnMove: false
//     },
//     textDiff: {
//         // default 60, minimum string length (left and right sides) to use text diff algorythm: google-diff-match-patch
//         minLength: 60
//     }
// });

//diffing model alg goes here
var jsondiffpatch = require('jsondiffpatch');
