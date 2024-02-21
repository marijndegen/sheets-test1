interface XlsxOptions {
    dataToExport: any[];
    sheetName?: string;
    toExclude?: string[];
}
export declare const toXlsx: (args: XlsxOptions) => any;
export declare const toXlsxWithHeader: () => void;
export {};
