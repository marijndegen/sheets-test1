import { utils, write } from "xlsx";
export const toXlsx = (args) => {
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
    const workbook = utils.book_new();
    const worksheet = utils.json_to_sheet(filteredData);
    utils.book_append_sheet(workbook, worksheet, sheetName);
    return write(workbook, { bookType: "xlsx", type: "buffer" });
};
export const toXlsxWithHeader = () => {
    // todo implement
};
//# sourceMappingURL=xlsx.js.map