//  callback hell is nested callback execution, If we run a callback inside a callback
// then it is called as callback hell or pyramid doom
// function download() {
//   console.log("downloading.....");
//   setTimeout(function process() {
//     console.log("precessing.....");
//     setTimeout(function done() {
//       console.log("download Done ... ");
//       setTimeout(function afterDone() {
//         console.log("requested photo is downloaded successfully.....");
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }

// download();
