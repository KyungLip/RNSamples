import { NativeModules } from "react-native";

const { JsToNativeModule } = NativeModules

interface JsToNativeInterface {
    sayHi(msg: string): void;
    sayHiWithCallback(msg: string, callback: Function): void;
    sayHiWithPromise(msg: string): Promise<string>;
}

export default JsToNativeModule as JsToNativeInterface;