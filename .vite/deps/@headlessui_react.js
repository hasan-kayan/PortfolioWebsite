import {
  require_react_dom
} from "./chunk-JFXI6CLD.js";
import {
  __toESM,
  require_react
} from "./chunk-DVCWAFVK.js";

// node_modules/@react-aria/utils/dist/useLayoutEffect.mjs
var import_react = __toESM(require_react(), 1);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, import_react.default).useLayoutEffect : () => {
};

// node_modules/@react-aria/utils/dist/useEffectEvent.mjs
var import_react2 = __toESM(require_react(), 1);
function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
  const ref = (0, import_react2.useRef)(null);
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    ref.current = fn;
  }, [
    fn
  ]);
  return (0, import_react2.useCallback)((...args) => {
    const f21 = ref.current;
    return f21 === null || f21 === void 0 ? void 0 : f21(...args);
  }, []);
}

// node_modules/@react-aria/utils/dist/useValueEffect.mjs
var import_react3 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useId.mjs
var import_react5 = __toESM(require_react(), 1);

// node_modules/@react-aria/ssr/dist/SSRProvider.mjs
var import_react4 = __toESM(require_react(), 1);
var $b5e257d569688ac6$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $b5e257d569688ac6$var$SSRContext = (0, import_react4.default).createContext($b5e257d569688ac6$var$defaultContext);
var $b5e257d569688ac6$var$IsSSRContext = (0, import_react4.default).createContext(false);
var $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $b5e257d569688ac6$var$componentIds = /* @__PURE__ */ new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled2 = false) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  let ref = (0, import_react4.useRef)(null);
  if (ref.current === null && !isDisabled2) {
    var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, import_react4.default).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
    if (currentOwner) {
      let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
      if (prevComponentValue == null)
        $b5e257d569688ac6$var$componentIds.set(currentOwner, {
          id: ctx.current,
          state: currentOwner.memoizedState
        });
      else if (currentOwner.memoizedState !== prevComponentValue.state) {
        ctx.current = prevComponentValue.id;
        $b5e257d569688ac6$var$componentIds.delete(currentOwner);
      }
    }
    ref.current = ++ctx.current;
  }
  return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
  let ctx = (0, import_react4.useContext)($b5e257d569688ac6$var$SSRContext);
  if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
  let prefix = ctx === $b5e257d569688ac6$var$defaultContext && false ? "react-aria" : `react-aria${ctx.prefix}`;
  return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
  let id = (0, import_react4.default).useId();
  let [didSSR] = (0, import_react4.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
  let prefix = didSSR || false ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
  return defaultId || `${prefix}-${id}`;
}
var $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, import_react4.default)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
  return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
  return true;
}
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
  return () => {
  };
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
  if (typeof (0, import_react4.default)["useSyncExternalStore"] === "function") return (0, import_react4.default)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
  return (0, import_react4.useContext)($b5e257d569688ac6$var$IsSSRContext);
}

// node_modules/@react-aria/utils/dist/useId.mjs
var $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB) return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}

// node_modules/@react-aria/utils/dist/chain.mjs
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks) if (typeof callback === "function") callback(...args);
  };
}

// node_modules/@react-aria/utils/dist/domHelpers.mjs
var $431fbd86ca7dc216$export$b204af158042fbac = (el) => {
  var _el_ownerDocument;
  return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
var $431fbd86ca7dc216$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el) return el;
  const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
  return doc.defaultView || window;
};

// node_modules/clsx/dist/clsx.mjs
function r(e8) {
  var t11, f21, n13 = "";
  if ("string" == typeof e8 || "number" == typeof e8) n13 += e8;
  else if ("object" == typeof e8) if (Array.isArray(e8)) {
    var o17 = e8.length;
    for (t11 = 0; t11 < o17; t11++) e8[t11] && (f21 = r(e8[t11])) && (n13 && (n13 += " "), n13 += f21);
  } else for (f21 in e8) e8[f21] && (n13 && (n13 += " "), n13 += f21);
  return n13;
}
function clsx() {
  for (var e8, t11, f21 = 0, n13 = "", o17 = arguments.length; f21 < o17; f21++) (e8 = arguments[f21]) && (t11 = r(e8)) && (n13 && (n13 += " "), n13 += t11);
  return n13;
}
var clsx_default = clsx;

// node_modules/@react-aria/utils/dist/mergeProps.mjs
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i15 = 1; i15 < args.length; i15++) {
    let props = args[i15];
    for (let key in props) {
      let a20 = result[key];
      let b6 = props[key];
      if (typeof a20 === "function" && typeof b6 === "function" && // This is a lot faster than a regex.
      key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */
      65 && key.charCodeAt(2) <= /* 'Z' */
      90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a20, b6);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a20 === "string" && typeof b6 === "string") result[key] = (0, clsx_default)(a20, b6);
      else if (key === "id" && a20 && b6) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a20, b6);
      else result[key] = b6 !== void 0 ? b6 : a20;
    }
  }
  return result;
}

// node_modules/@react-aria/utils/dist/focusWithoutScrolling.mjs
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
    preventScroll: true
  });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e8) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
      element: parent,
      scrollTop: parent.scrollTop,
      scrollLeft: parent.scrollLeft
    });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
    element: rootScrollingElement,
    scrollTop: rootScrollingElement.scrollTop,
    scrollLeft: rootScrollingElement.scrollLeft
  });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/@react-aria/utils/dist/platform.mjs
function $c87311424ea30a05$var$testUserAgent(re2) {
  var _window_navigator_userAgentData;
  if (typeof window === "undefined" || window.navigator == null) return false;
  return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand) => re2.test(brand.brand))) || re2.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re2) {
  var _window_navigator_userAgentData;
  return typeof window !== "undefined" && window.navigator != null ? re2.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
  let res = null;
  return () => {
    if (res == null) res = fn();
    return res;
  };
}
var $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
var $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
var $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
var $c87311424ea30a05$export$e1865c3bedcd822b = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
var $c87311424ea30a05$export$78551043582a6a98 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
var $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
var $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
var $c87311424ea30a05$export$b7d78993b74f766d = $c87311424ea30a05$var$cached(function() {
  return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

// node_modules/@react-aria/utils/dist/openLink.mjs
var import_react6 = __toESM(require_react(), 1);
var $ea8dcbcb9ea1b556$var$RouterContext = (0, import_react6.createContext)({
  isNative: true,
  open: $ea8dcbcb9ea1b556$var$openSyntheticLink,
  useHref: (href) => href
});
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  var _window_event_type, _window_event;
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
    if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
    else ctrlKey = true;
  }
  let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    bubbles: true,
    cancelable: true
  });
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
  if (target instanceof HTMLAnchorElement) open(target);
  else if (target.hasAttribute("data-href")) {
    let link = document.createElement("a");
    link.href = target.getAttribute("data-href");
    if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
    if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
    if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
    if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
    if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
    target.appendChild(link);
    open(link);
    target.removeChild(link);
  }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
  $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link) => $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}

// node_modules/@react-aria/utils/dist/runAfterTransition.mjs
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined") return;
  function isTransitionEvent(event) {
    return "propertyName" in event;
  }
  let onTransitionStart = (e8) => {
    if (!isTransitionEvent(e8) || !e8.target) return;
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e8.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e8.target, transitions);
      e8.target.addEventListener("transitioncancel", onTransitionEnd, {
        once: true
      });
    }
    transitions.add(e8.propertyName);
  };
  let onTransitionEnd = (e8) => {
    if (!isTransitionEvent(e8) || !e8.target) return;
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e8.target);
    if (!properties) return;
    properties.delete(e8.propertyName);
    if (properties.size === 0) {
      e8.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e8.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks) cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
  else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
    else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}

// node_modules/@react-aria/utils/dist/useDrag1D.mjs
var import_react7 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useGlobalListeners.mjs
var import_react8 = __toESM(require_react(), 1);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react8.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react8.useCallback)((eventTarget, type, listener, options) => {
    var _globalListeners_current_get;
    let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react8.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react8.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/@react-aria/utils/dist/useObjectRef.mjs
var import_react9 = __toESM(require_react(), 1);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react9.useRef)(null);
  return (0, import_react9.useMemo)(() => ({
    get current() {
      return objRef.current;
    },
    set current(value) {
      objRef.current = value;
      if (typeof forwardedRef === "function") forwardedRef(value);
      else if (forwardedRef) forwardedRef.current = value;
    }
  }), [
    forwardedRef
  ]);
}

// node_modules/@react-aria/utils/dist/useUpdateEffect.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useResizeObserver.mjs
var import_react11 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useSyncRef.mjs
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        if (context.ref) context.ref.current = null;
      };
    }
  });
}

// node_modules/@react-aria/utils/dist/useViewportSize.mjs
var import_react12 = __toESM(require_react(), 1);
var $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;

// node_modules/@react-aria/utils/dist/useDescription.mjs
var import_react13 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useEvent.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/isVirtualEvent.mjs
function $6a7db85432448f7f$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted) return true;
  if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
  return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}

// node_modules/@react-aria/utils/dist/useDeepMemo.mjs
var import_react15 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useFormReset.mjs
var import_react16 = __toESM(require_react(), 1);

// node_modules/@react-aria/utils/dist/useLoadMore.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/@react-stately/utils/dist/useControlledState.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/textSelection.mjs
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state === "default") {
      const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
      $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ((0, $c87311424ea30a05$export$fedb369cb70207f1)()) {
    if ($14c0b72509d70225$var$state !== "disabled") return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      (0, $bbed8b41f857bcc0$export$24490316f764c430)(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
      let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
      if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
      if (target.getAttribute("style") === "") target.removeAttribute("style");
      $14c0b72509d70225$var$modifiedElementMap.delete(target);
    }
  }
}

// node_modules/@react-aria/interactions/dist/context.mjs
var import_react19 = __toESM(require_react(), 1);
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, import_react19.default).createContext({
  register: () => {
  }
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";

// node_modules/@swc/helpers/esm/_class_apply_descriptor_get.js
function _class_apply_descriptor_get(receiver, descriptor) {
  if (descriptor.get) return descriptor.get.call(receiver);
  return descriptor.value;
}

// node_modules/@swc/helpers/esm/_class_extract_field_descriptor.js
function _class_extract_field_descriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}

// node_modules/@swc/helpers/esm/_class_private_field_get.js
function _class_private_field_get(receiver, privateMap) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
  return _class_apply_descriptor_get(receiver, descriptor);
}

// node_modules/@swc/helpers/esm/_check_private_redeclaration.js
function _check_private_redeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_init.js
function _class_private_field_init(obj, privateMap, value) {
  _check_private_redeclaration(obj, privateMap);
  privateMap.set(obj, value);
}

// node_modules/@swc/helpers/esm/_class_apply_descriptor_set.js
function _class_apply_descriptor_set(receiver, descriptor, value) {
  if (descriptor.set) descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}

// node_modules/@swc/helpers/esm/_class_private_field_set.js
function _class_private_field_set(receiver, privateMap, value) {
  var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
  _class_apply_descriptor_set(receiver, descriptor, value);
  return value;
}

// node_modules/@react-aria/interactions/dist/usePress.mjs
var import_react20 = __toESM(require_react(), 1);
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react20.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  if (context) {
    let { register, ...contextProps } = context;
    props = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(contextProps, props);
    register();
  }
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(context, props.ref);
  return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /* @__PURE__ */ new WeakMap();
var $f6c31cce2adf654f$var$PressEvent = class {
  continuePropagation() {
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return (0, _class_private_field_get)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
  }
  constructor(type, pointerType, originalEvent, state) {
    (0, _class_private_field_init)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
      writable: true,
      value: void 0
    });
    (0, _class_private_field_set)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
    var _state_target;
    let currentTarget = (_state_target = state === null || state === void 0 ? void 0 : state.target) !== null && _state_target !== void 0 ? _state_target : originalEvent.currentTarget;
    const rect = currentTarget === null || currentTarget === void 0 ? void 0 : currentTarget.getBoundingClientRect();
    let x6, y9 = 0;
    let clientX, clientY = null;
    if (originalEvent.clientX != null && originalEvent.clientY != null) {
      clientX = originalEvent.clientX;
      clientY = originalEvent.clientY;
    }
    if (rect) {
      if (clientX != null && clientY != null) {
        x6 = clientX - rect.left;
        y9 = clientY - rect.top;
      } else {
        x6 = rect.width / 2;
        y9 = rect.height / 2;
      }
    }
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
    this.x = x6;
    this.y = y9;
  }
};
var $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled: isDisabled2,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _6,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let [isPressed, setPressed] = (0, import_react20.useState)(false);
  let ref = (0, import_react20.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $03deb23ff14920c4$export$4eaf04e54aa8eed6)();
  let triggerPressStart = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2 || state.didFirePressStart) return false;
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(true);
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType, wasPressed = true) => {
    let state = ref.current;
    if (!state.didFirePressStart) return false;
    state.ignoreClickAfterPress = true;
    state.didFirePressStart = false;
    state.isTriggeringEvent = true;
    let shouldStopPropagation = true;
    if (onPressEnd) {
      let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
      onPressEnd(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) onPressChange(false);
    setPressed(false);
    if (onPress && wasPressed && !isDisabled2) {
      let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
      onPress(event);
      shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
    }
    state.isTriggeringEvent = false;
    return shouldStopPropagation;
  });
  let triggerPressUp = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled2) return false;
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    let state = ref.current;
    if (state.isPressed && state.target) {
      if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
    }
  });
  let cancelOnPointerExit = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    if (shouldCancelOnPointerExit) cancel(e8);
  });
  let pressProps = (0, import_react20.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e8) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e8.nativeEvent, e8.currentTarget) && e8.currentTarget.contains(e8.target)) {
          var _state_metaKeyEvents;
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e8.target, e8.key)) e8.preventDefault();
          let shouldStopPropagation = true;
          if (!state.isPressed && !e8.repeat) {
            state.target = e8.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e8, "keyboard");
            let originalTarget = e8.currentTarget;
            let pressUp = (e9) => {
              if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e9, originalTarget) && !e9.repeat && originalTarget.contains(e9.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e9), "keyboard");
            };
            addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "keyup", (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(pressUp, onKeyUp), true);
          }
          if (shouldStopPropagation) e8.stopPropagation();
          if (e8.metaKey && (0, $c87311424ea30a05$export$9ac100e40613ea10)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e8.key, e8.nativeEvent);
        } else if (e8.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
      },
      onClick(e8) {
        if (e8 && !e8.currentTarget.contains(e8.target)) return;
        if (e8 && e8.button === 0 && !state.isTriggeringEvent && !(0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7).isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled2) e8.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, $6a7db85432448f7f$export$60278871457622de)(e8.nativeEvent))) {
            if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
            let stopPressStart = triggerPressStart(e8, "virtual");
            let stopPressUp = triggerPressUp(e8, "virtual");
            let stopPressEnd = triggerPressEnd(e8, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) e8.stopPropagation();
        }
      }
    };
    let onKeyUp = (e8) => {
      var _state_metaKeyEvents;
      if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e8, state.target)) {
        var _state_metaKeyEvents1;
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e8.target, e8.key)) e8.preventDefault();
        let target = e8.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (e8.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e8[$f6c31cce2adf654f$var$LINK_CLICKED]) {
          e8[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
          (0, $ea8dcbcb9ea1b556$export$95185d699e05d4d7)(state.target, e8, false);
        }
        state.isPressed = false;
        (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e8.key);
      } else if (e8.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
        var _state_target;
        let events = state.metaKeyEvents;
        state.metaKeyEvents = void 0;
        for (let event of events.values()) (_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e8) => {
        if (e8.button !== 0 || !e8.currentTarget.contains(e8.target)) return;
        if ((0, $6a7db85432448f7f$export$29bf1b5f2c56cf63)(e8.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e8.currentTarget)) e8.preventDefault();
        state.pointerType = e8.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e8.pointerId;
          state.target = e8.currentTarget;
          if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
          shouldStopPropagation = triggerPressStart(e8, state.pointerType);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "pointercancel", onPointerCancel, false);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseDown = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (e8.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e8.currentTarget)) e8.preventDefault();
          e8.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e8) => {
        if (!e8.currentTarget.contains(e8.target) || state.pointerType === "virtual") return;
        if (e8.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e8, e8.currentTarget)) triggerPressUp(e8, state.pointerType || e8.pointerType);
      };
      let onPointerMove = (e8) => {
        if (e8.pointerId !== state.activePointerId) return;
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e8, state.target)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
          }
        } else if (state.target && state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
          cancelOnPointerExit(e8);
        }
      };
      let onPointerUp = (e8) => {
        if (e8.pointerId === state.activePointerId && state.isPressed && e8.button === 0 && state.target) {
          if ($f6c31cce2adf654f$var$isOverTarget(e8, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
          else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
      };
      let onPointerCancel = (e8) => {
        cancel(e8);
      };
      pressProps2.onDragStart = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        cancel(e8);
      };
    } else {
      pressProps2.onMouseDown = (e8) => {
        if (e8.button !== 0 || !e8.currentTarget.contains(e8.target)) return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e8.currentTarget)) e8.preventDefault();
        if (state.ignoreEmulatedMouseEvents) {
          e8.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e8.currentTarget;
        state.pointerType = (0, $6a7db85432448f7f$export$60278871457622de)(e8.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
        let shouldStopPropagation = triggerPressStart(e8, state.pointerType);
        if (shouldStopPropagation) e8.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e8, state.pointerType);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseLeave = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e8, state.pointerType, false);
          cancelOnPointerExit(e8);
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onMouseUp = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (!state.ignoreEmulatedMouseEvents && e8.button === 0) triggerPressUp(e8, state.pointerType || "mouse");
      };
      let onMouseUp = (e8) => {
        if (e8.button !== 0) return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (state.target && $f6c31cce2adf654f$var$isOverTarget(e8, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType);
        else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e8), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e8.nativeEvent);
        if (!touch) return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e8.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled2 && !preventFocusOnPress) (0, $7215afc6de606d6b$export$de79e2c695e052f3)(e8.currentTarget);
        if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
        let shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
        if (shouldStopPropagation) e8.stopPropagation();
        addGlobalListener((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (!state.isPressed) {
          e8.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e8.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e8.currentTarget)) {
          if (!state.isOverTarget && state.pointerType != null) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          }
        } else if (state.isOverTarget && state.pointerType != null) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType, false);
          cancelOnPointerExit($f6c31cce2adf654f$var$createTouchEvent(state.target, e8));
        }
        if (shouldStopPropagation) e8.stopPropagation();
      };
      pressProps2.onTouchEnd = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        if (!state.isPressed) {
          e8.stopPropagation();
          return;
        }
        let touch = $f6c31cce2adf654f$var$getTouchById(e8.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e8.currentTarget) && state.pointerType != null) {
          triggerPressUp($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
          shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType);
        } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createTouchEvent(state.target, e8), state.pointerType, false);
        if (shouldStopPropagation) e8.stopPropagation();
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        e8.stopPropagation();
        if (state.isPressed) cancel($f6c31cce2adf654f$var$createTouchEvent(state.target, e8));
      };
      let onScroll = (e8) => {
        if (state.isPressed && e8.target.contains(state.target)) cancel({
          currentTarget: state.target,
          shiftKey: false,
          ctrlKey: false,
          metaKey: false,
          altKey: false
        });
      };
      pressProps2.onDragStart = (e8) => {
        if (!e8.currentTarget.contains(e8.target)) return;
        cancel(e8);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled2,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0, import_react20.useEffect)(() => {
    return () => {
      var _ref_current_target;
      if (!allowTextSelectionOnPress)
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : void 0);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(domProps, pressProps)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
  !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i15 = 0; i15 < changedTouches.length; i15++) {
    const touch = changedTouches[i15];
    if (touch.identifier === pointerId) return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createTouchEvent(target, e8) {
  let clientX = 0;
  let clientY = 0;
  if (e8.targetTouches && e8.targetTouches.length === 1) {
    clientX = e8.targetTouches[0].clientX;
    clientY = e8.targetTouches[0].clientY;
  }
  return {
    currentTarget: target,
    shiftKey: e8.shiftKey,
    ctrlKey: e8.ctrlKey,
    metaKey: e8.metaKey,
    altKey: e8.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$createEvent(target, e8) {
  let clientX = e8.clientX;
  let clientY = e8.clientY;
  return {
    currentTarget: target,
    shiftKey: e8.shiftKey,
    ctrlKey: e8.ctrlKey,
    metaKey: e8.metaKey,
    altKey: e8.altKey,
    clientX,
    clientY
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = 0;
  let offsetY = 0;
  if (point.width !== void 0) offsetX = point.width / 2;
  else if (point.radiusX !== void 0) offsetX = point.radiusX;
  if (point.height !== void 0) offsetY = point.height / 2;
  else if (point.radiusY !== void 0) offsetY = point.radiusY;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a20, b6) {
  if (a20.left > b6.right || b6.left > a20.right) return false;
  if (a20.top > b6.bottom || b6.top > a20.bottom) return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
  if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
  if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
  return true;
}
var $f6c31cce2adf654f$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}

// node_modules/@react-aria/interactions/dist/Pressable.mjs
var import_react21 = __toESM(require_react(), 1);
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = (0, import_react21.default).forwardRef(({ children, ...props }, ref) => {
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let { pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
    ...props,
    ref
  });
  let child = (0, import_react21.default).Children.only(children);
  return (0, import_react21.default).cloneElement(
    child,
    // @ts-ignore
    {
      ref,
      ...(0, $3ef42575df84b30b$export$9d1611c77c2fe928)(child.props, pressProps)
    }
  );
});

// node_modules/@react-aria/interactions/dist/PressResponder.mjs
var import_react22 = __toESM(require_react(), 1);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = (0, import_react22.default).forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react22.useRef)(false);
  let prevContext = (0, import_react22.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
  ref = (0, $df56164dff5785e2$export$4338b53315abf666)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
  let context = (0, $3ef42575df84b30b$export$9d1611c77c2fe928)(prevContext || {}, {
    ...props,
    ref,
    register() {
      isRegistered.current = true;
      if (prevContext) prevContext.register();
    }
  });
  (0, $e7801be82b4b2a53$export$4debdb1a3f0fa79e)(prevContext, ref);
  (0, import_react22.useEffect)(() => {
    if (!isRegistered.current) {
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
      isRegistered.current = true;
    }
  }, []);
  return (0, import_react22.default).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
    value: context
  }, children);
});

// node_modules/@react-aria/interactions/dist/utils.mjs
var import_react23 = __toESM(require_react(), 1);
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react23.useRef)({
    isFocused: false,
    observer: null
  });
  (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  let dispatchBlur = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((e8) => {
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e8);
  });
  return (0, import_react23.useCallback)((e8) => {
    if (e8.target instanceof HTMLButtonElement || e8.target instanceof HTMLInputElement || e8.target instanceof HTMLTextAreaElement || e8.target instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = e8.target;
      let onBlurHandler = (e9) => {
        stateRef.current.isFocused = false;
        if (target.disabled)
          dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e9));
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          var _stateRef_current_observer;
          (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
          let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    dispatchBlur
  ]);
}

// node_modules/@react-aria/interactions/dist/useFocus.mjs
var import_react24 = __toESM(require_react(), 1);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let { isDisabled: isDisabled2, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, import_react24.useCallback)((e8) => {
    if (e8.target === e8.currentTarget) {
      if (onBlurProp) onBlurProp(e8);
      if (onFocusChange) onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, import_react24.useCallback)((e8) => {
    const ownerDocument = (0, $431fbd86ca7dc216$export$b204af158042fbac)(e8.target);
    if (e8.target === e8.currentTarget && ownerDocument.activeElement === e8.target) {
      if (onFocusProp) onFocusProp(e8);
      if (onFocusChange) onFocusChange(true);
      onSyntheticFocus(e8);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled2 && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
      onBlur: !isDisabled2 && (onBlurProp || onFocusChange) ? onBlur : void 0
    }
  };
}

// node_modules/@react-aria/interactions/dist/useFocusVisible.mjs
var import_react25 = __toESM(require_react(), 1);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e8) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers) handler(modality, e8);
}
function $507fabe10e71c6fb$var$isValidKey(e8) {
  return !(e8.metaKey || !(0, $c87311424ea30a05$export$9ac100e40613ea10)() && e8.altKey || e8.ctrlKey || e8.key === "Control" || e8.key === "Shift" || e8.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e8) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e8)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e8);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e8) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e8.type === "mousedown" || e8.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e8);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e8) {
  if ((0, $6a7db85432448f7f$export$60278871457622de)(e8)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e8) {
  if (e8.target === window || e8.target === document) return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e8);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  windowObject.addEventListener("beforeunload", () => {
    $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(element);
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
  windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
  const documentObject = (0, $431fbd86ca7dc216$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
var $507fabe10e71c6fb$var$nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e8) {
  var _e_target;
  const IHTMLInputElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof window !== "undefined" ? (0, $431fbd86ca7dc216$export$f21a1ffae260145a)(e8 === null || e8 === void 0 ? void 0 : e8.target).KeyboardEvent : KeyboardEvent;
  isTextInput = isTextInput || (e8 === null || e8 === void 0 ? void 0 : e8.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e8 === null || e8 === void 0 ? void 0 : (_e_target = e8.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e8 === null || e8 === void 0 ? void 0 : e8.target) instanceof IHTMLTextAreaElement || (e8 === null || e8 === void 0 ? void 0 : e8.target) instanceof IHTMLElement && (e8 === null || e8 === void 0 ? void 0 : e8.target.isContentEditable);
  return !(isTextInput && modality === "keyboard" && e8 instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e8.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react25.useEffect)(() => {
    let handler = (modality, e8) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e8)) return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}

// node_modules/@react-aria/interactions/dist/useFocusWithin.mjs
var import_react26 = __toESM(require_react(), 1);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let { isDisabled: isDisabled2, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, import_react26.useRef)({
    isFocusWithin: false
  });
  let onBlur = (0, import_react26.useCallback)((e8) => {
    if (state.current.isFocusWithin && !e8.currentTarget.contains(e8.relatedTarget)) {
      state.current.isFocusWithin = false;
      if (onBlurWithin) onBlurWithin(e8);
      if (onFocusWithinChange) onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state
  ]);
  let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, import_react26.useCallback)((e8) => {
    if (!state.current.isFocusWithin && document.activeElement === e8.target) {
      if (onFocusWithin) onFocusWithin(e8);
      if (onFocusWithinChange) onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e8);
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus
  ]);
  if (isDisabled2) return {
    focusWithinProps: {
      // These should not have been null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/@react-aria/interactions/dist/useHover.mjs
var import_react27 = __toESM(require_react(), 1);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e8) {
  if (e8.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined") return;
  if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0) return;
    if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled: isDisabled2 } = props;
  let [isHovered, setHovered] = (0, import_react27.useState)(false);
  let state = (0, import_react27.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react27.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps, triggerHoverEnd } = (0, import_react27.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled2 || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart) onHoverStart({
        type: "hoverstart",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered) return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd) onHoverEnd({
        type: "hoverend",
        target,
        pointerType
      });
      if (onHoverChange) onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e8) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e8.pointerType === "mouse") return;
        triggerHoverStart(e8, e8.pointerType);
      };
      hoverProps2.onPointerLeave = (e8) => {
        if (!isDisabled2 && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, e8.pointerType);
      };
    } else {
      hoverProps2.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps2.onMouseEnter = (e8) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e8, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps2.onMouseLeave = (e8) => {
        if (!isDisabled2 && e8.currentTarget.contains(e8.target)) triggerHoverEnd2(e8, "mouse");
      };
    }
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled2,
    state
  ]);
  (0, import_react27.useEffect)(() => {
    if (isDisabled2) triggerHoverEnd({
      currentTarget: state.target
    }, state.pointerType);
  }, [
    isDisabled2
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@react-aria/interactions/dist/useInteractOutside.mjs
var import_react28 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useMove.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useScrollWheel.mjs
var import_react30 = __toESM(require_react(), 1);

// node_modules/@react-aria/interactions/dist/useLongPress.mjs
var import_react31 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/FocusScope.mjs
var import_react32 = __toESM(require_react(), 1);
var $9bf71ea28793e738$var$FocusContext = (0, import_react32.default).createContext(null);
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  if (!element) return false;
  if (!scope) return false;
  return scope.some((node) => node.contains(element));
}
var $9bf71ea28793e738$var$Tree = class _$9bf71ea28793e738$var$Tree {
  get size() {
    return this.fastMap.size;
  }
  getTreeNode(data) {
    return this.fastMap.get(data);
  }
  addTreeNode(scopeRef, parent, nodeToRestore) {
    let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
    if (!parentNode) return;
    let node = new $9bf71ea28793e738$var$TreeNode({
      scopeRef
    });
    parentNode.addChild(node);
    node.parent = parentNode;
    this.fastMap.set(scopeRef, node);
    if (nodeToRestore) node.nodeToRestore = nodeToRestore;
  }
  addNode(node) {
    this.fastMap.set(node.scopeRef, node);
  }
  removeTreeNode(scopeRef) {
    if (scopeRef === null) return;
    let node = this.fastMap.get(scopeRef);
    if (!node) return;
    let parentNode = node.parent;
    for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
    let children = node.children;
    if (parentNode) {
      parentNode.removeChild(node);
      if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
    }
    this.fastMap.delete(node.scopeRef);
  }
  // Pre Order Depth First
  *traverse(node = this.root) {
    if (node.scopeRef != null) yield node;
    if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
  }
  clone() {
    var _node_parent;
    let newTree = new _$9bf71ea28793e738$var$Tree();
    var _node_parent_scopeRef;
    for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
    return newTree;
  }
  constructor() {
    this.fastMap = /* @__PURE__ */ new Map();
    this.root = new $9bf71ea28793e738$var$TreeNode({
      scopeRef: null
    });
    this.fastMap.set(null, this.root);
  }
};
var $9bf71ea28793e738$var$TreeNode = class {
  addChild(node) {
    this.children.add(node);
    node.parent = this;
  }
  removeChild(node) {
    this.children.delete(node);
    node.parent = void 0;
  }
  constructor(props) {
    this.children = /* @__PURE__ */ new Set();
    this.contain = false;
    this.scopeRef = props.scopeRef;
  }
};
var $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();

// node_modules/@react-aria/focus/dist/useFocusRing.mjs
var import_react33 = __toESM(require_react(), 1);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react33.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $507fabe10e71c6fb$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, import_react33.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react33.useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, import_react33.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, import_react33.useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = (0, $a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $9ab94262bd0047c7$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/@react-aria/focus/dist/FocusRing.mjs
var import_react34 = __toESM(require_react(), 1);

// node_modules/@react-aria/focus/dist/useFocusable.mjs
var import_react35 = __toESM(require_react(), 1);
var $e6afbd83fe6ebbd2$var$FocusableContext = (0, import_react35.default).createContext(null);
function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let objRef = (0, $df56164dff5785e2$export$4338b53315abf666)(ref);
  let context = {
    ...otherProps,
    ref: objRef
  };
  return (0, import_react35.default).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = (0, import_react35.default).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);

// node_modules/@react-aria/focus/dist/useHasTabbableChild.mjs
var import_react36 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/components/button/button.js
var import_react44 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
var import_react41 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t11, e8, n13) => e8 in t11 ? i(t11, e8, { enumerable: true, configurable: true, writable: true, value: n13 }) : t11[e8] = n13;
var r2 = (t11, e8, n13) => (d(t11, typeof e8 != "symbol" ? e8 + "" : e8, n13), n13);
var o = class {
  constructor() {
    r2(this, "current", this.detect());
    r2(this, "handoffState", "pending");
    r2(this, "currentId", 0);
  }
  set(e8) {
    this.current !== e8 && (this.handoffState = "pending", this.currentId = 0, this.current = e8);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
var s = new o();

// node_modules/@headlessui/react/dist/utils/owner.js
function u(r18) {
  return s.isServer ? null : r18 instanceof Node ? r18.ownerDocument : r18 != null && r18.hasOwnProperty("current") && r18.current instanceof Node ? r18.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react37 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e8) {
  typeof queueMicrotask == "function" ? queueMicrotask(e8) : Promise.resolve().then(e8).catch((o17) => setTimeout(() => {
    throw o17;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let n13 = [], r18 = { addEventListener(e8, t11, s13, a20) {
    return e8.addEventListener(t11, s13, a20), r18.add(() => e8.removeEventListener(t11, s13, a20));
  }, requestAnimationFrame(...e8) {
    let t11 = requestAnimationFrame(...e8);
    return r18.add(() => cancelAnimationFrame(t11));
  }, nextFrame(...e8) {
    return r18.requestAnimationFrame(() => r18.requestAnimationFrame(...e8));
  }, setTimeout(...e8) {
    let t11 = setTimeout(...e8);
    return r18.add(() => clearTimeout(t11));
  }, microTask(...e8) {
    let t11 = { current: true };
    return t(() => {
      t11.current && e8[0]();
    }), r18.add(() => {
      t11.current = false;
    });
  }, style(e8, t11, s13) {
    let a20 = e8.style.getPropertyValue(t11);
    return Object.assign(e8.style, { [t11]: s13 }), this.add(() => {
      Object.assign(e8.style, { [t11]: a20 });
    });
  }, group(e8) {
    let t11 = o2();
    return e8(t11), this.add(() => t11.dispose());
  }, add(e8) {
    return n13.includes(e8) || n13.push(e8), () => {
      let t11 = n13.indexOf(e8);
      if (t11 >= 0) for (let s13 of n13.splice(t11, 1)) s13();
    };
  }, dispose() {
    for (let e8 of n13.splice(0)) e8();
  } };
  return r18;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e8] = (0, import_react37.useState)(o2);
  return (0, import_react37.useEffect)(() => () => e8.dispose(), [e8]), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react40 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react39 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react38 = __toESM(require_react(), 1);
var n = (e8, t11) => {
  s.isServer ? (0, import_react38.useEffect)(e8, t11) : (0, import_react38.useLayoutEffect)(e8, t11);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e8) {
  let r18 = (0, import_react39.useRef)(e8);
  return n(() => {
    r18.current = e8;
  }, [e8]), r18;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t11) {
  let e8 = s3(t11);
  return import_react40.default.useCallback((...r18) => e8.current(...r18), [e8]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e8) {
  let t11 = e8.width / 2, n13 = e8.height / 2;
  return { top: e8.clientY - n13, right: e8.clientX + t11, bottom: e8.clientY + n13, left: e8.clientX - t11 };
}
function P(e8, t11) {
  return !(!e8 || !t11 || e8.right < t11.left || e8.left > t11.right || e8.bottom < t11.top || e8.top > t11.bottom);
}
function w({ disabled: e8 = false } = {}) {
  let t11 = (0, import_react41.useRef)(null), [n13, l14] = (0, import_react41.useState)(false), r18 = p(), o17 = o4(() => {
    t11.current = null, l14(false), r18.dispose();
  }), f21 = o4((s13) => {
    if (r18.dispose(), t11.current === null) {
      t11.current = s13.currentTarget, l14(true);
      {
        let i15 = u(s13.currentTarget);
        r18.addEventListener(i15, "pointerup", o17, false), r18.addEventListener(i15, "pointermove", (c14) => {
          if (t11.current) {
            let p6 = E(c14);
            l14(P(p6, t11.current.getBoundingClientRect()));
          }
        }, false), r18.addEventListener(i15, "pointercancel", o17, false);
      }
    }
  });
  return { pressed: n13, pressProps: e8 ? {} : { onPointerDown: f21, onPointerUp: o17, onClick: o17 } };
}

// node_modules/@headlessui/react/dist/internal/disabled.js
var import_react42 = __toESM(require_react(), 1);
var e = (0, import_react42.createContext)(void 0);
function a3() {
  return (0, import_react42.useContext)(e);
}
function l({ value: t11, children: o17 }) {
  return import_react42.default.createElement(e.Provider, { value: t11 }, o17);
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react43 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/class-names.js
function t3(...r18) {
  return Array.from(new Set(r18.flatMap((n13) => typeof n13 == "string" ? n13.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u2(r18, n13, ...a20) {
  if (r18 in n13) {
    let e8 = n13[r18];
    return typeof e8 == "function" ? e8(...a20) : e8;
  }
  let t11 = new Error(`Tried to handle "${r18}" but there is no handler defined. Only defined handlers are: ${Object.keys(n13).map((e8) => `"${e8}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t11, u2), t11;
}

// node_modules/@headlessui/react/dist/utils/render.js
var M = ((a20) => (a20[a20.None = 0] = "None", a20[a20.RenderStrategy = 1] = "RenderStrategy", a20[a20.Static = 2] = "Static", a20))(M || {});
var O = ((e8) => (e8[e8.Unmount = 0] = "Unmount", e8[e8.Hidden = 1] = "Hidden", e8))(O || {});
function H({ ourProps: r18, theirProps: n13, slot: e8, defaultTag: a20, features: s13, visible: t11 = true, name: l14, mergeRefs: i15 }) {
  i15 = i15 != null ? i15 : A;
  let o17 = N(n13, r18);
  if (t11) return b(o17, e8, a20, l14, i15);
  let y9 = s13 != null ? s13 : 0;
  if (y9 & 2) {
    let { static: f21 = false, ...u17 } = o17;
    if (f21) return b(u17, e8, a20, l14, i15);
  }
  if (y9 & 1) {
    let { unmount: f21 = true, ...u17 } = o17;
    return u2(f21 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return b({ ...u17, hidden: true, style: { display: "none" } }, e8, a20, l14, i15);
    } });
  }
  return b(o17, e8, a20, l14, i15);
}
function b(r18, n13 = {}, e8, a20, s13) {
  let { as: t11 = e8, children: l14, refName: i15 = "ref", ...o17 } = h(r18, ["unmount", "static"]), y9 = r18.ref !== void 0 ? { [i15]: r18.ref } : {}, f21 = typeof l14 == "function" ? l14(n13) : l14;
  "className" in o17 && o17.className && typeof o17.className == "function" && (o17.className = o17.className(n13)), o17["aria-labelledby"] && o17["aria-labelledby"] === o17.id && (o17["aria-labelledby"] = void 0);
  let u17 = {};
  if (n13) {
    let d12 = false, p6 = [];
    for (let [c14, T11] of Object.entries(n13)) typeof T11 == "boolean" && (d12 = true), T11 === true && p6.push(c14.replace(/([A-Z])/g, (g6) => `-${g6.toLowerCase()}`));
    if (d12) {
      u17["data-headlessui-state"] = p6.join(" ");
      for (let c14 of p6) u17[`data-${c14}`] = "";
    }
  }
  if (t11 === import_react43.Fragment && (Object.keys(m2(o17)).length > 0 || Object.keys(m2(u17)).length > 0)) if (!(0, import_react43.isValidElement)(f21) || Array.isArray(f21) && f21.length > 1) {
    if (Object.keys(m2(o17)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${a20} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(o17)).concat(Object.keys(m2(u17))).map((d12) => `  - ${d12}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d12) => `  - ${d12}`).join(`
`)].join(`
`));
  } else {
    let d12 = f21.props, p6 = d12 == null ? void 0 : d12.className, c14 = typeof p6 == "function" ? (...F5) => t3(p6(...F5), o17.className) : t3(p6, o17.className), T11 = c14 ? { className: c14 } : {}, g6 = N(f21.props, m2(h(o17, ["ref"])));
    for (let F5 in u17) F5 in g6 && delete u17[F5];
    return (0, import_react43.cloneElement)(f21, Object.assign({}, g6, u17, y9, { ref: s13(f21.ref, y9.ref) }, T11));
  }
  return (0, import_react43.createElement)(t11, Object.assign({}, h(o17, ["ref"]), t11 !== import_react43.Fragment && y9, t11 !== import_react43.Fragment && u17), f21);
}
function I() {
  let r18 = (0, import_react43.useRef)([]), n13 = (0, import_react43.useCallback)((e8) => {
    for (let a20 of r18.current) a20 != null && (typeof a20 == "function" ? a20(e8) : a20.current = e8);
  }, []);
  return (...e8) => {
    if (!e8.every((a20) => a20 == null)) return r18.current = e8, n13;
  };
}
function A(...r18) {
  return r18.every((n13) => n13 == null) ? void 0 : (n13) => {
    for (let e8 of r18) e8 != null && (typeof e8 == "function" ? e8(n13) : e8.current = n13);
  };
}
function N(...r18) {
  var a20;
  if (r18.length === 0) return {};
  if (r18.length === 1) return r18[0];
  let n13 = {}, e8 = {};
  for (let s13 of r18) for (let t11 in s13) t11.startsWith("on") && typeof s13[t11] == "function" ? ((a20 = e8[t11]) != null || (e8[t11] = []), e8[t11].push(s13[t11])) : n13[t11] = s13[t11];
  if (n13.disabled || n13["aria-disabled"]) for (let s13 in e8) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s13) && (e8[s13] = [(t11) => {
    var l14;
    return (l14 = t11 == null ? void 0 : t11.preventDefault) == null ? void 0 : l14.call(t11);
  }]);
  for (let s13 in e8) Object.assign(n13, { [s13](t11, ...l14) {
    let i15 = e8[s13];
    for (let o17 of i15) {
      if ((t11 instanceof Event || (t11 == null ? void 0 : t11.nativeEvent) instanceof Event) && t11.defaultPrevented) return;
      o17(t11, ...l14);
    }
  } });
  return n13;
}
function D(...r18) {
  var a20;
  if (r18.length === 0) return {};
  if (r18.length === 1) return r18[0];
  let n13 = {}, e8 = {};
  for (let s13 of r18) for (let t11 in s13) t11.startsWith("on") && typeof s13[t11] == "function" ? ((a20 = e8[t11]) != null || (e8[t11] = []), e8[t11].push(s13[t11])) : n13[t11] = s13[t11];
  for (let s13 in e8) Object.assign(n13, { [s13](...t11) {
    let l14 = e8[s13];
    for (let i15 of l14) i15 == null || i15(...t11);
  } });
  return n13;
}
function W(r18) {
  var n13;
  return Object.assign((0, import_react43.forwardRef)(r18), { displayName: (n13 = r18.displayName) != null ? n13 : r18.name });
}
function m2(r18) {
  let n13 = Object.assign({}, r18);
  for (let e8 in n13) n13[e8] === void 0 && delete n13[e8];
  return n13;
}
function h(r18, n13 = []) {
  let e8 = Object.assign({}, r18);
  for (let a20 of n13) a20 in e8 && delete e8[a20];
  return e8;
}

// node_modules/@headlessui/react/dist/components/button/button.js
var v2 = "button";
function E3(a20, u17) {
  var p6;
  let l14 = a3(), i15 = I(), { disabled: e8 = l14 || false, autoFocus: t11 = false, ...o17 } = a20, { isFocusVisible: r18, focusProps: T11 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: t11 }), { isHovered: s13, hoverProps: f21 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: n13, pressProps: m9 } = w({ disabled: e8 }), d12 = D({ ref: u17, type: (p6 = o17.type) != null ? p6 : "button", disabled: e8 || void 0, autoFocus: t11 }, T11, f21, m9), y9 = (0, import_react44.useMemo)(() => ({ disabled: e8, hover: s13, focus: r18, active: n13, autofocus: t11 }), [e8, s13, r18, n13, t11]);
  return H({ mergeRefs: i15, ourProps: d12, theirProps: o17, slot: y9, defaultTag: v2, name: "Button" });
}
var L = W(E3);

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var import_react53 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
var import_react45 = __toESM(require_react(), 1);
function T(l14, r18, c14) {
  let [i15, s13] = (0, import_react45.useState)(c14), e8 = l14 !== void 0, t11 = (0, import_react45.useRef)(e8), u17 = (0, import_react45.useRef)(false), d12 = (0, import_react45.useRef)(false);
  return e8 && !t11.current && !u17.current ? (u17.current = true, t11.current = e8, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e8 && t11.current && !d12.current && (d12.current = true, t11.current = e8, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e8 ? l14 : i15, o4((n13) => (e8 || s13(n13), r18 == null ? void 0 : r18(n13)))];
}

// node_modules/@headlessui/react/dist/hooks/use-default-value.js
var import_react46 = __toESM(require_react(), 1);
function l2(e8) {
  let [t11] = (0, import_react46.useState)(e8);
  return t11;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var import_react47 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var import_react48 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/utils/form.js
function e2(i15 = {}, s13 = null, t11 = []) {
  for (let [r18, n13] of Object.entries(i15)) o6(t11, f3(s13, r18), n13);
  return t11;
}
function f3(i15, s13) {
  return i15 ? i15 + "[" + s13 + "]" : s13;
}
function o6(i15, s13, t11) {
  if (Array.isArray(t11)) for (let [r18, n13] of t11.entries()) o6(i15, f3(s13, r18.toString()), n13);
  else t11 instanceof Date ? i15.push([s13, t11.toISOString()]) : typeof t11 == "boolean" ? i15.push([s13, t11 ? "1" : "0"]) : typeof t11 == "string" ? i15.push([s13, t11]) : typeof t11 == "number" ? i15.push([s13, `${t11}`]) : t11 == null ? i15.push([s13, ""]) : e2(t11, s13, i15);
}
function p2(i15) {
  var t11, r18;
  let s13 = (t11 = i15 == null ? void 0 : i15.form) != null ? t11 : i15.closest("form");
  if (s13) {
    for (let n13 of s13.elements) if (n13 !== i15 && (n13.tagName === "INPUT" && n13.type === "submit" || n13.tagName === "BUTTON" && n13.type === "submit" || n13.nodeName === "INPUT" && n13.type === "image")) {
      n13.click();
      return;
    }
    (r18 = s13.requestSubmit) == null || r18.call(s13);
  }
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a4 = "span";
var s4 = ((e8) => (e8[e8.None = 1] = "None", e8[e8.Focusable = 2] = "Focusable", e8[e8.Hidden = 4] = "Hidden", e8))(s4 || {});
function l3(t11, r18) {
  var n13;
  let { features: d12 = 1, ...e8 } = t11, o17 = { ref: r18, "aria-hidden": (d12 & 2) === 2 ? true : (n13 = e8["aria-hidden"]) != null ? n13 : void 0, hidden: (d12 & 4) === 4 ? true : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d12 & 4) === 4 && (d12 & 2) !== 2 && { display: "none" } } };
  return H({ ourProps: o17, theirProps: e8, slot: {}, defaultTag: a4, name: "Hidden" });
}
var T2 = W(l3);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f4 = (0, import_react48.createContext)(null);
function W2(t11) {
  let [e8, r18] = (0, import_react48.useState)(null);
  return import_react48.default.createElement(f4.Provider, { value: { target: e8 } }, t11.children, import_react48.default.createElement(T2, { features: s4.Hidden, ref: r18 }));
}
function c2({ children: t11 }) {
  let e8 = (0, import_react48.useContext)(f4);
  if (!e8) return import_react48.default.createElement(import_react48.default.Fragment, null, t11);
  let { target: r18 } = e8;
  return r18 ? (0, import_react_dom.createPortal)(import_react48.default.createElement(import_react48.default.Fragment, null, t11), r18) : null;
}
function j2({ data: t11, form: e8, disabled: r18, onReset: n13, overrides: F5 }) {
  let [i15, a20] = (0, import_react48.useState)(null), p6 = p();
  return (0, import_react48.useEffect)(() => {
    if (n13 && i15) return p6.addEventListener(i15, "reset", n13);
  }, [i15, e8, n13]), import_react48.default.createElement(c2, null, import_react48.default.createElement(C, { setForm: a20, formId: e8 }), e2(t11).map(([s13, v5]) => import_react48.default.createElement(T2, { features: s4.Hidden, ...m2({ key: s13, as: "input", type: "hidden", hidden: true, readOnly: true, form: e8, disabled: r18, name: s13, value: v5, ...F5 }) })));
}
function C({ setForm: t11, formId: e8 }) {
  return (0, import_react48.useEffect)(() => {
    if (e8) {
      let r18 = document.getElementById(e8);
      r18 && t11(r18);
    }
  }, [t11, e8]), e8 ? null : import_react48.default.createElement(T2, { features: s4.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r18) => {
    if (!r18) return;
    let n13 = r18.closest("form");
    n13 && t11(n13);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
var import_react49 = __toESM(require_react(), 1);
var e3 = (0, import_react49.createContext)(void 0);
function u5() {
  return (0, import_react49.useContext)(e3);
}
function f5({ id: t11, children: r18 }) {
  return import_react49.default.createElement(e3.Provider, { value: t11 }, r18);
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function r5(n13) {
  let e8 = n13.parentElement, l14 = null;
  for (; e8 && !(e8 instanceof HTMLFieldSetElement); ) e8 instanceof HTMLLegendElement && (l14 = e8), e8 = e8.parentElement;
  let t11 = (e8 == null ? void 0 : e8.getAttribute("disabled")) === "";
  return t11 && i4(l14) ? false : t11;
}
function i4(n13) {
  if (!n13) return false;
  let e8 = n13.previousElementSibling;
  for (; e8 !== null; ) {
    if (e8 instanceof HTMLLegendElement) return false;
    e8 = e8.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var import_react51 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react50 = __toESM(require_react(), 1);
var u6 = Symbol();
function T3(t11, n13 = true) {
  return Object.assign(t11, { [u6]: n13 });
}
function y(...t11) {
  let n13 = (0, import_react50.useRef)(t11);
  (0, import_react50.useEffect)(() => {
    n13.current = t11;
  }, [t11]);
  let c14 = o4((e8) => {
    for (let o17 of n13.current) o17 != null && (typeof o17 == "function" ? o17(e8) : o17.current = e8);
  });
  return t11.every((e8) => e8 == null || (e8 == null ? void 0 : e8[u6])) ? void 0 : c14;
}

// node_modules/@headlessui/react/dist/components/description/description.js
var a5 = (0, import_react51.createContext)(null);
a5.displayName = "DescriptionContext";
function f6() {
  let r18 = (0, import_react51.useContext)(a5);
  if (r18 === null) {
    let e8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e8, f6), e8;
  }
  return r18;
}
function G() {
  var r18, e8;
  return (e8 = (r18 = (0, import_react51.useContext)(a5)) == null ? void 0 : r18.value) != null ? e8 : void 0;
}
function U() {
  let [r18, e8] = (0, import_react51.useState)([]);
  return [r18.length > 0 ? r18.join(" ") : void 0, (0, import_react51.useMemo)(() => function(t11) {
    let i15 = o4((n13) => (e8((s13) => [...s13, n13]), () => e8((s13) => {
      let o17 = s13.slice(), p6 = o17.indexOf(n13);
      return p6 !== -1 && o17.splice(p6, 1), o17;
    }))), l14 = (0, import_react51.useMemo)(() => ({ register: i15, slot: t11.slot, name: t11.name, props: t11.props, value: t11.value }), [i15, t11.slot, t11.name, t11.props, t11.value]);
    return import_react51.default.createElement(a5.Provider, { value: l14 }, t11.children);
  }, [e8])];
}
var S2 = "p";
function C2(r18, e8) {
  let d12 = (0, import_react47.useId)(), t11 = a3(), { id: i15 = `headlessui-description-${d12}`, ...l14 } = r18, n13 = f6(), s13 = y(e8);
  n(() => n13.register(i15), [i15, n13.register]);
  let o17 = t11 || false, p6 = (0, import_react51.useMemo)(() => ({ ...n13.slot, disabled: o17 }), [n13.slot, o17]), D9 = { ref: s13, ...n13.props, id: i15 };
  return H({ ourProps: D9, theirProps: l14, slot: p6, defaultTag: S2, name: n13.name || "Description" });
}
var _ = W(C2);
var w3 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r18) => (r18.Space = " ", r18.Enter = "Enter", r18.Escape = "Escape", r18.Backspace = "Backspace", r18.Delete = "Delete", r18.ArrowLeft = "ArrowLeft", r18.ArrowUp = "ArrowUp", r18.ArrowRight = "ArrowRight", r18.ArrowDown = "ArrowDown", r18.Home = "Home", r18.End = "End", r18.PageUp = "PageUp", r18.PageDown = "PageDown", r18.Tab = "Tab", r18))(o8 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
var import_react52 = __toESM(require_react(), 1);
var c4 = (0, import_react52.createContext)(null);
c4.displayName = "LabelContext";
function P4() {
  let r18 = (0, import_react52.useContext)(c4);
  if (r18 === null) {
    let l14 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l14, P4), l14;
  }
  return r18;
}
function I2(r18) {
  var a20, e8, o17;
  let l14 = (e8 = (a20 = (0, import_react52.useContext)(c4)) == null ? void 0 : a20.value) != null ? e8 : void 0;
  return ((o17 = r18 == null ? void 0 : r18.length) != null ? o17 : 0) > 0 ? [l14, ...r18].filter(Boolean).join(" ") : l14;
}
function z({ inherit: r18 = false } = {}) {
  let l14 = I2(), [a20, e8] = (0, import_react52.useState)([]), o17 = r18 ? [l14, ...a20].filter(Boolean) : a20;
  return [o17.length > 0 ? o17.join(" ") : void 0, (0, import_react52.useMemo)(() => function(t11) {
    let s13 = o4((i15) => (e8((p6) => [...p6, i15]), () => e8((p6) => {
      let u17 = p6.slice(), d12 = u17.indexOf(i15);
      return d12 !== -1 && u17.splice(d12, 1), u17;
    }))), m9 = (0, import_react52.useMemo)(() => ({ register: s13, slot: t11.slot, name: t11.name, props: t11.props, value: t11.value }), [s13, t11.slot, t11.name, t11.props, t11.value]);
    return import_react52.default.createElement(c4.Provider, { value: m9 }, t11.children);
  }, [e8])];
}
var N2 = "label";
function G2(r18, l14) {
  var y9;
  let a20 = (0, import_react47.useId)(), e8 = P4(), o17 = u5(), g6 = a3(), { id: t11 = `headlessui-label-${a20}`, htmlFor: s13 = o17 != null ? o17 : (y9 = e8.props) == null ? void 0 : y9.htmlFor, passive: m9 = false, ...i15 } = r18, p6 = y(l14);
  n(() => e8.register(t11), [t11, e8.register]);
  let u17 = o4((L9) => {
    let b6 = L9.currentTarget;
    if (b6 instanceof HTMLLabelElement && L9.preventDefault(), e8.props && "onClick" in e8.props && typeof e8.props.onClick == "function" && e8.props.onClick(L9), b6 instanceof HTMLLabelElement) {
      let n13 = document.getElementById(b6.htmlFor);
      if (n13) {
        let E14 = n13.getAttribute("disabled");
        if (E14 === "true" || E14 === "") return;
        let x6 = n13.getAttribute("aria-disabled");
        if (x6 === "true" || x6 === "") return;
        (n13 instanceof HTMLInputElement && (n13.type === "radio" || n13.type === "checkbox") || n13.role === "radio" || n13.role === "checkbox" || n13.role === "switch") && n13.click(), n13.focus({ preventScroll: true });
      }
    }
  }), d12 = g6 || false, C10 = (0, import_react52.useMemo)(() => ({ ...e8.slot, disabled: d12 }), [e8.slot, d12]), f21 = { ref: p6, ...e8.props, id: t11, htmlFor: s13, onClick: u17 };
  return m9 && ("onClick" in f21 && (delete f21.htmlFor, delete f21.onClick), "onClick" in i15 && delete i15.onClick), H({ ourProps: f21, theirProps: i15, slot: C10, defaultTag: s13 ? N2 : "div", name: e8.name || "Label" });
}
var U2 = W(G2);
var K = Object.assign(U2, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
var se = "span";
function ie(T11, h7) {
  let C10 = (0, import_react47.useId)(), k2 = u5(), x6 = a3(), { id: g6 = k2 || `headlessui-checkbox-${C10}`, disabled: e8 = x6 || false, autoFocus: s13 = false, checked: E14, defaultChecked: v5, onChange: P7, name: d12, value: D9, form: R10, indeterminate: n13 = false, ...A8 } = T11, r18 = l2(v5), [a20, t11] = T(E14, P7, r18 != null ? r18 : false), F5 = I2(), K4 = G(), _6 = p(), [p6, c14] = (0, import_react53.useState)(false), u17 = o4(() => {
    c14(true), t11 == null || t11(!a20), _6.nextFrame(() => {
      c14(false);
    });
  }), H13 = o4((o17) => {
    if (r5(o17.currentTarget)) return o17.preventDefault();
    o17.preventDefault(), u17();
  }), B3 = o4((o17) => {
    o17.key === o8.Space ? (o17.preventDefault(), u17()) : o17.key === o8.Enter && p2(o17.currentTarget);
  }), L9 = o4((o17) => o17.preventDefault()), { isFocusVisible: m9, focusProps: I7 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: s13 }), { isHovered: f21, hoverProps: M8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: b6, pressProps: U7 } = w({ disabled: e8 }), O6 = D({ ref: h7, id: g6, role: "checkbox", "aria-checked": n13 ? "mixed" : a20 ? "true" : "false", "aria-labelledby": F5, "aria-describedby": K4, "aria-disabled": e8 ? true : void 0, indeterminate: n13 ? "true" : void 0, tabIndex: e8 ? void 0 : 0, onKeyUp: e8 ? void 0 : B3, onKeyPress: e8 ? void 0 : L9, onClick: e8 ? void 0 : H13 }, I7, M8, U7), X4 = (0, import_react53.useMemo)(() => ({ checked: a20, disabled: e8, hover: f21, focus: m9, active: b6, indeterminate: n13, changing: p6, autofocus: s13 }), [a20, n13, e8, f21, m9, b6, p6, s13]), G7 = (0, import_react53.useCallback)(() => {
    if (r18 !== void 0) return t11 == null ? void 0 : t11(r18);
  }, [t11, r18]);
  return import_react53.default.createElement(import_react53.default.Fragment, null, d12 != null && import_react53.default.createElement(j2, { disabled: e8, data: { [d12]: D9 || "on" }, overrides: { type: "checkbox", checked: a20 }, form: R10, onReset: G7 }), H({ ourProps: O6, theirProps: A8, slot: X4, defaultTag: se, name: "Checkbox" }));
}
var Re = W(ie);

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
var import_react55 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/close-provider.js
var import_react54 = __toESM(require_react(), 1);
var e4 = (0, import_react54.createContext)(() => {
});
function u8() {
  return (0, import_react54.useContext)(e4);
}
function C3({ value: t11, children: o17 }) {
  return import_react54.default.createElement(e4.Provider, { value: t11 }, o17);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
function l5(t11, e8) {
  let o17 = u8();
  return import_react55.default.createElement(L, { ref: e8, ...D({ onClick: o17 }, t11) });
}
var y2 = W(l5);

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var React = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  return () => {
    var _a, _b, _c, _d;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? void 0 : _a.call(opts))) depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index3) => deps[index3] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? void 0 : _b.call(opts))) resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? void 0 : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(
        `%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * resultFpsPercentage, 120)
        )}deg 100% 31%);`,
        opts == null ? void 0 : opts.key
      );
    }
    (_d = opts == null ? void 0 : opts.onChange) == null ? void 0 : _d.call(opts, result);
    return result;
  };
}
function notUndefined(value, msg) {
  if (value === void 0) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a20, b6) => Math.abs(a20 - b6) < 1;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId2;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId2);
    timeoutId2 = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var defaultKeyExtractor = (index3) => index3;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i15 = start; i15 <= end; i15++) {
    arr.push(i15);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(element.getBoundingClientRect());
  if (!targetWindow.ResizeObserver) {
    return () => {
    };
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const entry = entries[0];
    if (entry == null ? void 0 : entry.borderBoxSize) {
      const box = entry.borderBoxSize[0];
      if (box) {
        handler({ width: box.inlineSize, height: box.blockSize });
        return;
      }
    }
    handler(element.getBoundingClientRect());
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : "onscrollend" in window;
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset4 = 0;
  const fallback = supportsScrollend ? () => void 0 : debounce(
    targetWindow,
    () => {
      cb(offset4, false);
    },
    instance.options.isScrollingResetDelay
  );
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset4 = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset4, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  endHandler();
  element.addEventListener("scroll", handler, addEventListenerOptions);
  element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  return () => {
    element.removeEventListener("scroll", handler);
    element.removeEventListener("scrollend", endHandler);
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? void 0 : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size4 = Math.round(
        box[instance.options.horizontal ? "inlineSize" : "blockSize"]
      );
      return size4;
    }
  }
  return Math.round(
    element.getBoundingClientRect()[instance.options.horizontal ? "width" : "height"]
  );
};
var elementScroll = (offset4, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset4 + adjustments;
  (_b = (_a = instance.scrollElement) == null ? void 0 : _a.scrollTo) == null ? void 0 : _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};
var Virtualizer = class {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollToIndexTimeoutId = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map();
    this.pendingMeasuredCacheIndexes = [];
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map();
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            this._measureElement(entry.target, entry);
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null ? void 0 : _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? void 0 : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined") delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {
        },
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null ? void 0 : _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(
      () => {
        this.calculateRange();
        return [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ];
      },
      (isScrolling) => {
        this.notify(isScrolling);
      },
      {
        key: "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    );
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d12) => d12());
      this.unsubs = [];
      this.observer.disconnect();
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? void 0 : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
        this.unsubs.push(
          this.options.observeElementRect(this, (rect) => {
            this.scrollRect = rect;
            this.maybeNotify();
          })
        );
        this.unsubs.push(
          this.options.observeElementOffset(this, (offset4, isScrolling) => {
            this.scrollAdjustments = 0;
            this.scrollDirection = isScrolling ? this.getScrollOffset() < offset4 ? "forward" : "backward" : null;
            this.scrollOffset = offset4;
            this.isScrolling = isScrolling;
            this.maybeNotify();
          })
        );
      }
    };
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index3) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map();
      const furthestMeasurements = /* @__PURE__ */ new Map();
      for (let m9 = index3 - 1; m9 >= 0; m9--) {
        const measurement = measurements[m9];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(
          measurement.lane
        );
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a20, b6) => {
        if (a20.end === b6.end) {
          return a20.index - b6.index;
        }
        return a20.end - b6.end;
      })[0] : void 0;
    };
    this.getMeasurementOptions = memo(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (count2, paddingStart, scrollMargin, getItemKey, enabled) => {
        this.pendingMeasuredCacheIndexes = [];
        return {
          count: count2,
          paddingStart,
          scrollMargin,
          getItemKey,
          enabled
        };
      },
      {
        key: false
      }
    );
    this.getMeasurements = memo(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: count2, paddingStart, scrollMargin, getItemKey, enabled }, itemSizeCache) => {
        if (!enabled) {
          this.measurementsCache = [];
          this.itemSizeCache.clear();
          return [];
        }
        if (this.measurementsCache.length === 0) {
          this.measurementsCache = this.options.initialMeasurementsCache;
          this.measurementsCache.forEach((item) => {
            this.itemSizeCache.set(item.key, item.size);
          });
        }
        const min2 = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const measurements = this.measurementsCache.slice(0, min2);
        for (let i15 = min2; i15 < count2; i15++) {
          const key = getItemKey(i15);
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i15 - 1] : this.getFurthestMeasurement(measurements, i15);
          const start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          const measuredSize = itemSizeCache.get(key);
          const size4 = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i15);
          const end = start + size4;
          const lane = furthestMeasurement ? furthestMeasurement.lane : i15 % this.options.lanes;
          measurements[i15] = {
            index: i15,
            start,
            size: size4,
            end,
            key,
            lane
          };
        }
        this.measurementsCache = measurements;
        return measurements;
      },
      {
        key: "getMeasurements",
        debug: () => this.options.debug
      }
    );
    this.calculateRange = memo(
      () => [this.getMeasurements(), this.getSize(), this.getScrollOffset()],
      (measurements, outerSize, scrollOffset) => {
        return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
          measurements,
          outerSize,
          scrollOffset
        }) : null;
      },
      {
        key: "calculateRange",
        debug: () => this.options.debug
      }
    );
    this.getIndexes = memo(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (rangeExtractor, range, overscan, count2) => {
        return range === null ? [] : rangeExtractor({
          startIndex: range.startIndex,
          endIndex: range.endIndex,
          overscan,
          count: count2
        });
      },
      {
        key: "getIndexes",
        debug: () => this.options.debug
      }
    );
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(
          `Missing attribute name '${attributeName}={index}' on measured element.`
        );
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this._measureElement = (node, entry) => {
      const index3 = this.indexFromElement(node);
      const item = this.measurementsCache[index3];
      if (!item) {
        return;
      }
      const key = item.key;
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if (node.isConnected) {
        this.resizeItem(index3, this.options.measureElement(node, entry, this));
      }
    };
    this.resizeItem = (index3, size4) => {
      const item = this.measurementsCache[index3];
      if (!item) {
        return;
      }
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size4 - itemSize;
      if (delta !== 0) {
        if (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: void 0
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size4));
        this.notify(false);
      }
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key);
          }
        });
        return;
      }
      this._measureElement(node, void 0);
    };
    this.getVirtualItems = memo(
      () => [this.getIndexes(), this.getMeasurements()],
      (indexes, measurements) => {
        const virtualItems = [];
        for (let k2 = 0, len = indexes.length; k2 < len; k2++) {
          const i15 = indexes[k2];
          const measurement = measurements[i15];
          virtualItems.push(measurement);
        }
        return virtualItems;
      },
      {
        key: "getVirtualItems",
        debug: () => this.options.debug
      }
    );
    this.getVirtualItemForOffset = (offset4) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return void 0;
      }
      return notUndefined(
        measurements[findNearestBinarySearch(
          0,
          measurements.length - 1,
          (index3) => notUndefined(measurements[index3]).start,
          offset4
        )]
      );
    };
    this.getOffsetForAlignment = (toOffset, align) => {
      const size4 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (toOffset <= scrollOffset) {
          align = "start";
        } else if (toOffset >= scrollOffset + size4) {
          align = "end";
        } else {
          align = "start";
        }
      }
      if (align === "start") {
        toOffset = toOffset;
      } else if (align === "end") {
        toOffset = toOffset - size4;
      } else if (align === "center") {
        toOffset = toOffset - size4 / 2;
      }
      const scrollSizeProp = this.options.horizontal ? "scrollWidth" : "scrollHeight";
      const scrollSize = this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.document.documentElement[scrollSizeProp] : this.scrollElement[scrollSizeProp] : 0;
      const maxOffset = scrollSize - size4;
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index3, align = "auto") => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      const item = this.measurementsCache[index3];
      if (!item) {
        return void 0;
      }
      const size4 = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        if (item.end >= scrollOffset + size4 - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(toOffset, align), align];
    };
    this.isDynamicMode = () => this.elementsCache.size > 0;
    this.cancelScrollToIndex = () => {
      if (this.scrollToIndexTimeoutId !== null && this.targetWindow) {
        this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId);
        this.scrollToIndexTimeoutId = null;
      }
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getOffsetForAlignment(toOffset, align), {
        adjustments: void 0,
        behavior
      });
    };
    this.scrollToIndex = (index3, { align: initialAlign = "auto", behavior } = {}) => {
      index3 = Math.max(0, Math.min(index3, this.options.count - 1));
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      const offsetAndAlign = this.getOffsetForIndex(index3, initialAlign);
      if (!offsetAndAlign) return;
      const [offset4, align] = offsetAndAlign;
      this._scrollToOffset(offset4, { adjustments: void 0, behavior });
      if (behavior !== "smooth" && this.isDynamicMode() && this.targetWindow) {
        this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
          this.scrollToIndexTimeoutId = null;
          const elementInDOM = this.elementsCache.has(
            this.options.getItemKey(index3)
          );
          if (elementInDOM) {
            const [latestOffset] = notUndefined(
              this.getOffsetForIndex(index3, align)
            );
            if (!approxEqual(latestOffset, this.getScrollOffset())) {
              this.scrollToIndex(index3, { align, behavior });
            }
          } else {
            this.scrollToIndex(index3, { align, behavior });
          }
        });
      }
    };
    this.scrollBy = (delta, { behavior } = {}) => {
      this.cancelScrollToIndex();
      if (behavior === "smooth" && this.isDynamicMode()) {
        console.warn(
          "The `smooth` scroll behavior is not fully supported with dynamic size."
        );
      }
      this._scrollToOffset(this.getScrollOffset() + delta, {
        adjustments: void 0,
        behavior
      });
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else {
        end = this.options.lanes === 1 ? ((_a = measurements[measurements.length - 1]) == null ? void 0 : _a.end) ?? 0 : Math.max(
          ...measurements.slice(-this.options.lanes).map((m9) => m9.end)
        );
      }
      return Math.max(
        end - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    };
    this._scrollToOffset = (offset4, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset4, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map();
      this.notify(false);
    };
    this.setOptions(opts);
  }
};
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset
}) {
  const count2 = measurements.length - 1;
  const getOffset = (index3) => measurements[index3].start;
  const startIndex = findNearestBinarySearch(0, count2, getOffset, scrollOffset);
  let endIndex = startIndex;
  while (endIndex < count2 && measurements[endIndex].end < scrollOffset + outerSize) {
    endIndex++;
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (sync) {
        (0, import_react_dom2.flushSync)(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null ? void 0 : _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(
    () => new Virtualizer(resolvedOptions)
  );
  instance.setOptions(resolvedOptions);
  React.useEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var import_react82 = __toESM(require_react(), 1);
var import_react_dom6 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
var import_react56 = __toESM(require_react(), 1);
function l6(e8, r18) {
  return e8 !== null && r18 !== null && typeof e8 == "object" && typeof r18 == "object" && "id" in e8 && "id" in r18 ? e8.id === r18.id : e8 === r18;
}
function u9(e8 = l6) {
  return (0, import_react56.useCallback)((r18, t11) => {
    if (typeof e8 == "string") {
      let o17 = e8;
      return (r18 == null ? void 0 : r18[o17]) === (t11 == null ? void 0 : t11[o17]);
    }
    return e8(r18, t11);
  }, [e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
var import_react57 = __toESM(require_react(), 1);
function f7(e8) {
  if (e8 === null) return { width: 0, height: 0 };
  let { width: t11, height: r18 } = e8.getBoundingClientRect();
  return { width: t11, height: r18 };
}
function d3(e8, t11 = false) {
  let [r18, u17] = (0, import_react57.useReducer)(() => ({}), {}), i15 = (0, import_react57.useMemo)(() => f7(e8), [e8, r18]);
  return n(() => {
    if (!e8) return;
    let n13 = new ResizeObserver(u17);
    return n13.observe(e8), () => {
      n13.disconnect();
    };
  }, [e8]), t11 ? { width: `${i15.width}px`, height: `${i15.height}px` } : i15;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var import_react59 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/default-map.js
var a6 = class extends Map {
  constructor(t11) {
    super();
    this.factory = t11;
  }
  get(t11) {
    let e8 = super.get(t11);
    return e8 === void 0 && (e8 = this.factory(t11), this.set(t11, e8)), e8;
  }
};

// node_modules/@headlessui/react/dist/utils/store.js
function a7(o17, r18) {
  let t11 = o17(), n13 = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return t11;
  }, subscribe(e8) {
    return n13.add(e8), () => n13.delete(e8);
  }, dispatch(e8, ...s13) {
    let i15 = r18[e8].call(t11, ...s13);
    i15 && (t11 = i15, n13.forEach((c14) => c14()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
var import_react58 = __toESM(require_react(), 1);
function o10(t11) {
  return (0, import_react58.useSyncExternalStore)(t11.subscribe, t11.getSnapshot, t11.getSnapshot);
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
var p3 = new a6(() => a7(() => [], { ADD(r18) {
  return this.includes(r18) ? this : [...this, r18];
}, REMOVE(r18) {
  let e8 = this.indexOf(r18);
  if (e8 === -1) return this;
  let t11 = this.slice();
  return t11.splice(e8, 1), t11;
} }));
function x(r18, e8) {
  let t11 = p3.get(e8), i15 = (0, import_react59.useId)(), h7 = o10(t11);
  if (n(() => {
    if (r18) return t11.dispatch("ADD", i15), () => t11.dispatch("REMOVE", i15);
  }, [t11, r18]), !r18) return false;
  let s13 = h7.indexOf(i15), o17 = h7.length;
  return s13 === -1 && (s13 = o17, o17 += 1), s13 === o17 - 1;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f8 = /* @__PURE__ */ new Map();
var u10 = /* @__PURE__ */ new Map();
function h4(t11) {
  var e8;
  let r18 = (e8 = u10.get(t11)) != null ? e8 : 0;
  return u10.set(t11, r18 + 1), r18 !== 0 ? () => m5(t11) : (f8.set(t11, { "aria-hidden": t11.getAttribute("aria-hidden"), inert: t11.inert }), t11.setAttribute("aria-hidden", "true"), t11.inert = true, () => m5(t11));
}
function m5(t11) {
  var i15;
  let r18 = (i15 = u10.get(t11)) != null ? i15 : 1;
  if (r18 === 1 ? u10.delete(t11) : u10.set(t11, r18 - 1), r18 !== 1) return;
  let e8 = f8.get(t11);
  e8 && (e8["aria-hidden"] === null ? t11.removeAttribute("aria-hidden") : t11.setAttribute("aria-hidden", e8["aria-hidden"]), t11.inert = e8.inert, f8.delete(t11));
}
function y3(t11, { allowed: r18, disallowed: e8 } = {}) {
  let i15 = x(t11, "inert-others");
  n(() => {
    var d12, c14;
    if (!i15) return;
    let a20 = o2();
    for (let n13 of (d12 = e8 == null ? void 0 : e8()) != null ? d12 : []) n13 && a20.add(h4(n13));
    let s13 = (c14 = r18 == null ? void 0 : r18()) != null ? c14 : [];
    for (let n13 of s13) {
      if (!n13) continue;
      let l14 = u(n13);
      if (!l14) continue;
      let o17 = n13.parentElement;
      for (; o17 && o17 !== l14.body; ) {
        for (let p6 of o17.children) s13.some((E14) => p6.contains(E14)) || a20.add(h4(p6));
        o17 = o17.parentElement;
      }
    }
    return a20.dispose;
  }, [i15, r18, e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
var import_react60 = __toESM(require_react(), 1);
function m6(s13, n13, l14) {
  let i15 = s3((t11) => {
    let e8 = t11.getBoundingClientRect();
    e8.x === 0 && e8.y === 0 && e8.width === 0 && e8.height === 0 && l14();
  });
  (0, import_react60.useEffect)(() => {
    if (!s13) return;
    let t11 = n13 === null ? null : n13 instanceof HTMLElement ? n13 : n13.current;
    if (!t11) return;
    let e8 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r18 = new ResizeObserver(() => i15.current(t11));
      r18.observe(t11), e8.add(() => r18.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r18 = new IntersectionObserver(() => i15.current(t11));
      r18.observe(t11), e8.add(() => r18.disconnect());
    }
    return () => e8.dispose();
  }, [n13, i15, s13]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var import_react63 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/focus-management.js
var f9 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e8) => `${e8}:not([tabindex='-1'])`).join(",");
var p4 = ["[data-autofocus]"].map((e8) => `${e8}:not([tabindex='-1'])`).join(",");
var F = ((n13) => (n13[n13.First = 1] = "First", n13[n13.Previous = 2] = "Previous", n13[n13.Next = 4] = "Next", n13[n13.Last = 8] = "Last", n13[n13.WrapAround = 16] = "WrapAround", n13[n13.NoScroll = 32] = "NoScroll", n13[n13.AutoFocus = 64] = "AutoFocus", n13))(F || {});
var T6 = ((o17) => (o17[o17.Error = 0] = "Error", o17[o17.Overflow = 1] = "Overflow", o17[o17.Success = 2] = "Success", o17[o17.Underflow = 3] = "Underflow", o17))(T6 || {});
var y4 = ((t11) => (t11[t11.Previous = -1] = "Previous", t11[t11.Next = 1] = "Next", t11))(y4 || {});
function b2(e8 = document.body) {
  return e8 == null ? [] : Array.from(e8.querySelectorAll(f9)).sort((r18, t11) => Math.sign((r18.tabIndex || Number.MAX_SAFE_INTEGER) - (t11.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function S3(e8 = document.body) {
  return e8 == null ? [] : Array.from(e8.querySelectorAll(p4)).sort((r18, t11) => Math.sign((r18.tabIndex || Number.MAX_SAFE_INTEGER) - (t11.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var h5 = ((t11) => (t11[t11.Strict = 0] = "Strict", t11[t11.Loose = 1] = "Loose", t11))(h5 || {});
function A2(e8, r18 = 0) {
  var t11;
  return e8 === ((t11 = u(e8)) == null ? void 0 : t11.body) ? false : u2(r18, { [0]() {
    return e8.matches(f9);
  }, [1]() {
    let u17 = e8;
    for (; u17 !== null; ) {
      if (u17.matches(f9)) return true;
      u17 = u17.parentElement;
    }
    return false;
  } });
}
function G3(e8) {
  let r18 = u(e8);
  o2().nextFrame(() => {
    r18 && !A2(r18.activeElement, 0) && I3(e8);
  });
}
var H3 = ((t11) => (t11[t11.Keyboard = 0] = "Keyboard", t11[t11.Mouse = 1] = "Mouse", t11))(H3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e8) => {
  e8.metaKey || e8.altKey || e8.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e8) => {
  e8.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e8.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function I3(e8) {
  e8 == null || e8.focus({ preventScroll: true });
}
var w5 = ["textarea", "input"].join(",");
function O2(e8) {
  var r18, t11;
  return (t11 = (r18 = e8 == null ? void 0 : e8.matches) == null ? void 0 : r18.call(e8, w5)) != null ? t11 : false;
}
function _2(e8, r18 = (t11) => t11) {
  return e8.slice().sort((t11, u17) => {
    let o17 = r18(t11), c14 = r18(u17);
    if (o17 === null || c14 === null) return 0;
    let l14 = o17.compareDocumentPosition(c14);
    return l14 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l14 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function j3(e8, r18) {
  return P5(b2(), r18, { relativeTo: e8 });
}
function P5(e8, r18, { sorted: t11 = true, relativeTo: u17 = null, skipElements: o17 = [] } = {}) {
  let c14 = Array.isArray(e8) ? e8.length > 0 ? e8[0].ownerDocument : document : e8.ownerDocument, l14 = Array.isArray(e8) ? t11 ? _2(e8) : e8 : r18 & 64 ? S3(e8) : b2(e8);
  o17.length > 0 && l14.length > 1 && (l14 = l14.filter((s13) => !o17.some((a20) => a20 != null && "current" in a20 ? (a20 == null ? void 0 : a20.current) === s13 : a20 === s13))), u17 = u17 != null ? u17 : c14.activeElement;
  let n13 = (() => {
    if (r18 & 5) return 1;
    if (r18 & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x6 = (() => {
    if (r18 & 1) return 0;
    if (r18 & 2) return Math.max(0, l14.indexOf(u17)) - 1;
    if (r18 & 4) return Math.max(0, l14.indexOf(u17)) + 1;
    if (r18 & 8) return l14.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M8 = r18 & 32 ? { preventScroll: true } : {}, m9 = 0, d12 = l14.length, i15;
  do {
    if (m9 >= d12 || m9 + d12 <= 0) return 0;
    let s13 = x6 + m9;
    if (r18 & 16) s13 = (s13 + d12) % d12;
    else {
      if (s13 < 0) return 3;
      if (s13 >= d12) return 1;
    }
    i15 = l14[s13], i15 == null || i15.focus(M8), m9 += n13;
  } while (i15 !== c14.activeElement);
  return r18 & 6 && O2(i15) && i15.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t4() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i8() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n8() {
  return t4() || i8();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
var import_react61 = __toESM(require_react(), 1);
function i9(t11, e8, o17, n13) {
  let u17 = s3(o17);
  (0, import_react61.useEffect)(() => {
    if (!t11) return;
    function r18(m9) {
      u17.current(m9);
    }
    return document.addEventListener(e8, r18, n13), () => document.removeEventListener(e8, r18, n13);
  }, [t11, e8, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
var import_react62 = __toESM(require_react(), 1);
function s5(t11, e8, o17, n13) {
  let i15 = s3(o17);
  (0, import_react62.useEffect)(() => {
    if (!t11) return;
    function r18(d12) {
      i15.current(d12);
    }
    return window.addEventListener(e8, r18, n13), () => window.removeEventListener(e8, r18, n13);
  }, [t11, e8, n13]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var E5 = 30;
function R3(p6, f21, C10) {
  let u17 = x(p6, "outside-click"), m9 = s3(C10), s13 = (0, import_react63.useCallback)(function(e8, n13) {
    if (e8.defaultPrevented) return;
    let r18 = n13(e8);
    if (r18 === null || !r18.getRootNode().contains(r18) || !r18.isConnected) return;
    let h7 = function l14(o17) {
      return typeof o17 == "function" ? l14(o17()) : Array.isArray(o17) || o17 instanceof Set ? o17 : [o17];
    }(f21);
    for (let l14 of h7) if (l14 !== null && (l14.contains(r18) || e8.composed && e8.composedPath().includes(l14))) return;
    return !A2(r18, h5.Loose) && r18.tabIndex !== -1 && e8.preventDefault(), m9.current(e8, r18);
  }, [m9, f21]), i15 = (0, import_react63.useRef)(null);
  i9(u17, "pointerdown", (t11) => {
    var e8, n13;
    i15.current = ((n13 = (e8 = t11.composedPath) == null ? void 0 : e8.call(t11)) == null ? void 0 : n13[0]) || t11.target;
  }, true), i9(u17, "mousedown", (t11) => {
    var e8, n13;
    i15.current = ((n13 = (e8 = t11.composedPath) == null ? void 0 : e8.call(t11)) == null ? void 0 : n13[0]) || t11.target;
  }, true), i9(u17, "click", (t11) => {
    n8() || i15.current && (s13(t11, () => i15.current), i15.current = null);
  }, true);
  let a20 = (0, import_react63.useRef)({ x: 0, y: 0 });
  i9(u17, "touchstart", (t11) => {
    a20.current.x = t11.touches[0].clientX, a20.current.y = t11.touches[0].clientY;
  }, true), i9(u17, "touchend", (t11) => {
    let e8 = { x: t11.changedTouches[0].clientX, y: t11.changedTouches[0].clientY };
    if (!(Math.abs(e8.x - a20.current.x) >= E5 || Math.abs(e8.y - a20.current.y) >= E5)) return s13(t11, () => t11.target instanceof HTMLElement ? t11.target : null);
  }, true), s5(u17, "blur", (t11) => s13(t11, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
var import_react64 = __toESM(require_react(), 1);
function n9(...e8) {
  return (0, import_react64.useMemo)(() => u(...e8), [...e8]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
var import_react66 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
var import_react65 = __toESM(require_react(), 1);
function E6(n13, e8, a20, t11) {
  let i15 = s3(a20);
  (0, import_react65.useEffect)(() => {
    n13 = n13 != null ? n13 : window;
    function r18(o17) {
      i15.current(o17);
    }
    return n13.addEventListener(e8, r18, t11), () => n13.removeEventListener(e8, r18, t11);
  }, [n13, e8, t11]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function i10(e8) {
  let n13 = (0, import_react66.useRef)({ value: "", selectionStart: null, selectionEnd: null });
  return E6(e8, "blur", (l14) => {
    let t11 = l14.target;
    t11 instanceof HTMLInputElement && (n13.current = { value: t11.value, selectionStart: t11.selectionStart, selectionEnd: t11.selectionEnd });
  }), o4(() => {
    if (document.activeElement !== e8 && e8 instanceof HTMLInputElement && e8.isConnected) {
      if (e8.focus({ preventScroll: true }), e8.value !== n13.current.value) e8.setSelectionRange(e8.value.length, e8.value.length);
      else {
        let { selectionStart: l14, selectionEnd: t11 } = n13.current;
        l14 !== null && t11 !== null && e8.setSelectionRange(l14, t11);
      }
      n13.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var import_react67 = __toESM(require_react(), 1);
function e6(t11, u17) {
  return (0, import_react67.useMemo)(() => {
    var n13;
    if (t11.type) return t11.type;
    let r18 = (n13 = t11.as) != null ? n13 : "button";
    if (typeof r18 == "string" && r18.toLowerCase() === "button" || (u17 == null ? void 0 : u17.tagName) === "BUTTON" && !u17.hasAttribute("type")) return "button";
  }, [t11.type, t11.as, u17]);
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d6() {
  let r18;
  return { before({ doc: e8 }) {
    var l14;
    let o17 = e8.documentElement, t11 = (l14 = e8.defaultView) != null ? l14 : window;
    r18 = Math.max(0, t11.innerWidth - o17.clientWidth);
  }, after({ doc: e8, d: o17 }) {
    let t11 = e8.documentElement, l14 = Math.max(0, t11.clientWidth - t11.offsetWidth), n13 = Math.max(0, r18 - l14);
    o17.style(t11, "paddingRight", `${n13}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function d7() {
  return t4() ? { before({ doc: r18, d: n13, meta: c14 }) {
    function o17(a20) {
      return c14.containers.flatMap((l14) => l14()).some((l14) => l14.contains(a20));
    }
    n13.microTask(() => {
      var s13;
      if (window.getComputedStyle(r18.documentElement).scrollBehavior !== "auto") {
        let t11 = o2();
        t11.style(r18.documentElement, "scrollBehavior", "auto"), n13.add(() => n13.microTask(() => t11.dispose()));
      }
      let a20 = (s13 = window.scrollY) != null ? s13 : window.pageYOffset, l14 = null;
      n13.addEventListener(r18, "click", (t11) => {
        if (t11.target instanceof HTMLElement) try {
          let e8 = t11.target.closest("a");
          if (!e8) return;
          let { hash: f21 } = new URL(e8.href), i15 = r18.querySelector(f21);
          i15 && !o17(i15) && (l14 = i15);
        } catch {
        }
      }, true), n13.addEventListener(r18, "touchstart", (t11) => {
        if (t11.target instanceof HTMLElement) if (o17(t11.target)) {
          let e8 = t11.target;
          for (; e8.parentElement && o17(e8.parentElement); ) e8 = e8.parentElement;
          n13.style(e8, "overscrollBehavior", "contain");
        } else n13.style(t11.target, "touchAction", "none");
      }), n13.addEventListener(r18, "touchmove", (t11) => {
        if (t11.target instanceof HTMLElement) {
          if (t11.target.tagName === "INPUT") return;
          if (o17(t11.target)) {
            let e8 = t11.target;
            for (; e8.parentElement && e8.dataset.headlessuiPortal !== "" && !(e8.scrollHeight > e8.clientHeight || e8.scrollWidth > e8.clientWidth); ) e8 = e8.parentElement;
            e8.dataset.headlessuiPortal === "" && t11.preventDefault();
          } else t11.preventDefault();
        }
      }, { passive: false }), n13.add(() => {
        var e8;
        let t11 = (e8 = window.scrollY) != null ? e8 : window.pageYOffset;
        a20 !== t11 && window.scrollTo(0, a20), l14 && l14.isConnected && (l14.scrollIntoView({ block: "nearest" }), l14 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r8() {
  return { before({ doc: e8, d: o17 }) {
    o17.style(e8.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function m7(e8) {
  let n13 = {};
  for (let t11 of e8) Object.assign(n13, t11(n13));
  return n13;
}
var a10 = a7(() => /* @__PURE__ */ new Map(), { PUSH(e8, n13) {
  var o17;
  let t11 = (o17 = this.get(e8)) != null ? o17 : { doc: e8, count: 0, d: o2(), meta: /* @__PURE__ */ new Set() };
  return t11.count++, t11.meta.add(n13), this.set(e8, t11), this;
}, POP(e8, n13) {
  let t11 = this.get(e8);
  return t11 && (t11.count--, t11.meta.delete(n13)), this;
}, SCROLL_PREVENT({ doc: e8, d: n13, meta: t11 }) {
  let o17 = { doc: e8, d: n13, meta: m7(t11) }, c14 = [d7(), d6(), r8()];
  c14.forEach(({ before: r18 }) => r18 == null ? void 0 : r18(o17)), c14.forEach(({ after: r18 }) => r18 == null ? void 0 : r18(o17));
}, SCROLL_ALLOW({ d: e8 }) {
  e8.dispose();
}, TEARDOWN({ doc: e8 }) {
  this.delete(e8);
} });
a10.subscribe(() => {
  let e8 = a10.getSnapshot(), n13 = /* @__PURE__ */ new Map();
  for (let [t11] of e8) n13.set(t11, t11.documentElement.style.overflow);
  for (let t11 of e8.values()) {
    let o17 = n13.get(t11.doc) === "hidden", c14 = t11.count !== 0;
    (c14 && !o17 || !c14 && o17) && a10.dispatch(t11.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t11), t11.count === 0 && a10.dispatch("TEARDOWN", t11);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a11(r18, e8, n13 = () => ({ containers: [] })) {
  let f21 = o10(a10), o17 = e8 ? f21.get(e8) : void 0, i15 = o17 ? o17.count > 0 : false;
  return n(() => {
    if (!(!e8 || !r18)) return a10.dispatch("PUSH", e8, n13), () => a10.dispatch("POP", e8, n13);
  }, [r18, e8]), i15;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f10(e8, c14, n13 = () => [document.body]) {
  let r18 = x(e8, "scroll-lock");
  a11(r18, c14, (t11) => {
    var o17;
    return { containers: [...(o17 = t11.containers) != null ? o17 : [], n13] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
var import_react68 = __toESM(require_react(), 1);
function t6(e8) {
  return [e8.screenX, e8.screenY];
}
function u11() {
  let e8 = (0, import_react68.useRef)([-1, -1]);
  return { wasMoved(r18) {
    let n13 = t6(r18);
    return e8.current[0] === n13[0] && e8.current[1] === n13[1] ? false : (e8.current = n13, true);
  }, update(r18) {
    e8.current = t6(r18);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var import_react70 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-flags.js
var import_react69 = __toESM(require_react(), 1);
function c6(u17 = 0) {
  let [t11, l14] = (0, import_react69.useState)(u17), g6 = (0, import_react69.useCallback)((e8) => l14(e8), [t11]), s13 = (0, import_react69.useCallback)((e8) => l14((a20) => a20 | e8), [t11]), m9 = (0, import_react69.useCallback)((e8) => (t11 & e8) === e8, [t11]), n13 = (0, import_react69.useCallback)((e8) => l14((a20) => a20 & ~e8), [l14]), F5 = (0, import_react69.useCallback)((e8) => l14((a20) => a20 ^ e8), [l14]);
  return { flags: t11, setFlag: g6, addFlag: s13, hasFlag: m9, removeFlag: n13, toggleFlag: F5 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T8;
typeof process != "undefined" && typeof globalThis != "undefined" && ((T8 = process == null ? void 0 : process.env) == null ? void 0 : T8["NODE_ENV"]) === "test" && typeof Element.prototype.getAnimations == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var A3 = ((r18) => (r18[r18.None = 0] = "None", r18[r18.Closed = 1] = "Closed", r18[r18.Enter = 2] = "Enter", r18[r18.Leave = 4] = "Leave", r18))(A3 || {});
function H4(e8) {
  let n13 = {};
  for (let t11 in e8) e8[t11] === true && (n13[`data-${t11}`] = "");
  return n13;
}
function R4(e8, n13, t11, i15) {
  let [r18, o17] = (0, import_react70.useState)(t11), { hasFlag: s13, addFlag: a20, removeFlag: l14 } = c6(e8 && r18 ? 3 : 0), u17 = (0, import_react70.useRef)(false), f21 = (0, import_react70.useRef)(false), b6 = p();
  return n(() => {
    var d12;
    if (e8) {
      if (t11 && o17(true), !n13) {
        t11 && a20(3);
        return;
      }
      return (d12 = i15 == null ? void 0 : i15.start) == null || d12.call(i15, t11), L2(n13, { inFlight: u17, prepare() {
        f21.current ? f21.current = false : f21.current = u17.current, u17.current = true, !f21.current && (t11 ? (a20(3), l14(4)) : (a20(4), l14(2)));
      }, run() {
        f21.current ? t11 ? (l14(3), a20(4)) : (l14(4), a20(3)) : t11 ? l14(1) : a20(1);
      }, done() {
        var p6;
        f21.current && typeof n13.getAnimations == "function" && n13.getAnimations().length > 0 || (u17.current = false, l14(7), t11 || o17(false), (p6 = i15 == null ? void 0 : i15.end) == null || p6.call(i15, t11));
      } });
    }
  }, [e8, t11, n13, b6]), e8 ? [r18, { closed: s13(1), enter: s13(2), leave: s13(4), transition: s13(2) || s13(4) }] : [t11, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function L2(e8, { prepare: n13, run: t11, done: i15, inFlight: r18 }) {
  let o17 = o2();
  return M2(e8, { prepare: n13, inFlight: r18 }), o17.nextFrame(() => {
    t11(), o17.requestAnimationFrame(() => {
      o17.add(C4(e8, i15));
    });
  }), o17.dispose;
}
function C4(e8, n13) {
  var o17, s13;
  let t11 = o2();
  if (!e8) return t11.dispose;
  let i15 = false;
  t11.add(() => {
    i15 = true;
  });
  let r18 = (s13 = (o17 = e8.getAnimations) == null ? void 0 : o17.call(e8).filter((a20) => a20 instanceof CSSTransition)) != null ? s13 : [];
  return r18.length === 0 ? (n13(), t11.dispose) : (Promise.allSettled(r18.map((a20) => a20.finished)).then(() => {
    i15 || n13();
  }), t11.dispose);
}
function M2(e8, { inFlight: n13, prepare: t11 }) {
  if (n13 != null && n13.current) {
    t11();
    return;
  }
  let i15 = e8.style.transition;
  e8.style.transition = "none", t11(), e8.offsetHeight, e8.style.transition = i15;
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
var import_react71 = __toESM(require_react(), 1);
function F2(c14, { container: e8, accept: t11, walk: r18 }) {
  let o17 = (0, import_react71.useRef)(t11), l14 = (0, import_react71.useRef)(r18);
  (0, import_react71.useEffect)(() => {
    o17.current = t11, l14.current = r18;
  }, [t11, r18]), n(() => {
    if (!e8 || !c14) return;
    let n13 = u(e8);
    if (!n13) return;
    let f21 = o17.current, p6 = l14.current, i15 = Object.assign((m9) => f21(m9), { acceptNode: f21 }), u17 = n13.createTreeWalker(e8, NodeFilter.SHOW_ELEMENT, i15, false);
    for (; u17.nextNode(); ) p6(u17.currentNode);
  }, [e8, c14, o17, l14]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
var import_react72 = __toESM(require_react(), 1);
function m8(u17, t11) {
  let e8 = (0, import_react72.useRef)([]), r18 = o4(u17);
  (0, import_react72.useEffect)(() => {
    let o17 = [...e8.current];
    for (let [a20, l14] of t11.entries()) if (e8.current[a20] !== l14) {
      let n13 = r18(t11, o17);
      return e8.current = t11, n13;
    }
  }, [r18, ...t11]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var React3 = __toESM(require_react(), 1);
var import_react74 = __toESM(require_react(), 1);

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [":popover-open", ":modal"].some((selector) => {
    try {
      return element.matches(selector);
    } catch (e8) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return css.transform !== "none" || css.perspective !== "none" || (css.containerType ? css.containerType !== "normal" : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== "none" : false) || !webkit && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective", "filter"].some((value) => (css.willChange || "").includes(value)) || ["paint", "layout", "strict", "content"].some((value) => (css.contain || "").includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === "undefined" || !CSS.supports) return false;
  return CSS.supports("-webkit-backdrop-filter", "none");
}
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var sides = ["top", "right", "bottom", "left"];
var alignments = ["start", "end"];
var placements = sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v5) => ({
  x: v5,
  y: v5
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x6,
    y: y9,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y9,
    left: x6,
    right: x6 + width,
    bottom: y9 + height,
    x: x6,
    y: y9
  };
}

// node_modules/tabbable/dist/index.esm.js
var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var candidateSelector = candidateSelectors.join(",");
var NoElement = typeof Element === "undefined";
var matches = NoElement ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function(element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};
var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var ReactDOM2 = __toESM(require_react_dom(), 1);

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x6,
    y: y9
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i15 = 0; i15 < validMiddleware.length; i15++) {
    const {
      name,
      fn
    } = validMiddleware[i15];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x6,
      y: y9,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x6 = nextX != null ? nextX : x6;
    y9 = nextY != null ? nextY : y9;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x6,
          y: y9
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i15 = -1;
    }
  }
  return {
    x: x6,
    y: y9,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x6,
    y: y9,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x6,
    y: y9,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var flip = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d12) => d12.overflows[0] <= 0).sort((a20, b6) => a20.overflows[1] - b6.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d12) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d12.placement);
                  return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  currentSideAxis === "y";
                }
                return true;
              }).map((d12) => [d12.placement, d12.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a20, b6) => a20[1] - b6[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x6,
        y: y9,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x6 + diffCoords.x,
        y: y9 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x6,
        y: y9,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x7,
              y: y10
            } = _ref;
            return {
              x: x7,
              y: y10
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x6,
        y: y9
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x6,
          y: limitedCoords.y - y9,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var size = function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = () => {
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $: $3
  } = getCssDimensions(domElement);
  let x6 = ($3 ? round(rect.width) : rect.width) / width;
  let y9 = ($3 ? round(rect.height) : rect.height) / height;
  if (!x6 || !Number.isFinite(x6)) {
    x6 = 1;
  }
  if (!y9 || !Number.isFinite(y9)) {
    y9 = 1;
  }
  return {
    x: x6,
    y: y9
  };
}
var noOffsets = createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x6 = (clientRect.left + visualOffsets.x) / scale.x;
  let y9 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x6 *= iframeScale.x;
      y9 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x6 += left;
      y9 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x6,
    y: y9
  });
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x6 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y9 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x6 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x6 = 0;
  let y9 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x6 = visualViewport.offsetLeft;
      y9 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x6 = left * scale.x;
  const y9 = top * scale.y;
  return {
    width,
    height,
    x: x6,
    y: y9
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      ...clippingAncestor,
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  let htmlX = 0;
  let htmlY = 0;
  if (documentElement && !isOffsetParentAnElement && !isFixed) {
    const htmlRect = documentElement.getBoundingClientRect();
    htmlY = htmlRect.top + scroll.scrollTop;
    htmlX = htmlRect.left + scroll.scrollLeft - // RTL <body> scrollbar.
    getWindowScrollBarX(documentElement, htmlRect);
  }
  const x6 = rect.left + scroll.scrollLeft - offsets.x - htmlX;
  const y9 = rect.top + scroll.scrollTop - offsets.y - htmlY;
  return {
    x: x6,
    y: y9,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function observeMove(element, onMove) {
  let io = null;
  let timeoutId2;
  const root = getDocumentElement(element);
  function cleanup2() {
    var _io;
    clearTimeout(timeoutId2);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup2();
    const {
      left,
      top,
      width,
      height
    } = element.getBoundingClientRect();
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId2 = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1e3);
        } else {
          refresh(false, ratio);
        }
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e8) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup2;
}
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow2 = detectOverflow;
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var computePosition2 = (reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var React2 = __toESM(require_react(), 1);
var import_react73 = __toESM(require_react(), 1);
var ReactDOM = __toESM(require_react_dom(), 1);
var index = typeof document !== "undefined" ? import_react73.useLayoutEffect : import_react73.useEffect;
function deepEqual(a20, b6) {
  if (a20 === b6) {
    return true;
  }
  if (typeof a20 !== typeof b6) {
    return false;
  }
  if (typeof a20 === "function" && a20.toString() === b6.toString()) {
    return true;
  }
  let length;
  let i15;
  let keys;
  if (a20 && b6 && typeof a20 === "object") {
    if (Array.isArray(a20)) {
      length = a20.length;
      if (length !== b6.length) return false;
      for (i15 = length; i15-- !== 0; ) {
        if (!deepEqual(a20[i15], b6[i15])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a20);
    length = keys.length;
    if (length !== Object.keys(b6).length) {
      return false;
    }
    for (i15 = length; i15-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b6, keys[i15])) {
        return false;
      }
    }
    for (i15 = length; i15-- !== 0; ) {
      const key = keys[i15];
      if (key === "_owner" && a20.$$typeof) {
        continue;
      }
      if (!deepEqual(a20[key], b6[key])) {
        return false;
      }
    }
    return true;
  }
  return a20 !== a20 && b6 !== b6;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React2.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React2.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React2.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React2.useState(null);
  const [_floating, _setFloating] = React2.useState(null);
  const setReference = React2.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React2.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React2.useRef(null);
  const floatingRef = React2.useRef(null);
  const dataRef = React2.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React2.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React2.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React2.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React2.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React2.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x6 = roundByDPR(elements.floating, data.x);
    const y9 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x6 + "px, " + y9 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x6,
      top: y9
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React2.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => ({
  ...offset2(options),
  options: [options, deps]
});
var shift3 = (options, deps) => ({
  ...shift2(options),
  options: [options, deps]
});
var flip3 = (options, deps) => ({
  ...flip2(options),
  options: [options, deps]
});
var size3 = (options, deps) => ({
  ...size2(options),
  options: [options, deps]
});

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
function useMergeRefs(refs) {
  return React3.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (value) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(value);
        } else if (ref != null) {
          ref.current = value;
        }
      });
    };
  }, refs);
}
var SafeReact = {
  ...React3
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React3.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React3.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    index3 += decrement ? -amount : amount;
  } while (index3 >= 0 && index3 <= list.length - 1 && isDisabled(list, index3, disabledIndices));
  return index3;
}
function getGridNavigatedIndex(elementsRef, _ref) {
  let {
    event,
    orientation,
    loop,
    cols,
    disabledIndices,
    minIndex,
    maxIndex,
    prevIndex,
    stopEvent: stop = false
  } = _ref;
  let nextIndex = prevIndex;
  if (event.key === ARROW_UP) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = maxIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: nextIndex,
        amount: cols,
        decrement: true,
        disabledIndices
      });
      if (loop && (prevIndex - cols < minIndex || nextIndex < 0)) {
        const col = prevIndex % cols;
        const maxCol = maxIndex % cols;
        const offset4 = maxIndex - (maxCol - col);
        if (maxCol === col) {
          nextIndex = maxIndex;
        } else {
          nextIndex = maxCol > col ? offset4 : offset4 - cols;
        }
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (event.key === ARROW_DOWN) {
    stop && stopEvent(event);
    if (prevIndex === -1) {
      nextIndex = minIndex;
    } else {
      nextIndex = findNonDisabledIndex(elementsRef, {
        startingIndex: prevIndex,
        amount: cols,
        disabledIndices
      });
      if (loop && prevIndex + cols > maxIndex) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex % cols - cols,
          amount: cols,
          disabledIndices
        });
      }
    }
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      nextIndex = prevIndex;
    }
  }
  if (orientation === "both") {
    const prevRow = floor(prevIndex / cols);
    if (event.key === ARROW_RIGHT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== cols - 1) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex - prevIndex % cols - 1,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    if (event.key === ARROW_LEFT) {
      stop && stopEvent(event);
      if (prevIndex % cols !== 0) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex,
          decrement: true,
          disabledIndices
        });
        if (loop && isDifferentRow(nextIndex, cols, prevRow)) {
          nextIndex = findNonDisabledIndex(elementsRef, {
            startingIndex: prevIndex + (cols - prevIndex % cols),
            decrement: true,
            disabledIndices
          });
        }
      } else if (loop) {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex + (cols - prevIndex % cols),
          decrement: true,
          disabledIndices
        });
      }
      if (isDifferentRow(nextIndex, cols, prevRow)) {
        nextIndex = prevIndex;
      }
    }
    const lastRow = floor(maxIndex / cols) === prevRow;
    if (isIndexOutOfBounds(elementsRef, nextIndex)) {
      if (loop && lastRow) {
        nextIndex = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(elementsRef, {
          startingIndex: prevIndex - prevIndex % cols - 1,
          disabledIndices
        });
      } else {
        nextIndex = prevIndex;
      }
    }
  }
  return nextIndex;
}
function buildCellMap(sizes, cols, dense) {
  const cellMap = [];
  let startIndex = 0;
  sizes.forEach((_ref2, index3) => {
    let {
      width,
      height
    } = _ref2;
    if (width > cols) {
      if (true) {
        throw new Error("[Floating UI]: Invalid grid - item width at index " + index3 + " is greater than grid columns");
      }
    }
    let itemPlaced = false;
    if (dense) {
      startIndex = 0;
    }
    while (!itemPlaced) {
      const targetCells = [];
      for (let i15 = 0; i15 < width; i15++) {
        for (let j8 = 0; j8 < height; j8++) {
          targetCells.push(startIndex + i15 + j8 * cols);
        }
      }
      if (startIndex % cols + width <= cols && targetCells.every((cell) => cellMap[cell] == null)) {
        targetCells.forEach((cell) => {
          cellMap[cell] = index3;
        });
        itemPlaced = true;
      } else {
        startIndex++;
      }
    }
  });
  return [...cellMap];
}
function getCellIndexOfCorner(index3, sizes, cellMap, cols, corner) {
  if (index3 === -1) return -1;
  const firstCellIndex = cellMap.indexOf(index3);
  const sizeItem = sizes[index3];
  switch (corner) {
    case "tl":
      return firstCellIndex;
    case "tr":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + sizeItem.width - 1;
    case "bl":
      if (!sizeItem) {
        return firstCellIndex;
      }
      return firstCellIndex + (sizeItem.height - 1) * cols;
    case "br":
      return cellMap.lastIndexOf(index3);
  }
}
function getCellIndices(indices, cellMap) {
  return cellMap.flatMap((index3, cellIndex) => indices.includes(index3) ? [cellIndex] : []);
}
function isDisabled(list, index3, disabledIndices) {
  if (disabledIndices) {
    return disabledIndices.includes(index3);
  }
  const element = list[index3];
  return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = () => el == null ? void 0 : el.focus({
    preventScroll
  });
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
var index2 = typeof document !== "undefined" ? import_react74.useLayoutEffect : import_react74.useEffect;
function sortByDocumentPosition(a20, b6) {
  const position = a20.compareDocumentPosition(b6);
  if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
    return -1;
  }
  if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
    return 1;
  }
  return 0;
}
function areMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (const [key, value] of map1.entries()) {
    if (value !== map2.get(key)) {
      return false;
    }
  }
  return true;
}
var FloatingListContext = React3.createContext({
  register: () => {
  },
  unregister: () => {
  },
  map: /* @__PURE__ */ new Map(),
  elementsRef: {
    current: []
  }
});
function FloatingList(props) {
  const {
    children,
    elementsRef,
    labelsRef
  } = props;
  const [map, setMap] = React3.useState(() => /* @__PURE__ */ new Map());
  const register = React3.useCallback((node) => {
    setMap((prevMap) => new Map(prevMap).set(node, null));
  }, []);
  const unregister = React3.useCallback((node) => {
    setMap((prevMap) => {
      const map2 = new Map(prevMap);
      map2.delete(node);
      return map2;
    });
  }, []);
  index2(() => {
    const newMap = new Map(map);
    const nodes = Array.from(newMap.keys()).sort(sortByDocumentPosition);
    nodes.forEach((node, index3) => {
      newMap.set(node, index3);
    });
    if (!areMapsEqual(map, newMap)) {
      setMap(newMap);
    }
  }, [map]);
  return React3.createElement(FloatingListContext.Provider, {
    value: React3.useMemo(() => ({
      register,
      unregister,
      map,
      elementsRef,
      labelsRef
    }), [register, unregister, map, elementsRef, labelsRef])
  }, children);
}
function useListItem(props) {
  if (props === void 0) {
    props = {};
  }
  const {
    label
  } = props;
  const {
    register,
    unregister,
    map,
    elementsRef,
    labelsRef
  } = React3.useContext(FloatingListContext);
  const [index$1, setIndex] = React3.useState(null);
  const componentRef = React3.useRef(null);
  const ref = React3.useCallback((node) => {
    componentRef.current = node;
    if (index$1 !== null) {
      elementsRef.current[index$1] = node;
      if (labelsRef) {
        var _node$textContent;
        const isLabelDefined = label !== void 0;
        labelsRef.current[index$1] = isLabelDefined ? label : (_node$textContent = node == null ? void 0 : node.textContent) != null ? _node$textContent : null;
      }
    }
  }, [index$1, elementsRef, labelsRef, label]);
  index2(() => {
    const node = componentRef.current;
    if (node) {
      register(node);
      return () => {
        unregister(node);
      };
    }
  }, [register, unregister]);
  index2(() => {
    const index3 = componentRef.current ? map.get(componentRef.current) : null;
    if (index3 != null) {
      setIndex(index3);
    }
  }, [map]);
  return React3.useMemo(() => ({
    ref,
    index: index$1 == null ? -1 : index$1
  }), [index$1, ref]);
}
function renderJsx(render, computedProps) {
  if (typeof render === "function") {
    return render(computedProps);
  }
  if (render) {
    return React3.cloneElement(render, computedProps);
  }
  return React3.createElement("div", computedProps);
}
var CompositeContext = React3.createContext({
  activeIndex: 0,
  onNavigate: () => {
  }
});
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var Composite = React3.forwardRef(function Composite2(props, forwardedRef) {
  const {
    render,
    orientation = "both",
    loop = true,
    cols = 1,
    disabledIndices,
    activeIndex: externalActiveIndex,
    onNavigate: externalSetActiveIndex,
    itemSizes,
    dense = false,
    ...domProps
  } = props;
  const [internalActiveIndex, internalSetActiveIndex] = React3.useState(0);
  const activeIndex = externalActiveIndex != null ? externalActiveIndex : internalActiveIndex;
  const onNavigate = useEffectEvent(externalSetActiveIndex != null ? externalSetActiveIndex : internalSetActiveIndex);
  const elementsRef = React3.useRef([]);
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const contextValue = React3.useMemo(() => ({
    activeIndex,
    onNavigate
  }), [activeIndex, onNavigate]);
  const isGrid = cols > 1;
  function handleKeyDown(event) {
    if (!allKeys.includes(event.key)) return;
    let nextIndex = activeIndex;
    const minIndex = getMinIndex(elementsRef, disabledIndices);
    const maxIndex = getMaxIndex(elementsRef, disabledIndices);
    if (isGrid) {
      const sizes = itemSizes || Array.from({
        length: elementsRef.current.length
      }, () => ({
        width: 1,
        height: 1
      }));
      const cellMap = buildCellMap(sizes, cols, dense);
      const minGridIndex = cellMap.findIndex((index3) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices));
      const maxGridIndex = cellMap.reduce((foundIndex, index3, cellIndex) => index3 != null && !isDisabled(elementsRef.current, index3, disabledIndices) ? cellIndex : foundIndex, -1);
      const maybeNextIndex = cellMap[getGridNavigatedIndex({
        current: cellMap.map((itemIndex) => itemIndex ? elementsRef.current[itemIndex] : null)
      }, {
        event,
        orientation,
        loop,
        cols,
        // treat undefined (empty grid spaces) as disabled indices so we
        // don't end up in them
        disabledIndices: getCellIndices([...disabledIndices || elementsRef.current.map((_6, index3) => isDisabled(elementsRef.current, index3) ? index3 : void 0), void 0], cellMap),
        minIndex: minGridIndex,
        maxIndex: maxGridIndex,
        prevIndex: getCellIndexOfCorner(
          activeIndex > maxIndex ? minIndex : activeIndex,
          sizes,
          cellMap,
          cols,
          // use a corner matching the edge closest to the direction we're
          // moving in so we don't end up in the same item. Prefer
          // top/left over bottom/right.
          event.key === ARROW_DOWN ? "bl" : event.key === ARROW_RIGHT ? "tr" : "tl"
        )
      })];
      if (maybeNextIndex != null) {
        nextIndex = maybeNextIndex;
      }
    }
    const toEndKeys = {
      horizontal: [ARROW_RIGHT],
      vertical: [ARROW_DOWN],
      both: [ARROW_RIGHT, ARROW_DOWN]
    }[orientation];
    const toStartKeys = {
      horizontal: [ARROW_LEFT],
      vertical: [ARROW_UP],
      both: [ARROW_LEFT, ARROW_UP]
    }[orientation];
    const preventedKeys = isGrid ? allKeys : {
      horizontal: horizontalKeys,
      vertical: verticalKeys,
      both: allKeys
    }[orientation];
    if (nextIndex === activeIndex && [...toEndKeys, ...toStartKeys].includes(event.key)) {
      if (loop && nextIndex === maxIndex && toEndKeys.includes(event.key)) {
        nextIndex = minIndex;
      } else if (loop && nextIndex === minIndex && toStartKeys.includes(event.key)) {
        nextIndex = maxIndex;
      } else {
        nextIndex = findNonDisabledIndex(elementsRef, {
          startingIndex: nextIndex,
          decrement: toStartKeys.includes(event.key),
          disabledIndices
        });
      }
    }
    if (nextIndex !== activeIndex && !isIndexOutOfBounds(elementsRef, nextIndex)) {
      event.stopPropagation();
      if (preventedKeys.includes(event.key)) {
        event.preventDefault();
      }
      onNavigate(nextIndex);
      queueMicrotask(() => {
        enqueueFocus(elementsRef.current[nextIndex]);
      });
    }
  }
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: forwardedRef,
    "aria-orientation": orientation === "both" ? void 0 : orientation,
    onKeyDown(e8) {
      domProps.onKeyDown == null || domProps.onKeyDown(e8);
      renderElementProps.onKeyDown == null || renderElementProps.onKeyDown(e8);
      handleKeyDown(e8);
    }
  };
  return React3.createElement(CompositeContext.Provider, {
    value: contextValue
  }, React3.createElement(FloatingList, {
    elementsRef
  }, renderJsx(render, computedProps)));
});
var CompositeItem = React3.forwardRef(function CompositeItem2(props, forwardedRef) {
  const {
    render,
    ...domProps
  } = props;
  const renderElementProps = render && typeof render !== "function" ? render.props : {};
  const {
    activeIndex,
    onNavigate
  } = React3.useContext(CompositeContext);
  const {
    ref,
    index: index3
  } = useListItem();
  const mergedRef = useMergeRefs([ref, forwardedRef, renderElementProps.ref]);
  const isActive = activeIndex === index3;
  const computedProps = {
    ...domProps,
    ...renderElementProps,
    ref: mergedRef,
    tabIndex: isActive ? 0 : -1,
    "data-active": isActive ? "" : void 0,
    onFocus(e8) {
      domProps.onFocus == null || domProps.onFocus(e8);
      renderElementProps.onFocus == null || renderElementProps.onFocus(e8);
      onNavigate(index3);
    }
  };
  return renderJsx(render, computedProps);
});
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i15 = 1; i15 < arguments.length; i15++) {
      var source = arguments[i15];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var serverHandoffComplete = false;
var count = 0;
var genId = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++
);
function useFloatingId() {
  const [id, setId] = React3.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React3.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
var FloatingArrow = React3.forwardRef(function FloatingArrow2(props, ref) {
  const {
    context: {
      placement,
      elements: {
        floating
      },
      middlewareData: {
        arrow: arrow4,
        shift: shift4
      }
    },
    width = 14,
    height = 7,
    tipRadius = 0,
    strokeWidth = 0,
    staticOffset,
    stroke,
    d: d12,
    style: {
      transform,
      ...restStyle
    } = {},
    ...rest
  } = props;
  if (true) {
    if (!ref) {
      warn("The `ref` prop is required for `FloatingArrow`.");
    }
  }
  const clipPathId = useId();
  const [isRTL2, setIsRTL] = React3.useState(false);
  index2(() => {
    if (!floating) return;
    const isRTL3 = getComputedStyle2(floating).direction === "rtl";
    if (isRTL3) {
      setIsRTL(true);
    }
  }, [floating]);
  if (!floating) {
    return null;
  }
  const [side, alignment] = placement.split("-");
  const isVerticalSide = side === "top" || side === "bottom";
  let computedStaticOffset = staticOffset;
  if (isVerticalSide && shift4 != null && shift4.x || !isVerticalSide && shift4 != null && shift4.y) {
    computedStaticOffset = null;
  }
  const computedStrokeWidth = strokeWidth * 2;
  const halfStrokeWidth = computedStrokeWidth / 2;
  const svgX = width / 2 * (tipRadius / -8 + 1);
  const svgY = height / 2 * tipRadius / 4;
  const isCustomShape = !!d12;
  const yOffsetProp = computedStaticOffset && alignment === "end" ? "bottom" : "top";
  let xOffsetProp = computedStaticOffset && alignment === "end" ? "right" : "left";
  if (computedStaticOffset && isRTL2) {
    xOffsetProp = alignment === "end" ? "left" : "right";
  }
  const arrowX = (arrow4 == null ? void 0 : arrow4.x) != null ? computedStaticOffset || arrow4.x : "";
  const arrowY = (arrow4 == null ? void 0 : arrow4.y) != null ? computedStaticOffset || arrow4.y : "";
  const dValue = d12 || "M0,0" + (" H" + width) + (" L" + (width - svgX) + "," + (height - svgY)) + (" Q" + width / 2 + "," + height + " " + svgX + "," + (height - svgY)) + " Z";
  const rotation = {
    top: isCustomShape ? "rotate(180deg)" : "",
    left: isCustomShape ? "rotate(90deg)" : "rotate(-90deg)",
    bottom: isCustomShape ? "" : "rotate(180deg)",
    right: isCustomShape ? "rotate(-90deg)" : "rotate(90deg)"
  }[side];
  return React3.createElement("svg", _extends({}, rest, {
    "aria-hidden": true,
    ref,
    width: isCustomShape ? width : width + computedStrokeWidth,
    height: width,
    viewBox: "0 0 " + width + " " + (height > width ? height : width),
    style: {
      position: "absolute",
      pointerEvents: "none",
      [xOffsetProp]: arrowX,
      [yOffsetProp]: arrowY,
      [side]: isVerticalSide || isCustomShape ? "100%" : "calc(100% - " + computedStrokeWidth / 2 + "px)",
      transform: [rotation, transform].filter((t11) => !!t11).join(" "),
      ...restStyle
    }
  }), computedStrokeWidth > 0 && React3.createElement("path", {
    clipPath: "url(#" + clipPathId + ")",
    fill: "none",
    stroke,
    strokeWidth: computedStrokeWidth + (d12 ? 0 : 1),
    d: dValue
  }), React3.createElement("path", {
    stroke: computedStrokeWidth && !d12 ? rest.fill : "none",
    d: dValue
  }), React3.createElement("clipPath", {
    id: clipPathId
  }, React3.createElement("rect", {
    x: -halfStrokeWidth,
    y: halfStrokeWidth * (isCustomShape ? -1 : 1),
    width: width + computedStrokeWidth,
    height: width
  })));
});
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter((l14) => l14 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = React3.createContext(null);
var FloatingTreeContext = React3.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React3.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};
var useFloatingTree = () => React3.useContext(FloatingTreeContext);
function createAttribute(name) {
  return "data-floating-ui-" + name;
}
var safePolygonIdentifier = createAttribute("safe-polygon");
var NOOP = () => {
};
var FloatingDelayGroupContext = React3.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: NOOP,
  setState: NOOP,
  isInstantPhase: false
});
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    event.target;
    clearTimeout(timeoutId);
  }
}
var FocusGuard = React3.forwardRef(function FocusGuard2(props, ref) {
  const [role, setRole] = React3.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  const restProps = {
    ref,
    tabIndex: 0,
    // Role is only for VoiceOver
    role,
    "aria-hidden": role ? void 0 : true,
    [createAttribute("focus-guard")]: "",
    style: HIDDEN_STYLES
  };
  return React3.createElement("span", _extends({}, props, restProps));
});
var PortalContext = React3.createContext(null);
var attr = createAttribute("portal");
var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
var VisuallyHiddenDismiss = React3.forwardRef(function VisuallyHiddenDismiss2(props, ref) {
  return React3.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
});
var lockCount = 0;
function enableScrollLock() {
  const isIOS = /iP(hone|ad|od)|iOS/.test(getPlatform());
  const bodyStyle = document.body.style;
  const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
  const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  const scrollX = bodyStyle.left ? parseFloat(bodyStyle.left) : window.scrollX;
  const scrollY = bodyStyle.top ? parseFloat(bodyStyle.top) : window.scrollY;
  bodyStyle.overflow = "hidden";
  if (scrollbarWidth) {
    bodyStyle[paddingProp] = scrollbarWidth + "px";
  }
  if (isIOS) {
    var _window$visualViewpor, _window$visualViewpor2;
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    Object.assign(bodyStyle, {
      position: "fixed",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0"
    });
  }
  return () => {
    Object.assign(bodyStyle, {
      overflow: "",
      [paddingProp]: ""
    });
    if (isIOS) {
      Object.assign(bodyStyle, {
        position: "",
        top: "",
        left: "",
        right: ""
      });
      window.scrollTo(scrollX, scrollY);
    }
  };
}
var cleanup = () => {
};
var FloatingOverlay = React3.forwardRef(function FloatingOverlay2(props, ref) {
  const {
    lockScroll = false,
    ...rest
  } = props;
  index2(() => {
    if (!lockScroll) return;
    lockCount++;
    if (lockCount === 1) {
      cleanup = enableScrollLock();
    }
    return () => {
      lockCount--;
      if (lockCount === 0) {
        cleanup();
      }
    };
  }, [lockScroll]);
  return React3.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
});
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React3.useRef({});
  const [events] = React3.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React3.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : void 0;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React3.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React3.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React3.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React3.useState(null);
  const [positionReference, _setPositionReference] = React3.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.reference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React3.useRef(null);
  const tree = useFloatingTree();
  index2(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React3.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React3.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React3.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React3.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React3.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index2(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React3.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _6,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map((fn) => fn(...args)).find((val) => val !== void 0);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map((key) => key == null ? void 0 : key.item);
  const getReferenceProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps
  );
  const getFloatingProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps
  );
  const getItemProps = React3.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps
  );
  return React3.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await detectOverflow2(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = round(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;
    if (onFallbackChange) {
      const shouldFallback = scrollEl.scrollHeight > scrollEl.offsetHeight && scrollEl.offsetHeight < item.offsetHeight * minItemsVisible - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM2.flushSync(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React3.useRef(false);
  const prevScrollTopRef = React3.useRef(null);
  const initialOverflowRef = React3.useRef(null);
  React3.useEffect(() => {
    if (!enabled) return;
    function onWheel(e8) {
      if (e8.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e8.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e8.preventDefault();
        ReactDOM2.flushSync(() => {
          onChange((d12) => d12 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React3.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          ReactDOM2.flushSync(() => onChange((d12) => d12 + scrollDiff));
        }
      }
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React3.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
var j4 = __toESM(require_react(), 1);
var import_react76 = __toESM(require_react(), 1);
var y5 = (0, import_react76.createContext)({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y5.displayName = "FloatingContext";
var S5 = (0, import_react76.createContext)(null);
S5.displayName = "PlacementContext";
function xe(e8) {
  return (0, import_react76.useMemo)(() => e8 ? typeof e8 == "string" ? { to: e8 } : e8 : null, [e8]);
}
function ye() {
  return (0, import_react76.useContext)(y5).setReference;
}
function Fe() {
  return (0, import_react76.useContext)(y5).getReferenceProps;
}
function be() {
  let { getFloatingProps: e8, slot: t11 } = (0, import_react76.useContext)(y5);
  return (0, import_react76.useCallback)((...n13) => Object.assign({}, e8(...n13), { "data-anchor": t11.anchor }), [e8, t11]);
}
function Re2(e8 = null) {
  e8 === false && (e8 = null), typeof e8 == "string" && (e8 = { to: e8 });
  let t11 = (0, import_react76.useContext)(S5), n13 = (0, import_react76.useMemo)(() => e8, [JSON.stringify(e8, typeof HTMLElement != "undefined" ? (r18, o17) => o17 instanceof HTMLElement ? o17.outerHTML : o17 : void 0)]);
  n(() => {
    t11 == null || t11(n13 != null ? n13 : null);
  }, [t11, n13]);
  let l14 = (0, import_react76.useContext)(y5);
  return (0, import_react76.useMemo)(() => [l14.setFloating, e8 ? l14.styles : {}], [l14.setFloating, e8, l14.styles]);
}
var q = 4;
function ve({ children: e8, enabled: t11 = true }) {
  let [n13, l14] = (0, import_react76.useState)(null), [r18, o17] = (0, import_react76.useState)(0), c14 = (0, import_react76.useRef)(null), [u17, s13] = (0, import_react76.useState)(null);
  pe(u17);
  let i15 = t11 && n13 !== null && u17 !== null, { to: F5 = "bottom", gap: C10 = 0, offset: M8 = 0, padding: p6 = 0, inner: P7 } = ce(n13, u17), [a20, f21 = "center"] = F5.split(" ");
  n(() => {
    i15 && o17(0);
  }, [i15]);
  let { refs: b6, floatingStyles: w13, context: g6 } = useFloating2({ open: i15, placement: a20 === "selection" ? f21 === "center" ? "bottom" : `bottom-${f21}` : f21 === "center" ? `${a20}` : `${a20}-${f21}`, strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: a20 === "selection" ? 0 : C10, crossAxis: M8 }), shift3({ padding: p6 }), a20 !== "selection" && flip3({ padding: p6 }), a20 === "selection" && P7 ? inner({ ...P7, padding: p6, overflowRef: c14, offset: r18, minItemsVisible: q, referenceOverflowThreshold: p6, onFallbackChange(h7) {
    var O6, W7;
    if (!h7) return;
    let d12 = g6.elements.floating;
    if (!d12) return;
    let T11 = parseFloat(getComputedStyle(d12).scrollPaddingBottom) || 0, $3 = Math.min(q, d12.childElementCount), B3 = 0, N6 = 0;
    for (let m9 of (W7 = (O6 = g6.elements.floating) == null ? void 0 : O6.childNodes) != null ? W7 : []) if (m9 instanceof HTMLElement) {
      let x6 = m9.offsetTop, k2 = x6 + m9.clientHeight + T11, H13 = d12.scrollTop, U7 = H13 + d12.clientHeight;
      if (x6 >= H13 && k2 <= U7) $3--;
      else {
        N6 = Math.max(0, Math.min(k2, U7) - Math.max(x6, H13)), B3 = m9.clientHeight;
        break;
      }
    }
    $3 >= 1 && o17((m9) => {
      let x6 = B3 * $3 - N6 + T11;
      return m9 >= x6 ? m9 : x6;
    });
  } }) : null, size3({ padding: p6, apply({ availableWidth: h7, availableHeight: d12, elements: T11 }) {
    Object.assign(T11.floating.style, { overflow: "auto", maxWidth: `${h7}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d12}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [I7 = a20, V5 = f21] = g6.placement.split("-");
  a20 === "selection" && (I7 = "selection");
  let G7 = (0, import_react76.useMemo)(() => ({ anchor: [I7, V5].filter(Boolean).join(" ") }), [I7, V5]), K4 = useInnerOffset(g6, { overflowRef: c14, onChange: o17 }), { getReferenceProps: Q3, getFloatingProps: X4 } = useInteractions([K4]), Y3 = o4((h7) => {
    s13(h7), b6.setFloating(h7);
  });
  return j4.createElement(S5.Provider, { value: l14 }, j4.createElement(y5.Provider, { value: { setFloating: Y3, setReference: b6.setReference, styles: w13, getReferenceProps: Q3, getFloatingProps: X4, slot: G7 } }, e8));
}
function pe(e8) {
  n(() => {
    if (!e8) return;
    let t11 = new MutationObserver(() => {
      let n13 = window.getComputedStyle(e8).maxHeight, l14 = parseFloat(n13);
      if (isNaN(l14)) return;
      let r18 = parseInt(n13);
      isNaN(r18) || l14 !== r18 && (e8.style.maxHeight = `${Math.ceil(l14)}px`);
    });
    return t11.observe(e8, { attributes: true, attributeFilter: ["style"] }), () => {
      t11.disconnect();
    };
  }, [e8]);
}
function ce(e8, t11) {
  var o17, c14, u17;
  let n13 = L3((o17 = e8 == null ? void 0 : e8.gap) != null ? o17 : "var(--anchor-gap, 0)", t11), l14 = L3((c14 = e8 == null ? void 0 : e8.offset) != null ? c14 : "var(--anchor-offset, 0)", t11), r18 = L3((u17 = e8 == null ? void 0 : e8.padding) != null ? u17 : "var(--anchor-padding, 0)", t11);
  return { ...e8, gap: n13, offset: l14, padding: r18 };
}
function L3(e8, t11, n13 = void 0) {
  let l14 = p(), r18 = o4((s13, i15) => {
    if (s13 == null) return [n13, null];
    if (typeof s13 == "number") return [s13, null];
    if (typeof s13 == "string") {
      if (!i15) return [n13, null];
      let F5 = J(s13, i15);
      return [F5, (C10) => {
        let M8 = D3(s13);
        {
          let p6 = M8.map((P7) => window.getComputedStyle(i15).getPropertyValue(P7));
          l14.requestAnimationFrame(function P7() {
            l14.nextFrame(P7);
            let a20 = false;
            for (let [b6, w13] of M8.entries()) {
              let g6 = window.getComputedStyle(i15).getPropertyValue(w13);
              if (p6[b6] !== g6) {
                p6[b6] = g6, a20 = true;
                break;
              }
            }
            if (!a20) return;
            let f21 = J(s13, i15);
            F5 !== f21 && (C10(f21), F5 = f21);
          });
        }
        return l14.dispose;
      }];
    }
    return [n13, null];
  }), o17 = (0, import_react76.useMemo)(() => r18(e8, t11)[0], [e8, t11]), [c14 = o17, u17] = (0, import_react76.useState)();
  return n(() => {
    let [s13, i15] = r18(e8, t11);
    if (u17(s13), !!i15) return i15(u17);
  }, [e8, t11]), c14;
}
function D3(e8) {
  let t11 = /var\((.*)\)/.exec(e8);
  if (t11) {
    let n13 = t11[1].indexOf(",");
    if (n13 === -1) return [t11[1]];
    let l14 = t11[1].slice(0, n13).trim(), r18 = t11[1].slice(n13 + 1).trim();
    return r18 ? [l14, ...D3(r18)] : [l14];
  }
  return [];
}
function J(e8, t11) {
  let n13 = document.createElement("div");
  t11.appendChild(n13), n13.style.setProperty("margin-top", "0px", "important"), n13.style.setProperty("margin-top", e8, "important");
  let l14 = parseFloat(window.getComputedStyle(n13).marginTop) || 0;
  return t11.removeChild(n13), l14;
}

// node_modules/@headlessui/react/dist/internal/frozen.js
var import_react77 = __toESM(require_react(), 1);
function f12({ children: o17, freeze: e8 }) {
  let n13 = l7(e8, o17);
  return import_react77.default.createElement(import_react77.default.Fragment, null, n13);
}
function l7(o17, e8) {
  let [n13, t11] = (0, import_react77.useState)(e8);
  return !o17 && n13 !== e8 && t11(e8), o17 ? n13 : e8;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react78 = __toESM(require_react(), 1);
var n10 = (0, import_react78.createContext)(null);
n10.displayName = "OpenClosedContext";
var i11 = ((e8) => (e8[e8.Open = 1] = "Open", e8[e8.Closed = 2] = "Closed", e8[e8.Closing = 4] = "Closing", e8[e8.Opening = 8] = "Opening", e8))(i11 || {});
function u13() {
  return (0, import_react78.useContext)(n10);
}
function c8({ value: o17, children: t11 }) {
  return import_react78.default.createElement(n10.Provider, { value: o17 }, t11);
}
function s7({ children: o17 }) {
  return import_react78.default.createElement(n10.Provider, { value: null }, o17);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t7(n13) {
  function e8() {
    document.readyState !== "loading" && (n13(), document.removeEventListener("DOMContentLoaded", e8));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e8), e8());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var r12 = [];
t7(() => {
  function e8(t11) {
    if (!(t11.target instanceof HTMLElement) || t11.target === document.body || r12[0] === t11.target) return;
    let n13 = t11.target;
    n13 = n13.closest(f9), r12.unshift(n13 != null ? n13 : t11.target), r12 = r12.filter((o17) => o17 != null && o17.isConnected), r12.splice(10);
  }
  window.addEventListener("click", e8, { capture: true }), window.addEventListener("mousedown", e8, { capture: true }), window.addEventListener("focus", e8, { capture: true }), document.body.addEventListener("click", e8, { capture: true }), document.body.addEventListener("mousedown", e8, { capture: true }), document.body.addEventListener("focus", e8, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u14(l14) {
  throw new Error("Unexpected object: " + l14);
}
var c9 = ((i15) => (i15[i15.First = 0] = "First", i15[i15.Previous = 1] = "Previous", i15[i15.Next = 2] = "Next", i15[i15.Last = 3] = "Last", i15[i15.Specific = 4] = "Specific", i15[i15.Nothing = 5] = "Nothing", i15))(c9 || {});
function f13(l14, n13) {
  let t11 = n13.resolveItems();
  if (t11.length <= 0) return null;
  let r18 = n13.resolveActiveIndex(), s13 = r18 != null ? r18 : -1;
  switch (l14.focus) {
    case 0: {
      for (let e8 = 0; e8 < t11.length; ++e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r18;
    }
    case 1: {
      s13 === -1 && (s13 = t11.length);
      for (let e8 = s13 - 1; e8 >= 0; --e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r18;
    }
    case 2: {
      for (let e8 = s13 + 1; e8 < t11.length; ++e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r18;
    }
    case 3: {
      for (let e8 = t11.length - 1; e8 >= 0; --e8) if (!n13.resolveDisabled(t11[e8], e8, t11)) return e8;
      return r18;
    }
    case 4: {
      for (let e8 = 0; e8 < t11.length; ++e8) if (n13.resolveId(t11[e8], e8, t11) === l14.id) return e8;
      return r18;
    }
    case 5:
      return null;
    default:
      u14(l14);
  }
}

// node_modules/@headlessui/react/dist/components/mouse.js
var g2 = ((f21) => (f21[f21.Left = 0] = "Left", f21[f21.Right = 2] = "Right", f21))(g2 || {});

// node_modules/@headlessui/react/dist/components/portal/portal.js
var import_react81 = __toESM(require_react(), 1);
var import_react_dom5 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
var import_react79 = __toESM(require_react(), 1);
function c10(t11) {
  let r18 = o4(t11), e8 = (0, import_react79.useRef)(false);
  (0, import_react79.useEffect)(() => (e8.current = false, () => {
    e8.current = true, t(() => {
      e8.current && r18();
    });
  }), [r18]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var t8 = __toESM(require_react(), 1);
function s8() {
  let r18 = typeof document == "undefined";
  return "useSyncExternalStore" in t8 ? ((o17) => o17.useSyncExternalStore)(t8)(() => () => {
  }, () => false, () => !r18) : false;
}
function l9() {
  let r18 = s8(), [e8, n13] = t8.useState(s.isHandoffComplete);
  return e8 && s.isHandoffComplete === false && n13(false), t8.useEffect(() => {
    e8 !== true && n13(true);
  }, [e8]), t8.useEffect(() => s.handoff(), []), r18 ? false : e8;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
var import_react80 = __toESM(require_react(), 1);
var e7 = (0, import_react80.createContext)(false);
function a12() {
  return (0, import_react80.useContext)(e7);
}
function l10(o17) {
  return import_react80.default.createElement(e7.Provider, { value: o17.force }, o17.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
function D4(p6) {
  let r18 = a12(), l14 = (0, import_react81.useContext)(v4), e8 = n9(p6), [o17, n13] = (0, import_react81.useState)(() => {
    var t11;
    if (!r18 && l14 !== null) return (t11 = l14.current) != null ? t11 : null;
    if (s.isServer) return null;
    let u17 = e8 == null ? void 0 : e8.getElementById("headlessui-portal-root");
    if (u17) return u17;
    if (e8 === null) return null;
    let a20 = e8.createElement("div");
    return a20.setAttribute("id", "headlessui-portal-root"), e8.body.appendChild(a20);
  });
  return (0, import_react81.useEffect)(() => {
    o17 !== null && (e8 != null && e8.body.contains(o17) || e8 == null || e8.body.appendChild(o17));
  }, [o17, e8]), (0, import_react81.useEffect)(() => {
    r18 || l14 !== null && n13(l14.current);
  }, [l14, n13, r18]), o17;
}
var M3 = import_react81.Fragment;
var N4 = W(function(r18, l14) {
  let e8 = r18, o17 = (0, import_react81.useRef)(null), n13 = y(T3((i15) => {
    o17.current = i15;
  }), l14), u17 = n9(o17), a20 = D4(o17), [t11] = (0, import_react81.useState)(() => {
    var i15;
    return s.isServer ? null : (i15 = u17 == null ? void 0 : u17.createElement("div")) != null ? i15 : null;
  }), s13 = (0, import_react81.useContext)(y6), b6 = l9();
  return n(() => {
    !a20 || !t11 || a20.contains(t11) || (t11.setAttribute("data-headlessui-portal", ""), a20.appendChild(t11));
  }, [a20, t11]), n(() => {
    if (t11 && s13) return s13.register(t11);
  }, [s13, t11]), c10(() => {
    var i15;
    !a20 || !t11 || (t11 instanceof Node && a20.contains(t11) && a20.removeChild(t11), a20.childNodes.length <= 0 && ((i15 = a20.parentElement) == null || i15.removeChild(a20)));
  }), b6 ? !a20 || !t11 ? null : (0, import_react_dom5.createPortal)(H({ ourProps: { ref: n13 }, theirProps: e8, slot: {}, defaultTag: M3, name: "Portal" }), t11) : null;
});
function S6(p6, r18) {
  let l14 = y(r18), { enabled: e8 = true, ...o17 } = p6;
  return e8 ? import_react81.default.createElement(N4, { ...o17, ref: l14 }) : H({ ourProps: { ref: l14 }, theirProps: o17, slot: {}, defaultTag: M3, name: "Portal" });
}
var j5 = import_react81.Fragment;
var v4 = (0, import_react81.createContext)(null);
function W3(p6, r18) {
  let { target: l14, ...e8 } = p6, n13 = { ref: y(r18) };
  return import_react81.default.createElement(v4.Provider, { value: l14 }, H({ ourProps: n13, theirProps: e8, defaultTag: j5, name: "Popover.Group" }));
}
var y6 = (0, import_react81.createContext)(null);
function ee() {
  let p6 = (0, import_react81.useContext)(y6), r18 = (0, import_react81.useRef)([]), l14 = o4((n13) => (r18.current.push(n13), p6 && p6.register(n13), () => e8(n13))), e8 = o4((n13) => {
    let u17 = r18.current.indexOf(n13);
    u17 !== -1 && r18.current.splice(u17, 1), p6 && p6.unregister(n13);
  }), o17 = (0, import_react81.useMemo)(() => ({ register: l14, unregister: e8, portals: r18 }), [l14, e8, r18]);
  return [r18, (0, import_react81.useMemo)(() => function({ children: u17 }) {
    return import_react81.default.createElement(y6.Provider, { value: o17 }, u17);
  }, [o17])];
}
var I4 = W(S6);
var J2 = W(W3);
var te = Object.assign(I4, { Group: J2 });

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
var Ct = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(Ct || {});
var Et = ((e8) => (e8[e8.Single = 0] = "Single", e8[e8.Multi = 1] = "Multi", e8))(Et || {});
var St = ((o17) => (o17[o17.Pointer = 0] = "Pointer", o17[o17.Focus = 1] = "Focus", o17[o17.Other = 2] = "Other", o17))(St || {});
var It = ((l14) => (l14[l14.OpenCombobox = 0] = "OpenCombobox", l14[l14.CloseCombobox = 1] = "CloseCombobox", l14[l14.GoToOption = 2] = "GoToOption", l14[l14.SetTyping = 3] = "SetTyping", l14[l14.RegisterOption = 4] = "RegisterOption", l14[l14.UnregisterOption = 5] = "UnregisterOption", l14[l14.SetActivationTrigger = 6] = "SetActivationTrigger", l14[l14.UpdateVirtualConfiguration = 7] = "UpdateVirtualConfiguration", l14[l14.SetInputElement = 8] = "SetInputElement", l14[l14.SetButtonElement = 9] = "SetButtonElement", l14[l14.SetOptionsElement = 10] = "SetOptionsElement", l14))(It || {});
function ge(t11, n13 = (e8) => e8) {
  let e8 = t11.activeOptionIndex !== null ? t11.options[t11.activeOptionIndex] : null, o17 = n13(t11.options.slice()), c14 = o17.length > 0 && o17[0].dataRef.current.order !== null ? o17.sort((f21, b6) => f21.dataRef.current.order - b6.dataRef.current.order) : _2(o17, (f21) => f21.dataRef.current.domRef.current), d12 = e8 ? c14.indexOf(e8) : null;
  return d12 === -1 && (d12 = null), { options: c14, activeOptionIndex: d12 };
}
var Pt = { [1](t11) {
  var n13;
  return (n13 = t11.dataRef.current) != null && n13.disabled || t11.comboboxState === 1 ? t11 : { ...t11, activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, __demoMode: false };
}, [0](t11) {
  var n13, e8;
  if ((n13 = t11.dataRef.current) != null && n13.disabled || t11.comboboxState === 0) return t11;
  if ((e8 = t11.dataRef.current) != null && e8.value) {
    let o17 = t11.dataRef.current.calculateIndex(t11.dataRef.current.value);
    if (o17 !== -1) return { ...t11, activeOptionIndex: o17, comboboxState: 0, __demoMode: false };
  }
  return { ...t11, comboboxState: 0, __demoMode: false };
}, [3](t11, n13) {
  return t11.isTyping === n13.isTyping ? t11 : { ...t11, isTyping: n13.isTyping };
}, [2](t11, n13) {
  var d12, f21, b6, T11;
  if ((d12 = t11.dataRef.current) != null && d12.disabled || t11.optionsElement && !((f21 = t11.dataRef.current) != null && f21.optionsPropsRef.current.static) && t11.comboboxState === 1) return t11;
  if (t11.virtual) {
    let { options: r18, disabled: i15 } = t11.virtual, l14 = n13.focus === c9.Specific ? n13.idx : f13(n13, { resolveItems: () => r18, resolveActiveIndex: () => {
      var R10, s13;
      return (s13 = (R10 = t11.activeOptionIndex) != null ? R10 : r18.findIndex((M8) => !i15(M8))) != null ? s13 : null;
    }, resolveDisabled: i15, resolveId() {
      throw new Error("Function not implemented.");
    } }), E14 = (b6 = n13.trigger) != null ? b6 : 2;
    return t11.activeOptionIndex === l14 && t11.activationTrigger === E14 ? t11 : { ...t11, activeOptionIndex: l14, activationTrigger: E14, isTyping: false, __demoMode: false };
  }
  let e8 = ge(t11);
  if (e8.activeOptionIndex === null) {
    let r18 = e8.options.findIndex((i15) => !i15.dataRef.current.disabled);
    r18 !== -1 && (e8.activeOptionIndex = r18);
  }
  let o17 = n13.focus === c9.Specific ? n13.idx : f13(n13, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (r18) => r18.id, resolveDisabled: (r18) => r18.dataRef.current.disabled }), c14 = (T11 = n13.trigger) != null ? T11 : 2;
  return t11.activeOptionIndex === o17 && t11.activationTrigger === c14 ? t11 : { ...t11, ...e8, isTyping: false, activeOptionIndex: o17, activationTrigger: c14, __demoMode: false };
}, [4]: (t11, n13) => {
  var d12, f21, b6;
  if ((d12 = t11.dataRef.current) != null && d12.virtual) return { ...t11, options: [...t11.options, n13.payload] };
  let e8 = n13.payload, o17 = ge(t11, (T11) => (T11.push(e8), T11));
  t11.activeOptionIndex === null && (f21 = t11.dataRef.current) != null && f21.isSelected(n13.payload.dataRef.current.value) && (o17.activeOptionIndex = o17.options.indexOf(e8));
  let c14 = { ...t11, ...o17, activationTrigger: 2 };
  return (b6 = t11.dataRef.current) != null && b6.__demoMode && t11.dataRef.current.value === void 0 && (c14.activeOptionIndex = 0), c14;
}, [5]: (t11, n13) => {
  var o17;
  if ((o17 = t11.dataRef.current) != null && o17.virtual) return { ...t11, options: t11.options.filter((c14) => c14.id !== n13.id) };
  let e8 = ge(t11, (c14) => {
    let d12 = c14.findIndex((f21) => f21.id === n13.id);
    return d12 !== -1 && c14.splice(d12, 1), c14;
  });
  return { ...t11, ...e8, activationTrigger: 2 };
}, [6]: (t11, n13) => t11.activationTrigger === n13.trigger ? t11 : { ...t11, activationTrigger: n13.trigger }, [7]: (t11, n13) => {
  var o17, c14;
  if (t11.virtual === null) return { ...t11, virtual: { options: n13.options, disabled: (o17 = n13.disabled) != null ? o17 : () => false } };
  if (t11.virtual.options === n13.options && t11.virtual.disabled === n13.disabled) return t11;
  let e8 = t11.activeOptionIndex;
  if (t11.activeOptionIndex !== null) {
    let d12 = n13.options.indexOf(t11.virtual.options[t11.activeOptionIndex]);
    d12 !== -1 ? e8 = d12 : e8 = null;
  }
  return { ...t11, activeOptionIndex: e8, virtual: { options: n13.options, disabled: (c14 = n13.disabled) != null ? c14 : () => false } };
}, [8]: (t11, n13) => t11.inputElement === n13.element ? t11 : { ...t11, inputElement: n13.element }, [9]: (t11, n13) => t11.buttonElement === n13.element ? t11 : { ...t11, buttonElement: n13.element }, [10]: (t11, n13) => t11.optionsElement === n13.element ? t11 : { ...t11, optionsElement: n13.element } };
var ve2 = (0, import_react82.createContext)(null);
ve2.displayName = "ComboboxActionsContext";
function le(t11) {
  let n13 = (0, import_react82.useContext)(ve2);
  if (n13 === null) {
    let e8 = new Error(`<${t11} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, le), e8;
  }
  return n13;
}
var we = (0, import_react82.createContext)(null);
function At(t11) {
  let n13 = oe("VirtualProvider"), { options: e8 } = n13.virtual, [o17, c14] = (0, import_react82.useMemo)(() => {
    let r18 = n13.optionsElement;
    if (!r18) return [0, 0];
    let i15 = window.getComputedStyle(r18);
    return [parseFloat(i15.paddingBlockStart || i15.paddingTop), parseFloat(i15.paddingBlockEnd || i15.paddingBottom)];
  }, [n13.optionsElement]), d12 = useVirtualizer({ enabled: e8.length !== 0, scrollPaddingStart: o17, scrollPaddingEnd: c14, count: e8.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return n13.optionsElement;
  }, overscan: 12 }), [f21, b6] = (0, import_react82.useState)(0);
  n(() => {
    b6((r18) => r18 + 1);
  }, [e8]);
  let T11 = d12.getVirtualItems();
  return T11.length === 0 ? null : import_react82.default.createElement(we.Provider, { value: d12 }, import_react82.default.createElement("div", { style: { position: "relative", width: "100%", height: `${d12.getTotalSize()}px` }, ref: (r18) => {
    if (r18) {
      if (typeof process != "undefined" && process.env.JEST_WORKER_ID !== void 0 || n13.activationTrigger === 0) return;
      n13.activeOptionIndex !== null && e8.length > n13.activeOptionIndex && d12.scrollToIndex(n13.activeOptionIndex);
    }
  } }, T11.map((r18) => {
    var i15;
    return import_react82.default.createElement(import_react82.Fragment, { key: r18.key }, import_react82.default.cloneElement((i15 = t11.children) == null ? void 0 : i15.call(t11, { ...t11.slot, option: e8[r18.index] }), { key: `${f21}-${r18.key}`, "data-index": r18.index, "aria-setsize": e8.length, "aria-posinset": r18.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${r18.start}px)`, overflowAnchor: "none" } }));
  })));
}
var ae2 = (0, import_react82.createContext)(null);
ae2.displayName = "ComboboxDataContext";
function oe(t11) {
  let n13 = (0, import_react82.useContext)(ae2);
  if (n13 === null) {
    let e8 = new Error(`<${t11} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, oe), e8;
  }
  return n13;
}
function Rt(t11, n13) {
  return u2(n13.type, Pt, t11, n13);
}
var _t = import_react82.Fragment;
function ht(t11, n13) {
  var ye5, Oe4;
  let e8 = a3(), { value: o17, defaultValue: c14, onChange: d12, form: f21, name: b6, by: T11, disabled: r18 = e8 || false, onClose: i15, __demoMode: l14 = false, multiple: E14 = false, immediate: R10 = false, virtual: s13 = null, nullable: M8, ...H13 } = t11, _6 = l2(c14), [P7 = E14 ? [] : void 0, O6] = T(o17, d12, _6), [S9, g6] = (0, import_react82.useReducer)(Rt, { dataRef: (0, import_react82.createRef)(), comboboxState: l14 ? 0 : 1, isTyping: false, options: [], virtual: s13 ? { options: s13.options, disabled: (ye5 = s13.disabled) != null ? ye5 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: l14 }), F5 = (0, import_react82.useRef)(false), w13 = (0, import_react82.useRef)({ static: false, hold: false }), x6 = u9(T11), W7 = o4((u17) => s13 ? T11 === null ? s13.options.indexOf(u17) : s13.options.findIndex((y9) => x6(y9, u17)) : S9.options.findIndex((y9) => x6(y9.dataRef.current.value, u17))), j8 = (0, import_react82.useCallback)((u17) => u2(p6.mode, { [1]: () => P7.some((y9) => x6(y9, u17)), [0]: () => x6(P7, u17) }), [P7]), U7 = o4((u17) => S9.activeOptionIndex === W7(u17)), p6 = (0, import_react82.useMemo)(() => ({ ...S9, immediate: R10, optionsPropsRef: w13, value: P7, defaultValue: _6, disabled: r18, mode: E14 ? 1 : 0, virtual: s13 ? S9.virtual : null, get activeOptionIndex() {
    if (F5.current && S9.activeOptionIndex === null && (s13 ? s13.options.length > 0 : S9.options.length > 0)) {
      if (s13) {
        let y9 = s13.options.findIndex((z5) => {
          var pe4, Ce4;
          return !((Ce4 = (pe4 = s13.disabled) == null ? void 0 : pe4.call(s13, z5)) != null && Ce4);
        });
        if (y9 !== -1) return y9;
      }
      let u17 = S9.options.findIndex((y9) => !y9.dataRef.current.disabled);
      if (u17 !== -1) return u17;
    }
    return S9.activeOptionIndex;
  }, calculateIndex: W7, compare: x6, isSelected: j8, isActive: U7 }), [P7, _6, r18, E14, l14, S9, s13]);
  n(() => {
    var u17;
    s13 && g6({ type: 7, options: s13.options, disabled: (u17 = s13.disabled) != null ? u17 : null });
  }, [s13, s13 == null ? void 0 : s13.options, s13 == null ? void 0 : s13.disabled]), n(() => {
    S9.dataRef.current = p6;
  }, [p6]);
  let $3 = p6.comboboxState === 0;
  R3($3, [p6.buttonElement, p6.inputElement, p6.optionsElement], () => V5.closeCombobox());
  let N6 = (0, import_react82.useMemo)(() => {
    var u17, y9, z5;
    return { open: p6.comboboxState === 0, disabled: r18, activeIndex: p6.activeOptionIndex, activeOption: p6.activeOptionIndex === null ? null : p6.virtual ? p6.virtual.options[(u17 = p6.activeOptionIndex) != null ? u17 : 0] : (z5 = (y9 = p6.options[p6.activeOptionIndex]) == null ? void 0 : y9.dataRef.current.value) != null ? z5 : null, value: P7 };
  }, [p6, r18, P7]), v5 = o4(() => {
    if (p6.activeOptionIndex !== null) {
      if (V5.setIsTyping(false), p6.virtual) A8(p6.virtual.options[p6.activeOptionIndex]);
      else {
        let { dataRef: u17 } = p6.options[p6.activeOptionIndex];
        A8(u17.current.value);
      }
      V5.goToOption(c9.Specific, p6.activeOptionIndex);
    }
  }), G7 = o4(() => {
    g6({ type: 0 }), F5.current = true;
  }), ne4 = o4(() => {
    g6({ type: 1 }), F5.current = false, i15 == null || i15();
  }), q5 = o4((u17) => {
    g6({ type: 3, isTyping: u17 });
  }), Y3 = o4((u17, y9, z5) => (F5.current = false, u17 === c9.Specific ? g6({ type: 2, focus: c9.Specific, idx: y9, trigger: z5 }) : g6({ type: 2, focus: u17, trigger: z5 }))), Q3 = o4((u17, y9) => (g6({ type: 4, payload: { id: u17, dataRef: y9 } }), () => {
    p6.isActive(y9.current.value) && (F5.current = true), g6({ type: 5, id: u17 });
  })), A8 = o4((u17) => u2(p6.mode, { [0]() {
    return O6 == null ? void 0 : O6(u17);
  }, [1]() {
    let y9 = p6.value.slice(), z5 = y9.findIndex((pe4) => x6(pe4, u17));
    return z5 === -1 ? y9.push(u17) : y9.splice(z5, 1), O6 == null ? void 0 : O6(y9);
  } })), ue4 = o4((u17) => {
    g6({ type: 6, trigger: u17 });
  }), a20 = o4((u17) => {
    g6({ type: 8, element: u17 });
  }), k2 = o4((u17) => {
    g6({ type: 9, element: u17 });
  }), h7 = o4((u17) => {
    g6({ type: 10, element: u17 });
  }), V5 = (0, import_react82.useMemo)(() => ({ onChange: A8, registerOption: Q3, goToOption: Y3, setIsTyping: q5, closeCombobox: ne4, openCombobox: G7, setActivationTrigger: ue4, selectActiveOption: v5, setInputElement: a20, setButtonElement: k2, setOptionsElement: h7 }), []), [C10, B3] = z(), X4 = n13 === null ? {} : { ref: n13 }, Ne5 = (0, import_react82.useCallback)(() => {
    if (_6 !== void 0) return O6 == null ? void 0 : O6(_6);
  }, [O6, _6]);
  return import_react82.default.createElement(B3, { value: C10, props: { htmlFor: (Oe4 = p6.inputElement) == null ? void 0 : Oe4.id }, slot: { open: p6.comboboxState === 0, disabled: r18 } }, import_react82.default.createElement(ve, null, import_react82.default.createElement(ve2.Provider, { value: V5 }, import_react82.default.createElement(ae2.Provider, { value: p6 }, import_react82.default.createElement(c8, { value: u2(p6.comboboxState, { [0]: i11.Open, [1]: i11.Closed }) }, b6 != null && import_react82.default.createElement(j2, { disabled: r18, data: P7 != null ? { [b6]: P7 } : {}, form: f21, onReset: Ne5 }), H({ ourProps: X4, theirProps: H13, slot: N6, defaultTag: _t, name: "Combobox" }))))));
}
var Mt = "input";
function Dt(t11, n13) {
  var q5, Y3, Q3, A8, ue4;
  let e8 = oe("Combobox.Input"), o17 = le("Combobox.Input"), c14 = (0, import_react47.useId)(), d12 = u5(), { id: f21 = d12 || `headlessui-combobox-input-${c14}`, onChange: b6, displayValue: T11, disabled: r18 = e8.disabled || false, autoFocus: i15 = false, type: l14 = "text", ...E14 } = t11, R10 = (0, import_react82.useRef)(null), s13 = y(R10, n13, ye(), o17.setInputElement), M8 = n9(e8.inputElement), H13 = p(), _6 = o4(() => {
    o17.onChange(null), e8.optionsElement && (e8.optionsElement.scrollTop = 0), o17.goToOption(c9.Nothing);
  }), P7 = (0, import_react82.useMemo)(() => {
    var a20;
    return typeof T11 == "function" && e8.value !== void 0 ? (a20 = T11(e8.value)) != null ? a20 : "" : typeof e8.value == "string" ? e8.value : "";
  }, [e8.value, T11]);
  m8(([a20, k2], [h7, V5]) => {
    if (e8.isTyping) return;
    let C10 = R10.current;
    C10 && ((V5 === 0 && k2 === 1 || a20 !== h7) && (C10.value = a20), requestAnimationFrame(() => {
      if (e8.isTyping || !C10 || (M8 == null ? void 0 : M8.activeElement) !== C10) return;
      let { selectionStart: B3, selectionEnd: X4 } = C10;
      Math.abs((X4 != null ? X4 : 0) - (B3 != null ? B3 : 0)) === 0 && B3 === 0 && C10.setSelectionRange(C10.value.length, C10.value.length);
    }));
  }, [P7, e8.comboboxState, M8, e8.isTyping]), m8(([a20], [k2]) => {
    if (a20 === 0 && k2 === 1) {
      if (e8.isTyping) return;
      let h7 = R10.current;
      if (!h7) return;
      let V5 = h7.value, { selectionStart: C10, selectionEnd: B3, selectionDirection: X4 } = h7;
      h7.value = "", h7.value = V5, X4 !== null ? h7.setSelectionRange(C10, B3, X4) : h7.setSelectionRange(C10, B3);
    }
  }, [e8.comboboxState]);
  let O6 = (0, import_react82.useRef)(false), S9 = o4(() => {
    O6.current = true;
  }), g6 = o4(() => {
    H13.nextFrame(() => {
      O6.current = false;
    });
  }), F5 = o4((a20) => {
    switch (o17.setIsTyping(true), a20.key) {
      case o8.Enter:
        if (e8.comboboxState !== 0 || O6.current) return;
        if (a20.preventDefault(), a20.stopPropagation(), e8.activeOptionIndex === null) {
          o17.closeCombobox();
          return;
        }
        o17.selectActiveOption(), e8.mode === 0 && o17.closeCombobox();
        break;
      case o8.ArrowDown:
        return a20.preventDefault(), a20.stopPropagation(), u2(e8.comboboxState, { [0]: () => o17.goToOption(c9.Next), [1]: () => o17.openCombobox() });
      case o8.ArrowUp:
        return a20.preventDefault(), a20.stopPropagation(), u2(e8.comboboxState, { [0]: () => o17.goToOption(c9.Previous), [1]: () => {
          (0, import_react_dom6.flushSync)(() => o17.openCombobox()), e8.value || o17.goToOption(c9.Last);
        } });
      case o8.Home:
        if (a20.shiftKey) break;
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.First);
      case o8.PageUp:
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.First);
      case o8.End:
        if (a20.shiftKey) break;
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.Last);
      case o8.PageDown:
        return a20.preventDefault(), a20.stopPropagation(), o17.goToOption(c9.Last);
      case o8.Escape:
        return e8.comboboxState !== 0 ? void 0 : (a20.preventDefault(), e8.optionsElement && !e8.optionsPropsRef.current.static && a20.stopPropagation(), e8.mode === 0 && e8.value === null && _6(), o17.closeCombobox());
      case o8.Tab:
        if (e8.comboboxState !== 0) return;
        e8.mode === 0 && e8.activationTrigger !== 1 && o17.selectActiveOption(), o17.closeCombobox();
        break;
    }
  }), w13 = o4((a20) => {
    b6 == null || b6(a20), e8.mode === 0 && a20.target.value === "" && _6(), o17.openCombobox();
  }), x6 = o4((a20) => {
    var h7, V5, C10;
    let k2 = (h7 = a20.relatedTarget) != null ? h7 : r12.find((B3) => B3 !== a20.currentTarget);
    if (!((V5 = e8.optionsElement) != null && V5.contains(k2)) && !((C10 = e8.buttonElement) != null && C10.contains(k2)) && e8.comboboxState === 0) return a20.preventDefault(), e8.mode === 0 && e8.value === null && _6(), o17.closeCombobox();
  }), W7 = o4((a20) => {
    var h7, V5, C10;
    let k2 = (h7 = a20.relatedTarget) != null ? h7 : r12.find((B3) => B3 !== a20.currentTarget);
    (V5 = e8.buttonElement) != null && V5.contains(k2) || (C10 = e8.optionsElement) != null && C10.contains(k2) || e8.disabled || e8.immediate && e8.comboboxState !== 0 && H13.microTask(() => {
      (0, import_react_dom6.flushSync)(() => o17.openCombobox()), o17.setActivationTrigger(1);
    });
  }), j8 = I2(), U7 = G(), { isFocused: p6, focusProps: $3 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: i15 }), { isHovered: N6, hoverProps: v5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: r18 }), G7 = (0, import_react82.useMemo)(() => ({ open: e8.comboboxState === 0, disabled: r18, hover: N6, focus: p6, autofocus: i15 }), [e8, N6, p6, i15, r18]), ne4 = D({ ref: s13, id: f21, role: "combobox", type: l14, "aria-controls": (q5 = e8.optionsElement) == null ? void 0 : q5.id, "aria-expanded": e8.comboboxState === 0, "aria-activedescendant": e8.activeOptionIndex === null ? void 0 : e8.virtual ? (Y3 = e8.options.find((a20) => !a20.dataRef.current.disabled && e8.compare(a20.dataRef.current.value, e8.virtual.options[e8.activeOptionIndex]))) == null ? void 0 : Y3.id : (Q3 = e8.options[e8.activeOptionIndex]) == null ? void 0 : Q3.id, "aria-labelledby": j8, "aria-describedby": U7, "aria-autocomplete": "list", defaultValue: (ue4 = (A8 = t11.defaultValue) != null ? A8 : e8.defaultValue !== void 0 ? T11 == null ? void 0 : T11(e8.defaultValue) : null) != null ? ue4 : e8.defaultValue, disabled: r18 || void 0, autoFocus: i15, onCompositionStart: S9, onCompositionEnd: g6, onKeyDown: F5, onChange: w13, onFocus: W7, onBlur: x6 }, $3, v5);
  return H({ ourProps: ne4, theirProps: E14, slot: G7, defaultTag: Mt, name: "Combobox.Input" });
}
var Ft = "button";
function Vt(t11, n13) {
  var w13;
  let e8 = oe("Combobox.Button"), o17 = le("Combobox.Button"), c14 = y(n13, o17.setButtonElement), d12 = I(), f21 = (0, import_react47.useId)(), { id: b6 = `headlessui-combobox-button-${f21}`, disabled: T11 = e8.disabled || false, autoFocus: r18 = false, ...i15 } = t11, l14 = i10(e8.inputElement), E14 = o4((x6) => {
    switch (x6.key) {
      case o8.Space:
      case o8.Enter:
        x6.preventDefault(), x6.stopPropagation(), e8.comboboxState === 1 && (0, import_react_dom6.flushSync)(() => o17.openCombobox()), l14();
        return;
      case o8.ArrowDown:
        x6.preventDefault(), x6.stopPropagation(), e8.comboboxState === 1 && ((0, import_react_dom6.flushSync)(() => o17.openCombobox()), e8.value || o17.goToOption(c9.First)), l14();
        return;
      case o8.ArrowUp:
        x6.preventDefault(), x6.stopPropagation(), e8.comboboxState === 1 && ((0, import_react_dom6.flushSync)(() => o17.openCombobox()), e8.value || o17.goToOption(c9.Last)), l14();
        return;
      case o8.Escape:
        if (e8.comboboxState !== 0) return;
        x6.preventDefault(), e8.optionsElement && !e8.optionsPropsRef.current.static && x6.stopPropagation(), (0, import_react_dom6.flushSync)(() => o17.closeCombobox()), l14();
        return;
      default:
        return;
    }
  }), R10 = o4((x6) => {
    x6.preventDefault(), !r5(x6.currentTarget) && (x6.button === g2.Left && (e8.comboboxState === 0 ? o17.closeCombobox() : o17.openCombobox()), l14());
  }), s13 = I2([b6]), { isFocusVisible: M8, focusProps: H13 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r18 }), { isHovered: _6, hoverProps: P7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: T11 }), { pressed: O6, pressProps: S9 } = w({ disabled: T11 }), g6 = (0, import_react82.useMemo)(() => ({ open: e8.comboboxState === 0, active: O6 || e8.comboboxState === 0, disabled: T11, value: e8.value, hover: _6, focus: M8 }), [e8, _6, M8, O6, T11]), F5 = D({ ref: c14, id: b6, type: e6(t11, e8.buttonElement), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": (w13 = e8.optionsElement) == null ? void 0 : w13.id, "aria-expanded": e8.comboboxState === 0, "aria-labelledby": s13, disabled: T11 || void 0, autoFocus: r18, onMouseDown: R10, onKeyDown: E14 }, H13, P7, S9);
  return H({ mergeRefs: d12, ourProps: F5, theirProps: i15, slot: g6, defaultTag: Ft, name: "Combobox.Button" });
}
var Lt = "div";
var Bt = M.RenderStrategy | M.Static;
function wt(t11, n13) {
  var q5, Y3, Q3;
  let e8 = (0, import_react47.useId)(), { id: o17 = `headlessui-combobox-options-${e8}`, hold: c14 = false, anchor: d12, portal: f21 = false, modal: b6 = true, transition: T11 = false, ...r18 } = t11, i15 = oe("Combobox.Options"), l14 = le("Combobox.Options"), E14 = xe(d12);
  E14 && (f21 = true);
  let [R10, s13] = Re2(E14), [M8, H13] = (0, import_react82.useState)(null), _6 = be(), P7 = y(n13, E14 ? R10 : null, l14.setOptionsElement, H13), O6 = n9(i15.optionsElement), S9 = u13(), [g6, F5] = R4(T11, M8, S9 !== null ? (S9 & i11.Open) === i11.Open : i15.comboboxState === 0);
  m6(g6, i15.inputElement, l14.closeCombobox);
  let w13 = i15.__demoMode ? false : b6 && i15.comboboxState === 0;
  f10(w13, O6);
  let x6 = i15.__demoMode ? false : b6 && i15.comboboxState === 0;
  y3(x6, { allowed: (0, import_react82.useCallback)(() => [i15.inputElement, i15.buttonElement, i15.optionsElement], [i15.inputElement, i15.buttonElement, i15.optionsElement]) }), n(() => {
    var A8;
    i15.optionsPropsRef.current.static = (A8 = t11.static) != null ? A8 : false;
  }, [i15.optionsPropsRef, t11.static]), n(() => {
    i15.optionsPropsRef.current.hold = c14;
  }, [i15.optionsPropsRef, c14]), F2(i15.comboboxState === 0, { container: i15.optionsElement, accept(A8) {
    return A8.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : A8.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(A8) {
    A8.setAttribute("role", "none");
  } });
  let W7 = I2([(q5 = i15.buttonElement) == null ? void 0 : q5.id]), j8 = (0, import_react82.useMemo)(() => ({ open: i15.comboboxState === 0, option: void 0 }), [i15.comboboxState]), U7 = o4(() => {
    l14.setActivationTrigger(0);
  }), p6 = o4((A8) => {
    A8.preventDefault(), l14.setActivationTrigger(0);
  }), $3 = D(E14 ? _6() : {}, { "aria-labelledby": W7, role: "listbox", "aria-multiselectable": i15.mode === 1 ? true : void 0, id: o17, ref: P7, style: { ...r18.style, ...s13, "--input-width": d3(i15.inputElement, true).width, "--button-width": d3(i15.buttonElement, true).width }, onWheel: i15.activationTrigger === 0 ? void 0 : U7, onMouseDown: p6, ...H4(F5) }), N6 = g6 && i15.comboboxState === 1, v5 = l7(N6, (Y3 = i15.virtual) == null ? void 0 : Y3.options), G7 = l7(N6, i15.value), ne4 = o4((A8) => i15.compare(G7, A8));
  if (i15.virtual) {
    if (v5 === void 0) throw new Error("Missing `options` in virtual mode");
    Object.assign(r18, { children: import_react82.default.createElement(ae2.Provider, { value: v5 !== i15.virtual.options ? { ...i15, virtual: { ...i15.virtual, options: v5 } } : i15 }, import_react82.default.createElement(At, { slot: j8 }, r18.children)) });
  }
  return import_react82.default.createElement(te, { enabled: f21 ? t11.static || g6 : false }, import_react82.default.createElement(ae2.Provider, { value: i15.mode === 1 ? i15 : { ...i15, isSelected: ne4 } }, H({ ourProps: $3, theirProps: { ...r18, children: import_react82.default.createElement(f12, { freeze: N6 }, typeof r18.children == "function" ? (Q3 = r18.children) == null ? void 0 : Q3.call(r18, j8) : r18.children) }, slot: j8, defaultTag: Lt, features: Bt, visible: g6, name: "Combobox.Options" })));
}
var Nt = "div";
function kt(t11, n13) {
  var U7, p6, $3, N6;
  let e8 = oe("Combobox.Option"), o17 = le("Combobox.Option"), c14 = (0, import_react47.useId)(), { id: d12 = `headlessui-combobox-option-${c14}`, value: f21, disabled: b6 = ($3 = (p6 = (U7 = e8.virtual) == null ? void 0 : U7.disabled) == null ? void 0 : p6.call(U7, f21)) != null ? $3 : false, order: T11 = null, ...r18 } = t11, i15 = i10(e8.inputElement), l14 = e8.virtual ? e8.activeOptionIndex === e8.calculateIndex(f21) : e8.activeOptionIndex === null ? false : ((N6 = e8.options[e8.activeOptionIndex]) == null ? void 0 : N6.id) === d12, E14 = e8.isSelected(f21), R10 = (0, import_react82.useRef)(null), s13 = s3({ disabled: b6, value: f21, domRef: R10, order: T11 }), M8 = (0, import_react82.useContext)(we), H13 = y(n13, R10, M8 ? M8.measureElement : null), _6 = o4(() => {
    o17.setIsTyping(false), o17.onChange(f21);
  });
  n(() => o17.registerOption(d12, s13), [s13, d12]);
  let P7 = (0, import_react82.useRef)(!(e8.virtual || e8.__demoMode));
  n(() => {
    if (!e8.virtual && !e8.__demoMode) return o2().requestAnimationFrame(() => {
      P7.current = true;
    });
  }, [e8.virtual, e8.__demoMode]), n(() => {
    if (P7.current && e8.comboboxState === 0 && l14 && e8.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var v5, G7;
      (G7 = (v5 = R10.current) == null ? void 0 : v5.scrollIntoView) == null || G7.call(v5, { block: "nearest" });
    });
  }, [R10, l14, e8.comboboxState, e8.activationTrigger, e8.activeOptionIndex]);
  let O6 = o4((v5) => {
    v5.preventDefault(), v5.button === g2.Left && (b6 || (_6(), n8() || requestAnimationFrame(() => i15()), e8.mode === 0 && o17.closeCombobox()));
  }), S9 = o4(() => {
    if (b6) return o17.goToOption(c9.Nothing);
    let v5 = e8.calculateIndex(f21);
    o17.goToOption(c9.Specific, v5);
  }), g6 = u11(), F5 = o4((v5) => g6.update(v5)), w13 = o4((v5) => {
    if (!g6.wasMoved(v5) || b6 || l14) return;
    let G7 = e8.calculateIndex(f21);
    o17.goToOption(c9.Specific, G7, 0);
  }), x6 = o4((v5) => {
    g6.wasMoved(v5) && (b6 || l14 && (e8.optionsPropsRef.current.hold || o17.goToOption(c9.Nothing)));
  }), W7 = (0, import_react82.useMemo)(() => ({ active: l14, focus: l14, selected: E14, disabled: b6 }), [l14, E14, b6]);
  return H({ ourProps: { id: d12, ref: H13, role: "option", tabIndex: b6 === true ? void 0 : -1, "aria-disabled": b6 === true ? true : void 0, "aria-selected": E14, disabled: void 0, onMouseDown: O6, onFocus: S9, onPointerEnter: F5, onMouseEnter: F5, onPointerMove: w13, onMouseMove: w13, onPointerLeave: x6, onMouseLeave: x6 }, theirProps: r18, slot: W7, defaultTag: Nt, name: "Combobox.Option" });
}
var Ht = W(ht);
var Ut = W(Vt);
var Gt = W(Dt);
var zt = K;
var Kt = W(wt);
var Wt = W(kt);
var Ho = Object.assign(Ht, { Input: Gt, Button: Ut, Label: zt, Options: Kt, Option: Wt });

// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
var import_react83 = __toESM(require_react(), 1);
var E10 = import_react83.Fragment;
function _4(o17, n13) {
  let { ...p6 } = o17, e8 = false, { isFocusVisible: t11, focusProps: s13 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), { isHovered: r18, hoverProps: i15 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: a20, pressProps: T11 } = w({ disabled: e8 }), l14 = D({ ref: n13 }, s13, i15, T11), m9 = (0, import_react83.useMemo)(() => ({ hover: r18, focus: t11, active: a20 }), [r18, t11, a20]);
  return H({ ourProps: l14, theirProps: p6, slot: m9, defaultTag: E10, name: "DataInteractive" });
}
var C5 = W(_4);

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var import_react90 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a13(o17, r18 = typeof document != "undefined" ? document.defaultView : null, t11) {
  let n13 = x(o17, "escape");
  E6(r18, "keydown", (e8) => {
    n13 && (e8.defaultPrevented || e8.key === o8.Escape && t11(e8));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
var import_react84 = __toESM(require_react(), 1);
function f16() {
  var t11;
  let [e8] = (0, import_react84.useState)(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o17, c14] = (0, import_react84.useState)((t11 = e8 == null ? void 0 : e8.matches) != null ? t11 : false);
  return n(() => {
    if (!e8) return;
    function n13(r18) {
      c14(r18.matches);
    }
    return e8.addEventListener("change", n13), () => e8.removeEventListener("change", n13);
  }, [e8]), o17;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
var import_react85 = __toESM(require_react(), 1);
function R7({ defaultContainers: l14 = [], portals: n13, mainTreeNode: o17 } = {}) {
  let r18 = n9(o17), u17 = o4(() => {
    var i15, c14;
    let t11 = [];
    for (let e8 of l14) e8 !== null && (e8 instanceof HTMLElement ? t11.push(e8) : "current" in e8 && e8.current instanceof HTMLElement && t11.push(e8.current));
    if (n13 != null && n13.current) for (let e8 of n13.current) t11.push(e8);
    for (let e8 of (i15 = r18 == null ? void 0 : r18.querySelectorAll("html > *, body > *")) != null ? i15 : []) e8 !== document.body && e8 !== document.head && e8 instanceof HTMLElement && e8.id !== "headlessui-portal-root" && (o17 && (e8.contains(o17) || e8.contains((c14 = o17 == null ? void 0 : o17.getRootNode()) == null ? void 0 : c14.host)) || t11.some((m9) => e8.contains(m9)) || t11.push(e8));
    return t11;
  });
  return { resolveContainers: u17, contains: o4((t11) => u17().some((i15) => i15.contains(t11))) };
}
var a14 = (0, import_react85.createContext)(null);
function O3({ children: l14, node: n13 }) {
  let [o17, r18] = (0, import_react85.useState)(null), u17 = b4(n13 != null ? n13 : o17);
  return import_react85.default.createElement(a14.Provider, { value: u17 }, l14, u17 === null && import_react85.default.createElement(T2, { features: s4.Hidden, ref: (t11) => {
    var i15, c14;
    if (t11) {
      for (let e8 of (c14 = (i15 = u(t11)) == null ? void 0 : i15.querySelectorAll("html > *, body > *")) != null ? c14 : []) if (e8 !== document.body && e8 !== document.head && e8 instanceof HTMLElement && e8 != null && e8.contains(t11)) {
        r18(e8);
        break;
      }
    }
  } }));
}
function b4(l14 = null) {
  var n13;
  return (n13 = (0, import_react85.useContext)(a14)) != null ? n13 : l14;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
var import_react88 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react86 = __toESM(require_react(), 1);
function f18() {
  let e8 = (0, import_react86.useRef)(false);
  return n(() => (e8.current = true, () => {
    e8.current = false;
  }), []), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var import_react87 = __toESM(require_react(), 1);
var a15 = ((r18) => (r18[r18.Forwards = 0] = "Forwards", r18[r18.Backwards = 1] = "Backwards", r18))(a15 || {});
function u16() {
  let e8 = (0, import_react87.useRef)(0);
  return s5(true, "keydown", (r18) => {
    r18.key === "Tab" && (e8.current = r18.shiftKey ? 1 : 0);
  }, true), e8;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
function U3(o17) {
  if (!o17) return /* @__PURE__ */ new Set();
  if (typeof o17 == "function") return new Set(o17());
  let e8 = /* @__PURE__ */ new Set();
  for (let t11 of o17.current) t11.current instanceof HTMLElement && e8.add(t11.current);
  return e8;
}
var Y = "div";
var x2 = ((n13) => (n13[n13.None = 0] = "None", n13[n13.InitialFocus = 1] = "InitialFocus", n13[n13.TabLock = 2] = "TabLock", n13[n13.FocusLock = 4] = "FocusLock", n13[n13.RestoreFocus = 8] = "RestoreFocus", n13[n13.AutoFocus = 16] = "AutoFocus", n13))(x2 || {});
function Z2(o17, e8) {
  let t11 = (0, import_react88.useRef)(null), r18 = y(t11, e8), { initialFocus: s13, initialFocusFallback: a20, containers: n13, features: u17 = 15, ...f21 } = o17;
  l9() || (u17 = 0);
  let l14 = n9(t11);
  w6(u17, { ownerDocument: l14 });
  let i15 = ee3(u17, { ownerDocument: l14, container: t11, initialFocus: s13, initialFocusFallback: a20 });
  te2(u17, { ownerDocument: l14, container: t11, containers: n13, previousActiveElement: i15 });
  let R10 = u16(), g6 = o4((c14) => {
    let m9 = t11.current;
    if (!m9) return;
    ((B3) => B3())(() => {
      u2(R10.current, { [a15.Forwards]: () => {
        P5(m9, F.First, { skipElements: [c14.relatedTarget, a20] });
      }, [a15.Backwards]: () => {
        P5(m9, F.Last, { skipElements: [c14.relatedTarget, a20] });
      } });
    });
  }), v5 = x(!!(u17 & 2), "focus-trap#tab-lock"), N6 = p(), F5 = (0, import_react88.useRef)(false), k2 = { ref: r18, onKeyDown(c14) {
    c14.key == "Tab" && (F5.current = true, N6.requestAnimationFrame(() => {
      F5.current = false;
    }));
  }, onBlur(c14) {
    if (!(u17 & 4)) return;
    let m9 = U3(n13);
    t11.current instanceof HTMLElement && m9.add(t11.current);
    let d12 = c14.relatedTarget;
    d12 instanceof HTMLElement && d12.dataset.headlessuiFocusGuard !== "true" && (I5(m9, d12) || (F5.current ? P5(t11.current, u2(R10.current, { [a15.Forwards]: () => F.Next, [a15.Backwards]: () => F.Previous }) | F.WrapAround, { relativeTo: c14.target }) : c14.target instanceof HTMLElement && I3(c14.target)));
  } };
  return import_react88.default.createElement(import_react88.default.Fragment, null, v5 && import_react88.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g6, features: s4.Focusable }), H({ ourProps: k2, theirProps: f21, defaultTag: Y, name: "FocusTrap" }), v5 && import_react88.default.createElement(T2, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: g6, features: s4.Focusable }));
}
var $ = W(Z2);
var Fe2 = Object.assign($, { features: x2 });
function D7(o17 = true) {
  let e8 = (0, import_react88.useRef)(r12.slice());
  return m8(([t11], [r18]) => {
    r18 === true && t11 === false && t(() => {
      e8.current.splice(0);
    }), r18 === false && t11 === true && (e8.current = r12.slice());
  }, [o17, r12, e8]), o4(() => {
    var t11;
    return (t11 = e8.current.find((r18) => r18 != null && r18.isConnected)) != null ? t11 : null;
  });
}
function w6(o17, { ownerDocument: e8 }) {
  let t11 = !!(o17 & 8), r18 = D7(t11);
  m8(() => {
    t11 || (e8 == null ? void 0 : e8.activeElement) === (e8 == null ? void 0 : e8.body) && I3(r18());
  }, [t11]), c10(() => {
    t11 && I3(r18());
  });
}
function ee3(o17, { ownerDocument: e8, container: t11, initialFocus: r18, initialFocusFallback: s13 }) {
  let a20 = (0, import_react88.useRef)(null), n13 = x(!!(o17 & 1), "focus-trap#initial-focus"), u17 = f18();
  return m8(() => {
    if (o17 === 0) return;
    if (!n13) {
      s13 != null && s13.current && I3(s13.current);
      return;
    }
    let f21 = t11.current;
    f21 && t(() => {
      if (!u17.current) return;
      let l14 = e8 == null ? void 0 : e8.activeElement;
      if (r18 != null && r18.current) {
        if ((r18 == null ? void 0 : r18.current) === l14) {
          a20.current = l14;
          return;
        }
      } else if (f21.contains(l14)) {
        a20.current = l14;
        return;
      }
      if (r18 != null && r18.current) I3(r18.current);
      else {
        if (o17 & 16) {
          if (P5(f21, F.First | F.AutoFocus) !== T6.Error) return;
        } else if (P5(f21, F.First) !== T6.Error) return;
        if (s13 != null && s13.current && (I3(s13.current), (e8 == null ? void 0 : e8.activeElement) === s13.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a20.current = e8 == null ? void 0 : e8.activeElement;
    });
  }, [s13, n13, o17]), a20;
}
function te2(o17, { ownerDocument: e8, container: t11, containers: r18, previousActiveElement: s13 }) {
  let a20 = f18(), n13 = !!(o17 & 4);
  E6(e8 == null ? void 0 : e8.defaultView, "focus", (u17) => {
    if (!n13 || !a20.current) return;
    let f21 = U3(r18);
    t11.current instanceof HTMLElement && f21.add(t11.current);
    let l14 = s13.current;
    if (!l14) return;
    let i15 = u17.target;
    i15 && i15 instanceof HTMLElement ? I5(f21, i15) ? (s13.current = i15, I3(i15)) : (u17.preventDefault(), u17.stopPropagation(), I3(l14)) : I3(s13.current);
  }, true);
}
function I5(o17, e8) {
  for (let t11 of o17) if (t11.contains(e8)) return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
var import_react89 = __toESM(require_react(), 1);
function ue2(e8) {
  var t11;
  return !!(e8.enter || e8.enterFrom || e8.enterTo || e8.leave || e8.leaveFrom || e8.leaveTo) || ((t11 = e8.as) != null ? t11 : de) !== import_react89.Fragment || import_react89.default.Children.count(e8.children) === 1;
}
var w7 = (0, import_react89.createContext)(null);
w7.displayName = "TransitionContext";
var Ne = ((n13) => (n13.Visible = "visible", n13.Hidden = "hidden", n13))(Ne || {});
function _e() {
  let e8 = (0, import_react89.useContext)(w7);
  if (e8 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
function De() {
  let e8 = (0, import_react89.useContext)(M6);
  if (e8 === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
var M6 = (0, import_react89.createContext)(null);
M6.displayName = "NestingContext";
function U4(e8) {
  return "children" in e8 ? U4(e8.children) : e8.current.filter(({ el: t11 }) => t11.current !== null).filter(({ state: t11 }) => t11 === "visible").length > 0;
}
function Te(e8, t11) {
  let n13 = s3(e8), l14 = (0, import_react89.useRef)([]), y9 = f18(), R10 = p(), T11 = o4((o17, i15 = O.Hidden) => {
    let a20 = l14.current.findIndex(({ el: s13 }) => s13 === o17);
    a20 !== -1 && (u2(i15, { [O.Unmount]() {
      l14.current.splice(a20, 1);
    }, [O.Hidden]() {
      l14.current[a20].state = "hidden";
    } }), R10.microTask(() => {
      var s13;
      !U4(l14) && y9.current && ((s13 = n13.current) == null || s13.call(n13));
    }));
  }), P7 = o4((o17) => {
    let i15 = l14.current.find(({ el: a20 }) => a20 === o17);
    return i15 ? i15.state !== "visible" && (i15.state = "visible") : l14.current.push({ el: o17, state: "visible" }), () => T11(o17, O.Unmount);
  }), p6 = (0, import_react89.useRef)([]), m9 = (0, import_react89.useRef)(Promise.resolve()), C10 = (0, import_react89.useRef)({ enter: [], leave: [] }), h7 = o4((o17, i15, a20) => {
    p6.current.splice(0), t11 && (t11.chains.current[i15] = t11.chains.current[i15].filter(([s13]) => s13 !== o17)), t11 == null || t11.chains.current[i15].push([o17, new Promise((s13) => {
      p6.current.push(s13);
    })]), t11 == null || t11.chains.current[i15].push([o17, new Promise((s13) => {
      Promise.all(C10.current[i15].map(([r18, d12]) => d12)).then(() => s13());
    })]), i15 === "enter" ? m9.current = m9.current.then(() => t11 == null ? void 0 : t11.wait.current).then(() => a20(i15)) : a20(i15);
  }), g6 = o4((o17, i15, a20) => {
    Promise.all(C10.current[i15].splice(0).map(([s13, r18]) => r18)).then(() => {
      var s13;
      (s13 = p6.current.shift()) == null || s13();
    }).then(() => a20(i15));
  });
  return (0, import_react89.useMemo)(() => ({ children: l14, register: P7, unregister: T11, onStart: h7, onStop: g6, wait: m9, chains: C10 }), [P7, T11, l14, h7, g6, C10, m9]);
}
var de = import_react89.Fragment;
var fe2 = M.RenderStrategy;
function He2(e8, t11) {
  var ee9, te4;
  let { transition: n13 = true, beforeEnter: l14, afterEnter: y9, beforeLeave: R10, afterLeave: T11, enter: P7, enterFrom: p6, enterTo: m9, entered: C10, leave: h7, leaveFrom: g6, leaveTo: o17, ...i15 } = e8, [a20, s13] = (0, import_react89.useState)(null), r18 = (0, import_react89.useRef)(null), d12 = ue2(e8), j8 = y(...d12 ? [r18, t11, s13] : t11 === null ? [] : [t11]), v5 = (ee9 = i15.unmount) == null || ee9 ? O.Unmount : O.Hidden, { show: c14, appear: z5, initial: K4 } = _e(), [b6, G7] = (0, import_react89.useState)(c14 ? "visible" : "hidden"), Q3 = De(), { register: A8, unregister: I7 } = Q3;
  n(() => A8(r18), [A8, r18]), n(() => {
    if (v5 === O.Hidden && r18.current) {
      if (c14 && b6 !== "visible") {
        G7("visible");
        return;
      }
      return u2(b6, { ["hidden"]: () => I7(r18), ["visible"]: () => A8(r18) });
    }
  }, [b6, r18, A8, I7, c14, v5]);
  let B3 = l9();
  n(() => {
    if (d12 && B3 && b6 === "visible" && r18.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r18, b6, B3, d12]);
  let ce4 = K4 && !z5, Y3 = z5 && c14 && K4, W7 = (0, import_react89.useRef)(false), L9 = Te(() => {
    W7.current || (G7("hidden"), I7(r18));
  }, Q3), Z7 = o4((k2) => {
    W7.current = true;
    let F5 = k2 ? "enter" : "leave";
    L9.onStart(r18, F5, (D9) => {
      D9 === "enter" ? l14 == null || l14() : D9 === "leave" && (R10 == null || R10());
    });
  }), $3 = o4((k2) => {
    let F5 = k2 ? "enter" : "leave";
    W7.current = false, L9.onStop(r18, F5, (D9) => {
      D9 === "enter" ? y9 == null || y9() : D9 === "leave" && (T11 == null || T11());
    }), F5 === "leave" && !U4(L9) && (G7("hidden"), I7(r18));
  });
  (0, import_react89.useEffect)(() => {
    d12 && n13 || (Z7(c14), $3(c14));
  }, [c14, d12, n13]);
  let pe4 = /* @__PURE__ */ (() => !(!n13 || !d12 || !B3 || ce4))(), [, u17] = R4(pe4, a20, c14, { start: Z7, end: $3 }), Ce4 = m2({ ref: j8, className: ((te4 = t3(i15.className, Y3 && P7, Y3 && p6, u17.enter && P7, u17.enter && u17.closed && p6, u17.enter && !u17.closed && m9, u17.leave && h7, u17.leave && !u17.closed && g6, u17.leave && u17.closed && o17, !u17.transition && c14 && C10)) == null ? void 0 : te4.trim()) || void 0, ...H4(u17) }), _6 = 0;
  return b6 === "visible" && (_6 |= i11.Open), b6 === "hidden" && (_6 |= i11.Closed), u17.enter && (_6 |= i11.Opening), u17.leave && (_6 |= i11.Closing), import_react89.default.createElement(M6.Provider, { value: L9 }, import_react89.default.createElement(c8, { value: _6 }, H({ ourProps: Ce4, theirProps: i15, defaultTag: de, features: fe2, visible: b6 === "visible", name: "Transition.Child" })));
}
function Ae(e8, t11) {
  let { show: n13, appear: l14 = false, unmount: y9 = true, ...R10 } = e8, T11 = (0, import_react89.useRef)(null), P7 = ue2(e8), p6 = y(...P7 ? [T11, t11] : t11 === null ? [] : [t11]);
  l9();
  let m9 = u13();
  if (n13 === void 0 && m9 !== null && (n13 = (m9 & i11.Open) === i11.Open), n13 === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [C10, h7] = (0, import_react89.useState)(n13 ? "visible" : "hidden"), g6 = Te(() => {
    n13 || h7("hidden");
  }), [o17, i15] = (0, import_react89.useState)(true), a20 = (0, import_react89.useRef)([n13]);
  n(() => {
    o17 !== false && a20.current[a20.current.length - 1] !== n13 && (a20.current.push(n13), i15(false));
  }, [a20, n13]);
  let s13 = (0, import_react89.useMemo)(() => ({ show: n13, appear: l14, initial: o17 }), [n13, l14, o17]);
  n(() => {
    n13 ? h7("visible") : !U4(g6) && T11.current !== null && h7("hidden");
  }, [n13, g6]);
  let r18 = { unmount: y9 }, d12 = o4(() => {
    var v5;
    o17 && i15(false), (v5 = e8.beforeEnter) == null || v5.call(e8);
  }), j8 = o4(() => {
    var v5;
    o17 && i15(false), (v5 = e8.beforeLeave) == null || v5.call(e8);
  });
  return import_react89.default.createElement(M6.Provider, { value: g6 }, import_react89.default.createElement(w7.Provider, { value: s13 }, H({ ourProps: { ...r18, as: import_react89.Fragment, children: import_react89.default.createElement(me2, { ref: p6, ...r18, ...R10, beforeEnter: d12, beforeLeave: j8 }) }, theirProps: {}, defaultTag: import_react89.Fragment, features: fe2, visible: C10 === "visible", name: "Transition" })));
}
function Ie2(e8, t11) {
  let n13 = (0, import_react89.useContext)(w7) !== null, l14 = u13() !== null;
  return import_react89.default.createElement(import_react89.default.Fragment, null, !n13 && l14 ? import_react89.default.createElement(X, { ref: t11, ...e8 }) : import_react89.default.createElement(me2, { ref: t11, ...e8 }));
}
var X = W(Ae);
var me2 = W(He2);
var Le = W(Ie2);
var Xe = Object.assign(X, { Child: Le, Root: X });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
var Le2 = ((o17) => (o17[o17.Open = 0] = "Open", o17[o17.Closed = 1] = "Closed", o17))(Le2 || {});
var Oe = ((t11) => (t11[t11.SetTitleId = 0] = "SetTitleId", t11))(Oe || {});
var he2 = { [0](e8, t11) {
  return e8.titleId === t11.id ? e8 : { ...e8, titleId: t11.id };
} };
var w8 = (0, import_react90.createContext)(null);
w8.displayName = "DialogContext";
function L5(e8) {
  let t11 = (0, import_react90.useContext)(w8);
  if (t11 === null) {
    let o17 = new Error(`<${e8} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, L5), o17;
  }
  return t11;
}
function Se(e8, t11) {
  return u2(t11.type, he2, e8, t11);
}
var X2 = W(function(t11, o17) {
  let a20 = (0, import_react47.useId)(), { id: l14 = `headlessui-dialog-${a20}`, open: i15, onClose: p6, initialFocus: d12, role: s13 = "dialog", autoFocus: c14 = true, __demoMode: f21 = false, unmount: D9 = false, ...O6 } = t11, h7 = (0, import_react90.useRef)(false);
  s13 = function() {
    return s13 === "dialog" || s13 === "alertdialog" ? s13 : (h7.current || (h7.current = true, console.warn(`Invalid role [${s13}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let P7 = u13();
  i15 === void 0 && P7 !== null && (i15 = (P7 & i11.Open) === i11.Open);
  let u17 = (0, import_react90.useRef)(null), V5 = y(u17, o17), F5 = n9(u17), T11 = i15 ? 0 : 1, [b6, q5] = (0, import_react90.useReducer)(Se, { titleId: null, descriptionId: null, panelRef: (0, import_react90.createRef)() }), g6 = o4(() => p6(false)), G7 = o4((r18) => q5({ type: 0, id: r18 })), m9 = l9() ? T11 === 0 : false, [z5, Q3] = ee(), Z7 = { get current() {
    var r18;
    return (r18 = b6.panelRef.current) != null ? r18 : u17.current;
  } }, v5 = b4(), { resolveContainers: S9 } = R7({ mainTreeNode: v5, portals: z5, defaultContainers: [Z7] }), k2 = P7 !== null ? (P7 & i11.Closing) === i11.Closing : false;
  y3(f21 || k2 ? false : m9, { allowed: o4(() => {
    var r18, U7;
    return [(U7 = (r18 = u17.current) == null ? void 0 : r18.closest("[data-headlessui-portal]")) != null ? U7 : null];
  }), disallowed: o4(() => {
    var r18;
    return [(r18 = v5 == null ? void 0 : v5.closest("body > *:not(#headlessui-portal-root)")) != null ? r18 : null];
  }) }), R3(m9, S9, (r18) => {
    r18.preventDefault(), g6();
  }), a13(m9, F5 == null ? void 0 : F5.defaultView, (r18) => {
    r18.preventDefault(), r18.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), g6();
  }), f10(f21 || k2 ? false : m9, F5, S9), m6(m9, u17, g6);
  let [ee9, te4] = U(), oe4 = (0, import_react90.useMemo)(() => [{ dialogState: T11, close: g6, setTitleId: G7, unmount: D9 }, b6], [T11, b6, g6, G7, D9]), B3 = (0, import_react90.useMemo)(() => ({ open: T11 === 0 }), [T11]), ne4 = { ref: V5, id: l14, role: s13, tabIndex: -1, "aria-modal": f21 ? void 0 : T11 === 0 ? true : void 0, "aria-labelledby": b6.titleId, "aria-describedby": ee9, unmount: D9 }, re2 = !f16(), y9 = x2.None;
  return m9 && !f21 && (y9 |= x2.RestoreFocus, y9 |= x2.TabLock, c14 && (y9 |= x2.AutoFocus), re2 && (y9 |= x2.InitialFocus)), import_react90.default.createElement(s7, null, import_react90.default.createElement(l10, { force: true }, import_react90.default.createElement(te, null, import_react90.default.createElement(w8.Provider, { value: oe4 }, import_react90.default.createElement(J2, { target: u17 }, import_react90.default.createElement(l10, { force: false }, import_react90.default.createElement(te4, { slot: B3 }, import_react90.default.createElement(Q3, null, import_react90.default.createElement(Fe2, { initialFocus: d12, initialFocusFallback: u17, containers: S9, features: y9 }, import_react90.default.createElement(C3, { value: g6 }, H({ ourProps: ne4, theirProps: O6, slot: B3, defaultTag: Ie3, features: Me, visible: T11 === 0, name: "Dialog" })))))))))));
});
var Ie3 = "div";
var Me = M.RenderStrategy | M.Static;
function we2(e8, t11) {
  let { transition: o17 = false, open: a20, ...l14 } = e8, i15 = u13(), p6 = e8.hasOwnProperty("open") || i15 !== null, d12 = e8.hasOwnProperty("onClose");
  if (!p6 && !d12) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p6) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d12) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i15 && typeof e8.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e8.open}`);
  if (typeof e8.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e8.onClose}`);
  return (a20 !== void 0 || o17) && !l14.static ? import_react90.default.createElement(O3, null, import_react90.default.createElement(Xe, { show: a20, transition: o17, unmount: l14.unmount }, import_react90.default.createElement(X2, { ref: t11, ...l14 }))) : import_react90.default.createElement(O3, null, import_react90.default.createElement(X2, { ref: t11, open: a20, ...l14 }));
}
var Ge = "div";
function ke(e8, t11) {
  let o17 = (0, import_react47.useId)(), { id: a20 = `headlessui-dialog-panel-${o17}`, transition: l14 = false, ...i15 } = e8, [{ dialogState: p6, unmount: d12 }, s13] = L5("Dialog.Panel"), c14 = y(t11, s13.panelRef), f21 = (0, import_react90.useMemo)(() => ({ open: p6 === 0 }), [p6]), D9 = o4((u17) => {
    u17.stopPropagation();
  }), O6 = { ref: c14, id: a20, onClick: D9 };
  return import_react90.default.createElement(l14 ? Le : import_react90.Fragment, { ...l14 ? { unmount: d12 } : {} }, H({ ourProps: O6, theirProps: i15, slot: f21, defaultTag: Ge, name: "Dialog.Panel" }));
}
var Be = "div";
function Ue2(e8, t11) {
  let { transition: o17 = false, ...a20 } = e8, [{ dialogState: l14, unmount: i15 }] = L5("Dialog.Backdrop"), p6 = (0, import_react90.useMemo)(() => ({ open: l14 === 0 }), [l14]), d12 = { ref: t11, "aria-hidden": true };
  return import_react90.default.createElement(o17 ? Le : import_react90.Fragment, { ...o17 ? { unmount: i15 } : {} }, H({ ourProps: d12, theirProps: a20, slot: p6, defaultTag: Be, name: "Dialog.Backdrop" }));
}
var He3 = "h2";
function Ne2(e8, t11) {
  let o17 = (0, import_react47.useId)(), { id: a20 = `headlessui-dialog-title-${o17}`, ...l14 } = e8, [{ dialogState: i15, setTitleId: p6 }] = L5("Dialog.Title"), d12 = y(t11);
  (0, import_react90.useEffect)(() => (p6(a20), () => p6(null)), [a20, p6]);
  let s13 = (0, import_react90.useMemo)(() => ({ open: i15 === 0 }), [i15]);
  return H({ ourProps: { ref: d12, id: a20 }, theirProps: l14, slot: s13, defaultTag: He3, name: "Dialog.Title" });
}
var We = W(we2);
var $e = W(ke);
var ct = W(Ue2);
var je = W(Ne2);
var Dt2 = w3;
var Pt2 = Object.assign(We, { Panel: $e, Title: je, Description: w3 });

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var import_react92 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/start-transition.js
var import_react91 = __toESM(require_react(), 1);
var t10;
var a16 = (t10 = import_react91.default.startTransition) != null ? t10 : function(i15) {
  i15();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var Te2 = ((l14) => (l14[l14.Open = 0] = "Open", l14[l14.Closed = 1] = "Closed", l14))(Te2 || {});
var fe3 = ((n13) => (n13[n13.ToggleDisclosure = 0] = "ToggleDisclosure", n13[n13.CloseDisclosure = 1] = "CloseDisclosure", n13[n13.SetButtonId = 2] = "SetButtonId", n13[n13.SetPanelId = 3] = "SetPanelId", n13[n13.SetButtonElement = 4] = "SetButtonElement", n13[n13.SetPanelElement = 5] = "SetPanelElement", n13))(fe3 || {});
var me3 = { [0]: (e8) => ({ ...e8, disclosureState: u2(e8.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e8) => e8.disclosureState === 1 ? e8 : { ...e8, disclosureState: 1 }, [2](e8, t11) {
  return e8.buttonId === t11.buttonId ? e8 : { ...e8, buttonId: t11.buttonId };
}, [3](e8, t11) {
  return e8.panelId === t11.panelId ? e8 : { ...e8, panelId: t11.panelId };
}, [4](e8, t11) {
  return e8.buttonElement === t11.element ? e8 : { ...e8, buttonElement: t11.element };
}, [5](e8, t11) {
  return e8.panelElement === t11.element ? e8 : { ...e8, panelElement: t11.element };
} };
var _5 = (0, import_react92.createContext)(null);
_5.displayName = "DisclosureContext";
function M7(e8) {
  let t11 = (0, import_react92.useContext)(_5);
  if (t11 === null) {
    let l14 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l14, M7), l14;
  }
  return t11;
}
var F3 = (0, import_react92.createContext)(null);
F3.displayName = "DisclosureAPIContext";
function V3(e8) {
  let t11 = (0, import_react92.useContext)(F3);
  if (t11 === null) {
    let l14 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l14, V3), l14;
  }
  return t11;
}
var H8 = (0, import_react92.createContext)(null);
H8.displayName = "DisclosurePanelContext";
function De2() {
  return (0, import_react92.useContext)(H8);
}
function ye2(e8, t11) {
  return u2(t11.type, me3, e8, t11);
}
var Pe2 = import_react92.Fragment;
function Ee(e8, t11) {
  let { defaultOpen: l14 = false, ...p6 } = e8, i15 = (0, import_react92.useRef)(null), c14 = y(t11, T3((a20) => {
    i15.current = a20;
  }, e8.as === void 0 || e8.as === import_react92.Fragment)), n13 = (0, import_react92.useReducer)(ye2, { disclosureState: l14 ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: o17, buttonId: r18 }, f21] = n13, s13 = o4((a20) => {
    f21({ type: 1 });
    let T11 = u(i15);
    if (!T11 || !r18) return;
    let d12 = (() => a20 ? a20 instanceof HTMLElement ? a20 : a20.current instanceof HTMLElement ? a20.current : T11.getElementById(r18) : T11.getElementById(r18))();
    d12 == null || d12.focus();
  }), E14 = (0, import_react92.useMemo)(() => ({ close: s13 }), [s13]), m9 = (0, import_react92.useMemo)(() => ({ open: o17 === 0, close: s13 }), [o17, s13]), D9 = { ref: c14 };
  return import_react92.default.createElement(_5.Provider, { value: n13 }, import_react92.default.createElement(F3.Provider, { value: E14 }, import_react92.default.createElement(C3, { value: s13 }, import_react92.default.createElement(c8, { value: u2(o17, { [0]: i11.Open, [1]: i11.Closed }) }, H({ ourProps: D9, theirProps: p6, slot: m9, defaultTag: Pe2, name: "Disclosure" })))));
}
var Se2 = "button";
function ge2(e8, t11) {
  let l14 = (0, import_react47.useId)(), { id: p6 = `headlessui-disclosure-button-${l14}`, disabled: i15 = false, autoFocus: c14 = false, ...n13 } = e8, [o17, r18] = M7("Disclosure.Button"), f21 = De2(), s13 = f21 === null ? false : f21 === o17.panelId, E14 = (0, import_react92.useRef)(null), m9 = y(E14, t11, o4((u17) => {
    if (!s13) return r18({ type: 4, element: u17 });
  })), D9 = I();
  (0, import_react92.useEffect)(() => {
    if (!s13) return r18({ type: 2, buttonId: p6 }), () => {
      r18({ type: 2, buttonId: null });
    };
  }, [p6, r18, s13]);
  let a20 = o4((u17) => {
    var S9;
    if (s13) {
      if (o17.disclosureState === 1) return;
      switch (u17.key) {
        case o8.Space:
        case o8.Enter:
          u17.preventDefault(), u17.stopPropagation(), r18({ type: 0 }), (S9 = o17.buttonElement) == null || S9.focus();
          break;
      }
    } else switch (u17.key) {
      case o8.Space:
      case o8.Enter:
        u17.preventDefault(), u17.stopPropagation(), r18({ type: 0 });
        break;
    }
  }), T11 = o4((u17) => {
    switch (u17.key) {
      case o8.Space:
        u17.preventDefault();
        break;
    }
  }), d12 = o4((u17) => {
    var S9;
    r5(u17.currentTarget) || i15 || (s13 ? (r18({ type: 0 }), (S9 = o17.buttonElement) == null || S9.focus()) : r18({ type: 0 }));
  }), { isFocusVisible: A8, focusProps: b6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: c14 }), { isHovered: h7, hoverProps: U7 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i15 }), { pressed: N6, pressProps: k2 } = w({ disabled: i15 }), q5 = (0, import_react92.useMemo)(() => ({ open: o17.disclosureState === 0, hover: h7, active: N6, disabled: i15, focus: A8, autofocus: c14 }), [o17, h7, N6, A8, i15, c14]), w13 = e6(e8, o17.buttonElement), z5 = s13 ? D({ ref: m9, type: w13, disabled: i15 || void 0, autoFocus: c14, onKeyDown: a20, onClick: d12 }, b6, U7, k2) : D({ ref: m9, id: p6, type: w13, "aria-expanded": o17.disclosureState === 0, "aria-controls": o17.panelElement ? o17.panelId : void 0, disabled: i15 || void 0, autoFocus: c14, onKeyDown: a20, onKeyUp: T11, onClick: d12 }, b6, U7, k2);
  return H({ mergeRefs: D9, ourProps: z5, theirProps: n13, slot: q5, defaultTag: Se2, name: "Disclosure.Button" });
}
var Ae2 = "div";
var be2 = M.RenderStrategy | M.Static;
function Ce(e8, t11) {
  let l14 = (0, import_react47.useId)(), { id: p6 = `headlessui-disclosure-panel-${l14}`, transition: i15 = false, ...c14 } = e8, [n13, o17] = M7("Disclosure.Panel"), { close: r18 } = V3("Disclosure.Panel"), f21 = I(), [s13, E14] = (0, import_react92.useState)(null), m9 = y(t11, o4((b6) => {
    a16(() => o17({ type: 5, element: b6 }));
  }), E14);
  (0, import_react92.useEffect)(() => (o17({ type: 3, panelId: p6 }), () => {
    o17({ type: 3, panelId: null });
  }), [p6, o17]);
  let D9 = u13(), [a20, T11] = R4(i15, s13, D9 !== null ? (D9 & i11.Open) === i11.Open : n13.disclosureState === 0), d12 = (0, import_react92.useMemo)(() => ({ open: n13.disclosureState === 0, close: r18 }), [n13.disclosureState, r18]), A8 = { ref: m9, id: p6, ...H4(T11) };
  return import_react92.default.createElement(s7, null, import_react92.default.createElement(H8.Provider, { value: n13.panelId }, H({ mergeRefs: f21, ourProps: A8, theirProps: c14, slot: d12, defaultTag: Ae2, features: be2, visible: a20, name: "Disclosure.Panel" })));
}
var Re3 = W(Ee);
var Ie4 = W(ge2);
var xe2 = W(Ce);
var $e2 = Object.assign(Re3, { Button: Ie4, Panel: xe2 });

// node_modules/@headlessui/react/dist/components/field/field.js
var import_react93 = __toESM(require_react(), 1);
var A5 = "div";
function L6(d12, l14) {
  let t11 = `headlessui-control-${(0, import_react47.useId)()}`, [s13, p6] = z(), [n13, a20] = U(), m9 = a3(), { disabled: e8 = m9 || false, ...o17 } = d12, i15 = (0, import_react93.useMemo)(() => ({ disabled: e8 }), [e8]);
  return import_react93.default.createElement(l, { value: e8 }, import_react93.default.createElement(p6, { value: s13 }, import_react93.default.createElement(a20, { value: n13 }, import_react93.default.createElement(f5, { id: t11 }, H({ ourProps: { ref: l14, disabled: e8 || void 0, "aria-disabled": e8 || void 0 }, theirProps: { ...o17, children: import_react93.default.createElement(W2, null, typeof o17.children == "function" ? o17.children(i15) : o17.children) }, slot: i15, defaultTag: A5, name: "Field" })))));
}
var H9 = W(L6);

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var import_react95 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js
var import_react94 = __toESM(require_react(), 1);
function l11(t11) {
  let e8 = typeof t11 == "string" ? t11 : void 0, [s13, o17] = (0, import_react94.useState)(e8);
  return [e8 != null ? e8 : s13, (0, import_react94.useCallback)((n13) => {
    e8 || n13 instanceof HTMLElement && o17(n13.tagName.toLowerCase());
  }, [e8])];
}

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
var d10 = "fieldset";
function A6(t11, i15) {
  var s13;
  let a20 = a3(), { disabled: e8 = a20 || false, ...p6 } = t11, [n13, T11] = l11((s13 = t11.as) != null ? s13 : d10), l14 = y(i15, T11), [r18, f21] = z(), m9 = (0, import_react95.useMemo)(() => ({ disabled: e8 }), [e8]);
  return import_react95.default.createElement(l, { value: e8 }, import_react95.default.createElement(f21, null, H({ ourProps: n13 === "fieldset" ? { ref: l14, "aria-labelledby": r18, disabled: e8 || void 0 } : { ref: l14, role: "group", "aria-labelledby": r18, "aria-disabled": e8 || void 0 }, theirProps: p6, slot: m9, defaultTag: d10, name: "Fieldset" })));
}
var C7 = W(A6);

// node_modules/@headlessui/react/dist/components/input/input.js
var import_react96 = __toESM(require_react(), 1);
var x4 = "input";
function h6(n13, s13) {
  let a20 = (0, import_react47.useId)(), l14 = u5(), i15 = a3(), { id: d12 = l14 || `headlessui-input-${a20}`, disabled: e8 = i15 || false, autoFocus: o17 = false, invalid: t11 = false, ...u17 } = n13, f21 = I2(), m9 = G(), { isFocused: r18, focusProps: T11 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o17 }), { isHovered: p6, hoverProps: b6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), y9 = D({ ref: s13, id: d12, "aria-labelledby": f21, "aria-describedby": m9, "aria-invalid": t11 ? "" : void 0, disabled: e8 || void 0, autoFocus: o17 }, T11, b6), I7 = (0, import_react96.useMemo)(() => ({ disabled: e8, invalid: t11, hover: p6, focus: r18, autofocus: o17 }), [e8, t11, p6, r18, o17]);
  return H({ ourProps: y9, theirProps: u17, slot: I7, defaultTag: x4, name: "Input" });
}
var J3 = W(h6);

// node_modules/@headlessui/react/dist/components/legend/legend.js
var import_react97 = __toESM(require_react(), 1);
function o15(t11, n13) {
  return import_react97.default.createElement(K, { as: "div", ref: n13, ...t11 });
}
var d11 = W(o15);

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var import_react100 = __toESM(require_react(), 1);
var import_react_dom7 = __toESM(require_react_dom(), 1);

// node_modules/@headlessui/react/dist/hooks/use-did-element-move.js
var import_react98 = __toESM(require_react(), 1);
function s9(n13, t11) {
  let e8 = (0, import_react98.useRef)({ left: 0, top: 0 });
  if (n(() => {
    if (!t11) return;
    let r18 = t11.getBoundingClientRect();
    r18 && (e8.current = r18);
  }, [n13, t11]), t11 == null || !n13 || t11 === document.activeElement) return false;
  let o17 = t11.getBoundingClientRect();
  return o17.top !== e8.current.top || o17.left !== e8.current.left;
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
var import_react99 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a18 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o16(e8) {
  var r18, i15;
  let n13 = (r18 = e8.innerText) != null ? r18 : "", t11 = e8.cloneNode(true);
  if (!(t11 instanceof HTMLElement)) return n13;
  let u17 = false;
  for (let f21 of t11.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) f21.remove(), u17 = true;
  let l14 = u17 ? (i15 = t11.innerText) != null ? i15 : "" : n13;
  return a18.test(l14) && (l14 = l14.replace(a18, "")), l14;
}
function g5(e8) {
  let n13 = e8.getAttribute("aria-label");
  if (typeof n13 == "string") return n13.trim();
  let t11 = e8.getAttribute("aria-labelledby");
  if (t11) {
    let u17 = t11.split(" ").map((l14) => {
      let r18 = document.getElementById(l14);
      if (r18) {
        let i15 = r18.getAttribute("aria-label");
        return typeof i15 == "string" ? i15.trim() : o16(r18).trim();
      }
      return null;
    }).filter(Boolean);
    if (u17.length > 0) return u17.join(", ");
  }
  return o16(e8).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s10(c14) {
  let t11 = (0, import_react99.useRef)(""), r18 = (0, import_react99.useRef)("");
  return o4(() => {
    let e8 = c14.current;
    if (!e8) return "";
    let u17 = e8.innerText;
    if (t11.current === u17) return r18.current;
    let n13 = g5(e8).trim().toLowerCase();
    return t11.current = u17, r18.current = n13, n13;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
var gt = ((o17) => (o17[o17.Open = 0] = "Open", o17[o17.Closed = 1] = "Closed", o17))(gt || {});
var Lt2 = ((o17) => (o17[o17.Single = 0] = "Single", o17[o17.Multi = 1] = "Multi", o17))(Lt2 || {});
var St2 = ((o17) => (o17[o17.Pointer = 0] = "Pointer", o17[o17.Other = 1] = "Other", o17))(St2 || {});
var Et2 = ((n13) => (n13[n13.OpenListbox = 0] = "OpenListbox", n13[n13.CloseListbox = 1] = "CloseListbox", n13[n13.GoToOption = 2] = "GoToOption", n13[n13.Search = 3] = "Search", n13[n13.ClearSearch = 4] = "ClearSearch", n13[n13.RegisterOption = 5] = "RegisterOption", n13[n13.UnregisterOption = 6] = "UnregisterOption", n13[n13.SetButtonElement = 7] = "SetButtonElement", n13[n13.SetOptionsElement = 8] = "SetOptionsElement", n13))(Et2 || {});
function fe4(e8, i15 = (o17) => o17) {
  let o17 = e8.activeOptionIndex !== null ? e8.options[e8.activeOptionIndex] : null, r18 = _2(i15(e8.options.slice()), (m9) => m9.dataRef.current.domRef.current), a20 = o17 ? r18.indexOf(o17) : null;
  return a20 === -1 && (a20 = null), { options: r18, activeOptionIndex: a20 };
}
var Pt3 = { [1](e8) {
  return e8.dataRef.current.disabled || e8.listboxState === 1 ? e8 : { ...e8, activeOptionIndex: null, listboxState: 1, __demoMode: false };
}, [0](e8) {
  if (e8.dataRef.current.disabled || e8.listboxState === 0) return e8;
  let i15 = e8.activeOptionIndex, { isSelected: o17 } = e8.dataRef.current, r18 = e8.options.findIndex((a20) => o17(a20.dataRef.current.value));
  return r18 !== -1 && (i15 = r18), { ...e8, listboxState: 0, activeOptionIndex: i15, __demoMode: false };
}, [2](e8, i15) {
  var m9, O6, d12, p6, n13;
  if (e8.dataRef.current.disabled || e8.listboxState === 1) return e8;
  let o17 = { ...e8, searchQuery: "", activationTrigger: (m9 = i15.trigger) != null ? m9 : 1, __demoMode: false };
  if (i15.focus === c9.Nothing) return { ...o17, activeOptionIndex: null };
  if (i15.focus === c9.Specific) return { ...o17, activeOptionIndex: e8.options.findIndex((u17) => u17.id === i15.id) };
  if (i15.focus === c9.Previous) {
    let u17 = e8.activeOptionIndex;
    if (u17 !== null) {
      let P7 = e8.options[u17].dataRef.current.domRef, t11 = f13(i15, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (s13) => s13.id, resolveDisabled: (s13) => s13.dataRef.current.disabled });
      if (t11 !== null) {
        let s13 = e8.options[t11].dataRef.current.domRef;
        if (((O6 = P7.current) == null ? void 0 : O6.previousElementSibling) === s13.current || ((d12 = s13.current) == null ? void 0 : d12.previousElementSibling) === null) return { ...o17, activeOptionIndex: t11 };
      }
    }
  } else if (i15.focus === c9.Next) {
    let u17 = e8.activeOptionIndex;
    if (u17 !== null) {
      let P7 = e8.options[u17].dataRef.current.domRef, t11 = f13(i15, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (s13) => s13.id, resolveDisabled: (s13) => s13.dataRef.current.disabled });
      if (t11 !== null) {
        let s13 = e8.options[t11].dataRef.current.domRef;
        if (((p6 = P7.current) == null ? void 0 : p6.nextElementSibling) === s13.current || ((n13 = s13.current) == null ? void 0 : n13.nextElementSibling) === null) return { ...o17, activeOptionIndex: t11 };
      }
    }
  }
  let r18 = fe4(e8), a20 = f13(i15, { resolveItems: () => r18.options, resolveActiveIndex: () => r18.activeOptionIndex, resolveId: (u17) => u17.id, resolveDisabled: (u17) => u17.dataRef.current.disabled });
  return { ...o17, ...r18, activeOptionIndex: a20 };
}, [3]: (e8, i15) => {
  if (e8.dataRef.current.disabled || e8.listboxState === 1) return e8;
  let r18 = e8.searchQuery !== "" ? 0 : 1, a20 = e8.searchQuery + i15.value.toLowerCase(), O6 = (e8.activeOptionIndex !== null ? e8.options.slice(e8.activeOptionIndex + r18).concat(e8.options.slice(0, e8.activeOptionIndex + r18)) : e8.options).find((p6) => {
    var n13;
    return !p6.dataRef.current.disabled && ((n13 = p6.dataRef.current.textValue) == null ? void 0 : n13.startsWith(a20));
  }), d12 = O6 ? e8.options.indexOf(O6) : -1;
  return d12 === -1 || d12 === e8.activeOptionIndex ? { ...e8, searchQuery: a20 } : { ...e8, searchQuery: a20, activeOptionIndex: d12, activationTrigger: 1 };
}, [4](e8) {
  return e8.dataRef.current.disabled || e8.listboxState === 1 || e8.searchQuery === "" ? e8 : { ...e8, searchQuery: "" };
}, [5]: (e8, i15) => {
  let o17 = { id: i15.id, dataRef: i15.dataRef }, r18 = fe4(e8, (a20) => [...a20, o17]);
  return e8.activeOptionIndex === null && e8.dataRef.current.isSelected(i15.dataRef.current.value) && (r18.activeOptionIndex = r18.options.indexOf(o17)), { ...e8, ...r18 };
}, [6]: (e8, i15) => {
  let o17 = fe4(e8, (r18) => {
    let a20 = r18.findIndex((m9) => m9.id === i15.id);
    return a20 !== -1 && r18.splice(a20, 1), r18;
  });
  return { ...e8, ...o17, activationTrigger: 1 };
}, [7]: (e8, i15) => e8.buttonElement === i15.element ? e8 : { ...e8, buttonElement: i15.element }, [8]: (e8, i15) => e8.optionsElement === i15.element ? e8 : { ...e8, optionsElement: i15.element } };
var be3 = (0, import_react100.createContext)(null);
be3.displayName = "ListboxActionsContext";
function Z4(e8) {
  let i15 = (0, import_react100.useContext)(be3);
  if (i15 === null) {
    let o17 = new Error(`<${e8} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, Z4), o17;
  }
  return i15;
}
var ee5 = (0, import_react100.createContext)(null);
ee5.displayName = "ListboxDataContext";
function Q(e8) {
  let i15 = (0, import_react100.useContext)(ee5);
  if (i15 === null) {
    let o17 = new Error(`<${e8} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o17, Q), o17;
  }
  return i15;
}
function At2(e8, i15) {
  return u2(i15.type, Pt3, e8, i15);
}
var Rt2 = import_react100.Fragment;
function ht2(e8, i15) {
  var Te4;
  let o17 = a3(), { value: r18, defaultValue: a20, form: m9, name: O6, onChange: d12, by: p6, invalid: n13 = false, disabled: u17 = o17 || false, horizontal: P7 = false, multiple: t11 = false, __demoMode: s13 = false, ...M8 } = e8;
  const B3 = P7 ? "horizontal" : "vertical";
  let h7 = y(i15), D9 = l2(a20), [g6 = t11 ? [] : void 0, y9] = T(r18, d12, D9), [_6, x6] = (0, import_react100.useReducer)(At2, { dataRef: (0, import_react100.createRef)(), listboxState: s13 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, optionsVisible: false, buttonElement: null, optionsElement: null, __demoMode: s13 }), k2 = (0, import_react100.useRef)({ static: false, hold: false }), F5 = (0, import_react100.useRef)(/* @__PURE__ */ new Map()), c14 = u9(p6), A8 = (0, import_react100.useCallback)((b6) => u2(f21.mode, { [1]: () => g6.some((S9) => c14(S9, b6)), [0]: () => c14(g6, b6) }), [g6]), f21 = (0, import_react100.useMemo)(() => ({ ..._6, value: g6, disabled: u17, invalid: n13, mode: t11 ? 1 : 0, orientation: B3, compare: c14, isSelected: A8, optionsPropsRef: k2, listRef: F5 }), [g6, u17, n13, t11, _6, F5]);
  n(() => {
    _6.dataRef.current = f21;
  }, [f21]);
  let N6 = f21.listboxState === 0;
  R3(N6, [f21.buttonElement, f21.optionsElement], (b6, S9) => {
    var C10;
    x6({ type: 1 }), A2(S9, h5.Loose) || (b6.preventDefault(), (C10 = f21.buttonElement) == null || C10.focus());
  });
  let L9 = (0, import_react100.useMemo)(() => ({ open: f21.listboxState === 0, disabled: u17, invalid: n13, value: g6 }), [f21, u17, g6, n13]), H13 = o4((b6) => {
    let S9 = f21.options.find((C10) => C10.id === b6);
    S9 && K4(S9.dataRef.current.value);
  }), te4 = o4(() => {
    if (f21.activeOptionIndex !== null) {
      let { dataRef: b6, id: S9 } = f21.options[f21.activeOptionIndex];
      K4(b6.current.value), x6({ type: 2, focus: c9.Specific, id: S9 });
    }
  }), oe4 = o4(() => x6({ type: 0 })), X4 = o4(() => x6({ type: 1 })), J5 = p(), ne4 = o4((b6, S9, C10) => {
    J5.dispose(), J5.microTask(() => b6 === c9.Specific ? x6({ type: 2, focus: c9.Specific, id: S9, trigger: C10 }) : x6({ type: 2, focus: b6, trigger: C10 }));
  }), ie5 = o4((b6, S9) => (x6({ type: 5, id: b6, dataRef: S9 }), () => x6({ type: 6, id: b6 }))), K4 = o4((b6) => u2(f21.mode, { [0]() {
    return y9 == null ? void 0 : y9(b6);
  }, [1]() {
    let S9 = f21.value.slice(), C10 = S9.findIndex((Pe5) => c14(Pe5, b6));
    return C10 === -1 ? S9.push(b6) : S9.splice(C10, 1), y9 == null ? void 0 : y9(S9);
  } })), $3 = o4((b6) => x6({ type: 3, value: b6 })), q5 = o4(() => x6({ type: 4 })), l14 = o4((b6) => {
    x6({ type: 7, element: b6 });
  }), I7 = o4((b6) => {
    x6({ type: 8, element: b6 });
  }), G7 = (0, import_react100.useMemo)(() => ({ onChange: K4, registerOption: ie5, goToOption: ne4, closeListbox: X4, openListbox: oe4, selectActiveOption: te4, selectOption: H13, search: $3, clearSearch: q5, setButtonElement: l14, setOptionsElement: I7 }), []), [re2, Le5] = z({ inherit: true }), Se5 = { ref: h7 }, Ee3 = (0, import_react100.useCallback)(() => {
    if (D9 !== void 0) return y9 == null ? void 0 : y9(D9);
  }, [y9, D9]);
  return import_react100.default.createElement(Le5, { value: re2, props: { htmlFor: (Te4 = f21.buttonElement) == null ? void 0 : Te4.id }, slot: { open: f21.listboxState === 0, disabled: u17 } }, import_react100.default.createElement(ve, null, import_react100.default.createElement(be3.Provider, { value: G7 }, import_react100.default.createElement(ee5.Provider, { value: f21 }, import_react100.default.createElement(c8, { value: u2(f21.listboxState, { [0]: i11.Open, [1]: i11.Closed }) }, O6 != null && g6 != null && import_react100.default.createElement(j2, { disabled: u17, data: { [O6]: g6 }, form: m9, onReset: Ee3 }), H({ ourProps: Se5, theirProps: M8, slot: L9, defaultTag: Rt2, name: "Listbox" }))))));
}
var Dt3 = "button";
function _t2(e8, i15) {
  var N6;
  let o17 = Q("Listbox.Button"), r18 = Z4("Listbox.Button"), a20 = (0, import_react47.useId)(), m9 = u5(), { id: O6 = m9 || `headlessui-listbox-button-${a20}`, disabled: d12 = o17.disabled || false, autoFocus: p6 = false, ...n13 } = e8, u17 = I(), P7 = y(i15, ye(), r18.setButtonElement), t11 = Fe(), s13 = o4((L9) => {
    switch (L9.key) {
      case o8.Enter:
        p2(L9.currentTarget);
        break;
      case o8.Space:
      case o8.ArrowDown:
        L9.preventDefault(), (0, import_react_dom7.flushSync)(() => r18.openListbox()), o17.value || r18.goToOption(c9.First);
        break;
      case o8.ArrowUp:
        L9.preventDefault(), (0, import_react_dom7.flushSync)(() => r18.openListbox()), o17.value || r18.goToOption(c9.Last);
        break;
    }
  }), M8 = o4((L9) => {
    switch (L9.key) {
      case o8.Space:
        L9.preventDefault();
        break;
    }
  }), B3 = o4((L9) => {
    var H13;
    if (r5(L9.currentTarget)) return L9.preventDefault();
    o17.listboxState === 0 ? ((0, import_react_dom7.flushSync)(() => r18.closeListbox()), (H13 = o17.buttonElement) == null || H13.focus({ preventScroll: true })) : (L9.preventDefault(), r18.openListbox());
  }), h7 = o4((L9) => L9.preventDefault()), D9 = I2([O6]), g6 = G(), { isFocusVisible: y9, focusProps: _6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p6 }), { isHovered: x6, hoverProps: k2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: d12 }), { pressed: F5, pressProps: c14 } = w({ disabled: d12 }), A8 = (0, import_react100.useMemo)(() => ({ open: o17.listboxState === 0, active: F5 || o17.listboxState === 0, disabled: d12, invalid: o17.invalid, value: o17.value, hover: x6, focus: y9, autofocus: p6 }), [o17.listboxState, o17.value, d12, x6, y9, F5, o17.invalid, p6]), f21 = D(t11(), { ref: P7, id: O6, type: e6(e8, o17.buttonElement), "aria-haspopup": "listbox", "aria-controls": (N6 = o17.optionsElement) == null ? void 0 : N6.id, "aria-expanded": o17.listboxState === 0, "aria-labelledby": D9, "aria-describedby": g6, disabled: d12 || void 0, autoFocus: p6, onKeyDown: s13, onKeyUp: M8, onKeyPress: h7, onClick: B3 }, _6, k2, c14);
  return H({ mergeRefs: u17, ourProps: f21, theirProps: n13, slot: A8, defaultTag: Dt3, name: "Listbox.Button" });
}
var ge3 = (0, import_react100.createContext)(false);
var It2 = "div";
var Ct2 = M.RenderStrategy | M.Static;
function Ft2(e8, i15) {
  var $3, q5;
  let o17 = (0, import_react47.useId)(), { id: r18 = `headlessui-listbox-options-${o17}`, anchor: a20, portal: m9 = false, modal: O6 = true, transition: d12 = false, ...p6 } = e8, n13 = xe(a20), [u17, P7] = (0, import_react100.useState)(null);
  n13 && (m9 = true);
  let t11 = Q("Listbox.Options"), s13 = Z4("Listbox.Options"), M8 = n9(t11.optionsElement), B3 = u13(), [h7, D9] = R4(d12, u17, B3 !== null ? (B3 & i11.Open) === i11.Open : t11.listboxState === 0);
  m6(h7, t11.buttonElement, s13.closeListbox);
  let g6 = t11.__demoMode ? false : O6 && t11.listboxState === 0;
  f10(g6, M8);
  let y9 = t11.__demoMode ? false : O6 && t11.listboxState === 0;
  y3(y9, { allowed: (0, import_react100.useCallback)(() => [t11.buttonElement, t11.optionsElement], [t11.buttonElement, t11.optionsElement]) });
  let _6 = t11.listboxState !== 0, k2 = s9(_6, t11.buttonElement) ? false : h7, F5 = h7 && t11.listboxState === 1, c14 = l7(F5, t11.value), A8 = o4((l14) => t11.compare(c14, l14)), f21 = (0, import_react100.useMemo)(() => {
    var I7;
    if (n13 == null || !((I7 = n13 == null ? void 0 : n13.to) != null && I7.includes("selection"))) return null;
    let l14 = t11.options.findIndex((G7) => A8(G7.dataRef.current.value));
    return l14 === -1 && (l14 = 0), l14;
  }, [n13, t11.options]), N6 = (() => {
    if (n13 == null) return;
    if (f21 === null) return { ...n13, inner: void 0 };
    let l14 = Array.from(t11.listRef.current.values());
    return { ...n13, inner: { listRef: { current: l14 }, index: f21 } };
  })(), [L9, H13] = Re2(N6), te4 = be(), oe4 = y(i15, n13 ? L9 : null, s13.setOptionsElement, P7), X4 = p();
  (0, import_react100.useEffect)(() => {
    var I7;
    let l14 = t11.optionsElement;
    l14 && t11.listboxState === 0 && l14 !== ((I7 = u(l14)) == null ? void 0 : I7.activeElement) && (l14 == null || l14.focus({ preventScroll: true }));
  }, [t11.listboxState, t11.optionsElement]);
  let J5 = o4((l14) => {
    var I7, G7;
    switch (X4.dispose(), l14.key) {
      case o8.Space:
        if (t11.searchQuery !== "") return l14.preventDefault(), l14.stopPropagation(), s13.search(l14.key);
      case o8.Enter:
        if (l14.preventDefault(), l14.stopPropagation(), t11.activeOptionIndex !== null) {
          let { dataRef: re2 } = t11.options[t11.activeOptionIndex];
          s13.onChange(re2.current.value);
        }
        t11.mode === 0 && ((0, import_react_dom7.flushSync)(() => s13.closeListbox()), (I7 = t11.buttonElement) == null || I7.focus({ preventScroll: true }));
        break;
      case u2(t11.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.Next);
      case u2(t11.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.Previous);
      case o8.Home:
      case o8.PageUp:
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.First);
      case o8.End:
      case o8.PageDown:
        return l14.preventDefault(), l14.stopPropagation(), s13.goToOption(c9.Last);
      case o8.Escape:
        l14.preventDefault(), l14.stopPropagation(), (0, import_react_dom7.flushSync)(() => s13.closeListbox()), (G7 = t11.buttonElement) == null || G7.focus({ preventScroll: true });
        return;
      case o8.Tab:
        l14.preventDefault(), l14.stopPropagation(), (0, import_react_dom7.flushSync)(() => s13.closeListbox()), j3(t11.buttonElement, l14.shiftKey ? F.Previous : F.Next);
        break;
      default:
        l14.key.length === 1 && (s13.search(l14.key), X4.setTimeout(() => s13.clearSearch(), 350));
        break;
    }
  }), ne4 = ($3 = t11.buttonElement) == null ? void 0 : $3.id, ie5 = (0, import_react100.useMemo)(() => ({ open: t11.listboxState === 0 }), [t11.listboxState]), K4 = D(n13 ? te4() : {}, { id: r18, ref: oe4, "aria-activedescendant": t11.activeOptionIndex === null || (q5 = t11.options[t11.activeOptionIndex]) == null ? void 0 : q5.id, "aria-multiselectable": t11.mode === 1 ? true : void 0, "aria-labelledby": ne4, "aria-orientation": t11.orientation, onKeyDown: J5, role: "listbox", tabIndex: t11.listboxState === 0 ? 0 : void 0, style: { ...p6.style, ...H13, "--button-width": d3(t11.buttonElement, true).width }, ...H4(D9) });
  return import_react100.default.createElement(te, { enabled: m9 ? e8.static || h7 : false }, import_react100.default.createElement(ee5.Provider, { value: t11.mode === 1 ? t11 : { ...t11, isSelected: A8 } }, H({ ourProps: K4, theirProps: p6, slot: ie5, defaultTag: It2, features: Ct2, visible: k2, name: "Listbox.Options" })));
}
var Mt2 = "div";
function Bt2(e8, i15) {
  let o17 = (0, import_react47.useId)(), { id: r18 = `headlessui-listbox-option-${o17}`, disabled: a20 = false, value: m9, ...O6 } = e8, d12 = (0, import_react100.useContext)(ge3) === true, p6 = Q("Listbox.Option"), n13 = Z4("Listbox.Option"), u17 = p6.activeOptionIndex !== null ? p6.options[p6.activeOptionIndex].id === r18 : false, P7 = p6.isSelected(m9), t11 = (0, import_react100.useRef)(null), s13 = s10(t11), M8 = s3({ disabled: a20, value: m9, domRef: t11, get textValue() {
    return s13();
  } }), B3 = y(i15, t11, (c14) => {
    c14 ? p6.listRef.current.set(r18, c14) : p6.listRef.current.delete(r18);
  });
  n(() => {
    if (!p6.__demoMode && p6.listboxState === 0 && u17 && p6.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var c14, A8;
      (A8 = (c14 = t11.current) == null ? void 0 : c14.scrollIntoView) == null || A8.call(c14, { block: "nearest" });
    });
  }, [t11, u17, p6.__demoMode, p6.listboxState, p6.activationTrigger, p6.activeOptionIndex]), n(() => {
    if (!d12) return n13.registerOption(r18, M8);
  }, [M8, r18, d12]);
  let h7 = o4((c14) => {
    var A8;
    if (a20) return c14.preventDefault();
    n13.onChange(m9), p6.mode === 0 && ((0, import_react_dom7.flushSync)(() => n13.closeListbox()), (A8 = p6.buttonElement) == null || A8.focus({ preventScroll: true }));
  }), D9 = o4(() => {
    if (a20) return n13.goToOption(c9.Nothing);
    n13.goToOption(c9.Specific, r18);
  }), g6 = u11(), y9 = o4((c14) => {
    g6.update(c14), !a20 && (u17 || n13.goToOption(c9.Specific, r18, 0));
  }), _6 = o4((c14) => {
    g6.wasMoved(c14) && (a20 || u17 || n13.goToOption(c9.Specific, r18, 0));
  }), x6 = o4((c14) => {
    g6.wasMoved(c14) && (a20 || u17 && n13.goToOption(c9.Nothing));
  }), k2 = (0, import_react100.useMemo)(() => ({ active: u17, focus: u17, selected: P7, disabled: a20, selectedOption: P7 && d12 }), [u17, P7, a20, d12]), F5 = d12 ? {} : { id: r18, ref: B3, role: "option", tabIndex: a20 === true ? void 0 : -1, "aria-disabled": a20 === true ? true : void 0, "aria-selected": P7, disabled: void 0, onClick: h7, onFocus: D9, onPointerEnter: y9, onMouseEnter: y9, onPointerMove: _6, onMouseMove: _6, onPointerLeave: x6, onMouseLeave: x6 };
  return !P7 && d12 ? null : H({ ourProps: F5, theirProps: O6, slot: k2, defaultTag: Mt2, name: "Listbox.Option" });
}
var wt2 = import_react100.Fragment;
function kt2(e8, i15) {
  let { options: o17, placeholder: r18, ...a20 } = e8, O6 = { ref: y(i15) }, d12 = Q("ListboxSelectedOption"), p6 = (0, import_react100.useMemo)(() => ({}), []), n13 = d12.value === void 0 || d12.value === null || d12.mode === 1 && Array.isArray(d12.value) && d12.value.length === 0;
  return import_react100.default.createElement(ge3.Provider, { value: true }, H({ ourProps: O6, theirProps: { ...a20, children: import_react100.default.createElement(import_react100.default.Fragment, null, r18 && n13 ? r18 : o17) }, slot: p6, defaultTag: wt2, name: "ListboxSelectedOption" }));
}
var Ut2 = W(ht2);
var Nt2 = W(_t2);
var Ht2 = K;
var Gt2 = W(Ft2);
var Vt2 = W(Bt2);
var Kt2 = W(kt2);
var Mo = Object.assign(Ut2, { Button: Nt2, Label: Ht2, Options: Gt2, Option: Vt2, SelectedOption: Kt2 });

// node_modules/@headlessui/react/dist/components/menu/menu.js
var import_react101 = __toESM(require_react(), 1);
var import_react_dom8 = __toESM(require_react_dom(), 1);
var qe = ((r18) => (r18[r18.Open = 0] = "Open", r18[r18.Closed = 1] = "Closed", r18))(qe || {});
var ze = ((r18) => (r18[r18.Pointer = 0] = "Pointer", r18[r18.Other = 1] = "Other", r18))(ze || {});
var Ye = ((a20) => (a20[a20.OpenMenu = 0] = "OpenMenu", a20[a20.CloseMenu = 1] = "CloseMenu", a20[a20.GoToItem = 2] = "GoToItem", a20[a20.Search = 3] = "Search", a20[a20.ClearSearch = 4] = "ClearSearch", a20[a20.RegisterItem = 5] = "RegisterItem", a20[a20.UnregisterItem = 6] = "UnregisterItem", a20[a20.SetButtonElement = 7] = "SetButtonElement", a20[a20.SetItemsElement = 8] = "SetItemsElement", a20))(Ye || {});
function W5(e8, n13 = (r18) => r18) {
  let r18 = e8.activeItemIndex !== null ? e8.items[e8.activeItemIndex] : null, i15 = _2(n13(e8.items.slice()), (p6) => p6.dataRef.current.domRef.current), o17 = r18 ? i15.indexOf(r18) : null;
  return o17 === -1 && (o17 = null), { items: i15, activeItemIndex: o17 };
}
var Ze = { [1](e8) {
  return e8.menuState === 1 ? e8 : { ...e8, activeItemIndex: null, menuState: 1 };
}, [0](e8) {
  return e8.menuState === 0 ? e8 : { ...e8, __demoMode: false, menuState: 0 };
}, [2]: (e8, n13) => {
  var p6, m9, s13, u17, a20;
  if (e8.menuState === 1) return e8;
  let r18 = { ...e8, searchQuery: "", activationTrigger: (p6 = n13.trigger) != null ? p6 : 1, __demoMode: false };
  if (n13.focus === c9.Nothing) return { ...r18, activeItemIndex: null };
  if (n13.focus === c9.Specific) return { ...r18, activeItemIndex: e8.items.findIndex((t11) => t11.id === n13.id) };
  if (n13.focus === c9.Previous) {
    let t11 = e8.activeItemIndex;
    if (t11 !== null) {
      let d12 = e8.items[t11].dataRef.current.domRef, f21 = f13(n13, { resolveItems: () => e8.items, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (c14) => c14.id, resolveDisabled: (c14) => c14.dataRef.current.disabled });
      if (f21 !== null) {
        let c14 = e8.items[f21].dataRef.current.domRef;
        if (((m9 = d12.current) == null ? void 0 : m9.previousElementSibling) === c14.current || ((s13 = c14.current) == null ? void 0 : s13.previousElementSibling) === null) return { ...r18, activeItemIndex: f21 };
      }
    }
  } else if (n13.focus === c9.Next) {
    let t11 = e8.activeItemIndex;
    if (t11 !== null) {
      let d12 = e8.items[t11].dataRef.current.domRef, f21 = f13(n13, { resolveItems: () => e8.items, resolveActiveIndex: () => e8.activeItemIndex, resolveId: (c14) => c14.id, resolveDisabled: (c14) => c14.dataRef.current.disabled });
      if (f21 !== null) {
        let c14 = e8.items[f21].dataRef.current.domRef;
        if (((u17 = d12.current) == null ? void 0 : u17.nextElementSibling) === c14.current || ((a20 = c14.current) == null ? void 0 : a20.nextElementSibling) === null) return { ...r18, activeItemIndex: f21 };
      }
    }
  }
  let i15 = W5(e8), o17 = f13(n13, { resolveItems: () => i15.items, resolveActiveIndex: () => i15.activeItemIndex, resolveId: (t11) => t11.id, resolveDisabled: (t11) => t11.dataRef.current.disabled });
  return { ...r18, ...i15, activeItemIndex: o17 };
}, [3]: (e8, n13) => {
  let i15 = e8.searchQuery !== "" ? 0 : 1, o17 = e8.searchQuery + n13.value.toLowerCase(), m9 = (e8.activeItemIndex !== null ? e8.items.slice(e8.activeItemIndex + i15).concat(e8.items.slice(0, e8.activeItemIndex + i15)) : e8.items).find((u17) => {
    var a20;
    return ((a20 = u17.dataRef.current.textValue) == null ? void 0 : a20.startsWith(o17)) && !u17.dataRef.current.disabled;
  }), s13 = m9 ? e8.items.indexOf(m9) : -1;
  return s13 === -1 || s13 === e8.activeItemIndex ? { ...e8, searchQuery: o17 } : { ...e8, searchQuery: o17, activeItemIndex: s13, activationTrigger: 1 };
}, [4](e8) {
  return e8.searchQuery === "" ? e8 : { ...e8, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e8, n13) => {
  let r18 = W5(e8, (i15) => [...i15, { id: n13.id, dataRef: n13.dataRef }]);
  return { ...e8, ...r18 };
}, [6]: (e8, n13) => {
  let r18 = W5(e8, (i15) => {
    let o17 = i15.findIndex((p6) => p6.id === n13.id);
    return o17 !== -1 && i15.splice(o17, 1), i15;
  });
  return { ...e8, ...r18, activationTrigger: 1 };
}, [7]: (e8, n13) => e8.buttonElement === n13.element ? e8 : { ...e8, buttonElement: n13.element }, [8]: (e8, n13) => e8.itemsElement === n13.element ? e8 : { ...e8, itemsElement: n13.element } };
var j6 = (0, import_react101.createContext)(null);
j6.displayName = "MenuContext";
function w10(e8) {
  let n13 = (0, import_react101.useContext)(j6);
  if (n13 === null) {
    let r18 = new Error(`<${e8} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r18, w10), r18;
  }
  return n13;
}
function et(e8, n13) {
  return u2(n13.type, Ze, e8, n13);
}
var tt = import_react101.Fragment;
function nt(e8, n13) {
  let { __demoMode: r18 = false, ...i15 } = e8, o17 = (0, import_react101.useReducer)(et, { __demoMode: r18, menuState: r18 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: p6, itemsElement: m9, buttonElement: s13 }, u17] = o17, a20 = y(n13);
  R3(p6 === 0, [s13, m9], (P7, S9) => {
    u17({ type: 1 }), A2(S9, h5.Loose) || (P7.preventDefault(), s13 == null || s13.focus());
  });
  let d12 = o4(() => {
    u17({ type: 1 });
  }), f21 = (0, import_react101.useMemo)(() => ({ open: p6 === 0, close: d12 }), [p6, d12]), c14 = { ref: a20 };
  return import_react101.default.createElement(ve, null, import_react101.default.createElement(j6.Provider, { value: o17 }, import_react101.default.createElement(c8, { value: u2(p6, { [0]: i11.Open, [1]: i11.Closed }) }, H({ ourProps: c14, theirProps: i15, slot: f21, defaultTag: tt, name: "Menu" }))));
}
var rt = "button";
function ot(e8, n13) {
  var h7;
  let r18 = (0, import_react47.useId)(), { id: i15 = `headlessui-menu-button-${r18}`, disabled: o17 = false, autoFocus: p6 = false, ...m9 } = e8, [s13, u17] = w10("Menu.Button"), a20 = Fe(), t11 = I(), d12 = y(n13, ye(), o4((T11) => u17({ type: 7, element: T11 }))), f21 = o4((T11) => {
    switch (T11.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        T11.preventDefault(), T11.stopPropagation(), (0, import_react_dom8.flushSync)(() => u17({ type: 0 })), u17({ type: 2, focus: c9.First });
        break;
      case o8.ArrowUp:
        T11.preventDefault(), T11.stopPropagation(), (0, import_react_dom8.flushSync)(() => u17({ type: 0 })), u17({ type: 2, focus: c9.Last });
        break;
    }
  }), c14 = o4((T11) => {
    switch (T11.key) {
      case o8.Space:
        T11.preventDefault();
        break;
    }
  }), P7 = o4((T11) => {
    var G7;
    if (r5(T11.currentTarget)) return T11.preventDefault();
    o17 || (s13.menuState === 0 ? ((0, import_react_dom8.flushSync)(() => u17({ type: 1 })), (G7 = s13.buttonElement) == null || G7.focus({ preventScroll: true })) : (T11.preventDefault(), u17({ type: 0 })));
  }), { isFocusVisible: S9, focusProps: b6 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p6 }), { isHovered: v5, hoverProps: M8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: o17 }), { pressed: A8, pressProps: x6 } = w({ disabled: o17 }), C10 = (0, import_react101.useMemo)(() => ({ open: s13.menuState === 0, active: A8 || s13.menuState === 0, disabled: o17, hover: v5, focus: S9, autofocus: p6 }), [s13, v5, S9, A8, o17, p6]), F5 = D(a20(), { ref: d12, id: i15, type: e6(e8, s13.buttonElement), "aria-haspopup": "menu", "aria-controls": (h7 = s13.itemsElement) == null ? void 0 : h7.id, "aria-expanded": s13.menuState === 0, disabled: o17 || void 0, autoFocus: p6, onKeyDown: f21, onKeyUp: c14, onClick: P7 }, b6, M8, x6);
  return H({ mergeRefs: t11, ourProps: F5, theirProps: m9, slot: C10, defaultTag: rt, name: "Menu.Button" });
}
var at = "div";
var it = M.RenderStrategy | M.Static;
function lt(e8, n13) {
  var Q3, J5;
  let r18 = (0, import_react47.useId)(), { id: i15 = `headlessui-menu-items-${r18}`, anchor: o17, portal: p6 = false, modal: m9 = true, transition: s13 = false, ...u17 } = e8, a20 = xe(o17), [t11, d12] = w10("Menu.Items"), [f21, c14] = Re2(a20), P7 = be(), [S9, b6] = (0, import_react101.useState)(null), v5 = y(n13, a20 ? f21 : null, o4((l14) => d12({ type: 8, element: l14 })), b6), M8 = n9(t11.itemsElement);
  a20 && (p6 = true);
  let A8 = u13(), [x6, C10] = R4(s13, S9, A8 !== null ? (A8 & i11.Open) === i11.Open : t11.menuState === 0);
  m6(x6, t11.buttonElement, () => {
    d12({ type: 1 });
  });
  let F5 = t11.__demoMode ? false : m9 && t11.menuState === 0;
  f10(F5, M8);
  let h7 = t11.__demoMode ? false : m9 && t11.menuState === 0;
  y3(h7, { allowed: (0, import_react101.useCallback)(() => [t11.buttonElement, t11.itemsElement], [t11.buttonElement, t11.itemsElement]) });
  let T11 = t11.menuState !== 0, g6 = s9(T11, t11.buttonElement) ? false : x6;
  (0, import_react101.useEffect)(() => {
    let l14 = t11.itemsElement;
    l14 && t11.menuState === 0 && l14 !== (M8 == null ? void 0 : M8.activeElement) && l14.focus({ preventScroll: true });
  }, [t11.menuState, t11.itemsElement, M8]), F2(t11.menuState === 0, { container: t11.itemsElement, accept(l14) {
    return l14.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : l14.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(l14) {
    l14.setAttribute("role", "none");
  } });
  let L9 = p(), oe4 = o4((l14) => {
    var V5, X4, $3;
    switch (L9.dispose(), l14.key) {
      case o8.Space:
        if (t11.searchQuery !== "") return l14.preventDefault(), l14.stopPropagation(), d12({ type: 3, value: l14.key });
      case o8.Enter:
        if (l14.preventDefault(), l14.stopPropagation(), d12({ type: 1 }), t11.activeItemIndex !== null) {
          let { dataRef: se5 } = t11.items[t11.activeItemIndex];
          (X4 = (V5 = se5.current) == null ? void 0 : V5.domRef.current) == null || X4.click();
        }
        G3(t11.buttonElement);
        break;
      case o8.ArrowDown:
        return l14.preventDefault(), l14.stopPropagation(), d12({ type: 2, focus: c9.Next });
      case o8.ArrowUp:
        return l14.preventDefault(), l14.stopPropagation(), d12({ type: 2, focus: c9.Previous });
      case o8.Home:
      case o8.PageUp:
        return l14.preventDefault(), l14.stopPropagation(), d12({ type: 2, focus: c9.First });
      case o8.End:
      case o8.PageDown:
        return l14.preventDefault(), l14.stopPropagation(), d12({ type: 2, focus: c9.Last });
      case o8.Escape:
        l14.preventDefault(), l14.stopPropagation(), (0, import_react_dom8.flushSync)(() => d12({ type: 1 })), ($3 = t11.buttonElement) == null || $3.focus({ preventScroll: true });
        break;
      case o8.Tab:
        l14.preventDefault(), l14.stopPropagation(), (0, import_react_dom8.flushSync)(() => d12({ type: 1 })), j3(t11.buttonElement, l14.shiftKey ? F.Previous : F.Next);
        break;
      default:
        l14.key.length === 1 && (d12({ type: 3, value: l14.key }), L9.setTimeout(() => d12({ type: 4 }), 350));
        break;
    }
  }), ae6 = o4((l14) => {
    switch (l14.key) {
      case o8.Space:
        l14.preventDefault();
        break;
    }
  }), ie5 = (0, import_react101.useMemo)(() => ({ open: t11.menuState === 0 }), [t11.menuState]), le5 = D(a20 ? P7() : {}, { "aria-activedescendant": t11.activeItemIndex === null || (Q3 = t11.items[t11.activeItemIndex]) == null ? void 0 : Q3.id, "aria-labelledby": (J5 = t11.buttonElement) == null ? void 0 : J5.id, id: i15, onKeyDown: oe4, onKeyUp: ae6, role: "menu", tabIndex: t11.menuState === 0 ? 0 : void 0, ref: v5, style: { ...u17.style, ...c14, "--button-width": d3(t11.buttonElement, true).width }, ...H4(C10) });
  return import_react101.default.createElement(te, { enabled: p6 ? e8.static || x6 : false }, H({ ourProps: le5, theirProps: u17, slot: ie5, defaultTag: at, features: it, visible: g6, name: "Menu.Items" }));
}
var st = import_react101.Fragment;
function ut(e8, n13) {
  let r18 = (0, import_react47.useId)(), { id: i15 = `headlessui-menu-item-${r18}`, disabled: o17 = false, ...p6 } = e8, [m9, s13] = w10("Menu.Item"), u17 = m9.activeItemIndex !== null ? m9.items[m9.activeItemIndex].id === i15 : false, a20 = (0, import_react101.useRef)(null), t11 = y(n13, a20);
  n(() => {
    if (!m9.__demoMode && m9.menuState === 0 && u17 && m9.activationTrigger !== 0) return o2().requestAnimationFrame(() => {
      var g6, L9;
      (L9 = (g6 = a20.current) == null ? void 0 : g6.scrollIntoView) == null || L9.call(g6, { block: "nearest" });
    });
  }, [m9.__demoMode, a20, u17, m9.menuState, m9.activationTrigger, m9.activeItemIndex]);
  let d12 = s10(a20), f21 = (0, import_react101.useRef)({ disabled: o17, domRef: a20, get textValue() {
    return d12();
  } });
  n(() => {
    f21.current.disabled = o17;
  }, [f21, o17]), n(() => (s13({ type: 5, id: i15, dataRef: f21 }), () => s13({ type: 6, id: i15 })), [f21, i15]);
  let c14 = o4(() => {
    s13({ type: 1 });
  }), P7 = o4((g6) => {
    if (o17) return g6.preventDefault();
    s13({ type: 1 }), G3(m9.buttonElement);
  }), S9 = o4(() => {
    if (o17) return s13({ type: 2, focus: c9.Nothing });
    s13({ type: 2, focus: c9.Specific, id: i15 });
  }), b6 = u11(), v5 = o4((g6) => {
    b6.update(g6), !o17 && (u17 || s13({ type: 2, focus: c9.Specific, id: i15, trigger: 0 }));
  }), M8 = o4((g6) => {
    b6.wasMoved(g6) && (o17 || u17 || s13({ type: 2, focus: c9.Specific, id: i15, trigger: 0 }));
  }), A8 = o4((g6) => {
    b6.wasMoved(g6) && (o17 || u17 && s13({ type: 2, focus: c9.Nothing }));
  }), [x6, C10] = z(), [F5, h7] = U(), T11 = (0, import_react101.useMemo)(() => ({ active: u17, focus: u17, disabled: o17, close: c14 }), [u17, o17, c14]);
  return import_react101.default.createElement(C10, null, import_react101.default.createElement(h7, null, H({ ourProps: { id: i15, ref: t11, role: "menuitem", tabIndex: o17 === true ? void 0 : -1, "aria-disabled": o17 === true ? true : void 0, "aria-labelledby": x6, "aria-describedby": F5, disabled: void 0, onClick: P7, onFocus: S9, onPointerEnter: v5, onMouseEnter: v5, onPointerMove: M8, onMouseMove: M8, onPointerLeave: A8, onMouseLeave: A8 }, theirProps: p6, slot: T11, defaultTag: st, name: "Menu.Item" })));
}
var pt = "div";
function mt(e8, n13) {
  let [r18, i15] = z();
  return import_react101.default.createElement(i15, null, H({ ourProps: { ref: n13, "aria-labelledby": r18, role: "group" }, theirProps: e8, slot: {}, defaultTag: pt, name: "Menu.Section" }));
}
var dt = "header";
function ct2(e8, n13) {
  let r18 = (0, import_react47.useId)(), { id: i15 = `headlessui-menu-heading-${r18}`, ...o17 } = e8, p6 = P4();
  n(() => p6.register(i15), [i15, p6.register]);
  let m9 = { id: i15, ref: n13, role: "presentation", ...p6.props };
  return H({ ourProps: m9, theirProps: o17, slot: {}, defaultTag: dt, name: "Menu.Heading" });
}
var ft = "div";
function Tt(e8, n13) {
  return H({ ourProps: { ref: n13, role: "separator" }, theirProps: e8, slot: {}, defaultTag: ft, name: "Menu.Separator" });
}
var yt = W(nt);
var It3 = W(ot);
var gt2 = W(lt);
var Et3 = W(ut);
var Mt3 = W(mt);
var St3 = W(ct2);
var At3 = W(Tt);
var rn = Object.assign(yt, { Button: It3, Items: gt2, Item: Et3, Section: Mt3, Heading: St3, Separator: At3 });

// node_modules/@headlessui/react/dist/components/popover/popover.js
var import_react102 = __toESM(require_react(), 1);
var at2 = ((P7) => (P7[P7.Open = 0] = "Open", P7[P7.Closed = 1] = "Closed", P7))(at2 || {});
var pt2 = ((s13) => (s13[s13.TogglePopover = 0] = "TogglePopover", s13[s13.ClosePopover = 1] = "ClosePopover", s13[s13.SetButton = 2] = "SetButton", s13[s13.SetButtonId = 3] = "SetButtonId", s13[s13.SetPanel = 4] = "SetPanel", s13[s13.SetPanelId = 5] = "SetPanelId", s13))(pt2 || {});
var st2 = { [0]: (t11) => ({ ...t11, popoverState: u2(t11.popoverState, { [0]: 1, [1]: 0 }), __demoMode: false }), [1](t11) {
  return t11.popoverState === 1 ? t11 : { ...t11, popoverState: 1, __demoMode: false };
}, [2](t11, n13) {
  return t11.button === n13.button ? t11 : { ...t11, button: n13.button };
}, [3](t11, n13) {
  return t11.buttonId === n13.buttonId ? t11 : { ...t11, buttonId: n13.buttonId };
}, [4](t11, n13) {
  return t11.panel === n13.panel ? t11 : { ...t11, panel: n13.panel };
}, [5](t11, n13) {
  return t11.panelId === n13.panelId ? t11 : { ...t11, panelId: n13.panelId };
} };
var Ee2 = (0, import_react102.createContext)(null);
Ee2.displayName = "PopoverContext";
function se4(t11) {
  let n13 = (0, import_react102.useContext)(Ee2);
  if (n13 === null) {
    let P7 = new Error(`<${t11} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(P7, se4), P7;
  }
  return n13;
}
var ue3 = (0, import_react102.createContext)(null);
ue3.displayName = "PopoverAPIContext";
function be4(t11) {
  let n13 = (0, import_react102.useContext)(ue3);
  if (n13 === null) {
    let P7 = new Error(`<${t11} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(P7, be4), P7;
  }
  return n13;
}
var ge4 = (0, import_react102.createContext)(null);
ge4.displayName = "PopoverGroupContext";
function Me2() {
  return (0, import_react102.useContext)(ge4);
}
var ie4 = (0, import_react102.createContext)(null);
ie4.displayName = "PopoverPanelContext";
function ut2() {
  return (0, import_react102.useContext)(ie4);
}
function it2(t11, n13) {
  return u2(n13.type, st2, t11, n13);
}
var dt2 = "div";
function Pt4(t11, n13) {
  var w13;
  let { __demoMode: P7 = false, ...C10 } = t11, m9 = (0, import_react102.useRef)(null), A8 = y(n13, T3((l14) => {
    m9.current = l14;
  })), s13 = (0, import_react102.useRef)([]), r18 = (0, import_react102.useReducer)(it2, { __demoMode: P7, popoverState: P7 ? 0 : 1, buttons: s13, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: (0, import_react102.createRef)(), afterPanelSentinel: (0, import_react102.createRef)(), afterButtonSentinel: (0, import_react102.createRef)() }), [{ popoverState: T11, button: d12, buttonId: o17, panel: u17, panelId: B3, beforePanelSentinel: y9, afterPanelSentinel: b6, afterButtonSentinel: i15 }, a20] = r18, c14 = n9((w13 = m9.current) != null ? w13 : d12), L9 = (0, import_react102.useMemo)(() => {
    if (!d12 || !u17) return false;
    for (let S9 of document.querySelectorAll("body > *")) if (Number(S9 == null ? void 0 : S9.contains(d12)) ^ Number(S9 == null ? void 0 : S9.contains(u17))) return true;
    let l14 = b2(), e8 = l14.indexOf(d12), p6 = (e8 + l14.length - 1) % l14.length, f21 = (e8 + 1) % l14.length, v5 = l14[p6], O6 = l14[f21];
    return !u17.contains(v5) && !u17.contains(O6);
  }, [d12, u17]), _6 = s3(o17), H13 = s3(B3), I7 = (0, import_react102.useMemo)(() => ({ buttonId: _6, panelId: H13, close: () => a20({ type: 1 }) }), [_6, H13, a20]), M8 = Me2(), h7 = M8 == null ? void 0 : M8.registerPopover, R10 = o4(() => {
    var l14;
    return (l14 = M8 == null ? void 0 : M8.isFocusWithinPopoverGroup()) != null ? l14 : (c14 == null ? void 0 : c14.activeElement) && ((d12 == null ? void 0 : d12.contains(c14.activeElement)) || (u17 == null ? void 0 : u17.contains(c14.activeElement)));
  });
  (0, import_react102.useEffect)(() => h7 == null ? void 0 : h7(I7), [h7, I7]);
  let [$3, U7] = ee(), F5 = b4(d12), N6 = R7({ mainTreeNode: F5, portals: $3, defaultContainers: [d12, u17] });
  E6(c14 == null ? void 0 : c14.defaultView, "focus", (l14) => {
    var e8, p6, f21, v5, O6, S9;
    l14.target !== window && l14.target instanceof HTMLElement && T11 === 0 && (R10() || d12 && u17 && (N6.contains(l14.target) || (p6 = (e8 = y9.current) == null ? void 0 : e8.contains) != null && p6.call(e8, l14.target) || (v5 = (f21 = b6.current) == null ? void 0 : f21.contains) != null && v5.call(f21, l14.target) || (S9 = (O6 = i15.current) == null ? void 0 : O6.contains) != null && S9.call(O6, l14.target) || a20({ type: 1 })));
  }, true), R3(T11 === 0, N6.resolveContainers, (l14, e8) => {
    a20({ type: 1 }), A2(e8, h5.Loose) || (l14.preventDefault(), d12 == null || d12.focus());
  });
  let x6 = o4((l14) => {
    a20({ type: 1 });
    let e8 = (() => l14 ? l14 instanceof HTMLElement ? l14 : "current" in l14 && l14.current instanceof HTMLElement ? l14.current : d12 : d12)();
    e8 == null || e8.focus();
  }), Z7 = (0, import_react102.useMemo)(() => ({ close: x6, isPortalled: L9 }), [x6, L9]), J5 = (0, import_react102.useMemo)(() => ({ open: T11 === 0, close: x6 }), [T11, x6]), X4 = { ref: A8 };
  return import_react102.default.createElement(O3, { node: F5 }, import_react102.default.createElement(ve, null, import_react102.default.createElement(ie4.Provider, { value: null }, import_react102.default.createElement(Ee2.Provider, { value: r18 }, import_react102.default.createElement(ue3.Provider, { value: Z7 }, import_react102.default.createElement(C3, { value: x6 }, import_react102.default.createElement(c8, { value: u2(T11, { [0]: i11.Open, [1]: i11.Closed }) }, import_react102.default.createElement(U7, null, H({ ourProps: X4, theirProps: C10, slot: J5, defaultTag: dt2, name: "Popover" })))))))));
}
var ft2 = "button";
function ct3(t11, n13) {
  let P7 = (0, import_react47.useId)(), { id: C10 = `headlessui-popover-button-${P7}`, disabled: m9 = false, autoFocus: A8 = false, ...s13 } = t11, [r18, T11] = se4("Popover.Button"), { isPortalled: d12 } = be4("Popover.Button"), o17 = (0, import_react102.useRef)(null), u17 = `headlessui-focus-sentinel-${(0, import_react47.useId)()}`, B3 = Me2(), y9 = B3 == null ? void 0 : B3.closeOthers, i15 = ut2() !== null;
  (0, import_react102.useEffect)(() => {
    if (!i15) return T11({ type: 3, buttonId: C10 }), () => {
      T11({ type: 3, buttonId: null });
    };
  }, [i15, C10, T11]);
  let [a20] = (0, import_react102.useState)(() => Symbol()), c14 = y(o17, n13, ye(), o4((e8) => {
    if (!i15) {
      if (e8) r18.buttons.current.push(a20);
      else {
        let p6 = r18.buttons.current.indexOf(a20);
        p6 !== -1 && r18.buttons.current.splice(p6, 1);
      }
      r18.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e8 && T11({ type: 2, button: e8 });
    }
  })), L9 = y(o17, n13), _6 = n9(o17), H13 = o4((e8) => {
    var p6, f21, v5;
    if (i15) {
      if (r18.popoverState === 1) return;
      switch (e8.key) {
        case o8.Space:
        case o8.Enter:
          e8.preventDefault(), (f21 = (p6 = e8.target).click) == null || f21.call(p6), T11({ type: 1 }), (v5 = r18.button) == null || v5.focus();
          break;
      }
    } else switch (e8.key) {
      case o8.Space:
      case o8.Enter:
        e8.preventDefault(), e8.stopPropagation(), r18.popoverState === 1 && (y9 == null || y9(r18.buttonId)), T11({ type: 0 });
        break;
      case o8.Escape:
        if (r18.popoverState !== 0) return y9 == null ? void 0 : y9(r18.buttonId);
        if (!o17.current || _6 != null && _6.activeElement && !o17.current.contains(_6.activeElement)) return;
        e8.preventDefault(), e8.stopPropagation(), T11({ type: 1 });
        break;
    }
  }), I7 = o4((e8) => {
    i15 || e8.key === o8.Space && e8.preventDefault();
  }), M8 = o4((e8) => {
    var p6, f21;
    r5(e8.currentTarget) || m9 || (i15 ? (T11({ type: 1 }), (p6 = r18.button) == null || p6.focus()) : (e8.preventDefault(), e8.stopPropagation(), r18.popoverState === 1 && (y9 == null || y9(r18.buttonId)), T11({ type: 0 }), (f21 = r18.button) == null || f21.focus()));
  }), h7 = o4((e8) => {
    e8.preventDefault(), e8.stopPropagation();
  }), { isFocusVisible: R10, focusProps: $3 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: A8 }), { isHovered: U7, hoverProps: F5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: m9 }), { pressed: N6, pressProps: Q3 } = w({ disabled: m9 }), x6 = r18.popoverState === 0, Z7 = (0, import_react102.useMemo)(() => ({ open: x6, active: N6 || x6, disabled: m9, hover: U7, focus: R10, autofocus: A8 }), [x6, U7, R10, N6, m9, A8]), J5 = e6(t11, r18.button), X4 = i15 ? D({ ref: L9, type: J5, onKeyDown: H13, onClick: M8, disabled: m9 || void 0, autoFocus: A8 }, $3, F5, Q3) : D({ ref: c14, id: r18.buttonId, type: J5, "aria-expanded": r18.popoverState === 0, "aria-controls": r18.panel ? r18.panelId : void 0, disabled: m9 || void 0, autoFocus: A8, onKeyDown: H13, onKeyUp: I7, onClick: M8, onMouseDown: h7 }, $3, F5, Q3), w13 = u16(), l14 = o4(() => {
    let e8 = r18.panel;
    if (!e8) return;
    function p6() {
      u2(w13.current, { [a15.Forwards]: () => P5(e8, F.First), [a15.Backwards]: () => P5(e8, F.Last) }) === T6.Error && P5(b2().filter((v5) => v5.dataset.headlessuiFocusGuard !== "true"), u2(w13.current, { [a15.Forwards]: F.Next, [a15.Backwards]: F.Previous }), { relativeTo: r18.button });
    }
    p6();
  });
  return import_react102.default.createElement(import_react102.default.Fragment, null, H({ ourProps: X4, theirProps: s13, slot: Z7, defaultTag: ft2, name: "Popover.Button" }), x6 && !i15 && d12 && import_react102.default.createElement(T2, { id: u17, ref: r18.afterButtonSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: l14 }));
}
var vt = "div";
var Tt2 = M.RenderStrategy | M.Static;
function Oe2(t11, n13) {
  let P7 = (0, import_react47.useId)(), { id: C10 = `headlessui-popover-backdrop-${P7}`, transition: m9 = false, ...A8 } = t11, [{ popoverState: s13 }, r18] = se4("Popover.Backdrop"), [T11, d12] = (0, import_react102.useState)(null), o17 = y(n13, d12), u17 = u13(), [B3, y9] = R4(m9, T11, u17 !== null ? (u17 & i11.Open) === i11.Open : s13 === 0), b6 = o4((c14) => {
    if (r5(c14.currentTarget)) return c14.preventDefault();
    r18({ type: 1 });
  }), i15 = (0, import_react102.useMemo)(() => ({ open: s13 === 0 }), [s13]), a20 = { ref: o17, id: C10, "aria-hidden": true, onClick: b6, ...H4(y9) };
  return H({ ourProps: a20, theirProps: A8, slot: i15, defaultTag: vt, features: Tt2, visible: B3, name: "Popover.Backdrop" });
}
var mt2 = "div";
var yt2 = M.RenderStrategy | M.Static;
function Et4(t11, n13) {
  let P7 = (0, import_react47.useId)(), { id: C10 = `headlessui-popover-panel-${P7}`, focus: m9 = false, anchor: A8, portal: s13 = false, modal: r18 = false, transition: T11 = false, ...d12 } = t11, [o17, u17] = se4("Popover.Panel"), { close: B3, isPortalled: y9 } = be4("Popover.Panel"), b6 = `headlessui-focus-sentinel-before-${P7}`, i15 = `headlessui-focus-sentinel-after-${P7}`, a20 = (0, import_react102.useRef)(null), c14 = xe(A8), [L9, _6] = Re2(c14), H13 = be();
  c14 && (s13 = true);
  let [I7, M8] = (0, import_react102.useState)(null), h7 = y(a20, n13, c14 ? L9 : null, o4((e8) => u17({ type: 4, panel: e8 })), M8), R10 = n9(a20), $3 = I();
  n(() => (u17({ type: 5, panelId: C10 }), () => {
    u17({ type: 5, panelId: null });
  }), [C10, u17]);
  let U7 = u13(), [F5, N6] = R4(T11, I7, U7 !== null ? (U7 & i11.Open) === i11.Open : o17.popoverState === 0);
  m6(F5, o17.button, () => {
    u17({ type: 1 });
  });
  let Q3 = o17.__demoMode ? false : r18 && F5;
  f10(Q3, R10);
  let x6 = o4((e8) => {
    var p6;
    switch (e8.key) {
      case o8.Escape:
        if (o17.popoverState !== 0 || !a20.current || R10 != null && R10.activeElement && !a20.current.contains(R10.activeElement)) return;
        e8.preventDefault(), e8.stopPropagation(), u17({ type: 1 }), (p6 = o17.button) == null || p6.focus();
        break;
    }
  });
  (0, import_react102.useEffect)(() => {
    var e8;
    t11.static || o17.popoverState === 1 && ((e8 = t11.unmount) == null || e8) && u17({ type: 4, panel: null });
  }, [o17.popoverState, t11.unmount, t11.static, u17]), (0, import_react102.useEffect)(() => {
    if (o17.__demoMode || !m9 || o17.popoverState !== 0 || !a20.current) return;
    let e8 = R10 == null ? void 0 : R10.activeElement;
    a20.current.contains(e8) || P5(a20.current, F.First);
  }, [o17.__demoMode, m9, a20.current, o17.popoverState]);
  let Z7 = (0, import_react102.useMemo)(() => ({ open: o17.popoverState === 0, close: B3 }), [o17.popoverState, B3]), J5 = D(c14 ? H13() : {}, { ref: h7, id: C10, onKeyDown: x6, onBlur: m9 && o17.popoverState === 0 ? (e8) => {
    var f21, v5, O6, S9, K4;
    let p6 = e8.relatedTarget;
    p6 && a20.current && ((f21 = a20.current) != null && f21.contains(p6) || (u17({ type: 1 }), ((O6 = (v5 = o17.beforePanelSentinel.current) == null ? void 0 : v5.contains) != null && O6.call(v5, p6) || (K4 = (S9 = o17.afterPanelSentinel.current) == null ? void 0 : S9.contains) != null && K4.call(S9, p6)) && p6.focus({ preventScroll: true })));
  } : void 0, tabIndex: -1, style: { ...d12.style, ..._6, "--button-width": d3(o17.button, true).width }, ...H4(N6) }), X4 = u16(), w13 = o4(() => {
    let e8 = a20.current;
    if (!e8) return;
    function p6() {
      u2(X4.current, { [a15.Forwards]: () => {
        var v5;
        P5(e8, F.First) === T6.Error && ((v5 = o17.afterPanelSentinel.current) == null || v5.focus());
      }, [a15.Backwards]: () => {
        var f21;
        (f21 = o17.button) == null || f21.focus({ preventScroll: true });
      } });
    }
    p6();
  }), l14 = o4(() => {
    let e8 = a20.current;
    if (!e8) return;
    function p6() {
      u2(X4.current, { [a15.Forwards]: () => {
        if (!o17.button) return;
        let f21 = b2(), v5 = f21.indexOf(o17.button), O6 = f21.slice(0, v5 + 1), K4 = [...f21.slice(v5 + 1), ...O6];
        for (let de3 of K4.slice()) if (de3.dataset.headlessuiFocusGuard === "true" || I7 != null && I7.contains(de3)) {
          let Se5 = K4.indexOf(de3);
          Se5 !== -1 && K4.splice(Se5, 1);
        }
        P5(K4, F.First, { sorted: false });
      }, [a15.Backwards]: () => {
        var v5;
        P5(e8, F.Previous) === T6.Error && ((v5 = o17.button) == null || v5.focus());
      } });
    }
    p6();
  });
  return import_react102.default.createElement(s7, null, import_react102.default.createElement(ie4.Provider, { value: C10 }, import_react102.default.createElement(ue3.Provider, { value: { close: B3, isPortalled: y9 } }, import_react102.default.createElement(te, { enabled: s13 ? t11.static || F5 : false }, F5 && y9 && import_react102.default.createElement(T2, { id: b6, ref: o17.beforePanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: w13 }), H({ mergeRefs: $3, ourProps: J5, theirProps: d12, slot: Z7, defaultTag: mt2, features: yt2, visible: F5, name: "Popover.Panel" }), F5 && y9 && import_react102.default.createElement(T2, { id: i15, ref: o17.afterPanelSentinel, features: s4.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: l14 })))));
}
var bt = "div";
function gt3(t11, n13) {
  let P7 = (0, import_react102.useRef)(null), C10 = y(P7, n13), [m9, A8] = (0, import_react102.useState)([]), s13 = o4((b6) => {
    A8((i15) => {
      let a20 = i15.indexOf(b6);
      if (a20 !== -1) {
        let c14 = i15.slice();
        return c14.splice(a20, 1), c14;
      }
      return i15;
    });
  }), r18 = o4((b6) => (A8((i15) => [...i15, b6]), () => s13(b6))), T11 = o4(() => {
    var a20;
    let b6 = u(P7);
    if (!b6) return false;
    let i15 = b6.activeElement;
    return (a20 = P7.current) != null && a20.contains(i15) ? true : m9.some((c14) => {
      var L9, _6;
      return ((L9 = b6.getElementById(c14.buttonId.current)) == null ? void 0 : L9.contains(i15)) || ((_6 = b6.getElementById(c14.panelId.current)) == null ? void 0 : _6.contains(i15));
    });
  }), d12 = o4((b6) => {
    for (let i15 of m9) i15.buttonId.current !== b6 && i15.close();
  }), o17 = (0, import_react102.useMemo)(() => ({ registerPopover: r18, unregisterPopover: s13, isFocusWithinPopoverGroup: T11, closeOthers: d12 }), [r18, s13, T11, d12]), u17 = (0, import_react102.useMemo)(() => ({}), []), B3 = t11, y9 = { ref: C10 };
  return import_react102.default.createElement(O3, null, import_react102.default.createElement(ge4.Provider, { value: o17 }, H({ ourProps: y9, theirProps: B3, slot: u17, defaultTag: bt, name: "Popover.Group" })));
}
var St4 = W(Pt4);
var At4 = W(ct3);
var Ct3 = W(Oe2);
var Bt3 = W(Oe2);
var Rt3 = W(Et4);
var _t3 = W(gt3);
var ao = Object.assign(St4, { Button: At4, Backdrop: Bt3, Overlay: Ct3, Panel: Rt3, Group: _t3 });

// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
var import_react103 = __toESM(require_react(), 1);
var Le3 = ((e8) => (e8[e8.RegisterOption = 0] = "RegisterOption", e8[e8.UnregisterOption = 1] = "UnregisterOption", e8))(Le3 || {});
var ke2 = { [0](o17, t11) {
  let e8 = [...o17.options, { id: t11.id, element: t11.element, propsRef: t11.propsRef }];
  return { ...o17, options: _2(e8, (a20) => a20.element.current) };
}, [1](o17, t11) {
  let e8 = o17.options.slice(), a20 = o17.options.findIndex((O6) => O6.id === t11.id);
  return a20 === -1 ? o17 : (e8.splice(a20, 1), { ...o17, options: e8 });
} };
var j7 = (0, import_react103.createContext)(null);
j7.displayName = "RadioGroupDataContext";
function J4(o17) {
  let t11 = (0, import_react103.useContext)(j7);
  if (t11 === null) {
    let e8 = new Error(`<${o17} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, J4), e8;
  }
  return t11;
}
var X3 = (0, import_react103.createContext)(null);
X3.displayName = "RadioGroupActionsContext";
function z3(o17) {
  let t11 = (0, import_react103.useContext)(X3);
  if (t11 === null) {
    let e8 = new Error(`<${o17} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, z3), e8;
  }
  return t11;
}
function Fe3(o17, t11) {
  return u2(t11.type, ke2, o17, t11);
}
var Ie6 = "div";
function Ue3(o17, t11) {
  let e8 = (0, import_react47.useId)(), a20 = a3(), { id: O6 = `headlessui-radiogroup-${e8}`, value: m9, form: P7, name: i15, onChange: f21, by: c14, disabled: p6 = a20 || false, defaultValue: I7, ...y9 } = o17, T11 = u9(c14), [v5, C10] = (0, import_react103.useReducer)(Fe3, { options: [] }), n13 = v5.options, [U7, h7] = z(), [D9, L9] = U(), A8 = (0, import_react103.useRef)(null), M8 = y(A8, t11), l14 = l2(I7), [s13, _6] = T(m9, f21, l14), R10 = (0, import_react103.useMemo)(() => n13.find((r18) => !r18.propsRef.current.disabled), [n13]), b6 = (0, import_react103.useMemo)(() => n13.some((r18) => T11(r18.propsRef.current.value, s13)), [n13, s13]), d12 = o4((r18) => {
    var u17;
    if (p6 || T11(r18, s13)) return false;
    let k2 = (u17 = n13.find((H13) => T11(H13.propsRef.current.value, r18))) == null ? void 0 : u17.propsRef.current;
    return k2 != null && k2.disabled ? false : (_6 == null || _6(r18), true);
  }), de3 = o4((r18) => {
    let k2 = A8.current;
    if (!k2) return;
    let u17 = u(k2), H13 = n13.filter((g6) => g6.propsRef.current.disabled === false).map((g6) => g6.element.current);
    switch (r18.key) {
      case o8.Enter:
        p2(r18.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (r18.preventDefault(), r18.stopPropagation(), P5(H13, F.Previous | F.WrapAround) === T6.Success) {
          let E14 = n13.find((N6) => N6.element.current === (u17 == null ? void 0 : u17.activeElement));
          E14 && d12(E14.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (r18.preventDefault(), r18.stopPropagation(), P5(H13, F.Next | F.WrapAround) === T6.Success) {
          let E14 = n13.find((N6) => N6.element.current === (u17 == null ? void 0 : u17.activeElement));
          E14 && d12(E14.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          r18.preventDefault(), r18.stopPropagation();
          let g6 = n13.find((E14) => E14.element.current === (u17 == null ? void 0 : u17.activeElement));
          g6 && d12(g6.propsRef.current.value);
        }
        break;
    }
  }), q5 = o4((r18) => (C10({ type: 0, ...r18 }), () => C10({ type: 1, id: r18.id }))), ue4 = (0, import_react103.useMemo)(() => ({ value: s13, firstOption: R10, containsCheckedOption: b6, disabled: p6, compare: T11, ...v5 }), [s13, R10, b6, p6, T11, v5]), ce4 = (0, import_react103.useMemo)(() => ({ registerOption: q5, change: d12 }), [q5, d12]), fe6 = { ref: M8, id: O6, role: "radiogroup", "aria-labelledby": U7, "aria-describedby": D9, onKeyDown: de3 }, Te4 = (0, import_react103.useMemo)(() => ({ value: s13 }), [s13]), me7 = (0, import_react103.useCallback)(() => {
    if (l14 !== void 0) return d12(l14);
  }, [d12, l14]);
  return import_react103.default.createElement(L9, { name: "RadioGroup.Description" }, import_react103.default.createElement(h7, { name: "RadioGroup.Label" }, import_react103.default.createElement(X3.Provider, { value: ce4 }, import_react103.default.createElement(j7.Provider, { value: ue4 }, i15 != null && import_react103.default.createElement(j2, { disabled: p6, data: { [i15]: s13 || "on" }, overrides: { type: "radio", checked: s13 != null }, form: P7, onReset: me7 }), H({ ourProps: fe6, theirProps: y9, slot: Te4, defaultTag: Ie6, name: "RadioGroup" })))));
}
var Me3 = "div";
function Se3(o17, t11) {
  var R10;
  let e8 = J4("RadioGroup.Option"), a20 = z3("RadioGroup.Option"), O6 = (0, import_react47.useId)(), { id: m9 = `headlessui-radiogroup-option-${O6}`, value: P7, disabled: i15 = e8.disabled || false, autoFocus: f21 = false, ...c14 } = o17, p6 = (0, import_react103.useRef)(null), I7 = y(p6, t11), [y9, T11] = z(), [v5, C10] = U(), n13 = s3({ value: P7, disabled: i15 });
  n(() => a20.registerOption({ id: m9, element: p6, propsRef: n13 }), [m9, a20, p6, n13]);
  let U7 = o4((b6) => {
    var d12;
    if (r5(b6.currentTarget)) return b6.preventDefault();
    a20.change(P7) && ((d12 = p6.current) == null || d12.focus());
  }), h7 = ((R10 = e8.firstOption) == null ? void 0 : R10.id) === m9, { isFocusVisible: D9, focusProps: L9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: f21 }), { isHovered: A8, hoverProps: M8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: i15 }), l14 = e8.compare(e8.value, P7), s13 = D({ ref: I7, id: m9, role: "radio", "aria-checked": l14 ? "true" : "false", "aria-labelledby": y9, "aria-describedby": v5, "aria-disabled": i15 ? true : void 0, tabIndex: (() => i15 ? -1 : l14 || !e8.containsCheckedOption && h7 ? 0 : -1)(), onClick: i15 ? void 0 : U7, autoFocus: f21 }, L9, M8), _6 = (0, import_react103.useMemo)(() => ({ checked: l14, disabled: i15, active: D9, hover: A8, focus: D9, autofocus: f21 }), [l14, i15, A8, D9, f21]);
  return import_react103.default.createElement(C10, { name: "RadioGroup.Description" }, import_react103.default.createElement(T11, { name: "RadioGroup.Label" }, H({ ourProps: s13, theirProps: c14, slot: _6, defaultTag: Me3, name: "RadioGroup.Option" })));
}
var He4 = "span";
function we3(o17, t11) {
  var R10;
  let e8 = J4("Radio"), a20 = z3("Radio"), O6 = (0, import_react47.useId)(), m9 = u5(), P7 = a3(), { id: i15 = m9 || `headlessui-radio-${O6}`, value: f21, disabled: c14 = e8.disabled || P7 || false, autoFocus: p6 = false, ...I7 } = o17, y9 = (0, import_react103.useRef)(null), T11 = y(y9, t11), v5 = I2(), C10 = G(), n13 = s3({ value: f21, disabled: c14 });
  n(() => a20.registerOption({ id: i15, element: y9, propsRef: n13 }), [i15, a20, y9, n13]);
  let U7 = o4((b6) => {
    var d12;
    if (r5(b6.currentTarget)) return b6.preventDefault();
    a20.change(f21) && ((d12 = y9.current) == null || d12.focus());
  }), { isFocusVisible: h7, focusProps: D9 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: p6 }), { isHovered: L9, hoverProps: A8 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: c14 }), M8 = ((R10 = e8.firstOption) == null ? void 0 : R10.id) === i15, l14 = e8.compare(e8.value, f21), s13 = D({ ref: T11, id: i15, role: "radio", "aria-checked": l14 ? "true" : "false", "aria-labelledby": v5, "aria-describedby": C10, "aria-disabled": c14 ? true : void 0, tabIndex: (() => c14 ? -1 : l14 || !e8.containsCheckedOption && M8 ? 0 : -1)(), autoFocus: p6, onClick: c14 ? void 0 : U7 }, D9, A8), _6 = (0, import_react103.useMemo)(() => ({ checked: l14, disabled: c14, hover: L9, focus: h7, autofocus: p6 }), [l14, c14, L9, h7, p6]);
  return H({ ourProps: s13, theirProps: I7, slot: _6, defaultTag: He4, name: "Radio" });
}
var Ne3 = W(Ue3);
var We2 = W(Se3);
var Be2 = W(we3);
var Ve = K;
var Ke = w3;
var Tt3 = Object.assign(Ne3, { Option: We2, Radio: Be2, Label: Ve, Description: Ke });

// node_modules/@headlessui/react/dist/components/select/select.js
var import_react104 = __toESM(require_react(), 1);
var H11 = "select";
function B2(a20, i15) {
  let p6 = (0, import_react47.useId)(), d12 = u5(), n13 = a3(), { id: c14 = d12 || `headlessui-select-${p6}`, disabled: e8 = n13 || false, invalid: t11 = false, autoFocus: o17 = false, ...f21 } = a20, m9 = I2(), u17 = G(), { isFocusVisible: r18, focusProps: T11 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: o17 }), { isHovered: l14, hoverProps: b6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: s13, pressProps: y9 } = w({ disabled: e8 }), P7 = D({ ref: i15, id: c14, "aria-labelledby": m9, "aria-describedby": u17, "aria-invalid": t11 ? "" : void 0, disabled: e8 || void 0, autoFocus: o17 }, T11, b6, y9), S9 = (0, import_react104.useMemo)(() => ({ disabled: e8, invalid: t11, hover: l14, focus: r18, active: s13, autofocus: o17 }), [e8, t11, l14, r18, s13, o17]);
  return H({ ourProps: P7, theirProps: f21, slot: S9, defaultTag: H11, name: "Select" });
}
var $2 = W(B2);

// node_modules/@headlessui/react/dist/components/switch/switch.js
var import_react105 = __toESM(require_react(), 1);
var w11 = (0, import_react105.createContext)(null);
w11.displayName = "GroupContext";
var Pe4 = import_react105.Fragment;
function De5(n13) {
  var a20;
  let [o17, p6] = (0, import_react105.useState)(null), [f21, h7] = z(), [b6, t11] = U(), c14 = (0, import_react105.useMemo)(() => ({ switch: o17, setSwitch: p6 }), [o17, p6]), T11 = {}, y9 = n13;
  return import_react105.default.createElement(t11, { name: "Switch.Description", value: b6 }, import_react105.default.createElement(h7, { name: "Switch.Label", value: f21, props: { htmlFor: (a20 = c14.switch) == null ? void 0 : a20.id, onClick(u17) {
    o17 && (u17.currentTarget instanceof HTMLLabelElement && u17.preventDefault(), o17.click(), o17.focus({ preventScroll: true }));
  } } }, import_react105.default.createElement(w11.Provider, { value: c14 }, H({ ourProps: T11, theirProps: y9, slot: {}, defaultTag: Pe4, name: "Switch.Group" }))));
}
var ge5 = "button";
function ve3(n13, o17) {
  var C10;
  let p6 = (0, import_react47.useId)(), f21 = u5(), h7 = a3(), { id: b6 = f21 || `headlessui-switch-${p6}`, disabled: t11 = h7 || false, checked: c14, defaultChecked: T11, onChange: y9, name: a20, value: u17, form: A8, autoFocus: d12 = false, ...F5 } = n13, E14 = (0, import_react105.useContext)(w11), [H13, k2] = (0, import_react105.useState)(null), M8 = (0, import_react105.useRef)(null), U7 = y(M8, o17, E14 === null ? null : E14.setSwitch, k2), l14 = l2(T11), [s13, r18] = T(c14, y9, l14 != null ? l14 : false), I7 = p(), [_6, P7] = (0, import_react105.useState)(false), D9 = o4(() => {
    P7(true), r18 == null || r18(!s13), I7.nextFrame(() => {
      P7(false);
    });
  }), B3 = o4((e8) => {
    if (r5(e8.currentTarget)) return e8.preventDefault();
    e8.preventDefault(), D9();
  }), K4 = o4((e8) => {
    e8.key === o8.Space ? (e8.preventDefault(), D9()) : e8.key === o8.Enter && p2(e8.currentTarget);
  }), W7 = o4((e8) => e8.preventDefault()), O6 = I2(), N6 = G(), { isFocusVisible: g6, focusProps: J5 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: d12 }), { isHovered: v5, hoverProps: V5 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: t11 }), { pressed: x6, pressProps: X4 } = w({ disabled: t11 }), j8 = (0, import_react105.useMemo)(() => ({ checked: s13, disabled: t11, hover: v5, focus: g6, active: x6, autofocus: d12, changing: _6 }), [s13, v5, g6, x6, t11, _6, d12]), $3 = D({ id: b6, ref: U7, role: "switch", type: e6(n13, H13), tabIndex: n13.tabIndex === -1 ? 0 : (C10 = n13.tabIndex) != null ? C10 : 0, "aria-checked": s13, "aria-labelledby": O6, "aria-describedby": N6, disabled: t11 || void 0, autoFocus: d12, onClick: B3, onKeyUp: K4, onKeyPress: W7 }, J5, V5, X4), q5 = (0, import_react105.useCallback)(() => {
    if (l14 !== void 0) return r18 == null ? void 0 : r18(l14);
  }, [r18, l14]);
  return import_react105.default.createElement(import_react105.default.Fragment, null, a20 != null && import_react105.default.createElement(j2, { disabled: t11, data: { [a20]: u17 || "on" }, overrides: { type: "checkbox", checked: s13 }, form: A8, onReset: q5 }), H({ ourProps: $3, theirProps: F5, slot: j8, defaultTag: ge5, name: "Switch" }));
}
var xe3 = W(ve3);
var Ce2 = De5;
var Le4 = K;
var Ge2 = w3;
var Qe = Object.assign(xe3, { Group: Ce2, Label: Le4, Description: Ge2 });

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var import_react107 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
var import_react106 = __toESM(require_react(), 1);
function b5({ onFocus: n13 }) {
  let [r18, o17] = (0, import_react106.useState)(true), u17 = f18();
  return r18 ? import_react106.default.createElement(T2, { as: "button", type: "button", features: s4.Focusable, onFocus: (a20) => {
    a20.preventDefault();
    let e8, i15 = 50;
    function t11() {
      if (i15-- <= 0) {
        e8 && cancelAnimationFrame(e8);
        return;
      }
      if (n13()) {
        if (cancelAnimationFrame(e8), !u17.current) return;
        o17(false);
        return;
      }
      e8 = requestAnimationFrame(t11);
    }
    e8 = requestAnimationFrame(t11);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
var l13 = __toESM(require_react(), 1);
var s12 = l13.createContext(null);
function a19() {
  return { groups: /* @__PURE__ */ new Map(), get(o17, e8) {
    var i15;
    let t11 = this.groups.get(o17);
    t11 || (t11 = /* @__PURE__ */ new Map(), this.groups.set(o17, t11));
    let n13 = (i15 = t11.get(e8)) != null ? i15 : 0;
    t11.set(e8, n13 + 1);
    let r18 = Array.from(t11.keys()).indexOf(e8);
    function u17() {
      let c14 = t11.get(e8);
      c14 > 1 ? t11.set(e8, c14 - 1) : t11.delete(e8);
    }
    return [r18, u17];
  } };
}
function f20({ children: o17 }) {
  let e8 = l13.useRef(a19());
  return l13.createElement(s12.Provider, { value: e8 }, o17);
}
function C8(o17) {
  let e8 = l13.useContext(s12);
  if (!e8) throw new Error("You must wrap your component in a <StableCollection>");
  let t11 = l13.useId(), [n13, r18] = e8.current.get(o17, t11);
  return l13.useEffect(() => r18, []), n13;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
var Re5 = ((t11) => (t11[t11.Forwards = 0] = "Forwards", t11[t11.Backwards = 1] = "Backwards", t11))(Re5 || {});
var _e3 = ((l14) => (l14[l14.Less = -1] = "Less", l14[l14.Equal = 0] = "Equal", l14[l14.Greater = 1] = "Greater", l14))(_e3 || {});
var De6 = ((n13) => (n13[n13.SetSelectedIndex = 0] = "SetSelectedIndex", n13[n13.RegisterTab = 1] = "RegisterTab", n13[n13.UnregisterTab = 2] = "UnregisterTab", n13[n13.RegisterPanel = 3] = "RegisterPanel", n13[n13.UnregisterPanel = 4] = "UnregisterPanel", n13))(De6 || {});
var Se4 = { [0](e8, r18) {
  var d12;
  let t11 = _2(e8.tabs, (u17) => u17.current), l14 = _2(e8.panels, (u17) => u17.current), a20 = t11.filter((u17) => {
    var T11;
    return !((T11 = u17.current) != null && T11.hasAttribute("disabled"));
  }), n13 = { ...e8, tabs: t11, panels: l14 };
  if (r18.index < 0 || r18.index > t11.length - 1) {
    let u17 = u2(Math.sign(r18.index - e8.selectedIndex), { [-1]: () => 1, [0]: () => u2(Math.sign(r18.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a20.length === 0) return n13;
    let T11 = u2(u17, { [0]: () => t11.indexOf(a20[0]), [1]: () => t11.indexOf(a20[a20.length - 1]) });
    return { ...n13, selectedIndex: T11 === -1 ? e8.selectedIndex : T11 };
  }
  let p6 = t11.slice(0, r18.index), x6 = [...t11.slice(r18.index), ...p6].find((u17) => a20.includes(u17));
  if (!x6) return n13;
  let f21 = (d12 = t11.indexOf(x6)) != null ? d12 : e8.selectedIndex;
  return f21 === -1 && (f21 = e8.selectedIndex), { ...n13, selectedIndex: f21 };
}, [1](e8, r18) {
  if (e8.tabs.includes(r18.tab)) return e8;
  let t11 = e8.tabs[e8.selectedIndex], l14 = _2([...e8.tabs, r18.tab], (n13) => n13.current), a20 = e8.selectedIndex;
  return e8.info.current.isControlled || (a20 = l14.indexOf(t11), a20 === -1 && (a20 = e8.selectedIndex)), { ...e8, tabs: l14, selectedIndex: a20 };
}, [2](e8, r18) {
  return { ...e8, tabs: e8.tabs.filter((t11) => t11 !== r18.tab) };
}, [3](e8, r18) {
  return e8.panels.includes(r18.panel) ? e8 : { ...e8, panels: _2([...e8.panels, r18.panel], (t11) => t11.current) };
}, [4](e8, r18) {
  return { ...e8, panels: e8.panels.filter((t11) => t11 !== r18.panel) };
} };
var z4 = (0, import_react107.createContext)(null);
z4.displayName = "TabsDataContext";
function C9(e8) {
  let r18 = (0, import_react107.useContext)(z4);
  if (r18 === null) {
    let t11 = new Error(`<${e8} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t11, C9), t11;
  }
  return r18;
}
var V4 = (0, import_react107.createContext)(null);
V4.displayName = "TabsActionsContext";
function Q2(e8) {
  let r18 = (0, import_react107.useContext)(V4);
  if (r18 === null) {
    let t11 = new Error(`<${e8} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t11, Q2), t11;
  }
  return r18;
}
function Fe4(e8, r18) {
  return u2(r18.type, Se4, e8, r18);
}
var Ie7 = "div";
function he4(e8, r18) {
  let { defaultIndex: t11 = 0, vertical: l14 = false, manual: a20 = false, onChange: n13, selectedIndex: p6 = null, ..._6 } = e8;
  const x6 = l14 ? "vertical" : "horizontal", f21 = a20 ? "manual" : "auto";
  let d12 = p6 !== null, u17 = s3({ isControlled: d12 }), T11 = y(r18), [s13, c14] = (0, import_react107.useReducer)(Fe4, { info: u17, selectedIndex: p6 != null ? p6 : t11, tabs: [], panels: [] }), I7 = (0, import_react107.useMemo)(() => ({ selectedIndex: s13.selectedIndex }), [s13.selectedIndex]), m9 = s3(n13 || (() => {
  })), M8 = s3(s13.tabs), D9 = (0, import_react107.useMemo)(() => ({ orientation: x6, activation: f21, ...s13 }), [x6, f21, s13]), b6 = o4((i15) => (c14({ type: 1, tab: i15 }), () => c14({ type: 2, tab: i15 }))), g6 = o4((i15) => (c14({ type: 3, panel: i15 }), () => c14({ type: 4, panel: i15 }))), A8 = o4((i15) => {
    L9.current !== i15 && m9.current(i15), d12 || c14({ type: 0, index: i15 });
  }), L9 = s3(d12 ? e8.selectedIndex : s13.selectedIndex), G7 = (0, import_react107.useMemo)(() => ({ registerTab: b6, registerPanel: g6, change: A8 }), []);
  n(() => {
    c14({ type: 0, index: p6 != null ? p6 : t11 });
  }, [p6]), n(() => {
    if (L9.current === void 0 || s13.tabs.length <= 0) return;
    let i15 = _2(s13.tabs, (R10) => R10.current);
    i15.some((R10, B3) => s13.tabs[B3] !== R10) && A8(i15.indexOf(s13.tabs[L9.current]));
  });
  let J5 = { ref: T11 };
  return import_react107.default.createElement(f20, null, import_react107.default.createElement(V4.Provider, { value: G7 }, import_react107.default.createElement(z4.Provider, { value: D9 }, D9.tabs.length <= 0 && import_react107.default.createElement(b5, { onFocus: () => {
    var i15, h7;
    for (let R10 of M8.current) if (((i15 = R10.current) == null ? void 0 : i15.tabIndex) === 0) return (h7 = R10.current) == null || h7.focus(), true;
    return false;
  } }), H({ ourProps: J5, theirProps: _6, slot: I7, defaultTag: Ie7, name: "Tabs" }))));
}
var ve4 = "div";
function Ce3(e8, r18) {
  let { orientation: t11, selectedIndex: l14 } = C9("Tab.List"), a20 = y(r18), n13 = (0, import_react107.useMemo)(() => ({ selectedIndex: l14 }), [l14]);
  return H({ ourProps: { ref: a20, role: "tablist", "aria-orientation": t11 }, theirProps: e8, slot: n13, defaultTag: ve4, name: "Tabs.List" });
}
var Me4 = "button";
function Ge3(e8, r18) {
  var Z7, ee9;
  let t11 = (0, import_react47.useId)(), { id: l14 = `headlessui-tabs-tab-${t11}`, disabled: a20 = false, autoFocus: n13 = false, ...p6 } = e8, { orientation: _6, activation: x6, selectedIndex: f21, tabs: d12, panels: u17 } = C9("Tab"), T11 = Q2("Tab"), s13 = C9("Tab"), [c14, I7] = (0, import_react107.useState)(null), m9 = (0, import_react107.useRef)(null), M8 = y(m9, r18, I7);
  n(() => T11.registerTab(m9), [T11, m9]);
  let D9 = C8("tabs"), b6 = d12.indexOf(m9);
  b6 === -1 && (b6 = D9);
  let g6 = b6 === f21, A8 = o4((o17) => {
    var X4;
    let E14 = o17();
    if (E14 === T6.Success && x6 === "auto") {
      let $3 = (X4 = u(m9)) == null ? void 0 : X4.activeElement, te4 = s13.tabs.findIndex((ce4) => ce4.current === $3);
      te4 !== -1 && T11.change(te4);
    }
    return E14;
  }), L9 = o4((o17) => {
    let E14 = d12.map(($3) => $3.current).filter(Boolean);
    if (o17.key === o8.Space || o17.key === o8.Enter) {
      o17.preventDefault(), o17.stopPropagation(), T11.change(b6);
      return;
    }
    switch (o17.key) {
      case o8.Home:
      case o8.PageUp:
        return o17.preventDefault(), o17.stopPropagation(), A8(() => P5(E14, F.First));
      case o8.End:
      case o8.PageDown:
        return o17.preventDefault(), o17.stopPropagation(), A8(() => P5(E14, F.Last));
    }
    if (A8(() => u2(_6, { vertical() {
      return o17.key === o8.ArrowUp ? P5(E14, F.Previous | F.WrapAround) : o17.key === o8.ArrowDown ? P5(E14, F.Next | F.WrapAround) : T6.Error;
    }, horizontal() {
      return o17.key === o8.ArrowLeft ? P5(E14, F.Previous | F.WrapAround) : o17.key === o8.ArrowRight ? P5(E14, F.Next | F.WrapAround) : T6.Error;
    } })) === T6.Success) return o17.preventDefault();
  }), G7 = (0, import_react107.useRef)(false), J5 = o4(() => {
    var o17;
    G7.current || (G7.current = true, (o17 = m9.current) == null || o17.focus({ preventScroll: true }), T11.change(b6), t(() => {
      G7.current = false;
    }));
  }), i15 = o4((o17) => {
    o17.preventDefault();
  }), { isFocusVisible: h7, focusProps: R10 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: n13 }), { isHovered: B3, hoverProps: pe4 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: a20 }), { pressed: Y3, pressProps: ue4 } = w({ disabled: a20 }), Te4 = (0, import_react107.useMemo)(() => ({ selected: g6, hover: B3, active: Y3, focus: h7, autofocus: n13, disabled: a20 }), [g6, B3, h7, Y3, n13, a20]), de3 = D({ ref: M8, onKeyDown: L9, onMouseDown: i15, onClick: J5, id: l14, role: "tab", type: e6(e8, c14), "aria-controls": (ee9 = (Z7 = u17[b6]) == null ? void 0 : Z7.current) == null ? void 0 : ee9.id, "aria-selected": g6, tabIndex: g6 ? 0 : -1, disabled: a20 || void 0, autoFocus: n13 }, R10, pe4, ue4);
  return H({ ourProps: de3, theirProps: p6, slot: Te4, defaultTag: Me4, name: "Tabs.Tab" });
}
var Ue4 = "div";
function He5(e8, r18) {
  let { selectedIndex: t11 } = C9("Tab.Panels"), l14 = y(r18), a20 = (0, import_react107.useMemo)(() => ({ selectedIndex: t11 }), [t11]);
  return H({ ourProps: { ref: l14 }, theirProps: e8, slot: a20, defaultTag: Ue4, name: "Tabs.Panels" });
}
var we4 = "div";
var Oe3 = M.RenderStrategy | M.Static;
function Ne4(e8, r18) {
  var b6, g6, A8, L9;
  let t11 = (0, import_react47.useId)(), { id: l14 = `headlessui-tabs-panel-${t11}`, tabIndex: a20 = 0, ...n13 } = e8, { selectedIndex: p6, tabs: _6, panels: x6 } = C9("Tab.Panel"), f21 = Q2("Tab.Panel"), d12 = (0, import_react107.useRef)(null), u17 = y(d12, r18);
  n(() => f21.registerPanel(d12), [f21, d12]);
  let T11 = C8("panels"), s13 = x6.indexOf(d12);
  s13 === -1 && (s13 = T11);
  let c14 = s13 === p6, { isFocusVisible: I7, focusProps: m9 } = $f7dceffc5ad7768b$export$4e328f61c538687f(), M8 = (0, import_react107.useMemo)(() => ({ selected: c14, focus: I7 }), [c14, I7]), D9 = D({ ref: u17, id: l14, role: "tabpanel", "aria-labelledby": (g6 = (b6 = _6[s13]) == null ? void 0 : b6.current) == null ? void 0 : g6.id, tabIndex: c14 ? a20 : -1 }, m9);
  return !c14 && ((A8 = n13.unmount) == null || A8) && !((L9 = n13.static) != null && L9) ? import_react107.default.createElement(T2, { "aria-hidden": "true", ...D9 }) : H({ ourProps: D9, theirProps: n13, slot: M8, defaultTag: we4, features: Oe3, visible: c14, name: "Tabs.Panel" });
}
var ke3 = W(Ge3);
var Be3 = W(he4);
var We3 = W(Ce3);
var je2 = W(He5);
var Ke2 = W(Ne4);
var ut3 = Object.assign(ke3, { Group: Be3, List: We3, Panels: je2, Panel: Ke2 });

// node_modules/@headlessui/react/dist/components/textarea/textarea.js
var import_react108 = __toESM(require_react(), 1);
var L8 = "textarea";
function H12(s13, l14) {
  let i15 = (0, import_react47.useId)(), p6 = u5(), d12 = a3(), { id: n13 = p6 || `headlessui-textarea-${i15}`, disabled: e8 = d12 || false, autoFocus: r18 = false, invalid: a20 = false, ...T11 } = s13, f21 = I2(), m9 = G(), { isFocused: o17, focusProps: u17 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: r18 }), { isHovered: t11, hoverProps: b6 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: e8 }), y9 = D({ ref: l14, id: n13, "aria-labelledby": f21, "aria-describedby": m9, "aria-invalid": a20 ? "" : void 0, disabled: e8 || void 0, autoFocus: r18 }, u17, b6), x6 = (0, import_react108.useMemo)(() => ({ disabled: e8, invalid: a20, hover: t11, focus: o17, autofocus: r18 }), [e8, a20, t11, o17, r18]);
  return H({ ourProps: y9, theirProps: T11, slot: x6, defaultTag: L8, name: "Textarea" });
}
var w12 = W(H12);
export {
  L as Button,
  Re as Checkbox,
  y2 as CloseButton,
  Ho as Combobox,
  Ut as ComboboxButton,
  Gt as ComboboxInput,
  zt as ComboboxLabel,
  Wt as ComboboxOption,
  Kt as ComboboxOptions,
  C5 as DataInteractive,
  w3 as Description,
  Pt2 as Dialog,
  ct as DialogBackdrop,
  Dt2 as DialogDescription,
  $e as DialogPanel,
  je as DialogTitle,
  $e2 as Disclosure,
  Ie4 as DisclosureButton,
  xe2 as DisclosurePanel,
  H9 as Field,
  C7 as Fieldset,
  Fe2 as FocusTrap,
  x2 as FocusTrapFeatures,
  J3 as Input,
  K as Label,
  d11 as Legend,
  Mo as Listbox,
  Nt2 as ListboxButton,
  Ht2 as ListboxLabel,
  Vt2 as ListboxOption,
  Gt2 as ListboxOptions,
  Kt2 as ListboxSelectedOption,
  rn as Menu,
  It3 as MenuButton,
  St3 as MenuHeading,
  Et3 as MenuItem,
  gt2 as MenuItems,
  Mt3 as MenuSection,
  At3 as MenuSeparator,
  ao as Popover,
  Bt3 as PopoverBackdrop,
  At4 as PopoverButton,
  _t3 as PopoverGroup,
  Ct3 as PopoverOverlay,
  Rt3 as PopoverPanel,
  te as Portal,
  Be2 as Radio,
  Tt3 as RadioGroup,
  Ke as RadioGroupDescription,
  Ve as RadioGroupLabel,
  We2 as RadioGroupOption,
  $2 as Select,
  Qe as Switch,
  Ge2 as SwitchDescription,
  Ce2 as SwitchGroup,
  Le4 as SwitchLabel,
  ut3 as Tab,
  Be3 as TabGroup,
  We3 as TabList,
  Ke2 as TabPanel,
  je2 as TabPanels,
  w12 as Textarea,
  Xe as Transition,
  Le as TransitionChild,
  u8 as useClose
};
/*! Bundled license information:

tabbable/dist/index.esm.js:
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=@headlessui_react.js.map
