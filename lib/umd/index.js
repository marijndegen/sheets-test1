(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('csv-stringify/browser/esm/sync'), require('xlsx')) :
    typeof define === 'function' && define.amd ? define(['exports', 'csv-stringify/browser/esm/sync', 'xlsx'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["sheets-test1"] = {}, global.sync, global.xlsx));
})(this, (function (exports, sync, xlsx) { 'use strict';

    // import { Options, stringify } from "csv-stringify/sync";
    // import moment from "moment";
    // TODO figure out why bundler is not working:
    // https://csv.js.org/stringify/distributions/browser_esm/
    // This code works, but only on nodejs, not in the browser
    const toCsv = (data, options) => {
        // console.log('moment.defaultFormat("dddd"):', moment.now());
        if (!data || data.length === 0) {
            return "";
        }
        return sync.stringify(data, options);
    };
    const toCsvWithHeader = (data, columns, options) => {
        if (!data || data.length === 0 || !columns || columns.length === 0) {
            return "";
        }
        return sync.stringify(data, Object.assign({ columns, header: true }, (options || {})));
    };
    // Some imports of csv-stringify
    // import { stringify } from "csv-stringify/browser/esm/sync";
    // import { stringify } from "csv-stringify/sync";
    // import { stringify } from "../node_modules/csv-stringify/dist/esm/index";
    // import { Options, stringify } from "csv-stringify/dist/esm/sync";

    const toXlsx = (args) => {
        const { dataToExport, sheetName = "Sheet1", toExclude = [] } = args;
        if (!dataToExport || dataToExport.length === 0) {
            return null;
        }
        const filteredData = dataToExport.map((record) => {
            const filteredRecord = {};
            Object.keys(record).forEach((key) => {
                if (!toExclude.includes(key)) {
                    filteredRecord[key] = record[key];
                }
            });
            return filteredRecord;
        });
        const workbook = xlsx.utils.book_new();
        const worksheet = xlsx.utils.json_to_sheet(filteredData);
        xlsx.utils.book_append_sheet(workbook, worksheet, sheetName);
        return xlsx.write(workbook, { bookType: "xlsx", type: "buffer" });
    };
    const toXlsxWithHeader = () => {
        // todo implement
    };

    exports.toCsv = toCsv;
    exports.toCsvWithHeader = toCsvWithHeader;
    exports.toXlsx = toXlsx;
    exports.toXlsxWithHeader = toXlsxWithHeader;

}));
//# sourceMappingURL=index.js.map
