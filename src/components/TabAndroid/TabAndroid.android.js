'use strict';

import React, { PropTypes } from 'react';
import { NativeModules, requireNativeComponent, View, UIManager, findNodeHandle } from 'react-native';
import ColorPropType from 'ColorPropType';

class AndroidTab extends React.Component {

  static propTypes = {
    ...View.propTypes, // include the default view properties
    selectedTabIndicatorColor: ColorPropType,
    tabTextColors: PropTypes.arrayOf(ColorPropType)
  }

  componentDidMount() {
    const viewPagerId = findNodeHandle(this.refs['refViewPager']);
    const tabLayoutId = findNodeHandle(this.refs['refTabAndroid']);
    if (tabLayoutId && viewPagerId) {
      UIManager.dispatchViewManagerCommand(
        tabLayoutId,
        UIManager["saracut.TabAndroid"].Commands["setupWithViewPager"],
        [viewPagerId, this.props.tabTitles]
      );
    }
  }

  render() {
    const childToRender = React.cloneElement(this.props.children, {
      ref: 'refViewPager'
    })

    return (
      <View style={{ flex: 1 }}>
        <TabAndroid
          ref='refTabAndroid'
          {...this.props}>
        </TabAndroid>
        {childToRender}
      </View>
    )
  }
}

var TabAndroid = requireNativeComponent('saracut.TabAndroid', AndroidTab);

module.exports = AndroidTab;