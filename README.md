Just messing with React Native's default app. Noticed that the Xamarin Forms default app was a little more in-depth so figured I'd try to copy some of the functionality.

First thing I noticed was that there was no TabLayout component as part of the default React Native component library.  After searching around for a user created a component I noticed a lot of people don't actually create native components, they just create native looking elements through JavaScript based on existing components.  Not very happy with this I decided I'd see what was involved in creating a TabLayout component over the bridge.

During this exercise I have found some other people have created a TabLayout component but it's either bundled with more components or it seems even more complicated that it needed to be.  I'll eventually look at pulling the component out or maybe contributing it back.

![ReactNative TabLayout](samples/RNTabLayout.gif "ReactNative TabLayout") ![Xamarin TabLayout](samples/XamarinTabLayout.gif "Xamarin TabLayout")