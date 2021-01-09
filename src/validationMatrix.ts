import { StreamReading } from "./streamReading";

export const validationMatrix: {
    deviceModel: string;
    mfgData: string;
    address: string;
    streamReading?: StreamReading;
}[] = [
    { deviceModel: "h5075", mfgData: "88ec0002ccd65800", address: "" },
    {
        deviceModel: "h5075",
        mfgData: "88ec0002ff904000",
        address: "a4-c1-38-xx-xx-xx",
    },
    {
        deviceModel: "h5075",
        mfgData: "88ec0003516d5800",
        address: "a4:c1:38:xx:xx:xx",
    },
    {
        deviceModel: "h5072",
        mfgData: "88ec000309295f00",
        address: "a4:c1:38:45:xx:xx",
    },
    {
        deviceModel: "h5102",
        mfgData: "0100010103165564",
        address: "a4:c1:38:e2:xx:xx",
    },
];