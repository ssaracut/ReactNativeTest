package navigatorandroid;

import android.app.Activity;
import android.app.FragmentManager;
import android.content.Intent;
import android.graphics.Color;
import android.support.annotation.Nullable;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.util.TypedValue;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;
import com.reactnativetest.MainActivity;
import com.reactnativetest.R;

import java.util.Map;

/**
 * Created by Steven on 2017-04-17.
 */

public class NavigatorAndroidModule extends ReactContextBaseJavaModule {

    private final static int COMMAND_NAVIGATE = 0;
    public static final String REACT_CLASS = "NavigatorAndroid";
    private ReadableMap routes = null;
//    private String initalRoute = "";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "routes")
    public void setRoutes(ReactViewGroup view, @Nullable ReadableMap routes) {
        this.routes = routes;
    }

//    @ReactProp(name = "initialRoute")
//    public void setInitialRoute(ReactViewGroup view, @Nullable String initialRoute) {
//        this.initalRoute = initialRoute;
//    }

    NavigatorAndroidModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @ReactMethod
    public void navigate(final int nextScreen) {
        /* I think what I want to do is create a function that says navigate, and accepts a view reference
        which then some how executes an intend to generate a new activity with which the view reference gets
        attached, and hopefully that achieves a navigation */
        FragmentManager fm = getReactApplicationContext().getCurrentActivity().getFragmentManager();

        /* lets assume nextScreen refers to a fragment id, and we some how transition
        between the current fragment and the new id.*/

        /* Testing just firing up a new activity, considering how react works this is probably
        the least desirable since I'm not sure how we associate certain parts of a view hierarchy
        with certain activities.
         */
        Activity currentActivity = getCurrentActivity();
        final Intent testIntent = new Intent(getReactApplicationContext(),MainActivity.class);
        currentActivity.startActivity(testIntent);
    }

}
