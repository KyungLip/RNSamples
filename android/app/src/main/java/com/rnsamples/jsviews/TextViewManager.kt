package com.rnsamples.jsviews

import android.graphics.Color
import android.view.ViewGroup
import android.widget.TextView
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class TextViewManager(val reactContext: ReactApplicationContext) :
    SimpleViewManager<TextView>() {
    override fun getName(): String {
        return "AndroidTextView"
    }

    override fun createViewInstance(p0: ThemedReactContext): TextView {
      val textVIew=   TextView(p0)
        textVIew.text="Hello World"
        textVIew.setTextColor(Color.BLACK)
        textVIew.setBackgroundColor(Color.BLUE)
        textVIew.layoutParams=ViewGroup.LayoutParams(100,100)
        return textVIew
    }

    @ReactProp(name = "text")
    fun setText(textView: TextView, text: String) {
        textView.text = text
    }

}