import React from "react";
import "./ReactWorldCountriesMap.css";
interface IData {
    country: string;
    value: number;
}
interface IProps {
    data: IData[];
    title?: string;
    "value-prefix"?: string;
    "value-suffix"?: string;
    color?: string;
    tooltipBgColor?: string;
    tooltipTextColor?: string;
    size?: string;
}
export declare const ReactWorldCountriesMap: React.FC<IProps>;
export {};
