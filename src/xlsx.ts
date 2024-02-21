import { utils, write } from "xlsx";

interface XlsxOptions {
  dataToExport: any[];
  sheetName?: string;
  toExclude?: string[];
}

export const toXlsx = (args: XlsxOptions) => {
  const { dataToExport, sheetName = "Sheet1", toExclude = [] } = args;
  if (!dataToExport || dataToExport.length === 0) {
    return null;
  }

  const filteredData = dataToExport.map((record) => {
    const filteredRecord: any = {};
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
