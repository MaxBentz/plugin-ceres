(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemPrice.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemPrice.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helper_OrderPropertyHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helper/OrderPropertyHelper */ "./resources/js/src/app/helper/OrderPropertyHelper.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "item-price",
  props: {
    showCrossPrice: {
      type: Boolean,
      default: true
    }
  },
  inject: {
    itemId: {
      default: null
    }
  },
  computed: {
    currentVariation: function currentVariation() {
      return this.$store.getters["".concat(this.itemId, "/currentItemVariation")];
    },
    hasCrossPrice: function hasCrossPrice() {
      var hasRrpPrice = !!this.currentVariation.prices.rrp && this.currentVariation.prices.rrp.unitPrice.value > this.currentVariation.prices.default.unitPrice.value;
      var hasBeforePrice = this.hasSpecialOffer && !!this.currentVariation.prices.default && this.currentVariation.prices.default.unitPrice.value > this.currentVariation.prices.specialOffer.unitPrice.value;
      return hasRrpPrice || hasBeforePrice;
    },
    hasSpecialOffer: function hasSpecialOffer() {
      return !!this.currentVariation.prices.specialOffer;
    },
    variationGraduatedPrice: function variationGraduatedPrice() {
      return this.$store.getters["".concat(this.itemId, "/variationGraduatedPrice")];
    },
    variationTotalPrice: function variationTotalPrice() {
      return this.$store.getters["".concat(this.itemId, "/variationTotalPrice")];
    },
    showDynamicPrice: function showDynamicPrice() {
      var state = this.$store.state.items[this.itemId];
      return App.config.item.showPleaseSelect && App.isCheapestSorting && state.variationSelect && !state.variationSelect.isVariationSelected && (state.pleaseSelectVariationId === this.currentVariation.variation.id || state.pleaseSelectVariationId === 0);
    },
    propertiesWithAdditionalCostsVisible: function propertiesWithAdditionalCostsVisible() {
      var _this = this;
      return this.currentVariation.properties.filter(function (entry) {
        var property = entry.property;
        return property && property.isShownAsAdditionalCosts && property.isShownOnItemPage && (!property.isOderProperty && !App.useVariationOrderProperties || _this.isVariationOrderPropertyRequiredPreselected(property));
      });
    }
  },
  methods: {
    isVariationOrderPropertyRequiredPreselected: function isVariationOrderPropertyRequiredPreselected(property) {
      return property.isRequired && property.isPreSelected && property.isOderProperty && App.useVariationOrderProperties;
    },
    hasTax: function hasTax(property) {
      return Object(_helper_OrderPropertyHelper__WEBPACK_IMPORTED_MODULE_2__["hasVat"])(property);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemPrice.vue?vue&type=template&id=27592de8":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/item/ItemPrice.vue?vue&type=template&id=27592de8 ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    class: {
      "has-crossprice": _vm.hasCrossPrice
    }
  }, [_vm.showCrossPrice && _vm.hasCrossPrice ? _c("div", {
    staticClass: "crossprice",
    class: {
      "is-special-offer": _vm.hasSpecialOffer
    }
  }, [_c("del", {
    staticClass: "text-muted small text-appearance"
  }, [_vm.hasSpecialOffer ? [_vm._v("\n                " + _vm._s(_vm._f("itemCrossPrice")(_vm.currentVariation.prices.default.unitPrice.formatted, true)) + "\n            ")] : [_vm._v("\n                " + _vm._s(_vm._f("itemCrossPrice")(_vm.currentVariation.prices.rrp.unitPrice.formatted)) + "\n            ")]], 2)]) : _vm._e(), _vm._v(" "), _c("span", {
    staticClass: "price h1",
    class: {
      "is-special-offer": _vm.hasSpecialOffer
    }
  }, [_c("span", [_vm.showDynamicPrice ? [_vm._v("\n                " + _vm._s(_vm.$translate("Ceres::Template.dynamicVariationPrice", {
    price: _vm.$options.filters.currency(_vm.variationTotalPrice, _vm.currentVariation.prices.default.currency)
  })) + "\n            ")] : [_vm._v("\n                " + _vm._s(_vm._f("currency")(_vm.variationTotalPrice, _vm.currentVariation.prices.default.currency)) + "\n            ")]], 2), _vm._v(" "), _c("sup", [_vm._v(_vm._s(_vm.$translate("Ceres::Template.singleItemFootnote1")))])]), _vm._v(" "), _vm.propertiesWithAdditionalCostsVisible.length ? _c("ul", {
    staticClass: "text-muted pl-0 list-unstyled"
  }, _vm._l(_vm.propertiesWithAdditionalCostsVisible, function (property) {
    return _c("li", {
      key: property.propertyId
    }, [_c("span", {
      staticClass: "d-block"
    }, [_vm._v("\n                " + _vm._s(property.property.names.name) + " "), _vm.$options.filters.propertySurcharge(_vm.currentVariation.properties, property.propertyId) > 0 ? [_vm._v("(" + _vm._s(_vm.$translate("Ceres::Template.basketPlusAbbr")) + " " + _vm._s(_vm._f("currency")(_vm._f("propertySurcharge")(_vm.currentVariation.properties, property.propertyId))) + ")")] : _vm._e(), _vm._v(" "), _vm.hasTax(property) ? [_vm._v(_vm._s(_vm.$translate("Ceres::Template.singleItemFootnote1")))] : _vm._e()], 2)]);
  }), 0) : _vm._e(), _vm._v(" "), _vm.currentVariation.prices.default.lowestPrice.value && _vm.showCrossPrice && _vm.hasCrossPrice ? _c("div", {
    staticClass: "lowest-price text-muted mb-3"
  }, [_c("div", {
    domProps: {
      innerHTML: _vm._s(_vm.$translate("Ceres::Template.singleItemLowestPrice", {
        price: _vm.currentVariation.prices.default.lowestPrice.formatted
      }))
    }
  })]) : _vm._e(), _vm._v(" "), _vm.currentVariation.unit ? _c("div", {
    staticClass: "base-price text-muted my-3",
    class: {
      "is-single-piece": _vm.currentVariation.unit && _vm.currentVariation.unit.content === 1 && _vm.currentVariation.unit.unitOfMeasurement === "C62"
    }
  }, [_c("div", [_vm._v("\n            " + _vm._s(_vm.$translate("Ceres::Template.singleItemContent")) + "\n            "), _c("span", [_vm._v(_vm._s(_vm._f("numberFormat")(_vm.currentVariation.unit.content)) + " ")]), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.currentVariation.unit.names.name))])]), _vm._v(" "), _vm.currentVariation.variation.mayShowUnitPrice ? _c("div", [_vm._v("\n            " + _vm._s(_vm.$translate("Ceres::Template.singleItemUnitPrice")) + "\n            "), _c("span", {
    staticClass: "base-price-value"
  }, [_vm._v("\n                " + _vm._s(_vm._f("specialOffer")(_vm.variationGraduatedPrice.basePrice, _vm.currentVariation.prices, "basePrice")) + "\n            ")])]) : _vm._e()]) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/item/ItemPrice.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemPrice.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ItemPrice_vue_vue_type_template_id_27592de8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemPrice.vue?vue&type=template&id=27592de8 */ "./resources/js/src/app/components/item/ItemPrice.vue?vue&type=template&id=27592de8");
/* harmony import */ var _ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemPrice.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/item/ItemPrice.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ItemPrice_vue_vue_type_template_id_27592de8__WEBPACK_IMPORTED_MODULE_0__["render"],
  _ItemPrice_vue_vue_type_template_id_27592de8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/item/ItemPrice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemPrice.vue?vue&type=script&lang=js":
/*!************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemPrice.vue?vue&type=script&lang=js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemPrice.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemPrice.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPrice_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/item/ItemPrice.vue?vue&type=template&id=27592de8":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/app/components/item/ItemPrice.vue?vue&type=template&id=27592de8 ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPrice_vue_vue_type_template_id_27592de8__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ItemPrice.vue?vue&type=template&id=27592de8 */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/item/ItemPrice.vue?vue&type=template&id=27592de8");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPrice_vue_vue_type_template_id_27592de8__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ItemPrice_vue_vue_type_template_id_27592de8__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=ceres-client-36.js.map