webpackJsonp([0],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(71)
/* template */
var __vue_template__ = __webpack_require__(72)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/index/home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d666195a", Component.options)
  } else {
    hotAPI.reload("data-v-d666195a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("0f410588", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d666195a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d666195a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.carousel-inner>.item>img,\n.carousel-inner>.item>a>img {\n\tmargin: auto;\n}\n#myCarousel {\n\tmargin-top: -20px;\n}\n.fondo-lista {\n\tmin-height: 80vh;\n\tbackground-image: url(\"/uploads/home/fondopaticas.png\");\n\tbackground-size: contain;\n}\n", ""]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mycomponents_cards_products_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mycomponents_cards_products_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mycomponents_cards_products_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
	data: function (_data) {
		function data() {
			return _data.apply(this, arguments);
		}

		data.toString = function () {
			return _data.toString();
		};

		return data;
	}(function () {
		return {
			storageURL: data.getStorageURL(),
			productsAllArray: [],
			baseURL: 'http://127.0.0.1:8000/',
			order_by: "",
			filter: ""
		};
	}),
	created: function created() {
		this.getAllProducts();
	},


	computed: {
		categories: function categories() {
			return data.getCategories();
			console.log;
		}
	},
	methods: {
		getAllProducts: function getAllProducts() {
			console.log('Hola');
			var vm = this;
			axios.get(vm.baseURL + '/api/v1/allProducts').then(function (response) {
				$.notifyClose();
				vm.productsAllArray = response.data;
			}).catch(function (error) {
				console.log('aqui');
				// util.notify('An error occured, try to refresh', 'error');
				// util.showResult(error);
			});
		}
	}
});

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "fondo-lista" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c(
          "div",
          {
            staticClass: "col-sm-3",
            staticStyle: { "background-color": "#fefefe" }
          },
          [
            _c(
              "ul",
              [
                _vm._v("\n\t\t\t\t  \t\tCategorias\n\t\t\t\t  \t\t"),
                _vm._l(_vm.categories, function(cat) {
                  return _c("a", { attrs: { href: "/#/category/" + cat.id } }, [
                    _c("li", [_vm._v(_vm._s(cat.category_name))])
                  ])
                })
              ],
              2
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-8", attrs: { id: "crud" } }, [
          _c("div", { staticClass: "custom-card text-center" }, [
            _c(
              "div",
              {
                staticClass:
                  "card-header text-center row justify-content-md-center align-items-center",
                staticStyle: {
                  "border-radius": "15px",
                  "background-color": "#ff4f93"
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "row",
                    staticStyle: { "padding-left": "20%" }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-5" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filter,
                            expression: "filter"
                          }
                        ],
                        staticClass: "form-control",
                        staticStyle: {
                          display: "inline-flex",
                          border: "white",
                          "border-radius": "5px",
                          "margin-top": "9px"
                        },
                        attrs: {
                          type: "text",
                          placeholder: "Buscar por categoria o nombe"
                        },
                        domProps: { value: _vm.filter },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.filter = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-md-1" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          staticStyle: {
                            display: "inline-flex",
                            "margin-top": "8px"
                          },
                          on: {
                            click: function($event) {
                              return _vm.GetSchedulesByName()
                            }
                          }
                        },
                        [_vm._v("Buscar")]
                      )
                    ])
                  ]
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "padding-20" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col-12",
                    staticStyle: {
                      display: "flex",
                      "justify-content": "flex-end",
                      padding: "5px"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "text-left",
                        staticStyle: { "max-width": "200px" }
                      },
                      [
                        _c("span", [_vm._v("Ordenar por:")]),
                        _vm._v(" "),
                        _c(
                          "select",
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.order_by,
                                expression: "order_by"
                              }
                            ],
                            staticClass: "form-control",
                            on: {
                              change: [
                                function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.order_by = $event.target.multiple
                                    ? $$selectedVal
                                    : $$selectedVal[0]
                                },
                                function($event) {
                                  return _vm.onChange($event)
                                }
                              ]
                            }
                          },
                          [
                            _c(
                              "option",
                              { attrs: { value: "ts.individual_rate desc" } },
                              [_vm._v("Precio mayor")]
                            ),
                            _vm._v(" "),
                            _c(
                              "option",
                              { attrs: { value: "ts.individual_rate asc" } },
                              [_vm._v("Precio menor")]
                            ),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "score_desc" } }, [
                              _vm._v("Calificación mayor")
                            ]),
                            _vm._v(" "),
                            _c("option", { attrs: { value: "score_asc" } }, [
                              _vm._v("Calificación menor")
                            ])
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-10" },
                  _vm._l(_vm.productsAllArray, function(product) {
                    return _c("products-card", {
                      key: product.id,
                      attrs: { value: product }
                    })
                  }),
                  1
                )
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-md-2", staticStyle: { display: "inline-flex" } },
      [
        _c(
          "h2",
          {
            staticClass: "letra-boldfont",
            staticStyle: {
              "align-self": "center",
              color: "white",
              "font-size": "1.2em"
            }
          },
          [_vm._v("Buscar:")]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d666195a", module.exports)
  }
}

/***/ })

});