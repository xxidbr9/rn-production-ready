// declare module NodeJS {
//   interface Global extends NodeJS.Global {
//     HermesInternal?: object;
//   }
// }

interface Global extends NodeJS.Global {
  HermesInternal?: object
}
