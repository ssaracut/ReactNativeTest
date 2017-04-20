package navigatorandroid;

import android.app.Activity;
import android.app.Fragment;
import android.app.FragmentManager;
import android.app.FragmentTransaction;
import android.support.design.widget.TabLayout;
import android.view.View;
import android.view.ViewGroup;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;

import java.util.List;

/**
 * Created by Steven on 2017-04-18.
 */

public class NavigatorAndroidViewManager  extends ReactViewManager {

    public static final String REACT_CLASS = "NavigatorAndroid";
    private Activity activity;
    private ReactFragment currentFragment;

    private static FragmentManager fm=null;
    private static FragmentTransaction ft=null;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public ReactViewGroup createViewInstance(ThemedReactContext context) {
        activity = context.getCurrentActivity();
        return new ReactViewGroup(context);
    }

    @Override
    public void addView(ReactViewGroup parent, View child, int index) {
        //super.addView(parent,child,index);

        if(currentFragment == null){
            fm = activity.getFragmentManager();
            ft = fm.beginTransaction();
            currentFragment = new ReactFragment();
            ft.add(parent.getId(), (Fragment)currentFragment);
        }
        currentFragment.addView(child);
        if(ft != null && index==2){
            ft.commit();
        }
    }
//
//    @Override
//    public void addViews(ReactViewGroup parent, List<View> views) {
//        super.addViews(parent, views);
//    }
}
