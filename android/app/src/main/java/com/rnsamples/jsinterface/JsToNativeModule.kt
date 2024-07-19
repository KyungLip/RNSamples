package com.rnsamples.jsinterface

import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class JsToNativeModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    var isResovle: Boolean = false

    //返回Module名称，用于在JS调用
    override fun getName(): String {
        return "JsToNativeModule"
    }

    //导出常量
    override fun getConstants(): MutableMap<String, Any>? {
        return super.getConstants()
    }


    @ReactMethod
    fun sayHi(msg: String) {
        Log.i("kylp", "收到来自JS的消息：${msg}")
    }

    @ReactMethod
    fun sayHiWithCallback(msg: String, callback: Callback) {
        Log.i("kylp", "收到来自JS的消息：${msg}")
        callback.invoke("你好 JS! 我是来自Native-Android的消息。")
    }

    @ReactMethod
    fun sayHiWithPromise(msg: String, promise: Promise) {
        Log.i("kylp", "收到来自JS的消息：${msg}")
        if (isResovle) {
            promise.resolve("你好 JS! 我是来自Native-Android的消息。")
        } else {
            promise.reject("你好 JS! 你被拒绝了", "Ï我是来自Native-Android的消息。")
        }
        isResovle = !isResovle;
    }
}