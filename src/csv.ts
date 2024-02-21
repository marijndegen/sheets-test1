// import { Options, stringify } from "csv-stringify/sync";
// import moment from "moment";

// TODO figure out why bundler is not working:
// https://csv.js.org/stringify/distributions/browser_esm/

// This code works, but only on nodejs, not in the browser

import { Options, stringify } from "csv-stringify/browser/esm/sync";

export const toCsv = (data: any, options: Options): string => {
  // console.log('moment.defaultFormat("dddd"):', moment.now());
  if (!data || data.length === 0) {
    return "";
  }

  return stringify(data, options);
};

export const toCsvWithHeader = (
  data: any,
  columns: string[],
  options?: Omit<Options, "columns" | "header">
): string => {
  if (!data || data.length === 0 || !columns || columns.length === 0) {
    return "";
  }

  return stringify(data, {
    columns,
    header: true,
    ...(options || {}),
  });
};

// Some imports of csv-stringify
// import { stringify } from "csv-stringify/browser/esm/sync";
// import { stringify } from "csv-stringify/sync";

// import { stringify } from "../node_modules/csv-stringify/dist/esm/index";
// import { Options, stringify } from "csv-stringify/dist/esm/sync";
