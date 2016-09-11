!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('2', ['3', '4', '5', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var classof = $__require('3'),
      ITERATOR = $__require('4')('iterator'),
      Iterators = $__require('5');
  module.exports = $__require('6').isIterable = function (it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  return module.exports;
});
$__System.registerDynamic('7', ['8', '9', '2'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('8');
  $__require('9');
  module.exports = $__require('2');
  return module.exports;
});
$__System.registerDynamic("a", ["7"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("7"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic("b", ["c", "a"], true, function ($__require, exports, module) {
  /* */
  "use strict";

  var define,
      global = this || self,
      GLOBAL = global;
  var _getIterator = $__require("c")["default"];
  var _isIterable = $__require("a")["default"];
  exports["default"] = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;
      try {
        for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);
          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (_isIterable(Object(arr))) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();
  exports.__esModule = true;
  return module.exports;
});
$__System.registerDynamic("d", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function () {/* empty */};
  return module.exports;
});
$__System.registerDynamic("e", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  return module.exports;
});
$__System.registerDynamic('f', ['10', '11'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var IObject = $__require('10'),
      defined = $__require('11');
  module.exports = function (it) {
    return IObject(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('12', ['d', 'e', '5', 'f', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('d'),
      step = $__require('e'),
      Iterators = $__require('5'),
      toIObject = $__require('f');
  module.exports = $__require('13')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated);
    this._i = 0;
    this._k = kind;
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');
  Iterators.Arguments = Iterators.Array;
  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});
$__System.registerDynamic('8', ['12', '5'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('12');
  var Iterators = $__require('5');
  Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
  return module.exports;
});
$__System.registerDynamic("14", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
$__System.registerDynamic('15', ['14', '11'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toInteger = $__require('14'),
      defined = $__require('11');
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
$__System.registerDynamic("16", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = true;
  return module.exports;
});
$__System.registerDynamic('17', ['18'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = $__require('18');
  return module.exports;
});
$__System.registerDynamic("19", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
$__System.registerDynamic('1a', ['1b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = !$__require('1b')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('18', ['1c', '19', '1a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('1c'),
      createDesc = $__require('19');
  module.exports = $__require('1a') ? function (object, key, value) {
    return $.setDesc(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
$__System.registerDynamic('1d', ['1c', '19', '1e', '18', '4'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $ = $__require('1c'),
      descriptor = $__require('19'),
      setToStringTag = $__require('1e'),
      IteratorPrototype = {};
  $__require('18')(IteratorPrototype, $__require('4')('iterator'), function () {
    return this;
  });
  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = $.create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
$__System.registerDynamic("1f", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
$__System.registerDynamic('1e', ['1c', '1f', '4'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var def = $__require('1c').setDesc,
      has = $__require('1f'),
      TAG = $__require('4')('toStringTag');
  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
      configurable: true,
      value: tag
    });
  };
  return module.exports;
});
$__System.registerDynamic('13', ['16', '20', '17', '18', '1f', '5', '1d', '1e', '1c', '4'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('16'),
      $export = $__require('20'),
      redefine = $__require('17'),
      hide = $__require('18'),
      has = $__require('1f'),
      Iterators = $__require('5'),
      $iterCreate = $__require('1d'),
      setToStringTag = $__require('1e'),
      getProto = $__require('1c').getProto,
      ITERATOR = $__require('4')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()),
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';
  var returnThis = function () {
    return this;
  };
  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }
      return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        methods,
        key;
    if ($native) {
      var IteratorPrototype = getProto($default.call(new Base()));
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && has(proto, FF_ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      if (DEF_VALUES && $native.name !== VALUES) {
        VALUES_BUG = true;
        $default = function values() {
          return $native.call(this);
        };
      }
    }
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: !DEF_VALUES ? $default : getMethod('entries')
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
$__System.registerDynamic('9', ['15', '13'], true, function ($__require, exports, module) {
  /* */
  'use strict';

  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('15')(true);
  $__require('13')(String, 'String', function (iterated) {
    this._t = String(iterated);
    this._i = 0;
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return {
      value: undefined,
      done: true
    };
    point = $at(O, index);
    this._i += point.length;
    return {
      value: point,
      done: false
    };
  });
  return module.exports;
});
$__System.registerDynamic('21', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
$__System.registerDynamic('22', ['21'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var isObject = $__require('21');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('3', ['23', '4'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var cof = $__require('23'),
        TAG = $__require('4')('toStringTag'),
        ARG = cof(function () {
        return arguments;
    }()) == 'Arguments';
    module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = (O = Object(it))[TAG]) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
    };
    return module.exports;
});
$__System.registerDynamic('24', ['25'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var global = $__require('25'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
    module.exports = function (key) {
        return store[key] || (store[key] = {});
    };
    return module.exports;
});
$__System.registerDynamic('26', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
$__System.registerDynamic('4', ['24', '26', '25'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var store = $__require('24')('wks'),
        uid = $__require('26'),
        Symbol = $__require('25').Symbol;
    module.exports = function (name) {
        return store[name] || (store[name] = Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
    };
    return module.exports;
});
$__System.registerDynamic("5", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = {};
  return module.exports;
});
$__System.registerDynamic('27', ['3', '4', '5', '6'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    /* */
    var classof = $__require('3'),
        ITERATOR = $__require('4')('iterator'),
        Iterators = $__require('5');
    module.exports = $__require('6').getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
    };
    return module.exports;
});
$__System.registerDynamic('28', ['22', '27', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var anObject = $__require('22'),
      get = $__require('27');
  module.exports = $__require('6').getIterator = function (it) {
    var iterFn = get(it);
    if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
    return anObject(iterFn.call(it));
  };
  return module.exports;
});
$__System.registerDynamic('29', ['8', '9', '28'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('8');
  $__require('9');
  module.exports = $__require('28');
  return module.exports;
});
$__System.registerDynamic("c", ["29"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("29"), __esModule: true };
  return module.exports;
});
$__System.registerDynamic('25', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('2a', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('2b', ['2a'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var aFunction = $__require('2a');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () {
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic('20', ['25', '6', '2b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var global = $__require('25'),
      core = $__require('6'),
      ctx = $__require('2b'),
      PROTOTYPE = 'prototype';
  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        IS_WRAP = type & $export.W,
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
        key,
        own,
        out;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      own = !IS_FORCED && target && key in target;
      if (own && key in exports) continue;
      out = own ? target[key] : source[key];
      exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
        var F = function (param) {
          return this instanceof C ? new C(param) : C(param);
        };
        F[PROTOTYPE] = C[PROTOTYPE];
        return F;
      }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      if (IS_PROTO) (exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
    }
  };
  $export.F = 1;
  $export.G = 2;
  $export.S = 4;
  $export.P = 8;
  $export.B = 16;
  $export.W = 32;
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("1c", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $Object = Object;
  module.exports = {
    create: $Object.create,
    getProto: $Object.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: $Object.getOwnPropertyDescriptor,
    setDesc: $Object.defineProperty,
    setDescs: $Object.defineProperties,
    getKeys: $Object.keys,
    getNames: $Object.getOwnPropertyNames,
    getSymbols: $Object.getOwnPropertySymbols,
    each: [].forEach
  };
  return module.exports;
});
$__System.registerDynamic("11", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('2c', ['11'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var defined = $__require('11');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic("23", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
$__System.registerDynamic('10', ['23'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var cof = $__require('23');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});
$__System.registerDynamic("1b", [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('2d', ['1c', '2c', '10', '1b'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $ = $__require('1c'),
      toObject = $__require('2c'),
      IObject = $__require('10');
  module.exports = $__require('1b')(function () {
    var a = Object.assign,
        A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var T = toObject(target),
        $$ = arguments,
        $$len = $$.length,
        index = 1,
        getKeys = $.getKeys,
        getSymbols = $.getSymbols,
        isEnum = $.isEnum;
    while ($$len > index) {
      var S = IObject($$[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
    return T;
  } : Object.assign;
  return module.exports;
});
$__System.registerDynamic('2e', ['20', '2d'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var $export = $__require('20');
  $export($export.S + $export.F, 'Object', { assign: $__require('2d') });
  return module.exports;
});
$__System.registerDynamic('6', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  var core = module.exports = { version: '1.2.6' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('2f', ['2e', '6'], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  $__require('2e');
  module.exports = $__require('6').Object.assign;
  return module.exports;
});
$__System.registerDynamic("30", ["2f"], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  /* */
  module.exports = { "default": $__require("2f"), __esModule: true };
  return module.exports;
});
$__System.register("31", ["30", "b", "c"], function (_export) {
	var _Object$assign, _slicedToArray, _getIterator, template, parseDom, genItemDom, genNavigatorDom, insertItemDom, insertNavigatorDom, removeNavigatorStatus, slidePrev, slideNext, getIndex, addEventListener, defaultSetting, octSlider;

	return {
		setters: [function (_) {
			_Object$assign = _["default"];
		}, function (_b) {
			_slicedToArray = _b["default"];
		}, function (_c) {
			_getIterator = _c["default"];
		}],
		execute: function () {
			/*
   * octSlider.js 0.10
   * 一个简单的图片滚动的javascript组件
   * 2014-10-28 By@pcwow
   */

			"use strict";

			template = {
				content: "<div class=\"octs-outter\" aria-live=\"polite\" >\n\t\t\t\t\t<ul class=\"octs-item-list\" ></ul>\n\t\t\t\t\t<ul class=\"octs-navigator-list\" ></ul>\n\t\t\t\t\t<div class=\"octs-button-group\" >\n\t\t\t\t\t\t<button class=\"octs-button octs-button-prev\" role=\"button\" ></button>\n\t\t\t\t\t\t<button class=\"octs-button octs-button-next\" role=\"button\" ></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>",
				item: "<li class=\"octs-item\" >\n\t\t\t\t<section class=\"octs-item-main\" >\n\t\t\t\t\t<img src=\"\" alt=\"\" />\n\t\t\t\t</section>\n\t\t\t\t<footer class=\"octs-item-footer\" >\n\t\t\t\t\t<a href=\"#\"></a>\n\t\t\t\t</footer>\n\t\t\t</li>",
				navigator: "<li class=\"octs-navigator-item\" role=\"button\" ></li>" //octs-navigator-item-active
			};

			parseDom = function parseDom(html) {
				var div = document.createElement("div");
				div.innerHTML = html;
				return div.childNodes;
			};

			genItemDom = function genItemDom(data) {
				var dom = parseDom(template.item)[0];
				var img = dom.children[0].children[0];
				var link = dom.children[1].children[0];
				img.src = data.img;
				img.alt = data.title;
				link.href = data.link;
				link.innerText = data.title;
				void 0;
				return dom;
			};

			genNavigatorDom = function genNavigatorDom(data) {
				var dom = parseDom(template.navigator)[0];
				return dom;
			};

			insertItemDom = function insertItemDom(sliderDom, data) {
				var list = sliderDom.children[0];
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = _getIterator(data.entries()), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var _step$value = _slicedToArray(_step.value, 2);

						var index = _step$value[0];
						var item = _step$value[1];

						void 0;
						var itemDom = genItemDom(item);
						list.appendChild(itemDom);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator["return"]) {
							_iterator["return"]();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				return sliderDom;
			};

			insertNavigatorDom = function insertNavigatorDom(sliderDom, data) {
				var list = sliderDom.children[1];
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = _getIterator(data.entries()), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _step2$value = _slicedToArray(_step2.value, 2);

						var index = _step2$value[0];
						var item = _step2$value[1];

						void 0;
						var navigatorDom = genNavigatorDom(item);
						if (index === 0) {
							navigatorDom.classList.add("octs-navigator-item-active");
						}
						list.appendChild(navigatorDom);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
							_iterator2["return"]();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}

				return sliderDom;
			};

			removeNavigatorStatus = function removeNavigatorStatus(sliderDom) {
				var list = sliderDom.children[1].children;
				var _iteratorNormalCompletion3 = true;
				var _didIteratorError3 = false;
				var _iteratorError3 = undefined;

				try {
					for (var _iterator3 = _getIterator([].entries.call(list)), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
						var _step3$value = _slicedToArray(_step3.value, 2);

						var index = _step3$value[0];
						var item = _step3$value[1];

						item.classList.remove("octs-navigator-item-active");
					}
				} catch (err) {
					_didIteratorError3 = true;
					_iteratorError3 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
							_iterator3["return"]();
						}
					} finally {
						if (_didIteratorError3) {
							throw _iteratorError3;
						}
					}
				}
			};

			slidePrev = function slidePrev(sliderDom, index, side) {
				var ul = sliderDom.children[0];
				var navigatorUl = sliderDom.children[1];
				var navigator = navigatorUl.children[index];
				var transition = ul.style.transition;
				var nowIndex = getIndex(navigatorUl, null, function (item) {
					return item.classList.contains("octs-navigator-item-active");
				});
				var time = side ? 1 : nowIndex - index;
				var els = [].map.call(ul.children, function (item) {
					return item;
				});
				var maxIndex = els.length - 1;
				var first = els[0];
				for (var i = 0; i < time; i++) {
					var nowEl = els[maxIndex - i];
					ul.insertBefore(nowEl, first);
					first = nowEl;
				}
				ul.style.cssText = "transition: none;\n\t\t\t\t\t\tmargin-left: -" + time + "00%;";
				setTimeout(function () {
					ul.style.cssText = "transition: " + transition + ";\n\t\t\t\t\t\t  \tmargin-left: 0%;";
					var listener = function listener() {
						removeNavigatorStatus(sliderDom);
						navigator.classList.add("octs-navigator-item-active");
						sliderDom.slideOver = true;
						ul.removeEventListener("transitionend", listener, false);
						void 0;
					};
					ul.addEventListener("transitionend", listener, false);
					void 0;
				}, 0);
				sliderDom.slideOver = false;
				void 0;
			};

			slideNext = function slideNext(sliderDom, index, side) {
				var ul = sliderDom.children[0];
				var navigatorUl = sliderDom.children[1];
				var navigator = navigatorUl.children[index];
				var transition = ul.style.transition;
				var nowIndex = getIndex(navigatorUl, null, function (item) {
					return item.classList.contains("octs-navigator-item-active");
				});
				var time = side ? 1 : index - nowIndex;
				var els = [].map.call(ul.children, function (item) {
					return item;
				});
				ul.style.marginLeft = "-" + time + "00%";
				var listener = function listener() {
					for (var i = 0; i < time; i++) {
						ul.appendChild(els[i]);
					}
					ul.style.cssText = "transition: none;\n\t\t\t\t\t\t\tmargin-left: 0%;";
					setTimeout(function () {
						ul.style.transition = transition;
						removeNavigatorStatus(sliderDom);
						navigator.classList.add("octs-navigator-item-active");
						sliderDom.slideOver = true;
						ul.removeEventListener("transitionend", listener, false);
						void 0;
					}, 0);
				};
				ul.addEventListener("transitionend", listener, false);
				void 0;
				sliderDom.slideOver = false;
				void 0;
			};

			getIndex = function getIndex(parent, child, callback) {
				var children = parent.children;
				var _iteratorNormalCompletion4 = true;
				var _didIteratorError4 = false;
				var _iteratorError4 = undefined;

				try {
					for (var _iterator4 = _getIterator([].entries.call(children)), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
						var _step4$value = _slicedToArray(_step4.value, 2);

						var index = _step4$value[0];
						var item = _step4$value[1];

						if (child === item) {
							return index;
						} else if (callback && callback(item)) {
							return index;
						}
					}
				} catch (err) {
					_didIteratorError4 = true;
					_iteratorError4 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
							_iterator4["return"]();
						}
					} finally {
						if (_didIteratorError4) {
							throw _iteratorError4;
						}
					}
				}
			};

			addEventListener = function addEventListener(sliderDom, setting) {
				var index = 0;
				var total = sliderDom.children[0].children.length;
				sliderDom.slideOver = true;
				var prevBtn = sliderDom.children[2].children[0];
				var nextBtn = sliderDom.children[2].children[1];
				var navigators = sliderDom.children[1];
				var mouseover = false;
				var timeoutId = 0;
				prevBtn.addEventListener("click", function (event) {
					void 0;
					if (!sliderDom.slideOver) return;
					index = index - 1 < 0 ? total - 1 : index - 1;
					if (index === total - 1) {
						slidePrev(sliderDom, index, true);
					} else {
						slidePrev(sliderDom, index, false);
					}
				}, false);
				nextBtn.addEventListener("click", function (event) {
					void 0;
					if (!sliderDom.slideOver) return;
					index = (index + 1) % total;
					if (index === 0) {
						slideNext(sliderDom, index, true);
					} else {
						slideNext(sliderDom, index, false);
					}
				}, false);
				navigators.addEventListener("click", function (event) {
					var target = event.target;
					if (!sliderDom.slideOver || target.tagName.toLowerCase() != "li") return;
					var targetIndex = getIndex(navigators, target);
					if (targetIndex > index) {
						index = targetIndex;
						slideNext(sliderDom, index, false);
						void 0;
					} else if (targetIndex < index) {
						index = targetIndex;
						slidePrev(sliderDom, index, false);
						void 0;
					}
					void 0;
				}, false);
				sliderDom.addEventListener("mouseover", function (event) {
					mouseover = true;
				}, false);
				sliderDom.addEventListener("mouseout", function (event) {
					mouseover = false;
				}, false);
				if (setting.autoRun) {
					var autoRun = function autoRun() {
						if (!mouseover) {
							if (setting.reverse) {
								prevBtn.click();
							} else {
								nextBtn.click();
							}
						}
						timeoutId = setTimeout(autoRun, setting.time);
					};
					timeoutId = setTimeout(autoRun, setting.time);
				}
				void 0;
				return sliderDom;
			};

			defaultSetting = {
				autoRun: false,
				reverse: false,
				time: 3000
			};

			octSlider = function octSlider(dom, data, setting) {
				setting = _Object$assign(defaultSetting, setting);
				var sliderDom = parseDom(template.content)[0];
				//insert item dom
				sliderDom = insertItemDom(sliderDom, data);
				//insert navigator dom
				sliderDom = insertNavigatorDom(sliderDom, data);
				//add eventLisenner
				sliderDom = addEventListener(sliderDom, setting);
				//inert sliderDom to dom
				dom.appendChild(sliderDom);
				void 0;
			};

			_export("default", octSlider);
		}
	};
});
$__System.register("1", ["31"], function (_export) {
    "use strict";

    var octSlider, data;
    return {
        setters: [function (_) {
            octSlider = _["default"];
        }],
        execute: function () {
            data = [{
                title: "11111111111111111111111111111111111111111111111111111222222222222221111111111",
                link: "111",
                img: "http://spnews.qiniudn.com/1.png"
            }, {
                title: "222",
                link: "222",
                img: "http://spnews.qiniudn.com/2.png"
            }, {
                title: "333",
                link: "333",
                img: "http://spnews.qiniudn.com/3.png"
            }, {
                title: "444",
                link: "444",
                img: "http://spnews.qiniudn.com/4.png"
            }, {
                title: "555",
                link: "55555",
                img: "http://spnews.qiniudn.com/5.png"
            }];

            octSlider(document.querySelector("#octSlider"), data, {
                autoRun: true
            });
        }
    };
});
// reverse: true,
// time: 3000
})
(function(factory) {
  factory();
});
//# sourceMappingURL=index.bundle.js.map
