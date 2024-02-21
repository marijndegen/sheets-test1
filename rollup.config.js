// import pkg from "./package.json" assert { type: "json" };

// export default {
//   // Mark package dependencies as "external". Rest of configuration
//   // omitted.
//   external: Object.keys(pkg.dependencies),
// };

export default {
  input: "lib/esm/index.js",
  output: {
    file: "lib/umd/index.js",
    format: "umd",
    name: "sheets-test1",
    sourcemap: true,
    globals: {
      moment: "moment",
      "csv-stringify/sync": "csvStringifySync", // You need to define a global variable name for 'csv-stringify/sync'
    },
  },
  external: ["moment", "csv-stringify/sync"], // Specify both as external
};
