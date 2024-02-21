// const isNodeEnvironment = () => {
//   try {
//     return (
//       Object.prototype.toString.call(global.process) === "[object process]"
//     );
//   } catch (e) {
//     return false;
//   }
// };

export { toCsv, toCsvWithHeader } from "./csv";
export { toXlsx, toXlsxWithHeader } from "./xlsx";
