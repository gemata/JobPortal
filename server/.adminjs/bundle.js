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
  background: linear-gradient(204.24deg, rgb(59, 91, 203) -0.04%, rgb(77, 112, 235) 84.48%);
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
    background: url(https://cloud.adminjs.co/images/space-bg.webp);
    background-size: auto 580px;
    opacity: 0.65;
    animation: ${moveBackground} 90s linear 0s infinite normal none running;
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
      if (password !== confirmPassword) {
        console.log('Passwords do not match');
        return;
      }
      if (!email || !password || !confirmPassword) {
        console.log('Please fill in all fields');
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
          throw new Error('Failed to register user');
        }
        console.log('User registered successfully');
        window.location.reload();
      } catch (error) {
        console.error('Error registering user:', error.message);
      }
    };
    const handleForgotPasswordSubmit = async e => {
      e.preventDefault();
      const forgotPasswordForm = document.getElementById('forgotPasswordForm');
      const emailInput = forgotPasswordForm.querySelector('input[name="email"]');
      const email = emailInput.value;
      console.log(email);
      if (!email) {
        console.log('Please fill in your email');
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
        if (!response.ok) {
          throw new Error('Failed to send email');
        }
        console.log('Email sent successfully');
      } catch (error) {
        console.error('Error mailing user:', error.message);
      }
    };
    const toggleTerms = () => {
      const newTermsChecked = !termsChecked;
      setTermsChecked(newTermsChecked);
      const registerBtn = document.getElementById('registerSubmitBtn');
      if (registerBtn) {
        registerBtn.disabled = !newTermsChecked;
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
        background: 'url(https://cdn.discordapp.com/attachments/653997513350709251/1222240427218960434/provaBG_Opaque.png?ex=66157f19&is=66030a19&hm=e47778f6c5dc4da5a53a25ccd909e296b148844d35118043aed5ff5682532ad9&)',
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
        height: '560px'
      }
    }, /*#__PURE__*/React__default.default.createElement(StyledDiv, {
      style: {
        color: 'white',
        width: '284px',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.4) 5px 0px 15px -5px',
        background: 'linear-gradient(204.24deg, rgb(59, 91, 203) -0.04%, rgb(77, 112, 235) 84.48%)',
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
      method: "POST",
      p: "x3",
      flexGrow: 1,
      width: ['100%', '100%', '480px']
    }, /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '50px',
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
    }, "COMPANY LOGO")), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(137, 138, 154)'
      },
      required: true
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
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(137, 138, 154)'
      },
      required: true
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
        color: 'blue',
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
        marginTop: '20px'
      },
      variant: "contained"
    }, translateComponent('Login.loginButton')), /*#__PURE__*/React__default.default.createElement(OrContainer, null), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'register'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#3040d6';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#3040d6';
        e.currentTarget.style.color = '#3040d6';
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
        marginBottom: '50px',
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
    }, "COMPANY LOGO")), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(137, 138, 154)'
      },
      required: true
    }, translateComponent('Email')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      type: "email",
      style: {
        padding: '8px'
      },
      name: "email",
      placeholder: 'Email',
      required: true
    })), /*#__PURE__*/React__default.default.createElement("div", {
      style: {
        display: 'flex',
        gap: '24px'
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(137, 138, 154)'
      },
      required: true
    }, translateComponent('Password')), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      type: "password",
      name: "password",
      placeholder: 'Password',
      autoComplete: "new-password",
      required: true
    })), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(137, 138, 154)'
      },
      required: true
    }, 'Confirm Password'), /*#__PURE__*/React__default.default.createElement(designSystem.Input, {
      style: {
        padding: '8px'
      },
      type: "password",
      name: "confirmPassword",
      placeholder: 'Confirm Password',
      autoComplete: "new-password",
      required: true
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
        marginRight: '16px'
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
        padding: '10px 0px'
      },
      variant: "contained",
      disabled: true
    }, "Create Account"), /*#__PURE__*/React__default.default.createElement(OrContainer, null), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px',
        transition: 'all 0.2s ease-in'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'login'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#3040d6';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#3040d6';
        e.currentTarget.style.color = '#3040d6';
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
        marginBottom: '50px',
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
    }, "COMPANY LOGO")), /*#__PURE__*/React__default.default.createElement(designSystem.FormGroup, null, /*#__PURE__*/React__default.default.createElement(designSystem.Label, {
      style: {
        color: 'rgb(137, 138, 154)'
      },
      required: true
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
        marginTop: '20px'
      },
      variant: "contained"
    }, "Request Password Reset"), /*#__PURE__*/React__default.default.createElement(OrContainer, null), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'login'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#3040d6';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#3040d6';
        e.currentTarget.style.color = '#3040d6';
      }
    }, "Login"), /*#__PURE__*/React__default.default.createElement(designSystem.Button, {
      style: {
        width: '100%',
        padding: '10px 0px'
      },
      id: "toggleWindows",
      type: "button",
      variant: "button",
      onClick: e => handleWindow(e, 'register'),
      onMouseEnter: e => {
        e.currentTarget.style.backgroundColor = '#3040d6';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.color = 'white';
      },
      onMouseLeave: e => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.borderColor = '#3040d6';
        e.currentTarget.style.color = '#3040d6';
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
        color: '#3040d6',
        textDecoration: 'none'
      }
    }, "Privacy Policy"), ' ', "| Made with \uD83D\uDC99 by our team")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9jb21wb25lbnRzL2Rhc2hib2FyZC50c3giLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9tZW1vaXplL2Rpc3QvZW1vdGlvbi1tZW1vaXplLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AZW1vdGlvbi9pcy1wcm9wLXZhbGlkL2Rpc3QvZW1vdGlvbi1pcy1wcm9wLXZhbGlkLmVzbS5qcyIsIi4uL25vZGVfbW9kdWxlcy9zaGFsbG93ZXF1YWwvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL3N0eWxpcy9kaXN0L3VtZC9zdHlsaXMuanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvbm9kZV9tb2R1bGVzL0BlbW90aW9uL3VuaXRsZXNzL2Rpc3QvZW1vdGlvbi11bml0bGVzcy5lc20uanMiLCIuLi9ub2RlX21vZHVsZXMvc3R5bGVkLWNvbXBvbmVudHMvZGlzdC9zdHlsZWQtY29tcG9uZW50cy5icm93c2VyLmNqcy5qcyIsIi4uL2NvbXBvbmVudHMvbG9naW4udHN4IiwiLi4vY29tcG9uZW50cy9zaWRlYmFyQnJhbmRpbmcudHN4IiwiLi4vY29tcG9uZW50cy9zaWRlYmFyRm9vdGVyLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvZmlsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2J1aWxkL2NvbXBvbmVudHMvUGFzc3dvcmRFZGl0Q29tcG9uZW50LmpzeCIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9pbXBvcnQtZXhwb3J0L2xpYi9jb21wb25lbnRzL0ltcG9ydENvbXBvbmVudC5qc3giLCIuLi9ub2RlX21vZHVsZXMvZmlsZS1zYXZlci9kaXN0L0ZpbGVTYXZlci5taW4uanMiLCIuLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy9pbXBvcnQtZXhwb3J0L2xpYi9leHBvcnRlci50eXBlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL2ltcG9ydC1leHBvcnQvbGliL2NvbXBvbmVudHMvRXhwb3J0Q29tcG9uZW50LmpzeCIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgSDIsIEg1LCBJbGx1c3RyYXRpb24sIElsbHVzdHJhdGlvblByb3BzLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0vc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICdhZG1pbmpzJztcclxuXHJcbmNvbnN0IHBhZ2VIZWFkZXJIZWlnaHQgPSAzMDA7XHJcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWSA9IDc0O1xyXG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1ggPSAyNTA7XHJcblxyXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBpbnRlcmZhY2UgRGF0YSB7XHJcbiAgICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxEYXRhIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpXHJcbiAgICAgIC5nZXREYXNoYm9hcmQoKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhIGFzIERhdGE7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZURhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7fSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBpZiAoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkYXRhLWNzcz0nZGVmYXVsdC1kYXNoYm9hcmQnPlxyXG4gICAgICA8ZGl2PntkYXRhICYmIDxwPntkYXRhLm1lc3NhZ2V9PC9wPn08L2Rpdj5cclxuICAgICAgPEJveCBwb3NpdGlvbj0ncmVsYXRpdmUnIG92ZXJmbG93PSdoaWRkZW4nIGJnPSd3aGl0ZScgaGVpZ2h0PXtwYWdlSGVhZGVySGVpZ2h0fSBweT17cGFnZUhlYWRlclBhZGRpbmdZfSBweD17WydkZWZhdWx0JywgJ2xnJywgcGFnZUhlYWRlclBhZGRpbmdYXX0+XHJcbiAgICAgICAgPEJveCBwb3NpdGlvbj0nYWJzb2x1dGUnIHRvcD17MzB9IGxlZnQ9ezB9IG9wYWNpdHk9ezAuOX0gYW5pbWF0ZSBkaXNwbGF5PXtbJ25vbmUnLCAnbm9uZScsICdub25lJywgJ2Jsb2NrJ119PjwvQm94PlxyXG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJyBjb2xvcj0nZ3JleTEwMCc+XHJcbiAgICAgICAgICA8SDIgZm9udFdlaWdodD0nYm9sZCc+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3dlbGNvbWVPbkJvYXJkX3RpdGxlJyl9PC9IMj5cclxuICAgICAgICAgIDxUZXh0IG9wYWNpdHk9ezAuOH0+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3dlbGNvbWVPbkJvYXJkX3N1YnRpdGxlJyl9PC9UZXh0PlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxudHlwZSBCb3hUeXBlID0ge1xyXG4gIHZhcmlhbnQ6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHN1YnRpdGxlOiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59O1xyXG5cclxuY29uc3QgYm94ZXMgPSAoeyB0cmFuc2xhdGVNZXNzYWdlIH0pOiBBcnJheTxCb3hUeXBlPiA9PiBbXHJcbiAge1xyXG4gICAgdmFyaWFudDogJ0RldGFpbHMnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc190aXRsZScpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc19zdWJ0aXRsZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZG9jcy5hZG1pbmpzLmNvL2Jhc2ljcy9yZXNvdXJjZSNwcm92aWRpbmctcmVzb3VyY2VzLWV4cGxpY2l0bHknLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFyaWFudDogJ0RvY3MnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc190aXRsZScpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc19zdWJ0aXRsZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZG9jcy5hZG1pbmpzLmNvL2Jhc2ljcy9yZXNvdXJjZSNjdXN0b21pemluZy1yZXNvdXJjZXMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFyaWFudDogJ1BsdWcnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZUFjdGlvbnNfdGl0bGUnKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3N1YnRpdGxlJyksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly9kb2NzLmFkbWluanMuY28vYmFzaWNzL2FjdGlvbicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiAnQ3VwJyxcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfdGl0bGUnKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfc3VidGl0bGUnKSxcclxuICAgIGhyZWY6ICdodHRwczovL2RvY3MuYWRtaW5qcy5jby91aS1jdXN0b21pemF0aW9uL3dyaXRpbmcteW91ci1vd24tY29tcG9uZW50cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YXJpYW50OiAnUGhvdG9zJyxcclxuICAgIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21EYXNoYm9hcmRfdGl0bGUnKSxcclxuICAgIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21EYXNoYm9hcmRfc3VidGl0bGUnKSxcclxuICAgIGhyZWY6ICdodHRwczovL2RvY3MuYWRtaW5qcy5jby91aS1jdXN0b21pemF0aW9uL2Rhc2hib2FyZC1jdXN0b21pemF0aW9uJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhcmlhbnQ6ICdJZGVudGl0eUNhcmQnLFxyXG4gICAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc190aXRsZScpLFxyXG4gICAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc19zdWJ0aXRsZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZG9jcy5hZG1pbmpzLmNvL3R1dG9yaWFscy9hZGRpbmctcm9sZS1iYXNlZC1hY2Nlc3MtY29udHJvbCcsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcclxuICBkaXNwbGF5OiAkeyh7IGZsZXggfSk6IHN0cmluZyA9PiAoZmxleCA/ICdmbGV4JyA6ICdibG9jaycpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvcnMuZ3JleTEwMH07XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNwYWNlLm1kfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3JzLnByaW1hcnk2MH07XHJcbiAgICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnNoYWRvd3MuY2FyZEhvdmVyfTtcclxuICB9XHJcblxyXG4gICYgLmRzYy1pY29uIHN2ZyxcclxuICAuZ2gtaWNvbiBzdmcge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdmFyaWFudDogJ2NvbnRhaW5lcicsXHJcbiAgYm94U2hhZG93OiAnY2FyZCcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG10PXtbJ3hsJywgJ3hsJywgJy0xMDBweCddfVxyXG4gICAgICAgIG1iPSd4bCdcclxuICAgICAgICBteD17WzAsIDAsIDAsICdhdXRvJ119XHJcbiAgICAgICAgcHg9e1snZGVmYXVsdCcsICdsZycsICd4eGwnLCAnMCddfVxyXG4gICAgICAgIHBvc2l0aW9uPSdyZWxhdGl2ZSdcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleERpcmVjdGlvbj0ncm93J1xyXG4gICAgICAgIGZsZXhXcmFwPSd3cmFwJ1xyXG4gICAgICAgIHdpZHRoPXtbMSwgMSwgMSwgMTAyNF19XHJcbiAgICAgID5cclxuICAgICAgICB7Ym94ZXMoeyB0cmFuc2xhdGVNZXNzYWdlIH0pLm1hcCgoYm94LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gMiwgMSAvIDNdfSBwPSdsZyc+XHJcbiAgICAgICAgICAgIDxDYXJkIGFzPSdhJyBocmVmPXtib3guaHJlZn0gdGFyZ2V0PSdfYmxhbmsnPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICAgIDxJbGx1c3RyYXRpb24gdmFyaWFudD17Ym94LnZhcmlhbnQgYXMgSWxsdXN0cmF0aW9uUHJvcHNbJ3ZhcmlhbnQnXX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXs3MH0gLz5cclxuICAgICAgICAgICAgICAgIDxINSBtdD0nbWQnPntib3gudGl0bGV9PC9INT5cclxuICAgICAgICAgICAgICAgIDxUZXh0Pntib3guc3VidGl0bGV9PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcclxuIiwiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnB1c2goXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMucHVzaChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IobSwgayk7XHJcbiAgICBpZiAoIWRlc2MgfHwgKFwiZ2V0XCIgaW4gZGVzYyA/ICFtLl9fZXNNb2R1bGUgOiBkZXNjLndyaXRhYmxlIHx8IGRlc2MuY29uZmlndXJhYmxlKSkge1xyXG4gICAgICAgIGRlc2MgPSB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH07XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIGRlc2MpO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRJbihzdGF0ZSwgcmVjZWl2ZXIpIHtcclxuICAgIGlmIChyZWNlaXZlciA9PT0gbnVsbCB8fCAodHlwZW9mIHJlY2VpdmVyICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiByZWNlaXZlciAhPT0gXCJmdW5jdGlvblwiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB1c2UgJ2luJyBvcGVyYXRvciBvbiBub24tb2JqZWN0XCIpO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgPT09IHN0YXRlIDogc3RhdGUuaGFzKHJlY2VpdmVyKTtcclxufVxyXG4iLCJmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCB7IG1lbW9pemUgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IG1lbW9pemUgZnJvbSAnQGVtb3Rpb24vbWVtb2l6ZSc7XG5cbnZhciByZWFjdFByb3BzUmVnZXggPSAvXigoY2hpbGRyZW58ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUx8a2V5fHJlZnxhdXRvRm9jdXN8ZGVmYXVsdFZhbHVlfGRlZmF1bHRDaGVja2VkfGlubmVySFRNTHxzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmd8c3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nfHZhbHVlTGlua3xhYmJyfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlY29kaW5nfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGVudGVyS2V5SGludHxmb3JtfGZvcm1BY3Rpb258Zm9ybUVuY1R5cGV8Zm9ybU1ldGhvZHxmb3JtTm9WYWxpZGF0ZXxmb3JtVGFyZ2V0fGZyYW1lQm9yZGVyfGhlYWRlcnN8aGVpZ2h0fGhpZGRlbnxoaWdofGhyZWZ8aHJlZkxhbmd8aHRtbEZvcnxodHRwRXF1aXZ8aWR8aW5wdXRNb2RlfGludGVncml0eXxpc3xrZXlQYXJhbXN8a2V5VHlwZXxraW5kfGxhYmVsfGxhbmd8bGlzdHxsb2FkaW5nfGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHRyYW5zbGF0ZXx0eXBlfHVzZU1hcHx2YWx1ZXx3aWR0aHx3bW9kZXx3cmFwfGFib3V0fGRhdGF0eXBlfGlubGlzdHxwcmVmaXh8cHJvcGVydHl8cmVzb3VyY2V8dHlwZW9mfHZvY2FifGF1dG9DYXBpdGFsaXplfGF1dG9Db3JyZWN0fGF1dG9TYXZlfGNvbG9yfGluY3JlbWVudGFsfGZhbGxiYWNrfGluZXJ0fGl0ZW1Qcm9wfGl0ZW1TY29wZXxpdGVtVHlwZXxpdGVtSUR8aXRlbVJlZnxvbnxvcHRpb258cmVzdWx0c3xzZWN1cml0eXx1bnNlbGVjdGFibGV8YWNjZW50SGVpZ2h0fGFjY3VtdWxhdGV8YWRkaXRpdmV8YWxpZ25tZW50QmFzZWxpbmV8YWxsb3dSZW9yZGVyfGFscGhhYmV0aWN8YW1wbGl0dWRlfGFyYWJpY0Zvcm18YXNjZW50fGF0dHJpYnV0ZU5hbWV8YXR0cmlidXRlVHlwZXxhdXRvUmV2ZXJzZXxhemltdXRofGJhc2VGcmVxdWVuY3l8YmFzZWxpbmVTaGlmdHxiYXNlUHJvZmlsZXxiYm94fGJlZ2lufGJpYXN8Ynl8Y2FsY01vZGV8Y2FwSGVpZ2h0fGNsaXB8Y2xpcFBhdGhVbml0c3xjbGlwUGF0aHxjbGlwUnVsZXxjb2xvckludGVycG9sYXRpb258Y29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyc3xjb2xvclByb2ZpbGV8Y29sb3JSZW5kZXJpbmd8Y29udGVudFNjcmlwdFR5cGV8Y29udGVudFN0eWxlVHlwZXxjdXJzb3J8Y3h8Y3l8ZHxkZWNlbGVyYXRlfGRlc2NlbnR8ZGlmZnVzZUNvbnN0YW50fGRpcmVjdGlvbnxkaXNwbGF5fGRpdmlzb3J8ZG9taW5hbnRCYXNlbGluZXxkdXJ8ZHh8ZHl8ZWRnZU1vZGV8ZWxldmF0aW9ufGVuYWJsZUJhY2tncm91bmR8ZW5kfGV4cG9uZW50fGV4dGVybmFsUmVzb3VyY2VzUmVxdWlyZWR8ZmlsbHxmaWxsT3BhY2l0eXxmaWxsUnVsZXxmaWx0ZXJ8ZmlsdGVyUmVzfGZpbHRlclVuaXRzfGZsb29kQ29sb3J8Zmxvb2RPcGFjaXR5fGZvY3VzYWJsZXxmb250RmFtaWx5fGZvbnRTaXplfGZvbnRTaXplQWRqdXN0fGZvbnRTdHJldGNofGZvbnRTdHlsZXxmb250VmFyaWFudHxmb250V2VpZ2h0fGZvcm1hdHxmcm9tfGZyfGZ4fGZ5fGcxfGcyfGdseXBoTmFtZXxnbHlwaE9yaWVudGF0aW9uSG9yaXpvbnRhbHxnbHlwaE9yaWVudGF0aW9uVmVydGljYWx8Z2x5cGhSZWZ8Z3JhZGllbnRUcmFuc2Zvcm18Z3JhZGllbnRVbml0c3xoYW5naW5nfGhvcml6QWR2WHxob3Jpek9yaWdpblh8aWRlb2dyYXBoaWN8aW1hZ2VSZW5kZXJpbmd8aW58aW4yfGludGVyY2VwdHxrfGsxfGsyfGszfGs0fGtlcm5lbE1hdHJpeHxrZXJuZWxVbml0TGVuZ3RofGtlcm5pbmd8a2V5UG9pbnRzfGtleVNwbGluZXN8a2V5VGltZXN8bGVuZ3RoQWRqdXN0fGxldHRlclNwYWNpbmd8bGlnaHRpbmdDb2xvcnxsaW1pdGluZ0NvbmVBbmdsZXxsb2NhbHxtYXJrZXJFbmR8bWFya2VyTWlkfG1hcmtlclN0YXJ0fG1hcmtlckhlaWdodHxtYXJrZXJVbml0c3xtYXJrZXJXaWR0aHxtYXNrfG1hc2tDb250ZW50VW5pdHN8bWFza1VuaXRzfG1hdGhlbWF0aWNhbHxtb2RlfG51bU9jdGF2ZXN8b2Zmc2V0fG9wYWNpdHl8b3BlcmF0b3J8b3JkZXJ8b3JpZW50fG9yaWVudGF0aW9ufG9yaWdpbnxvdmVyZmxvd3xvdmVybGluZVBvc2l0aW9ufG92ZXJsaW5lVGhpY2tuZXNzfHBhbm9zZTF8cGFpbnRPcmRlcnxwYXRoTGVuZ3RofHBhdHRlcm5Db250ZW50VW5pdHN8cGF0dGVyblRyYW5zZm9ybXxwYXR0ZXJuVW5pdHN8cG9pbnRlckV2ZW50c3xwb2ludHN8cG9pbnRzQXRYfHBvaW50c0F0WXxwb2ludHNBdFp8cHJlc2VydmVBbHBoYXxwcmVzZXJ2ZUFzcGVjdFJhdGlvfHByaW1pdGl2ZVVuaXRzfHJ8cmFkaXVzfHJlZlh8cmVmWXxyZW5kZXJpbmdJbnRlbnR8cmVwZWF0Q291bnR8cmVwZWF0RHVyfHJlcXVpcmVkRXh0ZW5zaW9uc3xyZXF1aXJlZEZlYXR1cmVzfHJlc3RhcnR8cmVzdWx0fHJvdGF0ZXxyeHxyeXxzY2FsZXxzZWVkfHNoYXBlUmVuZGVyaW5nfHNsb3BlfHNwYWNpbmd8c3BlY3VsYXJDb25zdGFudHxzcGVjdWxhckV4cG9uZW50fHNwZWVkfHNwcmVhZE1ldGhvZHxzdGFydE9mZnNldHxzdGREZXZpYXRpb258c3RlbWh8c3RlbXZ8c3RpdGNoVGlsZXN8c3RvcENvbG9yfHN0b3BPcGFjaXR5fHN0cmlrZXRocm91Z2hQb3NpdGlvbnxzdHJpa2V0aHJvdWdoVGhpY2tuZXNzfHN0cmluZ3xzdHJva2V8c3Ryb2tlRGFzaGFycmF5fHN0cm9rZURhc2hvZmZzZXR8c3Ryb2tlTGluZWNhcHxzdHJva2VMaW5lam9pbnxzdHJva2VNaXRlcmxpbWl0fHN0cm9rZU9wYWNpdHl8c3Ryb2tlV2lkdGh8c3VyZmFjZVNjYWxlfHN5c3RlbUxhbmd1YWdlfHRhYmxlVmFsdWVzfHRhcmdldFh8dGFyZ2V0WXx0ZXh0QW5jaG9yfHRleHREZWNvcmF0aW9ufHRleHRSZW5kZXJpbmd8dGV4dExlbmd0aHx0b3x0cmFuc2Zvcm18dTF8dTJ8dW5kZXJsaW5lUG9zaXRpb258dW5kZXJsaW5lVGhpY2tuZXNzfHVuaWNvZGV8dW5pY29kZUJpZGl8dW5pY29kZVJhbmdlfHVuaXRzUGVyRW18dkFscGhhYmV0aWN8dkhhbmdpbmd8dklkZW9ncmFwaGljfHZNYXRoZW1hdGljYWx8dmFsdWVzfHZlY3RvckVmZmVjdHx2ZXJzaW9ufHZlcnRBZHZZfHZlcnRPcmlnaW5YfHZlcnRPcmlnaW5ZfHZpZXdCb3h8dmlld1RhcmdldHx2aXNpYmlsaXR5fHdpZHRoc3x3b3JkU3BhY2luZ3x3cml0aW5nTW9kZXx4fHhIZWlnaHR8eDF8eDJ8eENoYW5uZWxTZWxlY3Rvcnx4bGlua0FjdHVhdGV8eGxpbmtBcmNyb2xlfHhsaW5rSHJlZnx4bGlua1JvbGV8eGxpbmtTaG93fHhsaW5rVGl0bGV8eGxpbmtUeXBlfHhtbEJhc2V8eG1sbnN8eG1sbnNYbGlua3x4bWxMYW5nfHhtbFNwYWNlfHl8eTF8eTJ8eUNoYW5uZWxTZWxlY3Rvcnx6fHpvb21BbmRQYW58Zm9yfGNsYXNzfGF1dG9mb2N1cyl8KChbRGRdW0FhXVtUdF1bQWFdfFtBYV1bUnJdW0lpXVtBYV18eCktLiopKSQvOyAvLyBodHRwczovL2VzYmVuY2guY29tL2JlbmNoLzViZmVlNjhhNGNkN2U2MDA5ZWY2MWQyM1xuXG52YXIgaXNQcm9wVmFsaWQgPSAvKiAjX19QVVJFX18gKi9tZW1vaXplKGZ1bmN0aW9uIChwcm9wKSB7XG4gIHJldHVybiByZWFjdFByb3BzUmVnZXgudGVzdChwcm9wKSB8fCBwcm9wLmNoYXJDb2RlQXQoMCkgPT09IDExMVxuICAvKiBvICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgxKSA9PT0gMTEwXG4gIC8qIG4gKi9cbiAgJiYgcHJvcC5jaGFyQ29kZUF0KDIpIDwgOTE7XG59XG4vKiBaKzEgKi9cbik7XG5cbmV4cG9ydCB7IGlzUHJvcFZhbGlkIGFzIGRlZmF1bHQgfTtcbiIsIi8vXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2hhbGxvd0VxdWFsKG9iakEsIG9iakIsIGNvbXBhcmUsIGNvbXBhcmVDb250ZXh0KSB7XG4gIHZhciByZXQgPSBjb21wYXJlID8gY29tcGFyZS5jYWxsKGNvbXBhcmVDb250ZXh0LCBvYmpBLCBvYmpCKSA6IHZvaWQgMDtcblxuICBpZiAocmV0ICE9PSB2b2lkIDApIHtcbiAgICByZXR1cm4gISFyZXQ7XG4gIH1cblxuICBpZiAob2JqQSA9PT0gb2JqQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSBcIm9iamVjdFwiIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSBcIm9iamVjdFwiIHx8ICFvYmpCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBiSGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmJpbmQob2JqQik7XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwga2V5c0EubGVuZ3RoOyBpZHgrKykge1xuICAgIHZhciBrZXkgPSBrZXlzQVtpZHhdO1xuXG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZUEgPSBvYmpBW2tleV07XG4gICAgdmFyIHZhbHVlQiA9IG9iakJba2V5XTtcblxuICAgIHJldCA9IGNvbXBhcmUgPyBjb21wYXJlLmNhbGwoY29tcGFyZUNvbnRleHQsIHZhbHVlQSwgdmFsdWVCLCBrZXkpIDogdm9pZCAwO1xuXG4gICAgaWYgKHJldCA9PT0gZmFsc2UgfHwgKHJldCA9PT0gdm9pZCAwICYmIHZhbHVlQSAhPT0gdmFsdWVCKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiIsIihmdW5jdGlvbihlLHIpe3R5cGVvZiBleHBvcnRzPT09XCJvYmplY3RcIiYmdHlwZW9mIG1vZHVsZSE9PVwidW5kZWZpbmVkXCI/cihleHBvcnRzKTp0eXBlb2YgZGVmaW5lPT09XCJmdW5jdGlvblwiJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHIpOihlPWV8fHNlbGYscihlLnN0eWxpcz17fSkpfSkodGhpcywoZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHI9XCItbXMtXCI7dmFyIGE9XCItbW96LVwiO3ZhciBjPVwiLXdlYmtpdC1cIjt2YXIgbj1cImNvbW1cIjt2YXIgdD1cInJ1bGVcIjt2YXIgcz1cImRlY2xcIjt2YXIgaT1cIkBwYWdlXCI7dmFyIHU9XCJAbWVkaWFcIjt2YXIgbz1cIkBpbXBvcnRcIjt2YXIgbD1cIkBjaGFyc2V0XCI7dmFyIGY9XCJAdmlld3BvcnRcIjt2YXIgcD1cIkBzdXBwb3J0c1wiO3ZhciBoPVwiQGRvY3VtZW50XCI7dmFyIHY9XCJAbmFtZXNwYWNlXCI7dmFyIGI9XCJAa2V5ZnJhbWVzXCI7dmFyIGQ9XCJAZm9udC1mYWNlXCI7dmFyIHc9XCJAY291bnRlci1zdHlsZVwiO3ZhciBtPVwiQGZvbnQtZmVhdHVyZS12YWx1ZXNcIjt2YXIgZz1cIkBsYXllclwiO3ZhciBrPU1hdGguYWJzO3ZhciAkPVN0cmluZy5mcm9tQ2hhckNvZGU7dmFyIHg9T2JqZWN0LmFzc2lnbjtmdW5jdGlvbiBFKGUscil7cmV0dXJuIE0oZSwwKV40NT8oKChyPDwyXk0oZSwwKSk8PDJeTShlLDEpKTw8Ml5NKGUsMikpPDwyXk0oZSwzKTowfWZ1bmN0aW9uIHkoZSl7cmV0dXJuIGUudHJpbSgpfWZ1bmN0aW9uIFQoZSxyKXtyZXR1cm4oZT1yLmV4ZWMoZSkpP2VbMF06ZX1mdW5jdGlvbiBBKGUscixhKXtyZXR1cm4gZS5yZXBsYWNlKHIsYSl9ZnVuY3Rpb24gTyhlLHIsYSl7cmV0dXJuIGUuaW5kZXhPZihyLGEpfWZ1bmN0aW9uIE0oZSxyKXtyZXR1cm4gZS5jaGFyQ29kZUF0KHIpfDB9ZnVuY3Rpb24gQyhlLHIsYSl7cmV0dXJuIGUuc2xpY2UocixhKX1mdW5jdGlvbiBSKGUpe3JldHVybiBlLmxlbmd0aH1mdW5jdGlvbiBTKGUpe3JldHVybiBlLmxlbmd0aH1mdW5jdGlvbiB6KGUscil7cmV0dXJuIHIucHVzaChlKSxlfWZ1bmN0aW9uIE4oZSxyKXtyZXR1cm4gZS5tYXAocikuam9pbihcIlwiKX1mdW5jdGlvbiBQKGUscil7cmV0dXJuIGUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4hVChlLHIpfSkpfWUubGluZT0xO2UuY29sdW1uPTE7ZS5sZW5ndGg9MDtlLnBvc2l0aW9uPTA7ZS5jaGFyYWN0ZXI9MDtlLmNoYXJhY3RlcnM9XCJcIjtmdW5jdGlvbiBqKHIsYSxjLG4sdCxzLGksdSl7cmV0dXJue3ZhbHVlOnIscm9vdDphLHBhcmVudDpjLHR5cGU6bixwcm9wczp0LGNoaWxkcmVuOnMsbGluZTplLmxpbmUsY29sdW1uOmUuY29sdW1uLGxlbmd0aDppLHJldHVybjpcIlwiLHNpYmxpbmdzOnV9fWZ1bmN0aW9uIFUoZSxyKXtyZXR1cm4geChqKFwiXCIsbnVsbCxudWxsLFwiXCIsbnVsbCxudWxsLDAsZS5zaWJsaW5ncyksZSx7bGVuZ3RoOi1lLmxlbmd0aH0scil9ZnVuY3Rpb24gXyhlKXt3aGlsZShlLnJvb3QpZT1VKGUucm9vdCx7Y2hpbGRyZW46W2VdfSk7eihlLGUuc2libGluZ3MpfWZ1bmN0aW9uIEYoKXtyZXR1cm4gZS5jaGFyYWN0ZXJ9ZnVuY3Rpb24gSSgpe2UuY2hhcmFjdGVyPWUucG9zaXRpb24+MD9NKGUuY2hhcmFjdGVycywtLWUucG9zaXRpb24pOjA7aWYoZS5jb2x1bW4tLSxlLmNoYXJhY3Rlcj09PTEwKWUuY29sdW1uPTEsZS5saW5lLS07cmV0dXJuIGUuY2hhcmFjdGVyfWZ1bmN0aW9uIEwoKXtlLmNoYXJhY3Rlcj1lLnBvc2l0aW9uPGUubGVuZ3RoP00oZS5jaGFyYWN0ZXJzLGUucG9zaXRpb24rKyk6MDtpZihlLmNvbHVtbisrLGUuY2hhcmFjdGVyPT09MTApZS5jb2x1bW49MSxlLmxpbmUrKztyZXR1cm4gZS5jaGFyYWN0ZXJ9ZnVuY3Rpb24gRCgpe3JldHVybiBNKGUuY2hhcmFjdGVycyxlLnBvc2l0aW9uKX1mdW5jdGlvbiBZKCl7cmV0dXJuIGUucG9zaXRpb259ZnVuY3Rpb24gSyhyLGEpe3JldHVybiBDKGUuY2hhcmFjdGVycyxyLGEpfWZ1bmN0aW9uIFYoZSl7c3dpdGNoKGUpe2Nhc2UgMDpjYXNlIDk6Y2FzZSAxMDpjYXNlIDEzOmNhc2UgMzI6cmV0dXJuIDU7Y2FzZSAzMzpjYXNlIDQzOmNhc2UgNDQ6Y2FzZSA0NzpjYXNlIDYyOmNhc2UgNjQ6Y2FzZSAxMjY6Y2FzZSA1OTpjYXNlIDEyMzpjYXNlIDEyNTpyZXR1cm4gNDtjYXNlIDU4OnJldHVybiAzO2Nhc2UgMzQ6Y2FzZSAzOTpjYXNlIDQwOmNhc2UgOTE6cmV0dXJuIDI7Y2FzZSA0MTpjYXNlIDkzOnJldHVybiAxfXJldHVybiAwfWZ1bmN0aW9uIFcocil7cmV0dXJuIGUubGluZT1lLmNvbHVtbj0xLGUubGVuZ3RoPVIoZS5jaGFyYWN0ZXJzPXIpLGUucG9zaXRpb249MCxbXX1mdW5jdGlvbiBCKHIpe3JldHVybiBlLmNoYXJhY3RlcnM9XCJcIixyfWZ1bmN0aW9uIEcocil7cmV0dXJuIHkoSyhlLnBvc2l0aW9uLTEsUShyPT09OTE/cisyOnI9PT00MD9yKzE6cikpKX1mdW5jdGlvbiBIKGUpe3JldHVybiBCKHEoVyhlKSkpfWZ1bmN0aW9uIFoocil7d2hpbGUoZS5jaGFyYWN0ZXI9RCgpKWlmKGUuY2hhcmFjdGVyPDMzKUwoKTtlbHNlIGJyZWFrO3JldHVybiBWKHIpPjJ8fFYoZS5jaGFyYWN0ZXIpPjM/XCJcIjpcIiBcIn1mdW5jdGlvbiBxKHIpe3doaWxlKEwoKSlzd2l0Y2goVihlLmNoYXJhY3Rlcikpe2Nhc2UgMDp6KGVlKGUucG9zaXRpb24tMSkscik7YnJlYWs7Y2FzZSAyOnooRyhlLmNoYXJhY3Rlcikscik7YnJlYWs7ZGVmYXVsdDp6KCQoZS5jaGFyYWN0ZXIpLHIpfXJldHVybiByfWZ1bmN0aW9uIEoocixhKXt3aGlsZSgtLWEmJkwoKSlpZihlLmNoYXJhY3Rlcjw0OHx8ZS5jaGFyYWN0ZXI+MTAyfHxlLmNoYXJhY3Rlcj41NyYmZS5jaGFyYWN0ZXI8NjV8fGUuY2hhcmFjdGVyPjcwJiZlLmNoYXJhY3Rlcjw5NylicmVhaztyZXR1cm4gSyhyLFkoKSsoYTw2JiZEKCk9PTMyJiZMKCk9PTMyKSl9ZnVuY3Rpb24gUShyKXt3aGlsZShMKCkpc3dpdGNoKGUuY2hhcmFjdGVyKXtjYXNlIHI6cmV0dXJuIGUucG9zaXRpb247Y2FzZSAzNDpjYXNlIDM5OmlmKHIhPT0zNCYmciE9PTM5KVEoZS5jaGFyYWN0ZXIpO2JyZWFrO2Nhc2UgNDA6aWYocj09PTQxKVEocik7YnJlYWs7Y2FzZSA5MjpMKCk7YnJlYWt9cmV0dXJuIGUucG9zaXRpb259ZnVuY3Rpb24gWChyLGEpe3doaWxlKEwoKSlpZihyK2UuY2hhcmFjdGVyPT09NDcrMTApYnJlYWs7ZWxzZSBpZihyK2UuY2hhcmFjdGVyPT09NDIrNDImJkQoKT09PTQ3KWJyZWFrO3JldHVyblwiLypcIitLKGEsZS5wb3NpdGlvbi0xKStcIipcIiskKHI9PT00Nz9yOkwoKSl9ZnVuY3Rpb24gZWUocil7d2hpbGUoIVYoRCgpKSlMKCk7cmV0dXJuIEsocixlLnBvc2l0aW9uKX1mdW5jdGlvbiByZShlKXtyZXR1cm4gQihhZShcIlwiLG51bGwsbnVsbCxudWxsLFtcIlwiXSxlPVcoZSksMCxbMF0sZSkpfWZ1bmN0aW9uIGFlKGUscixhLGMsbix0LHMsaSx1KXt2YXIgbz0wO3ZhciBsPTA7dmFyIGY9czt2YXIgcD0wO3ZhciBoPTA7dmFyIHY9MDt2YXIgYj0xO3ZhciBkPTE7dmFyIHc9MTt2YXIgbT0wO3ZhciBnPVwiXCI7dmFyIHg9bjt2YXIgRT10O3ZhciB5PWM7dmFyIFQ9Zzt3aGlsZShkKXN3aXRjaCh2PW0sbT1MKCkpe2Nhc2UgNDA6aWYodiE9MTA4JiZNKFQsZi0xKT09NTgpe2lmKE8oVCs9QShHKG0pLFwiJlwiLFwiJlxcZlwiKSxcIiZcXGZcIixrKG8/aVtvLTFdOjApKSE9LTEpdz0tMTticmVha31jYXNlIDM0OmNhc2UgMzk6Y2FzZSA5MTpUKz1HKG0pO2JyZWFrO2Nhc2UgOTpjYXNlIDEwOmNhc2UgMTM6Y2FzZSAzMjpUKz1aKHYpO2JyZWFrO2Nhc2UgOTI6VCs9SihZKCktMSw3KTtjb250aW51ZTtjYXNlIDQ3OnN3aXRjaChEKCkpe2Nhc2UgNDI6Y2FzZSA0Nzp6KG5lKFgoTCgpLFkoKSkscixhLHUpLHUpO2JyZWFrO2RlZmF1bHQ6VCs9XCIvXCJ9YnJlYWs7Y2FzZSAxMjMqYjppW28rK109UihUKSp3O2Nhc2UgMTI1KmI6Y2FzZSA1OTpjYXNlIDA6c3dpdGNoKG0pe2Nhc2UgMDpjYXNlIDEyNTpkPTA7Y2FzZSA1OStsOmlmKHc9PS0xKVQ9QShULC9cXGYvZyxcIlwiKTtpZihoPjAmJlIoVCktZil6KGg+MzI/dGUoVCtcIjtcIixjLGEsZi0xLHUpOnRlKEEoVCxcIiBcIixcIlwiKStcIjtcIixjLGEsZi0yLHUpLHUpO2JyZWFrO2Nhc2UgNTk6VCs9XCI7XCI7ZGVmYXVsdDp6KHk9Y2UoVCxyLGEsbyxsLG4saSxnLHg9W10sRT1bXSxmLHQpLHQpO2lmKG09PT0xMjMpaWYobD09PTApYWUoVCxyLHkseSx4LHQsZixpLEUpO2Vsc2Ugc3dpdGNoKHA9PT05OSYmTShULDMpPT09MTEwPzEwMDpwKXtjYXNlIDEwMDpjYXNlIDEwODpjYXNlIDEwOTpjYXNlIDExNTphZShlLHkseSxjJiZ6KGNlKGUseSx5LDAsMCxuLGksZyxuLHg9W10sZixFKSxFKSxuLEUsZixpLGM/eDpFKTticmVhaztkZWZhdWx0OmFlKFQseSx5LHksW1wiXCJdLEUsMCxpLEUpfX1vPWw9aD0wLGI9dz0xLGc9VD1cIlwiLGY9czticmVhaztjYXNlIDU4OmY9MStSKFQpLGg9djtkZWZhdWx0OmlmKGI8MSlpZihtPT0xMjMpLS1iO2Vsc2UgaWYobT09MTI1JiZiKys9PTAmJkkoKT09MTI1KWNvbnRpbnVlO3N3aXRjaChUKz0kKG0pLG0qYil7Y2FzZSAzODp3PWw+MD8xOihUKz1cIlxcZlwiLC0xKTticmVhaztjYXNlIDQ0OmlbbysrXT0oUihUKS0xKSp3LHc9MTticmVhaztjYXNlIDY0OmlmKEQoKT09PTQ1KVQrPUcoTCgpKTtwPUQoKSxsPWY9UihnPVQrPWVlKFkoKSkpLG0rKzticmVhaztjYXNlIDQ1OmlmKHY9PT00NSYmUihUKT09MiliPTB9fXJldHVybiB0fWZ1bmN0aW9uIGNlKGUscixhLGMsbixzLGksdSxvLGwsZixwKXt2YXIgaD1uLTE7dmFyIHY9bj09PTA/czpbXCJcIl07dmFyIGI9Uyh2KTtmb3IodmFyIGQ9MCx3PTAsbT0wO2Q8YzsrK2QpZm9yKHZhciBnPTAsJD1DKGUsaCsxLGg9ayh3PWlbZF0pKSx4PWU7ZzxiOysrZylpZih4PXkodz4wP3ZbZ10rXCIgXCIrJDpBKCQsLyZcXGYvZyx2W2ddKSkpb1ttKytdPXg7cmV0dXJuIGooZSxyLGEsbj09PTA/dDp1LG8sbCxmLHApfWZ1bmN0aW9uIG5lKGUscixhLGMpe3JldHVybiBqKGUscixhLG4sJChGKCkpLEMoZSwyLC0yKSwwLGMpfWZ1bmN0aW9uIHRlKGUscixhLGMsbil7cmV0dXJuIGooZSxyLGEscyxDKGUsMCxjKSxDKGUsYysxLC0xKSxjLG4pfWZ1bmN0aW9uIHNlKGUsbix0KXtzd2l0Y2goRShlLG4pKXtjYXNlIDUxMDM6cmV0dXJuIGMrXCJwcmludC1cIitlK2U7Y2FzZSA1NzM3OmNhc2UgNDIwMTpjYXNlIDMxNzc6Y2FzZSAzNDMzOmNhc2UgMTY0MTpjYXNlIDQ0NTc6Y2FzZSAyOTIxOmNhc2UgNTU3MjpjYXNlIDYzNTY6Y2FzZSA1ODQ0OmNhc2UgMzE5MTpjYXNlIDY2NDU6Y2FzZSAzMDA1OmNhc2UgNjM5MTpjYXNlIDU4Nzk6Y2FzZSA1NjIzOmNhc2UgNjEzNTpjYXNlIDQ1OTk6Y2FzZSA0ODU1OmNhc2UgNDIxNTpjYXNlIDYzODk6Y2FzZSA1MTA5OmNhc2UgNTM2NTpjYXNlIDU2MjE6Y2FzZSAzODI5OnJldHVybiBjK2UrZTtjYXNlIDQ3ODk6cmV0dXJuIGErZStlO2Nhc2UgNTM0OTpjYXNlIDQyNDY6Y2FzZSA0ODEwOmNhc2UgNjk2ODpjYXNlIDI3NTY6cmV0dXJuIGMrZSthK2UrcitlK2U7Y2FzZSA1OTM2OnN3aXRjaChNKGUsbisxMSkpe2Nhc2UgMTE0OnJldHVybiBjK2UrcitBKGUsL1tzdmhdXFx3Ky1bdGJscl17Mn0vLFwidGJcIikrZTtjYXNlIDEwODpyZXR1cm4gYytlK3IrQShlLC9bc3ZoXVxcdystW3RibHJdezJ9LyxcInRiLXJsXCIpK2U7Y2FzZSA0NTpyZXR1cm4gYytlK3IrQShlLC9bc3ZoXVxcdystW3RibHJdezJ9LyxcImxyXCIpK2V9Y2FzZSA2ODI4OmNhc2UgNDI2ODpjYXNlIDI5MDM6cmV0dXJuIGMrZStyK2UrZTtjYXNlIDYxNjU6cmV0dXJuIGMrZStyK1wiZmxleC1cIitlK2U7Y2FzZSA1MTg3OnJldHVybiBjK2UrQShlLC8oXFx3KykuKyg6W15dKykvLGMrXCJib3gtJDEkMlwiK3IrXCJmbGV4LSQxJDJcIikrZTtjYXNlIDU0NDM6cmV0dXJuIGMrZStyK1wiZmxleC1pdGVtLVwiK0EoZSwvZmxleC18LXNlbGYvZyxcIlwiKSsoIVQoZSwvZmxleC18YmFzZWxpbmUvKT9yK1wiZ3JpZC1yb3ctXCIrQShlLC9mbGV4LXwtc2VsZi9nLFwiXCIpOlwiXCIpK2U7Y2FzZSA0Njc1OnJldHVybiBjK2UrcitcImZsZXgtbGluZS1wYWNrXCIrQShlLC9hbGlnbi1jb250ZW50fGZsZXgtfC1zZWxmL2csXCJcIikrZTtjYXNlIDU1NDg6cmV0dXJuIGMrZStyK0EoZSxcInNocmlua1wiLFwibmVnYXRpdmVcIikrZTtjYXNlIDUyOTI6cmV0dXJuIGMrZStyK0EoZSxcImJhc2lzXCIsXCJwcmVmZXJyZWQtc2l6ZVwiKStlO2Nhc2UgNjA2MDpyZXR1cm4gYytcImJveC1cIitBKGUsXCItZ3Jvd1wiLFwiXCIpK2MrZStyK0EoZSxcImdyb3dcIixcInBvc2l0aXZlXCIpK2U7Y2FzZSA0NTU0OnJldHVybiBjK0EoZSwvKFteLV0pKHRyYW5zZm9ybSkvZyxcIiQxXCIrYytcIiQyXCIpK2U7Y2FzZSA2MTg3OnJldHVybiBBKEEoQShlLC8oem9vbS18Z3JhYikvLGMrXCIkMVwiKSwvKGltYWdlLXNldCkvLGMrXCIkMVwiKSxlLFwiXCIpK2U7Y2FzZSA1NDk1OmNhc2UgMzk1OTpyZXR1cm4gQShlLC8oaW1hZ2Utc2V0XFwoW15dKikvLGMrXCIkMVwiK1wiJGAkMVwiKTtjYXNlIDQ5Njg6cmV0dXJuIEEoQShlLC8oLis6KShmbGV4LSk/KC4qKS8sYytcImJveC1wYWNrOiQzXCIrcitcImZsZXgtcGFjazokM1wiKSwvcy4rLWJbXjtdKy8sXCJqdXN0aWZ5XCIpK2MrZStlO2Nhc2UgNDIwMDppZighVChlLC9mbGV4LXxiYXNlbGluZS8pKXJldHVybiByK1wiZ3JpZC1jb2x1bW4tYWxpZ25cIitDKGUsbikrZTticmVhaztjYXNlIDI1OTI6Y2FzZSAzMzYwOnJldHVybiByK0EoZSxcInRlbXBsYXRlLVwiLFwiXCIpK2U7Y2FzZSA0Mzg0OmNhc2UgMzYxNjppZih0JiZ0LnNvbWUoKGZ1bmN0aW9uKGUscil7cmV0dXJuIG49cixUKGUucHJvcHMsL2dyaWQtXFx3Ky1lbmQvKX0pKSl7cmV0dXJufk8oZSsodD10W25dLnZhbHVlKSxcInNwYW5cIiwwKT9lOnIrQShlLFwiLXN0YXJ0XCIsXCJcIikrZStyK1wiZ3JpZC1yb3ctc3BhbjpcIisofk8odCxcInNwYW5cIiwwKT9UKHQsL1xcZCsvKTorVCh0LC9cXGQrLyktK1QoZSwvXFxkKy8pKStcIjtcIn1yZXR1cm4gcitBKGUsXCItc3RhcnRcIixcIlwiKStlO2Nhc2UgNDg5NjpjYXNlIDQxMjg6cmV0dXJuIHQmJnQuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIFQoZS5wcm9wcywvZ3JpZC1cXHcrLXN0YXJ0Lyl9KSk/ZTpyK0EoQShlLFwiLWVuZFwiLFwiLXNwYW5cIiksXCJzcGFuIFwiLFwiXCIpK2U7Y2FzZSA0MDk1OmNhc2UgMzU4MzpjYXNlIDQwNjg6Y2FzZSAyNTMyOnJldHVybiBBKGUsLyguKyktaW5saW5lKC4rKS8sYytcIiQxJDJcIikrZTtjYXNlIDgxMTY6Y2FzZSA3MDU5OmNhc2UgNTc1MzpjYXNlIDU1MzU6Y2FzZSA1NDQ1OmNhc2UgNTcwMTpjYXNlIDQ5MzM6Y2FzZSA0Njc3OmNhc2UgNTUzMzpjYXNlIDU3ODk6Y2FzZSA1MDIxOmNhc2UgNDc2NTppZihSKGUpLTEtbj42KXN3aXRjaChNKGUsbisxKSl7Y2FzZSAxMDk6aWYoTShlLG4rNCkhPT00NSlicmVhaztjYXNlIDEwMjpyZXR1cm4gQShlLC8oLis6KSguKyktKFteXSspLyxcIiQxXCIrYytcIiQyLSQzXCIrXCIkMVwiK2ErKE0oZSxuKzMpPT0xMDg/XCIkM1wiOlwiJDItJDNcIikpK2U7Y2FzZSAxMTU6cmV0dXJufk8oZSxcInN0cmV0Y2hcIiwwKT9zZShBKGUsXCJzdHJldGNoXCIsXCJmaWxsLWF2YWlsYWJsZVwiKSxuLHQpK2U6ZX1icmVhaztjYXNlIDUxNTI6Y2FzZSA1OTIwOnJldHVybiBBKGUsLyguKz8pOihcXGQrKShcXHMqXFwvXFxzKihzcGFuKT9cXHMqKFxcZCspKT8oLiopLywoZnVuY3Rpb24oYSxjLG4sdCxzLGksdSl7cmV0dXJuIHIrYytcIjpcIituK3UrKHQ/citjK1wiLXNwYW46XCIrKHM/aToraS0rbikrdTpcIlwiKStlfSkpO2Nhc2UgNDk0OTppZihNKGUsbis2KT09PTEyMSlyZXR1cm4gQShlLFwiOlwiLFwiOlwiK2MpK2U7YnJlYWs7Y2FzZSA2NDQ0OnN3aXRjaChNKGUsTShlLDE0KT09PTQ1PzE4OjExKSl7Y2FzZSAxMjA6cmV0dXJuIEEoZSwvKC4rOikoW147XFxzIV0rKSg7fChcXHMrKT8hLispPy8sXCIkMVwiK2MrKE0oZSwxNCk9PT00NT9cImlubGluZS1cIjpcIlwiKStcImJveCQzXCIrXCIkMVwiK2MrXCIkMiQzXCIrXCIkMVwiK3IrXCIkMmJveCQzXCIpK2U7Y2FzZSAxMDA6cmV0dXJuIEEoZSxcIjpcIixcIjpcIityKStlfWJyZWFrO2Nhc2UgNTcxOTpjYXNlIDI2NDc6Y2FzZSAyMTM1OmNhc2UgMzkyNzpjYXNlIDIzOTE6cmV0dXJuIEEoZSxcInNjcm9sbC1cIixcInNjcm9sbC1zbmFwLVwiKStlfXJldHVybiBlfWZ1bmN0aW9uIGllKGUscil7dmFyIGE9XCJcIjtmb3IodmFyIGM9MDtjPGUubGVuZ3RoO2MrKylhKz1yKGVbY10sYyxlLHIpfHxcIlwiO3JldHVybiBhfWZ1bmN0aW9uIHVlKGUscixhLGMpe3N3aXRjaChlLnR5cGUpe2Nhc2UgZzppZihlLmNoaWxkcmVuLmxlbmd0aClicmVhaztjYXNlIG86Y2FzZSBzOnJldHVybiBlLnJldHVybj1lLnJldHVybnx8ZS52YWx1ZTtjYXNlIG46cmV0dXJuXCJcIjtjYXNlIGI6cmV0dXJuIGUucmV0dXJuPWUudmFsdWUrXCJ7XCIraWUoZS5jaGlsZHJlbixjKStcIn1cIjtjYXNlIHQ6aWYoIVIoZS52YWx1ZT1lLnByb3BzLmpvaW4oXCIsXCIpKSlyZXR1cm5cIlwifXJldHVybiBSKGE9aWUoZS5jaGlsZHJlbixjKSk/ZS5yZXR1cm49ZS52YWx1ZStcIntcIithK1wifVwiOlwiXCJ9ZnVuY3Rpb24gb2UoZSl7dmFyIHI9UyhlKTtyZXR1cm4gZnVuY3Rpb24oYSxjLG4sdCl7dmFyIHM9XCJcIjtmb3IodmFyIGk9MDtpPHI7aSsrKXMrPWVbaV0oYSxjLG4sdCl8fFwiXCI7cmV0dXJuIHN9fWZ1bmN0aW9uIGxlKGUpe3JldHVybiBmdW5jdGlvbihyKXtpZighci5yb290KWlmKHI9ci5yZXR1cm4pZShyKX19ZnVuY3Rpb24gZmUoZSxuLGksdSl7aWYoZS5sZW5ndGg+LTEpaWYoIWUucmV0dXJuKXN3aXRjaChlLnR5cGUpe2Nhc2UgczplLnJldHVybj1zZShlLnZhbHVlLGUubGVuZ3RoLGkpO3JldHVybjtjYXNlIGI6cmV0dXJuIGllKFtVKGUse3ZhbHVlOkEoZS52YWx1ZSxcIkBcIixcIkBcIitjKX0pXSx1KTtjYXNlIHQ6aWYoZS5sZW5ndGgpcmV0dXJuIE4oaT1lLnByb3BzLChmdW5jdGlvbihuKXtzd2l0Y2goVChuLHU9Lyg6OnBsYWNcXHcrfDpyZWFkLVxcdyspLykpe2Nhc2VcIjpyZWFkLW9ubHlcIjpjYXNlXCI6cmVhZC13cml0ZVwiOl8oVShlLHtwcm9wczpbQShuLC86KHJlYWQtXFx3KykvLFwiOlwiK2ErXCIkMVwiKV19KSk7XyhVKGUse3Byb3BzOltuXX0pKTt4KGUse3Byb3BzOlAoaSx1KX0pO2JyZWFrO2Nhc2VcIjo6cGxhY2Vob2xkZXJcIjpfKFUoZSx7cHJvcHM6W0EobiwvOihwbGFjXFx3KykvLFwiOlwiK2MrXCJpbnB1dC0kMVwiKV19KSk7XyhVKGUse3Byb3BzOltBKG4sLzoocGxhY1xcdyspLyxcIjpcIithK1wiJDFcIildfSkpO18oVShlLHtwcm9wczpbQShuLC86KHBsYWNcXHcrKS8scitcImlucHV0LSQxXCIpXX0pKTtfKFUoZSx7cHJvcHM6W25dfSkpO3goZSx7cHJvcHM6UChpLHUpfSk7YnJlYWt9cmV0dXJuXCJcIn0pKX19ZnVuY3Rpb24gcGUoZSl7c3dpdGNoKGUudHlwZSl7Y2FzZSB0OmUucHJvcHM9ZS5wcm9wcy5tYXAoKGZ1bmN0aW9uKHIpe3JldHVybiBOKEgociksKGZ1bmN0aW9uKHIsYSxjKXtzd2l0Y2goTShyLDApKXtjYXNlIDEyOnJldHVybiBDKHIsMSxSKHIpKTtjYXNlIDA6Y2FzZSA0MDpjYXNlIDQzOmNhc2UgNjI6Y2FzZSAxMjY6cmV0dXJuIHI7Y2FzZSA1ODppZihjWysrYV09PT1cImdsb2JhbFwiKWNbYV09XCJcIixjWysrYV09XCJcXGZcIitDKGNbYV0sYT0xLC0xKTtjYXNlIDMyOnJldHVybiBhPT09MT9cIlwiOnI7ZGVmYXVsdDpzd2l0Y2goYSl7Y2FzZSAwOmU9cjtyZXR1cm4gUyhjKT4xP1wiXCI6cjtjYXNlIGE9UyhjKS0xOmNhc2UgMjpyZXR1cm4gYT09PTI/citlK2U6citlO2RlZmF1bHQ6cmV0dXJuIHJ9fX0pKX0pKX19ZS5DSEFSU0VUPWw7ZS5DT01NRU5UPW47ZS5DT1VOVEVSX1NUWUxFPXc7ZS5ERUNMQVJBVElPTj1zO2UuRE9DVU1FTlQ9aDtlLkZPTlRfRkFDRT1kO2UuRk9OVF9GRUFUVVJFX1ZBTFVFUz1tO2UuSU1QT1JUPW87ZS5LRVlGUkFNRVM9YjtlLkxBWUVSPWc7ZS5NRURJQT11O2UuTU9aPWE7ZS5NUz1yO2UuTkFNRVNQQUNFPXY7ZS5QQUdFPWk7ZS5SVUxFU0VUPXQ7ZS5TVVBQT1JUUz1wO2UuVklFV1BPUlQ9ZjtlLldFQktJVD1jO2UuYWJzPWs7ZS5hbGxvYz1XO2UuYXBwZW5kPXo7ZS5hc3NpZ249eDtlLmNhcmV0PVk7ZS5jaGFyPUY7ZS5jaGFyYXQ9TTtlLmNvbWJpbmU9TjtlLmNvbW1lbnQ9bmU7ZS5jb21tZW50ZXI9WDtlLmNvbXBpbGU9cmU7ZS5jb3B5PVU7ZS5kZWFsbG9jPUI7ZS5kZWNsYXJhdGlvbj10ZTtlLmRlbGltaXQ9RztlLmRlbGltaXRlcj1RO2UuZXNjYXBpbmc9SjtlLmZpbHRlcj1QO2UuZnJvbT0kO2UuaGFzaD1FO2UuaWRlbnRpZmllcj1lZTtlLmluZGV4b2Y9TztlLmxpZnQ9XztlLm1hdGNoPVQ7ZS5taWRkbGV3YXJlPW9lO2UubmFtZXNwYWNlPXBlO2UubmV4dD1MO2Uubm9kZT1qO2UucGFyc2U9YWU7ZS5wZWVrPUQ7ZS5wcmVmaXg9c2U7ZS5wcmVmaXhlcj1mZTtlLnByZXY9STtlLnJlcGxhY2U9QTtlLnJ1bGVzZXQ9Y2U7ZS5ydWxlc2hlZXQ9bGU7ZS5zZXJpYWxpemU9aWU7ZS5zaXplb2Y9UztlLnNsaWNlPUs7ZS5zdHJpbmdpZnk9dWU7ZS5zdHJsZW49UjtlLnN1YnN0cj1DO2UudG9rZW49VjtlLnRva2VuaXplPUg7ZS50b2tlbml6ZXI9cTtlLnRyaW09eTtlLndoaXRlc3BhY2U9WjtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6dHJ1ZX0pfSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGlzLmpzLm1hcFxuIiwidmFyIHVuaXRsZXNzS2V5cyA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IDEsXG4gIGJvcmRlckltYWdlT3V0c2V0OiAxLFxuICBib3JkZXJJbWFnZVNsaWNlOiAxLFxuICBib3JkZXJJbWFnZVdpZHRoOiAxLFxuICBib3hGbGV4OiAxLFxuICBib3hGbGV4R3JvdXA6IDEsXG4gIGJveE9yZGluYWxHcm91cDogMSxcbiAgY29sdW1uQ291bnQ6IDEsXG4gIGNvbHVtbnM6IDEsXG4gIGZsZXg6IDEsXG4gIGZsZXhHcm93OiAxLFxuICBmbGV4UG9zaXRpdmU6IDEsXG4gIGZsZXhTaHJpbms6IDEsXG4gIGZsZXhOZWdhdGl2ZTogMSxcbiAgZmxleE9yZGVyOiAxLFxuICBncmlkUm93OiAxLFxuICBncmlkUm93RW5kOiAxLFxuICBncmlkUm93U3BhbjogMSxcbiAgZ3JpZFJvd1N0YXJ0OiAxLFxuICBncmlkQ29sdW1uOiAxLFxuICBncmlkQ29sdW1uRW5kOiAxLFxuICBncmlkQ29sdW1uU3BhbjogMSxcbiAgZ3JpZENvbHVtblN0YXJ0OiAxLFxuICBtc0dyaWRSb3c6IDEsXG4gIG1zR3JpZFJvd1NwYW46IDEsXG4gIG1zR3JpZENvbHVtbjogMSxcbiAgbXNHcmlkQ29sdW1uU3BhbjogMSxcbiAgZm9udFdlaWdodDogMSxcbiAgbGluZUhlaWdodDogMSxcbiAgb3BhY2l0eTogMSxcbiAgb3JkZXI6IDEsXG4gIG9ycGhhbnM6IDEsXG4gIHRhYlNpemU6IDEsXG4gIHdpZG93czogMSxcbiAgekluZGV4OiAxLFxuICB6b29tOiAxLFxuICBXZWJraXRMaW5lQ2xhbXA6IDEsXG4gIC8vIFNWRy1yZWxhdGVkIHByb3BlcnRpZXNcbiAgZmlsbE9wYWNpdHk6IDEsXG4gIGZsb29kT3BhY2l0eTogMSxcbiAgc3RvcE9wYWNpdHk6IDEsXG4gIHN0cm9rZURhc2hhcnJheTogMSxcbiAgc3Ryb2tlRGFzaG9mZnNldDogMSxcbiAgc3Ryb2tlTWl0ZXJsaW1pdDogMSxcbiAgc3Ryb2tlT3BhY2l0eTogMSxcbiAgc3Ryb2tlV2lkdGg6IDFcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaXRsZXNzS2V5cztcbiIsIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBlPXJlcXVpcmUoXCJ0c2xpYlwiKSx0PXJlcXVpcmUoXCJAZW1vdGlvbi9pcy1wcm9wLXZhbGlkXCIpLG49cmVxdWlyZShcInJlYWN0XCIpLHI9cmVxdWlyZShcInNoYWxsb3dlcXVhbFwiKSxvPXJlcXVpcmUoXCJzdHlsaXNcIikscz1yZXF1aXJlKFwiQGVtb3Rpb24vdW5pdGxlc3NcIik7ZnVuY3Rpb24gaShlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19ZnVuY3Rpb24gYShlKXtpZihlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gZSYmT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbihuKXtpZihcImRlZmF1bHRcIiE9PW4pe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSxuKTtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHIuZ2V0P3I6e2VudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGVbbl19fSl9fSksdC5kZWZhdWx0PWUsT2JqZWN0LmZyZWV6ZSh0KX12YXIgYz0vKiNfX1BVUkVfXyovaSh0KSxsPS8qI19fUFVSRV9fKi9pKG4pLHU9LyojX19QVVJFX18qL2kocikscD0vKiNfX1BVUkVfXyovYShvKSxkPS8qI19fUFVSRV9fKi9pKHMpLGg9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHByb2Nlc3MmJnZvaWQgMCE9PXByb2Nlc3MuZW52JiYocHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX1NDX0FUVFJ8fHByb2Nlc3MuZW52LlNDX0FUVFIpfHxcImRhdGEtc3R5bGVkXCIsZj1cImFjdGl2ZVwiLHk9XCJkYXRhLXN0eWxlZC12ZXJzaW9uXCIsbT1cIjYuMS44XCIsdj1cIi8qIXNjKi9cXG5cIixnPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwiSFRNTEVsZW1lbnRcImluIHdpbmRvdyxTPUJvb2xlYW4oXCJib29sZWFuXCI9PXR5cGVvZiBTQ19ESVNBQkxFX1NQRUVEWT9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWSYmXCJcIiE9PXByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWT9cImZhbHNlXCIhPT1wcm9jZXNzLmVudi5SRUFDVF9BUFBfU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlJFQUNUX0FQUF9TQ19ESVNBQkxFX1NQRUVEWTpcInVuZGVmaW5lZFwiIT10eXBlb2YgcHJvY2VzcyYmdm9pZCAwIT09cHJvY2Vzcy5lbnYmJnZvaWQgMCE9PXByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZJiZcIlwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFk/XCJmYWxzZVwiIT09cHJvY2Vzcy5lbnYuU0NfRElTQUJMRV9TUEVFRFkmJnByb2Nlc3MuZW52LlNDX0RJU0FCTEVfU1BFRURZOlwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpLHc9e30sXz0vaW52YWxpZCBob29rIGNhbGwvaSxiPW5ldyBTZXQsRT1mdW5jdGlvbih0LHIpe2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYpe3ZhciBvPXI/JyB3aXRoIHRoZSBpZCBvZiBcIicuY29uY2F0KHIsJ1wiJyk6XCJcIixzPVwiVGhlIGNvbXBvbmVudCBcIi5jb25jYXQodCkuY29uY2F0KG8sXCIgaGFzIGJlZW4gY3JlYXRlZCBkeW5hbWljYWxseS5cXG5cIikrXCJZb3UgbWF5IHNlZSB0aGlzIHdhcm5pbmcgYmVjYXVzZSB5b3UndmUgY2FsbGVkIHN0eWxlZCBpbnNpZGUgYW5vdGhlciBjb21wb25lbnQuXFxuVG8gcmVzb2x2ZSB0aGlzIG9ubHkgY3JlYXRlIG5ldyBTdHlsZWRDb21wb25lbnRzIG91dHNpZGUgb2YgYW55IHJlbmRlciBtZXRob2QgYW5kIGZ1bmN0aW9uIGNvbXBvbmVudC5cIixpPWNvbnNvbGUuZXJyb3I7dHJ5e3ZhciBhPSEwO2NvbnNvbGUuZXJyb3I9ZnVuY3Rpb24odCl7Zm9yKHZhciBuPVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKW5bci0xXT1hcmd1bWVudHNbcl07Xy50ZXN0KHQpPyhhPSExLGIuZGVsZXRlKHMpKTppLmFwcGx5KHZvaWQgMCxlLl9fc3ByZWFkQXJyYXkoW3RdLG4sITEpKX0sbi51c2VSZWYoKSxhJiYhYi5oYXMocykmJihjb25zb2xlLndhcm4ocyksYi5hZGQocykpfWNhdGNoKGUpe18udGVzdChlLm1lc3NhZ2UpJiZiLmRlbGV0ZShzKX1maW5hbGx5e2NvbnNvbGUuZXJyb3I9aX19fSxOPU9iamVjdC5mcmVlemUoW10pLFA9T2JqZWN0LmZyZWV6ZSh7fSk7ZnVuY3Rpb24gQyhlLHQsbil7cmV0dXJuIHZvaWQgMD09PW4mJihuPVApLGUudGhlbWUhPT1uLnRoZW1lJiZlLnRoZW1lfHx0fHxuLnRoZW1lfXZhciBBPW5ldyBTZXQoW1wiYVwiLFwiYWJiclwiLFwiYWRkcmVzc1wiLFwiYXJlYVwiLFwiYXJ0aWNsZVwiLFwiYXNpZGVcIixcImF1ZGlvXCIsXCJiXCIsXCJiYXNlXCIsXCJiZGlcIixcImJkb1wiLFwiYmlnXCIsXCJibG9ja3F1b3RlXCIsXCJib2R5XCIsXCJiclwiLFwiYnV0dG9uXCIsXCJjYW52YXNcIixcImNhcHRpb25cIixcImNpdGVcIixcImNvZGVcIixcImNvbFwiLFwiY29sZ3JvdXBcIixcImRhdGFcIixcImRhdGFsaXN0XCIsXCJkZFwiLFwiZGVsXCIsXCJkZXRhaWxzXCIsXCJkZm5cIixcImRpYWxvZ1wiLFwiZGl2XCIsXCJkbFwiLFwiZHRcIixcImVtXCIsXCJlbWJlZFwiLFwiZmllbGRzZXRcIixcImZpZ2NhcHRpb25cIixcImZpZ3VyZVwiLFwiZm9vdGVyXCIsXCJmb3JtXCIsXCJoMVwiLFwiaDJcIixcImgzXCIsXCJoNFwiLFwiaDVcIixcImg2XCIsXCJoZWFkZXJcIixcImhncm91cFwiLFwiaHJcIixcImh0bWxcIixcImlcIixcImlmcmFtZVwiLFwiaW1nXCIsXCJpbnB1dFwiLFwiaW5zXCIsXCJrYmRcIixcImtleWdlblwiLFwibGFiZWxcIixcImxlZ2VuZFwiLFwibGlcIixcImxpbmtcIixcIm1haW5cIixcIm1hcFwiLFwibWFya1wiLFwibWVudVwiLFwibWVudWl0ZW1cIixcIm1ldGFcIixcIm1ldGVyXCIsXCJuYXZcIixcIm5vc2NyaXB0XCIsXCJvYmplY3RcIixcIm9sXCIsXCJvcHRncm91cFwiLFwib3B0aW9uXCIsXCJvdXRwdXRcIixcInBcIixcInBhcmFtXCIsXCJwaWN0dXJlXCIsXCJwcmVcIixcInByb2dyZXNzXCIsXCJxXCIsXCJycFwiLFwicnRcIixcInJ1YnlcIixcInNcIixcInNhbXBcIixcInNjcmlwdFwiLFwic2VjdGlvblwiLFwic2VsZWN0XCIsXCJzbWFsbFwiLFwic291cmNlXCIsXCJzcGFuXCIsXCJzdHJvbmdcIixcInN0eWxlXCIsXCJzdWJcIixcInN1bW1hcnlcIixcInN1cFwiLFwidGFibGVcIixcInRib2R5XCIsXCJ0ZFwiLFwidGV4dGFyZWFcIixcInRmb290XCIsXCJ0aFwiLFwidGhlYWRcIixcInRpbWVcIixcInRyXCIsXCJ0cmFja1wiLFwidVwiLFwidWxcIixcInVzZVwiLFwidmFyXCIsXCJ2aWRlb1wiLFwid2JyXCIsXCJjaXJjbGVcIixcImNsaXBQYXRoXCIsXCJkZWZzXCIsXCJlbGxpcHNlXCIsXCJmb3JlaWduT2JqZWN0XCIsXCJnXCIsXCJpbWFnZVwiLFwibGluZVwiLFwibGluZWFyR3JhZGllbnRcIixcIm1hcmtlclwiLFwibWFza1wiLFwicGF0aFwiLFwicGF0dGVyblwiLFwicG9seWdvblwiLFwicG9seWxpbmVcIixcInJhZGlhbEdyYWRpZW50XCIsXCJyZWN0XCIsXCJzdG9wXCIsXCJzdmdcIixcInRleHRcIixcInRzcGFuXCJdKSxJPS9bIVwiIyQlJicoKSorLC4vOjs8PT4/QFtcXFxcXFxdXmB7fH1+LV0rL2csTz0vKF4tfC0kKS9nO2Z1bmN0aW9uIHgoZSl7cmV0dXJuIGUucmVwbGFjZShJLFwiLVwiKS5yZXBsYWNlKE8sXCJcIil9dmFyIFQ9LyhhKShkKS9naSxEPTUyLFI9ZnVuY3Rpb24oZSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZSsoZT4yNT8zOTo5NykpfTtmdW5jdGlvbiBqKGUpe3ZhciB0LG49XCJcIjtmb3IodD1NYXRoLmFicyhlKTt0PkQ7dD10L0R8MCluPVIodCVEKStuO3JldHVybihSKHQlRCkrbikucmVwbGFjZShULFwiJDEtJDJcIil9dmFyIGssTT01MzgxLFY9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG49dC5sZW5ndGg7bjspZT0zMyplXnQuY2hhckNvZGVBdCgtLW4pO3JldHVybiBlfSxGPWZ1bmN0aW9uKGUpe3JldHVybiBWKE0sZSl9O2Z1bmN0aW9uIHooZSl7cmV0dXJuIGooRihlKT4+PjApfWZ1bmN0aW9uICQoZSl7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmXCJzdHJpbmdcIj09dHlwZW9mIGUmJmV8fGUuZGlzcGxheU5hbWV8fGUubmFtZXx8XCJDb21wb25lbnRcIn1mdW5jdGlvbiBCKGUpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlJiYoXCJwcm9kdWN0aW9uXCI9PT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8ZS5jaGFyQXQoMCk9PT1lLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpKX12YXIgTD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsRz1MP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOjYwMTE1LHE9TD9TeW1ib2wuZm9yKFwicmVhY3QuZm9yd2FyZF9yZWZcIik6NjAxMTIsWT17Y2hpbGRDb250ZXh0VHlwZXM6ITAsY29udGV4dFR5cGU6ITAsY29udGV4dFR5cGVzOiEwLGRlZmF1bHRQcm9wczohMCxkaXNwbGF5TmFtZTohMCxnZXREZWZhdWx0UHJvcHM6ITAsZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiEwLGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczohMCxtaXhpbnM6ITAscHJvcFR5cGVzOiEwLHR5cGU6ITB9LFc9e25hbWU6ITAsbGVuZ3RoOiEwLHByb3RvdHlwZTohMCxjYWxsZXI6ITAsY2FsbGVlOiEwLGFyZ3VtZW50czohMCxhcml0eTohMH0sSD17JCR0eXBlb2Y6ITAsY29tcGFyZTohMCxkZWZhdWx0UHJvcHM6ITAsZGlzcGxheU5hbWU6ITAscHJvcFR5cGVzOiEwLHR5cGU6ITB9LFU9KChrPXt9KVtxXT17JCR0eXBlb2Y6ITAscmVuZGVyOiEwLGRlZmF1bHRQcm9wczohMCxkaXNwbGF5TmFtZTohMCxwcm9wVHlwZXM6ITB9LGtbR109SCxrKTtmdW5jdGlvbiBKKGUpe3JldHVybihcInR5cGVcImluKHQ9ZSkmJnQudHlwZS4kJHR5cGVvZik9PT1HP0g6XCIkJHR5cGVvZlwiaW4gZT9VW2UuJCR0eXBlb2ZdOlk7dmFyIHR9dmFyIFg9T2JqZWN0LmRlZmluZVByb3BlcnR5LFo9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsSz1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFE9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixlZT1PYmplY3QuZ2V0UHJvdG90eXBlT2YsdGU9T2JqZWN0LnByb3RvdHlwZTtmdW5jdGlvbiBuZShlLHQsbil7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIHQpe2lmKHRlKXt2YXIgcj1lZSh0KTtyJiZyIT09dGUmJm5lKGUscixuKX12YXIgbz1aKHQpO0smJihvPW8uY29uY2F0KEsodCkpKTtmb3IodmFyIHM9SihlKSxpPUoodCksYT0wO2E8by5sZW5ndGg7KythKXt2YXIgYz1vW2FdO2lmKCEoYyBpbiBXfHxuJiZuW2NdfHxpJiZjIGluIGl8fHMmJmMgaW4gcykpe3ZhciBsPVEodCxjKTt0cnl7WChlLGMsbCl9Y2F0Y2goZSl7fX19fXJldHVybiBlfWZ1bmN0aW9uIHJlKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9ZnVuY3Rpb24gb2UoZSl7cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGUmJlwic3R5bGVkQ29tcG9uZW50SWRcImluIGV9ZnVuY3Rpb24gc2UoZSx0KXtyZXR1cm4gZSYmdD9cIlwiLmNvbmNhdChlLFwiIFwiKS5jb25jYXQodCk6ZXx8dHx8XCJcIn1mdW5jdGlvbiBpZShlLHQpe2lmKDA9PT1lLmxlbmd0aClyZXR1cm5cIlwiO2Zvcih2YXIgbj1lWzBdLHI9MTtyPGUubGVuZ3RoO3IrKyluKz10P3QrZVtyXTplW3JdO3JldHVybiBufWZ1bmN0aW9uIGFlKGUpe3JldHVybiBudWxsIT09ZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUuY29uc3RydWN0b3IubmFtZT09PU9iamVjdC5uYW1lJiYhKFwicHJvcHNcImluIGUmJmUuJCR0eXBlb2YpfWZ1bmN0aW9uIGNlKGUsdCxuKXtpZih2b2lkIDA9PT1uJiYobj0hMSksIW4mJiFhZShlKSYmIUFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIHQ7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyllW3JdPWNlKGVbcl0sdFtyXSk7ZWxzZSBpZihhZSh0KSlmb3IodmFyIHIgaW4gdCllW3JdPWNlKGVbcl0sdFtyXSk7cmV0dXJuIGV9ZnVuY3Rpb24gbGUoZSx0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcInRvU3RyaW5nXCIse3ZhbHVlOnR9KX12YXIgdWU9XCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVj97MTpcIkNhbm5vdCBjcmVhdGUgc3R5bGVkLWNvbXBvbmVudCBmb3IgY29tcG9uZW50OiAlcy5cXG5cXG5cIiwyOlwiQ2FuJ3QgY29sbGVjdCBzdHlsZXMgb25jZSB5b3UndmUgY29uc3VtZWQgYSBgU2VydmVyU3R5bGVTaGVldGAncyBzdHlsZXMhIGBTZXJ2ZXJTdHlsZVNoZWV0YCBpcyBhIG9uZSBvZmYgaW5zdGFuY2UgZm9yIGVhY2ggc2VydmVyLXNpZGUgcmVuZGVyIGN5Y2xlLlxcblxcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcmV1c2UgaXQgYWNyb3NzIHJlbmRlcnM/XFxuLSBBcmUgeW91IGFjY2lkZW50YWxseSBjYWxsaW5nIGNvbGxlY3RTdHlsZXMgdHdpY2U/XFxuXFxuXCIsMzpcIlN0cmVhbWluZyBTU1IgaXMgb25seSBzdXBwb3J0ZWQgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50OyBQbGVhc2UgZG8gbm90IHRyeSB0byBjYWxsIHRoaXMgbWV0aG9kIGluIHRoZSBicm93c2VyLlxcblxcblwiLDQ6XCJUaGUgYFN0eWxlU2hlZXRNYW5hZ2VyYCBleHBlY3RzIGEgdmFsaWQgdGFyZ2V0IG9yIHNoZWV0IHByb3AhXFxuXFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIGNsaWVudCBhbmQgaXMgeW91ciB0YXJnZXQgZmFsc3k/XFxuLSBEb2VzIHRoaXMgZXJyb3Igb2NjdXIgb24gdGhlIHNlcnZlciBhbmQgaXMgdGhlIHNoZWV0IGZhbHN5P1xcblxcblwiLDU6XCJUaGUgY2xvbmUgbWV0aG9kIGNhbm5vdCBiZSB1c2VkIG9uIHRoZSBjbGllbnQhXFxuXFxuLSBBcmUgeW91IHJ1bm5pbmcgaW4gYSBjbGllbnQtbGlrZSBlbnZpcm9ubWVudCBvbiB0aGUgc2VydmVyP1xcbi0gQXJlIHlvdSB0cnlpbmcgdG8gcnVuIFNTUiBvbiB0aGUgY2xpZW50P1xcblxcblwiLDY6XCJUcnlpbmcgdG8gaW5zZXJ0IGEgbmV3IHN0eWxlIHRhZywgYnV0IHRoZSBnaXZlbiBOb2RlIGlzIHVubW91bnRlZCFcXG5cXG4tIEFyZSB5b3UgdXNpbmcgYSBjdXN0b20gdGFyZ2V0IHRoYXQgaXNuJ3QgbW91bnRlZD9cXG4tIERvZXMgeW91ciBkb2N1bWVudCBub3QgaGF2ZSBhIHZhbGlkIGhlYWQgZWxlbWVudD9cXG4tIEhhdmUgeW91IGFjY2lkZW50YWxseSByZW1vdmVkIGEgc3R5bGUgdGFnIG1hbnVhbGx5P1xcblxcblwiLDc6J1RoZW1lUHJvdmlkZXI6IFBsZWFzZSByZXR1cm4gYW4gb2JqZWN0IGZyb20geW91ciBcInRoZW1lXCIgcHJvcCBmdW5jdGlvbiwgZS5nLlxcblxcbmBgYGpzXFxudGhlbWU9eygpID0+ICh7fSl9XFxuYGBgXFxuXFxuJyw4OidUaGVtZVByb3ZpZGVyOiBQbGVhc2UgbWFrZSB5b3VyIFwidGhlbWVcIiBwcm9wIGFuIG9iamVjdC5cXG5cXG4nLDk6XCJNaXNzaW5nIGRvY3VtZW50IGA8aGVhZD5gXFxuXFxuXCIsMTA6XCJDYW5ub3QgZmluZCBhIFN0eWxlU2hlZXQgaW5zdGFuY2UuIFVzdWFsbHkgdGhpcyBoYXBwZW5zIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBjb3BpZXMgb2Ygc3R5bGVkLWNvbXBvbmVudHMgbG9hZGVkIGF0IG9uY2UuIENoZWNrIG91dCB0aGlzIGlzc3VlIGZvciBob3cgdG8gdHJvdWJsZXNob290IGFuZCBmaXggdGhlIGNvbW1vbiBjYXNlcyB3aGVyZSB0aGlzIHNpdHVhdGlvbiBjYW4gaGFwcGVuOiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvaXNzdWVzLzE5NDEjaXNzdWVjb21tZW50LTQxNzg2MjAyMVxcblxcblwiLDExOlwiX1RoaXMgZXJyb3Igd2FzIHJlcGxhY2VkIHdpdGggYSBkZXYtdGltZSB3YXJuaW5nLCBpdCB3aWxsIGJlIGRlbGV0ZWQgZm9yIHY0IGZpbmFsLl8gW2NyZWF0ZUdsb2JhbFN0eWxlXSByZWNlaXZlZCBjaGlsZHJlbiB3aGljaCB3aWxsIG5vdCBiZSByZW5kZXJlZC4gUGxlYXNlIHVzZSB0aGUgY29tcG9uZW50IHdpdGhvdXQgcGFzc2luZyBjaGlsZHJlbiBlbGVtZW50cy5cXG5cXG5cIiwxMjpcIkl0IHNlZW1zIHlvdSBhcmUgaW50ZXJwb2xhdGluZyBhIGtleWZyYW1lIGRlY2xhcmF0aW9uICglcykgaW50byBhbiB1bnRhZ2dlZCBzdHJpbmcuIFRoaXMgd2FzIHN1cHBvcnRlZCBpbiBzdHlsZWQtY29tcG9uZW50cyB2MywgYnV0IGlzIG5vdCBsb25nZXIgc3VwcG9ydGVkIGluIHY0IGFzIGtleWZyYW1lcyBhcmUgbm93IGluamVjdGVkIG9uLWRlbWFuZC4gUGxlYXNlIHdyYXAgeW91ciBzdHJpbmcgaW4gdGhlIGNzc1xcXFxgXFxcXGAgaGVscGVyIHdoaWNoIGVuc3VyZXMgdGhlIHN0eWxlcyBhcmUgaW5qZWN0ZWQgY29ycmVjdGx5LiBTZWUgaHR0cHM6Ly93d3cuc3R5bGVkLWNvbXBvbmVudHMuY29tL2RvY3MvYXBpI2Nzc1xcblxcblwiLDEzOlwiJXMgaXMgbm90IGEgc3R5bGVkIGNvbXBvbmVudCBhbmQgY2Fubm90IGJlIHJlZmVycmVkIHRvIHZpYSBjb21wb25lbnQgc2VsZWN0b3IuIFNlZSBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9hZHZhbmNlZCNyZWZlcnJpbmctdG8tb3RoZXItY29tcG9uZW50cyBmb3IgbW9yZSBkZXRhaWxzLlxcblxcblwiLDE0OidUaGVtZVByb3ZpZGVyOiBcInRoZW1lXCIgcHJvcCBpcyByZXF1aXJlZC5cXG5cXG4nLDE1OlwiQSBzdHlsaXMgcGx1Z2luIGhhcyBiZWVuIHN1cHBsaWVkIHRoYXQgaXMgbm90IG5hbWVkLiBXZSBuZWVkIGEgbmFtZSBmb3IgZWFjaCBwbHVnaW4gdG8gYmUgYWJsZSB0byBwcmV2ZW50IHN0eWxpbmcgY29sbGlzaW9ucyBiZXR3ZWVuIGRpZmZlcmVudCBzdHlsaXMgY29uZmlndXJhdGlvbnMgd2l0aGluIHRoZSBzYW1lIGFwcC4gQmVmb3JlIHlvdSBwYXNzIHlvdXIgcGx1Z2luIHRvIGA8U3R5bGVTaGVldE1hbmFnZXIgc3R5bGlzUGx1Z2lucz17W119PmAsIHBsZWFzZSBtYWtlIHN1cmUgZWFjaCBwbHVnaW4gaXMgdW5pcXVlbHktbmFtZWQsIGUuZy5cXG5cXG5gYGBqc1xcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbXBvcnRlZFBsdWdpbiwgJ25hbWUnLCB7IHZhbHVlOiAnc29tZS11bmlxdWUtbmFtZScgfSk7XFxuYGBgXFxuXFxuXCIsMTY6XCJSZWFjaGVkIHRoZSBsaW1pdCBvZiBob3cgbWFueSBzdHlsZWQgY29tcG9uZW50cyBtYXkgYmUgY3JlYXRlZCBhdCBncm91cCAlcy5cXG5Zb3UgbWF5IG9ubHkgY3JlYXRlIHVwIHRvIDEsMDczLDc0MSw4MjQgY29tcG9uZW50cy4gSWYgeW91J3JlIGNyZWF0aW5nIGNvbXBvbmVudHMgZHluYW1pY2FsbHksXFxuYXMgZm9yIGluc3RhbmNlIGluIHlvdXIgcmVuZGVyIG1ldGhvZCB0aGVuIHlvdSBtYXkgYmUgcnVubmluZyBpbnRvIHRoaXMgbGltaXRhdGlvbi5cXG5cXG5cIiwxNzpcIkNTU1N0eWxlU2hlZXQgY291bGQgbm90IGJlIGZvdW5kIG9uIEhUTUxTdHlsZUVsZW1lbnQuXFxuSGFzIHN0eWxlZC1jb21wb25lbnRzJyBzdHlsZSB0YWcgYmVlbiB1bm1vdW50ZWQgb3IgYWx0ZXJlZCBieSBhbm90aGVyIHNjcmlwdD9cXG5cIiwxODpcIlRoZW1lUHJvdmlkZXI6IFBsZWFzZSBtYWtlIHN1cmUgeW91ciB1c2VUaGVtZSBob29rIGlzIHdpdGhpbiBhIGA8VGhlbWVQcm92aWRlcj5gXCJ9Ont9O2Z1bmN0aW9uIHBlKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKWVbdF09YXJndW1lbnRzW3RdO2Zvcih2YXIgbj1lWzBdLHI9W10sbz0xLHM9ZS5sZW5ndGg7bzxzO28rPTEpci5wdXNoKGVbb10pO3JldHVybiByLmZvckVhY2goZnVuY3Rpb24oZSl7bj1uLnJlcGxhY2UoLyVbYS16XS8sZSl9KSxufWZ1bmN0aW9uIGRlKHQpe2Zvcih2YXIgbj1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3JldHVyblwicHJvZHVjdGlvblwiPT09cHJvY2Vzcy5lbnYuTk9ERV9FTlY/bmV3IEVycm9yKFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9tYWluL3BhY2thZ2VzL3N0eWxlZC1jb21wb25lbnRzL3NyYy91dGlscy9lcnJvcnMubWQjXCIuY29uY2F0KHQsXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpLmNvbmNhdChuLmxlbmd0aD4wP1wiIEFyZ3M6IFwiLmNvbmNhdChuLmpvaW4oXCIsIFwiKSk6XCJcIikpOm5ldyBFcnJvcihwZS5hcHBseSh2b2lkIDAsZS5fX3NwcmVhZEFycmF5KFt1ZVt0XV0sbiwhMSkpLnRyaW0oKSl9dmFyIGhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmdyb3VwU2l6ZXM9bmV3IFVpbnQzMkFycmF5KDUxMiksdGhpcy5sZW5ndGg9NTEyLHRoaXMudGFnPWV9cmV0dXJuIGUucHJvdG90eXBlLmluZGV4T2ZHcm91cD1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxuPTA7bjxlO24rKyl0Kz10aGlzLmdyb3VwU2l6ZXNbbl07cmV0dXJuIHR9LGUucHJvdG90eXBlLmluc2VydFJ1bGVzPWZ1bmN0aW9uKGUsdCl7aWYoZT49dGhpcy5ncm91cFNpemVzLmxlbmd0aCl7Zm9yKHZhciBuPXRoaXMuZ3JvdXBTaXplcyxyPW4ubGVuZ3RoLG89cjtlPj1vOylpZigobzw8PTEpPDApdGhyb3cgZGUoMTYsXCJcIi5jb25jYXQoZSkpO3RoaXMuZ3JvdXBTaXplcz1uZXcgVWludDMyQXJyYXkobyksdGhpcy5ncm91cFNpemVzLnNldChuKSx0aGlzLmxlbmd0aD1vO2Zvcih2YXIgcz1yO3M8bztzKyspdGhpcy5ncm91cFNpemVzW3NdPTB9Zm9yKHZhciBpPXRoaXMuaW5kZXhPZkdyb3VwKGUrMSksYT0ocz0wLHQubGVuZ3RoKTtzPGE7cysrKXRoaXMudGFnLmluc2VydFJ1bGUoaSx0W3NdKSYmKHRoaXMuZ3JvdXBTaXplc1tlXSsrLGkrKyl9LGUucHJvdG90eXBlLmNsZWFyR3JvdXA9ZnVuY3Rpb24oZSl7aWYoZTx0aGlzLmxlbmd0aCl7dmFyIHQ9dGhpcy5ncm91cFNpemVzW2VdLG49dGhpcy5pbmRleE9mR3JvdXAoZSkscj1uK3Q7dGhpcy5ncm91cFNpemVzW2VdPTA7Zm9yKHZhciBvPW47bzxyO28rKyl0aGlzLnRhZy5kZWxldGVSdWxlKG4pfX0sZS5wcm90b3R5cGUuZ2V0R3JvdXA9ZnVuY3Rpb24oZSl7dmFyIHQ9XCJcIjtpZihlPj10aGlzLmxlbmd0aHx8MD09PXRoaXMuZ3JvdXBTaXplc1tlXSlyZXR1cm4gdDtmb3IodmFyIG49dGhpcy5ncm91cFNpemVzW2VdLHI9dGhpcy5pbmRleE9mR3JvdXAoZSksbz1yK24scz1yO3M8bztzKyspdCs9XCJcIi5jb25jYXQodGhpcy50YWcuZ2V0UnVsZShzKSkuY29uY2F0KHYpO3JldHVybiB0fSxlfSgpLGZlPW5ldyBNYXAseWU9bmV3IE1hcCxtZT0xLHZlPWZ1bmN0aW9uKGUpe2lmKGZlLmhhcyhlKSlyZXR1cm4gZmUuZ2V0KGUpO2Zvcig7eWUuaGFzKG1lKTspbWUrKzt2YXIgdD1tZSsrO2lmKFwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJigoMHx0KTwwfHx0PjEwNzM3NDE4MjQpKXRocm93IGRlKDE2LFwiXCIuY29uY2F0KHQpKTtyZXR1cm4gZmUuc2V0KGUsdCkseWUuc2V0KHQsZSksdH0sZ2U9ZnVuY3Rpb24oZSx0KXttZT10KzEsZmUuc2V0KGUsdCkseWUuc2V0KHQsZSl9LFNlPVwic3R5bGVbXCIuY29uY2F0KGgsXCJdW1wiKS5jb25jYXQoeSwnPVwiJykuY29uY2F0KG0sJ1wiXScpLHdlPW5ldyBSZWdFeHAoXCJeXCIuY29uY2F0KGgsJ1xcXFwuZyhcXFxcZCspXFxcXFtpZD1cIihbXFxcXHdcXFxcZC1dKylcIlxcXFxdLio/XCIoW15cIl0qKScpKSxfZT1mdW5jdGlvbihlLHQsbil7Zm9yKHZhciByLG89bi5zcGxpdChcIixcIikscz0wLGk9by5sZW5ndGg7czxpO3MrKykocj1vW3NdKSYmZS5yZWdpc3Rlck5hbWUodCxyKX0sYmU9ZnVuY3Rpb24oZSx0KXtmb3IodmFyIG4scj0obnVsbCE9PShuPXQudGV4dENvbnRlbnQpJiZ2b2lkIDAhPT1uP246XCJcIikuc3BsaXQodiksbz1bXSxzPTAsaT1yLmxlbmd0aDtzPGk7cysrKXt2YXIgYT1yW3NdLnRyaW0oKTtpZihhKXt2YXIgYz1hLm1hdGNoKHdlKTtpZihjKXt2YXIgbD0wfHBhcnNlSW50KGNbMV0sMTApLHU9Y1syXTswIT09bCYmKGdlKHUsbCksX2UoZSx1LGNbM10pLGUuZ2V0VGFnKCkuaW5zZXJ0UnVsZXMobCxvKSksby5sZW5ndGg9MH1lbHNlIG8ucHVzaChhKX19fTtmdW5jdGlvbiBFZSgpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXz9fX3dlYnBhY2tfbm9uY2VfXzpudWxsfXZhciBOZT1mdW5jdGlvbihlKXt2YXIgdD1kb2N1bWVudC5oZWFkLG49ZXx8dCxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWZ1bmN0aW9uKGUpe3ZhciB0PUFycmF5LmZyb20oZS5xdWVyeVNlbGVjdG9yQWxsKFwic3R5bGVbXCIuY29uY2F0KGgsXCJdXCIpKSk7cmV0dXJuIHRbdC5sZW5ndGgtMV19KG4pLHM9dm9pZCAwIT09bz9vLm5leHRTaWJsaW5nOm51bGw7ci5zZXRBdHRyaWJ1dGUoaCxmKSxyLnNldEF0dHJpYnV0ZSh5LG0pO3ZhciBpPUVlKCk7cmV0dXJuIGkmJnIuc2V0QXR0cmlidXRlKFwibm9uY2VcIixpKSxuLmluc2VydEJlZm9yZShyLHMpLHJ9LFBlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt0aGlzLmVsZW1lbnQ9TmUoZSksdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpKSx0aGlzLnNoZWV0PWZ1bmN0aW9uKGUpe2lmKGUuc2hlZXQpcmV0dXJuIGUuc2hlZXQ7Zm9yKHZhciB0PWRvY3VtZW50LnN0eWxlU2hlZXRzLG49MCxyPXQubGVuZ3RoO248cjtuKyspe3ZhciBvPXRbbl07aWYoby5vd25lck5vZGU9PT1lKXJldHVybiBvfXRocm93IGRlKDE3KX0odGhpcy5lbGVtZW50KSx0aGlzLmxlbmd0aD0wfXJldHVybiBlLnByb3RvdHlwZS5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7dHJ5e3JldHVybiB0aGlzLnNoZWV0Lmluc2VydFJ1bGUodCxlKSx0aGlzLmxlbmd0aCsrLCEwfWNhdGNoKGUpe3JldHVybiExfX0sZS5wcm90b3R5cGUuZGVsZXRlUnVsZT1mdW5jdGlvbihlKXt0aGlzLnNoZWV0LmRlbGV0ZVJ1bGUoZSksdGhpcy5sZW5ndGgtLX0sZS5wcm90b3R5cGUuZ2V0UnVsZT1mdW5jdGlvbihlKXt2YXIgdD10aGlzLnNoZWV0LmNzc1J1bGVzW2VdO3JldHVybiB0JiZ0LmNzc1RleHQ/dC5jc3NUZXh0OlwiXCJ9LGV9KCksQ2U9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe3RoaXMuZWxlbWVudD1OZShlKSx0aGlzLm5vZGVzPXRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLHRoaXMubGVuZ3RoPTB9cmV0dXJuIGUucHJvdG90eXBlLmluc2VydFJ1bGU9ZnVuY3Rpb24oZSx0KXtpZihlPD10aGlzLmxlbmd0aCYmZT49MCl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCk7cmV0dXJuIHRoaXMuZWxlbWVudC5pbnNlcnRCZWZvcmUobix0aGlzLm5vZGVzW2VdfHxudWxsKSx0aGlzLmxlbmd0aCsrLCEwfXJldHVybiExfSxlLnByb3RvdHlwZS5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLm5vZGVzW2VdKSx0aGlzLmxlbmd0aC0tfSxlLnByb3RvdHlwZS5nZXRSdWxlPWZ1bmN0aW9uKGUpe3JldHVybiBlPHRoaXMubGVuZ3RoP3RoaXMubm9kZXNbZV0udGV4dENvbnRlbnQ6XCJcIn0sZX0oKSxBZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7dGhpcy5ydWxlcz1bXSx0aGlzLmxlbmd0aD0wfXJldHVybiBlLnByb3RvdHlwZS5pbnNlcnRSdWxlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGU8PXRoaXMubGVuZ3RoJiYodGhpcy5ydWxlcy5zcGxpY2UoZSwwLHQpLHRoaXMubGVuZ3RoKyssITApfSxlLnByb3RvdHlwZS5kZWxldGVSdWxlPWZ1bmN0aW9uKGUpe3RoaXMucnVsZXMuc3BsaWNlKGUsMSksdGhpcy5sZW5ndGgtLX0sZS5wcm90b3R5cGUuZ2V0UnVsZT1mdW5jdGlvbihlKXtyZXR1cm4gZTx0aGlzLmxlbmd0aD90aGlzLnJ1bGVzW2VdOlwiXCJ9LGV9KCksSWU9ZyxPZT17aXNTZXJ2ZXI6IWcsdXNlQ1NTT01JbmplY3Rpb246IVN9LHhlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0LG4scil7dm9pZCAwPT09dCYmKHQ9UCksdm9pZCAwPT09biYmKG49e30pO3ZhciBvPXRoaXM7dGhpcy5vcHRpb25zPWUuX19hc3NpZ24oZS5fX2Fzc2lnbih7fSxPZSksdCksdGhpcy5ncz1uLHRoaXMubmFtZXM9bmV3IE1hcChyKSx0aGlzLnNlcnZlcj0hIXQuaXNTZXJ2ZXIsIXRoaXMuc2VydmVyJiZnJiZJZSYmKEllPSExLGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlKSxuPTAscj10Lmxlbmd0aDtuPHI7bisrKXt2YXIgbz10W25dO28mJm8uZ2V0QXR0cmlidXRlKGgpIT09ZiYmKGJlKGUsbyksby5wYXJlbnROb2RlJiZvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobykpfX0odGhpcykpLGxlKHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7Zm9yKHZhciB0PWUuZ2V0VGFnKCksbj10Lmxlbmd0aCxyPVwiXCIsbz1mdW5jdGlvbihuKXt2YXIgbz1mdW5jdGlvbihlKXtyZXR1cm4geWUuZ2V0KGUpfShuKTtpZih2b2lkIDA9PT1vKXJldHVyblwiY29udGludWVcIjt2YXIgcz1lLm5hbWVzLmdldChvKSxpPXQuZ2V0R3JvdXAobik7aWYodm9pZCAwPT09c3x8MD09PWkubGVuZ3RoKXJldHVyblwiY29udGludWVcIjt2YXIgYT1cIlwiLmNvbmNhdChoLFwiLmdcIikuY29uY2F0KG4sJ1tpZD1cIicpLmNvbmNhdChvLCdcIl0nKSxjPVwiXCI7dm9pZCAwIT09cyYmcy5mb3JFYWNoKGZ1bmN0aW9uKGUpe2UubGVuZ3RoPjAmJihjKz1cIlwiLmNvbmNhdChlLFwiLFwiKSl9KSxyKz1cIlwiLmNvbmNhdChpKS5jb25jYXQoYSwne2NvbnRlbnQ6XCInKS5jb25jYXQoYywnXCJ9JykuY29uY2F0KHYpfSxzPTA7czxuO3MrKylvKHMpO3JldHVybiByfShvKX0pfXJldHVybiB0LnJlZ2lzdGVySWQ9ZnVuY3Rpb24oZSl7cmV0dXJuIHZlKGUpfSx0LnByb3RvdHlwZS5yZWNvbnN0cnVjdFdpdGhPcHRpb25zPWZ1bmN0aW9uKG4scil7cmV0dXJuIHZvaWQgMD09PXImJihyPSEwKSxuZXcgdChlLl9fYXNzaWduKGUuX19hc3NpZ24oe30sdGhpcy5vcHRpb25zKSxuKSx0aGlzLmdzLHImJnRoaXMubmFtZXN8fHZvaWQgMCl9LHQucHJvdG90eXBlLmFsbG9jYXRlR1NJbnN0YW5jZT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5nc1tlXT0odGhpcy5nc1tlXXx8MCkrMX0sdC5wcm90b3R5cGUuZ2V0VGFnPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGFnfHwodGhpcy50YWc9KGU9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS51c2VDU1NPTUluamVjdGlvbixuPWUudGFyZ2V0O3JldHVybiBlLmlzU2VydmVyP25ldyBBZShuKTp0P25ldyBQZShuKTpuZXcgQ2Uobil9KHRoaXMub3B0aW9ucyksbmV3IGhlKGUpKSk7dmFyIGV9LHQucHJvdG90eXBlLmhhc05hbWVGb3JJZD1mdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLm5hbWVzLmhhcyhlKSYmdGhpcy5uYW1lcy5nZXQoZSkuaGFzKHQpfSx0LnByb3RvdHlwZS5yZWdpc3Rlck5hbWU9ZnVuY3Rpb24oZSx0KXtpZih2ZShlKSx0aGlzLm5hbWVzLmhhcyhlKSl0aGlzLm5hbWVzLmdldChlKS5hZGQodCk7ZWxzZXt2YXIgbj1uZXcgU2V0O24uYWRkKHQpLHRoaXMubmFtZXMuc2V0KGUsbil9fSx0LnByb3RvdHlwZS5pbnNlcnRSdWxlcz1mdW5jdGlvbihlLHQsbil7dGhpcy5yZWdpc3Rlck5hbWUoZSx0KSx0aGlzLmdldFRhZygpLmluc2VydFJ1bGVzKHZlKGUpLG4pfSx0LnByb3RvdHlwZS5jbGVhck5hbWVzPWZ1bmN0aW9uKGUpe3RoaXMubmFtZXMuaGFzKGUpJiZ0aGlzLm5hbWVzLmdldChlKS5jbGVhcigpfSx0LnByb3RvdHlwZS5jbGVhclJ1bGVzPWZ1bmN0aW9uKGUpe3RoaXMuZ2V0VGFnKCkuY2xlYXJHcm91cCh2ZShlKSksdGhpcy5jbGVhck5hbWVzKGUpfSx0LnByb3RvdHlwZS5jbGVhclRhZz1mdW5jdGlvbigpe3RoaXMudGFnPXZvaWQgMH0sdH0oKSxUZT0vJi9nLERlPS9eXFxzKlxcL1xcLy4qJC9nbTtmdW5jdGlvbiBSZShlLHQpe3JldHVybiBlLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cInJ1bGVcIj09PWUudHlwZSYmKGUudmFsdWU9XCJcIi5jb25jYXQodCxcIiBcIikuY29uY2F0KGUudmFsdWUpLGUudmFsdWU9ZS52YWx1ZS5yZXBsYWNlQWxsKFwiLFwiLFwiLFwiLmNvbmNhdCh0LFwiIFwiKSksZS5wcm9wcz1lLnByb3BzLm1hcChmdW5jdGlvbihlKXtyZXR1cm5cIlwiLmNvbmNhdCh0LFwiIFwiKS5jb25jYXQoZSl9KSksQXJyYXkuaXNBcnJheShlLmNoaWxkcmVuKSYmXCJAa2V5ZnJhbWVzXCIhPT1lLnR5cGUmJihlLmNoaWxkcmVuPVJlKGUuY2hpbGRyZW4sdCkpLGV9KX1mdW5jdGlvbiBqZShlKXt2YXIgdCxuLHIsbz12b2lkIDA9PT1lP1A6ZSxzPW8ub3B0aW9ucyxpPXZvaWQgMD09PXM/UDpzLGE9by5wbHVnaW5zLGM9dm9pZCAwPT09YT9OOmEsbD1mdW5jdGlvbihlLHIsbyl7cmV0dXJuIG8uc3RhcnRzV2l0aChuKSYmby5lbmRzV2l0aChuKSYmby5yZXBsYWNlQWxsKG4sXCJcIikubGVuZ3RoPjA/XCIuXCIuY29uY2F0KHQpOmV9LHU9Yy5zbGljZSgpO3UucHVzaChmdW5jdGlvbihlKXtlLnR5cGU9PT1wLlJVTEVTRVQmJmUudmFsdWUuaW5jbHVkZXMoXCImXCIpJiYoZS5wcm9wc1swXT1lLnByb3BzWzBdLnJlcGxhY2UoVGUsbikucmVwbGFjZShyLGwpKX0pLGkucHJlZml4JiZ1LnB1c2gocC5wcmVmaXhlciksdS5wdXNoKHAuc3RyaW5naWZ5KTt2YXIgZD1mdW5jdGlvbihlLG8scyxhKXt2b2lkIDA9PT1vJiYobz1cIlwiKSx2b2lkIDA9PT1zJiYocz1cIlwiKSx2b2lkIDA9PT1hJiYoYT1cIiZcIiksdD1hLG49byxyPW5ldyBSZWdFeHAoXCJcXFxcXCIuY29uY2F0KG4sXCJcXFxcYlwiKSxcImdcIik7dmFyIGM9ZS5yZXBsYWNlKERlLFwiXCIpLGw9cC5jb21waWxlKHN8fG8/XCJcIi5jb25jYXQocyxcIiBcIikuY29uY2F0KG8sXCIgeyBcIikuY29uY2F0KGMsXCIgfVwiKTpjKTtpLm5hbWVzcGFjZSYmKGw9UmUobCxpLm5hbWVzcGFjZSkpO3ZhciBkPVtdO3JldHVybiBwLnNlcmlhbGl6ZShsLHAubWlkZGxld2FyZSh1LmNvbmNhdChwLnJ1bGVzaGVldChmdW5jdGlvbihlKXtyZXR1cm4gZC5wdXNoKGUpfSkpKSksZH07cmV0dXJuIGQuaGFzaD1jLmxlbmd0aD9jLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiB0Lm5hbWV8fGRlKDE1KSxWKGUsdC5uYW1lKX0sTSkudG9TdHJpbmcoKTpcIlwiLGR9dmFyIGtlPW5ldyB4ZSxNZT1qZSgpLFZlPWwuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHtzaG91bGRGb3J3YXJkUHJvcDp2b2lkIDAsc3R5bGVTaGVldDprZSxzdHlsaXM6TWV9KSxGZT1WZS5Db25zdW1lcix6ZT1sLmRlZmF1bHQuY3JlYXRlQ29udGV4dCh2b2lkIDApO2Z1bmN0aW9uICRlKCl7cmV0dXJuIG4udXNlQ29udGV4dChWZSl9ZnVuY3Rpb24gQmUoZSl7dmFyIHQ9bi51c2VTdGF0ZShlLnN0eWxpc1BsdWdpbnMpLHI9dFswXSxvPXRbMV0scz0kZSgpLnN0eWxlU2hlZXQsaT1uLnVzZU1lbW8oZnVuY3Rpb24oKXt2YXIgdD1zO3JldHVybiBlLnNoZWV0P3Q9ZS5zaGVldDplLnRhcmdldCYmKHQ9dC5yZWNvbnN0cnVjdFdpdGhPcHRpb25zKHt0YXJnZXQ6ZS50YXJnZXR9LCExKSksZS5kaXNhYmxlQ1NTT01JbmplY3Rpb24mJih0PXQucmVjb25zdHJ1Y3RXaXRoT3B0aW9ucyh7dXNlQ1NTT01JbmplY3Rpb246ITF9KSksdH0sW2UuZGlzYWJsZUNTU09NSW5qZWN0aW9uLGUuc2hlZXQsZS50YXJnZXQsc10pLGE9bi51c2VNZW1vKGZ1bmN0aW9uKCl7cmV0dXJuIGplKHtvcHRpb25zOntuYW1lc3BhY2U6ZS5uYW1lc3BhY2UscHJlZml4OmUuZW5hYmxlVmVuZG9yUHJlZml4ZXN9LHBsdWdpbnM6cn0pfSxbZS5lbmFibGVWZW5kb3JQcmVmaXhlcyxlLm5hbWVzcGFjZSxyXSk7bi51c2VFZmZlY3QoZnVuY3Rpb24oKXt1LmRlZmF1bHQocixlLnN0eWxpc1BsdWdpbnMpfHxvKGUuc3R5bGlzUGx1Z2lucyl9LFtlLnN0eWxpc1BsdWdpbnNdKTt2YXIgYz1uLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm57c2hvdWxkRm9yd2FyZFByb3A6ZS5zaG91bGRGb3J3YXJkUHJvcCxzdHlsZVNoZWV0Omksc3R5bGlzOmF9fSxbZS5zaG91bGRGb3J3YXJkUHJvcCxpLGFdKTtyZXR1cm4gbC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoVmUuUHJvdmlkZXIse3ZhbHVlOmN9LGwuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHplLlByb3ZpZGVyLHt2YWx1ZTphfSxlLmNoaWxkcmVuKSl9dmFyIExlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3ZhciBuPXRoaXM7dGhpcy5pbmplY3Q9ZnVuY3Rpb24oZSx0KXt2b2lkIDA9PT10JiYodD1NZSk7dmFyIHI9bi5uYW1lK3QuaGFzaDtlLmhhc05hbWVGb3JJZChuLmlkLHIpfHxlLmluc2VydFJ1bGVzKG4uaWQscix0KG4ucnVsZXMscixcIkBrZXlmcmFtZXNcIikpfSx0aGlzLm5hbWU9ZSx0aGlzLmlkPVwic2Mta2V5ZnJhbWVzLVwiLmNvbmNhdChlKSx0aGlzLnJ1bGVzPXQsbGUodGhpcyxmdW5jdGlvbigpe3Rocm93IGRlKDEyLFN0cmluZyhuLm5hbWUpKX0pfXJldHVybiBlLnByb3RvdHlwZS5nZXROYW1lPWZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1NZSksdGhpcy5uYW1lK2UuaGFzaH0sZX0oKSxHZT1mdW5jdGlvbihlKXtyZXR1cm4gZT49XCJBXCImJmU8PVwiWlwifTtmdW5jdGlvbiBxZShlKXtmb3IodmFyIHQ9XCJcIixuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciByPWVbbl07aWYoMT09PW4mJlwiLVwiPT09ciYmXCItXCI9PT1lWzBdKXJldHVybiBlO0dlKHIpP3QrPVwiLVwiK3IudG9Mb3dlckNhc2UoKTp0Kz1yfXJldHVybiB0LnN0YXJ0c1dpdGgoXCJtcy1cIik/XCItXCIrdDp0fXZhciBZZT1mdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09ZXx8ITE9PT1lfHxcIlwiPT09ZX0sV2U9ZnVuY3Rpb24odCl7dmFyIG4scixvPVtdO2Zvcih2YXIgcyBpbiB0KXt2YXIgaT10W3NdO3QuaGFzT3duUHJvcGVydHkocykmJiFZZShpKSYmKEFycmF5LmlzQXJyYXkoaSkmJmkuaXNDc3N8fHJlKGkpP28ucHVzaChcIlwiLmNvbmNhdChxZShzKSxcIjpcIiksaSxcIjtcIik6YWUoaSk/by5wdXNoLmFwcGx5KG8sZS5fX3NwcmVhZEFycmF5KGUuX19zcHJlYWRBcnJheShbXCJcIi5jb25jYXQocyxcIiB7XCIpXSxXZShpKSwhMSksW1wifVwiXSwhMSkpOm8ucHVzaChcIlwiLmNvbmNhdChxZShzKSxcIjogXCIpLmNvbmNhdCgobj1zLG51bGw9PShyPWkpfHxcImJvb2xlYW5cIj09dHlwZW9mIHJ8fFwiXCI9PT1yP1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHJ8fDA9PT1yfHxuIGluIGQuZGVmYXVsdHx8bi5zdGFydHNXaXRoKFwiLS1cIik/U3RyaW5nKHIpLnRyaW0oKTpcIlwiLmNvbmNhdChyLFwicHhcIikpLFwiO1wiKSkpfXJldHVybiBvfTtmdW5jdGlvbiBIZShlLHQsbixyKXtpZihZZShlKSlyZXR1cm5bXTtpZihvZShlKSlyZXR1cm5bXCIuXCIuY29uY2F0KGUuc3R5bGVkQ29tcG9uZW50SWQpXTtpZihyZShlKSl7aWYoIXJlKHM9ZSl8fHMucHJvdG90eXBlJiZzLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50fHwhdClyZXR1cm5bZV07dmFyIG89ZSh0KTtyZXR1cm5cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WfHxcIm9iamVjdFwiIT10eXBlb2Ygb3x8QXJyYXkuaXNBcnJheShvKXx8byBpbnN0YW5jZW9mIExlfHxhZShvKXx8bnVsbD09PW98fGNvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoJChlKSxcIiBpcyBub3QgYSBzdHlsZWQgY29tcG9uZW50IGFuZCBjYW5ub3QgYmUgcmVmZXJyZWQgdG8gdmlhIGNvbXBvbmVudCBzZWxlY3Rvci4gU2VlIGh0dHBzOi8vd3d3LnN0eWxlZC1jb21wb25lbnRzLmNvbS9kb2NzL2FkdmFuY2VkI3JlZmVycmluZy10by1vdGhlci1jb21wb25lbnRzIGZvciBtb3JlIGRldGFpbHMuXCIpKSxIZShvLHQsbixyKX12YXIgcztyZXR1cm4gZSBpbnN0YW5jZW9mIExlP24/KGUuaW5qZWN0KG4sciksW2UuZ2V0TmFtZShyKV0pOltlXTphZShlKT9XZShlKTpBcnJheS5pc0FycmF5KGUpP0FycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoTixlLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gSGUoZSx0LG4scil9KSk6W2UudG9TdHJpbmcoKV19ZnVuY3Rpb24gVWUoZSl7Zm9yKHZhciB0PTA7dDxlLmxlbmd0aDt0Kz0xKXt2YXIgbj1lW3RdO2lmKHJlKG4pJiYhb2UobikpcmV0dXJuITF9cmV0dXJuITB9dmFyIEplPUYobSksWGU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCxuKXt0aGlzLnJ1bGVzPWUsdGhpcy5zdGF0aWNSdWxlc0lkPVwiXCIsdGhpcy5pc1N0YXRpYz1cInByb2R1Y3Rpb25cIj09PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYodm9pZCAwPT09bnx8bi5pc1N0YXRpYykmJlVlKGUpLHRoaXMuY29tcG9uZW50SWQ9dCx0aGlzLmJhc2VIYXNoPVYoSmUsdCksdGhpcy5iYXNlU3R5bGU9bix4ZS5yZWdpc3RlcklkKHQpfXJldHVybiBlLnByb3RvdHlwZS5nZW5lcmF0ZUFuZEluamVjdFN0eWxlcz1mdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5iYXNlU3R5bGU/dGhpcy5iYXNlU3R5bGUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXMoZSx0LG4pOlwiXCI7aWYodGhpcy5pc1N0YXRpYyYmIW4uaGFzaClpZih0aGlzLnN0YXRpY1J1bGVzSWQmJnQuaGFzTmFtZUZvcklkKHRoaXMuY29tcG9uZW50SWQsdGhpcy5zdGF0aWNSdWxlc0lkKSlyPXNlKHIsdGhpcy5zdGF0aWNSdWxlc0lkKTtlbHNle3ZhciBvPWllKEhlKHRoaXMucnVsZXMsZSx0LG4pKSxzPWooVih0aGlzLmJhc2VIYXNoLG8pPj4+MCk7aWYoIXQuaGFzTmFtZUZvcklkKHRoaXMuY29tcG9uZW50SWQscykpe3ZhciBpPW4obyxcIi5cIi5jb25jYXQocyksdm9pZCAwLHRoaXMuY29tcG9uZW50SWQpO3QuaW5zZXJ0UnVsZXModGhpcy5jb21wb25lbnRJZCxzLGkpfXI9c2UocixzKSx0aGlzLnN0YXRpY1J1bGVzSWQ9c31lbHNle2Zvcih2YXIgYT1WKHRoaXMuYmFzZUhhc2gsbi5oYXNoKSxjPVwiXCIsbD0wO2w8dGhpcy5ydWxlcy5sZW5ndGg7bCsrKXt2YXIgdT10aGlzLnJ1bGVzW2xdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB1KWMrPXUsXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKGE9VihhLHUpKTtlbHNlIGlmKHUpe3ZhciBwPWllKEhlKHUsZSx0LG4pKTthPVYoYSxwK2wpLGMrPXB9fWlmKGMpe3ZhciBkPWooYT4+PjApO3QuaGFzTmFtZUZvcklkKHRoaXMuY29tcG9uZW50SWQsZCl8fHQuaW5zZXJ0UnVsZXModGhpcy5jb21wb25lbnRJZCxkLG4oYyxcIi5cIi5jb25jYXQoZCksdm9pZCAwLHRoaXMuY29tcG9uZW50SWQpKSxyPXNlKHIsZCl9fXJldHVybiByfSxlfSgpLFplPWwuZGVmYXVsdC5jcmVhdGVDb250ZXh0KHZvaWQgMCksS2U9WmUuQ29uc3VtZXIsUWU9e30sZXQ9bmV3IFNldDtmdW5jdGlvbiB0dCh0LHIsbyl7dmFyIHM9b2UodCksaT10LGE9IUIodCksdT1yLmF0dHJzLHA9dm9pZCAwPT09dT9OOnUsZD1yLmNvbXBvbmVudElkLGg9dm9pZCAwPT09ZD9mdW5jdGlvbihlLHQpe3ZhciBuPVwic3RyaW5nXCIhPXR5cGVvZiBlP1wic2NcIjp4KGUpO1FlW25dPShRZVtuXXx8MCkrMTt2YXIgcj1cIlwiLmNvbmNhdChuLFwiLVwiKS5jb25jYXQoeihtK24rUWVbbl0pKTtyZXR1cm4gdD9cIlwiLmNvbmNhdCh0LFwiLVwiKS5jb25jYXQocik6cn0oci5kaXNwbGF5TmFtZSxyLnBhcmVudENvbXBvbmVudElkKTpkLGY9ci5kaXNwbGF5TmFtZSx5PXZvaWQgMD09PWY/ZnVuY3Rpb24oZSl7cmV0dXJuIEIoZSk/XCJzdHlsZWQuXCIuY29uY2F0KGUpOlwiU3R5bGVkKFwiLmNvbmNhdCgkKGUpLFwiKVwiKX0odCk6Zix2PXIuZGlzcGxheU5hbWUmJnIuY29tcG9uZW50SWQ/XCJcIi5jb25jYXQoeChyLmRpc3BsYXlOYW1lKSxcIi1cIikuY29uY2F0KHIuY29tcG9uZW50SWQpOnIuY29tcG9uZW50SWR8fGgsZz1zJiZpLmF0dHJzP2kuYXR0cnMuY29uY2F0KHApLmZpbHRlcihCb29sZWFuKTpwLFM9ci5zaG91bGRGb3J3YXJkUHJvcDtpZihzJiZpLnNob3VsZEZvcndhcmRQcm9wKXt2YXIgdz1pLnNob3VsZEZvcndhcmRQcm9wO2lmKHIuc2hvdWxkRm9yd2FyZFByb3Ape3ZhciBfPXIuc2hvdWxkRm9yd2FyZFByb3A7Uz1mdW5jdGlvbihlLHQpe3JldHVybiB3KGUsdCkmJl8oZSx0KX19ZWxzZSBTPXd9dmFyIGI9bmV3IFhlKG8sdixzP2kuY29tcG9uZW50U3R5bGU6dm9pZCAwKTtmdW5jdGlvbiBJKHQscil7cmV0dXJuIGZ1bmN0aW9uKHQscixvKXt2YXIgcz10LmF0dHJzLGk9dC5jb21wb25lbnRTdHlsZSxhPXQuZGVmYXVsdFByb3BzLHU9dC5mb2xkZWRDb21wb25lbnRJZHMscD10LnN0eWxlZENvbXBvbmVudElkLGQ9dC50YXJnZXQsaD1sLmRlZmF1bHQudXNlQ29udGV4dChaZSksZj0kZSgpLHk9dC5zaG91bGRGb3J3YXJkUHJvcHx8Zi5zaG91bGRGb3J3YXJkUHJvcDtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZuLnVzZURlYnVnVmFsdWUocCk7dmFyIG09QyhyLGgsYSl8fFAsdj1mdW5jdGlvbih0LG4scil7Zm9yKHZhciBvLHM9ZS5fX2Fzc2lnbihlLl9fYXNzaWduKHt9LG4pLHtjbGFzc05hbWU6dm9pZCAwLHRoZW1lOnJ9KSxpPTA7aTx0Lmxlbmd0aDtpKz0xKXt2YXIgYT1yZShvPXRbaV0pP28ocyk6bztmb3IodmFyIGMgaW4gYSlzW2NdPVwiY2xhc3NOYW1lXCI9PT1jP3NlKHNbY10sYVtjXSk6XCJzdHlsZVwiPT09Yz9lLl9fYXNzaWduKGUuX19hc3NpZ24oe30sc1tjXSksYVtjXSk6YVtjXX1yZXR1cm4gbi5jbGFzc05hbWUmJihzLmNsYXNzTmFtZT1zZShzLmNsYXNzTmFtZSxuLmNsYXNzTmFtZSkpLHN9KHMscixtKSxnPXYuYXN8fGQsUz17fTtmb3IodmFyIHcgaW4gdil2b2lkIDA9PT12W3ddfHxcIiRcIj09PXdbMF18fFwiYXNcIj09PXd8fFwidGhlbWVcIj09PXcmJnYudGhlbWU9PT1tfHwoXCJmb3J3YXJkZWRBc1wiPT09dz9TLmFzPXYuZm9yd2FyZGVkQXM6eSYmIXkodyxnKXx8KFNbd109dlt3XSx5fHxcImRldmVsb3BtZW50XCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOVnx8Yy5kZWZhdWx0KHcpfHxldC5oYXModyl8fCFBLmhhcyhnKXx8KGV0LmFkZCh3KSxjb25zb2xlLndhcm4oJ3N0eWxlZC1jb21wb25lbnRzOiBpdCBsb29rcyBsaWtlIGFuIHVua25vd24gcHJvcCBcIicuY29uY2F0KHcsJ1wiIGlzIGJlaW5nIHNlbnQgdGhyb3VnaCB0byB0aGUgRE9NLCB3aGljaCB3aWxsIGxpa2VseSB0cmlnZ2VyIGEgUmVhY3QgY29uc29sZSBlcnJvci4gSWYgeW91IHdvdWxkIGxpa2UgYXV0b21hdGljIGZpbHRlcmluZyBvZiB1bmtub3duIHByb3BzLCB5b3UgY2FuIG9wdC1pbnRvIHRoYXQgYmVoYXZpb3IgdmlhIGA8U3R5bGVTaGVldE1hbmFnZXIgc2hvdWxkRm9yd2FyZFByb3A9ey4uLn0+YCAoY29ubmVjdCBhbiBBUEkgbGlrZSBgQGVtb3Rpb24vaXMtcHJvcC12YWxpZGApIG9yIGNvbnNpZGVyIHVzaW5nIHRyYW5zaWVudCBwcm9wcyAoYCRgIHByZWZpeCBmb3IgYXV0b21hdGljIGZpbHRlcmluZy4pJykpKSkpO3ZhciBfPWZ1bmN0aW9uKGUsdCl7dmFyIHI9JGUoKSxvPWUuZ2VuZXJhdGVBbmRJbmplY3RTdHlsZXModCxyLnN0eWxlU2hlZXQsci5zdHlsaXMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJm4udXNlRGVidWdWYWx1ZShvKSxvfShpLHYpO1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnQud2FyblRvb01hbnlDbGFzc2VzJiZ0Lndhcm5Ub29NYW55Q2xhc3NlcyhfKTt2YXIgYj1zZSh1LHApO3JldHVybiBfJiYoYis9XCIgXCIrXyksdi5jbGFzc05hbWUmJihiKz1cIiBcIit2LmNsYXNzTmFtZSksU1tCKGcpJiYhQS5oYXMoZyk/XCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJdPWIsUy5yZWY9byxuLmNyZWF0ZUVsZW1lbnQoZyxTKX0oTyx0LHIpfUkuZGlzcGxheU5hbWU9eTt2YXIgTz1sLmRlZmF1bHQuZm9yd2FyZFJlZihJKTtyZXR1cm4gTy5hdHRycz1nLE8uY29tcG9uZW50U3R5bGU9YixPLmRpc3BsYXlOYW1lPXksTy5zaG91bGRGb3J3YXJkUHJvcD1TLE8uZm9sZGVkQ29tcG9uZW50SWRzPXM/c2UoaS5mb2xkZWRDb21wb25lbnRJZHMsaS5zdHlsZWRDb21wb25lbnRJZCk6XCJcIixPLnN0eWxlZENvbXBvbmVudElkPXYsTy50YXJnZXQ9cz9pLnRhcmdldDp0LE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLFwiZGVmYXVsdFByb3BzXCIse2dldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHN9LHNldDpmdW5jdGlvbihlKXt0aGlzLl9mb2xkZWREZWZhdWx0UHJvcHM9cz9mdW5jdGlvbihlKXtmb3IodmFyIHQ9W10sbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspdFtuLTFdPWFyZ3VtZW50c1tuXTtmb3IodmFyIHI9MCxvPXQ7cjxvLmxlbmd0aDtyKyspY2UoZSxvW3JdLCEwKTtyZXR1cm4gZX0oe30saS5kZWZhdWx0UHJvcHMsZSk6ZX19KSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiYoRSh5LHYpLE8ud2FyblRvb01hbnlDbGFzc2VzPWZ1bmN0aW9uKGUsdCl7dmFyIG49e30scj0hMTtyZXR1cm4gZnVuY3Rpb24obyl7aWYoIXImJihuW29dPSEwLE9iamVjdC5rZXlzKG4pLmxlbmd0aD49MjAwKSl7dmFyIHM9dD8nIHdpdGggdGhlIGlkIG9mIFwiJy5jb25jYXQodCwnXCInKTpcIlwiO2NvbnNvbGUud2FybihcIk92ZXIgXCIuY29uY2F0KDIwMCxcIiBjbGFzc2VzIHdlcmUgZ2VuZXJhdGVkIGZvciBjb21wb25lbnQgXCIpLmNvbmNhdChlKS5jb25jYXQocyxcIi5cXG5cIikrXCJDb25zaWRlciB1c2luZyB0aGUgYXR0cnMgbWV0aG9kLCB0b2dldGhlciB3aXRoIGEgc3R5bGUgb2JqZWN0IGZvciBmcmVxdWVudGx5IGNoYW5nZWQgc3R5bGVzLlxcbkV4YW1wbGU6XFxuICBjb25zdCBDb21wb25lbnQgPSBzdHlsZWQuZGl2LmF0dHJzKHByb3BzID0+ICh7XFxuICAgIHN0eWxlOiB7XFxuICAgICAgYmFja2dyb3VuZDogcHJvcHMuYmFja2dyb3VuZCxcXG4gICAgfSxcXG4gIH0pKWB3aWR0aDogMTAwJTtgXFxuXFxuICA8Q29tcG9uZW50IC8+XCIpLHI9ITAsbj17fX19fSh5LHYpKSxsZShPLGZ1bmN0aW9uKCl7cmV0dXJuXCIuXCIuY29uY2F0KE8uc3R5bGVkQ29tcG9uZW50SWQpfSksYSYmbmUoTyx0LHthdHRyczohMCxjb21wb25lbnRTdHlsZTohMCxkaXNwbGF5TmFtZTohMCxmb2xkZWRDb21wb25lbnRJZHM6ITAsc2hvdWxkRm9yd2FyZFByb3A6ITAsc3R5bGVkQ29tcG9uZW50SWQ6ITAsdGFyZ2V0OiEwfSksT31mdW5jdGlvbiBudChlLHQpe2Zvcih2YXIgbj1bZVswXV0scj0wLG89dC5sZW5ndGg7cjxvO3IrPTEpbi5wdXNoKHRbcl0sZVtyKzFdKTtyZXR1cm4gbn12YXIgcnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5hc3NpZ24oZSx7aXNDc3M6ITB9KX07ZnVuY3Rpb24gb3QodCl7Zm9yKHZhciBuPVtdLHI9MTtyPGFyZ3VtZW50cy5sZW5ndGg7cisrKW5bci0xXT1hcmd1bWVudHNbcl07aWYocmUodCl8fGFlKHQpKXJldHVybiBydChIZShudChOLGUuX19zcHJlYWRBcnJheShbdF0sbiwhMCkpKSk7dmFyIG89dDtyZXR1cm4gMD09PW4ubGVuZ3RoJiYxPT09by5sZW5ndGgmJlwic3RyaW5nXCI9PXR5cGVvZiBvWzBdP0hlKG8pOnJ0KEhlKG50KG8sbikpKX1mdW5jdGlvbiBzdCh0LG4scil7aWYodm9pZCAwPT09ciYmKHI9UCksIW4pdGhyb3cgZGUoMSxuKTt2YXIgbz1mdW5jdGlvbihvKXtmb3IodmFyIHM9W10saT0xO2k8YXJndW1lbnRzLmxlbmd0aDtpKyspc1tpLTFdPWFyZ3VtZW50c1tpXTtyZXR1cm4gdChuLHIsb3QuYXBwbHkodm9pZCAwLGUuX19zcHJlYWRBcnJheShbb10scywhMSkpKX07cmV0dXJuIG8uYXR0cnM9ZnVuY3Rpb24obyl7cmV0dXJuIHN0KHQsbixlLl9fYXNzaWduKGUuX19hc3NpZ24oe30scikse2F0dHJzOkFycmF5LnByb3RvdHlwZS5jb25jYXQoci5hdHRycyxvKS5maWx0ZXIoQm9vbGVhbil9KSl9LG8ud2l0aENvbmZpZz1mdW5jdGlvbihvKXtyZXR1cm4gc3QodCxuLGUuX19hc3NpZ24oZS5fX2Fzc2lnbih7fSxyKSxvKSl9LG99dmFyIGl0PWZ1bmN0aW9uKGUpe3JldHVybiBzdCh0dCxlKX0sYXQ9aXQ7QS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2F0W2VdPWl0KGUpfSk7dmFyIGN0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe3RoaXMucnVsZXM9ZSx0aGlzLmNvbXBvbmVudElkPXQsdGhpcy5pc1N0YXRpYz1VZShlKSx4ZS5yZWdpc3RlcklkKHRoaXMuY29tcG9uZW50SWQrMSl9cmV0dXJuIGUucHJvdG90eXBlLmNyZWF0ZVN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXt2YXIgbz1yKGllKEhlKHRoaXMucnVsZXMsdCxuLHIpKSxcIlwiKSxzPXRoaXMuY29tcG9uZW50SWQrZTtuLmluc2VydFJ1bGVzKHMscyxvKX0sZS5wcm90b3R5cGUucmVtb3ZlU3R5bGVzPWZ1bmN0aW9uKGUsdCl7dC5jbGVhclJ1bGVzKHRoaXMuY29tcG9uZW50SWQrZSl9LGUucHJvdG90eXBlLnJlbmRlclN0eWxlcz1mdW5jdGlvbihlLHQsbixyKXtlPjImJnhlLnJlZ2lzdGVySWQodGhpcy5jb21wb25lbnRJZCtlKSx0aGlzLnJlbW92ZVN0eWxlcyhlLG4pLHRoaXMuY3JlYXRlU3R5bGVzKGUsdCxuLHIpfSxlfSgpLGx0PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCgpe3ZhciB0PXRoaXM7dGhpcy5fZW1pdFNoZWV0Q1NTPWZ1bmN0aW9uKCl7dmFyIGU9dC5pbnN0YW5jZS50b1N0cmluZygpLG49RWUoKSxyPWllKFtuJiYnbm9uY2U9XCInLmNvbmNhdChuLCdcIicpLFwiXCIuY29uY2F0KGgsJz1cInRydWVcIicpLFwiXCIuY29uY2F0KHksJz1cIicpLmNvbmNhdChtLCdcIicpXS5maWx0ZXIoQm9vbGVhbiksXCIgXCIpO3JldHVyblwiPHN0eWxlIFwiLmNvbmNhdChyLFwiPlwiKS5jb25jYXQoZSxcIjwvc3R5bGU+XCIpfSx0aGlzLmdldFN0eWxlVGFncz1mdW5jdGlvbigpe2lmKHQuc2VhbGVkKXRocm93IGRlKDIpO3JldHVybiB0Ll9lbWl0U2hlZXRDU1MoKX0sdGhpcy5nZXRTdHlsZUVsZW1lbnQ9ZnVuY3Rpb24oKXt2YXIgbjtpZih0LnNlYWxlZCl0aHJvdyBkZSgyKTt2YXIgcj0oKG49e30pW2hdPVwiXCIsblt5XT1tLG4uZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e19faHRtbDp0Lmluc3RhbmNlLnRvU3RyaW5nKCl9LG4pLG89RWUoKTtyZXR1cm4gbyYmKHIubm9uY2U9byksW2wuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIixlLl9fYXNzaWduKHt9LHIse2tleTpcInNjLTAtMFwifSkpXX0sdGhpcy5zZWFsPWZ1bmN0aW9uKCl7dC5zZWFsZWQ9ITB9LHRoaXMuaW5zdGFuY2U9bmV3IHhlKHtpc1NlcnZlcjohMH0pLHRoaXMuc2VhbGVkPSExfXJldHVybiB0LnByb3RvdHlwZS5jb2xsZWN0U3R5bGVzPWZ1bmN0aW9uKGUpe2lmKHRoaXMuc2VhbGVkKXRocm93IGRlKDIpO3JldHVybiBsLmRlZmF1bHQuY3JlYXRlRWxlbWVudChCZSx7c2hlZXQ6dGhpcy5pbnN0YW5jZX0sZSl9LHQucHJvdG90eXBlLmludGVybGVhdmVXaXRoTm9kZVN0cmVhbT1mdW5jdGlvbihlKXt0aHJvdyBkZSgzKX0sdH0oKSx1dD17U3R5bGVTaGVldDp4ZSxtYWluU2hlZXQ6a2V9O1wicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBuYXZpZ2F0b3ImJlwiUmVhY3ROYXRpdmVcIj09PW5hdmlnYXRvci5wcm9kdWN0JiZjb25zb2xlLndhcm4oXCJJdCBsb29rcyBsaWtlIHlvdSd2ZSBpbXBvcnRlZCAnc3R5bGVkLWNvbXBvbmVudHMnIG9uIFJlYWN0IE5hdGl2ZS5cXG5QZXJoYXBzIHlvdSdyZSBsb29raW5nIHRvIGltcG9ydCAnc3R5bGVkLWNvbXBvbmVudHMvbmF0aXZlJz9cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3d3dy5zdHlsZWQtY29tcG9uZW50cy5jb20vZG9jcy9iYXNpY3MjcmVhY3QtbmF0aXZlXCIpO3ZhciBwdD1cIl9fc2MtXCIuY29uY2F0KGgsXCJfX1wiKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInRlc3RcIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93W3B0XXx8KHdpbmRvd1twdF09MCksMT09PXdpbmRvd1twdF0mJmNvbnNvbGUud2FybihcIkl0IGxvb2tzIGxpa2UgdGhlcmUgYXJlIHNldmVyYWwgaW5zdGFuY2VzIG9mICdzdHlsZWQtY29tcG9uZW50cycgaW5pdGlhbGl6ZWQgaW4gdGhpcyBhcHBsaWNhdGlvbi4gVGhpcyBtYXkgY2F1c2UgZHluYW1pYyBzdHlsZXMgdG8gbm90IHJlbmRlciBwcm9wZXJseSwgZXJyb3JzIGR1cmluZyB0aGUgcmVoeWRyYXRpb24gcHJvY2VzcywgYSBtaXNzaW5nIHRoZW1lIHByb3AsIGFuZCBtYWtlcyB5b3VyIGFwcGxpY2F0aW9uIGJpZ2dlciB3aXRob3V0IGdvb2QgcmVhc29uLlxcblxcblNlZSBodHRwczovL3MtYy5zaC8yQkFYemVkIGZvciBtb3JlIGluZm8uXCIpLHdpbmRvd1twdF0rPTEpLGV4cG9ydHMuU2VydmVyU3R5bGVTaGVldD1sdCxleHBvcnRzLlN0eWxlU2hlZXRDb25zdW1lcj1GZSxleHBvcnRzLlN0eWxlU2hlZXRDb250ZXh0PVZlLGV4cG9ydHMuU3R5bGVTaGVldE1hbmFnZXI9QmUsZXhwb3J0cy5UaGVtZUNvbnN1bWVyPUtlLGV4cG9ydHMuVGhlbWVDb250ZXh0PVplLGV4cG9ydHMuVGhlbWVQcm92aWRlcj1mdW5jdGlvbih0KXt2YXIgcj1sLmRlZmF1bHQudXNlQ29udGV4dChaZSksbz1uLnVzZU1lbW8oZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24odCxuKXtpZighdCl0aHJvdyBkZSgxNCk7aWYocmUodCkpe3ZhciByPXQobik7aWYoXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmKG51bGw9PT1yfHxBcnJheS5pc0FycmF5KHIpfHxcIm9iamVjdFwiIT10eXBlb2YgcikpdGhyb3cgZGUoNyk7cmV0dXJuIHJ9aWYoQXJyYXkuaXNBcnJheSh0KXx8XCJvYmplY3RcIiE9dHlwZW9mIHQpdGhyb3cgZGUoOCk7cmV0dXJuIG4/ZS5fX2Fzc2lnbihlLl9fYXNzaWduKHt9LG4pLHQpOnR9KHQudGhlbWUscil9LFt0LnRoZW1lLHJdKTtyZXR1cm4gdC5jaGlsZHJlbj9sLmRlZmF1bHQuY3JlYXRlRWxlbWVudChaZS5Qcm92aWRlcix7dmFsdWU6b30sdC5jaGlsZHJlbik6bnVsbH0sZXhwb3J0cy5fX1BSSVZBVEVfXz11dCxleHBvcnRzLmNyZWF0ZUdsb2JhbFN0eWxlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbj1bXSxyPTE7cjxhcmd1bWVudHMubGVuZ3RoO3IrKyluW3ItMV09YXJndW1lbnRzW3JdO3ZhciBvPW90LmFwcGx5KHZvaWQgMCxlLl9fc3ByZWFkQXJyYXkoW3RdLG4sITEpKSxzPVwic2MtZ2xvYmFsLVwiLmNvbmNhdCh6KEpTT04uc3RyaW5naWZ5KG8pKSksaT1uZXcgY3QobyxzKTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZFKHMpO3ZhciBhPWZ1bmN0aW9uKGUpe3ZhciB0PSRlKCksbj1sLmRlZmF1bHQudXNlQ29udGV4dChaZSkscj1sLmRlZmF1bHQudXNlUmVmKHQuc3R5bGVTaGVldC5hbGxvY2F0ZUdTSW5zdGFuY2UocykpLmN1cnJlbnQ7cmV0dXJuXCJwcm9kdWN0aW9uXCIhPT1wcm9jZXNzLmVudi5OT0RFX0VOViYmbC5kZWZhdWx0LkNoaWxkcmVuLmNvdW50KGUuY2hpbGRyZW4pJiZjb25zb2xlLndhcm4oXCJUaGUgZ2xvYmFsIHN0eWxlIGNvbXBvbmVudCBcIi5jb25jYXQocyxcIiB3YXMgZ2l2ZW4gY2hpbGQgSlNYLiBjcmVhdGVHbG9iYWxTdHlsZSBkb2VzIG5vdCByZW5kZXIgY2hpbGRyZW4uXCIpKSxcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZvLnNvbWUoZnVuY3Rpb24oZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJi0xIT09ZS5pbmRleE9mKFwiQGltcG9ydFwiKX0pJiZjb25zb2xlLndhcm4oXCJQbGVhc2UgZG8gbm90IHVzZSBAaW1wb3J0IENTUyBzeW50YXggaW4gY3JlYXRlR2xvYmFsU3R5bGUgYXQgdGhpcyB0aW1lLCBhcyB0aGUgQ1NTT00gQVBJcyB3ZSB1c2UgaW4gcHJvZHVjdGlvbiBkbyBub3QgaGFuZGxlIGl0IHdlbGwuIEluc3RlYWQsIHdlIHJlY29tbWVuZCB1c2luZyBhIGxpYnJhcnkgc3VjaCBhcyByZWFjdC1oZWxtZXQgdG8gaW5qZWN0IGEgdHlwaWNhbCA8bGluaz4gbWV0YSB0YWcgdG8gdGhlIHN0eWxlc2hlZXQsIG9yIHNpbXBseSBlbWJlZGRpbmcgaXQgbWFudWFsbHkgaW4geW91ciBpbmRleC5odG1sIDxoZWFkPiBzZWN0aW9uIGZvciBhIHNpbXBsZXIgYXBwLlwiKSx0LnN0eWxlU2hlZXQuc2VydmVyJiZjKHIsZSx0LnN0eWxlU2hlZXQsbix0LnN0eWxpcyksbC5kZWZhdWx0LnVzZUxheW91dEVmZmVjdChmdW5jdGlvbigpe2lmKCF0LnN0eWxlU2hlZXQuc2VydmVyKXJldHVybiBjKHIsZSx0LnN0eWxlU2hlZXQsbix0LnN0eWxpcyksZnVuY3Rpb24oKXtyZXR1cm4gaS5yZW1vdmVTdHlsZXMocix0LnN0eWxlU2hlZXQpfX0sW3IsZSx0LnN0eWxlU2hlZXQsbix0LnN0eWxpc10pLG51bGx9O2Z1bmN0aW9uIGModCxuLHIsbyxzKXtpZihpLmlzU3RhdGljKWkucmVuZGVyU3R5bGVzKHQsdyxyLHMpO2Vsc2V7dmFyIGM9ZS5fX2Fzc2lnbihlLl9fYXNzaWduKHt9LG4pLHt0aGVtZTpDKG4sbyxhLmRlZmF1bHRQcm9wcyl9KTtpLnJlbmRlclN0eWxlcyh0LGMscixzKX19cmV0dXJuIGwuZGVmYXVsdC5tZW1vKGEpfSxleHBvcnRzLmNzcz1vdCxleHBvcnRzLmRlZmF1bHQ9YXQsZXhwb3J0cy5pc1N0eWxlZENvbXBvbmVudD1vZSxleHBvcnRzLmtleWZyYW1lcz1mdW5jdGlvbih0KXtmb3IodmFyIG49W10scj0xO3I8YXJndW1lbnRzLmxlbmd0aDtyKyspbltyLTFdPWFyZ3VtZW50c1tyXTtcInByb2R1Y3Rpb25cIiE9PXByb2Nlc3MuZW52Lk5PREVfRU5WJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiZcIlJlYWN0TmF0aXZlXCI9PT1uYXZpZ2F0b3IucHJvZHVjdCYmY29uc29sZS53YXJuKFwiYGtleWZyYW1lc2AgY2Fubm90IGJlIHVzZWQgb24gUmVhY3ROYXRpdmUsIG9ubHkgb24gdGhlIHdlYi4gVG8gZG8gYW5pbWF0aW9uIGluIFJlYWN0TmF0aXZlIHBsZWFzZSB1c2UgQW5pbWF0ZWQuXCIpO3ZhciBvPWllKG90LmFwcGx5KHZvaWQgMCxlLl9fc3ByZWFkQXJyYXkoW3RdLG4sITEpKSkscz16KG8pO3JldHVybiBuZXcgTGUocyxvKX0sZXhwb3J0cy5zdHlsZWQ9YXQsZXhwb3J0cy51c2VUaGVtZT1mdW5jdGlvbigpe3ZhciBlPW4udXNlQ29udGV4dChaZSk7aWYoIWUpdGhyb3cgZGUoMTgpO3JldHVybiBlfSxleHBvcnRzLnZlcnNpb249bSxleHBvcnRzLndpdGhUaGVtZT1mdW5jdGlvbih0KXt2YXIgbj1sLmRlZmF1bHQuZm9yd2FyZFJlZihmdW5jdGlvbihuLHIpe3ZhciBvPUMobixsLmRlZmF1bHQudXNlQ29udGV4dChaZSksdC5kZWZhdWx0UHJvcHMpO3JldHVyblwicHJvZHVjdGlvblwiIT09cHJvY2Vzcy5lbnYuTk9ERV9FTlYmJnZvaWQgMD09PW8mJmNvbnNvbGUud2FybignW3dpdGhUaGVtZV0gWW91IGFyZSBub3QgdXNpbmcgYSBUaGVtZVByb3ZpZGVyIG5vciBwYXNzaW5nIGEgdGhlbWUgcHJvcCBvciBhIHRoZW1lIGluIGRlZmF1bHRQcm9wcyBpbiBjb21wb25lbnQgY2xhc3MgXCInLmNvbmNhdCgkKHQpLCdcIicpKSxsLmRlZmF1bHQuY3JlYXRlRWxlbWVudCh0LGUuX19hc3NpZ24oe30sbix7dGhlbWU6byxyZWY6cn0pKX0pO3JldHVybiBuLmRpc3BsYXlOYW1lPVwiV2l0aFRoZW1lKFwiLmNvbmNhdCgkKHQpLFwiKVwiKSxuZShuLHQpfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlZC1jb21wb25lbnRzLmJyb3dzZXIuY2pzLmpzLm1hcFxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7IGNyZWF0ZUdsb2JhbFN0eWxlLCBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJveCwgQm94UHJvcHMsIEJ1dHRvbiwgRm9ybUdyb3VwLCBIMiwgSDMsIEg1LCBJbGx1c3RyYXRpb24sIElucHV0LCBMYWJlbCwgTWFkZVdpdGhMb3ZlLCBNZXNzYWdlQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XHJcblxyXG5leHBvcnQgdHlwZSBMb2dpblByb3BzID0ge1xyXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgYWN0aW9uOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBPckNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMTM3LCAxMzgsIDE1NCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBoZWlnaHQ6IDFweDsgLyogQWRqdXN0IHRoZSBoZWlnaHQgYXMgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NkNWQ5O1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnT1InO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6IHJnYigxMzcsIDEzOCwgMTU0KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2Q1ZDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IG1vdmVCYWNrZ3JvdW5kID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIGNlbnRlcjtcclxuICB9XHJcbiAgMjUlIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSBjZW50ZXI7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIGNlbnRlcjtcclxuICB9XHJcbiAgICA3NSUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIGNlbnRlcjtcclxuICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgY2VudGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpdiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAzMzJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSA1cHggMHB4IDE1cHggLTVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjA0LjI0ZGVnLCByZ2IoNTksIDkxLCAyMDMpIC0wLjA0JSwgcmdiKDc3LCAxMTIsIDIzNSkgODQuNDglKTtcclxuICBwYWRkaW5nOiA0OHB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICYgPiAqIHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL2Nsb3VkLmFkbWluanMuY28vaW1hZ2VzL3NwYWNlLWJnLndlYnApO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDU4MHB4O1xyXG4gICAgb3BhY2l0eTogMC42NTtcclxuICAgIGFuaW1hdGlvbjogJHttb3ZlQmFja2dyb3VuZH0gOTBzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWwgbm9uZSBydW5uaW5nO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDg3MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IExvZ2luOiBSZWFjdC5GQzx7fT4gPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Rlcm1zQ2hlY2tlZCwgc2V0VGVybXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IHRyYW5zbGF0ZUNvbXBvbmVudCwgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVnaXN0ZXJTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXRlcm1zQ2hlY2tlZCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnUGxlYXNlIGFjY2VwdCB0aGUgdGVybXMgJiBjb25kaXRpb25zJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWdpc3RlckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVnaXN0ZXJGb3JtJykgYXMgSFRNTEZvcm1FbGVtZW50O1xyXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IHJlZ2lzdGVyRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IHJlZ2lzdGVyRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicGFzc3dvcmRcIl0nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkSW5wdXQgPSByZWdpc3RlckZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkID0gY29uZmlybVBhc3N3b3JkSW5wdXQudmFsdWU7XHJcblxyXG4gICAgaWYgKHBhc3N3b3JkICE9PSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBmaWxsIGluIGFsbCBmaWVsZHMnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2Vycy8nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RCb2R5KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVnaXN0ZXIgdXNlcicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VyIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZ2lzdGVyaW5nIHVzZXI6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRm9yZ290UGFzc3dvcmRTdWJtaXQgPSBhc3luYyAoZTogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBmb3Jnb3RQYXNzd29yZEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9yZ290UGFzc3dvcmRGb3JtJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBmb3Jnb3RQYXNzd29yZEZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWU7XHJcblxyXG4gICAgY29uc29sZS5sb2coZW1haWwpO1xyXG5cclxuICAgIGlmICghZW1haWwpIHtcclxuICAgICAgY29uc29sZS5sb2coJ1BsZWFzZSBmaWxsIGluIHlvdXIgZW1haWwnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xyXG4gICAgICBlbWFpbDogZW1haWwsXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcnMvZm9yZ290LXBhc3N3b3JkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHNlbmQgZW1haWwnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygnRW1haWwgc2VudCBzdWNjZXNzZnVsbHknKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG1haWxpbmcgdXNlcjonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB0b2dnbGVUZXJtcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1Rlcm1zQ2hlY2tlZCA9ICF0ZXJtc0NoZWNrZWQ7XHJcbiAgICBzZXRUZXJtc0NoZWNrZWQobmV3VGVybXNDaGVja2VkKTtcclxuXHJcbiAgICBjb25zdCByZWdpc3RlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlclN1Ym1pdEJ0bicpIGFzIEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbDtcclxuICAgIGlmIChyZWdpc3RlckJ0bikge1xyXG4gICAgICByZWdpc3RlckJ0bi5kaXNhYmxlZCA9ICFuZXdUZXJtc0NoZWNrZWQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlV2luZG93ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+LCB3aW5kb3c6IHN0cmluZykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkZvcm0nKTtcclxuICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWdpc3RlckZvcm0nKTtcclxuICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3Jnb3RQYXNzd29yZEZvcm0nKTtcclxuXHJcbiAgICBpZiAobG9naW5Gb3JtICYmIHJlZ2lzdGVyRm9ybSAmJiBmb3Jnb3RQYXNzd29yZEZvcm0pIHtcclxuICAgICAgbG9naW5Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHJlZ2lzdGVyRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBmb3Jnb3RQYXNzd29yZEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgIHN3aXRjaCAod2luZG93KSB7XHJcbiAgICAgICAgY2FzZSAnbG9naW4nOlxyXG4gICAgICAgICAgbG9naW5Gb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmVnaXN0ZXInOlxyXG4gICAgICAgICAgcmVnaXN0ZXJGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZm9yZ290UGFzc3dvcmQnOlxyXG4gICAgICAgICAgZm9yZ290UGFzc3dvcmRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcclxuICAgICAgICAgIGJhY2tncm91bmQ6XHJcbiAgICAgICAgICAgICd1cmwoaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvNjUzOTk3NTEzMzUwNzA5MjUxLzEyMjIyNDA0MjcyMTg5NjA0MzQvcHJvdmFCR19PcGFxdWUucG5nP2V4PTY2MTU3ZjE5JmlzPTY2MDMwYTE5JmhtPWU0Nzc3OGY2YzVkYzRkYTVhNTNhMjVjY2Q5MDllMjk2YjE0ODg0NGQzNTExODA0M2FlZDVmZjU2ODI1MzJhZDkmKScsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICc1MCUgY2VudGVyJyxcclxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICAgICAgaW5zZXQ6ICcwcHgnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPSdsb2dpbl9fV3JhcHBlcidcclxuICAgICAgPlxyXG4gICAgICAgIDxCb3ggYmc9J3doaXRlJyBmbGV4IGJveFNoYWRvdz0nbG9naW4nIHdpZHRoPXtbMSwgMiAvIDMsICdhdXRvJ119IHN0eWxlPXt7IGJvcmRlclJhZGl1czogJzEwcHgnLCBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMSkgMXB4IDFweCAyMHB4IDVweCcsIGhlaWdodDogJzU2MHB4JyB9fT5cclxuICAgICAgICAgIDxTdHlsZWREaXZcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICB3aWR0aDogJzI4NHB4JyxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNCkgNXB4IDBweCAxNXB4IC01cHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoMjA0LjI0ZGVnLCByZ2IoNTksIDkxLCAyMDMpIC0wLjA0JSwgcmdiKDc3LCAxMTIsIDIzNSkgODQuNDglKScsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzQ4cHgnLFxyXG4gICAgICAgICAgICAgIGZsZXhHcm93OiAwLFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SDIgZm9udFdlaWdodD0nYm9sZGVyJyBzdHlsZT17eyBtYXJnaW5Cb3R0b206ICcxMHB4JyB9fT5cclxuICAgICAgICAgICAgICBXZWxjb21lXHJcbiAgICAgICAgICAgIDwvSDI+XHJcbiAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogJzMwcHgnLCBmb250U3R5bGU6ICdpdGFsaWMnLCBvcGFjaXR5OiAnMC44JyB9fT5VbmxvY2sgWW91ciBQb3RlbnRpYWwsIEZpbmQgWW91ciBGdXR1cmUhPC9wPlxyXG4gICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PSdsaWdodGVyJyBtdD0nZGVmYXVsdCc+XHJcbiAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IHBhZGRpbmc6ICcyMHB4IDBweCAyMHB4IDIwcHgnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcyNHB4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBsaXN0U3R5bGVJbWFnZTogJ3VybChodHRwczovL2Nsb3VkLmFkbWluanMuY28vaW1hZ2VzL2xpc3QtYnVsbGV0LnN2ZyknLCBmb250U2l6ZTogJzE3cHgnLCB0ZXh0U2hhZG93OiAncmdiYSgwLCAwLCAwLCAwLjMpIDFweCAxcHggM3B4JyB9fT5cclxuICAgICAgICAgICAgICAgICAgU2lnbiBpbiB0byB1bmxvY2sgZXhjbHVzaXZlIGpvYiBvcHBvcnR1bml0aWVzIHRhaWxvcmVkIGZvciB5b3UuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZUltYWdlOiAndXJsKGh0dHBzOi8vY2xvdWQuYWRtaW5qcy5jby9pbWFnZXMvbGlzdC1idWxsZXQuc3ZnKScsIGZvbnRTaXplOiAnMTdweCcsIHRleHRTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMykgMXB4IDFweCAzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICBDb25uZWN0IHdpdGggYSBkaXZlcnNlIHJhbmdlIG9mIGVtcGxveWVycyBhbmQgZXhwYW5kIHlvdXIgcHJvZmVzc2lvbmFsIG5ldHdvcmsuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IGxpc3RTdHlsZUltYWdlOiAndXJsKGh0dHBzOi8vY2xvdWQuYWRtaW5qcy5jby9pbWFnZXMvbGlzdC1idWxsZXQuc3ZnKScsIGZvbnRTaXplOiAnMTdweCcsIHRleHRTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMykgMXB4IDFweCAzcHgnIH19PlxyXG4gICAgICAgICAgICAgICAgICBBY2Nlc3MgcGVyc29uYWxpemVkIHRvb2xzIGFuZCByZXNvdXJjZXMgdG8gc3RyZWFtbGluZSB5b3VyIGpvYiBodW50aW5nIHByb2Nlc3MuXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvU3R5bGVkRGl2PlxyXG4gICAgICAgICAgPEJveCBpZD0nbG9naW5Gb3JtJyBhcz0nZm9ybScgbWV0aG9kPSdQT1NUJyBwPSd4MycgZmxleEdyb3c9ezF9IHdpZHRoPXtbJzEwMCUnLCAnMTAwJScsICc0ODBweCddfT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIG1hcmdpbkJvdHRvbTogJzUwcHgnLCBtYXJnaW5Ub3A6ICcxNXB4JyB9fT5cclxuICAgICAgICAgICAgICA8aDMgc3R5bGU9e3sgbWFyZ2luOiAwLCBmb250U2l6ZTogJzI4cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+TG9naW48L2gzPlxyXG4gICAgICAgICAgICAgIDxINSBzdHlsZT17eyBtYXJnaW46IDAgfX0+Q09NUEFOWSBMT0dPPC9INT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDb21wb25lbnQoJ0xvZ2luLnByb3BlcnRpZXMuZW1haWwnKX1cclxuICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fSBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZUNvbXBvbmVudCgnTG9naW4ucHJvcGVydGllcy5lbWFpbCcpfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyB9fT5cclxuICAgICAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JnYigxMzcsIDEzOCwgMTU0KScgfX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDb21wb25lbnQoJ0xvZ2luLnByb3BlcnRpZXMucGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+eycgJ31cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICBmb250OiAnaW5oZXJpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuM3MsIHRleHQtZGVjb3JhdGlvbiAwLjNzJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgaWQ9J3RvZ2dsZVdpbmRvd3MnXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVdpbmRvdyhlLCAnZm9yZ290UGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5vcGFjaXR5ID0gJzAuNic7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxJbnB1dCBzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fSB0eXBlPSdwYXNzd29yZCcgbmFtZT0ncGFzc3dvcmQnIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGVDb21wb25lbnQoJ0xvZ2luLnByb3BlcnRpZXMucGFzc3dvcmQnKX0gYXV0b0NvbXBsZXRlPSduZXctcGFzc3dvcmQnIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzI4cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcsIG1hcmdpblRvcDogJzIwcHgnIH19IHZhcmlhbnQ9J2NvbnRhaW5lZCc+XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRlQ29tcG9uZW50KCdMb2dpbi5sb2dpbkJ1dHRvbicpfVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxPckNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcgfX1cclxuICAgICAgICAgICAgICAgIGlkPSd0b2dnbGVXaW5kb3dzJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVdpbmRvdyhlLCAncmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzA0MGQ2JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzMwNDBkNic7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzA0MGQ2JztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIEFjY291bnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggaWQ9J3JlZ2lzdGVyRm9ybScgYXM9J2Zvcm0nIG9uU3VibWl0PXtoYW5kbGVSZWdpc3RlclN1Ym1pdH0gbWV0aG9kPSdQT1NUJyBwPSd4MycgZmxleEdyb3c9ezF9IHdpZHRoPXtbJzEwMCUnLCAnMTAwJScsICc0ODBweCddfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCBtYXJnaW5Cb3R0b206ICc1MHB4JywgbWFyZ2luVG9wOiAnMTVweCcgfX0+XHJcbiAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IG1hcmdpbjogMCwgZm9udFNpemU6ICcyOHB4JywgZm9udFdlaWdodDogJ2JvbGQnLCBmb250RmFtaWx5OiAnVFROb3Jtc0JvbGQsIFJvYm90bycgfX0+UmVnaXN0ZXI8L2gzPlxyXG4gICAgICAgICAgICAgIDxINSBzdHlsZT17eyBtYXJnaW46IDAgfX0+Q09NUEFOWSBMT0dPPC9INT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JnYigxMzcsIDEzOCwgMTU0KScgfX0gcmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRlQ29tcG9uZW50KCdFbWFpbCcpfVxyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgPElucHV0IHR5cGU9J2VtYWlsJyBzdHlsZT17eyBwYWRkaW5nOiAnOHB4JyB9fSBuYW1lPSdlbWFpbCcgcGxhY2Vob2xkZXI9eydFbWFpbCd9IHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAnMjRweCcgfX0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBmbGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAge3RyYW5zbGF0ZUNvbXBvbmVudCgnUGFzc3dvcmQnKX1cclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0gdHlwZT0ncGFzc3dvcmQnIG5hbWU9J3Bhc3N3b3JkJyBwbGFjZWhvbGRlcj17J1Bhc3N3b3JkJ30gYXV0b0NvbXBsZXRlPSduZXctcGFzc3dvcmQnIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPEZvcm1Hcm91cCBzdHlsZT17eyBmbGV4OiAxIH19PlxyXG4gICAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgeydDb25maXJtIFBhc3N3b3JkJ31cclxuICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0gdHlwZT0ncGFzc3dvcmQnIG5hbWU9J2NvbmZpcm1QYXNzd29yZCcgcGxhY2Vob2xkZXI9eydDb25maXJtIFBhc3N3b3JkJ30gYXV0b0NvbXBsZXRlPSduZXctcGFzc3dvcmQnIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwPlxyXG4gICAgICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBjb2xvcjogJ3JnYig2OSwgNzAsIDg1KScsIGZvbnRTaXplOiAnMTRweCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIGNoZWNrZWQ9e3Rlcm1zQ2hlY2tlZH0gb25DaGFuZ2U9e3RvZ2dsZVRlcm1zfSBzdHlsZT17eyBtYXJnaW46IDAsIG1hcmdpblJpZ2h0OiAnMTZweCcgfX0gLz5JIGFncmVlIHRveycgJ31cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIHN0eWxlPXt7IGNvbG9yOiAncmdiKDY5LCA3MCwgODUpJyB9fT5cclxuICAgICAgICAgICAgICAgICAgVGVybXMgb2YgU2VydmljZVxyXG4gICAgICAgICAgICAgICAgPC9hPnsnICd9XHJcbiAgICAgICAgICAgICAgICBhbmR7JyAnfVxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj0nIycgc3R5bGU9e3sgY29sb3I6ICdyZ2IoNjksIDcwLCA4NSknIH19PlxyXG4gICAgICAgICAgICAgICAgICBQcml2YWN5IFBvbGljeVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGdhcDogJzI4cHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGlkPSdyZWdpc3RlclN1Ym1pdEJ0bicgdHlwZT0nc3VibWl0JyBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBwYWRkaW5nOiAnMTBweCAwcHgnIH19IHZhcmlhbnQ9J2NvbnRhaW5lZCcgZGlzYWJsZWQ+XHJcbiAgICAgICAgICAgICAgICBDcmVhdGUgQWNjb3VudFxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxPckNvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcsIHRyYW5zaXRpb246ICdhbGwgMC4ycyBlYXNlLWluJyB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9J3RvZ2dsZVdpbmRvd3MnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlV2luZG93KGUsICdsb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzMDQwZDYnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjMzA0MGQ2JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMzMDQwZDYnO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBpZD0nZm9yZ290UGFzc3dvcmRGb3JtJ1xyXG4gICAgICAgICAgICBhcz0nZm9ybSdcclxuICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZUZvcmdvdFBhc3N3b3JkU3VibWl0fVxyXG4gICAgICAgICAgICBtZXRob2Q9J1BPU1QnXHJcbiAgICAgICAgICAgIHA9J3gzJ1xyXG4gICAgICAgICAgICBmbGV4R3Jvdz17MX1cclxuICAgICAgICAgICAgd2lkdGg9e1snMTAwJScsICcxMDAlJywgJzQ4MHB4J119XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWFyZ2luQm90dG9tOiAnNTBweCcsIG1hcmdpblRvcDogJzE1cHgnIH19PlxyXG4gICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiAnMjhweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5SZXNldCBQYXNzd29yZDwvaDM+XHJcbiAgICAgICAgICAgICAgPEg1IHN0eWxlPXt7IG1hcmdpbjogMCB9fT5DT01QQU5ZIExPR088L0g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGNvbG9yOiAncmdiKDEzNywgMTM4LCAxNTQpJyB9fSByZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVDb21wb25lbnQoJ0VtYWlsJyl9XHJcbiAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SW5wdXQgc3R5bGU9e3sgcGFkZGluZzogJzhweCcgfX0gbmFtZT0nZW1haWwnIHBsYWNlaG9sZGVyPXsnRW1haWwnfSAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBnYXA6ICcyOHB4JywgYWxpZ25JdGVtczogJ2NlbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcsIG1hcmdpblRvcDogJzIwcHgnIH19IHZhcmlhbnQ9J2NvbnRhaW5lZCc+XHJcbiAgICAgICAgICAgICAgICBSZXF1ZXN0IFBhc3N3b3JkIFJlc2V0XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPE9yQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgcGFkZGluZzogJzEwcHggMHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgaWQ9J3RvZ2dsZVdpbmRvd3MnXHJcbiAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlV2luZG93KGUsICdsb2dpbicpfVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyMzMDQwZDYnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjMzA0MGQ2JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMzMDQwZDYnO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIHBhZGRpbmc6ICcxMHB4IDBweCcgfX1cclxuICAgICAgICAgICAgICAgIGlkPSd0b2dnbGVXaW5kb3dzJ1xyXG4gICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgdmFyaWFudD0nYnV0dG9uJ1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZVdpbmRvdyhlLCAncmVnaXN0ZXInKX1cclxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjMzA0MGQ2JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgICAgICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLmNvbG9yID0gJ3doaXRlJztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgICAgICAgICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzMwNDBkNic7XHJcbiAgICAgICAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5jb2xvciA9ICcjMzA0MGQ2JztcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlYXRlIEFjY291bnRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8cCBzdHlsZT17eyBjb2xvcjogJyM2Qjc3ODEnLCBmb250RmFtaWx5OiAnVFROb3Jtc1JlZ3VsYXIsIFJvYm90bycsIGZvbnRTaXplOiAnMTJweCcsIHBhZGRpbmc6ICcyMHB4JywgbGV0dGVyU3BhY2luZzogJzFweCcgfX0+XHJcbiAgICAgICAgICDCqSBKb2IgSG9yaXpvbiAyMDI0LiBBbGwgcmlnaHRzIHJlc2VydmVkIHx7JyAnfVxyXG4gICAgICAgICAgPGEgaHJlZj0nIycgc3R5bGU9e3sgY29sb3I6ICcjMzA0MGQ2JywgdGV4dERlY29yYXRpb246ICdub25lJyB9fT5cclxuICAgICAgICAgICAgUHJpdmFjeSBQb2xpY3lcclxuICAgICAgICAgIDwvYT57JyAnfVxyXG4gICAgICAgICAgfCBNYWRlIHdpdGgg8J+SmSBieSBvdXIgdGVhbVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnbG9nbzEucG5nJztcclxuXHJcbmNvbnN0IFNpZGViYXJCcmFuZGluZzogUmVhY3QuRkM8e30+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoTGluaylgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA0OHB4IDMycHg7XHJcblxyXG4gICAgJjpob3ZlciBoMSB7XHJcbiAgICAgIGNvbG9yOiAjMzA0MGQ2O1xyXG4gICAgfVxyXG4gIGA7XHJcblxyXG4gIGNvbnN0IFN0eWxlZEgxID0gc3R5bGVkLmgxYFxyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgbWF4LXdpZHRoOiAxNzBweDtcclxuICBgO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFN0eWxlZExpbmsgdG89eycvYWRtaW4nfSBkYXRhLWNzcz0nc2lkZWJhci1sb2dvJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyB9fT5cclxuICAgICAgICA8aW1nIHdpZHRoPSc1MHB4JyBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICc1MCUnIH19IHNyYz17J2h0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9kLzFzZXBnUmROSGVkQTBQMjcwU0d5aldSeU5WRXI5MThoTj1zMjIwP2F1dGh1c2VyPTAnfSBhbHQ9J0xvZ28nIC8+XHJcbiAgICAgICAgPFN0eWxlZEgxPnsnSm9iIEhvcml6b24nfTwvU3R5bGVkSDE+XHJcbiAgICAgIDwvU3R5bGVkTGluaz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyQnJhbmRpbmc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJveCwgQm94UHJvcHMsIEJ1dHRvbiwgRm9ybUdyb3VwLCBIMiwgSDUsIElsbHVzdHJhdGlvbiwgSW5wdXQsIExhYmVsLCBNYWRlV2l0aExvdmUsIE1lc3NhZ2VCb3gsIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcclxuXHJcbmNvbnN0IFNpZGViYXJGb290ZXI6IFJlYWN0LkZDPHt9PiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEJveCBtdD0nbGcnIG1iPSdtZCcgZGF0YS1jc3M9J3NpZGViYXItZm9vdGVyJyBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgcGFkZGluZzogJzIwcHgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cclxuICAgICAgICA8cCBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGdhcDogJzVweCcgfX0+TWFkZSB3aXRoIPCfkpkgYnkgb3VyIHRlYW08L3A+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJGb290ZXI7XHJcbiIsImltcG9ydCB7IERyb3Bab25lLCBEcm9wWm9uZUl0ZW0sIEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEVkaXQgPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkO1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpO1xuICAgIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KTtcbiAgICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICAgICAgaWYgKCh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKSkge1xuICAgICAgICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KTtcbiAgICAgICAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pO1xuICAgICAgICB9XG4gICAgfSwgW2tleSwgb3JpZ2luYWxLZXldKTtcbiAgICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xuICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKTtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKTtcbiAgICAgICAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LCBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdKTtcbiAgICAgICAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpO1xuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lLCB7IG9uQ2hhbmdlOiBvblVwbG9hZCwgbXVsdGlwbGU6IGN1c3RvbS5tdWx0aXBsZSwgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgICAgICB9LCBmaWxlczogZmlsZXNUb1VwbG9hZCB9KSxcbiAgICAgICAgIWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsgZmlsZW5hbWU6IGtleSwgc3JjOiBwYXRoLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlIH0pKSxcbiAgICAgICAgY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBrZXk6IHNpbmdsZUtleSwgZmlsZW5hbWU6IHNpbmdsZUtleSwgc3JjOiBwYXRoW2luZGV4XSwgb25SZW1vdmU6ICgpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSkgfSkpIDogJyc7XG4gICAgICAgIH0pKSkgOiAnJykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICAgJ2F1ZGlvL2FhYycsXG4gICAgJ2F1ZGlvL21pZGknLFxuICAgICdhdWRpby94LW1pZGknLFxuICAgICdhdWRpby9tcGVnJyxcbiAgICAnYXVkaW8vb2dnJyxcbiAgICAnYXBwbGljYXRpb24vb2dnJyxcbiAgICAnYXVkaW8vb3B1cycsXG4gICAgJ2F1ZGlvL3dhdicsXG4gICAgJ2F1ZGlvL3dlYm0nLFxuICAgICdhdWRpby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAgICd2aWRlby94LW1zdmlkZW8nLFxuICAgICd2aWRlby9tcGVnJyxcbiAgICAndmlkZW8vb2dnJyxcbiAgICAndmlkZW8vbXAydCcsXG4gICAgJ3ZpZGVvL3dlYm0nLFxuICAgICd2aWRlby8zZ3BwJyxcbiAgICAndmlkZW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgICAnaW1hZ2UvYm1wJyxcbiAgICAnaW1hZ2UvZ2lmJyxcbiAgICAnaW1hZ2UvanBlZycsXG4gICAgJ2ltYWdlL3BuZycsXG4gICAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAgICdpbWFnZS90aWZmJyxcbiAgICAnaW1hZ2Uvd2VicCcsXG5dO1xuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgICAnYXBwbGljYXRpb24veC10YXInLFxuICAgICdhcHBsaWNhdGlvbi96aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXTtcbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgICAnYXBwbGljYXRpb24vcnRmJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXTtcbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAgICd0ZXh0L2NzcycsXG4gICAgJ3RleHQvY3N2JyxcbiAgICAndGV4dC9odG1sJyxcbiAgICAndGV4dC9jYWxlbmRhcicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9wbGFpbicsXG4gICAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgJ3RleHQveG1sJyxcbl07XG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuXTtcbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAgICdmb250L290ZicsXG4gICAgJ2ZvbnQvdHRmJyxcbiAgICAnZm9udC93b2ZmJyxcbiAgICAnZm9udC93b2ZmMicsXG5dO1xuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAgICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAgICd2bmQudmlzaW8nLFxuICAgICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl07XG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAgIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAgIC4uLlZpZGVvTWltZVR5cGVzLFxuICAgIC4uLkltYWdlTWltZVR5cGVzLFxuICAgIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gICAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gICAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuICAgIC4uLkZvbnRNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdWRpb01pbWVUeXBlcywgSW1hZ2VNaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMnO1xuY29uc3QgU2luZ2xlRmlsZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wcztcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHBhdGgsIHN0eWxlOiB7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9LCBhbHQ6IG5hbWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIHsgY29udHJvbHM6IHRydWUsIHNyYzogcGF0aCB9LFxuICAgICAgICAgICAgICAgIFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCJhdWRpb1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgeyBraW5kOiBcImNhcHRpb25zXCIgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IHBhdGgsIG1sOiBcImRlZmF1bHRcIiwgc2l6ZTogXCJzbVwiLCByb3VuZGVkOiB0cnVlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIkRvY3VtZW50RG93bmxvYWRcIiwgY29sb3I6IFwid2hpdGVcIiwgbXI6IFwiZGVmYXVsdFwiIH0pLFxuICAgICAgICAgICAgbmFtZSkpKTtcbn07XG5jb25zdCBGaWxlID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHlcbiAgICAgICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KTtcbiAgICBpZiAoIXByb3BlcnR5LmN1c3RvbS5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICAgICAgcGF0aCA9IGAke2N1c3RvbS5vcHRzLmJhc2VVcmx9LyR7bmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IHBhdGg6IHBhdGgsIG5hbWU6IG5hbWUsIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlIH0pKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJyc7XG4gICAgICAgIHBhdGggPSBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IGAke2Jhc2VVcmx9LyR7bmFtZVtpbmRleF19YCk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IGtleTogc2luZ2xlUGF0aCwgcGF0aDogc2luZ2xlUGF0aCwgbmFtZTogbmFtZVtpbmRleF0sIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlW2luZGV4XSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogMTAwLCAuLi5wcm9wcyB9KSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiBcIjEwMCVcIiwgLi4ucHJvcHMgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIiwiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgUGFzc3dvcmRFZGl0ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uOiB0YiB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCBbc2hvd1Bhc3N3b3JkLCB0b2dnbGVQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFzaG93UGFzc3dvcmQpIHtcbiAgICAgICAgICAgIG9uQ2hhbmdlKHByb3BlcnR5Lm5hbWUsICcnKTtcbiAgICAgICAgfVxuICAgIH0sIFtvbkNoYW5nZSwgc2hvd1Bhc3N3b3JkXSk7XG4gICAgLy8gRm9yIG5ldyByZWNvcmRzIGFsd2F5cyBzaG93IHRoZSBwcm9wZXJ0eVxuICAgIGlmICghcmVjb3JkLmlkKSB7XG4gICAgICAgIHJldHVybiA8QmFzZVByb3BlcnR5Q29tcG9uZW50LlBhc3N3b3JkLkVkaXQgey4uLnByb3BzfS8+O1xuICAgIH1cbiAgICByZXR1cm4gKDxCb3g+XG4gICAgICB7c2hvd1Bhc3N3b3JkICYmIDxCYXNlUHJvcGVydHlDb21wb25lbnQuUGFzc3dvcmQuRWRpdCB7Li4ucHJvcHN9Lz59XG4gICAgICA8Qm94IG1iPVwieGxcIj5cbiAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0b2dnbGVQYXNzd29yZCghc2hvd1Bhc3N3b3JkKX0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAge3Nob3dQYXNzd29yZCA/IHRiKCdjYW5jZWwnLCByZXNvdXJjZS5pZCkgOiB0YignY2hhbmdlUGFzc3dvcmQnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94Pik7XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFzc3dvcmRFZGl0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBpQ2xpZW50LCB1c2VOb3RpY2UgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCB7IERyb3Bab25lSXRlbSwgTG9hZGVyLCBCb3gsIEJ1dHRvbiwgRHJvcFpvbmUsIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5jb25zdCBJbXBvcnRDb21wb25lbnQgPSAoeyByZXNvdXJjZSB9KSA9PiB7XG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3Qgc2VuZE5vdGljZSA9IHVzZU5vdGljZSgpO1xuICAgIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRGZXRjaGluZ10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IG9uVXBsb2FkID0gKHVwbG9hZGVkRmlsZSkgPT4ge1xuICAgICAgICBzZXRGaWxlKHVwbG9hZGVkRmlsZT8uWzBdID8/IG51bGwpO1xuICAgIH07XG4gICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgaW1wb3J0RGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgaW1wb3J0RGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlLCBmaWxlPy5uYW1lKTtcbiAgICAgICAgICAgIGF3YWl0IG5ldyBBcGlDbGllbnQoKS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsXG4gICAgICAgICAgICAgICAgYWN0aW9uTmFtZTogJ2ltcG9ydCcsXG4gICAgICAgICAgICAgICAgZGF0YTogaW1wb3J0RGF0YSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VuZE5vdGljZSh7IG1lc3NhZ2U6ICdJbXBvcnRlZCBzdWNjZXNzZnVsbHknLCB0eXBlOiAnc3VjY2VzcycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNlbmROb3RpY2UoeyBtZXNzYWdlOiBlLm1lc3NhZ2UsIHR5cGU6ICdlcnJvcicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxMb2FkZXIgLz47XG4gICAgfVxuICAgIHJldHVybiAoPEJveCBtYXJnaW49XCJhdXRvXCIgbWF4V2lkdGg9ezYwMH0gZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgIDxEcm9wWm9uZSBmaWxlcz17W119IG9uQ2hhbmdlPXtvblVwbG9hZH0gbXVsdGlwbGU9e2ZhbHNlfS8+XG4gICAgICB7ZmlsZSAmJiAoPERyb3Bab25lSXRlbSBmaWxlPXtmaWxlfSBmaWxlbmFtZT17ZmlsZS5uYW1lfSBvblJlbW92ZT17KCkgPT4gc2V0RmlsZShudWxsKX0vPil9XG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiBtPXsxMH0+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25TdWJtaXR9IGRpc2FibGVkPXshZmlsZSB8fCBpc0ZldGNoaW5nfT5cbiAgICAgICAgICBVcGxvYWRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD4pO1xufTtcbmV4cG9ydCBkZWZhdWx0IEltcG9ydENvbXBvbmVudDtcbiIsIihmdW5jdGlvbihhLGIpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sYik7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgZXhwb3J0cyliKCk7ZWxzZXtiKCksYS5GaWxlU2F2ZXI9e2V4cG9ydHM6e319LmV4cG9ydHN9fSkodGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIGIoYSxiKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2YgYj9iPXthdXRvQm9tOiExfTpcIm9iamVjdFwiIT10eXBlb2YgYiYmKGNvbnNvbGUud2FybihcIkRlcHJlY2F0ZWQ6IEV4cGVjdGVkIHRoaXJkIGFyZ3VtZW50IHRvIGJlIGEgb2JqZWN0XCIpLGI9e2F1dG9Cb206IWJ9KSxiLmF1dG9Cb20mJi9eXFxzKig/OnRleHRcXC9cXFMqfGFwcGxpY2F0aW9uXFwveG1sfFxcUypcXC9cXFMqXFwreG1sKVxccyo7LipjaGFyc2V0XFxzKj1cXHMqdXRmLTgvaS50ZXN0KGEudHlwZSk/bmV3IEJsb2IoW1wiXFx1RkVGRlwiLGFdLHt0eXBlOmEudHlwZX0pOmF9ZnVuY3Rpb24gYyhhLGIsYyl7dmFyIGQ9bmV3IFhNTEh0dHBSZXF1ZXN0O2Qub3BlbihcIkdFVFwiLGEpLGQucmVzcG9uc2VUeXBlPVwiYmxvYlwiLGQub25sb2FkPWZ1bmN0aW9uKCl7ZyhkLnJlc3BvbnNlLGIsYyl9LGQub25lcnJvcj1mdW5jdGlvbigpe2NvbnNvbGUuZXJyb3IoXCJjb3VsZCBub3QgZG93bmxvYWQgZmlsZVwiKX0sZC5zZW5kKCl9ZnVuY3Rpb24gZChhKXt2YXIgYj1uZXcgWE1MSHR0cFJlcXVlc3Q7Yi5vcGVuKFwiSEVBRFwiLGEsITEpO3RyeXtiLnNlbmQoKX1jYXRjaChhKXt9cmV0dXJuIDIwMDw9Yi5zdGF0dXMmJjI5OT49Yi5zdGF0dXN9ZnVuY3Rpb24gZShhKXt0cnl7YS5kaXNwYXRjaEV2ZW50KG5ldyBNb3VzZUV2ZW50KFwiY2xpY2tcIikpfWNhdGNoKGMpe3ZhciBiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7Yi5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsd2luZG93LDAsMCwwLDgwLDIwLCExLCExLCExLCExLDAsbnVsbCksYS5kaXNwYXRjaEV2ZW50KGIpfX12YXIgZj1cIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiZ3aW5kb3cud2luZG93PT09d2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZi5zZWxmPT09c2VsZj9zZWxmOlwib2JqZWN0XCI9PXR5cGVvZiBnbG9iYWwmJmdsb2JhbC5nbG9iYWw9PT1nbG9iYWw/Z2xvYmFsOnZvaWQgMCxhPWYubmF2aWdhdG9yJiYvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpJiYvQXBwbGVXZWJLaXQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkmJiEvU2FmYXJpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpLGc9Zi5zYXZlQXN8fChcIm9iamVjdFwiIT10eXBlb2Ygd2luZG93fHx3aW5kb3chPT1mP2Z1bmN0aW9uKCl7fTpcImRvd25sb2FkXCJpbiBIVE1MQW5jaG9yRWxlbWVudC5wcm90b3R5cGUmJiFhP2Z1bmN0aW9uKGIsZyxoKXt2YXIgaT1mLlVSTHx8Zi53ZWJraXRVUkwsaj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtnPWd8fGIubmFtZXx8XCJkb3dubG9hZFwiLGouZG93bmxvYWQ9ZyxqLnJlbD1cIm5vb3BlbmVyXCIsXCJzdHJpbmdcIj09dHlwZW9mIGI/KGouaHJlZj1iLGoub3JpZ2luPT09bG9jYXRpb24ub3JpZ2luP2Uoaik6ZChqLmhyZWYpP2MoYixnLGgpOmUoaixqLnRhcmdldD1cIl9ibGFua1wiKSk6KGouaHJlZj1pLmNyZWF0ZU9iamVjdFVSTChiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7aS5yZXZva2VPYmplY3RVUkwoai5ocmVmKX0sNEU0KSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShqKX0sMCkpfTpcIm1zU2F2ZU9yT3BlbkJsb2JcImluIG5hdmlnYXRvcj9mdW5jdGlvbihmLGcsaCl7aWYoZz1nfHxmLm5hbWV8fFwiZG93bmxvYWRcIixcInN0cmluZ1wiIT10eXBlb2YgZiluYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYihiKGYsaCksZyk7ZWxzZSBpZihkKGYpKWMoZixnLGgpO2Vsc2V7dmFyIGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7aS5ocmVmPWYsaS50YXJnZXQ9XCJfYmxhbmtcIixzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ZShpKX0pfX06ZnVuY3Rpb24oYixkLGUsZyl7aWYoZz1nfHxvcGVuKFwiXCIsXCJfYmxhbmtcIiksZyYmKGcuZG9jdW1lbnQudGl0bGU9Zy5kb2N1bWVudC5ib2R5LmlubmVyVGV4dD1cImRvd25sb2FkaW5nLi4uXCIpLFwic3RyaW5nXCI9PXR5cGVvZiBiKXJldHVybiBjKGIsZCxlKTt2YXIgaD1cImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiPT09Yi50eXBlLGk9L2NvbnN0cnVjdG9yL2kudGVzdChmLkhUTUxFbGVtZW50KXx8Zi5zYWZhcmksaj0vQ3JpT1NcXC9bXFxkXSsvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7aWYoKGp8fGgmJml8fGEpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgRmlsZVJlYWRlcil7dmFyIGs9bmV3IEZpbGVSZWFkZXI7ay5vbmxvYWRlbmQ9ZnVuY3Rpb24oKXt2YXIgYT1rLnJlc3VsdDthPWo/YTphLnJlcGxhY2UoL15kYXRhOlteO10qOy8sXCJkYXRhOmF0dGFjaG1lbnQvZmlsZTtcIiksZz9nLmxvY2F0aW9uLmhyZWY9YTpsb2NhdGlvbj1hLGc9bnVsbH0say5yZWFkQXNEYXRhVVJMKGIpfWVsc2V7dmFyIGw9Zi5VUkx8fGYud2Via2l0VVJMLG09bC5jcmVhdGVPYmplY3RVUkwoYik7Zz9nLmxvY2F0aW9uPW06bG9jYXRpb24uaHJlZj1tLGc9bnVsbCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bC5yZXZva2VPYmplY3RVUkwobSl9LDRFNCl9fSk7Zi5zYXZlQXM9Zy5zYXZlQXM9ZyxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiYobW9kdWxlLmV4cG9ydHM9Zyl9KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RmlsZVNhdmVyLm1pbi5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJleHBvcnQgY29uc3QgRXhwb3J0ZXJzID0gWydjc3YnLCAnanNvbicsICd4bWwnXTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwaUNsaWVudCwgdXNlTm90aWNlIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgTG9hZGVyLCBUZXh0IH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XG5pbXBvcnQgeyBzYXZlQXMgfSBmcm9tICdmaWxlLXNhdmVyJztcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcbmltcG9ydCB7IEV4cG9ydGVycyB9IGZyb20gJy4uL2V4cG9ydGVyLnR5cGUuanMnO1xuZXhwb3J0IGNvbnN0IG1pbWVUeXBlcyA9IHtcbiAgICBqc29uOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgY3N2OiAndGV4dC9jc3YnLFxuICAgIHhtbDogJ3RleHQveG1sJyxcbn07XG5leHBvcnQgY29uc3QgZ2V0RXhwb3J0ZWRGaWxlTmFtZSA9IChleHRlbnNpb24pID0+IGBleHBvcnQtJHtmb3JtYXQoRGF0ZS5ub3coKSwgJ3l5eXktTU0tZGRfSEgtbW0nKX0uJHtleHRlbnNpb259YDtcbmNvbnN0IEV4cG9ydENvbXBvbmVudCA9ICh7IHJlc291cmNlIH0pID0+IHtcbiAgICBjb25zdCBbaXNGZXRjaGluZywgc2V0RmV0Y2hpbmddID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBzZW5kTm90aWNlID0gdXNlTm90aWNlKCk7XG4gICAgY29uc3QgZXhwb3J0RGF0YSA9IGFzeW5jICh0eXBlKSA9PiB7XG4gICAgICAgIHNldEZldGNoaW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhOiB7IGV4cG9ydGVkRGF0YSB9LCB9ID0gYXdhaXQgbmV3IEFwaUNsaWVudCgpLnJlc291cmNlQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCxcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiAnZXhwb3J0JyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2V4cG9ydGVkRGF0YV0sIHsgdHlwZTogbWltZVR5cGVzW3R5cGVdIH0pO1xuICAgICAgICAgICAgc2F2ZUFzKGJsb2IsIGdldEV4cG9ydGVkRmlsZU5hbWUodHlwZSkpO1xuICAgICAgICAgICAgc2VuZE5vdGljZSh7IG1lc3NhZ2U6ICdFeHBvcnRlZCBzdWNjZXNzZnVsbHknLCB0eXBlOiAnc3VjY2VzcycgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHNlbmROb3RpY2UoeyBtZXNzYWdlOiBlLm1lc3NhZ2UsIHR5cGU6ICdlcnJvcicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0RmV0Y2hpbmcoZmFsc2UpO1xuICAgIH07XG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxMb2FkZXIgLz47XG4gICAgfVxuICAgIHJldHVybiAoPEJveD5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8VGV4dCB2YXJpYW50PVwibGdcIj5DaG9vc2UgZXhwb3J0IGZvcm1hdDo8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICB7RXhwb3J0ZXJzLm1hcChwYXJzZXJUeXBlID0+ICg8Qm94IGtleT17cGFyc2VyVHlwZX0gbT17Mn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IGV4cG9ydERhdGEocGFyc2VyVHlwZSl9IGRpc2FibGVkPXtpc0ZldGNoaW5nfT5cbiAgICAgICAgICAgICAge3BhcnNlclR5cGUudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PikpfVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+KTtcbn07XG5leHBvcnQgZGVmYXVsdCBFeHBvcnRDb21wb25lbnQ7XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRhc2hib2FyZCA9IERhc2hib2FyZFxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvbG9naW4nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkxvZ2luID0gTG9naW5cbmltcG9ydCBTaWRlYmFyQnJhbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyQnJhbmRpbmcnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlNpZGViYXJCcmFuZGluZyA9IFNpZGViYXJCcmFuZGluZ1xuaW1wb3J0IFNpZGViYXJGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyRm9vdGVyJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5TaWRlYmFyRm9vdGVyID0gU2lkZWJhckZvb3RlclxuaW1wb3J0IFVwbG9hZEVkaXRDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZEVkaXRDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZEVkaXRDb21wb25lbnQgPSBVcGxvYWRFZGl0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkTGlzdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkTGlzdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkTGlzdENvbXBvbmVudCA9IFVwbG9hZExpc3RDb21wb25lbnRcbmltcG9ydCBVcGxvYWRTaG93Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRTaG93Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRTaG93Q29tcG9uZW50ID0gVXBsb2FkU2hvd0NvbXBvbmVudFxuaW1wb3J0IFBhc3N3b3JkRWRpdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvcGFzc3dvcmRzL2J1aWxkL2NvbXBvbmVudHMvUGFzc3dvcmRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5QYXNzd29yZEVkaXRDb21wb25lbnQgPSBQYXNzd29yZEVkaXRDb21wb25lbnRcbmltcG9ydCBJbXBvcnRDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL2ltcG9ydC1leHBvcnQvbGliL2NvbXBvbmVudHMvSW1wb3J0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5JbXBvcnRDb21wb25lbnQgPSBJbXBvcnRDb21wb25lbnRcbmltcG9ydCBFeHBvcnRDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL2ltcG9ydC1leHBvcnQvbGliL2NvbXBvbmVudHMvRXhwb3J0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5FeHBvcnRDb21wb25lbnQgPSBFeHBvcnRDb21wb25lbnQiXSwibmFtZXMiOlsicGFnZUhlYWRlckhlaWdodCIsInBhZ2VIZWFkZXJQYWRkaW5nWSIsInBhZ2VIZWFkZXJQYWRkaW5nWCIsIkRhc2hib2FyZEhlYWRlciIsImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJhcGkiLCJBcGlDbGllbnQiLCJ1c2VFZmZlY3QiLCJnZXREYXNoYm9hcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ0cmFuc2xhdGVNZXNzYWdlIiwidXNlVHJhbnNsYXRpb24iLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiYmciLCJoZWlnaHQiLCJweSIsInB4IiwidG9wIiwibGVmdCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZGlzcGxheSIsIlRleHQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsIkgyIiwiZm9udFdlaWdodCIsImJveGVzIiwidmFyaWFudCIsInRpdGxlIiwic3VidGl0bGUiLCJocmVmIiwiQ2FyZCIsInN0eWxlZCIsImZsZXgiLCJ0aGVtZSIsImNvbG9ycyIsImdyZXkxMDAiLCJzcGFjZSIsIm1kIiwicHJpbWFyeTYwIiwic2hhZG93cyIsImNhcmRIb3ZlciIsImRlZmF1bHRQcm9wcyIsImJveFNoYWRvdyIsIkRhc2hib2FyZCIsInRyYW5zbGF0ZUJ1dHRvbiIsIm10IiwibWIiLCJteCIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsIndpZHRoIiwibWFwIiwiYm94IiwiaW5kZXgiLCJrZXkiLCJwIiwiYXMiLCJ0YXJnZXQiLCJJbGx1c3RyYXRpb24iLCJINSIsInRoaXMiLCJyZXF1aXJlJCQyIiwicmVxdWlyZSQkMyIsInJlcXVpcmUkJDQiLCJPckNvbnRhaW5lciIsImRpdiIsIm1vdmVCYWNrZ3JvdW5kIiwia2V5ZnJhbWVzIiwiU3R5bGVkRGl2IiwiTG9naW4iLCJ0ZXJtc0NoZWNrZWQiLCJzZXRUZXJtc0NoZWNrZWQiLCJ0cmFuc2xhdGVDb21wb25lbnQiLCJoYW5kbGVSZWdpc3RlclN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbWFpbElucHV0IiwicXVlcnlTZWxlY3RvciIsInBhc3N3b3JkSW5wdXQiLCJjb25maXJtUGFzc3dvcmRJbnB1dCIsImVtYWlsIiwidmFsdWUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsInJlcXVlc3RCb2R5IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJoYW5kbGVGb3Jnb3RQYXNzd29yZFN1Ym1pdCIsImZvcmdvdFBhc3N3b3JkRm9ybSIsInRvZ2dsZVRlcm1zIiwibmV3VGVybXNDaGVja2VkIiwicmVnaXN0ZXJCdG4iLCJkaXNhYmxlZCIsImhhbmRsZVdpbmRvdyIsImxvZ2luRm9ybSIsInN0eWxlIiwiRnJhZ21lbnQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtaW5IZWlnaHQiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJpbnNldCIsImNsYXNzTmFtZSIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJmbGV4R3JvdyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTdHlsZSIsImdhcCIsImxpc3RTdHlsZUltYWdlIiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93IiwiaWQiLCJtYXJnaW5Ub3AiLCJtYXJnaW4iLCJGb3JtR3JvdXAiLCJMYWJlbCIsInJlcXVpcmVkIiwiSW5wdXQiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJmb250IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInR5cGUiLCJvbkNsaWNrIiwib25Nb3VzZUVudGVyIiwiY3VycmVudFRhcmdldCIsInRleHREZWNvcmF0aW9uIiwib25Nb3VzZUxlYXZlIiwiYXV0b0NvbXBsZXRlIiwiQnV0dG9uIiwiYm9yZGVyQ29sb3IiLCJvblN1Ym1pdCIsImZvbnRGYW1pbHkiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJtYXJnaW5SaWdodCIsImxldHRlclNwYWNpbmciLCJTaWRlYmFyQnJhbmRpbmciLCJTdHlsZWRMaW5rIiwiTGluayIsIlN0eWxlZEgxIiwiaDEiLCJ0byIsInNyYyIsImFsdCIsIlNpZGViYXJGb290ZXIiLCJmbGF0IiwiRHJvcFpvbmUiLCJEcm9wWm9uZUl0ZW0iLCJJY29uIiwiUGFzc3dvcmRFZGl0IiwicHJvcHMiLCJwcm9wZXJ0eSIsInJlY29yZCIsInJlc291cmNlIiwidGIiLCJzaG93UGFzc3dvcmQiLCJ0b2dnbGVQYXNzd29yZCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsIlBhc3N3b3JkIiwiRWRpdCIsIkltcG9ydENvbXBvbmVudCIsImZpbGUiLCJzZXRGaWxlIiwic2VuZE5vdGljZSIsInVzZU5vdGljZSIsImlzRmV0Y2hpbmciLCJzZXRGZXRjaGluZyIsIm9uVXBsb2FkIiwidXBsb2FkZWRGaWxlIiwiaW1wb3J0RGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicmVzb3VyY2VBY3Rpb24iLCJyZXNvdXJjZUlkIiwiYWN0aW9uTmFtZSIsIkxvYWRlciIsIm1heFdpZHRoIiwiZmlsZXMiLCJtdWx0aXBsZSIsImZpbGVuYW1lIiwib25SZW1vdmUiLCJtIiwiZ2xvYmFsIiwiTUlMTElTRUNPTkRTX0lOX1dFRUsiLCJmb3JtYXR0ZXJzIiwiZm9ybWF0RGlzdGFuY2UiLCJmb3JtYXRMb25nIiwiZm9ybWF0UmVsYXRpdmUiLCJsb2NhbGl6ZSIsIm1hdGNoIiwibWltZVR5cGVzIiwianNvbiIsImNzdiIsInhtbCIsImdldEV4cG9ydGVkRmlsZU5hbWUiLCJleHRlbnNpb24iLCJmb3JtYXQiLCJEYXRlIiwibm93IiwiRXhwb3J0Q29tcG9uZW50IiwiZXhwb3J0RGF0YSIsImV4cG9ydGVkRGF0YSIsInBhcmFtcyIsImJsb2IiLCJCbG9iIiwic2F2ZUFzIiwiRXhwb3J0ZXJzIiwicGFyc2VyVHlwZSIsInRvVXBwZXJDYXNlIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiVXBsb2FkRWRpdENvbXBvbmVudCIsIlVwbG9hZExpc3RDb21wb25lbnQiLCJVcGxvYWRTaG93Q29tcG9uZW50IiwiUGFzc3dvcmRFZGl0Q29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0VBTUEsTUFBTUEsZ0JBQWdCLEdBQUcsR0FBRyxDQUFBO0VBQzVCLE1BQU1DLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtFQUM3QixNQUFNQyxrQkFBa0IsR0FBRyxHQUFHLENBQUE7RUFFdkIsTUFBTUMsZUFBeUIsR0FBR0EsTUFBTTtJQUs3QyxNQUFNLENBQUNDLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUdDLGNBQVEsQ0FBYyxJQUFJLENBQUMsQ0FBQTtFQUNuRCxFQUFBLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxpQkFBUyxFQUFFLENBQUE7RUFFM0JDLEVBQUFBLGVBQVMsQ0FBQyxNQUFNO01BQ2RGLEdBQUcsQ0FDQUcsWUFBWSxFQUFFLENBQ2RDLElBQUksQ0FBRUMsUUFBUSxJQUFLO0VBQ2xCLE1BQUEsTUFBTUMsWUFBWSxHQUFHRCxRQUFRLENBQUNSLElBQVksQ0FBQTtRQUMxQ0MsT0FBTyxDQUFDUSxZQUFZLENBQUMsQ0FBQTtPQUN0QixDQUFDLENBQ0RDLEtBQUssQ0FBRUMsS0FBSyxJQUFLLEVBQUUsQ0FBQyxDQUFBO0tBQ3hCLEVBQUUsRUFBRSxDQUFDLENBQUE7RUFFTixFQUFBLElBQUlYLElBQUksRUFBRTtFQUNS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SSxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxJQUFJLEtBQUssUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7RUFDckcsSUFBSSxJQUFJLE1BQU0sR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztFQUM1RixJQUFJLElBQUksVUFBVSxHQUFHLFlBQVksS0FBSyxNQUFNLEdBQUcsTUFBTSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7RUFDN0csSUFBSSxJQUFJLENBQUMsRUFBRSxJQUFJLEdBQUcsS0FBSyxDQUFDO0VBQ3hCLElBQUksS0FBSyxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0VBQ3JELFFBQVEsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO0VBQ3pCLFFBQVEsS0FBSyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxRQUFRLEdBQUcsRUFBRSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNqRixRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDaEYsUUFBUSxPQUFPLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFD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QU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtFQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtFQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztFQUM5RSxLQUFLLENBQUMsQ0FBQztFQUNQLENBQUM7QUFDRDtFQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7RUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7RUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtFQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztFQUN0RSxRQUFRLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJO0VBQ3RELFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDekssWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0VBQ3BELFlBQVksUUFB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QyxhQUFhLENBQUMsR0FBRyxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztFQUMxSCxJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7RUFDOUksSUFBSSxTQUFTLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtFQUN0RixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtFQUM1SCxJQUFJLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFD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LENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxNQUFNLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxPQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sUUFBUSxDQUFDLEVBQUUsSUFBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxTQUFTLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQywyQ0FBMkMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLElBQUksWUFBWSxDQUFDLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDO0VBQ2hqVSxDQUFBOzs7OztFQ0RBLElBQUksWUFBWSxHQUFHO0VBQ25CLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztFQUM1QixFQUFFLGlCQUFpQixFQUFFLENBQUM7RUFD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QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBMkMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUF3QyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxtQkFBbUIsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBcUMsQ0FBQyxDQUFDLENBQUMsdURBQXVELENBQUMsQ0FBQyxDQUFDLCtQQUErUCxDQUFDLENBQUMsQ0FBQyxxSEFBcUgsQ0FBQyxDQUFDLENBQUMscU1BQXFNLENBQUMsQ0FBQyxDQUFDLGlLQUFpSyxDQUFDLENBQUMsQ0FBQywyT0FBMk8sQ0FBQyxDQUFDLENBQUMsb0hBQW9ILENBQUMsQ0FBQyxDQUFDLDZEQUE2RCxDQUFDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxFQUFFLENBQUMsZ1VBQWdVLENBQUMsRUFBRSxDQUFDLHVOQUF1TixDQUFDLEVBQUUsQ0FBQyxvV0FBb1csQ0FBQyxFQUFFLENBQUMsd0xBQXdMLENBQUMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDLEVBQUUsQ0FBQywwWkFBMFosQ0FBQyxFQUFFLENBQUMsc1FBQXNRLENBQUMsRUFBRSxDQUFDLHdJQUF3SSxDQUFDLEVBQUUsQ0FBQyxrRkFBa0YsQ0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQXVSLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBc0MsQ0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsT0FBTSxXQUFXLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTSxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQTJDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxrTEFBa0wsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLGFBQXFELENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUF1QyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsQ0FBc0MsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxhQUFhLEdBQUcsYUFBb0IsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvREFBb0QsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHNWQUFzVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUEyQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBc0MsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXVDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyw2UEFBNlAsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFzQyxXQUFXLEVBQUUsT0FBTyxTQUFTLEVBQUUsYUFBYSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxzTkFBc04sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFxRSxXQUFXLEVBQUUsT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsMFRBQTBULENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQXlCLDRCQUFBLENBQUEsZ0JBQUEsQ0FBQyxFQUFFLENBQUMsNEJBQUEsQ0FBQSxrQkFBMEIsQ0FBQyxFQUFFLENBQTBCLDRCQUFBLENBQUEsaUJBQUEsQ0FBQyxFQUFFLCtDQUEwQixDQUFDLEVBQUUsQ0FBQyw0QkFBQSxDQUFBLGFBQXFCLENBQUMsRUFBRSxDQUFxQiw0QkFBQSxDQUFBLFlBQUEsQ0FBQyxFQUFFLENBQUMsNEJBQUEsQ0FBQSxhQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFzQyxDQUFHLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMseUNBQW9CLENBQUMsRUFBRSxDQUFDLDRCQUFBLENBQUEsaUJBQXlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQXNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUEyQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDLENBQXNDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLDhVQUE4VSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBWSw0QkFBQSxDQUFBLEdBQUEsQ0FBQyxFQUFFLENBQUMsK0NBQWUsQ0FBQyxFQUFFLENBQUMsNEJBQUEsQ0FBQSxpQkFBeUIsQ0FBQyxFQUFFLENBQUMsU0FBQSxHQUFBLDRCQUFBLENBQUEsU0FBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQXNDLFdBQVcsRUFBRSxPQUFPLFNBQVMsRUFBRSxhQUFhLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlIQUFpSCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQWUsNEJBQUEsQ0FBQSxNQUFBLENBQUMsRUFBRSxzQ0FBaUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMs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Q0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsT0FBTyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPNkksY0FBTSxFQUFFQSxjQUFNLENBQUMsTUFBTSxHQUFHQSxjQUFNLENBQUNBLGNBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxPQUFPLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxD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QTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0E7RUFDZSxTQUFTLE1BQU0sQ0FBQyxTQUFTLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRTtFQUNuRSxFQUFFLElBQUksSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsQ0FBQztFQUNyUyxFQUFFLFlBQVksQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUM7RUFDN0IsRUFBRSxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7RUFDekMsRUFBRSxJQUFJLGNBQWMsR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0VBQzNDLEVBQUUsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxlQUFlLEdBQUcsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sTUFBTSxJQUFJLElBQUksZUFBZSxLQUFLLEtBQUssQ0FBQyxHQUFHLGVBQWUsR0FBRyxjQUFjLENBQUMsTUFBTSxNQUFNLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQztFQUNqUCxFQUFFLElBQUkscUJBQXFCLEdBQUcsU0FBUyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMscUJBQXFCLEdBQUcsT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixNQUFNLElBQUksSUFBSSxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsR0FBRyxPQUFPLEtBQUssSUFBSSxJQUFJLE9BQU8sS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxNQUFNLE1BQU0sSUFBSSxJQUFJLGdCQUFnQixLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxNQUFNLElBQUksSUFBSSxxQkFBcUIsS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyxxQkFBcUIsTUFBTSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxjQUFjLENBQUMscUJBQXFCLE1BQU0sSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxjQUFjLENBQUMsTUFBTSxNQUFNLElBQUksSUFBSSxxQkFBcUIs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QUEsQ0FBQ0MsZ0JBQUcsRUFBQTtFQUFDVyxJQUFBQSxPQUFPLEVBQUMsTUFBTTtFQUFDMEYsSUFBQUEsY0FBYyxFQUFDLFFBQUE7S0FDaENvSCxFQUFBQSxTQUFTLENBQUM5SyxHQUFHLENBQUMrSyxVQUFVLGlCQUFLNU4sc0JBQUEsQ0FBQUMsYUFBQSxDQUFDQyxnQkFBRyxFQUFBO0VBQUM4QyxJQUFBQSxHQUFHLEVBQUU0SyxVQUFXO0VBQUMxQixJQUFBQSxDQUFDLEVBQUUsQ0FBQTtFQUFFLEdBQUEsZUFDckRsTSxzQkFBQSxDQUFBQyxhQUFBLENBQUM0SSxtQkFBTSxFQUFBO0VBQUNOLElBQUFBLE9BQU8sRUFBRUEsTUFBTThFLFVBQVUsQ0FBQ08sVUFBVSxDQUFFO0VBQUMxSCxJQUFBQSxRQUFRLEVBQUVnRixVQUFBQTtLQUN0RDBDLEVBQUFBLFVBQVUsQ0FBQ0MsV0FBVyxFQUNqQixDQUNMLENBQUUsQ0FDTixDQUNGLENBQUMsQ0FBQTtFQUNWLENBQUM7O0VDbEREQyxPQUFPLENBQUNDLGNBQWMsR0FBRyxFQUFFLENBQUE7RUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDMUwsU0FBUyxHQUFHQSxTQUFTLENBQUE7RUFFNUN5TCxPQUFPLENBQUNDLGNBQWMsQ0FBQ2hLLEtBQUssR0FBR0EsS0FBSyxDQUFBO0VBRXBDK0osT0FBTyxDQUFDQyxjQUFjLENBQUMxRSxlQUFlLEdBQUdBLGVBQWUsQ0FBQTtFQUV4RHlFLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDbEUsYUFBYSxHQUFHQSxhQUFhLENBQUE7RUFFcERpRSxPQUFPLENBQUNDLGNBQWMsQ0FBQ0MsbUJBQW1CLEdBQUdBLElBQW1CLENBQUE7RUFFaEVGLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDRSxtQkFBbUIsR0FBR0EsSUFBbUIsQ0FBQTtFQUVoRUgsT0FBTyxDQUFDQyxjQUFjLENBQUNHLG1CQUFtQixHQUFHQSxJQUFtQixDQUFBO0VBRWhFSixPQUFPLENBQUNDLGNBQWMsQ0FBQ0kscUJBQXFCLEdBQUdBLFlBQXFCLENBQUE7RUFFcEVMLE9BQU8sQ0FBQ0MsY0FBYyxDQUFDbEQsZUFBZSxHQUFHQSxlQUFlLENBQUE7RUFFeERpRCxPQUFPLENBQUNDLGNBQWMsQ0FBQ1gsZUFBZSxHQUFHQSxlQUFlOzs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzEsMiwzLDQsNSw2LDcsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTVdfQ==
