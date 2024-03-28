(function (React, designSystem, styledComponents, adminjs, reactRouterDom) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React);

  const pageHeaderHeight = 300;
  const pageHeaderPaddingY = 74;
  const pageHeaderPaddingX = 250;
  const DashboardHeader = () => {
    const [data, setData] = React.useState(null);
    const api = new adminjs.ApiClient();
    React.useEffect(() => {
      api.getDashboard().then(response => {
        const responseData = response.data;
        setData(responseData);
      }).catch(error => {});
    }, []);
    if (data) {
      console.log(data.message);
    }
    const {
      translateMessage
    } = adminjs.useTranslation();
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      "data-css": "default-dashboard"
    }, /*#__PURE__*/React__default.default.createElement("div", null, data && /*#__PURE__*/React__default.default.createElement("p", null, data.message)), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      position: "relative",
      overflow: "hidden",
      bg: "white",
      height: pageHeaderHeight,
      py: pageHeaderPaddingY,
      px: ['default', 'lg', pageHeaderPaddingX]
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      position: "absolute",
      top: 30,
      left: 0,
      opacity: 0.9,
      animate: true,
      display: ['none', 'none', 'none', 'block']
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      textAlign: "center",
      color: "grey100"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
      fontWeight: "bold"
    }, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      opacity: 0.8
    }, translateMessage('welcomeOnBoard_subtitle')))));
  };
  const boxes = ({
    translateMessage
  }) => [{
    variant: 'Details',
    title: translateMessage('addingResources_title'),
    subtitle: translateMessage('addingResources_subtitle'),
    href: 'https://docs.adminjs.co/basics/resource#providing-resources-explicitly'
  }, {
    variant: 'Docs',
    title: translateMessage('customizeResources_title'),
    subtitle: translateMessage('customizeResources_subtitle'),
    href: 'https://docs.adminjs.co/basics/resource#customizing-resources'
  }, {
    variant: 'Plug',
    title: translateMessage('customizeActions_title'),
    subtitle: translateMessage('customizeActions_subtitle'),
    href: 'https://docs.adminjs.co/basics/action'
  }, {
    variant: 'Cup',
    title: translateMessage('writeOwnComponents_title'),
    subtitle: translateMessage('writeOwnComponents_subtitle'),
    href: 'https://docs.adminjs.co/ui-customization/writing-your-own-components'
  }, {
    variant: 'Photos',
    title: translateMessage('customDashboard_title'),
    subtitle: translateMessage('customDashboard_subtitle'),
    href: 'https://docs.adminjs.co/ui-customization/dashboard-customization'
  }, {
    variant: 'IdentityCard',
    title: translateMessage('roleBasedAccess_title'),
    subtitle: translateMessage('roleBasedAccess_subtitle'),
    href: 'https://docs.adminjs.co/tutorials/adding-role-based-access-control'
  }];
  const Card = styledComponents.styled(designSystem.Box)`
  display: ${({
  flex
}) => flex ? 'flex' : 'block'};
  color: ${({
  theme
}) => theme.colors.grey100};
  height: 100%;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: ${({
  theme
}) => theme.space.md};
  transition: all 0.1s ease-in;

  &:hover {
    border: 1px solid ${({
  theme
}) => theme.colors.primary60};
    box-shadow: ${({
  theme
}) => theme.shadows.cardHover};
  }

  & .dsc-icon svg,
  .gh-icon svg {
    width: 64px;
    height: 64px;
  }
`;
  Card.defaultProps = {
    variant: 'container',
    boxShadow: 'card'
  };
  const Dashboard = () => {
    const {
      translateMessage,
      translateButton
    } = adminjs.useTranslation();
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(DashboardHeader, null), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: ['xl', 'xl', '-100px'],
      mb: "xl",
      mx: [0, 0, 0, 'auto'],
      px: ['default', 'lg', 'xxl', '0'],
      position: "relative",
      flex: true,
      flexDirection: "row",
      flexWrap: "wrap",
      width: [1, 1, 1, 1024]
    }, boxes({
      translateMessage
    }).map((box, index) =>
    /*#__PURE__*/
    // eslint-disable-next-line react/no-array-index-key
    React__default.default.createElement(designSystem.Box, {
      key: index,
      width: [1, 1 / 2, 1 / 2, 1 / 3],
      p: "lg"
    }, /*#__PURE__*/React__default.default.createElement(Card, {
      as: "a",
      href: box.href,
      target: "_blank"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      textAlign: "center"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Illustration, {
      variant: box.variant,
      width: 100,
      height: 70
    }), /*#__PURE__*/React__default.default.createElement(designSystem.H5, {
      mt: "md"
    }, box.title), /*#__PURE__*/React__default.default.createElement(designSystem.Text, null, box.subtitle)))))));
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var f = n.default;
  	if (typeof f == "function") {
  		var a = function a () {
  			if (this instanceof a) {
          return Reflect.construct(f, arguments, this.constructor);
  			}
  			return f.apply(this, arguments);
  		};
  		a.prototype = f.prototype;
    } else a = {};
    Object.defineProperty(a, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var styledComponents_browser_cjs = {};

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  function __rest(s, e) {
      var t = {};
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __param(paramIndex, decorator) {
      return function (target, key) { decorator(target, key, paramIndex); }
  }

  function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
      function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i = decorators.length - 1; i >= 0; i--) {
          var context = {};
          for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
          for (var p in contextIn.access) context.access[p] = contextIn.access[p];
          context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
          var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
          if (kind === "accessor") {
              if (result === void 0) continue;
              if (result === null || typeof result !== "object") throw new TypeError("Object expected");
              if (_ = accept(result.get)) descriptor.get = _;
              if (_ = accept(result.set)) descriptor.set = _;
              if (_ = accept(result.init)) initializers.push(_);
          }
          else if (_ = accept(result)) {
              if (kind === "field") initializers.push(_);
              else descriptor[key] = _;
          }
      }
      if (target) Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
  }
  function __runInitializers(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i = 0; i < initializers.length; i++) {
          value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
      }
      return useValue ? value : void 0;
  }
  function __propKey(x) {
      return typeof x === "symbol" ? x : "".concat(x);
  }
  function __setFunctionName(f, name, prefix) {
      if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
      return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  }
  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) _.ops.pop();
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
          if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
      }
  }

  var __createBinding = Object.create ? (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() { return m[k]; } };
      }
      Object.defineProperty(o, k2, desc);
  }) : (function(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
  });

  function __exportStar(m, o) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
  }

  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
          next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
          }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) m.call(i);
          }
          finally { if (e) throw e.error; }
      }
      return ar;
  }

  /** @deprecated */
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }

  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }

  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
          }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
  }

  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }

  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
  }

  function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
      function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
  }

  function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
  }

  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
      return cooked;
  }
  var __setModuleDefault = Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function(o, v) {
      o["default"] = v;
  };

  function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  }

  function __importDefault(mod) {
      return (mod && mod.__esModule) ? mod : { default: mod };
  }

  function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }

  function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  }

  function __classPrivateFieldIn(state, receiver) {
      if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
      return typeof state === "function" ? receiver === state : state.has(receiver);
  }

  var tslib_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get __assign () { return __assign; },
    __asyncDelegator: __asyncDelegator,
    __asyncGenerator: __asyncGenerator,
    __asyncValues: __asyncValues,
    __await: __await,
    __awaiter: __awaiter,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __createBinding: __createBinding,
    __decorate: __decorate,
    __esDecorate: __esDecorate,
    __exportStar: __exportStar,
    __extends: __extends,
    __generator: __generator,
    __importDefault: __importDefault,
    __importStar: __importStar,
    __makeTemplateObject: __makeTemplateObject,
    __metadata: __metadata,
    __param: __param,
    __propKey: __propKey,
    __read: __read,
    __rest: __rest,
    __runInitializers: __runInitializers,
    __setFunctionName: __setFunctionName,
    __spread: __spread,
    __spreadArray: __spreadArray,
    __spreadArrays: __spreadArrays,
    __values: __values
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

  function memoize(fn) {
    var cache = Object.create(null);
    return function (arg) {
      if (cache[arg] === undefined) cache[arg] = fn(arg);
      return cache[arg];
    };
  }

  var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

  var isPropValid = /* #__PURE__ */memoize(function (prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
    /* o */
    && prop.charCodeAt(1) === 110
    /* n */
    && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
  );

  var emotionIsPropValid_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: isPropValid
  });

  var require$$1 = /*@__PURE__*/getAugmentedNamespace(emotionIsPropValid_esm);

  //

  var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if (ret !== void 0) {
      return !!ret;
    }

    if (objA === objB) {
      return true;
    }

    if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
      return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
      return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for (var idx = 0; idx < keysA.length; idx++) {
      var key = keysA[idx];

      if (!bHasOwnProperty(key)) {
        return false;
      }

      var valueA = objA[key];
      var valueB = objB[key];

      ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

      if (ret === false || (ret === void 0 && valueA !== valueB)) {
        return false;
      }
    }

    return true;
  };

  var stylis = {exports: {}};

  (function (module, exports) {
  	(function(e,r){r(exports);})(commonjsGlobal,(function(e){var r="-ms-";var a="-moz-";var c="-webkit-";var n="comm";var t="rule";var s="decl";var i="@page";var u="@media";var o="@import";var l="@charset";var f="@viewport";var p="@supports";var h="@document";var v="@namespace";var b="@keyframes";var d="@font-face";var w="@counter-style";var m="@font-feature-values";var g="@layer";var k=Math.abs;var $=String.fromCharCode;var x=Object.assign;function E(e,r){return M(e,0)^45?(((r<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function y(e){return e.trim()}function T(e,r){return (e=r.exec(e))?e[0]:e}function A(e,r,a){return e.replace(r,a)}function O(e,r,a){return e.indexOf(r,a)}function M(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function R(e){return e.length}function S(e){return e.length}function z(e,r){return r.push(e),e}function N(e,r){return e.map(r).join("")}function P(e,r){return e.filter((function(e){return !T(e,r)}))}e.line=1;e.column=1;e.length=0;e.position=0;e.character=0;e.characters="";function j(r,a,c,n,t,s,i,u){return {value:r,root:a,parent:c,type:n,props:t,children:s,line:e.line,column:e.column,length:i,return:"",siblings:u}}function U(e,r){return x(j("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function _(e){while(e.root)e=U(e.root,{children:[e]});z(e,e.siblings);}function F(){return e.character}function I(){e.character=e.position>0?M(e.characters,--e.position):0;if(e.column--,e.character===10)e.column=1,e.line--;return e.character}function L(){e.character=e.position<e.length?M(e.characters,e.position++):0;if(e.column++,e.character===10)e.column=1,e.line++;return e.character}function D(){return M(e.characters,e.position)}function Y(){return e.position}function K(r,a){return C(e.characters,r,a)}function V(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function W(r){return e.line=e.column=1,e.length=R(e.characters=r),e.position=0,[]}function B(r){return e.characters="",r}function G(r){return y(K(e.position-1,Q(r===91?r+2:r===40?r+1:r)))}function H(e){return B(q(W(e)))}function Z(r){while(e.character=D())if(e.character<33)L();else break;return V(r)>2||V(e.character)>3?"":" "}function q(r){while(L())switch(V(e.character)){case 0:z(ee(e.position-1),r);break;case 2:z(G(e.character),r);break;default:z($(e.character),r);}return r}function J(r,a){while(--a&&L())if(e.character<48||e.character>102||e.character>57&&e.character<65||e.character>70&&e.character<97)break;return K(r,Y()+(a<6&&D()==32&&L()==32))}function Q(r){while(L())switch(e.character){case r:return e.position;case 34:case 39:if(r!==34&&r!==39)Q(e.character);break;case 40:if(r===41)Q(r);break;case 92:L();break}return e.position}function X(r,a){while(L())if(r+e.character===47+10)break;else if(r+e.character===42+42&&D()===47)break;return "/*"+K(a,e.position-1)+"*"+$(r===47?r:L())}function ee(r){while(!V(D()))L();return K(r,e.position)}function re(e){return B(ae("",null,null,null,[""],e=W(e),0,[0],e))}function ae(e,r,a,c,n,t,s,i,u){var o=0;var l=0;var f=s;var p=0;var h=0;var v=0;var b=1;var d=1;var w=1;var m=0;var g="";var x=n;var E=t;var y=c;var T=g;while(d)switch(v=m,m=L()){case 40:if(v!=108&&M(T,f-1)==58){if(O(T+=A(G(m),"&","&\f"),"&\f",k(o?i[o-1]:0))!=-1)w=-1;break}case 34:case 39:case 91:T+=G(m);break;case 9:case 10:case 13:case 32:T+=Z(v);break;case 92:T+=J(Y()-1,7);continue;case 47:switch(D()){case 42:case 47:z(ne(X(L(),Y()),r,a,u),u);break;default:T+="/";}break;case 123*b:i[o++]=R(T)*w;case 125*b:case 59:case 0:switch(m){case 0:case 125:d=0;case 59+l:if(w==-1)T=A(T,/\f/g,"");if(h>0&&R(T)-f)z(h>32?te(T+";",c,a,f-1,u):te(A(T," ","")+";",c,a,f-2,u),u);break;case 59:T+=";";default:z(y=ce(T,r,a,o,l,n,i,g,x=[],E=[],f,t),t);if(m===123)if(l===0)ae(T,r,y,y,x,t,f,i,E);else switch(p===99&&M(T,3)===110?100:p){case 100:case 108:case 109:case 115:ae(e,y,y,c&&z(ce(e,y,y,0,0,n,i,g,n,x=[],f,E),E),n,E,f,i,c?x:E);break;default:ae(T,y,y,y,[""],E,0,i,E);}}o=l=h=0,b=w=1,g=T="",f=s;break;case 58:f=1+R(T),h=v;default:if(b<1)if(m==123)--b;else if(m==125&&b++==0&&I()==125)continue;switch(T+=$(m),m*b){case 38:w=l>0?1:(T+="\f",-1);break;case 44:i[o++]=(R(T)-1)*w,w=1;break;case 64:if(D()===45)T+=G(L());p=D(),l=f=R(g=T+=ee(Y())),m++;break;case 45:if(v===45&&R(T)==2)b=0;}}return t}function ce(e,r,a,c,n,s,i,u,o,l,f,p){var h=n-1;var v=n===0?s:[""];var b=S(v);for(var d=0,w=0,m=0;d<c;++d)for(var g=0,$=C(e,h+1,h=k(w=i[d])),x=e;g<b;++g)if(x=y(w>0?v[g]+" "+$:A($,/&\f/g,v[g])))o[m++]=x;return j(e,r,a,n===0?t:u,o,l,f,p)}function ne(e,r,a,c){return j(e,r,a,n,$(F()),C(e,2,-2),0,c)}function te(e,r,a,c,n){return j(e,r,a,s,C(e,0,c),C(e,c+1,-1),c,n)}function se(e,n,t){switch(E(e,n)){case 5103:return c+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return c+e+e;case 4789:return a+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return c+e+a+e+r+e+e;case 5936:switch(M(e,n+11)){case 114:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return c+e+r+A(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return c+e+r+e+e;case 6165:return c+e+r+"flex-"+e+e;case 5187:return c+e+A(e,/(\w+).+(:[^]+)/,c+"box-$1$2"+r+"flex-$1$2")+e;case 5443:return c+e+r+"flex-item-"+A(e,/flex-|-self/g,"")+(!T(e,/flex-|baseline/)?r+"grid-row-"+A(e,/flex-|-self/g,""):"")+e;case 4675:return c+e+r+"flex-line-pack"+A(e,/align-content|flex-|-self/g,"")+e;case 5548:return c+e+r+A(e,"shrink","negative")+e;case 5292:return c+e+r+A(e,"basis","preferred-size")+e;case 6060:return c+"box-"+A(e,"-grow","")+c+e+r+A(e,"grow","positive")+e;case 4554:return c+A(e,/([^-])(transform)/g,"$1"+c+"$2")+e;case 6187:return A(A(A(e,/(zoom-|grab)/,c+"$1"),/(image-set)/,c+"$1"),e,"")+e;case 5495:case 3959:return A(e,/(image-set\([^]*)/,c+"$1"+"$`$1");case 4968:return A(A(e,/(.+:)(flex-)?(.*)/,c+"box-pack:$3"+r+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+c+e+e;case 4200:if(!T(e,/flex-|baseline/))return r+"grid-column-align"+C(e,n)+e;break;case 2592:case 3360:return r+A(e,"template-","")+e;case 4384:case 3616:if(t&&t.some((function(e,r){return n=r,T(e.props,/grid-\w+-end/)}))){return ~O(e+(t=t[n].value),"span",0)?e:r+A(e,"-start","")+e+r+"grid-row-span:"+(~O(t,"span",0)?T(t,/\d+/):+T(t,/\d+/)-+T(e,/\d+/))+";"}return r+A(e,"-start","")+e;case 4896:case 4128:return t&&t.some((function(e){return T(e.props,/grid-\w+-start/)}))?e:r+A(A(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return A(e,/(.+)-inline(.+)/,c+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(R(e)-1-n>6)switch(M(e,n+1)){case 109:if(M(e,n+4)!==45)break;case 102:return A(e,/(.+:)(.+)-([^]+)/,"$1"+c+"$2-$3"+"$1"+a+(M(e,n+3)==108?"$3":"$2-$3"))+e;case 115:return ~O(e,"stretch",0)?se(A(e,"stretch","fill-available"),n,t)+e:e}break;case 5152:case 5920:return A(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(a,c,n,t,s,i,u){return r+c+":"+n+u+(t?r+c+"-span:"+(s?i:+i-+n)+u:"")+e}));case 4949:if(M(e,n+6)===121)return A(e,":",":"+c)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return A(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+c+(M(e,14)===45?"inline-":"")+"box$3"+"$1"+c+"$2$3"+"$1"+r+"$2box$3")+e;case 100:return A(e,":",":"+r)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return A(e,"scroll-","scroll-snap-")+e}return e}function ie(e,r){var a="";for(var c=0;c<e.length;c++)a+=r(e[c],c,e,r)||"";return a}function ue(e,r,a,c){switch(e.type){case g:if(e.children.length)break;case o:case s:return e.return=e.return||e.value;case n:return "";case b:return e.return=e.value+"{"+ie(e.children,c)+"}";case t:if(!R(e.value=e.props.join(",")))return ""}return R(a=ie(e.children,c))?e.return=e.value+"{"+a+"}":""}function oe(e){var r=S(e);return function(a,c,n,t){var s="";for(var i=0;i<r;i++)s+=e[i](a,c,n,t)||"";return s}}function le(e){return function(r){if(!r.root)if(r=r.return)e(r);}}function fe(e,n,i,u){if(e.length>-1)if(!e.return)switch(e.type){case s:e.return=se(e.value,e.length,i);return;case b:return ie([U(e,{value:A(e.value,"@","@"+c)})],u);case t:if(e.length)return N(i=e.props,(function(n){switch(T(n,u=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_(U(e,{props:[A(n,/:(read-\w+)/,":"+a+"$1")]}));_(U(e,{props:[n]}));x(e,{props:P(i,u)});break;case"::placeholder":_(U(e,{props:[A(n,/:(plac\w+)/,":"+c+"input-$1")]}));_(U(e,{props:[A(n,/:(plac\w+)/,":"+a+"$1")]}));_(U(e,{props:[A(n,/:(plac\w+)/,r+"input-$1")]}));_(U(e,{props:[n]}));x(e,{props:P(i,u)});break}return ""}))}}function pe(e){switch(e.type){case t:e.props=e.props.map((function(r){return N(H(r),(function(r,a,c){switch(M(r,0)){case 12:return C(r,1,R(r));case 0:case 40:case 43:case 62:case 126:return r;case 58:if(c[++a]==="global")c[a]="",c[++a]="\f"+C(c[a],a=1,-1);case 32:return a===1?"":r;default:switch(a){case 0:e=r;return S(c)>1?"":r;case a=S(c)-1:case 2:return a===2?r+e+e:r+e;default:return r}}}))}));}}e.CHARSET=l;e.COMMENT=n;e.COUNTER_STYLE=w;e.DECLARATION=s;e.DOCUMENT=h;e.FONT_FACE=d;e.FONT_FEATURE_VALUES=m;e.IMPORT=o;e.KEYFRAMES=b;e.LAYER=g;e.MEDIA=u;e.MOZ=a;e.MS=r;e.NAMESPACE=v;e.PAGE=i;e.RULESET=t;e.SUPPORTS=p;e.VIEWPORT=f;e.WEBKIT=c;e.abs=k;e.alloc=W;e.append=z;e.assign=x;e.caret=Y;e.char=F;e.charat=M;e.combine=N;e.comment=ne;e.commenter=X;e.compile=re;e.copy=U;e.dealloc=B;e.declaration=te;e.delimit=G;e.delimiter=Q;e.escaping=J;e.filter=P;e.from=$;e.hash=E;e.identifier=ee;e.indexof=O;e.lift=_;e.match=T;e.middleware=oe;e.namespace=pe;e.next=L;e.node=j;e.parse=ae;e.peek=D;e.prefix=se;e.prefixer=fe;e.prev=I;e.replace=A;e.ruleset=ce;e.rulesheet=le;e.serialize=ie;e.sizeof=S;e.slice=K;e.stringify=ue;e.strlen=R;e.substr=C;e.token=V;e.tokenize=H;e.tokenizer=q;e.trim=y;e.whitespace=Z;Object.defineProperty(e,"__esModule",{value:true});}));
  	
  } (stylis, stylis.exports));

  var stylisExports = stylis.exports;

  var unitlessKeys = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    // SVG-related properties
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1
  };

  var emotionUnitless_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    default: unitlessKeys
  });

  var require$$5 = /*@__PURE__*/getAugmentedNamespace(emotionUnitless_esm);

  var keyframes;
  var _default;
  Object.defineProperty(styledComponents_browser_cjs,"__esModule",{value:!0});var e=require$$0,t=require$$1,n=React__default.default,r=shallowequal,o=stylisExports,s=require$$5;function i(e){return e&&e.__esModule?e:{default:e}}function a(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}});}}),t.default=e,Object.freeze(t)}var c=/*#__PURE__*/i(t),l=/*#__PURE__*/i(n),u=/*#__PURE__*/i(r),p=/*#__PURE__*/a(o),d=/*#__PURE__*/i(s),h="undefined"!=typeof process&&void 0!==process.env&&(AdminJS.env.REACT_APP_SC_ATTR||AdminJS.env.SC_ATTR)||"data-styled",f="active",y="data-styled-version",m="6.1.8",v="/*!sc*/\n",g="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==AdminJS.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==AdminJS.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==AdminJS.env.REACT_APP_SC_DISABLE_SPEEDY&&AdminJS.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==AdminJS.env.SC_DISABLE_SPEEDY&&""!==AdminJS.env.SC_DISABLE_SPEEDY?"false"!==AdminJS.env.SC_DISABLE_SPEEDY&&AdminJS.env.SC_DISABLE_SPEEDY:"production"!=="development"),w={},_=/invalid hook call/i,b=new Set,E=function(t,r){{var o=r?' with the id of "'.concat(r,'"'):"",s="The component ".concat(t).concat(o," has been created dynamically.\n")+"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",i=console.error;try{var a=!0;console.error=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];_.test(t)?(a=!1,b.delete(s)):i.apply(void 0,e.__spreadArray([t],n,!1));},n.useRef(),a&&!b.has(s)&&(console.warn(s),b.add(s));}catch(e){_.test(e.message)&&b.delete(s);}finally{console.error=i;}}},N=Object.freeze([]),P=Object.freeze({});function C(e,t,n){return void 0===n&&(n=P),e.theme!==n.theme&&e.theme||t||n.theme}var A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),I=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O=/(^-|-$)/g;function x(e){return e.replace(I,"-").replace(O,"")}var T=/(a)(d)/gi,D=52,R=function(e){return String.fromCharCode(e+(e>25?39:97))};function j(e){var t,n="";for(t=Math.abs(e);t>D;t=t/D|0)n=R(t%D)+n;return (R(t%D)+n).replace(T,"$1-$2")}var k,M=5381,V=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},F=function(e){return V(M,e)};function z(e){return j(F(e)>>>0)}function $(e){return "string"==typeof e&&e||e.displayName||e.name||"Component"}function B(e){return "string"==typeof e&&(e.charAt(0)===e.charAt(0).toLowerCase())}var L="function"==typeof Symbol&&Symbol.for,G=L?Symbol.for("react.memo"):60115,q=L?Symbol.for("react.forward_ref"):60112,Y={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},W={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},H={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U=((k={})[q]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},k[G]=H,k);function J(e){return ("type"in(t=e)&&t.type.$$typeof)===G?H:"$$typeof"in e?U[e.$$typeof]:Y;var t;}var X=Object.defineProperty,Z=Object.getOwnPropertyNames,K=Object.getOwnPropertySymbols,Q=Object.getOwnPropertyDescriptor,ee=Object.getPrototypeOf,te=Object.prototype;function ne(e,t,n){if("string"!=typeof t){if(te){var r=ee(t);r&&r!==te&&ne(e,r,n);}var o=Z(t);K&&(o=o.concat(K(t)));for(var s=J(e),i=J(t),a=0;a<o.length;++a){var c=o[a];if(!(c in W||n&&n[c]||i&&c in i||s&&c in s)){var l=Q(t,c);try{X(e,c,l);}catch(e){}}}}return e}function re(e){return "function"==typeof e}function oe(e){return "object"==typeof e&&"styledComponentId"in e}function se(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ie(e,t){if(0===e.length)return "";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ae(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ce(e,t,n){if(void 0===n&&(n=!1),!n&&!ae(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ce(e[r],t[r]);else if(ae(t))for(var r in t)e[r]=ce(e[r],t[r]);return e}function le(e,t){Object.defineProperty(e,"toString",{value:t});}var ue={1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"};function pe(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=e[0],r=[],o=1,s=e.length;o<s;o+=1)r.push(e[o]);return r.forEach(function(e){n=n.replace(/%[a-z]/,e);}),n}function de(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return new Error(pe.apply(void 0,e.__spreadArray([ue[t]],n,!1)).trim())}var he=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw de(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=(s=0,t.length);s<a;s++)this.tag.insertRule(i,t[s])&&(this.groupSizes[e]++,i++);},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(v);return t},e}(),fe=new Map,ye=new Map,me=1,ve=function(e){if(fe.has(e))return fe.get(e);for(;ye.has(me);)me++;var t=me++;if(((0|t)<0||t>1073741824))throw de(16,"".concat(t));return fe.set(e,t),ye.set(t,e),t},ge=function(e,t){me=t+1,fe.set(e,t),ye.set(t,e);},Se="style[".concat(h,"][").concat(y,'="').concat(m,'"]'),we=new RegExp("^".concat(h,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),_e=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},be=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(v),o=[],s=0,i=r.length;s<i;s++){var a=r[s].trim();if(a){var c=a.match(we);if(c){var l=0|parseInt(c[1],10),u=c[2];0!==l&&(ge(u,l),_e(e,u,c[3]),e.getTag().insertRules(l,o)),o.length=0;}else o.push(a);}}};function Ee(){return "undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var Ne=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(h,"]")));return t[t.length-1]}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(h,f),r.setAttribute(y,m);var i=Ee();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},Pe=function(){function e(e){this.element=Ne(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw de(17)}(this.element),this.length=0;}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ce=function(){function e(e){this.element=Ne(e),this.nodes=this.element.childNodes,this.length=0;}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return !1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Ae=function(){function e(e){this.rules=[],this.length=0;}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--;},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Ie=g,Oe={isServer:!g,useCSSOMInjection:!S},xe=function(){function t(t,n,r){void 0===t&&(t=P),void 0===n&&(n={});var o=this;this.options=e.__assign(e.__assign({},Oe),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&g&&Ie&&(Ie=!1,function(e){for(var t=document.querySelectorAll(Se),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(h)!==f&&(be(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this)),le(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return ye.get(e)}(n);if(void 0===o)return "continue";var s=e.names.get(o),i=t.getGroup(n);if(void 0===s||0===i.length)return "continue";var a="".concat(h,".g").concat(n,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach(function(e){e.length>0&&(c+="".concat(e,","));}),r+="".concat(i).concat(a,'{content:"').concat(c,'"}').concat(v);},s=0;s<n;s++)o(s);return r}(o)});}return t.registerId=function(e){return ve(e)},t.prototype.reconstructWithOptions=function(n,r){return void 0===r&&(r=!0),new t(e.__assign(e.__assign({},this.options),n),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Ae(n):t?new Pe(n):new Ce(n)}(this.options),new he(e)));var e;},t.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.prototype.registerName=function(e,t){if(ve(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ve(e),n);},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.prototype.clearRules=function(e){this.getTag().clearGroup(ve(e)),this.clearNames(e);},t.prototype.clearTag=function(){this.tag=void 0;},t}(),Te=/&/g,De=/^\s*\/\/.*$/gm;function Re(e,t){return e.map(function(e){return "rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return "".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Re(e.children,t)),e})}function je(e){var t,n,r,o=void 0===e?P:e,s=o.options,i=void 0===s?P:s,a=o.plugins,c=void 0===a?N:a,l=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=c.slice();u.push(function(e){e.type===p.RULESET&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Te,n).replace(r,l));}),i.prefix&&u.push(p.prefixer),u.push(p.stringify);var d=function(e,o,s,a){void 0===o&&(o=""),void 0===s&&(s=""),void 0===a&&(a="&"),t=a,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var c=e.replace(De,""),l=p.compile(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);i.namespace&&(l=Re(l,i.namespace));var d=[];return p.serialize(l,p.middleware(u.concat(p.rulesheet(function(e){return d.push(e)})))),d};return d.hash=c.length?c.reduce(function(e,t){return t.name||de(15),V(e,t.name)},M).toString():"",d}var ke=new xe,Me=je(),Ve=l.default.createContext({shouldForwardProp:void 0,styleSheet:ke,stylis:Me}),Fe=Ve.Consumer,ze=l.default.createContext(void 0);function $e(){return n.useContext(Ve)}function Be(e){var t=n.useState(e.stylisPlugins),r=t[0],o=t[1],s=$e().styleSheet,i=n.useMemo(function(){var t=s;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,s]),a=n.useMemo(function(){return je({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);n.useEffect(function(){u.default(r,e.stylisPlugins)||o(e.stylisPlugins);},[e.stylisPlugins]);var c=n.useMemo(function(){return {shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:a}},[e.shouldForwardProp,i,a]);return l.default.createElement(Ve.Provider,{value:c},l.default.createElement(ze.Provider,{value:a},e.children))}var Le=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Me);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,le(this,function(){throw de(12,String(n.name))});}return e.prototype.getName=function(e){return void 0===e&&(e=Me),this.name+e.hash},e}(),Ge=function(e){return e>="A"&&e<="Z"};function qe(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Ge(r)?t+="-"+r.toLowerCase():t+=r;}return t.startsWith("ms-")?"-"+t:t}var Ye=function(e){return null==e||!1===e||""===e},We=function(t){var n,r,o=[];for(var s in t){var i=t[s];t.hasOwnProperty(s)&&!Ye(i)&&(Array.isArray(i)&&i.isCss||re(i)?o.push("".concat(qe(s),":"),i,";"):ae(i)?o.push.apply(o,e.__spreadArray(e.__spreadArray(["".concat(s," {")],We(i),!1),["}"],!1)):o.push("".concat(qe(s),": ").concat((n=s,null==(r=i)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||n in d.default||n.startsWith("--")?String(r).trim():"".concat(r,"px")),";")));}return o};function He(e,t,n,r){if(Ye(e))return [];if(oe(e))return [".".concat(e.styledComponentId)];if(re(e)){if(!re(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return [e];var o=e(t);return "object"!=typeof o||Array.isArray(o)||o instanceof Le||ae(o)||null===o||console.error("".concat($(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),He(o,t,n,r)}var s;return e instanceof Le?n?(e.inject(n,r),[e.getName(r)]):[e]:ae(e)?We(e):Array.isArray(e)?Array.prototype.concat.apply(N,e.map(function(e){return He(e,t,n,r)})):[e.toString()]}function Ue(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(re(n)&&!oe(n))return !1}return !0}var Je=F(m),Xe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"==="development",this.componentId=t,this.baseHash=V(Je,t),this.baseStyle=n,xe.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=se(r,this.staticRulesId);else {var o=ie(He(this.rules,e,t,n)),s=j(V(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var i=n(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,i);}r=se(r,s),this.staticRulesId=s;}else {for(var a=V(this.baseHash,n.hash),c="",l=0;l<this.rules.length;l++){var u=this.rules[l];if("string"==typeof u)c+=u,(a=V(a,u));else if(u){var p=ie(He(u,e,t,n));a=V(a,p+l),c+=p;}}if(c){var d=j(a>>>0);t.hasNameForId(this.componentId,d)||t.insertRules(this.componentId,d,n(c,".".concat(d),void 0,this.componentId)),r=se(r,d);}}return r},e}(),Ze=l.default.createContext(void 0),Ke=Ze.Consumer,Qe={},et=new Set;function tt(t,r,o){var s=oe(t),i=t,a=!B(t),u=r.attrs,p=void 0===u?N:u,d=r.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":x(e);Qe[n]=(Qe[n]||0)+1;var r="".concat(n,"-").concat(z(m+n+Qe[n]));return t?"".concat(t,"-").concat(r):r}(r.displayName,r.parentComponentId):d,f=r.displayName,y=void 0===f?function(e){return B(e)?"styled.".concat(e):"Styled(".concat($(e),")")}(t):f,v=r.displayName&&r.componentId?"".concat(x(r.displayName),"-").concat(r.componentId):r.componentId||h,g=s&&i.attrs?i.attrs.concat(p).filter(Boolean):p,S=r.shouldForwardProp;if(s&&i.shouldForwardProp){var w=i.shouldForwardProp;if(r.shouldForwardProp){var _=r.shouldForwardProp;S=function(e,t){return w(e,t)&&_(e,t)};}else S=w;}var b=new Xe(o,v,s?i.componentStyle:void 0);function I(t,r){return function(t,r,o){var s=t.attrs,i=t.componentStyle,a=t.defaultProps,u=t.foldedComponentIds,p=t.styledComponentId,d=t.target,h=l.default.useContext(Ze),f=$e(),y=t.shouldForwardProp||f.shouldForwardProp;n.useDebugValue(p);var m=C(r,h,a)||P,v=function(t,n,r){for(var o,s=e.__assign(e.__assign({},n),{className:void 0,theme:r}),i=0;i<t.length;i+=1){var a=re(o=t[i])?o(s):o;for(var c in a)s[c]="className"===c?se(s[c],a[c]):"style"===c?e.__assign(e.__assign({},s[c]),a[c]):a[c];}return n.className&&(s.className=se(s.className,n.className)),s}(s,r,m),g=v.as||d,S={};for(var w in v)void 0===v[w]||"$"===w[0]||"as"===w||"theme"===w&&v.theme===m||("forwardedAs"===w?S.as=v.forwardedAs:y&&!y(w,g)||(S[w]=v[w],y||"development"!=="development"||c.default(w)||et.has(w)||!A.has(g)||(et.add(w),console.warn('styled-components: it looks like an unknown prop "'.concat(w,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var _=function(e,t){var r=$e(),o=e.generateAndInjectStyles(t,r.styleSheet,r.stylis);return n.useDebugValue(o),o}(i,v);t.warnTooManyClasses&&t.warnTooManyClasses(_);var b=se(u,p);return _&&(b+=" "+_),v.className&&(b+=" "+v.className),S[B(g)&&!A.has(g)?"class":"className"]=b,S.ref=o,n.createElement(g,S)}(O,t,r)}I.displayName=y;var O=l.default.forwardRef(I);return O.attrs=g,O.componentStyle=b,O.displayName=y,O.shouldForwardProp=S,O.foldedComponentIds=s?se(i.foldedComponentIds,i.styledComponentId):"",O.styledComponentId=v,O.target=s?i.target:t,Object.defineProperty(O,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=s?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)ce(e,o[r],!0);return e}({},i.defaultProps,e):e;}}),(E(y,v),O.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'.concat(t,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(e).concat(s,".\n")+"Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(y,v)),le(O,function(){return ".".concat(O.styledComponentId)}),a&&ne(O,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),O}function nt(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var rt=function(e){return Object.assign(e,{isCss:!0})};function ot(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];if(re(t)||ae(t))return rt(He(nt(N,e.__spreadArray([t],n,!0))));var o=t;return 0===n.length&&1===o.length&&"string"==typeof o[0]?He(o):rt(He(nt(o,n)))}function st(t,n,r){if(void 0===r&&(r=P),!n)throw de(1,n);var o=function(o){for(var s=[],i=1;i<arguments.length;i++)s[i-1]=arguments[i];return t(n,r,ot.apply(void 0,e.__spreadArray([o],s,!1)))};return o.attrs=function(o){return st(t,n,e.__assign(e.__assign({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},o.withConfig=function(o){return st(t,n,e.__assign(e.__assign({},r),o))},o}var it=function(e){return st(tt,e)},at=it;A.forEach(function(e){at[e]=it(e);});var ct=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Ue(e),xe.registerId(this.componentId+1);}return e.prototype.createStyles=function(e,t,n,r){var o=r(ie(He(this.rules,t,n,r)),""),s=this.componentId+e;n.insertRules(s,s,o);},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e);},e.prototype.renderStyles=function(e,t,n,r){e>2&&xe.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r);},e}(),lt=function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString(),n=Ee(),r=ie([n&&'nonce="'.concat(n,'"'),"".concat(h,'="true"'),"".concat(y,'="').concat(m,'"')].filter(Boolean)," ");return "<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw de(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw de(2);var r=((n={})[h]="",n[y]=m,n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),o=Ee();return o&&(r.nonce=o),[l.default.createElement("style",e.__assign({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0;},this.instance=new xe({isServer:!0}),this.sealed=!1;}return t.prototype.collectStyles=function(e){if(this.sealed)throw de(2);return l.default.createElement(Be,{sheet:this.instance},e)},t.prototype.interleaveWithNodeStream=function(e){throw de(3)},t}(),ut={StyleSheet:xe,mainSheet:ke};"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");var pt="__sc-".concat(h,"__");"undefined"!=typeof window&&(window[pt]||(window[pt]=0),1===window[pt]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window[pt]+=1),styledComponents_browser_cjs.ServerStyleSheet=lt,styledComponents_browser_cjs.StyleSheetConsumer=Fe,styledComponents_browser_cjs.StyleSheetContext=Ve,styledComponents_browser_cjs.StyleSheetManager=Be,styledComponents_browser_cjs.ThemeConsumer=Ke,styledComponents_browser_cjs.ThemeContext=Ze,styledComponents_browser_cjs.ThemeProvider=function(t){var r=l.default.useContext(Ze),o=n.useMemo(function(){return function(t,n){if(!t)throw de(14);if(re(t)){var r=t(n);if((null===r||Array.isArray(r)||"object"!=typeof r))throw de(7);return r}if(Array.isArray(t)||"object"!=typeof t)throw de(8);return n?e.__assign(e.__assign({},n),t):t}(t.theme,r)},[t.theme,r]);return t.children?l.default.createElement(Ze.Provider,{value:o},t.children):null},styledComponents_browser_cjs.__PRIVATE__=ut,styledComponents_browser_cjs.createGlobalStyle=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=ot.apply(void 0,e.__spreadArray([t],n,!1)),s="sc-global-".concat(z(JSON.stringify(o))),i=new ct(o,s);E(s);var a=function(e){var t=$e(),n=l.default.useContext(Ze),r=l.default.useRef(t.styleSheet.allocateGSInstance(s)).current;return l.default.Children.count(e.children)&&console.warn("The global style component ".concat(s," was given child JSX. createGlobalStyle does not render children.")),o.some(function(e){return "string"==typeof e&&-1!==e.indexOf("@import")})&&console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."),t.styleSheet.server&&c(r,e,t.styleSheet,n,t.stylis),l.default.useLayoutEffect(function(){if(!t.styleSheet.server)return c(r,e,t.styleSheet,n,t.stylis),function(){return i.removeStyles(r,t.styleSheet)}},[r,e,t.styleSheet,n,t.stylis]),null};function c(t,n,r,o,s){if(i.isStatic)i.renderStyles(t,w,r,s);else {var c=e.__assign(e.__assign({},n),{theme:C(n,o,a.defaultProps)});i.renderStyles(t,c,r,s);}}return l.default.memo(a)},styledComponents_browser_cjs.css=ot,_default = styledComponents_browser_cjs.default=at,styledComponents_browser_cjs.isStyledComponent=oe,keyframes = styledComponents_browser_cjs.keyframes=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");var o=ie(ot.apply(void 0,e.__spreadArray([t],n,!1))),s=z(o);return new Le(s,o)},styledComponents_browser_cjs.styled=at,styledComponents_browser_cjs.useTheme=function(){var e=n.useContext(Ze);if(!e)throw de(18);return e},styledComponents_browser_cjs.version=m,styledComponents_browser_cjs.withTheme=function(t){var n=l.default.forwardRef(function(n,r){var o=C(n,l.default.useContext(Ze),t.defaultProps);return void 0===o&&console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat($(t),'"')),l.default.createElement(t,e.__assign({},n,{theme:o,ref:r}))});return n.displayName="WithTheme(".concat($(t),")"),ne(n,t)};

  const OrContainer = _default.div`
  text-align: center;
  color: rgb(137, 138, 154);
  position: relative;
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    width: 100%;
    left: 0;
    right: 0;
    height: 1px; /* Adjust the height as needed */
    background-color: #ccd5d9;
  }

  &:after {
    content: 'OR';
    position: relative;
    display: inline-block;
    color: rgb(137, 138, 154);
    border: 1px solid #ccd5d9;
    border-radius: 6px;
    background: white;
    padding: 6px 12px;
    font-size: 12px;
  }
`;
  const CustomLabel = _default.label`
  color: rgb(137, 138, 154);
  display: block;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 8px;

  &::before {
    content: '*';
    color: violet;
    margin-right: 4px;
  }
`;
  const moveBackground = keyframes`
  0% {
    background-position: 0% center;
  }
  25% {
    background-position: 50% center;
  }
  50% {
    background-position: 100% center;
  }
    75% {
    background-position: 50% center;
  }
      100% {
    background-position: 0% center;
  }
`;
  const StyledDiv = _default.div`
  color: white;
  width: 332px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 5px 0px 15px -5px;
  background: linear-gradient(204.24deg, purple -0.04%, violet 84.48%);
  padding: 48px;
  flex-grow: 0;
  position: relative;

  & > * {
    z-index: 1;
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 10px;
    background: url(https://cdn.discordapp.com/attachments/913551851243335801/1222543030091911249/space-bg.webp?ex=661698ec&is=660423ec&hm=a38f8baa5bd338a50c41c510ffad2ba5492fcc0d044df48ad91f85b92647b6b9&);
    background-size: auto 580px;
    opacity: 0.65;
    animation: ${moveBackground} 75s linear 0s infinite normal none running;
  }

  @media (max-width: 870px) {
    display: none;
  }
`;
  const Login = () => {
    const [termsChecked, setTermsChecked] = React.useState(false);
    const {
      translateComponent,
      translateMessage
    } = adminjs.useTranslation();
    const props = window.__APP_STATE__;
    const {
      action,
      errorMessage: message
    } = props;
    const [registerMessage, setRegisterMessage] = React.useState(null);
    const [forgotPasswordMessage, setForgotPasswordMessage] = React.useState(null);
    const [registerSuccessMessage, setRegisterSuccessMessage] = React.useState(null);
    const [forgotPasswordSuccessMessage, setForgotPasswordSuccessMessage] = React.useState(null);
    const handleLoginSubmit = async e => {
      e.preventDefault();
      console.log('hello');
      const form = e.target;
      const emailInput = form.querySelector('input[name="email"]');
      const passwordInput = form.querySelector('input[name="password"]');
      const email = emailInput.value;
      const password = passwordInput.value;
      if (!email || !password) {
        console.log('Please fill in all fields');
      } else {
        form.submit();
      }
    };
    const handleRegisterSubmit = async e => {
      e.preventDefault();
      if (!termsChecked) {
        console.log('Please accept the terms & conditions');
        return;
      }
      const registerForm = document.getElementById('registerForm');
      const emailInput = registerForm.querySelector('input[name="email"]');
      const passwordInput = registerForm.querySelector('input[name="password"]');
      const confirmPasswordInput = registerForm.querySelector('input[name="confirmPassword"]');
      const email = emailInput.value;
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      if (!email || !password || !confirmPassword) {
        setRegisterMessage('Please fill in all fields');
        return;
      }
      if (password !== confirmPassword) {
        setRegisterMessage('Passwords do not match');
        return;
      }
      const requestBody = {
        email: email,
        password: password
      };
      try {
        const response = await fetch('http://localhost:5000/api/users/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
          const errorResponse = await response.json(); // Parsing error response as JSON
          throw new Error(errorResponse.error || 'Failed to register user');
        }
        setRegisterMessage('');
        setRegisterSuccessMessage('User registered successfully');
        console.log('User registered successfully');
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
        // window.location.reload();
      } catch (error) {
        console.error('Error registering user:', error.message);
        setRegisterMessage(error.message);
      }
    };
    const handleForgotPasswordSubmit = async e => {
      e.preventDefault();
      const forgotPasswordForm = document.getElementById('forgotPasswordForm');
      const emailInput = forgotPasswordForm.querySelector('input[name="email"]');
      const email = emailInput.value;
      console.log(email);
      if (!email) {
        setForgotPasswordMessage('Please fill in your email');
        return;
      }
      const requestBody = {
        email: email
      };
      try {
        const response = await fetch('http://localhost:5000/api/users/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });
        emailInput.value = '';
        if (!response.ok) {
          const errorResponse = await response.json();
          throw new Error(errorResponse.error || 'Failed to send email');
        }
        setForgotPasswordMessage('');
        setForgotPasswordSuccessMessage('Email sent successfully');
      } catch (error) {
        setForgotPasswordMessage(error.message);
      }
    };
    const toggleTerms = () => {
      const newTermsChecked = !termsChecked;
      setTermsChecked(newTermsChecked);
      const registerBtn = document.getElementById('registerSubmitBtn');
      if (registerBtn) {
        registerBtn.disabled = !newTermsChecked;
        newTermsChecked ? registerBtn.style.background = '#6e46ae' : registerBtn.style.background = '#cccccc';
      }
    };
    const handleWindow = (e, window) => {
      e.preventDefault();
      const loginForm = document.getElementById('loginForm');
      const registerForm = document.getElementById('registerForm');
      const forgotPasswordForm = document.getElementById('forgotPasswordForm');
      if (loginForm && registerForm && forgotPasswordForm) {
        loginForm.style.display = 'none';
        registerForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        switch (window) {
          case 'login':
            loginForm.style.display = 'block';
            break;
          case 'register':
            registerForm.style.display = 'block';
            break;
          case 'forgotPassword':
            forgotPasswordForm.style.display = 'block';
            break;
        }
      }
    };
    return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'url(https://cdn.discordapp.com/attachments/653997513350709251/1222837853898149888/provaBG_Opaque.png?ex=6617ab7f&is=6605367f&hm=f6b9d30ba9f44ada905c32958266eabeef7774ffe3c7d3bc0b9a788fcb0cfd59&)',
        backgroundPosition: '50% center',
        backgroundSize: 'cover',
        inset: '0px'
      },
      className: "login__Wrapper"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      bg: "white",
      flex: true,
      boxShadow: "login",
      width: [1, 2 / 3, 'auto'],
      style: {
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 1px 1px 20px 5px',
        height: '580px'
      }
    }, /*#__PURE__*/React__default.default.createElement(StyledDiv, {
      style: {
        color: 'white',
        width: '284px',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.4) 5px 0px 15px -5px',
        background: 'linear-gradient(204.24deg, purple -0.04%, violet 84.48%)',
        padding: '48px',
        flexGrow: 0,
        position: 'relative'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.H2, {
      fontWeight: "bolder",
      style: {
        marginBottom: '10px'
      }
    }, "Welcome"), /*#__PURE__*/React__default.default.createElement("p", {
      style: {
        marginBottom: '30px',
        fontStyle: 'italic',
        opacity: '0.8'
      }
    }, "Unlock Your Potential, Find Your Future!"), /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      fontWeight: "lighter",
      mt: "default"
    }, /*#__PURE__*/React__default.default.createElement("ul", {
      style: {
        padding: '20px 0px 20px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }
    }, /*#__PURE__*/React__default.default.createElement("li", {
      style: {
        listStyleImage: 'url(https://cloud.adminjs.co/images/list-bullet.svg)',
        fontSize: '17px',
        textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 3px'
      }
    }, "Sign in to unlock exclusive job opportunities tailored for you."), /*#__PURE__*/React__default.default.createElement("li", {
      style: {
        listStyleImage: 'url(https://cloud.adminjs.co/images/list-bullet.svg)',
        fontSize: '17px',
        textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 3px'
      }
    }, "Connect with a diverse range of employers and expand your professional network."), /*#__PURE__*/React__default.default.createElement("li", {
      style: {
        listStyleImage: 'url(https://cloud.adminjs.co/images/list-bullet.svg)',
        fontSize: '17px',
        textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 3px'
      }
    }, "Access personalized tools and resources to streamline your job hunting process.")))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      id: "loginForm",
      as: "form",
      onSubmit: handleLoginSubmit,
      method: "POST",
      p: "x3",
      flexGrow: 1,
      width: ['100%', '100%', '480px']
    }, /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: !message ? '50px' : '0',
        marginTop: '15px'
      }
    }, /*#__PURE__*/React__default.default.createElement("h3", {
      style: {
        margin: 0,
        fontSize: '28px',
        fontWeight: 'bold'
      }
    }, "Login"), /*#__PURE__*/React__default.default.createElement(designSystem.H5, {
      style: {
        margin: 0
      }
    }, "COMPANY LOGO")), message && /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
      my: "lg",
      message: message.split(' ').length > 1 ? message : translateMessage(message),
      variant: "danger"
    }), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(CustomLabel, {
      style: {
        color: 'rgb(137, 138, 154)'
      }
    }, translateComponent('Login.properties.email')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      name: "email",
      placeholder: translateComponent('Login.properties.email')
    })), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between'
      }
    }, /*#__PURE__*/React__default.default.createElement(CustomLabel, {
      style: {
        color: 'rgb(137, 138, 154)'
      }
    }, translateComponent('Login.properties.password')), ' ', /*#__PURE__*/React__default.default.createElement("button", {
      style: {
        display: 'block',
        backgroundColor: 'transparent',
        border: 'none',
        padding: 0,
        margin: 0,
        font: 'inherit',
        fontSize: '12px',
        cursor: 'pointer',
        color: 'purple',
        opacity: '0.6',
        transition: 'opacity 0.3s, text-decoration 0.3s'
      },
      id: "toggleWindows",
      type: "button",
      onClick: e => handleWindow(e, 'forgotPassword'),
      onMouseEnter: e => {
        e.currentTarget.style.textDecoration = 'underline';
        e.currentTarget.style.opacity = '1';
      },
      onMouseLeave: e => {
        e.currentTarget.style.textDecoration = 'none';
        e.currentTarget.style.opacity = '0.6';
      }
    }, "Forgot password?")), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      type: "password",
      name: "password",
      placeholder: translateComponent('Login.properties.password'),
      autoComplete: "new-password"
    })), /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px',
        marginTop: '20px',
        backgroundColor: '#6e46ae'
      },
      variant: "contained",
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#8060b6';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = '#6e46ae';
        e.currentTarget.style.color = 'white';
      }
    }, translateComponent('Login.loginButton')), /*#__PURE__*/React__default.default.createElement(OrContainer, null), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px',
        borderColor: '#b869b3',
        color: '#b869b3'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'register'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#b869b3';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#b869b3';
        e.currentTarget.style.color = '#b869b3';
      }
    }, "Create Account"))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      id: "registerForm",
      as: "form",
      onSubmit: handleRegisterSubmit,
      method: "POST",
      p: "x3",
      flexGrow: 1,
      width: ['100%', '100%', '480px'],
      style: {
        display: 'none'
      }
    }, /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: !registerMessage && !registerSuccessMessage ? '50px' : '0',
        marginTop: '15px'
      }
    }, /*#__PURE__*/React__default.default.createElement("h3", {
      style: {
        margin: 0,
        fontSize: '28px',
        fontWeight: 'bold',
        fontFamily: 'TTNormsBold, Roboto'
      }
    }, "Register"), /*#__PURE__*/React__default.default.createElement(designSystem.H5, {
      style: {
        margin: 0
      }
    }, "COMPANY LOGO")), registerMessage && /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
      my: "lg",
      message: registerMessage.split(' ').length > 1 ? registerMessage : translateMessage(registerMessage),
      variant: "danger"
    }), registerSuccessMessage && /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
      my: "lg",
      message: registerSuccessMessage.split(' ').length > 1 ? registerSuccessMessage : translateMessage(registerSuccessMessage),
      variant: "success"
    }), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(CustomLabel, {
      style: {
        color: 'rgb(137, 138, 154)'
      }
    }, translateComponent('Email')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      type: "email",
      style: {
        padding: '8px'
      },
      name: "email",
      placeholder: 'Email'
    })), /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        gap: '24px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React__default.default.createElement(CustomLabel, {
      style: {
        color: 'rgb(137, 138, 154)'
      }
    }, translateComponent('Password')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      type: "password",
      name: "password",
      placeholder: 'Password',
      autoComplete: "new-password"
    })), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React__default.default.createElement(CustomLabel, {
      style: {
        color: 'rgb(137, 138, 154)'
      }
    }, 'Confirm Password'), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      type: "password",
      name: "confirmPassword",
      placeholder: 'Confirm Password',
      autoComplete: "new-password"
    }))), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(69, 70, 85)',
        fontSize: '14px'
      }
    }, /*#__PURE__*/React__default.default.createElement("input", {
      type: "checkbox",
      checked: termsChecked,
      onChange: toggleTerms,
      style: {
        margin: 0,
        marginRight: '16px',
        accentColor: 'violet'
      }
    }), "I agree to", ' ', /*#__PURE__*/React__default.default.createElement("a", {
      href: "#",
      style: {
        color: 'rgb(69, 70, 85)'
      }
    }, "Terms of Service"), ' ', "and", ' ', /*#__PURE__*/React__default.default.createElement("a", {
      href: "#",
      style: {
        color: 'rgb(69, 70, 85)'
      }
    }, "Privacy Policy"))), /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      id: "registerSubmitBtn",
      type: "submit",
      style: {
        width: '100%',
        padding: '10px 0px',
        background: '#cccccc'
      },
      variant: "contained",
      disabled: true
    }, "Create Account"), /*#__PURE__*/React__default.default.createElement(OrContainer, null), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px',
        transition: 'all 0.2s ease-in',
        borderColor: '#b869b3',
        color: '#b869b3'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'login'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#b869b3';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#b869b3';
        e.currentTarget.style.color = '#b869b3';
      }
    }, "Login"))), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      id: "forgotPasswordForm",
      as: "form",
      onSubmit: handleForgotPasswordSubmit,
      method: "POST",
      p: "x3",
      flexGrow: 1,
      width: ['100%', '100%', '480px'],
      style: {
        display: 'none'
      }
    }, /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: !forgotPasswordMessage && !forgotPasswordSuccessMessage ? '50px' : '0',
        marginTop: '15px'
      }
    }, /*#__PURE__*/React__default.default.createElement("h3", {
      style: {
        margin: 0,
        fontSize: '28px',
        fontWeight: 'bold'
      }
    }, "Reset Password"), /*#__PURE__*/React__default.default.createElement(designSystem.H5, {
      style: {
        margin: 0
      }
    }, "COMPANY LOGO")), forgotPasswordMessage && /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
      my: "lg",
      message: forgotPasswordMessage.split(' ').length > 1 ? forgotPasswordMessage : translateMessage(forgotPasswordMessage),
      variant: "danger"
    }), forgotPasswordSuccessMessage && /*#__PURE__*/React__default.default.createElement(designSystem.MessageBox, {
      my: "lg",
      message: forgotPasswordSuccessMessage.split(' ').length > 1 ? forgotPasswordSuccessMessage : translateMessage(forgotPasswordSuccessMessage),
      variant: "success"
    }), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(CustomLabel, {
      style: {
        color: 'rgb(137, 138, 154)'
      }
    }, translateComponent('Email')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      name: "email",
      placeholder: 'Email'
    })), /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '28px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      type: "submit",
      style: {
        width: '100%',
        padding: '10px 0px',
        marginTop: '20px',
        backgroundColor: '#6e46ae',
        color: 'white',
        cursor: 'pointer'
      },
      variant: "contained",
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#8060b6';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = '#6e46ae';
        e.currentTarget.style.color = 'white';
      }
    }, "Request Password Reset"), /*#__PURE__*/React__default.default.createElement(OrContainer, null), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px',
        borderColor: '#b869b3',
        color: '#b869b3'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'login'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#b869b3';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#b869b3';
        e.currentTarget.style.color = '#b869b3';
      }
    }, "Login"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px',
        borderColor: '#b869b3',
        color: '#b869b3'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'register'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#b869b3';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#b869b3';
        e.currentTarget.style.color = '#b869b3';
      }
    }, "Create Account")))), /*#__PURE__*/React__default.default.createElement("p", {
      style: {
        color: '#6B7781',
        fontFamily: 'TTNormsRegular, Roboto',
        fontSize: '12px',
        padding: '20px',
        letterSpacing: '1px'
      }
    }, "\xA9 Job Horizon 2024. All rights reserved |", ' ', /*#__PURE__*/React__default.default.createElement("a", {
      href: "#",
      style: {
        color: '#230939',
        textDecoration: 'none'
      }
    }, "Privacy Policy"), ' ', "| Made with \uD83D\uDC9C by our team")));
  };

  const SidebarBranding = () => {
    const StyledLink = _default(reactRouterDom.Link)`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    padding: 48px 32px;

    &:hover h1 {
      color: #3040d6;
    }
  `;
    const StyledH1 = _default.h1`
    font-weight: bolder;
    font-size: 24px;
    color: #000;
    max-width: 170px;
  `;
    return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(StyledLink, {
      to: '/admin',
      "data-css": "sidebar-logo",
      style: {
        display: 'flex',
        justifyContent: 'space-evenly'
      }
    }, /*#__PURE__*/React__default.default.createElement("img", {
      width: "50px",
      style: {
        borderRadius: '50%'
      },
      src: 'https://lh3.googleusercontent.com/d/1sepgRdNHedA0P270SGyjWRyNVEr918hN=s220?authuser=0',
      alt: "Logo"
    }), /*#__PURE__*/React__default.default.createElement(StyledH1, null, 'Job Horizon')));
  };

  const SidebarFooter = () => {
    return /*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mt: "lg",
      mb: "md",
      "data-css": "sidebar-footer",
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React__default.default.createElement("p", {
      style: {
        display: 'flex',
        gap: '5px'
      }
    }, "Made with \uD83D\uDC99 by our team")));
  };

  const Edit = ({ property, record, onChange }) => {
      const { translateProperty } = adminjs.useTranslation();
      const { params } = record;
      const { custom } = property;
      const path = adminjs.flat.get(params, custom.filePathProperty);
      const key = adminjs.flat.get(params, custom.keyProperty);
      const file = adminjs.flat.get(params, custom.fileProperty);
      const [originalKey, setOriginalKey] = React.useState(key);
      const [filesToUpload, setFilesToUpload] = React.useState([]);
      React.useEffect(() => {
          // it means means that someone hit save and new file has been uploaded
          // in this case fliesToUpload should be cleared.
          // This happens when user turns off redirect after new/edit
          if ((typeof key === 'string' && key !== originalKey)
              || (typeof key !== 'string' && !originalKey)
              || (typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length)) {
              setOriginalKey(key);
              setFilesToUpload([]);
          }
      }, [key, originalKey]);
      const onUpload = (files) => {
          setFilesToUpload(files);
          onChange(custom.fileProperty, files);
      };
      const handleRemove = () => {
          onChange(custom.fileProperty, null);
      };
      const handleMultiRemove = (singleKey) => {
          const index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
          const filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
          if (path && path.length > 0) {
              const newPath = path.map((currentPath, i) => (i !== index ? currentPath : null));
              let newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [...filesToDelete, index]);
              newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
              onChange({
                  ...record,
                  params: newParams,
              });
          }
          else {
              // eslint-disable-next-line no-console
              console.log('You cannot remove file when there are no uploaded files yet');
          }
      };
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(designSystem.DropZone, { onChange: onUpload, multiple: custom.multiple, validate: {
                  mimeTypes: custom.mimeTypes,
                  maxSize: custom.maxSize,
              }, files: filesToUpload }),
          !custom.multiple && key && path && !filesToUpload.length && file !== null && (React__default.default.createElement(designSystem.DropZoneItem, { filename: key, src: path, onRemove: handleRemove })),
          custom.multiple && key && key.length && path ? (React__default.default.createElement(React__default.default.Fragment, null, key.map((singleKey, index) => {
              // when we remove items we set only path index to nulls.
              // key is still there. This is because
              // we have to maintain all the indexes. So here we simply filter out elements which
              // were removed and display only what was left
              const currentPath = path[index];
              return currentPath ? (React__default.default.createElement(designSystem.DropZoneItem, { key: singleKey, filename: singleKey, src: path[index], onRemove: () => handleMultiRemove(singleKey) })) : '';
          }))) : ''));
  };

  const AudioMimeTypes = [
      'audio/aac',
      'audio/midi',
      'audio/x-midi',
      'audio/mpeg',
      'audio/ogg',
      'application/ogg',
      'audio/opus',
      'audio/wav',
      'audio/webm',
      'audio/3gpp2',
  ];
  const ImageMimeTypes = [
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/vnd.microsoft.icon',
      'image/tiff',
      'image/webp',
  ];

  // eslint-disable-next-line import/no-extraneous-dependencies
  const SingleFile = (props) => {
      const { name, path, mimeType, width } = props;
      if (path && path.length) {
          if (mimeType && ImageMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("img", { src: path, style: { maxHeight: width, maxWidth: width }, alt: name }));
          }
          if (mimeType && AudioMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("audio", { controls: true, src: path },
                  "Your browser does not support the",
                  React__default.default.createElement("code", null, "audio"),
                  React__default.default.createElement("track", { kind: "captions" })));
          }
      }
      return (React__default.default.createElement(designSystem.Box, null,
          React__default.default.createElement(designSystem.Button, { as: "a", href: path, ml: "default", size: "sm", rounded: true, target: "_blank" },
              React__default.default.createElement(designSystem.Icon, { icon: "DocumentDownload", color: "white", mr: "default" }),
              name)));
  };
  const File = ({ width, record, property }) => {
      const { custom } = property;
      let path = adminjs.flat.get(record?.params, custom.filePathProperty);
      if (!path) {
          return null;
      }
      const name = adminjs.flat.get(record?.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
      const mimeType = custom.mimeTypeProperty
          && adminjs.flat.get(record?.params, custom.mimeTypeProperty);
      if (!property.custom.multiple) {
          if (custom.opts && custom.opts.baseUrl) {
              path = `${custom.opts.baseUrl}/${name}`;
          }
          return (React__default.default.createElement(SingleFile, { path: path, name: name, width: width, mimeType: mimeType }));
      }
      if (custom.opts && custom.opts.baseUrl) {
          const baseUrl = custom.opts.baseUrl || '';
          path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
      }
      return (React__default.default.createElement(React__default.default.Fragment, null, path.map((singlePath, index) => (React__default.default.createElement(SingleFile, { key: singlePath, path: singlePath, name: name[index], width: width, mimeType: mimeType[index] })))));
  };

  const List = (props) => (React__default.default.createElement(File, { width: 100, ...props }));

  const Show = (props) => {
      const { property } = props;
      const { translateProperty } = adminjs.useTranslation();
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(File, { width: "100%", ...props })));
  };

  const PasswordEdit = props => {
    const {
      onChange,
      property,
      record,
      resource
    } = props;
    const {
      translateButton: tb
    } = adminjs.useTranslation();
    const [showPassword, togglePassword] = React.useState(false);
    React.useEffect(() => {
      if (!showPassword) {
        onChange(property.name, '');
      }
    }, [onChange, showPassword]);
    // For new records always show the property
    if (!record.id) {
      return /*#__PURE__*/React__default.default.createElement(adminjs.BasePropertyComponent.Password.Edit, props);
    }
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, showPassword && /*#__PURE__*/React__default.default.createElement(adminjs.BasePropertyComponent.Password.Edit, props), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      textAlign: "center"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      onClick: () => togglePassword(!showPassword),
      type: "button"
    }, showPassword ? tb('cancel', resource.id) : tb('changePassword', resource.id)))));
  };

  const ImportComponent = ({
    resource
  }) => {
    const [file, setFile] = React.useState(null);
    const sendNotice = adminjs.useNotice();
    const [isFetching, setFetching] = React.useState();
    const onUpload = uploadedFile => {
      setFile(uploadedFile?.[0] ?? null);
    };
    const onSubmit = async () => {
      if (!file) {
        return;
      }
      setFetching(true);
      try {
        const importData = new FormData();
        importData.append('file', file, file?.name);
        await new adminjs.ApiClient().resourceAction({
          method: 'post',
          resourceId: resource.id,
          actionName: 'import',
          data: importData
        });
        sendNotice({
          message: 'Imported successfully',
          type: 'success'
        });
      } catch (e) {
        sendNotice({
          message: e.message,
          type: 'error'
        });
      }
      setFetching(false);
    };
    if (isFetching) {
      return /*#__PURE__*/React__default.default.createElement(designSystem.Loader, null);
    }
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      margin: "auto",
      maxWidth: 600,
      display: "flex",
      justifyContent: "center",
      flexDirection: "column"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.DropZone, {
      files: [],
      onChange: onUpload,
      multiple: false
    }), file && /*#__PURE__*/React__default.default.createElement(designSystem.DropZoneItem, {
      file: file,
      filename: file.name,
      onRemove: () => setFile(null)
    }), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "center",
      m: 10
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      onClick: onSubmit,
      disabled: !file || isFetching
    }, "Upload")));
  };

  var FileSaver_min = {exports: {}};

  (function (module, exports) {
  	(function(a,b){b();})(commonjsGlobal,function(){function b(a,b){return "undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c);},d.onerror=function(){console.error("could not download file");},d.send();}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send();}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"));}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b);}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof commonjsGlobal&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href);},4E4),setTimeout(function(){e(j);},0));}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else {var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i);});}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null;},k.readAsDataURL(b);}else {var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m);},4E4);}});f.saveAs=g.saveAs=g,(module.exports=g);});

  	
  } (FileSaver_min));

  var FileSaver_minExports = FileSaver_min.exports;

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name isDate
   * @category Common Helpers
   * @summary Is the given value a date?
   *
   * @description
   * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
   *
   * @param {*} value - the value to check
   * @returns {boolean} true if the given value is a date
   * @throws {TypeError} 1 arguments required
   *
   * @example
   * // For a valid date:
   * const result = isDate(new Date())
   * //=> true
   *
   * @example
   * // For an invalid date:
   * const result = isDate(new Date(NaN))
   * //=> true
   *
   * @example
   * // For some value:
   * const result = isDate('2014-02-31')
   * //=> false
   *
   * @example
   * // For an object:
   * const result = isDate({})
   * //=> false
   */
  function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);

    // Clone the date
    if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        // eslint-disable-next-line no-console
        console.warn(new Error().stack);
      }
      return new Date(NaN);
    }
  }

  /**
   * @name isValid
   * @category Common Helpers
   * @summary Is the given date valid?
   *
   * @description
   * Returns false if argument is Invalid Date and true otherwise.
   * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
   * Invalid Date is a Date, whose time value is NaN.
   *
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * @param {*} date - the date to check
   * @returns {Boolean} the date is valid
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // For the valid date:
   * const result = isValid(new Date(2014, 1, 31))
   * //=> true
   *
   * @example
   * // For the value, convertable into a date:
   * const result = isValid(1393804800000)
   * //=> true
   *
   * @example
   * // For the invalid date:
   * const result = isValid(new Date(''))
   * //=> false
   */
  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    if (!isDate(dirtyDate) && typeof dirtyDate !== 'number') {
      return false;
    }
    var date = toDate(dirtyDate);
    return !isNaN(Number(date));
  }

  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  /**
   * @name addMilliseconds
   * @category Millisecond Helpers
   * @summary Add the specified number of milliseconds to the given date.
   *
   * @description
   * Add the specified number of milliseconds to the given date.
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
   * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:30.750
   */
  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger(dirtyAmount);
    return new Date(timestamp + amount);
  }

  /**
   * @name subMilliseconds
   * @category Millisecond Helpers
   * @summary Subtract the specified number of milliseconds from the given date.
   *
   * @description
   * Subtract the specified number of milliseconds from the given date.
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
   * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:29.250
   */
  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }

  var MILLISECONDS_IN_DAY = 86400000;
  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }

  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }

  var MILLISECONDS_IN_WEEK$1 = 604800000;
  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }

  var defaultOptions = {};
  function getDefaultOptions() {
    return defaultOptions;
  }

  function startOfUTCWeek(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions = getDefaultOptions();
    var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  function getUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var defaultOptions = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  function startOfUTCWeekYear(dirtyDate, options) {
    var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
    requiredArgs(1, arguments);
    var defaultOptions = getDefaultOptions();
    var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
    var year = getUTCWeekYear(dirtyDate, options);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, options);
    return date;
  }

  var MILLISECONDS_IN_WEEK = 604800000;
  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();

    // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)
    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();
    while (output.length < targetLength) {
      output = '0' + output;
    }
    return sign + output;
  }

  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* |                                |
   * |  d  | Day of month                   |  D  |                                |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  m  | Minute                         |  M  | Month                          |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  y  | Year (abs)                     |  Y  |                                |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   */
  var formatters$1 = {
    // Year
    y: function y(date, token) {
      // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
      // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
      // |----------|-------|----|-------|-------|-------|
      // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
      // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
      // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
      // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
      // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function M(date, token) {
      var month = date.getUTCMonth();
      return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function d(date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function a(date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
      switch (token) {
        case 'a':
        case 'aa':
          return dayPeriodEnumValue.toUpperCase();
        case 'aaa':
          return dayPeriodEnumValue;
        case 'aaaaa':
          return dayPeriodEnumValue[0];
        case 'aaaa':
        default:
          return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    // Hour [1-12]
    h: function h(date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function H(date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function m(date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function s(date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function S(date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };
  var lightFormatters = formatters$1;

  var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  };
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

  var formatters = {
    // Era
    G: function G(date, token, localize) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return localize.era(era, {
            width: 'abbreviated'
          });
        // A, B
        case 'GGGGG':
          return localize.era(era, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ
        case 'GGGG':
        default:
          return localize.era(era, {
            width: 'wide'
          });
      }
    },
    // Year
    y: function y(date, token, localize) {
      // Ordinal number
      if (token === 'yo') {
        var signedYear = date.getUTCFullYear();
        // Returns 1 for 1 BC (which is year 0 in JavaScript)
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize.ordinalNumber(year, {
          unit: 'year'
        });
      }
      return lightFormatters.y(date, token);
    },
    // Local week-numbering year
    Y: function Y(date, token, localize, options) {
      var signedWeekYear = getUTCWeekYear(date, options);
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

      // Two digit year
      if (token === 'YY') {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      }

      // Ordinal number
      if (token === 'Yo') {
        return localize.ordinalNumber(weekYear, {
          unit: 'year'
        });
      }

      // Padding
      return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function R(date, token) {
      var isoWeekYear = getUTCISOWeekYear(date);

      // Padding
      return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function u(date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function Q(date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
          return String(quarter);
        // 01, 02, 03, 04
        case 'QQ':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th
        case 'Qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'QQQ':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'QQQQQ':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...
        case 'QQQQ':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone quarter
    q: function q(date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
          return String(quarter);
        // 01, 02, 03, 04
        case 'qq':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th
        case 'qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4
        case 'qqq':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)
        case 'qqqqq':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...
        case 'qqqq':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Month
    M: function M(date, token, localize) {
      var month = date.getUTCMonth();
      switch (token) {
        case 'M':
        case 'MM':
          return lightFormatters.M(date, token);
        // 1st, 2nd, ..., 12th
        case 'Mo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec
        case 'MMM':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // J, F, ..., D
        case 'MMMMM':
          return localize.month(month, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December
        case 'MMMM':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone month
    L: function L(date, token, localize) {
      var month = date.getUTCMonth();
      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return String(month + 1);
        // 01, 02, ..., 12
        case 'LL':
          return addLeadingZeros(month + 1, 2);
        // 1st, 2nd, ..., 12th
        case 'Lo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec
        case 'LLL':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // J, F, ..., D
        case 'LLLLL':
          return localize.month(month, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December
        case 'LLLL':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Local week of year
    w: function w(date, token, localize, options) {
      var week = getUTCWeek(date, options);
      if (token === 'wo') {
        return localize.ordinalNumber(week, {
          unit: 'week'
        });
      }
      return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function I(date, token, localize) {
      var isoWeek = getUTCISOWeek(date);
      if (token === 'Io') {
        return localize.ordinalNumber(isoWeek, {
          unit: 'week'
        });
      }
      return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function d(date, token, localize) {
      if (token === 'do') {
        return localize.ordinalNumber(date.getUTCDate(), {
          unit: 'date'
        });
      }
      return lightFormatters.d(date, token);
    },
    // Day of year
    D: function D(date, token, localize) {
      var dayOfYear = getUTCDayOfYear(date);
      if (token === 'Do') {
        return localize.ordinalNumber(dayOfYear, {
          unit: 'dayOfYear'
        });
      }
      return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function E(date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T
        case 'EEEEE':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'EEEEEE':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday
        case 'EEEE':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Local day of week
    e: function e(date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        // Numerical value (Nth day of week with current locale or weekStartsOn)
        case 'e':
          return String(localDayOfWeek);
        // Padded numerical value
        case 'ee':
          return addLeadingZeros(localDayOfWeek, 2);
        // 1st, 2nd, ..., 7th
        case 'eo':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });
        case 'eee':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T
        case 'eeeee':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'eeeeee':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday
        case 'eeee':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone local day of week
    c: function c(date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
      switch (token) {
        // Numerical value (same as in `e`)
        case 'c':
          return String(localDayOfWeek);
        // Padded numerical value
        case 'cc':
          return addLeadingZeros(localDayOfWeek, token.length);
        // 1st, 2nd, ..., 7th
        case 'co':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });
        case 'ccc':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // T
        case 'ccccc':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu
        case 'cccccc':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'standalone'
          });
        // Tuesday
        case 'cccc':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // ISO day of week
    i: function i(date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
      switch (token) {
        // 2
        case 'i':
          return String(isoDayOfWeek);
        // 02
        case 'ii':
          return addLeadingZeros(isoDayOfWeek, token.length);
        // 2nd
        case 'io':
          return localize.ordinalNumber(isoDayOfWeek, {
            unit: 'day'
          });
        // Tue
        case 'iii':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T
        case 'iiiii':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu
        case 'iiiiii':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday
        case 'iiii':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM or PM
    a: function a(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
      switch (token) {
        case 'a':
        case 'aa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });
        case 'aaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();
        case 'aaaaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'aaaa':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM, PM, midnight, noon
    b: function b(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
      }
      switch (token) {
        case 'b':
        case 'bb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });
        case 'bbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();
        case 'bbbbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'bbbb':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function B(date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;
      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });
        case 'BBBBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });
        case 'BBBB':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Hour [1-12]
    h: function h(date, token, localize) {
      if (token === 'ho') {
        var hours = date.getUTCHours() % 12;
        if (hours === 0) hours = 12;
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }
      return lightFormatters.h(date, token);
    },
    // Hour [0-23]
    H: function H(date, token, localize) {
      if (token === 'Ho') {
        return localize.ordinalNumber(date.getUTCHours(), {
          unit: 'hour'
        });
      }
      return lightFormatters.H(date, token);
    },
    // Hour [0-11]
    K: function K(date, token, localize) {
      var hours = date.getUTCHours() % 12;
      if (token === 'Ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function k(date, token, localize) {
      var hours = date.getUTCHours();
      if (hours === 0) hours = 24;
      if (token === 'ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }
      return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function m(date, token, localize) {
      if (token === 'mo') {
        return localize.ordinalNumber(date.getUTCMinutes(), {
          unit: 'minute'
        });
      }
      return lightFormatters.m(date, token);
    },
    // Second
    s: function s(date, token, localize) {
      if (token === 'so') {
        return localize.ordinalNumber(date.getUTCSeconds(), {
          unit: 'second'
        });
      }
      return lightFormatters.s(date, token);
    },
    // Fraction of second
    S: function S(date, token) {
      return lightFormatters.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function X(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      if (timezoneOffset === 0) {
        return 'Z';
      }
      switch (token) {
        // Hours and optional minutes
        case 'X':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);

        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XX`
        case 'XXXX':
        case 'XX':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);

        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XXX`
        case 'XXXXX':
        case 'XXX': // Hours and minutes with `:` delimiter
        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function x(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        // Hours and optional minutes
        case 'x':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);

        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xx`
        case 'xxxx':
        case 'xx':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);

        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xxx`
        case 'xxxxx':
        case 'xxx': // Hours and minutes with `:` delimiter
        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (GMT)
    O: function O(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        // Short
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long
        case 'OOOO':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (specific non-location)
    z: function z(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();
      switch (token) {
        // Short
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long
        case 'zzzz':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Seconds timestamp
    t: function t(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1000);
      return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function T(date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };
  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;
    if (minutes === 0) {
      return sign + String(hours);
    }
    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }
  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? '-' : '+';
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }
    return formatTimezone(offset, dirtyDelimiter);
  }
  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }

  var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'P':
        return formatLong.date({
          width: 'short'
        });
      case 'PP':
        return formatLong.date({
          width: 'medium'
        });
      case 'PPP':
        return formatLong.date({
          width: 'long'
        });
      case 'PPPP':
      default:
        return formatLong.date({
          width: 'full'
        });
    }
  };
  var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'p':
        return formatLong.time({
          width: 'short'
        });
      case 'pp':
        return formatLong.time({
          width: 'medium'
        });
      case 'ppp':
        return formatLong.time({
          width: 'long'
        });
      case 'pppp':
      default:
        return formatLong.time({
          width: 'full'
        });
    }
  };
  var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/) || [];
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];
    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }
    var dateTimeFormat;
    switch (datePattern) {
      case 'P':
        dateTimeFormat = formatLong.dateTime({
          width: 'short'
        });
        break;
      case 'PP':
        dateTimeFormat = formatLong.dateTime({
          width: 'medium'
        });
        break;
      case 'PPP':
        dateTimeFormat = formatLong.dateTime({
          width: 'long'
        });
        break;
      case 'PPPP':
      default:
        dateTimeFormat = formatLong.dateTime({
          width: 'full'
        });
        break;
    }
    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
  };
  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };

  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }

  var protectedDayOfYearTokens = ['D', 'DD'];
  var protectedWeekYearTokens = ['YY', 'YYYY'];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format, input) {
    if (token === 'YYYY') {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === 'YY') {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === 'D') {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    } else if (token === 'DD') {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    }
  }

  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },
    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },
    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },
    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },
    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },
    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },
    aboutXWeeks: {
      one: 'about 1 week',
      other: 'about {{count}} weeks'
    },
    xWeeks: {
      one: '1 week',
      other: '{{count}} weeks'
    },
    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },
    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },
    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },
    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },
    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },
    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  };
  var formatDistance = function formatDistance(token, count, options) {
    var result;
    var tokenValue = formatDistanceLocale[token];
    if (typeof tokenValue === 'string') {
      result = tokenValue;
    } else if (count === 1) {
      result = tokenValue.one;
    } else {
      result = tokenValue.other.replace('{{count}}', count.toString());
    }
    if (options !== null && options !== void 0 && options.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }
    return result;
  };
  var formatDistance$1 = formatDistance;

  function buildFormatLongFn(args) {
    return function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // TODO: Remove String()
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  var dateFormats = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
  };
  var timeFormats = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
  };
  var dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: 'full'
    })
  };
  var formatLong$1 = formatLong;

  var formatRelativeLocale = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
  };
  var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  };
  var formatRelative$1 = formatRelative;

  function buildLocalizeFn(args) {
    return function (dirtyIndex, options) {
      var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
      var valuesArray;
      if (context === 'formatting' && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;
        var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }
      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
      return valuesArray[index];
    };
  }

  var eraValues = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini']
  };
  var quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
  };

  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var monthValues = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  var dayValues = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  var dayPeriodValues = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    }
  };
  var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
    var number = Number(dirtyNumber);

    // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`.
    //
    // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'.

    var rem100 = number % 100;
    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + 'st';
        case 2:
          return number + 'nd';
        case 3:
          return number + 'rd';
      }
    }
    return number + 'th';
  };
  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: 'wide',
      argumentCallback: function argumentCallback(quarter) {
        return quarter - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: 'wide',
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: 'wide'
    })
  };
  var localize$1 = localize;

  function buildMatchFn(args) {
    return function (string) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);
      if (!matchResult) {
        return null;
      }
      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      }) : findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
      var value;
      value = args.valueCallback ? args.valueCallback(key) : key;
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value: value,
        rest: rest
      };
    };
  }
  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
    return undefined;
  }
  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
    return undefined;
  }

  function buildMatchPatternFn(args) {
    return function (string) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var matchResult = string.match(args.matchPattern);
      if (!matchResult) return null;
      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);
      if (!parseResult) return null;
      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      var rest = string.slice(matchedString.length);
      return {
        value: value,
        rest: rest
      };
    };
  }

  var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function valueCallback(value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: 'any',
      valueCallback: function valueCallback(index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: 'any'
    })
  };
  var match$1 = match;

  /**
   * @type {Locale}
   * @category Locales
   * @summary English locale (United States).
   * @language English
   * @iso-639-2 eng
   * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
   * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
   */
  var locale = {
    code: 'en-US',
    formatDistance: formatDistance$1,
    formatLong: formatLong$1,
    formatRelative: formatRelative$1,
    localize: localize$1,
    match: match$1,
    options: {
      weekStartsOn: 0 /* Sunday */,
      firstWeekContainsDate: 1
    }
  };
  var defaultLocale = locale;

  // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
  //   (one of the certain letters followed by `o`)
  // - (\w)\1* matches any sequences of the same letter
  // - '' matches two quote characters in a row
  // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
  //   except a single quote symbol, which ends the sequence.
  //   Two quote characters do not end the sequence.
  //   If there is no matching single quote
  //   then the sequence will continue until the end of the string.
  // - . matches any single character unmatched by previous parts of the RegExps
  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

  // This RegExp catches symbols escaped by quotes, and also
  // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

  /**
   * @name format
   * @category Common Helpers
   * @summary Format the date.
   *
   * @description
   * Return the formatted date string in the given format. The result may vary by locale.
   *
   * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
   * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   *
   * The characters wrapped between two single quotes characters (') are escaped.
   * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
   * (see the last example)
   *
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * with a few additions (see note 7 below the table).
   *
   * Accepted patterns:
   * | Unit                            | Pattern | Result examples                   | Notes |
   * |---------------------------------|---------|-----------------------------------|-------|
   * | Era                             | G..GGG  | AD, BC                            |       |
   * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
   * |                                 | GGGGG   | A, B                              |       |
   * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
   * |                                 | yy      | 44, 01, 00, 17                    | 5     |
   * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
   * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
   * |                                 | yyyyy   | ...                               | 3,5   |
   * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
   * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
   * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
   * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
   * |                                 | YYYYY   | ...                               | 3,5   |
   * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
   * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
   * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
   * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
   * |                                 | RRRRR   | ...                               | 3,5,7 |
   * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
   * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
   * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
   * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
   * |                                 | uuuuu   | ...                               | 3,5   |
   * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
   * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | QQ      | 01, 02, 03, 04                    |       |
   * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
   * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
   * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | qq      | 01, 02, 03, 04                    |       |
   * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
   * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
   * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | MM      | 01, 02, ..., 12                   |       |
   * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
   * |                                 | MMMM    | January, February, ..., December  | 2     |
   * |                                 | MMMMM   | J, F, ..., D                      |       |
   * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
   * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | LL      | 01, 02, ..., 12                   |       |
   * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
   * |                                 | LLLL    | January, February, ..., December  | 2     |
   * |                                 | LLLLL   | J, F, ..., D                      |       |
   * | Local week of year              | w       | 1, 2, ..., 53                     |       |
   * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | ww      | 01, 02, ..., 53                   |       |
   * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
   * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | II      | 01, 02, ..., 53                   | 7     |
   * | Day of month                    | d       | 1, 2, ..., 31                     |       |
   * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
   * |                                 | dd      | 01, 02, ..., 31                   |       |
   * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
   * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
   * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
   * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
   * |                                 | DDDD    | ...                               | 3     |
   * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
   * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
   * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
   * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
   * |                                 | ii      | 01, 02, ..., 07                   | 7     |
   * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
   * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
   * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
   * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
   * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
   * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | ee      | 02, 03, ..., 01                   |       |
   * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
   * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
   * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
   * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | cc      | 02, 03, ..., 01                   |       |
   * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
   * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
   * | AM, PM                          | a..aa   | AM, PM                            |       |
   * |                                 | aaa     | am, pm                            |       |
   * |                                 | aaaa    | a.m., p.m.                        | 2     |
   * |                                 | aaaaa   | a, p                              |       |
   * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
   * |                                 | bbb     | am, pm, noon, midnight            |       |
   * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
   * |                                 | bbbbb   | a, p, n, mi                       |       |
   * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
   * |                                 | BBBB    | at night, in the morning, ...     | 2     |
   * |                                 | BBBBB   | at night, in the morning, ...     |       |
   * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
   * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
   * |                                 | hh      | 01, 02, ..., 11, 12               |       |
   * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
   * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
   * |                                 | HH      | 00, 01, 02, ..., 23               |       |
   * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
   * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
   * |                                 | KK      | 01, 02, ..., 11, 00               |       |
   * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
   * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
   * |                                 | kk      | 24, 01, 02, ..., 23               |       |
   * | Minute                          | m       | 0, 1, ..., 59                     |       |
   * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | mm      | 00, 01, ..., 59                   |       |
   * | Second                          | s       | 0, 1, ..., 59                     |       |
   * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | ss      | 00, 01, ..., 59                   |       |
   * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
   * |                                 | SS      | 00, 01, ..., 99                   |       |
   * |                                 | SSS     | 000, 001, ..., 999                |       |
   * |                                 | SSSS    | ...                               | 3     |
   * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
   * |                                 | XX      | -0800, +0530, Z                   |       |
   * |                                 | XXX     | -08:00, +05:30, Z                 |       |
   * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
   * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
   * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
   * |                                 | xx      | -0800, +0530, +0000               |       |
   * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
   * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
   * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
   * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
   * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
   * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
   * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
   * | Seconds timestamp               | t       | 512969520                         | 7     |
   * |                                 | tt      | ...                               | 3,7   |
   * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
   * |                                 | TT      | ...                               | 3,7   |
   * | Long localized date             | P       | 04/29/1453                        | 7     |
   * |                                 | PP      | Apr 29, 1453                      | 7     |
   * |                                 | PPP     | April 29th, 1453                  | 7     |
   * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
   * | Long localized time             | p       | 12:00 AM                          | 7     |
   * |                                 | pp      | 12:00:00 AM                       | 7     |
   * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
   * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
   * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
   * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
   * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
   * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
   * Notes:
   * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   *    are the same as "stand-alone" units, but are different in some languages.
   *    "Formatting" units are declined according to the rules of the language
   *    in the context of a date. "Stand-alone" units are always nominative singular:
   *
   *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
   *
   *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
   *
   * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
   *    the single quote characters (see below).
   *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
   *    the output will be the same as default pattern for this unit, usually
   *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
   *    are marked with "2" in the last column of the table.
   *
   *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
   *
   * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
   *    The output will be padded with zeros to match the length of the pattern.
   *
   *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
   *
   * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   *    These tokens represent the shortest form of the quarter.
   *
   * 5. The main difference between `y` and `u` patterns are B.C. years:
   *
   *    | Year | `y` | `u` |
   *    |------|-----|-----|
   *    | AC 1 |   1 |   1 |
   *    | BC 1 |   1 |   0 |
   *    | BC 2 |   2 |  -1 |
   *
   *    Also `yy` always returns the last two digits of a year,
   *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
   *
   *    | Year | `yy` | `uu` |
   *    |------|------|------|
   *    | 1    |   01 |   01 |
   *    | 14   |   14 |   14 |
   *    | 376  |   76 |  376 |
   *    | 1453 |   53 | 1453 |
   *
   *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   *    except local week-numbering years are dependent on `options.weekStartsOn`
   *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
   *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
   *
   * 6. Specific non-location timezones are currently unavailable in `date-fns`,
   *    so right now these tokens fall back to GMT timezones.
   *
   * 7. These patterns are not in the Unicode Technical Standard #35:
   *    - `i`: ISO day of week
   *    - `I`: ISO week of year
   *    - `R`: ISO week-numbering year
   *    - `t`: seconds timestamp
   *    - `T`: milliseconds timestamp
   *    - `o`: ordinal number modifier
   *    - `P`: long localized date
   *    - `p`: long localized time
   *
   * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   *
   * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
   *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   *
   * @param {Date|Number} date - the original date
   * @param {String} format - the string of tokens
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
   * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
   *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
   *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   * @returns {String} the formatted date string
   * @throws {TypeError} 2 arguments required
   * @throws {RangeError} `date` must not be Invalid Date
   * @throws {RangeError} `options.locale` must contain `localize` property
   * @throws {RangeError} `options.locale` must contain `formatLong` property
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
   * @throws {RangeError} format string contains an unescaped latin alphabet character
   *
   * @example
   * // Represent 11 February 2014 in middle-endian format:
   * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
   * //=> '02/11/2014'
   *
   * @example
   * // Represent 2 July 2014 in Esperanto:
   * import { eoLocale } from 'date-fns/locale/eo'
   * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
   *   locale: eoLocale
   * })
   * //=> '2-a de julio 2014'
   *
   * @example
   * // Escape string by single quote characters:
   * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
   * //=> "3 o'clock"
   */

  function format(dirtyDate, dirtyFormatStr, options) {
    var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var defaultOptions = getDefaultOptions();
    var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : defaultLocale;
    var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

    // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }
    var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

    // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }
    if (!locale.localize) {
      throw new RangeError('locale must contain localize property');
    }
    if (!locale.formatLong) {
      throw new RangeError('locale must contain formatLong property');
    }
    var originalDate = toDate(dirtyDate);
    if (!isValid(originalDate)) {
      throw new RangeError('Invalid time value');
    }

    // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
      var firstCharacter = substring[0];
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    }).join('').match(formattingTokensRegExp).map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }
      var firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return cleanEscapedString(substring);
      }
      var formatter = formatters[firstCharacter];
      if (formatter) {
        if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
        }
        if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions);
      }
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      }
      return substring;
    }).join('');
    return result;
  }
  function cleanEscapedString(input) {
    var matched = input.match(escapedStringRegExp);
    if (!matched) {
      return input;
    }
    return matched[1].replace(doubleQuoteRegExp, "'");
  }

  const Exporters = ['csv', 'json', 'xml'];

  const mimeTypes = {
    json: 'application/json',
    csv: 'text/csv',
    xml: 'text/xml'
  };
  const getExportedFileName = extension => `export-${format(Date.now(), 'yyyy-MM-dd_HH-mm')}.${extension}`;
  const ExportComponent = ({
    resource
  }) => {
    const [isFetching, setFetching] = React.useState();
    const sendNotice = adminjs.useNotice();
    const exportData = async type => {
      setFetching(true);
      try {
        const {
          data: {
            exportedData
          }
        } = await new adminjs.ApiClient().resourceAction({
          method: 'post',
          resourceId: resource.id,
          actionName: 'export',
          params: {
            type
          }
        });
        const blob = new Blob([exportedData], {
          type: mimeTypes[type]
        });
        FileSaver_minExports.saveAs(blob, getExportedFileName(type));
        sendNotice({
          message: 'Exported successfully',
          type: 'success'
        });
      } catch (e) {
        sendNotice({
          message: e.message,
          type: 'error'
        });
      }
      setFetching(false);
    };
    if (isFetching) {
      return /*#__PURE__*/React__default.default.createElement(designSystem.Loader, null);
    }
    return /*#__PURE__*/React__default.default.createElement(designSystem.Box, null, /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "center"
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Text, {
      variant: "lg"
    }, "Choose export format:")), /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      display: "flex",
      justifyContent: "center"
    }, Exporters.map(parserType => /*#__PURE__*/React__default.default.createElement(designSystem.Box, {
      key: parserType,
      m: 2
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      onClick: () => exportData(parserType),
      disabled: isFetching
    }, parserType.toUpperCase())))));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Dashboard = Dashboard;
  AdminJS.UserComponents.Login = Login;
  AdminJS.UserComponents.SidebarBranding = SidebarBranding;
  AdminJS.UserComponents.SidebarFooter = SidebarFooter;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;
  AdminJS.UserComponents.PasswordEditComponent = PasswordEdit;
  AdminJS.UserComponents.ImportComponent = ImportComponent;
  AdminJS.UserComponents.ExportComponent = ExportComponent;

})(React, AdminJSDesignSystem, styled, AdminJS, ReactRouterDOM);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC50c3giLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3N0eWxpcy9kaXN0L3VtZC9zdHlsaXMuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvZW1vdGlvbi11bml0bGVzcy5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmNqcy5qcyIsIi4uL2NvbXBvbmVudHMvbG9naW4udHN4IiwiLi4vY29tcG9uZW50cy9zaWRlYmFyQnJhbmRpbmcudHN4IiwiLi4vY29tcG9uZW50cy9zaWRlYmFyRm9vdGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZmlsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2J1aWxkL2NvbXBvbmVudHMvUGFzc3dvcmRFZGl0Q29tcG9uZW50LmpzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9pbXBvcnQtZXhwb3J0L2xpYi9jb21wb25lbnRzL0ltcG9ydENvbXBvbmVudC5qc3giLCIuLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9pbXBvcnQtZXhwb3J0L2xpYi9leHBvcnRlci50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL2ltcG9ydC1leHBvcnQvbGliL2NvbXBvbmVudHMvRXhwb3J0Q29tcG9uZW50LmpzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSDIsIEg1LCBJbGx1c3RyYXRpb24sIElsbHVzdHJhdGlvblByb3BzLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IHBhZ2VIZWFkZXJIZWlnaHQgPSAzMDA7XHJcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWSA9IDc0O1xyXG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1ggPSAyNTA7XHJcblxyXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBpbnRlcmZhY2UgRGF0YSB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXREYXNoYm9hcmQoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIGFzIERhdGE7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZURhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkYXRhLWNzcz0nZGVmYXVsdC1kYXNoYm9hcmQnPlxyXG4gICAgICA8ZGl2PntkYXRhICYmIDxwPntkYXRhLm1lc3NhZ2V9PC9wPn08L2Rpdj5cclxuICAgICAgPEJveCBwb3NpdGlvbj0ncmVsYXRpdmUnIG92ZXJmbG93PSdoaWRkZW4nIGJnPSd3aGl0ZScgaGVpZ2h0PXtwYWdlSGVhZGVySGVpZ2h0fSBweT17cGFnZUhlYWRlclBhZGRpbmdZfSBweD17WydkZWZhdWx0JywgJ2xnJywgcGFnZUhlYWRlclBhZGRpbmdYXX0+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIHRvcD17MzB9IGxlZnQ9ezB9IG9wYWNpdHk9ezAuOX0gYW5pbWF0ZSBkaXNwbGF5PXtbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ2Jsb2NrJ119PjwvQm94PlxyXG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJyBjb2xvcj0nZ3JleTEwMCc+XHJcbiAgICAgICAgICA8SDIgZm9udFdlaWdodD0nYm9sZCc+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3dlbGNvbWVPbkJvYXJkX3RpdGxlJyl9PC9IMj5cclxuICAgICAgICAgIDxUZXh0IG9wYWNpdHk9ezAuOH0+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3dlbGNvbWVPbkJvYXJkX3N1YnRpdGxlJyl9PC9UZXh0PlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxudHlwZSBCb3hUeXBlID0ge1xyXG4gIHZhcmlhbnQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHN1YnRpdGxlOiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgYm94ZXMgPSAoeyB0cmFuc2xhdGVNZXNzYWdlIH0pOiBBcnJheTxCb3hUeXBlPiA9PiBbXHJcbiAge1xyXG4gICAgdmFyaWFudDogJ0RldGFpbHMnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc190aXRsZScpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc19zdWJ0aXRsZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZG9jcy5hZG1pbmpzLmNvL2Jhc2ljcy9yZXNvdXJjZSNwcm92aWRpbmctcmVzb3VyY2VzLWV4cGxpY2l0bHknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFyaWFudDogJ0RvY3MnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc190aXRsZScpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc19zdWJ0aXRsZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZG9jcy5hZG1pbmpzLmNvL2Jhc2ljcy9yZXNvdXJjZSNjdXN0b21pemluZy1yZXNvdXJjZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFyaWFudDogJ1BsdWcnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZUFjdGlvbnNfdGl0bGUnKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3N1YnRpdGxlJyksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly9kb2NzLmFkbWluanMuY28vYmFzaWNzL2FjdGlvbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiAnQ3VwJyxcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfdGl0bGUnKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfc3VidGl0bGUnKSxcclxuICAgIGhyZWY6ICdodHRwczovL2RvY3MuYWRtaW5qcy5jby91aS1jdXN0b21pemF0aW9uL3dyaXRpbmcteW91ci1vd24tY29tcG9uZW50cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiAnUGhvdG9zJyxcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21EYXNoYm9hcmRfdGl0bGUnKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21EYXNoYm9hcmRfc3VidGl0bGUnKSxcclxuICAgIGhyZWY6ICdodHRwczovL2RvY3MuYWRtaW5qcy5jby91aS1jdXN0b21pemF0aW9uL2Rhc2hib2FyZC1jdXN0b21pemF0aW9uJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhcmlhbnQ6ICdJZGVudGl0eUNhcmQnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc190aXRsZScpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc19zdWJ0aXRsZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZG9jcy5hZG1pbmpzLmNvL3R1dG9yaWFscy9hZGRpbmctcm9sZS1iYXNlZC1hY2Nlc3MtY29udHJvbCcsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcclxuICBkaXNwbGF5OiAkeyh7IGZsZXggfSk6IHN0cmluZyA9PiAoZmxleCA/ICdmbGV4JyA6ICdibG9jaycpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleTEwMH07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNlLm1kfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnk2MH07XHJcbiAgICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNoYWRvd3MuY2FyZEhvdmVyfTtcclxuICB9XHJcblxyXG4gICYgLmRzYy1pY29uIHN2ZyxcclxuICAuZ2gtaWNvbiBzdmcge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdmFyaWFudDogJ2NvbnRhaW5lcicsXHJcbiAgYm94U2hhZG93OiAnY2FyZCcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG10PXtbJ3hsJywgJ3hsJywgJy0xMDBweCddfVxyXG4gICAgICAgIG1iPSd4bCdcclxuICAgICAgICBteD17WzAsIDAsIDAsICdhdXRvJ119XHJcbiAgICAgICAgcHg9e1snZGVmYXVsdCcsICdsZycsICd4eGwnLCAnMCddfVxyXG4gICAgICAgIHBvc2l0aW9uPSdyZWxhdGl2ZSdcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleERpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgIGZsZXhXcmFwPSd3cmFwJ1xyXG4gICAgICAgIHdpZHRoPXtbMSwgMSwgMSwgMTAyNF19XHJcbiAgICAgID5cclxuICAgICAgICB7Ym94ZXMoeyB0cmFuc2xhdGVNZXNzYWdlIH0pLm1hcCgoYm94LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gMiwgMSAvIDNdfSBwPSdsZyc+XHJcbiAgICAgICAgICAgIDxDYXJkIGFzPSdhJyBocmVmPXtib3guaHJlZn0gdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbGx1c3RyYXRpb24gdmFyaWFudD17Ym94LnZhcmlhbnQgYXMgSWxsdXN0cmF0aW9uUHJvcHNbJ3ZhcmlhbnQnXX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs3MH0gLz5cclxuICAgICAgICAgICAgICAgIDxINSBtdD0nbWQnPntib3gudGl0bGV9PC9INT5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntib3guc3VidGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnB1c2goXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMucHVzaChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCB7IG1lbW9pemUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhYmJyfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGVudGVyS2V5SGludHxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHRyYW5zbGF0ZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluY3JlbWVudGFsfGZhbGxiYWNrfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxvcHRpb258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaXNQcm9wVmFsaWQgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCB7IGlzUHJvcFZhbGlkIGFzIGRlZmF1bHQgfTtcbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIihmdW5jdGlvbihlLHIpe3R5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCI/cihleHBvcnRzKTp0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHIpOihlPWV8fHNlbGYscihlLnN0eWxpcz17fSkpfSkodGhpcywoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9XCItbXMtXCI7dmFyIGE9XCItbW96LVwiO3ZhciBjPVwiLXdlYmtpdC1cIjt2YXIgbj1cImNvbW1cIjt2YXIgdD1cInJ1bGVcIjt2YXIgcz1cImRlY2xcIjt2YXIgaT1cIkBwYWdlXCI7dmFyIHU9XCJAbWVkaWFcIjt2YXIgbz1cIkBpbXBvcnRcIjt2YXIgbD1cIkBjaGFyc2V0XCI7dmFyIGY9XCJAdmlld3BvcnRcIjt2YXIgcD1cIkBzdXBwb3J0c1wiO3ZhciBoPVwiQGRvY3VtZW50XCI7dmFyIHY9XCJAbmFtZXNwYWNlXCI7dmFyIGI9XCJAa2V5ZnJhbWVzXCI7dmFyIGQ9XCJAZm9udC1mYWNlXCI7dmFyIHc9XCJAY291bnRlci1zdHlsZVwiO3ZhciBtPVwiQGZvbnQtZmVhdHVyZS12YWx1ZXNcIjt2YXIgZz1cIkBsYXllclwiO3ZhciBrPU1hdGguYWJzO3ZhciAkPVN0cmluZy5mcm9tQ2hhckNvZGU7dmFyIHg9T2JqZWN0LmFzc2lnbjtmdW5jdGlvbiBFKGUscil7cmV0dXJuIE0oZSwwKV40NT8oKChyPDwyXk0oZSwwKSk8PDJeTShlLDEpKTw8Ml5NKGUsMikpPDwyXk0oZSwzKTowfWZ1bmN0aW9uIHkoZSl7cmV0dXJuIGUudHJpbSgpfWZ1bmN0aW9uIFQoZSxyKXtyZXR1cm4oZT1yLmV4ZWMoZSkpP2VbMF06ZX1mdW5jdGlvbiBBKGUscixhKXtyZXR1cm4gZS5yZXBsYWNlKHIsYSl9ZnVuY3Rpb24gTyhlLHIsYSl7cmV0dXJuIGUuaW5kZXhPZihyLGEpfWZ1bmN0aW9uIE0oZSxyKXtyZXR1cm4gZS5jaGFyQ29kZUF0KHIpfDB9ZnVuY3Rpb24gQyhlLHIsYSl7cmV0dXJuIGUuc2xpY2UocixhKX1mdW5jdGlvbiBSKGUpe3JldHVybiBlLmxlbmd0aH1mdW5jdGlvbiBTKGUpe3JldHVybiBlLmxlbmd0aH1mdW5jdGlvbiB6KGUscil7cmV0dXJuIHIucHVzaChlKSxlfWZ1bmN0aW9uIE4oZSxyKXtyZXR1cm4gZS5tYXAocikuam9pbihcIlwiKX1mdW5jdGlvbiBQKGUscil7cmV0dXJuIGUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4hVChlLHIpfSkpfWUubGluZT0xO2UuY29sdW1uPTE7ZS5sZW5ndGg9MDtlLnBvc2l0aW9uPTA7ZS5jaGFyYWN0ZXI9MDtlLmNoYXJhY3RlcnM9XCJcIjtmdW5jdGlvbiBqKHIsYSxjLG4sdCxzLGksdSl7cmV0dXJue3ZhbHVlOnIscm9vdDphLHBhcmVudDpjLHR5cGU6bixwcm9wczp0LGNoaWxkcmVuOnMsbGluZTplLmxpbmUsY29sdW1uOmUuY29sdW1uLGxlbmd0aDppLHJldHVybjpcIlwiLHNpYmxpbmdzOnV9fWZ1bmN0aW9uIFUoZSxyKXtyZXR1cm4geChqKFwiXCIsbnVsbCxudWxsLFwiXCIsbnVsbCxudWxsLDAsZS5zaWJsaW5ncyksZSx7bGVuZ3RoOi1lLmxlbmd0aH0scil9ZnVuY3Rpb24gXyhlKXt3aGlsZShlLnJvb3QpZT1VKGUucm9vdCx7Y2hpbGRyZW46W2VdfSk7eihlLGUuc2libGluZ3MpfWZ1bmN0aW9uIEYoKXtyZXR1cm4gZS5jaGFyYWN0ZXJ9ZnVuY3Rpb24gSSgpe2UuY2hhcmFjdGVyPWUucG9zaXRpb24+MD9NKGUuY2hhcmFjdGVycywtLWUucG9zaXRpb24pOjA7aWYoZS5jb2x1bW4tLSxlLmNoYXJhY3Rlcj09PTEwKWUuY29sdW1uPTEsZS5saW5lLS07cmV0dXJuIGUuY2hhcmFjdGVyfWZ1bmN0aW9uIEwoKXtlLmNoYXJhY3Rlcj1lLnBvc2l0aW9uPGUubGVuZ3RoP00oZS5jaGFyYWN0ZXJzLGUucG9zaXRpb24rKyk6MDtpZihlLmNvbHVtbisrLGUuY2hhcmFjdGVyPT09MTApZS5jb2x1bW49MSxlLmxpbmUrKztyZXR1cm4gZS5jaGFyYWN0ZXJ9ZnVuY3Rpb24gRCgpe3JldHVybiBNKGUuY2hhcmFjdGVycyxlLnBvc2l0aW9uKX1mdW5jdGlvbiBZKCl7cmV0dXJuIGUucG9zaXRpb259ZnVuY3Rpb24gSyhyLGEpe3JldHVybiBDKGUuY2hhcmFjdGVycyxyLGEpfWZ1bmN0aW9uIFYoZSl7c3dpdGNoKGUpe2Nhc2UgMDpjYXNlIDk6Y2FzZSAxMDpjYXNlIDEzOmNhc2UgMzI6cmV0dXJuIDU7Y2FzZSAzMzpjYXNlIDQzOmNhc2UgNDQ6Y2FzZSA0NzpjYXNlIDYyOmNhc2UgNjQ6Y2FzZSAxMjY6Y2FzZSA1OTpjYXNlIDEyMzpjYXNlIDEyNTpyZXR1cm4gNDtjYXNlIDU4OnJldHVybiAzO2Nhc2UgMzQ6Y2FzZSAzOTpjYXNlIDQwOmNhc2UgOTE6cmV0dXJuIDI7Y2FzZSA0MTpjYXNlIDkzOnJldHVybiAxfXJldHVybiAwfWZ1bmN0aW9uIFcocil7cmV0dXJuIGUubGluZT1lLmNvbHVtbj0xLGUubGVuZ3RoPVIoZS5jaGFyYWN0ZXJzPXIpLGUucG9zaXRpb249MCxbXX1mdW5jdGlvbiBCKHIpe3JldHVybiBlLmNoYXJhY3RlcnM9XCJcIixyfWZ1bmN0aW9uIEcocil7cmV0dXJuIHkoSyhlLnBvc2l0aW9uLTEsUShyPT09OTE/cisyOnI9PT00MD9yKzE6cikpKX1mdW5jdGlvbiBIKGUpe3JldHVybiBCKHEoVyhlKSkpfWZ1bmN0aW9uIFoocil7d2hpbGUoZS5jaGFyYWN0ZXI9RCgpKWlmKGUuY2hhcmFjdGVyPDMzKUwoKTtlbHNlIGJyZWFrO3JldHVybiBWKHIpPjJ8fFYoZS5jaGFyYWN0ZXIpPjM/XCJcIjpcIiBcIn1mdW5jdGlvbiBxKHIpe3doaWxlKEwoKSlzd2l0Y2goVihlLmNoYXJhY3Rlcikpe2Nhc2UgMDp6KGVlKGUucG9zaXRpb24tMSkscik7YnJlYWs7Y2FzZSAyOnooRyhlLmNoYXJhY3Rlcikscik7YnJlYWs7ZGVmYXVsdDp6KCQoZS5jaGFyYWN0ZXIpLHIpfXJldHVybiByfWZ1bmN0aW9uIEoocixhKXt3aGlsZSgtLWEmJkwoKSlpZihlLmNoYXJhY3Rlcjw0OHx8ZS5jaGFyYWN0ZXI+MTAyfHxlLmNoYXJhY3Rlcj41NyYmZS5jaGFyYWN0ZXI8NjV8fGUuY2hhcmFjdGVyPjcwJiZlLmNoYXJhY3Rlcjw5NylicmVhaztyZXR1cm4gSyhyLFkoKSsoYTw2JiZEKCk9PTMyJiZMKCk9PTMyKSl9ZnVuY3Rpb24gUShyKXt3aGlsZShMKCkpc3dpdGNoKGUuY2hhcmFjdGVyKXtjYXNlIHI6cmV0dXJuIGUucG9zaXRpb247Y2FzZSAzNDpjYXNlIDM5OmlmKHIhPT0zNCYmciE9PTM5KVEoZS5jaGFyYWN0ZXIpO2JyZWFrO2Nhc2UgNDA6aWYocj09PTQxKVEocik7YnJlYWs7Y2FzZSA5MjpMKCk7YnJlYWt9cmV0dXJuIGUucG9zaXRpb259ZnVuY3Rpb24gWChyLGEpe3doaWxlKEwoKSlpZihyK2UuY2hhcmFjdGVyPT09NDcrMTApYnJlYWs7ZWxzZSBpZihyK2UuY2hhcmFjdGVyPT09NDIrNDImJkQoKT09PTQ3KWJyZWFrO3JldHVyblwiLypcIitLKGEsZS5wb3NpdGlvbi0xKStcIipcIiskKHI9PT00Nz9yOkwoKSl9ZnVuY3Rpb24gZWUocil7d2hpbGUoIVYoRCgpKSlMKCk7cmV0dXJuIEsocixlLnBvc2l0aW9uKX1mdW5jdGlvbiByZShlKXtyZXR1cm4gQihhZShcIlwiLG51bGwsbnVsbCxudWxsLFtcIlwiXSxlPVcoZSksMCxbMF0sZSkpfWZ1bmN0aW9uIGFlKGUscixhLGMsbix0LHMsaSx1KXt2YXIgbz0wO3ZhciBsPTA7dmFyIGY9czt2YXIgcD0wO3ZhciBoPTA7dmFyIHY9MDt2YXIgYj0xO3ZhciBkPTE7dmFyIHc9MTt2YXIgbT0wO3ZhciBnPVwiXCI7dmFyIHg9bjt2YXIgRT10O3ZhciB5PWM7dmFyIFQ9Zzt3aGlsZShkKXN3aXRjaCh2PW0sbT1MKCkpe2Nhc2UgNDA6aWYodiE9MTA4JiZNKFQsZi0xKT09NTgpe2lmKE8oVCs9QShHKG0pLFwiJlwiLFwiJlxcZlwiKSxcIiZcXGZcIixrKG8/aVtvLTFdOjApKSE9LTEpdz0tMTticmVha31jYXNlIDM0OmNhc2UgMzk6Y2FzZSA5MTpUKz1HKG0pO2JyZWFrO2Nhc2UgOTpjYXNlIDEwOmNhc2UgMTM6Y2FzZSAzMjpUKz1aKHYpO2JyZWFrO2Nhc2UgOTI6VCs9SihZKCktMSw3KTtjb250aW51ZTtjYXNlIDQ3OnN3aXRjaChEKCkpe2Nhc2UgNDI6Y2FzZSA0Nzp6KG5lKFgoTCgpLFkoKSkscixhLHUpLHUpO2JyZWFrO2RlZmF1bHQ6VCs9XCIvXCJ9YnJlYWs7Y2FzZSAxMjMqYjppW28rK109UihUKSp3O2Nhc2UgMTI1KmI6Y2FzZSA1OTpjYXNlIDA6c3dpdGNoKG0pe2Nhc2UgMDpjYXNlIDEyNTpkPTA7Y2FzZSA1OStsOmlmKHc9PS0xKVQ9QShULC9cXGYvZyxcIlwiKTtpZihoPjAmJlIoVCktZil6KGg+MzI/dGUoVCtcIjtcIixjLGEsZi0xLHUpOnRlKEEoVCxcIiBcIixcIlwiKStcIjtcIixjLGEsZi0yLHUpLHUpO2JyZWFrO2Nhc2UgNTk6VCs9XCI7XCI7ZGVmYXVsdDp6KHk9Y2UoVCxyLGEsbyxsLG4saSxnLHg9W10sRT1bXSxmLHQpLHQpO2lmKG09PT0xMjMpaWYobD09PTApYWUoVCxyLHkseSx4LHQsZixpLEUpO2Vsc2Ugc3dpdGNoKHA9PT05OSYmTShULDMpPT09MTEwPzEwMDpwKXtjYXNlIDEwMDpjYXNlIDEwODpjYXNlIDEwOTpjYXNlIDExNTphZShlLHkseSxjJiZ6KGNlKGUseSx5LDAsMCxuLGksZyxuLHg9W10sZixFKSxFKSxuLEUsZixpLGM/eDpFKTticmVhaztkZWZhdWx0OmFlKFQseSx5LHksW1wiXCJdLEUsMCxpLEUpfX1vPWw9aD0wLGI9dz0xLGc9VD1cIlwiLGY9czticmVhaztjYXNlIDU4OmY9MStSKFQpLGg9djtkZWZhdWx0OmlmKGI8MSlpZihtPT0xMjMpLS1iO2Vsc2UgaWYobT09MTI1JiZiKys9PTAmJkkoKT09MTI1KWNvbnRpbnVlO3N3aXRjaChUKz0kKG0pLG0qYil7Y2FzZSAzODp3PWw+MD8xOihUKz1cIlxcZlwiLC0xKTticmVhaztjYXNlIDQ0OmlbbysrXT0oUihUKS0xKSp3LHc9MTticmVhaztjYXNlIDY0OmlmKEQoKT09PTQ1KVQrPUcoTCgpKTtwPUQoKSxsPWY9UihnPVQrPWVlKFkoKSkpLG0rKzticmVhaztjYXNlIDQ1OmlmKHY9PT00NSYmUihUKT09MiliPTB9fXJldHVybiB0fWZ1bmN0aW9uIGNlKGUscixhLGMsbixzLGksdSxvLGwsZixwKXt2YXIgaD1uLTE7dmFyIHY9bj09PTA/czpbXCJcIl07dmFyIGI9Uyh2KTtmb3IodmFyIGQ9MCx3PTAsbT0wO2Q8YzsrK2QpZm9yKHZhciBnPTAsJD1DKGUsaCsxLGg9ayh3PWlbZF0pKSx4PWU7ZzxiOysrZylpZih4PXkodz4wP3ZbZ10rXCIgXCIrJDpBKCQsLyZcXGYvZyx2W2ddKSkpb1ttKytdPXg7cmV0dXJuIGooZSxyLGEsbj09PTA/dDp1LG8sbCxmLHApfWZ1bmN0aW9uIG5lKGUscixhLGMpe3JldHVybiBqKGUscixhLG4sJChGKCkpLEMoZSwyLC0yKSwwLGMpfWZ1bmN0aW9uIHRlKGUscixhLGMsbil7cmV0dXJuIGooZSxyLGEscyxDKGUsMCxjKSxDKGUsYysxLC0xKSxjLG4pfWZ1bmN0aW9uIHNlKGUsbix0KXtzd2l0Y2goRShlLG4pKXtjYXNlIDUxMDM6cmV0dXJuIGMrXCJwcmludC1cIitlK2U7Y2FzZSA1NzM3OmNhc2UgNDIwMTpjYXNlIDMxNzc6Y2FzZSAzNDMzOmNhc2UgMTY0MTpjYXNlIDQ0NTc6Y2FzZSAyOTIxOmNhc2UgNTU3MjpjYXNlIDYzNTY6Y2FzZSA1ODQ0OmNhc2UgMzE5MTpjYXNlIDY2NDU6Y2FzZSAzMDA1OmNhc2UgNjM5MTpjYXNlIDU4Nzk6Y2FzZSA1NjIzOmNhc2UgNjEzNTpjYXNlIDQ1OTk6Y2FzZSA0ODU1OmNhc2UgNDIxNTpjYXNlIDYzODk6Y2FzZSA1MTA5OmNhc2UgNTM2NTpjYXNlIDU2MjE6Y2FzZSAzODI5OnJldHVybiBjK2UrZTtjYXNlIDQ3ODk6cmV0dXJuIGErZStlO2Nhc2UgNTM0OTpjYXNlIDQyNDY6Y2FzZSA0ODEwOmNhc2UgNjk2ODpjYXNlIDI3NTY6cmV0dXJuIGMrZSthK2UrcitlK2U7Y2FzZSA1OTM2OnN3aXRjaChNKGUsbisxMSkpe2Nhc2UgMTE0OnJldHVybiBjK2UrcitBKGUsL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFwidGJcIikrZTtjYXNlIDEwODpyZXR1cm4gYytlK3IrQShlLC9bc3ZoXVxcdystW3RibHJdezJ9LyxcInRiLXJsXCIpK2U7Y2FzZSA0NTpyZXR1cm4gYytlK3IrQShlLC9bc3ZoXVxcdystW3RibHJdezJ9LyxcImxyXCIpK2V9Y2FzZSA2ODI4OmNhc2UgNDI2ODpjYXNlIDI5MDM6cmV0dXJuIGMrZStyK2UrZTtjYXNlIDYxNjU6cmV0dXJuIGMrZStyK1wiZmxleC1cIitlK2U7Y2FzZSA1MTg3OnJldHVybiBjK2UrQShlLC8oXFx3KykuKyg6W15dKykvLGMrXCJib3gtJDEkMlwiK3IrXCJmbGV4LSQxJDJcIikrZTtjYXNlIDU0NDM6cmV0dXJuIGMrZStyK1wiZmxleC1pdGVtLVwiK0EoZSwvZmxleC18LXNlbGYvZyxcIlwiKSsoIVQoZSwvZmxleC18YmFzZWxpbmUvKT9yK1wiZ3JpZC1yb3ctXCIrQShlLC9mbGV4LXwtc2VsZi9nLFwiXCIpOlwiXCIpK2U7Y2FzZSA0Njc1OnJldHVybiBjK2UrcitcImZsZXgtbGluZS1wYWNrXCIrQShlLC9hbGlnbi1jb250ZW50fGZsZXgtfC1zZWxmL2csXCJcIikrZTtjYXNlIDU1NDg6cmV0dXJuIGMrZStyK0EoZSxcInNocmlua1wiLFwibmVnYXRpdmVcIikrZTtjYXNlIDUyOTI6cmV0dXJuIGMrZStyK0EoZSxcImJhc2lzXCIsXCJwcmVmZXJyZWQtc2l6ZVwiKStlO2Nhc2UgNjA2MDpyZXR1cm4gYytcImJveC1cIitBKGUsXCItZ3Jvd1wiLFwiXCIpK2MrZStyK0EoZSxcImdyb3dcIixcInBvc2l0aXZlXCIpK2U7Y2FzZSA0NTU0OnJldHVybiBjK0EoZSwvKFteLV0pKHRyYW5zZm9ybSkvZyxcIiQxXCIrYytcIiQyXCIpK2U7Y2FzZSA2MTg3OnJldHVybiBBKEEoQShlLC8oem9vbS18Z3JhYikvLGMrXCIkMVwiKSwvKGltYWdlLXNldCkvLGMrXCIkMVwiKSxlLFwiXCIpK2U7Y2FzZSA1NDk1OmNhc2UgMzk1OTpyZXR1cm4gQShlLC8oaW1hZ2Utc2V0XFwoW15dKikvLGMrXCIkMVwiK1wiJGAkMVwiKTtjYXNlIDQ5Njg6cmV0dXJuIEEoQShlLC8oLis6KShmbGV4LSk/KC4qKS8sYytcImJveC1wYWNrOiQzXCIrcitcImZsZXgtcGFjazokM1wiKSwvcy4rLWJbXjtdKy8sXCJqdXN0aWZ5XCIpK2MrZStlO2Nhc2UgNDIwMDppZighVChlLC9mbGV4LXxiYXNlbGluZS8pKXJldHVybiByK1wiZ3JpZC1jb2x1bW4tYWxpZ25cIitDKGUsbikrZTticmVhaztjYXNlIDI1OTI6Y2FzZSAzMzYwOnJldHVybiByK0EoZSxcInRlbXBsYXRlLVwiLFwiXCIpK2U7Y2FzZSA0Mzg0OmNhc2UgMzYxNjppZih0JiZ0LnNvbWUoKGZ1bmN0aW9uKGUscil7cmV0dXJuIG49cixUKGUucHJvcHMsL2dyaWQtXFx3Ky1lbmQvKX0pKSl7cmV0dXJufk8oZSsodD10W25dLnZhbHVlKSxcInNwYW5cIiwwKT9lOnIrQShlLFwiLXN0YXJ0XCIsXCJcIikrZStyK1wiZ3JpZC1yb3ctc3BhbjpcIisofk8odCxcInNwYW5cIiwwKT9UKHQsL1xcZCsvKTorVCh0LC9cXGQrLyktK1QoZSwvXFxkKy8pKStcIjtcIn1yZXR1cm4gcitBKGUsXCItc3RhcnRcIixcIlwiKStlO2Nhc2UgNDg5NjpjYXNlIDQxMjg6cmV0dXJuIHQmJnQuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIFQoZS5wcm9wcywvZ3JpZC1cXHcrLXN0YXJ0Lyl9KSk/ZTpyK0EoQShlLFwiLWVuZFwiLFwiLXNwYW5cIiksXCJzcGFuIFwiLFwiXCIpK2U7Y2FzZSA0MDk1OmNhc2UgMzU4MzpjYXNlIDQwNjg6Y2FzZSAyNTMyOnJldHVybiBBKGUsLyguKyktaW5saW5lKC4rKS8sYytcIiQxJDJcIikrZTtjYXNlIDgxMTY6Y2FzZSA3MDU5OmNhc2UgNTc1MzpjYXNlIDU1MzU6Y2FzZSA1NDQ1OmNhc2UgNTcwMTpjYXNlIDQ5MzM6Y2FzZSA0Njc3OmNhc2UgNTUzMzpjYXNlIDU3ODk6Y2FzZSA1MDIxOmNhc2UgNDc2NTppZihSKGUpLTEtbj42KXN3aXRjaChNKGUsbisxKSl7Y2FzZSAxMDk6aWYoTShlLG4rNCkhPT00NSlicmVhaztjYXNlIDEwMjpyZXR1cm4gQShlLC8oLis6KSguKyktKFteXSspLyxcIiQxXCIrYytcIiQyLSQzXCIrXCIkMVwiK2ErKE0oZSxuKzMpPT0xMDg/XCIkM1wiOlwiJDItJDNcIikpK2U7Y2FzZSAxMTU6cmV0dXJufk8oZSxcInN0cmV0Y2hcIiwwKT9zZShBKGUsXCJzdHJldGNoXCIsXCJmaWxsLWF2YWlsYWJsZVwiKSxuLHQpK2U6ZX1icmVhaztjYXNlIDUxNTI6Y2FzZSA1OTIwOnJldHVybiBBKGUsLyguKz8pOihcXGQrKShcXHMqXFwvXFxzKihzcGFuKT9cXHMqKFxcZCspKT8oLiopLywoZnVuY3Rpb24oYSxjLG4sdCxzLGksdSl7cmV0dXJuIHIrYytcIjpcIituK3UrKHQ/citjK1wiLXNwYW46XCIrKHM/aToraS0rbikrdTpcIlwiKStlfSkpO2Nhc2UgNDk0OTppZihNKGUsbis2KT09PTEyMSlyZXR1cm4gQShlLFwiOlwiLFwiOlwiK2MpK2U7YnJlYWs7Y2FzZSA2NDQ0OnN3aXRjaChNKGUsTShlLDE0KT09PTQ1PzE4OjExKSl7Y2FzZSAxMjA6cmV0dXJuIEEoZSwvKC4rOikoW147XFxzIV0rKSg7fChcXHMrKT8hLispPy8sXCIkMVwiK2MrKE0oZSwxNCk9PT00NT9cImlubGluZS1cIjpcIlwiKStcImJveCQzXCIrXCIkMVwiK2MrXCIkMiQzXCIrXCIkMVwiK3IrXCIkMmJveCQzXCIpK2U7Y2FzZSAxMDA6cmV0dXJuIEEoZSxcIjpcIixcIjpcIityKStlfWJyZWFrO2Nhc2UgNTcxOTpjYXNlIDI2NDc6Y2FzZSAyMTM1OmNhc2UgMzkyNzpjYXNlIDIzOTE6cmV0dXJuIEEoZSxcInNjcm9sbC1cIixcInNjcm9sbC1zbmFwLVwiKStlfXJldHVybiBlfWZ1bmN0aW9uIGllKGUscil7dmFyIGE9XCJcIjtmb3IodmFyIGM9MDtjPGUubGVuZ3RoO2MrKylhKz1yKGVbY10sYyxlLHIpfHxcIlwiO3JldHVybiBhfWZ1bmN0aW9uIHVlKGUscixhLGMpe3N3aXRjaChlLnR5cGUpe2Nhc2UgZzppZihlLmNoaWxkcmVuLmxlbmd0aClicmVhaztjYXNlIG86Y2FzZSBzOnJldHVybiBlLnJldHVybj1lLnJldHVybnx8ZS52YWx1ZTtjYXNlIG46cmV0dXJuXCJcIjtjYXNlIGI6cmV0dXJuIGUucmV0dXJuPWUudmFsdWUrXCJ7XCIraWUoZS5jaGlsZHJlbixjKStcIn1cIjtjYXNlIHQ6aWYoIVIoZS52YWx1ZT1lLnByb3BzLmpvaW4oXCIsXCIpKSlyZXR1cm5cIlwifXJldHVybiBSKGE9aWUoZS5jaGlsZHJlbixjKSk/ZS5yZXR1cm49ZS52YWx1ZStcIntcIithK1wifVwiOlwiXCJ9ZnVuY3Rpb24gb2UoZSl7dmFyIHI9UyhlKTtyZXR1cm4gZnVuY3Rpb24oYSxjLG4sdCl7dmFyIHM9XCJcIjtmb3IodmFyIGk9MDtpPHI7aSsrKXMrPWVbaV0oYSxjLG4sdCl8fFwiXCI7cmV0dXJuIHN9fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBmdW5jdGlvbihyKXtpZighci5yb290KWlmKHI9ci5yZXR1cm4pZShyKX19ZnVuY3Rpb24gZmUoZSxuLGksdSl7aWYoZS5sZW5ndGg+LTEpaWYoIWUucmV0dXJuKXN3aXRjaChlLnR5cGUpe2Nhc2UgczplLnJldHVybj1zZShlLnZhbHVlLGUubGVuZ3RoLGkpO3JldHVybjtjYXNlIGI6cmV0dXJuIGllKFtVKGUse3ZhbHVlOkEoZS52YWx1ZSxcIkBcIixcIkBcIitjKX0pXSx1KTtjYXNlIHQ6aWYoZS5sZW5ndGgpcmV0dXJuIE4oaT1lLnByb3BzLChmdW5jdGlvbihuKXtzd2l0Y2goVChuLHU9Lyg6OnBsYWNcXHcrfDpyZWFkLVxcdyspLykpe2Nhc2VcIjpyZWFkLW9ubHlcIjpjYXNlXCI6cmVhZC13cml0ZVwiOl8oVShlLHtwcm9wczpbQShuLC86KHJlYWQtXFx3KykvLFwiOlwiK2ErXCIkMVwiKV19KSk7XyhVKGUse3Byb3BzOltuXX0pKTt4KGUse3Byb3BzOlAoaSx1KX0pO2JyZWFrO2Nhc2VcIjo6cGxhY2Vob2xkZXJcIjpfKFUoZSx7cHJvcHM6W0EobiwvOihwbGFjXFx3KykvLFwiOlwiK2MrXCJpbnB1dC0kMVwiKV19KSk7XyhVKGUse3Byb3BzOltBKG4sLzoocGxhY1xcdyspLyxcIjpcIithK1wiJDFcIildfSkpO18oVShlLHtwcm9wczpbQShuLC86KHBsYWNcXHcrKS8scitcImlucHV0LSQxXCIpXX0pKTtfKFUoZSx7cHJvcHM6W25dfSkpO3goZSx7cHJvcHM6UChpLHUpfSk7YnJlYWt9cmV0dXJuXCJcIn0pKX19ZnVuY3Rpb24gcGUoZSl7c3dpdGNoKGUudHlwZSl7Y2FzZSB0OmUucHJvcHM9ZS5wcm9wcy5tYXAoKGZ1bmN0aW9uKHIpe3JldHVybiBOKEgociksKGZ1bmN0aW9uKHIsYSxjKXtzd2l0Y2goTShyLDApKXtjYXNlIDEyOnJldHVybiBDKHIsMSxSKHIpKTtjYXNlIDA6Y2FzZSA0MDpjYXNlIDQzOmNhc2UgNjI6Y2FzZSAxMjY6cmV0dXJuIHI7Y2FzZSA1ODppZihjWysrYV09PT1cImdsb2JhbFwiKWNbYV09XCJcIixjWysrYV09XCJcXGZcIitDKGNbYV0sYT0xLC0xKTtjYXNlIDMyOnJldHVybiBhPT09MT9cIlwiOnI7ZGVmYXVsdDpzd2l0Y2goYSl7Y2FzZSAwOmU9cjtyZXR1cm4gUyhjKT4xP1wiXCI6cjtjYXNlIGE9UyhjKS0xOmNhc2UgMjpyZXR1cm4gYT09PTI/citlK2U6citlO2RlZmF1bHQ6cmV0dXJuIHJ9fX0pKX0pKX19ZS5DSEFSU0VUPWw7ZS5DT01NRU5UPW47ZS5DT1VOVEVSX1NUWUxFPXc7ZS5ERUNMQVJBVElPTj1zO2UuRE9DVU1FTlQ9aDtlLkZPTlRfRkFDRT1kO2UuRk9OVF9GRUFUVVJFX1ZBTFVFUz1tO2UuSU1QT1JUPW87ZS5LRVlGUkFNRVM9YjtlLkxBWUVSPWc7ZS5NRURJQT11O2UuTU9aPWE7ZS5NUz1yO2UuTkFNRVNQQUNFPXY7ZS5QQUdFPWk7ZS5SVUxFU0VUPXQ7ZS5TVVBQT1JUUz1wO2UuVklFV1BPUlQ9ZjtlLldFQktJVD1jO2UuYWJzPWs7ZS5hbGxvYz1XO2UuYXBwZW5kPXo7ZS5hc3NpZ249eDtlLmNhcmV0PVk7ZS5jaGFyPUY7ZS5jaGFyYXQ9TTtlLmNvbWJpbmU9TjtlLmNvbW1lbnQ9bmU7ZS5jb21tZW50ZXI9WDtlLmNvbXBpbGU9cmU7ZS5jb3B5PVU7ZS5kZWFsbG9jPUI7ZS5kZWNsYXJhdGlvbj10ZTtlLmRlbGltaXQ9RztlLmRlbGltaXRlcj1RO2UuZXNjYXBpbmc9SjtlLmZpbHRlcj1QO2UuZnJvbT0kO2UuaGFzaD1FO2UuaWRlbnRpZmllcj1lZTtlLmluZGV4b2Y9TztlLmxpZnQ9XztlLm1hdGNoPVQ7ZS5taWRkbGV3YXJlPW9lO2UubmFtZXNwYWNlPXBlO2UubmV4dD1MO2Uubm9kZT1qO2UucGFyc2U9YWU7ZS5wZWVrPUQ7ZS5wcmVmaXg9c2U7ZS5wcmVmaXhlcj1mZTtlLnByZXY9STtlLnJlcGxhY2U9QTtlLnJ1bGVzZXQ9Y2U7ZS5ydWxlc2hlZXQ9bGU7ZS5zZXJpYWxpemU9aWU7ZS5zaXplb2Y9UztlLnNsaWNlPUs7ZS5zdHJpbmdpZnk9dWU7ZS5zdHJsZW49UjtlLnN1YnN0cj1DO2UudG9rZW49VjtlLnRva2VuaXplPUg7ZS50b2tlbml6ZXI9cTtlLnRyaW09eTtlLndoaXRlc3BhY2U9WjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGlzLmpzLm1hcFxuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPXJlcXVpcmUoXCJ0c2xpYlwiKSx0PXJlcXVpcmUoXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCIpLG49cmVxdWlyZShcInJlYWN0XCIpLHI9cmVxdWlyZShcInNoYWxsb3dlcXVhbFwiKSxvPXJlcXVpcmUoXCJzdHlsaXNcIikscz1yZXF1aXJlKFwiQGVtb3Rpb24vdW5pdGxlc3NcIik7ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gYShlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZSYmT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXtpZihcImRlZmF1bHRcIiE9PW4pe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHIuZ2V0P3I6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbbl19fSl9fSksdC5kZWZhdWx0PWUsT2JqZWN0LmZyZWV6ZSh0KX12YXIgYz0vKiNfX1BVUkVfXyovaSh0KSxsPS8qI19fUFVSRV9fKi9pKG4pLHU9LyojX19QVVJFX18qL2kocikscD0vKiNfX1BVUkVfXyovYShvKSxkPS8qI19fUFVSRV9fKi9pKHMpLGg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52JiYocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFJ8fHByb2Nlc3MuZW52LlNDX0FUVFIpfHxcImRhdGEtc3R5bGVkXCIsZj1cImFjdGl2ZVwiLHk9XCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsbT1cIjYuMS44XCIsdj1cIi8qIXNjKi9cXG5cIixnPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxTPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLHc9e30sXz0vaW52YWxpZCBob29rIGNhbGwvaSxiPW5ldyBTZXQsRT1mdW5jdGlvbih0LHIpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBvPXI/JyB3aXRoIHRoZSBpZCBvZiBcIicuY29uY2F0KHIsJ1wiJyk6XCJcIixzPVwiVGhlIGNvbXBvbmVudCBcIi5jb25jYXQodCkuY29uY2F0KG8sXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5cIikrXCJZb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIixpPWNvbnNvbGUuZXJyb3I7dHJ5e3ZhciBhPSEwO2NvbnNvbGUuZXJyb3I9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKW5bci0xXT1hcmd1bWVudHNbcl07Xy50ZXN0KHQpPyhhPSExLGIuZGVsZXRlKHMpKTppLmFwcGx5KHZvaWQgMCxlLl9fc3ByZWFkQXJyYXkoW3RdLG4sITEpKX0sbi51c2VSZWYoKSxhJiYhYi5oYXMocykmJihjb25zb2xlLndhcm4ocyksYi5hZGQocykpfWNhdGNoKGUpe18udGVzdChlLm1lc3NhZ2UpJiZiLmRlbGV0ZShzKX1maW5hbGx5e2NvbnNvbGUuZXJyb3I9aX19fSxOPU9iamVjdC5mcmVlemUoW10pLFA9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gQyhlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPVApLGUudGhlbWUhPT1uLnRoZW1lJiZlLnRoZW1lfHx0fHxuLnRoZW1lfXZhciBBPW5ldyBTZXQoW1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRyXCIsXCJ0cmFja1wiLFwidVwiLFwidWxcIixcInVzZVwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRzcGFuXCJdKSxJPS9bIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+LV0rL2csTz0vKF4tfC0kKS9nO2Z1bmN0aW9uIHgoZSl7cmV0dXJuIGUucmVwbGFjZShJLFwiLVwiKS5yZXBsYWNlKE8sXCJcIil9dmFyIFQ9LyhhKShkKS9naSxEPTUyLFI9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBqKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PkQ7dD10L0R8MCluPVIodCVEKStuO3JldHVybihSKHQlRCkrbikucmVwbGFjZShULFwiJDEtJDJcIil9dmFyIGssTT01MzgxLFY9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxGPWZ1bmN0aW9uKGUpe3JldHVybiBWKE0sZSl9O2Z1bmN0aW9uIHooZSl7cmV0dXJuIGooRihlKT4+PjApfWZ1bmN0aW9uICQoZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBCKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8ZS5jaGFyQXQoMCk9PT1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKX12YXIgTD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsRz1MP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHE9TD9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsWT17Y2hpbGRDb250ZXh0VHlwZXM6ITAsY29udGV4dFR5cGU6ITAsY29udGV4dFR5cGVzOiEwLGRlZmF1bHRQcm9wczohMCxkaXNwbGF5TmFtZTohMCxnZXREZWZhdWx0UHJvcHM6ITAsZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiEwLGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczohMCxtaXhpbnM6ITAscHJvcFR5cGVzOiEwLHR5cGU6ITB9LFc9e25hbWU6ITAsbGVuZ3RoOiEwLHByb3RvdHlwZTohMCxjYWxsZXI6ITAsY2FsbGVlOiEwLGFyZ3VtZW50czohMCxhcml0eTohMH0sSD17JCR0eXBlb2Y6ITAsY29tcGFyZTohMCxkZWZhdWx0UHJvcHM6ITAsZGlzcGxheU5hbWU6ITAscHJvcFR5cGVzOiEwLHR5cGU6ITB9LFU9KChrPXt9KVtxXT17JCR0eXBlb2Y6ITAscmVuZGVyOiEwLGRlZmF1bHRQcm9wczohMCxkaXNwbGF5TmFtZTohMCxwcm9wVHlwZXM6ITB9LGtbR109SCxrKTtmdW5jdGlvbiBKKGUpe3JldHVybihcInR5cGVcImluKHQ9ZSkmJnQudHlwZS4kJHR5cGVvZik9PT1HP0g6XCIkJHR5cGVvZlwiaW4gZT9VW2UuJCR0eXBlb2ZdOlk7dmFyIHR9dmFyIFg9T2JqZWN0LmRlZmluZVByb3BlcnR5LFo9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsSz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixlZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsdGU9T2JqZWN0LnByb3RvdHlwZTtmdW5jdGlvbiBuZShlLHQsbil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpe2lmKHRlKXt2YXIgcj1lZSh0KTtyJiZyIT09dGUmJm5lKGUscixuKX12YXIgbz1aKHQpO0smJihvPW8uY29uY2F0KEsodCkpKTtmb3IodmFyIHM9SihlKSxpPUoodCksYT0wO2E8by5sZW5ndGg7KythKXt2YXIgYz1vW2FdO2lmKCEoYyBpbiBXfHxuJiZuW2NdfHxpJiZjIGluIGl8fHMmJmMgaW4gcykpe3ZhciBsPVEodCxjKTt0cnl7WChlLGMsbCl9Y2F0Y2goZSl7fX19fXJldHVybiBlfWZ1bmN0aW9uIHJlKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9ZnVuY3Rpb24gb2UoZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJlwic3R5bGVkQ29tcG9uZW50SWRcImluIGV9ZnVuY3Rpb24gc2UoZSx0KXtyZXR1cm4gZSYmdD9cIlwiLmNvbmNhdChlLFwiIFwiKS5jb25jYXQodCk6ZXx8dHx8XCJcIn1mdW5jdGlvbiBpZShlLHQpe2lmKDA9PT1lLmxlbmd0aClyZXR1cm5cIlwiO2Zvcih2YXIgbj1lWzBdLHI9MTtyPGUubGVuZ3RoO3IrKyluKz10P3QrZVtyXTplW3JdO3JldHVybiBufWZ1bmN0aW9uIGFlKGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuY29uc3RydWN0b3IubmFtZT09PU9iamVjdC5uYW1lJiYhKFwicHJvcHNcImluIGUmJmUuJCR0eXBlb2YpfWZ1bmN0aW9uIGNlKGUsdCxuKXtpZih2b2lkIDA9PT1uJiYobj0hMSksIW4mJiFhZShlKSYmIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIHQ7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyllW3JdPWNlKGVbcl0sdFtyXSk7ZWxzZSBpZihhZSh0KSlmb3IodmFyIHIgaW4gdCllW3JdPWNlKGVbcl0sdFtyXSk7cmV0dXJuIGV9ZnVuY3Rpb24gbGUoZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcInRvU3RyaW5nXCIse3ZhbHVlOnR9KX12YXIgdWU9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIiwxODpcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHN1cmUgeW91ciB1c2VUaGVtZSBob29rIGlzIHdpdGhpbiBhIGA8VGhlbWVQcm92aWRlcj5gXCJ9Ont9O2Z1bmN0aW9uIHBlKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWVbdF09YXJndW1lbnRzW3RdO2Zvcih2YXIgbj1lWzBdLHI9W10sbz0xLHM9ZS5sZW5ndGg7bzxzO28rPTEpci5wdXNoKGVbb10pO3JldHVybiByLmZvckVhY2goZnVuY3Rpb24oZSl7bj1uLnJlcGxhY2UoLyVbYS16XS8sZSl9KSxufWZ1bmN0aW9uIGRlKHQpe2Zvcih2YXIgbj1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9tYWluL3BhY2thZ2VzL3N0eWxlZC1jb21wb25lbnRzL3NyYy91dGlscy9lcnJvcnMubWQjXCIuY29uY2F0KHQsXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpLmNvbmNhdChuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiLmNvbmNhdChuLmpvaW4oXCIsIFwiKSk6XCJcIikpOm5ldyBFcnJvcihwZS5hcHBseSh2b2lkIDAsZS5fX3NwcmVhZEFycmF5KFt1ZVt0XV0sbiwhMSkpLnRyaW0oKSl9dmFyIGhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9cmV0dXJuIGUucHJvdG90eXBlLmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LGUucHJvdG90eXBlLmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCl7aWYoZT49dGhpcy5ncm91cFNpemVzLmxlbmd0aCl7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplcyxyPW4ubGVuZ3RoLG89cjtlPj1vOylpZigobzw8PTEpPDApdGhyb3cgZGUoMTYsXCJcIi5jb25jYXQoZSkpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0ocz0wLHQubGVuZ3RoKTtzPGE7cysrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W3NdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LGUucHJvdG90eXBlLmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sZS5wcm90b3R5cGUuZ2V0R3JvdXA9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjtpZihlPj10aGlzLmxlbmd0aHx8MD09PXRoaXMuZ3JvdXBTaXplc1tlXSlyZXR1cm4gdDtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzW2VdLHI9dGhpcy5pbmRleE9mR3JvdXAoZSksbz1yK24scz1yO3M8bztzKyspdCs9XCJcIi5jb25jYXQodGhpcy50YWcuZ2V0UnVsZShzKSkuY29uY2F0KHYpO3JldHVybiB0fSxlfSgpLGZlPW5ldyBNYXAseWU9bmV3IE1hcCxtZT0xLHZlPWZ1bmN0aW9uKGUpe2lmKGZlLmhhcyhlKSlyZXR1cm4gZmUuZ2V0KGUpO2Zvcig7eWUuaGFzKG1lKTspbWUrKzt2YXIgdD1tZSsrO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJigoMHx0KTwwfHx0PjEwNzM3NDE4MjQpKXRocm93IGRlKDE2LFwiXCIuY29uY2F0KHQpKTtyZXR1cm4gZmUuc2V0KGUsdCkseWUuc2V0KHQsZSksdH0sZ2U9ZnVuY3Rpb24oZSx0KXttZT10KzEsZmUuc2V0KGUsdCkseWUuc2V0KHQsZSl9LFNlPVwic3R5bGVbXCIuY29uY2F0KGgsXCJdW1wiKS5jb25jYXQoeSwnPVwiJykuY29uY2F0KG0sJ1wiXScpLHdlPW5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KGgsJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpKSxfZT1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLG89bi5zcGxpdChcIixcIikscz0wLGk9by5sZW5ndGg7czxpO3MrKykocj1vW3NdKSYmZS5yZWdpc3Rlck5hbWUodCxyKX0sYmU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4scj0obnVsbCE9PShuPXQudGV4dENvbnRlbnQpJiZ2b2lkIDAhPT1uP246XCJcIikuc3BsaXQodiksbz1bXSxzPTAsaT1yLmxlbmd0aDtzPGk7cysrKXt2YXIgYT1yW3NdLnRyaW0oKTtpZihhKXt2YXIgYz1hLm1hdGNoKHdlKTtpZihjKXt2YXIgbD0wfHBhcnNlSW50KGNbMV0sMTApLHU9Y1syXTswIT09bCYmKGdlKHUsbCksX2UoZSx1LGNbM10pLGUuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMobCxvKSksby5sZW5ndGg9MH1lbHNlIG8ucHVzaChhKX19fTtmdW5jdGlvbiBFZSgpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfXZhciBOZT1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe3ZhciB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbXCIuY29uY2F0KGgsXCJdXCIpKSk7cmV0dXJuIHRbdC5sZW5ndGgtMV19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoaCxmKSxyLnNldEF0dHJpYnV0ZSh5LG0pO3ZhciBpPUVlKCk7cmV0dXJuIGkmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixpKSxuLmluc2VydEJlZm9yZShyLHMpLHJ9LFBlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmVsZW1lbnQ9TmUoZSksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKSx0aGlzLnNoZWV0PWZ1bmN0aW9uKGUpe2lmKGUuc2hlZXQpcmV0dXJuIGUuc2hlZXQ7Zm9yKHZhciB0PWRvY3VtZW50LnN0eWxlU2hlZXRzLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07aWYoby5vd25lck5vZGU9PT1lKXJldHVybiBvfXRocm93IGRlKDE3KX0odGhpcy5lbGVtZW50KSx0aGlzLmxlbmd0aD0wfXJldHVybiBlLnByb3RvdHlwZS5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sZS5wcm90b3R5cGUuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sZS5wcm90b3R5cGUuZ2V0UnVsZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnNoZWV0LmNzc1J1bGVzW2VdO3JldHVybiB0JiZ0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksQ2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMuZWxlbWVudD1OZShlKSx0aGlzLm5vZGVzPXRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLHRoaXMubGVuZ3RoPTB9cmV0dXJuIGUucHJvdG90eXBlLmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCk7cmV0dXJuIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUobix0aGlzLm5vZGVzW2VdfHxudWxsKSx0aGlzLmxlbmd0aCsrLCEwfXJldHVybiExfSxlLnByb3RvdHlwZS5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSxlLnByb3RvdHlwZS5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxBZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ydWxlcz1bXSx0aGlzLmxlbmd0aD0wfXJldHVybiBlLnByb3RvdHlwZS5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSxlLnByb3RvdHlwZS5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sZS5wcm90b3R5cGUuZ2V0UnVsZT1mdW5jdGlvbihlKXtyZXR1cm4gZTx0aGlzLmxlbmd0aD90aGlzLnJ1bGVzW2VdOlwiXCJ9LGV9KCksSWU9ZyxPZT17aXNTZXJ2ZXI6IWcsdXNlQ1NTT01JbmplY3Rpb246IVN9LHhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4scil7dm9pZCAwPT09dCYmKHQ9UCksdm9pZCAwPT09biYmKG49e30pO3ZhciBvPXRoaXM7dGhpcy5vcHRpb25zPWUuX19hc3NpZ24oZS5fX2Fzc2lnbih7fSxPZSksdCksdGhpcy5ncz1uLHRoaXMubmFtZXM9bmV3IE1hcChyKSx0aGlzLnNlcnZlcj0hIXQuaXNTZXJ2ZXIsIXRoaXMuc2VydmVyJiZnJiZJZSYmKEllPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlKSxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO28mJm8uZ2V0QXR0cmlidXRlKGgpIT09ZiYmKGJlKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpLGxlKHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuZ2V0VGFnKCksbj10Lmxlbmd0aCxyPVwiXCIsbz1mdW5jdGlvbihuKXt2YXIgbz1mdW5jdGlvbihlKXtyZXR1cm4geWUuZ2V0KGUpfShuKTtpZih2b2lkIDA9PT1vKXJldHVyblwiY29udGludWVcIjt2YXIgcz1lLm5hbWVzLmdldChvKSxpPXQuZ2V0R3JvdXAobik7aWYodm9pZCAwPT09c3x8MD09PWkubGVuZ3RoKXJldHVyblwiY29udGludWVcIjt2YXIgYT1cIlwiLmNvbmNhdChoLFwiLmdcIikuY29uY2F0KG4sJ1tpZD1cIicpLmNvbmNhdChvLCdcIl0nKSxjPVwiXCI7dm9pZCAwIT09cyYmcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UubGVuZ3RoPjAmJihjKz1cIlwiLmNvbmNhdChlLFwiLFwiKSl9KSxyKz1cIlwiLmNvbmNhdChpKS5jb25jYXQoYSwne2NvbnRlbnQ6XCInKS5jb25jYXQoYywnXCJ9JykuY29uY2F0KHYpfSxzPTA7czxuO3MrKylvKHMpO3JldHVybiByfShvKX0pfXJldHVybiB0LnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHZlKGUpfSx0LnByb3RvdHlwZS5yZWNvbnN0cnVjdFdpdGhPcHRpb25zPWZ1bmN0aW9uKG4scil7cmV0dXJuIHZvaWQgMD09PXImJihyPSEwKSxuZXcgdChlLl9fYXNzaWduKGUuX19hc3NpZ24oe30sdGhpcy5vcHRpb25zKSxuKSx0aGlzLmdzLHImJnRoaXMubmFtZXN8fHZvaWQgMCl9LHQucHJvdG90eXBlLmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5wcm90b3R5cGUuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS51c2VDU1NPTUluamVjdGlvbixuPWUudGFyZ2V0O3JldHVybiBlLmlzU2VydmVyP25ldyBBZShuKTp0P25ldyBQZShuKTpuZXcgQ2Uobil9KHRoaXMub3B0aW9ucyksbmV3IGhlKGUpKSk7dmFyIGV9LHQucHJvdG90eXBlLmhhc05hbWVGb3JJZD1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm5hbWVzLmhhcyhlKSYmdGhpcy5uYW1lcy5nZXQoZSkuaGFzKHQpfSx0LnByb3RvdHlwZS5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZih2ZShlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0LnByb3RvdHlwZS5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQsbil7dGhpcy5yZWdpc3Rlck5hbWUoZSx0KSx0aGlzLmdldFRhZygpLmluc2VydFJ1bGVzKHZlKGUpLG4pfSx0LnByb3RvdHlwZS5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LnByb3RvdHlwZS5jbGVhclJ1bGVzPWZ1bmN0aW9uKGUpe3RoaXMuZ2V0VGFnKCkuY2xlYXJHcm91cCh2ZShlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LnByb3RvdHlwZS5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdH0oKSxUZT0vJi9nLERlPS9eXFxzKlxcL1xcLy4qJC9nbTtmdW5jdGlvbiBSZShlLHQpe3JldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cInJ1bGVcIj09PWUudHlwZSYmKGUudmFsdWU9XCJcIi5jb25jYXQodCxcIiBcIikuY29uY2F0KGUudmFsdWUpLGUudmFsdWU9ZS52YWx1ZS5yZXBsYWNlQWxsKFwiLFwiLFwiLFwiLmNvbmNhdCh0LFwiIFwiKSksZS5wcm9wcz1lLnByb3BzLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIlwiLmNvbmNhdCh0LFwiIFwiKS5jb25jYXQoZSl9KSksQXJyYXkuaXNBcnJheShlLmNoaWxkcmVuKSYmXCJAa2V5ZnJhbWVzXCIhPT1lLnR5cGUmJihlLmNoaWxkcmVuPVJlKGUuY2hpbGRyZW4sdCkpLGV9KX1mdW5jdGlvbiBqZShlKXt2YXIgdCxuLHIsbz12b2lkIDA9PT1lP1A6ZSxzPW8ub3B0aW9ucyxpPXZvaWQgMD09PXM/UDpzLGE9by5wbHVnaW5zLGM9dm9pZCAwPT09YT9OOmEsbD1mdW5jdGlvbihlLHIsbyl7cmV0dXJuIG8uc3RhcnRzV2l0aChuKSYmby5lbmRzV2l0aChuKSYmby5yZXBsYWNlQWxsKG4sXCJcIikubGVuZ3RoPjA/XCIuXCIuY29uY2F0KHQpOmV9LHU9Yy5zbGljZSgpO3UucHVzaChmdW5jdGlvbihlKXtlLnR5cGU9PT1wLlJVTEVTRVQmJmUudmFsdWUuaW5jbHVkZXMoXCImXCIpJiYoZS5wcm9wc1swXT1lLnByb3BzWzBdLnJlcGxhY2UoVGUsbikucmVwbGFjZShyLGwpKX0pLGkucHJlZml4JiZ1LnB1c2gocC5wcmVmaXhlciksdS5wdXNoKHAuc3RyaW5naWZ5KTt2YXIgZD1mdW5jdGlvbihlLG8scyxhKXt2b2lkIDA9PT1vJiYobz1cIlwiKSx2b2lkIDA9PT1zJiYocz1cIlwiKSx2b2lkIDA9PT1hJiYoYT1cIiZcIiksdD1hLG49byxyPW5ldyBSZWdFeHAoXCJcXFxcXCIuY29uY2F0KG4sXCJcXFxcYlwiKSxcImdcIik7dmFyIGM9ZS5yZXBsYWNlKERlLFwiXCIpLGw9cC5jb21waWxlKHN8fG8/XCJcIi5jb25jYXQocyxcIiBcIikuY29uY2F0KG8sXCIgeyBcIikuY29uY2F0KGMsXCIgfVwiKTpjKTtpLm5hbWVzcGFjZSYmKGw9UmUobCxpLm5hbWVzcGFjZSkpO3ZhciBkPVtdO3JldHVybiBwLnNlcmlhbGl6ZShsLHAubWlkZGxld2FyZSh1LmNvbmNhdChwLnJ1bGVzaGVldChmdW5jdGlvbihlKXtyZXR1cm4gZC5wdXNoKGUpfSkpKSksZH07cmV0dXJuIGQuaGFzaD1jLmxlbmd0aD9jLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiB0Lm5hbWV8fGRlKDE1KSxWKGUsdC5uYW1lKX0sTSkudG9TdHJpbmcoKTpcIlwiLGR9dmFyIGtlPW5ldyB4ZSxNZT1qZSgpLFZlPWwuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHtzaG91bGRGb3J3YXJkUHJvcDp2b2lkIDAsc3R5bGVTaGVldDprZSxzdHlsaXM6TWV9KSxGZT1WZS5Db25zdW1lcix6ZT1sLmRlZmF1bHQuY3JlYXRlQ29udGV4dCh2b2lkIDApO2Z1bmN0aW9uICRlKCl7cmV0dXJuIG4udXNlQ29udGV4dChWZSl9ZnVuY3Rpb24gQmUoZSl7dmFyIHQ9bi51c2VTdGF0ZShlLnN0eWxpc1BsdWdpbnMpLHI9dFswXSxvPXRbMV0scz0kZSgpLnN0eWxlU2hlZXQsaT1uLnVzZU1lbW8oZnVuY3Rpb24oKXt2YXIgdD1zO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0sW2UuZGlzYWJsZUNTU09NSW5qZWN0aW9uLGUuc2hlZXQsZS50YXJnZXQsc10pLGE9bi51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIGplKHtvcHRpb25zOntuYW1lc3BhY2U6ZS5uYW1lc3BhY2UscHJlZml4OmUuZW5hYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6cn0pfSxbZS5lbmFibGVWZW5kb3JQcmVmaXhlcyxlLm5hbWVzcGFjZSxyXSk7bi51c2VFZmZlY3QoZnVuY3Rpb24oKXt1LmRlZmF1bHQocixlLnN0eWxpc1BsdWdpbnMpfHxvKGUuc3R5bGlzUGx1Z2lucyl9LFtlLnN0eWxpc1BsdWdpbnNdKTt2YXIgYz1uLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm57c2hvdWxkRm9yd2FyZFByb3A6ZS5zaG91bGRGb3J3YXJkUHJvcCxzdHlsZVNoZWV0Omksc3R5bGlzOmF9fSxbZS5zaG91bGRGb3J3YXJkUHJvcCxpLGFdKTtyZXR1cm4gbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmUuUHJvdmlkZXIse3ZhbHVlOmN9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTphfSxlLmNoaWxkcmVuKSl9dmFyIExlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1NZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiLmNvbmNhdChlKSx0aGlzLnJ1bGVzPXQsbGUodGhpcyxmdW5jdGlvbigpe3Rocm93IGRlKDEyLFN0cmluZyhuLm5hbWUpKX0pfXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1NZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxHZT1mdW5jdGlvbihlKXtyZXR1cm4gZT49XCJBXCImJmU8PVwiWlwifTtmdW5jdGlvbiBxZShlKXtmb3IodmFyIHQ9XCJcIixuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07aWYoMT09PW4mJlwiLVwiPT09ciYmXCItXCI9PT1lWzBdKXJldHVybiBlO0dlKHIpP3QrPVwiLVwiK3IudG9Mb3dlckNhc2UoKTp0Kz1yfXJldHVybiB0LnN0YXJ0c1dpdGgoXCJtcy1cIik/XCItXCIrdDp0fXZhciBZZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ITE9PT1lfHxcIlwiPT09ZX0sV2U9ZnVuY3Rpb24odCl7dmFyIG4scixvPVtdO2Zvcih2YXIgcyBpbiB0KXt2YXIgaT10W3NdO3QuaGFzT3duUHJvcGVydHkocykmJiFZZShpKSYmKEFycmF5LmlzQXJyYXkoaSkmJmkuaXNDc3N8fHJlKGkpP28ucHVzaChcIlwiLmNvbmNhdChxZShzKSxcIjpcIiksaSxcIjtcIik6YWUoaSk/by5wdXNoLmFwcGx5KG8sZS5fX3NwcmVhZEFycmF5KGUuX19zcHJlYWRBcnJheShbXCJcIi5jb25jYXQocyxcIiB7XCIpXSxXZShpKSwhMSksW1wifVwiXSwhMSkpOm8ucHVzaChcIlwiLmNvbmNhdChxZShzKSxcIjogXCIpLmNvbmNhdCgobj1zLG51bGw9PShyPWkpfHxcImJvb2xlYW5cIj09dHlwZW9mIHJ8fFwiXCI9PT1yP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHJ8fDA9PT1yfHxuIGluIGQuZGVmYXVsdHx8bi5zdGFydHNXaXRoKFwiLS1cIik/U3RyaW5nKHIpLnRyaW0oKTpcIlwiLmNvbmNhdChyLFwicHhcIikpLFwiO1wiKSkpfXJldHVybiBvfTtmdW5jdGlvbiBIZShlLHQsbixyKXtpZihZZShlKSlyZXR1cm5bXTtpZihvZShlKSlyZXR1cm5bXCIuXCIuY29uY2F0KGUuc3R5bGVkQ29tcG9uZW50SWQpXTtpZihyZShlKSl7aWYoIXJlKHM9ZSl8fHMucHJvdG90eXBlJiZzLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhdClyZXR1cm5bZV07dmFyIG89ZSh0KTtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxcIm9iamVjdFwiIT10eXBlb2Ygb3x8QXJyYXkuaXNBcnJheShvKXx8byBpbnN0YW5jZW9mIExlfHxhZShvKXx8bnVsbD09PW98fGNvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoJChlKSxcIiBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXCIpKSxIZShvLHQsbixyKX12YXIgcztyZXR1cm4gZSBpbnN0YW5jZW9mIExlP24/KGUuaW5qZWN0KG4sciksW2UuZ2V0TmFtZShyKV0pOltlXTphZShlKT9XZShlKTpBcnJheS5pc0FycmF5KGUpP0FycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoTixlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gSGUoZSx0LG4scil9KSk6W2UudG9TdHJpbmcoKV19ZnVuY3Rpb24gVWUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKHJlKG4pJiYhb2UobikpcmV0dXJuITF9cmV0dXJuITB9dmFyIEplPUYobSksWGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJlVlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPVYoSmUsdCksdGhpcy5iYXNlU3R5bGU9bix4ZS5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5iYXNlU3R5bGU/dGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pOlwiXCI7aWYodGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHRoaXMuY29tcG9uZW50SWQsdGhpcy5zdGF0aWNSdWxlc0lkKSlyPXNlKHIsdGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBvPWllKEhlKHRoaXMucnVsZXMsZSx0LG4pKSxzPWooVih0aGlzLmJhc2VIYXNoLG8pPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHRoaXMuY29tcG9uZW50SWQscykpe3ZhciBpPW4obyxcIi5cIi5jb25jYXQocyksdm9pZCAwLHRoaXMuY29tcG9uZW50SWQpO3QuaW5zZXJ0UnVsZXModGhpcy5jb21wb25lbnRJZCxzLGkpfXI9c2UocixzKSx0aGlzLnN0YXRpY1J1bGVzSWQ9c31lbHNle2Zvcih2YXIgYT1WKHRoaXMuYmFzZUhhc2gsbi5oYXNoKSxjPVwiXCIsbD0wO2w8dGhpcy5ydWxlcy5sZW5ndGg7bCsrKXt2YXIgdT10aGlzLnJ1bGVzW2xdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB1KWMrPXUsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGE9VihhLHUpKTtlbHNlIGlmKHUpe3ZhciBwPWllKEhlKHUsZSx0LG4pKTthPVYoYSxwK2wpLGMrPXB9fWlmKGMpe3ZhciBkPWooYT4+PjApO3QuaGFzTmFtZUZvcklkKHRoaXMuY29tcG9uZW50SWQsZCl8fHQuaW5zZXJ0UnVsZXModGhpcy5jb21wb25lbnRJZCxkLG4oYyxcIi5cIi5jb25jYXQoZCksdm9pZCAwLHRoaXMuY29tcG9uZW50SWQpKSxyPXNlKHIsZCl9fXJldHVybiByfSxlfSgpLFplPWwuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHZvaWQgMCksS2U9WmUuQ29uc3VtZXIsUWU9e30sZXQ9bmV3IFNldDtmdW5jdGlvbiB0dCh0LHIsbyl7dmFyIHM9b2UodCksaT10LGE9IUIodCksdT1yLmF0dHJzLHA9dm9pZCAwPT09dT9OOnUsZD1yLmNvbXBvbmVudElkLGg9dm9pZCAwPT09ZD9mdW5jdGlvbihlLHQpe3ZhciBuPVwic3RyaW5nXCIhPXR5cGVvZiBlP1wic2NcIjp4KGUpO1FlW25dPShRZVtuXXx8MCkrMTt2YXIgcj1cIlwiLmNvbmNhdChuLFwiLVwiKS5jb25jYXQoeihtK24rUWVbbl0pKTtyZXR1cm4gdD9cIlwiLmNvbmNhdCh0LFwiLVwiKS5jb25jYXQocik6cn0oci5kaXNwbGF5TmFtZSxyLnBhcmVudENvbXBvbmVudElkKTpkLGY9ci5kaXNwbGF5TmFtZSx5PXZvaWQgMD09PWY/ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSk/XCJzdHlsZWQuXCIuY29uY2F0KGUpOlwiU3R5bGVkKFwiLmNvbmNhdCgkKGUpLFwiKVwiKX0odCk6Zix2PXIuZGlzcGxheU5hbWUmJnIuY29tcG9uZW50SWQ/XCJcIi5jb25jYXQoeChyLmRpc3BsYXlOYW1lKSxcIi1cIikuY29uY2F0KHIuY29tcG9uZW50SWQpOnIuY29tcG9uZW50SWR8fGgsZz1zJiZpLmF0dHJzP2kuYXR0cnMuY29uY2F0KHApLmZpbHRlcihCb29sZWFuKTpwLFM9ci5zaG91bGRGb3J3YXJkUHJvcDtpZihzJiZpLnNob3VsZEZvcndhcmRQcm9wKXt2YXIgdz1pLnNob3VsZEZvcndhcmRQcm9wO2lmKHIuc2hvdWxkRm9yd2FyZFByb3Ape3ZhciBfPXIuc2hvdWxkRm9yd2FyZFByb3A7Uz1mdW5jdGlvbihlLHQpe3JldHVybiB3KGUsdCkmJl8oZSx0KX19ZWxzZSBTPXd9dmFyIGI9bmV3IFhlKG8sdixzP2kuY29tcG9uZW50U3R5bGU6dm9pZCAwKTtmdW5jdGlvbiBJKHQscil7cmV0dXJuIGZ1bmN0aW9uKHQscixvKXt2YXIgcz10LmF0dHJzLGk9dC5jb21wb25lbnRTdHlsZSxhPXQuZGVmYXVsdFByb3BzLHU9dC5mb2xkZWRDb21wb25lbnRJZHMscD10LnN0eWxlZENvbXBvbmVudElkLGQ9dC50YXJnZXQsaD1sLmRlZmF1bHQudXNlQ29udGV4dChaZSksZj0kZSgpLHk9dC5zaG91bGRGb3J3YXJkUHJvcHx8Zi5zaG91bGRGb3J3YXJkUHJvcDtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZuLnVzZURlYnVnVmFsdWUocCk7dmFyIG09QyhyLGgsYSl8fFAsdj1mdW5jdGlvbih0LG4scil7Zm9yKHZhciBvLHM9ZS5fX2Fzc2lnbihlLl9fYXNzaWduKHt9LG4pLHtjbGFzc05hbWU6dm9pZCAwLHRoZW1lOnJ9KSxpPTA7aTx0Lmxlbmd0aDtpKz0xKXt2YXIgYT1yZShvPXRbaV0pP28ocyk6bztmb3IodmFyIGMgaW4gYSlzW2NdPVwiY2xhc3NOYW1lXCI9PT1jP3NlKHNbY10sYVtjXSk6XCJzdHlsZVwiPT09Yz9lLl9fYXNzaWduKGUuX19hc3NpZ24oe30sc1tjXSksYVtjXSk6YVtjXX1yZXR1cm4gbi5jbGFzc05hbWUmJihzLmNsYXNzTmFtZT1zZShzLmNsYXNzTmFtZSxuLmNsYXNzTmFtZSkpLHN9KHMscixtKSxnPXYuYXN8fGQsUz17fTtmb3IodmFyIHcgaW4gdil2b2lkIDA9PT12W3ddfHxcIiRcIj09PXdbMF18fFwiYXNcIj09PXd8fFwidGhlbWVcIj09PXcmJnYudGhlbWU9PT1tfHwoXCJmb3J3YXJkZWRBc1wiPT09dz9TLmFzPXYuZm9yd2FyZGVkQXM6eSYmIXkodyxnKXx8KFNbd109dlt3XSx5fHxcImRldmVsb3BtZW50XCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8Yy5kZWZhdWx0KHcpfHxldC5oYXModyl8fCFBLmhhcyhnKXx8KGV0LmFkZCh3KSxjb25zb2xlLndhcm4oJ3N0eWxlZC1jb21wb25lbnRzOiBpdCBsb29rcyBsaWtlIGFuIHVua25vd24gcHJvcCBcIicuY29uY2F0KHcsJ1wiIGlzIGJlaW5nIHNlbnQgdGhyb3VnaCB0byB0aGUgRE9NLCB3aGljaCB3aWxsIGxpa2VseSB0cmlnZ2VyIGEgUmVhY3QgY29uc29sZSBlcnJvci4gSWYgeW91IHdvdWxkIGxpa2UgYXV0b21hdGljIGZpbHRlcmluZyBvZiB1bmtub3duIHByb3BzLCB5b3UgY2FuIG9wdC1pbnRvIHRoYXQgYmVoYXZpb3IgdmlhIGA8U3R5bGVTaGVldE1hbmFnZXIgc2hvdWxkRm9yd2FyZFByb3A9ey4uLn0+YCAoY29ubmVjdCBhbiBBUEkgbGlrZSBgQGVtb3Rpb24vaXMtcHJvcC12YWxpZGApIG9yIGNvbnNpZGVyIHVzaW5nIHRyYW5zaWVudCBwcm9wcyAoYCRgIHByZWZpeCBmb3IgYXV0b21hdGljIGZpbHRlcmluZy4pJykpKSkpO3ZhciBfPWZ1bmN0aW9uKGUsdCl7dmFyIHI9JGUoKSxvPWUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModCxyLnN0eWxlU2hlZXQsci5zdHlsaXMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJm4udXNlRGVidWdWYWx1ZShvKSxvfShpLHYpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQud2FyblRvb01hbnlDbGFzc2VzJiZ0Lndhcm5Ub29NYW55Q2xhc3NlcyhfKTt2YXIgYj1zZSh1LHApO3JldHVybiBfJiYoYis9XCIgXCIrXyksdi5jbGFzc05hbWUmJihiKz1cIiBcIit2LmNsYXNzTmFtZSksU1tCKGcpJiYhQS5oYXMoZyk/XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJdPWIsUy5yZWY9byxuLmNyZWF0ZUVsZW1lbnQoZyxTKX0oTyx0LHIpfUkuZGlzcGxheU5hbWU9eTt2YXIgTz1sLmRlZmF1bHQuZm9yd2FyZFJlZihJKTtyZXR1cm4gTy5hdHRycz1nLE8uY29tcG9uZW50U3R5bGU9YixPLmRpc3BsYXlOYW1lPXksTy5zaG91bGRGb3J3YXJkUHJvcD1TLE8uZm9sZGVkQ29tcG9uZW50SWRzPXM/c2UoaS5mb2xkZWRDb21wb25lbnRJZHMsaS5zdHlsZWRDb21wb25lbnRJZCk6XCJcIixPLnN0eWxlZENvbXBvbmVudElkPXYsTy50YXJnZXQ9cz9pLnRhcmdldDp0LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbihlKXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9cz9mdW5jdGlvbihlKXtmb3IodmFyIHQ9W10sbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTtmb3IodmFyIHI9MCxvPXQ7cjxvLmxlbmd0aDtyKyspY2UoZSxvW3JdLCEwKTtyZXR1cm4gZX0oe30saS5kZWZhdWx0UHJvcHMsZSk6ZX19KSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoRSh5LHYpLE8ud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIHM9dD8nIHdpdGggdGhlIGlkIG9mIFwiJy5jb25jYXQodCwnXCInKTpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgXCIuY29uY2F0KDIwMCxcIiBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIpLmNvbmNhdChlKS5jb25jYXQocyxcIi5cXG5cIikrXCJDb25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbkV4YW1wbGU6XFxuICBjb25zdCBDb21wb25lbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHByb3BzID0+ICh7XFxuICAgIHN0eWxlOiB7XFxuICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4gICAgfSxcXG4gIH0pKWB3aWR0aDogMTAwJTtgXFxuXFxuICA8Q29tcG9uZW50IC8+XCIpLHI9ITAsbj17fX19fSh5LHYpKSxsZShPLGZ1bmN0aW9uKCl7cmV0dXJuXCIuXCIuY29uY2F0KE8uc3R5bGVkQ29tcG9uZW50SWQpfSksYSYmbmUoTyx0LHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwfSksT31mdW5jdGlvbiBudChlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn12YXIgcnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5hc3NpZ24oZSx7aXNDc3M6ITB9KX07ZnVuY3Rpb24gb3QodCl7Zm9yKHZhciBuPVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKW5bci0xXT1hcmd1bWVudHNbcl07aWYocmUodCl8fGFlKHQpKXJldHVybiBydChIZShudChOLGUuX19zcHJlYWRBcnJheShbdF0sbiwhMCkpKSk7dmFyIG89dDtyZXR1cm4gMD09PW4ubGVuZ3RoJiYxPT09by5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBvWzBdP0hlKG8pOnJ0KEhlKG50KG8sbikpKX1mdW5jdGlvbiBzdCh0LG4scil7aWYodm9pZCAwPT09ciYmKHI9UCksIW4pdGhyb3cgZGUoMSxuKTt2YXIgbz1mdW5jdGlvbihvKXtmb3IodmFyIHM9W10saT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspc1tpLTFdPWFyZ3VtZW50c1tpXTtyZXR1cm4gdChuLHIsb3QuYXBwbHkodm9pZCAwLGUuX19zcHJlYWRBcnJheShbb10scywhMSkpKX07cmV0dXJuIG8uYXR0cnM9ZnVuY3Rpb24obyl7cmV0dXJuIHN0KHQsbixlLl9fYXNzaWduKGUuX19hc3NpZ24oe30scikse2F0dHJzOkFycmF5LnByb3RvdHlwZS5jb25jYXQoci5hdHRycyxvKS5maWx0ZXIoQm9vbGVhbil9KSl9LG8ud2l0aENvbmZpZz1mdW5jdGlvbihvKXtyZXR1cm4gc3QodCxuLGUuX19hc3NpZ24oZS5fX2Fzc2lnbih7fSxyKSxvKSl9LG99dmFyIGl0PWZ1bmN0aW9uKGUpe3JldHVybiBzdCh0dCxlKX0sYXQ9aXQ7QS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2F0W2VdPWl0KGUpfSk7dmFyIGN0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1VZShlKSx4ZS5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9cmV0dXJuIGUucHJvdG90eXBlLmNyZWF0ZVN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1yKGllKEhlKHRoaXMucnVsZXMsdCxuLHIpKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sZS5wcm90b3R5cGUucmVtb3ZlU3R5bGVzPWZ1bmN0aW9uKGUsdCl7dC5jbGVhclJ1bGVzKHRoaXMuY29tcG9uZW50SWQrZSl9LGUucHJvdG90eXBlLnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJnhlLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpLGx0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3ZhciB0PXRoaXM7dGhpcy5fZW1pdFNoZWV0Q1NTPWZ1bmN0aW9uKCl7dmFyIGU9dC5pbnN0YW5jZS50b1N0cmluZygpLG49RWUoKSxyPWllKFtuJiYnbm9uY2U9XCInLmNvbmNhdChuLCdcIicpLFwiXCIuY29uY2F0KGgsJz1cInRydWVcIicpLFwiXCIuY29uY2F0KHksJz1cIicpLmNvbmNhdChtLCdcIicpXS5maWx0ZXIoQm9vbGVhbiksXCIgXCIpO3JldHVyblwiPHN0eWxlIFwiLmNvbmNhdChyLFwiPlwiKS5jb25jYXQoZSxcIjwvc3R5bGU+XCIpfSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe2lmKHQuc2VhbGVkKXRocm93IGRlKDIpO3JldHVybiB0Ll9lbWl0U2hlZXRDU1MoKX0sdGhpcy5nZXRTdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgbjtpZih0LnNlYWxlZCl0aHJvdyBkZSgyKTt2YXIgcj0oKG49e30pW2hdPVwiXCIsblt5XT1tLG4uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e19faHRtbDp0Lmluc3RhbmNlLnRvU3RyaW5nKCl9LG4pLG89RWUoKTtyZXR1cm4gbyYmKHIubm9uY2U9byksW2wuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIixlLl9fYXNzaWduKHt9LHIse2tleTpcInNjLTAtMFwifSkpXX0sdGhpcy5zZWFsPWZ1bmN0aW9uKCl7dC5zZWFsZWQ9ITB9LHRoaXMuaW5zdGFuY2U9bmV3IHhlKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXJldHVybiB0LnByb3RvdHlwZS5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe2lmKHRoaXMuc2VhbGVkKXRocm93IGRlKDIpO3JldHVybiBsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQucHJvdG90eXBlLmludGVybGVhdmVXaXRoTm9kZVN0cmVhbT1mdW5jdGlvbihlKXt0aHJvdyBkZSgzKX0sdH0oKSx1dD17U3R5bGVTaGVldDp4ZSxtYWluU2hlZXQ6a2V9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpO3ZhciBwdD1cIl9fc2MtXCIuY29uY2F0KGgsXCJfX1wiKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93W3B0XXx8KHdpbmRvd1twdF09MCksMT09PXdpbmRvd1twdF0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1twdF0rPTEpLGV4cG9ydHMuU2VydmVyU3R5bGVTaGVldD1sdCxleHBvcnRzLlN0eWxlU2hlZXRDb25zdW1lcj1GZSxleHBvcnRzLlN0eWxlU2hlZXRDb250ZXh0PVZlLGV4cG9ydHMuU3R5bGVTaGVldE1hbmFnZXI9QmUsZXhwb3J0cy5UaGVtZUNvbnN1bWVyPUtlLGV4cG9ydHMuVGhlbWVDb250ZXh0PVplLGV4cG9ydHMuVGhlbWVQcm92aWRlcj1mdW5jdGlvbih0KXt2YXIgcj1sLmRlZmF1bHQudXNlQ29udGV4dChaZSksbz1uLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtpZighdCl0aHJvdyBkZSgxNCk7aWYocmUodCkpe3ZhciByPXQobik7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKG51bGw9PT1yfHxBcnJheS5pc0FycmF5KHIpfHxcIm9iamVjdFwiIT10eXBlb2YgcikpdGhyb3cgZGUoNyk7cmV0dXJuIHJ9aWYoQXJyYXkuaXNBcnJheSh0KXx8XCJvYmplY3RcIiE9dHlwZW9mIHQpdGhyb3cgZGUoOCk7cmV0dXJuIG4/ZS5fX2Fzc2lnbihlLl9fYXNzaWduKHt9LG4pLHQpOnR9KHQudGhlbWUscil9LFt0LnRoZW1lLHJdKTtyZXR1cm4gdC5jaGlsZHJlbj9sLmRlZmF1bHQuY3JlYXRlRWxlbWVudChaZS5Qcm92aWRlcix7dmFsdWU6b30sdC5jaGlsZHJlbik6bnVsbH0sZXhwb3J0cy5fX1BSSVZBVEVfXz11dCxleHBvcnRzLmNyZWF0ZUdsb2JhbFN0eWxlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPW90LmFwcGx5KHZvaWQgMCxlLl9fc3ByZWFkQXJyYXkoW3RdLG4sITEpKSxzPVwic2MtZ2xvYmFsLVwiLmNvbmNhdCh6KEpTT04uc3RyaW5naWZ5KG8pKSksaT1uZXcgY3QobyxzKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZFKHMpO3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PSRlKCksbj1sLmRlZmF1bHQudXNlQ29udGV4dChaZSkscj1sLmRlZmF1bHQudXNlUmVmKHQuc3R5bGVTaGVldC5hbGxvY2F0ZUdTSW5zdGFuY2UocykpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGUuY2hpbGRyZW4pJiZjb25zb2xlLndhcm4oXCJUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCBcIi5jb25jYXQocyxcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZvLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pJiZjb25zb2xlLndhcm4oXCJQbGVhc2UgZG8gbm90IHVzZSBAaW1wb3J0IENTUyBzeW50YXggaW4gY3JlYXRlR2xvYmFsU3R5bGUgYXQgdGhpcyB0aW1lLCBhcyB0aGUgQ1NTT00gQVBJcyB3ZSB1c2UgaW4gcHJvZHVjdGlvbiBkbyBub3QgaGFuZGxlIGl0IHdlbGwuIEluc3RlYWQsIHdlIHJlY29tbWVuZCB1c2luZyBhIGxpYnJhcnkgc3VjaCBhcyByZWFjdC1oZWxtZXQgdG8gaW5qZWN0IGEgdHlwaWNhbCA8bGluaz4gbWV0YSB0YWcgdG8gdGhlIHN0eWxlc2hlZXQsIG9yIHNpbXBseSBlbWJlZGRpbmcgaXQgbWFudWFsbHkgaW4geW91ciBpbmRleC5odG1sIDxoZWFkPiBzZWN0aW9uIGZvciBhIHNpbXBsZXIgYXBwLlwiKSx0LnN0eWxlU2hlZXQuc2VydmVyJiZjKHIsZSx0LnN0eWxlU2hlZXQsbix0LnN0eWxpcyksbC5kZWZhdWx0LnVzZUxheW91dEVmZmVjdChmdW5jdGlvbigpe2lmKCF0LnN0eWxlU2hlZXQuc2VydmVyKXJldHVybiBjKHIsZSx0LnN0eWxlU2hlZXQsbix0LnN0eWxpcyksZnVuY3Rpb24oKXtyZXR1cm4gaS5yZW1vdmVTdHlsZXMocix0LnN0eWxlU2hlZXQpfX0sW3IsZSx0LnN0eWxlU2hlZXQsbix0LnN0eWxpc10pLG51bGx9O2Z1bmN0aW9uIGModCxuLHIsbyxzKXtpZihpLmlzU3RhdGljKWkucmVuZGVyU3R5bGVzKHQsdyxyLHMpO2Vsc2V7dmFyIGM9ZS5fX2Fzc2lnbihlLl9fYXNzaWduKHt9LG4pLHt0aGVtZTpDKG4sbyxhLmRlZmF1bHRQcm9wcyl9KTtpLnJlbmRlclN0eWxlcyh0LGMscixzKX19cmV0dXJuIGwuZGVmYXVsdC5tZW1vKGEpfSxleHBvcnRzLmNzcz1vdCxleHBvcnRzLmRlZmF1bHQ9YXQsZXhwb3J0cy5pc1N0eWxlZENvbXBvbmVudD1vZSxleHBvcnRzLmtleWZyYW1lcz1mdW5jdGlvbih0KXtmb3IodmFyIG49W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO3ZhciBvPWllKG90LmFwcGx5KHZvaWQgMCxlLl9fc3ByZWFkQXJyYXkoW3RdLG4sITEpKSkscz16KG8pO3JldHVybiBuZXcgTGUocyxvKX0sZXhwb3J0cy5zdHlsZWQ9YXQsZXhwb3J0cy51c2VUaGVtZT1mdW5jdGlvbigpe3ZhciBlPW4udXNlQ29udGV4dChaZSk7aWYoIWUpdGhyb3cgZGUoMTgpO3JldHVybiBlfSxleHBvcnRzLnZlcnNpb249bSxleHBvcnRzLndpdGhUaGVtZT1mdW5jdGlvbih0KXt2YXIgbj1sLmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbihuLHIpe3ZhciBvPUMobixsLmRlZmF1bHQudXNlQ29udGV4dChaZSksdC5kZWZhdWx0UHJvcHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PW8mJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInLmNvbmNhdCgkKHQpLCdcIicpKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0LGUuX19hc3NpZ24oe30sbix7dGhlbWU6byxyZWY6cn0pKX0pO3JldHVybiBuLmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiLmNvbmNhdCgkKHQpLFwiKVwiKSxuZShuLHQpfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuY2pzLmpzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJveCwgQm94UHJvcHMsIEJ1dHRvbiwgRm9ybUdyb3VwLCBIMiwgSDMsIEg1LCBJbGx1c3RyYXRpb24sIElucHV0LCBMYWJlbCwgTWFkZVdpdGhMb3ZlLCBNZXNzYWdlQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dpblByb3BzID0ge1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBPckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMTM3LCAxMzgsIDE1NCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkNWQ5O1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnT1InO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHJnYigxMzcsIDEzOCwgMTU0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2Q1ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ3VzdG9tTGFiZWwgPSBzdHlsZWQubGFiZWxgXHJcbiAgY29sb3I6IHJnYigxMzcsIDEzOCwgMTU0KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcqJztcclxuICAgIGNvbG9yOiB2aW9sZXQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBtb3ZlQmFja2dyb3VuZCA9IGtleWZyYW1lc2BcclxuICAwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSBjZW50ZXI7XHJcbiAgfVxyXG4gIDI1JSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgY2VudGVyO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSBjZW50ZXI7XHJcbiAgfVxyXG4gICAgNzUlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSBjZW50ZXI7XHJcbiAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXYgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMzMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgNXB4IDBweCAxNXB4IC01cHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIwNC4yNGRlZywgcHVycGxlIC0wLjA0JSwgdmlvbGV0IDg0LjQ4JSk7XHJcbiAgcGFkZGluZzogNDhweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmID4gKiB7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvOTEzNTUxODUxMjQzMzM1ODAxLzEyMjI1NDMwMzAwOTE5MTEyNDkvc3BhY2UtYmcud2VicD9leD02NjE2OThlYyZpcz02NjA0MjNlYyZobT1hMzhmOGJhYTViZDMzOGE1MGM0MWM1MTBmZmFkMmJhNTQ5MmZjYzBkMDQ0ZGY0OGFkOTFmODViOTI2NDdiNmI5Jik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gNTgwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjY1O1xyXG4gICAgYW5pbWF0aW9uOiAke21vdmVCYWNrZ3JvdW5kfSA3NXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbCBub25lIHJ1bm5pbmc7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogODcwcHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTG9naW46IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcclxuICBjb25zdCBbdGVybXNDaGVja2VkLCBzZXRUZXJtc0NoZWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlQ29tcG9uZW50LCB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xyXG4gIGNvbnN0IHByb3BzID0gKHdpbmRvdyBhcyBhbnkpLl9fQVBQX1NUQVRFX18gYXMgeyBlcnJvck1lc3NhZ2U/OiBzdHJpbmcgfCBudWxsOyBhY3Rpb24/OiBzdHJpbmc7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcclxuICBjb25zdCB7IGFjdGlvbiwgZXJyb3JNZXNzYWdlOiBtZXNzYWdlIH0gPSBwcm9wcztcclxuICBjb25zdCBbcmVnaXN0ZXJNZXNzYWdlLCBzZXRSZWdpc3Rlck1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2ZvcmdvdFBhc3N3b3JkTWVzc2FnZSwgc2V0Rm9yZ290UGFzc3dvcmRNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtyZWdpc3RlclN1Y2Nlc3NNZXNzYWdlLCBzZXRSZWdpc3RlclN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtmb3Jnb3RQYXNzd29yZFN1Y2Nlc3NNZXNzYWdlLCBzZXRGb3Jnb3RQYXNzd29yZFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpblN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ2hlbGxvJyk7XHJcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlZ2lzdGVyU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF0ZXJtc0NoZWNrZWQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBhY2NlcHQgdGhlIHRlcm1zICYgY29uZGl0aW9ucycpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyRm9ybScpIGFzIEhUTUxGb3JtRWxlbWVudDtcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSByZWdpc3RlckZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSByZWdpc3RlckZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZElucHV0ID0gcmVnaXN0ZXJGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJjb25maXJtUGFzc3dvcmRcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGNvbmZpcm1QYXNzd29yZElucHV0LnZhbHVlO1xyXG5cclxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgc2V0UmVnaXN0ZXJNZXNzYWdlKCdQbGVhc2UgZmlsbCBpbiBhbGwgZmllbGRzJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICBzZXRSZWdpc3Rlck1lc3NhZ2UoJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2Vycy8nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3JSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTsgLy8gUGFyc2luZyBlcnJvciByZXNwb25zZSBhcyBKU09OXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUmVzcG9uc2UuZXJyb3IgfHwgJ0ZhaWxlZCB0byByZWdpc3RlciB1c2VyJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFJlZ2lzdGVyTWVzc2FnZSgnJyk7XHJcbiAgICAgIHNldFJlZ2lzdGVyU3VjY2Vzc01lc3NhZ2UoJ1VzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgY29uc29sZS5sb2coJ1VzZXIgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgZW1haWxJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICBwYXNzd29yZElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIGNvbmZpcm1QYXNzd29yZElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdGVyaW5nIHVzZXI6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIHNldFJlZ2lzdGVyTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVGb3Jnb3RQYXNzd29yZFN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3Jnb3RQYXNzd29yZEZvcm0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGZvcmdvdFBhc3N3b3JkRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gZW1haWxJbnB1dC52YWx1ZTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCk7XHJcblxyXG4gICAgaWYgKCFlbWFpbCkge1xyXG4gICAgICBzZXRGb3Jnb3RQYXNzd29yZE1lc3NhZ2UoJ1BsZWFzZSBmaWxsIGluIHlvdXIgZW1haWwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcnMvZm9yZ290LXBhc3N3b3JkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZW1haWxJbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGVycm9yUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUmVzcG9uc2UuZXJyb3IgfHwgJ0ZhaWxlZCB0byBzZW5kIGVtYWlsJyk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0Rm9yZ290UGFzc3dvcmRNZXNzYWdlKCcnKTtcclxuICAgICAgc2V0Rm9yZ290UGFzc3dvcmRTdWNjZXNzTWVzc2FnZSgnRW1haWwgc2VudCBzdWNjZXNzZnVsbHknKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEZvcmdvdFBhc3N3b3JkTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVUZXJtcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Rlcm1zQ2hlY2tlZCA9ICF0ZXJtc0NoZWNrZWQ7XHJcbiAgICBzZXRUZXJtc0NoZWNrZWQobmV3VGVybXNDaGVja2VkKTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlclN1Ym1pdEJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGlmIChyZWdpc3RlckJ0bikge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9ICFuZXdUZXJtc0NoZWNrZWQ7XHJcbiAgICAgIG5ld1Rlcm1zQ2hlY2tlZCA/IChyZWdpc3RlckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJyM2ZTQ2YWUnKSA6IChyZWdpc3RlckJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gJyNjY2NjY2MnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVXaW5kb3cgPSAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD4sIHdpbmRvdzogc3RyaW5nKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luRm9ybScpO1xyXG4gICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdGVyRm9ybScpO1xyXG4gICAgY29uc3QgZm9yZ290UGFzc3dvcmRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZvcmdvdFBhc3N3b3JkRm9ybScpO1xyXG5cclxuICAgIGlmIChsb2dpbkZvcm0gJiYgcmVnaXN0ZXJGb3JtICYmIGZvcmdvdFBhc3N3b3JkRm9ybSkge1xyXG4gICAgICBsb2dpbkZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgcmVnaXN0ZXJGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIGZvcmdvdFBhc3N3b3JkRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgc3dpdGNoICh3aW5kb3cpIHtcclxuICAgICAgICBjYXNlICdsb2dpbic6XHJcbiAgICAgICAgICBsb2dpbkZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdyZWdpc3Rlcic6XHJcbiAgICAgICAgICByZWdpc3RlckZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdmb3Jnb3RQYXNzd29yZCc6XHJcbiAgICAgICAgICBmb3Jnb3RQYXNzd29yZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgICAgICAgYmFja2dyb3VuZDpcclxuICAgICAgICAgICAgJ3VybChodHRwczovL2Nkbi5kaXNjb3JkYXBwLmNvbS9hdHRhY2htZW50cy82NTM5OTc1MTMzNTA3MDkyNTEvMTIyMjgzNzg1Mzg5ODE0OTg4OC9wcm92YUJHX09wYXF1ZS5wbmc/ZXg9NjYxN2FiN2YmaXM9NjYwNTM2N2YmaG09ZjZiOWQzMGJhOWY0NGFkYTkwNWMzMjk1ODI2NmVhYmVlZjc3NzRmZmUzYzdkM2JjMGI5YTc4OGZjYjBjZmQ1OSYpJyxcclxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzUwJSBjZW50ZXInLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICAgICAgICBpbnNldDogJzBweCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9J2xvZ2luX19XcmFwcGVyJ1xyXG4gICAgICA+XHJcbiAgICAgICAgPEJveCBiZz0nd2hpdGUnIGZsZXggYm94U2hhZG93PSdsb2dpbicgd2lkdGg9e1sxLCAyIC8gMywgJ2F1dG8nXX0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnMTBweCcsIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4xKSAxcHggMXB4IDIwcHggNXB4JywgaGVpZ2h0OiAnNTgwcHgnIH19PlxyXG4gICAgICAgICAgPFN0eWxlZERpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMjg0cHgnLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC40KSA1cHggMHB4IDE1cHggLTVweCcsXHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCgyMDQuMjRkZWcsIHB1cnBsZSAtMC4wNCUsIHZpb2xldCA4NC40OCUpJyxcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAnNDhweCcsXHJcbiAgICAgICAgICAgICAgZmxleEdyb3c6IDAsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIMiBmb250V2VpZ2h0PSdib2xkZXInIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzEwcHgnIH19PlxyXG4gICAgICAgICAgICAgIFdlbGNvbWVcclxuICAgICAgICAgICAgPC9IMj5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAnMzBweCcsIGZvbnRTdHlsZTogJ2l0YWxpYycsIG9wYWNpdHk6ICcwLjgnIH19PlVubG9jayBZb3VyIFBvdGVudGlhbCwgRmluZCBZb3VyIEZ1dHVyZSE8L3A+XHJcbiAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9J2xpZ2h0ZXInIG10PSdkZWZhdWx0Jz5cclxuICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgcGFkZGluZzogJzIwcHggMHB4IDIwcHggMjBweCcsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzI0cHgnIH19PlxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZUltYWdlOiAndXJsKGh0dHBzOi8vY2xvdWQuYWRtaW5qcy5jby9pbWFnZXMvbGlzdC1idWxsZXQuc3ZnKScsIGZvbnRTaXplOiAnMTdweCcsIHRleHRTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMykgMXB4IDFweCAzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICBTaWduIGluIHRvIHVubG9jayBleGNsdXNpdmUgam9iIG9wcG9ydHVuaXRpZXMgdGFpbG9yZWQgZm9yIHlvdS5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlSW1hZ2U6ICd1cmwoaHR0cHM6Ly9jbG91ZC5hZG1pbmpzLmNvL2ltYWdlcy9saXN0LWJ1bGxldC5zdmcpJywgZm9udFNpemU6ICcxN3B4JywgdGV4dFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4zKSAxcHggMXB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIENvbm5lY3Qgd2l0aCBhIGRpdmVyc2UgcmFuZ2Ugb2YgZW1wbG95ZXJzIGFuZCBleHBhbmQgeW91ciBwcm9mZXNzaW9uYWwgbmV0d29yay5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgbGlzdFN0eWxlSW1hZ2U6ICd1cmwoaHR0cHM6Ly9jbG91ZC5hZG1pbmpzLmNvL2ltYWdlcy9saXN0LWJ1bGxldC5zdmcpJywgZm9udFNpemU6ICcxN3B4JywgdGV4dFNoYWRvdzogJ3JnYmEoMCwgMCwgMCwgMC4zKSAxcHggMXB4IDNweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgIEFjY2VzcyBwZXJzb25hbGl6ZWQgdG9vbHMgYW5kIHJlc291cmNlcyB0byBzdHJlYW1saW5lIHlvdXIgam9iIGh1bnRpbmcgcHJvY2Vzcy5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9TdHlsZWREaXY+XHJcbiAgICAgICAgICA8Qm94IGlkPSdsb2dpbkZvcm0nIGFzPSdmb3JtJyBvblN1Ym1pdD17aGFuZGxlTG9naW5TdWJtaXR9IG1ldGhvZD0nUE9TVCcgcD0neDMnIGZsZXhHcm93PXsxfSB3aWR0aD17WycxMDAlJywgJzEwMCUnLCAnNDgwcHgnXX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICFtZXNzYWdlID8gJzUwcHgnIDogJzAnLCBtYXJnaW5Ub3A6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogJzI4cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+TG9naW48L2gzPlxyXG4gICAgICAgICAgICAgIDxINSBzdHlsZT17eyBtYXJnaW46IDAgfX0+Q09NUEFOWSBMT0dPPC9INT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHttZXNzYWdlICYmIDxNZXNzYWdlQm94IG15PSdsZycgbWVzc2FnZT17bWVzc2FnZS5zcGxpdCgnICcpLmxlbmd0aCA+IDEgPyBtZXNzYWdlIDogdHJhbnNsYXRlTWVzc2FnZShtZXNzYWdlKX0gdmFyaWFudD0nZGFuZ2VyJyAvPn1cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8Q3VzdG9tTGFiZWwgc3R5bGU9e3sgY29sb3I6ICdyZ2IoMTM3LCAxMzgsIDE1NCknIH19Pnt0cmFuc2xhdGVDb21wb25lbnQoJ0xvZ2luLnByb3BlcnRpZXMuZW1haWwnKX08L0N1c3RvbUxhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fSBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ucHJvcGVydGllcy5lbWFpbCcpfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21MYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JnYigxMzcsIDEzOCwgMTU0KScgfX0+e3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ucHJvcGVydGllcy5wYXNzd29yZCcpfTwvQ3VzdG9tTGFiZWw+eycgJ31cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3B1cnBsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJzAuNicsXHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4zcywgdGV4dC1kZWNvcmF0aW9uIDAuM3MnLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBpZD0ndG9nZ2xlV2luZG93cydcclxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlV2luZG93KGUsICdmb3Jnb3RQYXNzd29yZCcpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ3VuZGVybGluZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLm9wYWNpdHkgPSAnMC42JztcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRm9yZ290IHBhc3N3b3JkP1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPElucHV0IHN0eWxlPXt7IHBhZGRpbmc6ICc4cHgnIH19IHR5cGU9J3Bhc3N3b3JkJyBuYW1lPSdwYXNzd29yZCcgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ucHJvcGVydGllcy5wYXNzd29yZCcpfSBhdXRvQ29tcGxldGU9J25ldy1wYXNzd29yZCcgLz5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMjhweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcsIG1hcmdpblRvcDogJzIwcHgnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjNmU0NmFlJyB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDYwYjYnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNmU0NmFlJztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ubG9naW5CdXR0b24nKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8T3JDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAwcHgnLCBib3JkZXJDb2xvcjogJyNiODY5YjMnLCBjb2xvcjogJyNiODY5YjMnIH19XHJcbiAgICAgICAgICAgICAgICBpZD0ndG9nZ2xlV2luZG93cydcclxuICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVXaW5kb3coZSwgJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2I4NjliMyc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNiODY5YjMnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSAnI2I4NjliMyc7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSBBY2NvdW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IGlkPSdyZWdpc3RlckZvcm0nIGFzPSdmb3JtJyBvblN1Ym1pdD17aGFuZGxlUmVnaXN0ZXJTdWJtaXR9IG1ldGhvZD0nUE9TVCcgcD0neDMnIGZsZXhHcm93PXsxfSB3aWR0aD17WycxMDAlJywgJzEwMCUnLCAnNDgwcHgnXX0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAhcmVnaXN0ZXJNZXNzYWdlICYmICFyZWdpc3RlclN1Y2Nlc3NNZXNzYWdlID8gJzUwcHgnIDogJzAnLCBtYXJnaW5Ub3A6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogJzI4cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRGYW1pbHk6ICdUVE5vcm1zQm9sZCwgUm9ib3RvJyB9fT5SZWdpc3RlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPEg1IHN0eWxlPXt7IG1hcmdpbjogMCB9fT5DT01QQU5ZIExPR088L0g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge3JlZ2lzdGVyTWVzc2FnZSAmJiA8TWVzc2FnZUJveCBteT0nbGcnIG1lc3NhZ2U9e3JlZ2lzdGVyTWVzc2FnZS5zcGxpdCgnICcpLmxlbmd0aCA+IDEgPyByZWdpc3Rlck1lc3NhZ2UgOiB0cmFuc2xhdGVNZXNzYWdlKHJlZ2lzdGVyTWVzc2FnZSl9IHZhcmlhbnQ9J2RhbmdlcicgLz59XHJcbiAgICAgICAgICAgIHtyZWdpc3RlclN1Y2Nlc3NNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICA8TWVzc2FnZUJveCBteT0nbGcnIG1lc3NhZ2U9e3JlZ2lzdGVyU3VjY2Vzc01lc3NhZ2Uuc3BsaXQoJyAnKS5sZW5ndGggPiAxID8gcmVnaXN0ZXJTdWNjZXNzTWVzc2FnZSA6IHRyYW5zbGF0ZU1lc3NhZ2UocmVnaXN0ZXJTdWNjZXNzTWVzc2FnZSl9IHZhcmlhbnQ9J3N1Y2Nlc3MnIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEN1c3RvbUxhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fT57dHJhbnNsYXRlQ29tcG9uZW50KCdFbWFpbCcpfTwvQ3VzdG9tTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9J2VtYWlsJyBzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fSBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9eydFbWFpbCd9IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjRweCcgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBmbGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUxhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fT57dHJhbnNsYXRlQ29tcG9uZW50KCdQYXNzd29yZCcpfTwvQ3VzdG9tTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0gdHlwZT0ncGFzc3dvcmQnIG5hbWU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj17J1Bhc3N3b3JkJ30gYXV0b0NvbXBsZXRlPSduZXctcGFzc3dvcmQnIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBmbGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPEN1c3RvbUxhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fT57J0NvbmZpcm0gUGFzc3dvcmQnfTwvQ3VzdG9tTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0gdHlwZT0ncGFzc3dvcmQnIG5hbWU9J2NvbmZpcm1QYXNzd29yZCcgcGxhY2Vob2xkZXI9eydDb25maXJtIFBhc3N3b3JkJ30gYXV0b0NvbXBsZXRlPSduZXctcGFzc3dvcmQnIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JnYig2OSwgNzAsIDg1KScsIGZvbnRTaXplOiAnMTRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH0gb25DaGFuZ2U9e3RvZ2dsZVRlcm1zfSBzdHlsZT17eyBtYXJnaW46IDAsIG1hcmdpblJpZ2h0OiAnMTZweCcsIGFjY2VudENvbG9yOiAndmlvbGV0JyB9fSAvPkkgYWdyZWUgdG97JyAnfVxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNjksIDcwLCA4NSknIH19PlxyXG4gICAgICAgICAgICAgICAgICBUZXJtcyBvZiBTZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICA8L2E+eycgJ31cclxuICAgICAgICAgICAgICAgIGFuZHsnICd9XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBzdHlsZT17eyBjb2xvcjogJ3JnYig2OSwgNzAsIDg1KScgfX0+XHJcbiAgICAgICAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZ2FwOiAnMjhweCcsIGFsaWduSXRlbXM6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gaWQ9J3JlZ2lzdGVyU3VibWl0QnRuJyB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcsIGJhY2tncm91bmQ6ICcjY2NjY2NjJyB9fSB2YXJpYW50PSdjb250YWluZWQnIGRpc2FibGVkPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIEFjY291bnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8T3JDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAwcHgnLCB0cmFuc2l0aW9uOiAnYWxsIDAuMnMgZWFzZS1pbicsIGJvcmRlckNvbG9yOiAnI2I4NjliMycsIGNvbG9yOiAnI2I4NjliMycgfX1cclxuICAgICAgICAgICAgICAgIGlkPSd0b2dnbGVXaW5kb3dzJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVdpbmRvdyhlLCAnbG9naW4nKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYjg2OWIzJztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2I4NjliMyc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICcjYjg2OWIzJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgaWQ9J2ZvcmdvdFBhc3N3b3JkRm9ybSdcclxuICAgICAgICAgICAgYXM9J2Zvcm0nXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVGb3Jnb3RQYXNzd29yZFN1Ym1pdH1cclxuICAgICAgICAgICAgbWV0aG9kPSdQT1NUJ1xyXG4gICAgICAgICAgICBwPSd4MydcclxuICAgICAgICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgICAgICAgIHdpZHRoPXtbJzEwMCUnLCAnMTAwJScsICc0ODBweCddfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAhZm9yZ290UGFzc3dvcmRNZXNzYWdlICYmICFmb3Jnb3RQYXNzd29yZFN1Y2Nlc3NNZXNzYWdlID8gJzUwcHgnIDogJzAnLCBtYXJnaW5Ub3A6ICcxNXB4JyB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6ICcyOHB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19PlJlc2V0IFBhc3N3b3JkPC9oMz5cclxuICAgICAgICAgICAgICA8SDUgc3R5bGU9e3sgbWFyZ2luOiAwIH19PkNPTVBBTlkgTE9HTzwvSDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Zm9yZ290UGFzc3dvcmRNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICA8TWVzc2FnZUJveCBteT0nbGcnIG1lc3NhZ2U9e2ZvcmdvdFBhc3N3b3JkTWVzc2FnZS5zcGxpdCgnICcpLmxlbmd0aCA+IDEgPyBmb3Jnb3RQYXNzd29yZE1lc3NhZ2UgOiB0cmFuc2xhdGVNZXNzYWdlKGZvcmdvdFBhc3N3b3JkTWVzc2FnZSl9IHZhcmlhbnQ9J2RhbmdlcicgLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2ZvcmdvdFBhc3N3b3JkU3VjY2Vzc01lc3NhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlQm94XHJcbiAgICAgICAgICAgICAgICBteT0nbGcnXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlPXtmb3Jnb3RQYXNzd29yZFN1Y2Nlc3NNZXNzYWdlLnNwbGl0KCcgJykubGVuZ3RoID4gMSA/IGZvcmdvdFBhc3N3b3JkU3VjY2Vzc01lc3NhZ2UgOiB0cmFuc2xhdGVNZXNzYWdlKGZvcmdvdFBhc3N3b3JkU3VjY2Vzc01lc3NhZ2UpfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nc3VjY2VzcydcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxDdXN0b21MYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JnYigxMzcsIDEzOCwgMTU0KScgfX0+e3RyYW5zbGF0ZUNvbXBvbmVudCgnRW1haWwnKX08L0N1c3RvbUxhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fSBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9eydFbWFpbCd9IC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzI4cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAwcHgnLCBtYXJnaW5Ub3A6ICcyMHB4JywgYmFja2dyb3VuZENvbG9yOiAnIzZlNDZhZScsIGNvbG9yOiAnd2hpdGUnLCBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nY29udGFpbmVkJ1xyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyM4MDYwYjYnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjNmU0NmFlJztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgUmVxdWVzdCBQYXNzd29yZCBSZXNldFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxPckNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcsIGJvcmRlckNvbG9yOiAnI2I4NjliMycsIGNvbG9yOiAnI2I4NjliMycgfX1cclxuICAgICAgICAgICAgICAgIGlkPSd0b2dnbGVXaW5kb3dzJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVdpbmRvdyhlLCAnbG9naW4nKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjYjg2OWIzJztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2I4NjliMyc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICcjYjg2OWIzJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAwcHgnLCBib3JkZXJDb2xvcjogJyNiODY5YjMnLCBjb2xvcjogJyNiODY5YjMnIH19XHJcbiAgICAgICAgICAgICAgICBpZD0ndG9nZ2xlV2luZG93cydcclxuICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVXaW5kb3coZSwgJ3JlZ2lzdGVyJyl9XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2I4NjliMyc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJyNiODY5YjMnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSAnI2I4NjliMyc7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIENyZWF0ZSBBY2NvdW50XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6ICcjNkI3NzgxJywgZm9udEZhbWlseTogJ1RUTm9ybXNSZWd1bGFyLCBSb2JvdG8nLCBmb250U2l6ZTogJzEycHgnLCBwYWRkaW5nOiAnMjBweCcsIGxldHRlclNwYWNpbmc6ICcxcHgnIH19PlxyXG4gICAgICAgICAgwqkgSm9iIEhvcml6b24gMjAyNC4gQWxsIHJpZ2h0cyByZXNlcnZlZCB8eycgJ31cclxuICAgICAgICAgIDxhIGhyZWY9JyMnIHN0eWxlPXt7IGNvbG9yOiAnIzIzMDkzOScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIFByaXZhY3kgUG9saWN5XHJcbiAgICAgICAgICA8L2E+eycgJ31cclxuICAgICAgICAgIHwgTWFkZSB3aXRoIPCfkpwgYnkgb3VyIHRlYW1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ2xvZ28xLnBuZyc7XHJcblxyXG5jb25zdCBTaWRlYmFyQnJhbmRpbmc6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcclxuICBjb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkKExpbmspYFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogNDhweCAzMnB4O1xyXG5cclxuICAgICY6aG92ZXIgaDEge1xyXG4gICAgICBjb2xvcjogIzMwNDBkNjtcclxuICAgIH1cclxuICBgO1xyXG5cclxuICBjb25zdCBTdHlsZWRIMSA9IHN0eWxlZC5oMWBcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1heC13aWR0aDogMTcwcHg7XHJcbiAgYDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxTdHlsZWRMaW5rIHRvPXsnL2FkbWluJ30gZGF0YS1jc3M9J3NpZGViYXItbG9nbycgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWV2ZW5seScgfX0+XHJcbiAgICAgICAgPGltZyB3aWR0aD0nNTBweCcgc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiAnNTAlJyB9fSBzcmM9eydodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vZC8xc2VwZ1JkTkhlZEEwUDI3MFNHeWpXUnlOVkVyOTE4aE49czIyMD9hdXRodXNlcj0wJ30gYWx0PSdMb2dvJyAvPlxyXG4gICAgICAgIDxTdHlsZWRIMT57J0pvYiBIb3Jpem9uJ308L1N0eWxlZEgxPlxyXG4gICAgICA8L1N0eWxlZExpbms+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhckJyYW5kaW5nO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEJveFByb3BzLCBCdXR0b24sIEZvcm1Hcm91cCwgSDIsIEg1LCBJbGx1c3RyYXRpb24sIElucHV0LCBMYWJlbCwgTWFkZVdpdGhMb3ZlLCBNZXNzYWdlQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBTaWRlYmFyRm9vdGVyOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxCb3ggbXQ9J2xnJyBtYj0nbWQnIGRhdGEtY3NzPSdzaWRlYmFyLWZvb3Rlcicgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIHBhZGRpbmc6ICcyMHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgPHAgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBnYXA6ICc1cHgnIH19Pk1hZGUgd2l0aCDwn5KZIGJ5IG91ciB0ZWFtPC9wPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyRm9vdGVyO1xyXG4iLCJpbXBvcnQgeyBEcm9wWm9uZSwgRHJvcFpvbmVJdGVtLCBGb3JtR3JvdXAsIExhYmVsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0LCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBFZGl0ID0gKHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSkgPT4ge1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHJlY29yZDtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgY29uc3QgcGF0aCA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGNvbnN0IGtleSA9IGZsYXQuZ2V0KHBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBmaWxlID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVByb3BlcnR5KTtcbiAgICBjb25zdCBbb3JpZ2luYWxLZXksIHNldE9yaWdpbmFsS2V5XSA9IHVzZVN0YXRlKGtleSk7XG4gICAgY29uc3QgW2ZpbGVzVG9VcGxvYWQsIHNldEZpbGVzVG9VcGxvYWRdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGl0IG1lYW5zIG1lYW5zIHRoYXQgc29tZW9uZSBoaXQgc2F2ZSBhbmQgbmV3IGZpbGUgaGFzIGJlZW4gdXBsb2FkZWRcbiAgICAgICAgLy8gaW4gdGhpcyBjYXNlIGZsaWVzVG9VcGxvYWQgc2hvdWxkIGJlIGNsZWFyZWQuXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucyB3aGVuIHVzZXIgdHVybnMgb2ZmIHJlZGlyZWN0IGFmdGVyIG5ldy9lZGl0XG4gICAgICAgIGlmICgodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5ICE9PSBvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiAhb3JpZ2luYWxLZXkpXG4gICAgICAgICAgICB8fCAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycgJiYgQXJyYXkuaXNBcnJheShrZXkpICYmIGtleS5sZW5ndGggIT09IG9yaWdpbmFsS2V5Lmxlbmd0aCkpIHtcbiAgICAgICAgICAgIHNldE9yaWdpbmFsS2V5KGtleSk7XG4gICAgICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKFtdKTtcbiAgICAgICAgfVxuICAgIH0sIFtrZXksIG9yaWdpbmFsS2V5XSk7XG4gICAgY29uc3Qgb25VcGxvYWQgPSAoZmlsZXMpID0+IHtcbiAgICAgICAgc2V0RmlsZXNUb1VwbG9hZChmaWxlcyk7XG4gICAgICAgIG9uQ2hhbmdlKGN1c3RvbS5maWxlUHJvcGVydHksIGZpbGVzKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgbnVsbCk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVNdWx0aVJlbW92ZSA9IChzaW5nbGVLZXkpID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSAoZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmtleVByb3BlcnR5KSB8fCBbXSkuaW5kZXhPZihzaW5nbGVLZXkpO1xuICAgICAgICBjb25zdCBmaWxlc1RvRGVsZXRlID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSkgfHwgW107XG4gICAgICAgIGlmIChwYXRoICYmIHBhdGgubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGgubWFwKChjdXJyZW50UGF0aCwgaSkgPT4gKGkgIT09IGluZGV4ID8gY3VycmVudFBhdGggOiBudWxsKSk7XG4gICAgICAgICAgICBsZXQgbmV3UGFyYW1zID0gZmxhdC5zZXQocmVjb3JkLnBhcmFtcywgY3VzdG9tLmZpbGVzVG9EZWxldGVQcm9wZXJ0eSwgWy4uLmZpbGVzVG9EZWxldGUsIGluZGV4XSk7XG4gICAgICAgICAgICBuZXdQYXJhbXMgPSBmbGF0LnNldChuZXdQYXJhbXMsIGN1c3RvbS5maWxlUGF0aFByb3BlcnR5LCBuZXdQYXRoKTtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgICAgICAuLi5yZWNvcmQsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBuZXdQYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWW91IGNhbm5vdCByZW1vdmUgZmlsZSB3aGVuIHRoZXJlIGFyZSBubyB1cGxvYWRlZCBmaWxlcyB5ZXQnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZSwgeyBvbkNoYW5nZTogb25VcGxvYWQsIG11bHRpcGxlOiBjdXN0b20ubXVsdGlwbGUsIHZhbGlkYXRlOiB7XG4gICAgICAgICAgICAgICAgbWltZVR5cGVzOiBjdXN0b20ubWltZVR5cGVzLFxuICAgICAgICAgICAgICAgIG1heFNpemU6IGN1c3RvbS5tYXhTaXplLFxuICAgICAgICAgICAgfSwgZmlsZXM6IGZpbGVzVG9VcGxvYWQgfSksXG4gICAgICAgICFjdXN0b20ubXVsdGlwbGUgJiYga2V5ICYmIHBhdGggJiYgIWZpbGVzVG9VcGxvYWQubGVuZ3RoICYmIGZpbGUgIT09IG51bGwgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRHJvcFpvbmVJdGVtLCB7IGZpbGVuYW1lOiBrZXksIHNyYzogcGF0aCwgb25SZW1vdmU6IGhhbmRsZVJlbW92ZSB9KSksXG4gICAgICAgIGN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYga2V5Lmxlbmd0aCAmJiBwYXRoID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGtleS5tYXAoKHNpbmdsZUtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2UgcmVtb3ZlIGl0ZW1zIHdlIHNldCBvbmx5IHBhdGggaW5kZXggdG8gbnVsbHMuXG4gICAgICAgICAgICAvLyBrZXkgaXMgc3RpbGwgdGhlcmUuIFRoaXMgaXMgYmVjYXVzZVxuICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byBtYWludGFpbiBhbGwgdGhlIGluZGV4ZXMuIFNvIGhlcmUgd2Ugc2ltcGx5IGZpbHRlciBvdXQgZWxlbWVudHMgd2hpY2hcbiAgICAgICAgICAgIC8vIHdlcmUgcmVtb3ZlZCBhbmQgZGlzcGxheSBvbmx5IHdoYXQgd2FzIGxlZnRcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQYXRoID0gcGF0aFtpbmRleF07XG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsga2V5OiBzaW5nbGVLZXksIGZpbGVuYW1lOiBzaW5nbGVLZXksIHNyYzogcGF0aFtpbmRleF0sIG9uUmVtb3ZlOiAoKSA9PiBoYW5kbGVNdWx0aVJlbW92ZShzaW5nbGVLZXkpIH0pKSA6ICcnO1xuICAgICAgICB9KSkpIDogJycpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBFZGl0O1xuIiwiZXhwb3J0IGNvbnN0IEF1ZGlvTWltZVR5cGVzID0gW1xuICAgICdhdWRpby9hYWMnLFxuICAgICdhdWRpby9taWRpJyxcbiAgICAnYXVkaW8veC1taWRpJyxcbiAgICAnYXVkaW8vbXBlZycsXG4gICAgJ2F1ZGlvL29nZycsXG4gICAgJ2FwcGxpY2F0aW9uL29nZycsXG4gICAgJ2F1ZGlvL29wdXMnLFxuICAgICdhdWRpby93YXYnLFxuICAgICdhdWRpby93ZWJtJyxcbiAgICAnYXVkaW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBWaWRlb01pbWVUeXBlcyA9IFtcbiAgICAndmlkZW8veC1tc3ZpZGVvJyxcbiAgICAndmlkZW8vbXBlZycsXG4gICAgJ3ZpZGVvL29nZycsXG4gICAgJ3ZpZGVvL21wMnQnLFxuICAgICd2aWRlby93ZWJtJyxcbiAgICAndmlkZW8vM2dwcCcsXG4gICAgJ3ZpZGVvLzNncHAyJyxcbl07XG5leHBvcnQgY29uc3QgSW1hZ2VNaW1lVHlwZXMgPSBbXG4gICAgJ2ltYWdlL2JtcCcsXG4gICAgJ2ltYWdlL2dpZicsXG4gICAgJ2ltYWdlL2pwZWcnLFxuICAgICdpbWFnZS9wbmcnLFxuICAgICdpbWFnZS9zdmcreG1sJyxcbiAgICAnaW1hZ2Uvdm5kLm1pY3Jvc29mdC5pY29uJyxcbiAgICAnaW1hZ2UvdGlmZicsXG4gICAgJ2ltYWdlL3dlYnAnLFxuXTtcbmV4cG9ydCBjb25zdCBDb21wcmVzc2VkTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LWJ6aXAyJyxcbiAgICAnYXBwbGljYXRpb24vZ3ppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL2phdmEtYXJjaGl2ZScsXG4gICAgJ2FwcGxpY2F0aW9uL3gtdGFyJyxcbiAgICAnYXBwbGljYXRpb24vemlwJyxcbiAgICAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcbl07XG5leHBvcnQgY29uc3QgRG9jdW1lbnRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYWJpd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtZnJlZWFyYycsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hbWF6b24uZWJvb2snLFxuICAgICdhcHBsaWNhdGlvbi9tc3dvcmQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQud29yZHByb2Nlc3NpbmdtbC5kb2N1bWVudCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1mb250b2JqZWN0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9hc2lzLm9wZW5kb2N1bWVudC50ZXh0JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLXBvd2VycG9pbnQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub3BlbnhtbGZvcm1hdHMtb2ZmaWNlZG9jdW1lbnQucHJlc2VudGF0aW9ubWwucHJlc2VudGF0aW9uJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLnJhcicsXG4gICAgJ2FwcGxpY2F0aW9uL3J0ZicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5zcHJlYWRzaGVldG1sLnNoZWV0Jyxcbl07XG5leHBvcnQgY29uc3QgVGV4dE1pbWVUeXBlcyA9IFtcbiAgICAndGV4dC9jc3MnLFxuICAgICd0ZXh0L2NzdicsXG4gICAgJ3RleHQvaHRtbCcsXG4gICAgJ3RleHQvY2FsZW5kYXInLFxuICAgICd0ZXh0L2phdmFzY3JpcHQnLFxuICAgICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAnYXBwbGljYXRpb24vbGQranNvbicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ3RleHQvcGxhaW4nLFxuICAgICdhcHBsaWNhdGlvbi94aHRtbCt4bWwnLFxuICAgICdhcHBsaWNhdGlvbi94bWwnLFxuICAgICd0ZXh0L3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IEJpbmFyeURvY3NNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL2VwdWIremlwJyxcbiAgICAnYXBwbGljYXRpb24vcGRmJyxcbl07XG5leHBvcnQgY29uc3QgRm9udE1pbWVUeXBlcyA9IFtcbiAgICAnZm9udC9vdGYnLFxuICAgICdmb250L3R0ZicsXG4gICAgJ2ZvbnQvd29mZicsXG4gICAgJ2ZvbnQvd29mZjInLFxuXTtcbmV4cG9ydCBjb25zdCBPdGhlck1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICAnYXBwbGljYXRpb24veC1jc2gnLFxuICAgICdhcHBsaWNhdGlvbi92bmQuYXBwbGUuaW5zdGFsbGVyK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtaHR0cGQtcGhwJyxcbiAgICAnYXBwbGljYXRpb24veC1zaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNoJyxcbiAgICAndm5kLnZpc2lvJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1vemlsbGEueHVsK3htbCcsXG5dO1xuZXhwb3J0IGNvbnN0IE1pbWVUeXBlcyA9IFtcbiAgICAuLi5BdWRpb01pbWVUeXBlcyxcbiAgICAuLi5WaWRlb01pbWVUeXBlcyxcbiAgICAuLi5JbWFnZU1pbWVUeXBlcyxcbiAgICAuLi5Db21wcmVzc2VkTWltZVR5cGVzLFxuICAgIC4uLkRvY3VtZW50TWltZVR5cGVzLFxuICAgIC4uLlRleHRNaW1lVHlwZXMsXG4gICAgLi4uQmluYXJ5RG9jc01pbWVUeXBlcyxcbiAgICAuLi5PdGhlck1pbWVUeXBlcyxcbiAgICAuLi5Gb250TWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuXTtcbiIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXVkaW9NaW1lVHlwZXMsIEltYWdlTWltZVR5cGVzIH0gZnJvbSAnLi4vdHlwZXMvbWltZS10eXBlcy50eXBlLmpzJztcbmNvbnN0IFNpbmdsZUZpbGUgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHBhdGgsIG1pbWVUeXBlLCB3aWR0aCB9ID0gcHJvcHM7XG4gICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGgpIHtcbiAgICAgICAgaWYgKG1pbWVUeXBlICYmIEltYWdlTWltZVR5cGVzLmluY2x1ZGVzKG1pbWVUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHsgc3JjOiBwYXRoLCBzdHlsZTogeyBtYXhIZWlnaHQ6IHdpZHRoLCBtYXhXaWR0aDogd2lkdGggfSwgYWx0OiBuYW1lIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWltZVR5cGUgJiYgQXVkaW9NaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCB7IGNvbnRyb2xzOiB0cnVlLCBzcmM6IHBhdGggfSxcbiAgICAgICAgICAgICAgICBcIllvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IHRoZVwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjb2RlXCIsIG51bGwsIFwiYXVkaW9cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRyYWNrXCIsIHsga2luZDogXCJjYXB0aW9uc1wiIH0pKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEJveCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b24sIHsgYXM6IFwiYVwiLCBocmVmOiBwYXRoLCBtbDogXCJkZWZhdWx0XCIsIHNpemU6IFwic21cIiwgcm91bmRlZDogdHJ1ZSwgdGFyZ2V0OiBcIl9ibGFua1wiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgaWNvbjogXCJEb2N1bWVudERvd25sb2FkXCIsIGNvbG9yOiBcIndoaXRlXCIsIG1yOiBcImRlZmF1bHRcIiB9KSxcbiAgICAgICAgICAgIG5hbWUpKSk7XG59O1xuY29uc3QgRmlsZSA9ICh7IHdpZHRoLCByZWNvcmQsIHByb3BlcnR5IH0pID0+IHtcbiAgICBjb25zdCB7IGN1c3RvbSB9ID0gcHJvcGVydHk7XG4gICAgbGV0IHBhdGggPSBmbGF0LmdldChyZWNvcmQ/LnBhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHkpO1xuICAgIGlmICghcGF0aCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZU5hbWVQcm9wZXJ0eSA/IGN1c3RvbS5maWxlTmFtZVByb3BlcnR5IDogY3VzdG9tLmtleVByb3BlcnR5KTtcbiAgICBjb25zdCBtaW1lVHlwZSA9IGN1c3RvbS5taW1lVHlwZVByb3BlcnR5XG4gICAgICAgICYmIGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20ubWltZVR5cGVQcm9wZXJ0eSk7XG4gICAgaWYgKCFwcm9wZXJ0eS5jdXN0b20ubXVsdGlwbGUpIHtcbiAgICAgICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgICAgIHBhdGggPSBgJHtjdXN0b20ub3B0cy5iYXNlVXJsfS8ke25hbWV9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBwYXRoOiBwYXRoLCBuYW1lOiBuYW1lLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZSB9KSk7XG4gICAgfVxuICAgIGlmIChjdXN0b20ub3B0cyAmJiBjdXN0b20ub3B0cy5iYXNlVXJsKSB7XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSBjdXN0b20ub3B0cy5iYXNlVXJsIHx8ICcnO1xuICAgICAgICBwYXRoID0gcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiBgJHtiYXNlVXJsfS8ke25hbWVbaW5kZXhdfWApO1xuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIHBhdGgubWFwKChzaW5nbGVQYXRoLCBpbmRleCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2luZ2xlRmlsZSwgeyBrZXk6IHNpbmdsZVBhdGgsIHBhdGg6IHNpbmdsZVBhdGgsIG5hbWU6IG5hbWVbaW5kZXhdLCB3aWR0aDogd2lkdGgsIG1pbWVUeXBlOiBtaW1lVHlwZVtpbmRleF0gfSkpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZpbGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IExpc3QgPSAocHJvcHMpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEZpbGUsIHsgd2lkdGg6IDEwMCwgLi4ucHJvcHMgfSkpO1xuZXhwb3J0IGRlZmF1bHQgTGlzdDtcbiIsImltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9maWxlLmpzJztcbmNvbnN0IFNob3cgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5IH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtR3JvdXAsIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGFiZWwsIG51bGwsIHRyYW5zbGF0ZVByb3BlcnR5KHByb3BlcnR5LmxhYmVsLCBwcm9wZXJ0eS5yZXNvdXJjZUlkKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogXCIxMDAlXCIsIC4uLnByb3BzIH0pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2hvdztcbiIsImltcG9ydCB7IEJveCwgQnV0dG9uLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBCYXNlUHJvcGVydHlDb21wb25lbnQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IFBhc3N3b3JkRWRpdCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5LCByZWNvcmQsIHJlc291cmNlIH0gPSBwcm9wcztcbiAgICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbjogdGIgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgW3Nob3dQYXNzd29yZCwgdG9nZ2xlUGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghc2hvd1Bhc3N3b3JkKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShwcm9wZXJ0eS5uYW1lLCAnJyk7XG4gICAgICAgIH1cbiAgICB9LCBbb25DaGFuZ2UsIHNob3dQYXNzd29yZF0pO1xuICAgIC8vIEZvciBuZXcgcmVjb3JkcyBhbHdheXMgc2hvdyB0aGUgcHJvcGVydHlcbiAgICBpZiAoIXJlY29yZC5pZCkge1xuICAgICAgICByZXR1cm4gPEJhc2VQcm9wZXJ0eUNvbXBvbmVudC5QYXNzd29yZC5FZGl0IHsuLi5wcm9wc30vPjtcbiAgICB9XG4gICAgcmV0dXJuICg8Qm94PlxuICAgICAge3Nob3dQYXNzd29yZCAmJiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfS8+fVxuICAgICAgPEJveCBtYj1cInhsXCI+XG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gdG9nZ2xlUGFzc3dvcmQoIXNob3dQYXNzd29yZCl9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIHtzaG93UGFzc3dvcmQgPyB0YignY2FuY2VsJywgcmVzb3VyY2UuaWQpIDogdGIoJ2NoYW5nZVBhc3N3b3JkJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkRWRpdDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwaUNsaWVudCwgdXNlTm90aWNlIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgeyBEcm9wWm9uZUl0ZW0sIExvYWRlciwgQm94LCBCdXR0b24sIERyb3Bab25lLCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuY29uc3QgSW1wb3J0Q29tcG9uZW50ID0gKHsgcmVzb3VyY2UgfSkgPT4ge1xuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHNlbmROb3RpY2UgPSB1c2VOb3RpY2UoKTtcbiAgICBjb25zdCBbaXNGZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBvblVwbG9hZCA9ICh1cGxvYWRlZEZpbGUpID0+IHtcbiAgICAgICAgc2V0RmlsZSh1cGxvYWRlZEZpbGU/LlswXSA/PyBudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydERhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGltcG9ydERhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSwgZmlsZT8ubmFtZSk7XG4gICAgICAgICAgICBhd2FpdCBuZXcgQXBpQ2xpZW50KCkucmVzb3VyY2VBY3Rpb24oe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIHJlc291cmNlSWQ6IHJlc291cmNlLmlkLFxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdpbXBvcnQnLFxuICAgICAgICAgICAgICAgIGRhdGE6IGltcG9ydERhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNlbmROb3RpY2UoeyBtZXNzYWdlOiAnSW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5JywgdHlwZTogJ3N1Y2Nlc3MnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZW5kTm90aWNlKHsgbWVzc2FnZTogZS5tZXNzYWdlLCB0eXBlOiAnZXJyb3InIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGVyIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKDxCb3ggbWFyZ2luPVwiYXV0b1wiIG1heFdpZHRoPXs2MDB9IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICA8RHJvcFpvbmUgZmlsZXM9e1tdfSBvbkNoYW5nZT17b25VcGxvYWR9IG11bHRpcGxlPXtmYWxzZX0vPlxuICAgICAge2ZpbGUgJiYgKDxEcm9wWm9uZUl0ZW0gZmlsZT17ZmlsZX0gZmlsZW5hbWU9e2ZpbGUubmFtZX0gb25SZW1vdmU9eygpID0+IHNldEZpbGUobnVsbCl9Lz4pfVxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgbT17MTB9PlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3VibWl0fSBkaXNhYmxlZD17IWZpbGUgfHwgaXNGZXRjaGluZ30+XG4gICAgICAgICAgVXBsb2FkXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbXBvcnRDb21wb25lbnQ7XG4iLCIoZnVuY3Rpb24oYSxiKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGIpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGV4cG9ydHMpYigpO2Vsc2V7YigpLGEuRmlsZVNhdmVyPXtleHBvcnRzOnt9fS5leHBvcnRzfX0pKHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBiKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIj09dHlwZW9mIGI/Yj17YXV0b0JvbTohMX06XCJvYmplY3RcIiE9dHlwZW9mIGImJihjb25zb2xlLndhcm4oXCJEZXByZWNhdGVkOiBFeHBlY3RlZCB0aGlyZCBhcmd1bWVudCB0byBiZSBhIG9iamVjdFwiKSxiPXthdXRvQm9tOiFifSksYi5hdXRvQm9tJiYvXlxccyooPzp0ZXh0XFwvXFxTKnxhcHBsaWNhdGlvblxcL3htbHxcXFMqXFwvXFxTKlxcK3htbClcXHMqOy4qY2hhcnNldFxccyo9XFxzKnV0Zi04L2kudGVzdChhLnR5cGUpP25ldyBCbG9iKFtcIlxcdUZFRkZcIixhXSx7dHlwZTphLnR5cGV9KTphfWZ1bmN0aW9uIGMoYSxiLGMpe3ZhciBkPW5ldyBYTUxIdHRwUmVxdWVzdDtkLm9wZW4oXCJHRVRcIixhKSxkLnJlc3BvbnNlVHlwZT1cImJsb2JcIixkLm9ubG9hZD1mdW5jdGlvbigpe2coZC5yZXNwb25zZSxiLGMpfSxkLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKFwiY291bGQgbm90IGRvd25sb2FkIGZpbGVcIil9LGQuc2VuZCgpfWZ1bmN0aW9uIGQoYSl7dmFyIGI9bmV3IFhNTEh0dHBSZXF1ZXN0O2Iub3BlbihcIkhFQURcIixhLCExKTt0cnl7Yi5zZW5kKCl9Y2F0Y2goYSl7fXJldHVybiAyMDA8PWIuc3RhdHVzJiYyOTk+PWIuc3RhdHVzfWZ1bmN0aW9uIGUoYSl7dHJ5e2EuZGlzcGF0Y2hFdmVudChuZXcgTW91c2VFdmVudChcImNsaWNrXCIpKX1jYXRjaChjKXt2YXIgYj1kb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO2IuaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLHdpbmRvdywwLDAsMCw4MCwyMCwhMSwhMSwhMSwhMSwwLG51bGwpLGEuZGlzcGF0Y2hFdmVudChiKX19dmFyIGY9XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmd2luZG93LndpbmRvdz09PXdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09dHlwZW9mIHNlbGYmJnNlbGYuc2VsZj09PXNlbGY/c2VsZjpcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwuZ2xvYmFsPT09Z2xvYmFsP2dsb2JhbDp2b2lkIDAsYT1mLm5hdmlnYXRvciYmL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmL0FwcGxlV2ViS2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYhL1NhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxnPWYuc2F2ZUFzfHwoXCJvYmplY3RcIiE9dHlwZW9mIHdpbmRvd3x8d2luZG93IT09Zj9mdW5jdGlvbigpe306XCJkb3dubG9hZFwiaW4gSFRNTEFuY2hvckVsZW1lbnQucHJvdG90eXBlJiYhYT9mdW5jdGlvbihiLGcsaCl7dmFyIGk9Zi5VUkx8fGYud2Via2l0VVJMLGo9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7Zz1nfHxiLm5hbWV8fFwiZG93bmxvYWRcIixqLmRvd25sb2FkPWcsai5yZWw9XCJub29wZW5lclwiLFwic3RyaW5nXCI9PXR5cGVvZiBiPyhqLmhyZWY9YixqLm9yaWdpbj09PWxvY2F0aW9uLm9yaWdpbj9lKGopOmQoai5ocmVmKT9jKGIsZyxoKTplKGosai50YXJnZXQ9XCJfYmxhbmtcIikpOihqLmhyZWY9aS5jcmVhdGVPYmplY3RVUkwoYiksc2V0VGltZW91dChmdW5jdGlvbigpe2kucmV2b2tlT2JqZWN0VVJMKGouaHJlZil9LDRFNCksc2V0VGltZW91dChmdW5jdGlvbigpe2Uoail9LDApKX06XCJtc1NhdmVPck9wZW5CbG9iXCJpbiBuYXZpZ2F0b3I/ZnVuY3Rpb24oZixnLGgpe2lmKGc9Z3x8Zi5uYW1lfHxcImRvd25sb2FkXCIsXCJzdHJpbmdcIiE9dHlwZW9mIGYpbmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IoYihmLGgpLGcpO2Vsc2UgaWYoZChmKSljKGYsZyxoKTtlbHNle3ZhciBpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO2kuaHJlZj1mLGkudGFyZ2V0PVwiX2JsYW5rXCIsc2V0VGltZW91dChmdW5jdGlvbigpe2UoaSl9KX19OmZ1bmN0aW9uKGIsZCxlLGcpe2lmKGc9Z3x8b3BlbihcIlwiLFwiX2JsYW5rXCIpLGcmJihnLmRvY3VtZW50LnRpdGxlPWcuZG9jdW1lbnQuYm9keS5pbm5lclRleHQ9XCJkb3dubG9hZGluZy4uLlwiKSxcInN0cmluZ1wiPT10eXBlb2YgYilyZXR1cm4gYyhiLGQsZSk7dmFyIGg9XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIj09PWIudHlwZSxpPS9jb25zdHJ1Y3Rvci9pLnRlc3QoZi5IVE1MRWxlbWVudCl8fGYuc2FmYXJpLGo9L0NyaU9TXFwvW1xcZF0rLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO2lmKChqfHxoJiZpfHxhKSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXIpe3ZhciBrPW5ldyBGaWxlUmVhZGVyO2sub25sb2FkZW5kPWZ1bmN0aW9uKCl7dmFyIGE9ay5yZXN1bHQ7YT1qP2E6YS5yZXBsYWNlKC9eZGF0YTpbXjtdKjsvLFwiZGF0YTphdHRhY2htZW50L2ZpbGU7XCIpLGc/Zy5sb2NhdGlvbi5ocmVmPWE6bG9jYXRpb249YSxnPW51bGx9LGsucmVhZEFzRGF0YVVSTChiKX1lbHNle3ZhciBsPWYuVVJMfHxmLndlYmtpdFVSTCxtPWwuY3JlYXRlT2JqZWN0VVJMKGIpO2c/Zy5sb2NhdGlvbj1tOmxvY2F0aW9uLmhyZWY9bSxnPW51bGwsc2V0VGltZW91dChmdW5jdGlvbigpe2wucmV2b2tlT2JqZWN0VVJMKG0pfSw0RTQpfX0pO2Yuc2F2ZUFzPWcuc2F2ZUFzPWcsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmKG1vZHVsZS5leHBvcnRzPWcpfSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTYXZlci5taW4uanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwIC8qIFN1bmRheSAqLyxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZXhwb3J0IGNvbnN0IEV4cG9ydGVycyA9IFsnY3N2JywgJ2pzb24nLCAneG1sJ107XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcGlDbGllbnQsIHVzZU5vdGljZSB9IGZyb20gJ2FkbWluanMnO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIExvYWRlciwgVGV4dCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XG5pbXBvcnQgeyBFeHBvcnRlcnMgfSBmcm9tICcuLi9leHBvcnRlci50eXBlLmpzJztcbmV4cG9ydCBjb25zdCBtaW1lVHlwZXMgPSB7XG4gICAganNvbjogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIGNzdjogJ3RleHQvY3N2JyxcbiAgICB4bWw6ICd0ZXh0L3htbCcsXG59O1xuZXhwb3J0IGNvbnN0IGdldEV4cG9ydGVkRmlsZU5hbWUgPSAoZXh0ZW5zaW9uKSA9PiBgZXhwb3J0LSR7Zm9ybWF0KERhdGUubm93KCksICd5eXl5LU1NLWRkX0hILW1tJyl9LiR7ZXh0ZW5zaW9ufWA7XG5jb25zdCBFeHBvcnRDb21wb25lbnQgPSAoeyByZXNvdXJjZSB9KSA9PiB7XG4gICAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldEZldGNoaW5nXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3Qgc2VuZE5vdGljZSA9IHVzZU5vdGljZSgpO1xuICAgIGNvbnN0IGV4cG9ydERhdGEgPSBhc3luYyAodHlwZSkgPT4ge1xuICAgICAgICBzZXRGZXRjaGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBleHBvcnRlZERhdGEgfSwgfSA9IGF3YWl0IG5ldyBBcGlDbGllbnQoKS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2V4cG9ydCcsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtleHBvcnRlZERhdGFdLCB7IHR5cGU6IG1pbWVUeXBlc1t0eXBlXSB9KTtcbiAgICAgICAgICAgIHNhdmVBcyhibG9iLCBnZXRFeHBvcnRlZEZpbGVOYW1lKHR5cGUpKTtcbiAgICAgICAgICAgIHNlbmROb3RpY2UoeyBtZXNzYWdlOiAnRXhwb3J0ZWQgc3VjY2Vzc2Z1bGx5JywgdHlwZTogJ3N1Y2Nlc3MnIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzZW5kTm90aWNlKHsgbWVzc2FnZTogZS5tZXNzYWdlLCB0eXBlOiAnZXJyb3InIH0pO1xuICAgICAgICB9XG4gICAgICAgIHNldEZldGNoaW5nKGZhbHNlKTtcbiAgICB9O1xuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICAgIHJldHVybiA8TG9hZGVyIC8+O1xuICAgIH1cbiAgICByZXR1cm4gKDxCb3g+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPFRleHQgdmFyaWFudD1cImxnXCI+Q2hvb3NlIGV4cG9ydCBmb3JtYXQ6PC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAge0V4cG9ydGVycy5tYXAocGFyc2VyVHlwZSA9PiAoPEJveCBrZXk9e3BhcnNlclR5cGV9IG09ezJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBleHBvcnREYXRhKHBhcnNlclR5cGUpfSBkaXNhYmxlZD17aXNGZXRjaGluZ30+XG4gICAgICAgICAgICAgIHtwYXJzZXJUeXBlLnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0JveD4pKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94Pik7XG59O1xuZXhwb3J0IGRlZmF1bHQgRXhwb3J0Q29tcG9uZW50O1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmRcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2luJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Mb2dpbiA9IExvZ2luXG5pbXBvcnQgU2lkZWJhckJyYW5kaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhckJyYW5kaW5nJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TaWRlYmFyQnJhbmRpbmcgPSBTaWRlYmFyQnJhbmRpbmdcbmltcG9ydCBTaWRlYmFyRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhckZvb3RlcidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuU2lkZWJhckZvb3RlciA9IFNpZGViYXJGb290ZXJcbmltcG9ydCBVcGxvYWRFZGl0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRFZGl0Q29tcG9uZW50ID0gVXBsb2FkRWRpdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZExpc3RDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZExpc3RDb21wb25lbnQgPSBVcGxvYWRMaXN0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkU2hvd0NvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkU2hvd0NvbXBvbmVudCA9IFVwbG9hZFNob3dDb21wb25lbnRcbmltcG9ydCBQYXNzd29yZEVkaXRDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3Bhc3N3b3Jkcy9idWlsZC9jb21wb25lbnRzL1Bhc3N3b3JkRWRpdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUGFzc3dvcmRFZGl0Q29tcG9uZW50ID0gUGFzc3dvcmRFZGl0Q29tcG9uZW50XG5pbXBvcnQgSW1wb3J0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9pbXBvcnQtZXhwb3J0L2xpYi9jb21wb25lbnRzL0ltcG9ydENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuSW1wb3J0Q29tcG9uZW50ID0gSW1wb3J0Q29tcG9uZW50XG5pbXBvcnQgRXhwb3J0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9pbXBvcnQtZXhwb3J0L2xpYi9jb21wb25lbnRzL0V4cG9ydENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRXhwb3J0Q29tcG9uZW50ID0gRXhwb3J0Q29tcG9uZW50Il0sIm5hbWVzIjpbInBhZ2VIZWFkZXJIZWlnaHQiLCJwYWdlSGVhZGVyUGFkZGluZ1kiLCJwYWdlSGVhZGVyUGFkZGluZ1giLCJEYXNoYm9hcmRIZWFkZXIiLCJkYXRhIiwic2V0RGF0YSIsInVzZVN0YXRlIiwiYXBpIiwiQXBpQ2xpZW50IiwidXNlRWZmZWN0IiwiZ2V0RGFzaGJvYXJkIiwidGhlbiIsInJlc3BvbnNlIiwicmVzcG9uc2VEYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidHJhbnNsYXRlTWVzc2FnZSIsInVzZVRyYW5zbGF0aW9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQm94IiwicG9zaXRpb24iLCJvdmVyZmxvdyIsImJnIiwiaGVpZ2h0IiwicHkiLCJweCIsInRvcCIsImxlZnQiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImRpc3BsYXkiLCJUZXh0IiwidGV4dEFsaWduIiwiY29sb3IiLCJIMiIsImZvbnRXZWlnaHQiLCJib3hlcyIsInZhcmlhbnQiLCJ0aXRsZSIsInN1YnRpdGxlIiwiaHJlZiIsIkNhcmQiLCJzdHlsZWQiLCJmbGV4IiwidGhlbWUiLCJjb2xvcnMiLCJncmV5MTAwIiwic3BhY2UiLCJtZCIsInByaW1hcnk2MCIsInNoYWRvd3MiLCJjYXJkSG92ZXIiLCJkZWZhdWx0UHJvcHMiLCJib3hTaGFkb3ciLCJEYXNoYm9hcmQiLCJ0cmFuc2xhdGVCdXR0b24iLCJtdCIsIm1iIiwibXgiLCJmbGV4RGlyZWN0aW9uIiwiZmxleFdyYXAiLCJ3aWR0aCIsIm1hcCIsImJveCIsImluZGV4Iiwia2V5IiwicCIsImFzIiwidGFyZ2V0IiwiSWxsdXN0cmF0aW9uIiwiSDUiLCJ0aGlzIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJyZXF1aXJlJCQ0IiwiT3JDb250YWluZXIiLCJkaXYiLCJDdXN0b21MYWJlbCIsImxhYmVsIiwibW92ZUJhY2tncm91bmQiLCJrZXlmcmFtZXMiLCJTdHlsZWREaXYiLCJMb2dpbiIsInRlcm1zQ2hlY2tlZCIsInNldFRlcm1zQ2hlY2tlZCIsInRyYW5zbGF0ZUNvbXBvbmVudCIsInByb3BzIiwid2luZG93IiwiX19BUFBfU1RBVEVfXyIsImFjdGlvbiIsImVycm9yTWVzc2FnZSIsInJlZ2lzdGVyTWVzc2FnZSIsInNldFJlZ2lzdGVyTWVzc2FnZSIsImZvcmdvdFBhc3N3b3JkTWVzc2FnZSIsInNldEZvcmdvdFBhc3N3b3JkTWVzc2FnZSIsInJlZ2lzdGVyU3VjY2Vzc01lc3NhZ2UiLCJzZXRSZWdpc3RlclN1Y2Nlc3NNZXNzYWdlIiwiZm9yZ290UGFzc3dvcmRTdWNjZXNzTWVzc2FnZSIsInNldEZvcmdvdFBhc3N3b3JkU3VjY2Vzc01lc3NhZ2UiLCJoYW5kbGVMb2dpblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJlbWFpbElucHV0IiwicXVlcnlTZWxlY3RvciIsInBhc3N3b3JkSW5wdXQiLCJlbWFpbCIsInZhbHVlIiwicGFzc3dvcmQiLCJzdWJtaXQiLCJoYW5kbGVSZWdpc3RlclN1Ym1pdCIsInJlZ2lzdGVyRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25maXJtUGFzc3dvcmRJbnB1dCIsImNvbmZpcm1QYXNzd29yZCIsInJlcXVlc3RCb2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImVycm9yUmVzcG9uc2UiLCJqc29uIiwiRXJyb3IiLCJoYW5kbGVGb3Jnb3RQYXNzd29yZFN1Ym1pdCIsImZvcmdvdFBhc3N3b3JkRm9ybSIsInRvZ2dsZVRlcm1zIiwibmV3VGVybXNDaGVja2VkIiwicmVnaXN0ZXJCdG4iLCJkaXNhYmxlZCIsInN0eWxlIiwiYmFja2dyb3VuZCIsImhhbmRsZVdpbmRvdyIsImxvZ2luRm9ybSIsIkZyYWdtZW50IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWluSGVpZ2h0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJpbnNldCIsImNsYXNzTmFtZSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmbGV4R3JvdyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImdhcCIsImxpc3RTdHlsZUltYWdlIiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93IiwiaWQiLCJvblN1Ym1pdCIsIm1hcmdpblRvcCIsIm1hcmdpbiIsIk1lc3NhZ2VCb3giLCJteSIsInNwbGl0IiwibGVuZ3RoIiwiRm9ybUdyb3VwIiwiSW5wdXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJmb250IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInR5cGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwiY3VycmVudFRhcmdldCIsInRleHREZWNvcmF0aW9uIiwib25Nb3VzZUxlYXZlIiwiYXV0b0NvbXBsZXRlIiwiQnV0dG9uIiwiYm9yZGVyQ29sb3IiLCJmb250RmFtaWx5IiwiTGFiZWwiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtYXJnaW5SaWdodCIsImFjY2VudENvbG9yIiwibGV0dGVyU3BhY2luZyIsIlNpZGViYXJCcmFuZGluZyIsIlN0eWxlZExpbmsiLCJMaW5rIiwiU3R5bGVkSDEiLCJoMSIsInRvIiwic3JjIiwiYWx0IiwiU2lkZWJhckZvb3RlciIsImZsYXQiLCJEcm9wWm9uZSIsIkRyb3Bab25lSXRlbSIsIkljb24iLCJQYXNzd29yZEVkaXQiLCJwcm9wZXJ0eSIsInJlY29yZCIsInJlc291cmNlIiwidGIiLCJzaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsIlBhc3N3b3JkIiwiRWRpdCIsIkltcG9ydENvbXBvbmVudCIsImZpbGUiLCJzZXRGaWxlIiwic2VuZE5vdGljZSIsInVzZU5vdGljZSIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9uVXBsb2FkIiwidXBsb2FkZWRGaWxlIiwiaW1wb3J0RGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzb3VyY2VBY3Rpb24iLCJyZXNvdXJjZUlkIiwiYWN0aW9uTmFtZSIsIkxvYWRlciIsIm1heFdpZHRoIiwiZmlsZXMiLCJtdWx0aXBsZSIsImZpbGVuYW1lIiwib25SZW1vdmUiLCJtIiwiZ2xvYmFsIiwiTUlMTElTRUNPTkRTX0lOX1dFRUsiLCJmb3JtYXR0ZXJzIiwiZm9ybWF0RGlzdGFuY2UiLCJmb3JtYXRMb25nIiwiZm9ybWF0UmVsYXRpdmUiLCJsb2NhbGl6ZSIsIm1hdGNoIiwibWltZVR5cGVzIiwiY3N2IiwieG1sIiwiZ2V0RXhwb3J0ZWRGaWxlTmFtZSIsImV4dGVuc2lvbiIsImZvcm1hdCIsIkRhdGUiLCJub3ciLCJFeHBvcnRDb21wb25lbnQiLCJleHBvcnREYXRhIiwiZXhwb3J0ZWREYXRhIiwicGFyYW1zIiwiYmxvYiIsIkJsb2IiLCJzYXZlQXMiLCJFeHBvcnRlcnMiLCJwYXJzZXJUeXBlIiwidG9VcHBlckNhc2UiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJVcGxvYWRFZGl0Q29tcG9uZW50IiwiVXBsb2FkTGlzdENvbXBvbmVudCIsIlVwbG9hZFNob3dDb21wb25lbnQiLCJQYXNzd29yZEVkaXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7RUFNQSxNQUFNQSxnQkFBZ0IsR0FBRyxHQUFHLENBQUE7RUFDNUIsTUFBTUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFBO0VBQzdCLE1BQU1DLGtCQUFrQixHQUFHLEdBQUcsQ0FBQTtFQUV2QixNQUFNQyxlQUF5QixHQUFHQSxN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Q0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7RUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7RUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0VBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0VBQzlFLEtBQUssQ0FBQyxDQUFDO0VBQ1AsQ0FBQztBQUNEO0VBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtFQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0VBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0VBQ3RFLFFBQVEsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUk7RUFDdEQsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztFQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7RUFDcEQsWUFBWSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDekIsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU07RUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztFQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztFQUNqRSxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUztFQUNqRSxnQkFBZ0I7RUFDaEIsb0JBQW9CLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUU7RUFDaEksb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7RUFDMUcsb0JBQW9CLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRTtFQUN6RixvQkFBb0IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFO0VBQ3ZGLG9CQUFvQixJQUFJLENBQUMsQ0FB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QUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0VBQ3RGLElBQUksU0FBUyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO0VBQzVILElBQUksU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO0VBQ3RELElBQUksU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO0VBQ3RELElBQUksU0FBUyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtFQUN0RixDQUFDO0FBQ0Q7RUFDTyxTQUFTLGdCQUFnQixDQUFDLENBQUMsRUFBRTtFQUNwQyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztFQUNiLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDaEosSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7RUFDMUksQ0FBQztBQUNEO0VBQ08sU0FBUyxhQUFhLENBQUMsQ0FBQyxFQUFFO0VBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0VBQzNGLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDdkMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLFFBQVEsS0FBSyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxF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QyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLE1BQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLE9BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxRQUFRLENBQUMsRUFBRSxJQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLFNBQVMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLDJDQUEyQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLEVBQUUsSUFBSSxZQUFZLENBQUMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUs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QUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFBLENBQUEsR0FBQSxDQUFZLGlCQUFpQixFQUFFLE9BQVksQ0FBQSxHQUFBLENBQUEsT0FBTyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLE9BQU8sTUFBTSxFQUFFLGFBQWEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxPQUFBLENBQUEsR0FBQSxDQUFZLDJCQUEyQixFQUFFLEVBQUUsR0FBRyxPQUFBLENBQUEsR0FBQSxDQUFZLDJCQUEyQixDQUFDLE9BQU8sR0FBRyxPQUFZLENBQUEsR0FBQSxDQUFBLDJCQUEyQixFQUFFLE9BQUEsQ0FBQSxHQUFBLENBQVksMkJBQTJCLENBQUMsV0FBVyxFQUFFLE9BQU8sT0FBTyxFQUFFLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsT0FBQSxDQUFBLEdBQUEsQ0FBWSxpQkFBaUIsRUFBRSxFQUFFLEdBQUcsT0FBWSxDQUFBLEdBQUEsQ0FBQSxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsT0FBWSxDQUFBLEdBQUEsQ0FBQSxpQkFBaUIsRUFBRSxPQUFZLENBQUEsR0FBQSxDQUFBLGlCQUFpQixDQUFDLFlBQVksR0FBRyxhQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBd0MsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsd0xBQXdMLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUEyQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQXdDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFNLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFxQyxDQUFDLENBQUMsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUMsK1BBQStQLENBQUMsQ0FBQyxDQUFDLHFIQUFxSCxDQUFDLENBQUMsQ0FBQyxxTUFBcU0sQ0FBQyxDQUFDLENBQUMsaUtBQWlLLENBQUMsQ0FBQyxDQUFDLDJPQUEyTyxDQUFDLENBQUMsQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDLENBQUMsNkRBQTZELENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLEVBQUUsQ0FBQyxnVUFBZ1UsQ0FBQyxFQUFFLENBQUMsdU5BQXVOLENBQUMsRUFBRSxDQUFDLG9XQUFvVyxDQUFDLEVBQUUsQ0FBQyx3TEFBd0wsQ0FBQyxFQUFFLENBQUMsOENBQThDLENBQUMsRUFBRSxDQUFDLDBaQUEwWixDQUFDLEVBQUUsQ0FBQyxzUUFBc1EsQ0FBQyxFQUFFLENBQUMsd0lBQXdJLENBQUMsRUFBRSxDQUFDLGtGQUFrRixDQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBdVIsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFzQyxDQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFNLFdBQVcsRUFBRSxPQUFPLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFlBQVksR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBMkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLENBQUMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtMQUFrTCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEdBQUcsYUFBcUQsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUMsS0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQXVDLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixDQUFzQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsR0FBRyxhQUFvQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsc1ZBQXNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQTJDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFzQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBdUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLDZQQUE2UCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU0sU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQXNDLFdBQVcsRUFBRSxPQUFPLFNBQVMsRUFBRSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLHNOQUFzTixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQXFFLFdBQVcsRUFBRSxPQUFPLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQywwVEFBMFQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBeUIsNEJBQUEsQ0FBQSxnQkFBQSxDQUFDLEVBQUUsQ0FBQyw0QkFBQSxDQUFBLGtCQUEwQixDQUFDLEVBQUUsQ0FBMEIsNEJBQUEsQ0FBQSxpQkFBQSxDQUFDLEVBQUUsK0NBQTBCLENBQUMsRUFBRSxDQUFDLDRCQUFBLENBQUEsYUFBcUIsQ0FBQyxFQUFFLENBQXFCLDRCQUFBLENBQUEsWUFBQSxDQUFDLEVBQUUsQ0FBQyw0QkFBQSxDQUFBLGFBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQXNDLENBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyx5Q0FBb0IsQ0FBQyxFQUFFLENBQUMsNEJBQUEsQ0FBQSxpQkFBeUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBc0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQTJDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsQ0FBc0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsOFVBQThVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFZLDRCQUFBLENBQUEsR0FBQSxDQUFDLEVBQUUsQ0FBQywrQ0FBZSxDQUFDLEVBQUUsQ0FBQyw0QkFBQSxDQUFBLGlCQUF5QixDQUFDLEVBQUUsQ0FBQyxTQUFBLEdBQUEsNEJBQUEsQ0FBQSxTQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxD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TyxFQUFFO0VBQ2hELFlBQVksSUFBSSxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztFQUNwRCxTQUFTO0VBQ1QsUUFBUSxRQUFRbkwsc0JBQUssQ0FBQyxhQUFhLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUU7RUFDL0csS0FBSztFQUNMLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0VBQzVDLFFBQVEsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0VBQ2xELFFBQVEsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxLQUFLLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUM1RSxLQUFLO0VBQ0wsSUFBSSxRQUFRQSxzQkFBSyxDQUFDLGFBQWEsQ0FBQ0Esc0JBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLEVBQUUsS0FBSyxNQUFNQSxzQkFBSyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0VBQzlOLENBQUM7O0VDekNELE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxNQUFNQSxzQkFB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QVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPaUssY0FBTSxFQUFFQSxjQUFNLENBQUMsTUFBTSxHQUFHQSxjQUFNLENBQUNBLGNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUE4QixDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQWUsQ0FBQyxFQUFD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RyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN0RSxFQUFFLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDO0VBQ25HLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7RUFDbEksQ0FBQyxDQUFDO0VBQ0YsSUFBSSxTQUFTLEdBQUc7RUFDaEIsRUFBRSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDN0MsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7RUFDbkQsRUFBRSxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7RUFDaEUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUM7RUFDdEYsQ0FBQyxDQUFDO0VBQ0YsSUFBSSxlQUFlLEdBQUc7RUFDdEIsRUFBRSxNQUFNLEVBQUU7RUFDVixJQUFJLEVBQUUsRUFBRSxHQUFHO0VBQ1gsSUFBSSxFQUFFLEVBQUUsR0FBRztFQUNYLElBQUksUUFBUSxFQUFFLElBQUk7RUFDbEIsSUFB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Q0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0E7RUFDZSxTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRTtFQUNuRSxFQUFFLElBQUksSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQztFQUNyUyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDN0IsRUFBRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7RUFDekMsRUFBRSxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0VBQzNDLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxlQUFlLEdBQUcsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sTUFBTSxJQUFJLElBQUksZUFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLGVBQWUsR0FBRyxjQUFjLENBQUMsTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQztFQUNqUCxFQUFFLElBQUkscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMscUJBQXFCLEdBQUcsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixNQUFNLElBQUksSUFBSSxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxNQUFNLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxNQUFNLElBQUksSUFBSSxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxxQkFBcUIsTUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxjQUFjLENBQUMscUJBQXFCLE1BQU0sSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUMsTUFBTSxNQUFNLElBQUksSUFBSSxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLHFCQUFxQixDQUFDLE9BQU8sTUFBTSxJQUFJLElBQUksc0JBQXNCLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsc0JBQXNCLENBQUMscUJBQXFCLE1BQU0sSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFD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LENBQUMsRUFBRSxDQUFBO0VBQUUsR0FBQSxlQUNyRHROLHNCQUFBLENBQUFDLGFBQUEsQ0FBQ2dLLG1CQUFNLEVBQUE7RUFBQ04sSUFBQUEsT0FBTyxFQUFFQSxNQUFNNkUsVUFBVSxDQUFDTyxVQUFVLENBQUU7RUFBQzVILElBQUFBLFFBQVEsRUFBRW1GLFVBQUFBO0tBQ3REeUMsRUFBQUEsVUFBVSxDQUFDQyxXQUFXLEVBQ2pCLENBQ0wsQ0FBRSxDQUNOLENBQ0YsQ0FBQyxDQUFBO0VBQ1YsQ0FBQzs7RUNsRERDLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUUsQ0FBQTtFQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUM3TSxTQUFTLEdBQUdBLFNBQVMsQ0FBQTtFQUU1QzRNLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDakwsS0FBSyxHQUFHQSxLQUFLLENBQUE7RUFFcENnTCxPQUFPLENBQUNDLGNBQWMsQ0FBQ3hFLGVBQWUsR0FBR0EsZUFBZSxDQUFBO0VBRXhEdUUsT0FBTyxDQUFDQyxjQUFjLENBQUNoRSxhQUFhLEdBQUdBLGFBQWEsQ0FBQTtFQUVwRCtELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDQyxtQkFBbUIsR0FBR0EsSUFBbUIsQ0FBQTtFQUVoRUYsT0FBTyxDQUFDQyxjQUFjLENBQUNFLG1CQUFtQixHQUFHQSxJQUFtQixDQUFBO0VBRWhFSCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0csbUJBQW1CLEdBQUdBLElBQW1CLENBQUE7RUFFaEVKLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDSSxxQkFBcUIsR0FBR0EsWUFBcUIsQ0FBQTtFQUVwRUwsT0FBTyxDQUFDQyxjQUFjLENBQUNqRCxlQUFlLEdBQUdBLGVBQWUsQ0FBQTtFQUV4RGdELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDWCxlQUFlLEdBQUdBLGVBQWU7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMSwyLDMsNCw1LDYsNywxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwxOSwyMCwyMSwyMiwyMywyNCwyNSwyNiwyNywyOCwyOSwzMCwzMSwzMiwzMywzNCwzNSwzNiwzNywzOCwzOSw0MCw0MSw0Miw0Myw0NCw0NSw0Niw0Nyw0OCw0OSw1MCw1MSw1Miw1Myw1NCw1NV19
