import { NavigationActions, StackActions } from 'react-navigation';
import { LOGIN_SCREEN } from '@Utilities/constants/screen.constants';

let globalNavigator;
let lastLocalScreens = [];
let loginNavigator;
let topNavigator;

/**
 * Set the ref global
 *
 * @param {ref} navigatorRef
 */
const setGlobalNavigator = (navigatorRef) => {
    globalNavigator = navigatorRef;
};

const setLoginNavigator = (navigatorRef) => {
    loginNavigator = navigatorRef;
};

/**
 * Navigate to another screen as global route
 *
 * @param {String} routeName
 * @param {Object} params
 */
const navigateLevelGlobal = (routeName, params) => {
    globalNavigator.dispatch(
        NavigationActions.navigate({
            key: routeName,
            routeName,
            params,
        }),
    );
};

/**
 * Use to reset all global stack and set a new Screen
 *
 * @param {String} screen
 * @param {Object} params
 */
const resetNavigationGlobal = (screen, params = {}) => {
    globalNavigator.dispatch(
        StackActions.reset({
            actions: [
                {
                    key: screen,
                    type: 'Navigation/NAVIGATE',
                    routeName: screen,
                    params,
                },
            ],
            index: 0,
        }),
    );
};

/**
 * Go back into global stack's screens
 *
 */
const popNavigationGlobal = () => {
    globalNavigator.dispatch(StackActions.pop());
};

/**
 * Set the local reference.
 *
 * @param {rer} navigatorRef
 */
const setLocalNavigator = (navigatorRef) => {
    topNavigator = navigatorRef;
};

/**
 * Navigate to another screen as local route
 *
 * @param {String} screen
 * @param {Object} params
 */
const navigateLevelLocal = (routeName, params = {}) => {
    const currentScreen = getCurrentLocalScreen();
    if (shouldReplaceScreen(currentScreen, routeName)) {
        replaceLocalScreen(currentScreen, {
            routeName,
            params,
        });
    } else if (shouldNavigateScreen(currentScreen, routeName)) {
        topNavigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
                action: { type: 'Navigation/NAVIGATE' },
                key: routeName,
            }),
        );
    }
};

/**
 * Use to reset all local stack and set a new Screen
 *
 * @param {String} screen
 * @param {Object} params
 */
const resetNavigationLocal = (screen, params = {}) => {
    topNavigator.dispatch(
        StackActions.reset({
            actions: [
                {
                    key: screen,
                    type: 'Navigation/NAVIGATE',
                    routeName: screen,
                    params,
                },
            ],
            index: 0,
        }),
    );
};

/**
 * Use to go back in to stack's screens
 *
 * @param {number} [numberGoBack=1]
 * @param {boolean} [inmediate=false]
 */
const popNavigationLocal = (numberGoBack = 1, inmediate = false) => {
    topNavigator.dispatch(
        StackActions.pop({
            n: numberGoBack,
            inmediate,
        }),
    );
};

const popToTopNavigationLocal = (immediate = false) => {
    topNavigator.dispatch(
        StackActions.popToTop({
            immediate,
        }),
    );
};

const getCurrentLocalScreen = () => {
    const { state = {} } = topNavigator;
    const { nav = {} } = state;
    const { routes = [] } = nav;
    return getLastScreen(routes);
};

const getRoutes = () => {
    const { state = {} } = topNavigator;
    const { nav = {} } = state;
    const { routes = [] } = nav;

    return routes;
};

const getLocalScreenAtPosition = (position) => {
    const routes = getRoutes();

    if (position >= routes.length) {
        return routes[routes.length - 1];
    }
    return routes[position];
};

const replaceLocalScreen = (screenToReplace, newScreen) => {
    const { routeName, params } = newScreen;
    topNavigator.dispatch(
        StackActions.replace({
            key: screenToReplace.key,
            newKey: routeName,
            routeName,
            params,
        }),
    );
};

const getLastLocalScreens = () => lastLocalScreens;

/**
 * Navigate to another screen inside the Login's stack
 *
 * @param {String} routeName
 * @param {Object} params
 */
const navigateLevelLogin = (routeName, params) => {
    loginNavigator.dispatch(
        NavigationActions.navigate({
            key: routeName,
            routeName,
            params,
        }),
    );
};

/**
 * Use to reset the Login's stack and set a new screen
 *
 * @param {String} screen
 * @param {Object} params
 */
const resetNavigationLogin = (screen, params = {}) => {
    loginNavigator.dispatch(
        StackActions.reset({
            actions: [
                {
                    key: screen,
                    type: 'Navigation/NAVIGATE',
                    routeName: screen,
                    params,
                },
            ],
            index: 0,
        }),
    );
};

/**
 * Go back to the Login's stack screens
 *
 */
const popNavigationLogin = () => {
    loginNavigator.dispatch(StackActions.pop());
};

const getLastScreen = (routes = []) => {
    const routesSize = routes.length;
    if (routesSize > 0) {
        return routes[routesSize - 1];
    }
    return {};
};

const shouldReplaceScreen = (currentScreen, routeName) => {
    const { params = {} } = currentScreen;
    const { isFromSmartQuestion = false } = params;
    return routeName === LOGIN_SCREEN && isFromSmartQuestion ? false : isFromSmartQuestion;
};

const shouldNavigateScreen = (currentScreen, nextRouteName) => {
    if (currentScreen.routeName !== nextRouteName) {
        return true;
    }
    return false;
};

/**
 * Method that replace screen
 */
const navigateReplaceScreen = (routeName, params = {}) => {
    const currentScreen = getCurrentLocalScreen();
    const newScreen = {
        routeName,
        params: { ...params, ...currentScreen.params },
    };
    replaceLocalScreen(currentScreen, newScreen);
};

/**
 * Method that log out deep or common
 */
const navigateLogout = (params) => {
    resetNavigationLocal(LOGIN_SCREEN);
};

export default {
    getCurrentLocalScreen,
    getLastLocalScreens,
    getLocalScreenAtPosition,
    navigateLevelGlobal,
    navigateLevelLocal,
    navigateLevelLogin,
    navigateLogout,
    navigateReplaceScreen,
    popNavigationGlobal,
    popNavigationLocal,
    popToTopNavigationLocal,
    popNavigationLogin,
    replaceLocalScreen,
    resetNavigationGlobal,
    resetNavigationLocal,
    resetNavigationLogin,
    setGlobalNavigator,
    setLocalNavigator,
    setLoginNavigator,
};
