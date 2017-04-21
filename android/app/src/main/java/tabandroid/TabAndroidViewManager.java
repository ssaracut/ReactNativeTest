package tabandroid;

import android.graphics.Color;
import android.support.annotation.Nullable;
import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.util.TypedValue;
import android.view.View;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.reactnativetest.R;

import java.util.Map;

/**
 * Created by Steven on 2017-03-28.
 */

public class TabAndroidViewManager extends ViewGroupManager<TabLayout> {
    private final static int COMMAND_SETUPWITHVIEWPAGER = 0;
    public static final String REACT_CLASS = "saracut.TabAndroid";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @ReactProp(name = "selectedTabIndicatorColor", customType = "Color")
    public void setSelectedTabIndicatorColor(TabLayout view, @Nullable Integer selectedTabIndicatorColor) {
        if (selectedTabIndicatorColor != null) {
            view.setSelectedTabIndicatorColor(selectedTabIndicatorColor);
        }
    }

    @ReactProp(name = "tabTextColors")
    public void setTabTextColors(TabLayout view, @Nullable ReadableArray tabTextColors) {
        if (tabTextColors != null && tabTextColors.size() == 2) {
            view.setTabTextColors(Color.parseColor(tabTextColors.getString(0)), Color.parseColor(tabTextColors.getString(1)));
        } else {
            //throw error
        }
    }

    @Override
    protected TabLayout createViewInstance(ThemedReactContext reactContext) {
        TabLayout tabLayout = new TabLayout(reactContext, null, R.style.AppTheme);

        TypedValue typedValue = new TypedValue();
        reactContext.getTheme().resolveAttribute(R.attr.colorPrimary, typedValue, true);
        tabLayout.setBackgroundColor(typedValue.data);
        tabLayout.setSelectedTabIndicatorColor(Color.WHITE);
        tabLayout.setTabTextColors(Color.parseColor("#B3FFFFFF"), Color.WHITE);

        return tabLayout;
    }

    @Override
    public boolean needsCustomLayoutForChildren() {
        // Return true, since TabLayout will lay out it's own children.
        return true;
    }

    @Override
    public void receiveCommand(TabLayout root, int commandId, @javax.annotation.Nullable ReadableArray args) {
        ViewPager viewPager = (ViewPager) root.getRootView().findViewById(args.getInt(0));
        root.setupWithViewPager(viewPager);
        ReadableArray tabTitles = args.getArray(1);

        if (root.getTabCount() == tabTitles.size()) {
            for (int i = 0; i < tabTitles.size(); i++) {
                root.getTabAt(i).setText(tabTitles.getString(i));
            }
        }
    }

    @Nullable
    @Override
    public Map<String, Integer> getCommandsMap() {
        return MapBuilder.of(
                "setupWithViewPager",
                COMMAND_SETUPWITHVIEWPAGER
        );
    }

    @Override
    public void addView(TabLayout parent, View child, int index) {
        //do nothing here as only TabItem instances can be added to a TabLayout
    }

}
