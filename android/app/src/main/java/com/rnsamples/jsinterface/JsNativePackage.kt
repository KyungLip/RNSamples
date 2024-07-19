package com.rnsamples.jsinterface


import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.rnsamples.jsviews.TextViewManager

class JsNativePackage : ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): MutableList<NativeModule> {
        return mutableListOf(JsToNativeModule(p0))
    }

    override fun createViewManagers(p0: ReactApplicationContext): List<TextViewManager> {

        return listOf(TextViewManager(p0))
    }
}