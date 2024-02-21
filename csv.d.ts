import { Options } from "csv-stringify/sync";
export declare const toCsv: (data: any, options: Options) => string;
export declare const toCsvWithHeader: (data: any, columns: string[], options?: Omit<Options, "columns" | "header">) => string;
