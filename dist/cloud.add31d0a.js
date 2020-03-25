// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"media/js/cloud.js":[function(require,module,exports) {
// extract the necessary modules from the Zdog library
var _Zdog = Zdog,
    Illustration = _Zdog.Illustration,
    Ellipse = _Zdog.Ellipse,
    Anchor = _Zdog.Anchor,
    Group = _Zdog.Group,
    TAU = _Zdog.TAU,
    Shape = _Zdog.Shape;
var canvas = document.querySelector('canvas');
var width = canvas.width,
    height = canvas.height; // create an illustration out of the canvas element

var illustration = new Illustration({
  element: '.zdog-canvas',
  zoom: 0.5,
  // allow for drag
  dragRotate: true
}); // stroke used for the dial and to compute the stroke of the other shapes

var stroke = 20; // group describing the clock's dial

var dial = new Group({
  addTo: illustration
}); // outer stroke

new Ellipse({
  addTo: dial,
  stroke: stroke,
  diameter: width - stroke,
  color: '#272A5B'
}); // inner circle

new Ellipse({
  addTo: dial,
  stroke: stroke,
  color: '#272A5B'
}); // for each hand include an anchor element, to rotate from the center of the clock

var anchorSeconds = new Anchor({
  addTo: illustration
}); // each hand is made of a path and a circle
// the path reaches outward before using an arc to wrap around the circle

new Shape({
  addTo: anchorSeconds,
  stroke: stroke / 2,
  color: 'hsl(60, 80%, 52%)',
  path: [{
    x: 0,
    y: -stroke
  }, {
    x: 0,
    y: -height / 2
  }],
  closed: false // rotate: { y: TAU / 2 },

}); // the circle is positioned at the center of the hypothetical circle made by the path's arcs

new Ellipse({
  addTo: anchorSeconds,
  stroke: stroke,
  color: 'hsl(60, 95%, 52%)',
  translate: {
    y: -height / 5 - 35
  }
}); // copy the anchor for the other two hands

var anchorMinutes = anchorSeconds.copyGraph();
var anchorHours = anchorSeconds.copyGraph(); // loop through the children of every anchor to update the hue
// starting at 60 and rotating around the color wheel

[anchorSeconds, anchorMinutes, anchorHours].forEach(function (hand, indexHand) {
  hand.children.forEach(function (child, indexChild) {
    child.color = "hsl(".concat(60 + 120 * indexHand, ", ").concat(80 + 15 * indexChild, "%, 52%)");
  });
}); // retrieve the current number of seconds, minutes and hours

var startingDate = new Date();
var seconds = startingDate.getSeconds();
var minutes = startingDate.getMinutes();
var hours = startingDate.getHours(); // for each anchor rotate the first child according to the time's value
// the idea is to have the arc wrap always below the circle

anchorSeconds.children[0].rotate.y = seconds > 30 ? TAU / 2 : 0;
anchorMinutes.children[0].rotate.y = minutes > 30 ? TAU / 2 : 0;
hours = hours > 12 ? hours - 12 : hours;
anchorHours.children[0].rotate.y = hours > 6 ? TAU / 2 : 0; // rotate the anchors according to the initial value

anchorSeconds.rotate.z = TAU / 60 * seconds;
anchorMinutes.rotate.z = TAU / 60 * minutes;
anchorHours.rotate.z = TAU / 12 * hours; // function called through the request animation function

function animate() {
  // update the graph
  illustration.updateRenderGraph();
  requestAnimationFrame(animate); // retrieve an instance of the date object

  var now = new Date(); // if the number of seconds changes from the previous observation, update teh matching anchor

  if (now.getSeconds() !== seconds) {
    seconds = now.getSeconds();
    anchorSeconds.rotate.z = TAU / 60 * seconds; // if the hand passes past the pre-established threshold, rotate the path to wrap it around the circle in the opposite direction

    if (seconds === 30 || seconds === 0) {
      anchorSeconds.children[0].rotate.y += TAU / 2;
    } // repeat for the number of minutes and hours


    if (now.getMinutes() !== minutes) {
      minutes = now.getMinutes();
      anchorMinutes.rotate.z = TAU / 60 * minutes;

      if (minutes === 30 || minutes === 0) {
        anchorMinutes.children[0].rotate.y += TAU / 2;
      }

      if (now.getHours() !== minutes) {
        hours = now.getHours();
        anchorHours.rotate.z = TAU / 24 * hours;

        if (hours % 6 === 0) {
          anchorHours.children[0].rotate.y += TAU / 2;
        }
      }
    }
  }
}

animate();
},{}],"../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39669" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","media/js/cloud.js"], null)
//# sourceMappingURL=/cloud.add31d0a.js.map