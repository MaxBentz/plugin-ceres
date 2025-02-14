(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/src/app/services/ApiService.js");
/* harmony import */ var _services_NotificationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/NotificationService */ "./resources/js/src/app/services/NotificationService.js");
/* harmony import */ var _services_ValidationService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/ValidationService */ "./resources/js/src/app/services/ValidationService.js");
/* harmony import */ var _helper_executeReCaptcha__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helper/executeReCaptcha */ "./resources/js/src/app/helper/executeReCaptcha.js");
/* harmony import */ var _mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/buttonSizeProperty.mixin */ "./resources/js/src/app/mixins/buttonSizeProperty.mixin.js");











/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixins_buttonSizeProperty_mixin__WEBPACK_IMPORTED_MODULE_10__["ButtonSizePropertyMixin"]],
  props: {
    showNameInputs: {
      type: Boolean,
      default: false
    },
    showPrivacyPolicyCheckbox: {
      type: Boolean,
      default: true
    },
    emailFolder: {
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      isDisabled: false,
      privacyPolicyValue: false,
      honeypot: "",
      loadRecaptcha: false
    };
  },
  computed: {
    privacyPolicyText: function privacyPolicyText() {
      var link = "<a href=\"" + App.urls.privacyPolicy + "\" target=\"_blank\"><span class=\"text-primary text-appearance\">" + this.$translate("Ceres::Template.checkoutPrivacyPolicy", {
        "hyphen": "&shy;"
      }) + "</span></a>";
      return this.$translate("Ceres::Template.newsletterAcceptPrivacyPolicy", {
        "policy": link
      }) + this.$translate("Ceres::Template.newsletterIsRequiredFootnote");
    }
  },
  methods: {
    validateData: function validateData() {
      var _this = this;
      this.isDisabled = true;
      _services_ValidationService__WEBPACK_IMPORTED_MODULE_8__["default"].validate($("#newsletter-input-form_" + this._uid)).done(function () {
        _this.save();
      }).fail(function (invalidFields) {
        _services_ValidationService__WEBPACK_IMPORTED_MODULE_8__["default"].markInvalidFields(invalidFields, "error");
        invalidFields.filter(function (field) {
          return field.dataset.validate !== null;
        }).map(function (field) {
          return {
            type: field.dataset.validate,
            name: field.innerText
          };
        }).forEach(function (field) {
          if (field.type === '!regex') {
            _services_NotificationService__WEBPACK_IMPORTED_MODULE_7__["default"].error(_this.$translate("Ceres::Template.newsletterNotAllowedCharacters", {
              name: field.name
            }));
          }
        });
        _this.isDisabled = false;
      });
    },
    save: function save() {
      var _this2 = this;
      var recaptchaEl = this.$el.querySelector("[data-recaptcha]");
      if (App.config.global.googleRecaptchaApiKey && (!window.grecaptcha || !recaptchaEl)) {
        _services_NotificationService__WEBPACK_IMPORTED_MODULE_7__["default"].error(this.$translate("Ceres::Template.newsletterAcceptRecaptchaCookie"));
        this.isDisabled = false;
        return;
      }
      Object(_helper_executeReCaptcha__WEBPACK_IMPORTED_MODULE_9__["executeReCaptcha"])(this.$el).then(function (recaptchaToken) {
        _services_ApiService__WEBPACK_IMPORTED_MODULE_6__["default"].post("/rest/io/customer/newsletter", {
          email: _this2.email,
          firstName: _this2.firstName,
          lastName: _this2.lastName,
          emailFolder: _this2.emailFolder,
          honeypot: _this2.honeypot,
          recaptcha: recaptchaToken
        }).done(function (data) {
          if (!!data.containsHoneypot) {
            _services_NotificationService__WEBPACK_IMPORTED_MODULE_7__["default"].warn(_this2.$translate("Ceres::Template.newsletterHoneypotWarning"));
          } else {
            _services_NotificationService__WEBPACK_IMPORTED_MODULE_7__["default"].success(_this2.$translate("Ceres::Template.newsletterSuccessMessage")).closeAfter(3000);
          }
          _this2.resetInputs();
        }).fail(function () {
          _services_NotificationService__WEBPACK_IMPORTED_MODULE_7__["default"].error(_this2.$translate("Ceres::Template.newsletterErrorMessage")).closeAfter(5000);
        }).always(function () {
          _this2.isDisabled = false;
          _this2.resetRecaptcha();
        });
      });
    },
    resetInputs: function resetInputs() {
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.privacyPolicyValue = false;
    },
    resetRecaptcha: function resetRecaptcha() {
      if (App.config.global.googleRecaptchaVersion === 2 && window.grecaptcha) {
        var recaptchaId = this.$el.querySelector("[data-recaptcha]");
        window.grecaptcha.reset(recaptchaId);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=73e680cd":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=73e680cd ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);


var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("form", {
    ref: "newsletterForm",
    attrs: {
      id: "newsletter-input-form_" + _vm._uid,
      method: "post"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.validateData.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row"
  }, [_vm.showNameInputs ? _c("div", {
    staticClass: "col-6"
  }, [_c("div", {
    staticClass: "input-unit",
    attrs: {
      "data-validate": "!regex"
    }
  }, [_c("label", {
    attrs: {
      for: "first-name-input_" + _vm._uid
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.newsletterFirstName")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.firstName,
      expression: "firstName"
    }],
    attrs: {
      type: "text",
      "data-validate-ref": "/[.:\\/\\d]/g",
      id: "first-name-input_" + _vm._uid,
      "data-testing": "nl-first-name"
    },
    domProps: {
      value: _vm.firstName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.firstName = $event.target.value;
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _vm.showNameInputs ? _c("div", {
    staticClass: "col-6 pl-0"
  }, [_c("div", {
    staticClass: "input-unit",
    attrs: {
      "data-validate": "!regex"
    }
  }, [_c("label", {
    attrs: {
      for: "last-name-input_" + _vm._uid
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.newsletterLastName")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.lastName,
      expression: "lastName"
    }],
    attrs: {
      type: "text",
      "data-validate-ref": "/[.:\\/\\d]/g",
      id: "last-name-input_" + _vm._uid,
      "data-testing": "nl-last-name"
    },
    domProps: {
      value: _vm.lastName
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.lastName = $event.target.value;
      }
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "input-group"
  }, [_c("div", {
    staticClass: "input-unit",
    attrs: {
      "data-validate": "mail"
    }
  }, [_c("label", {
    attrs: {
      for: "email-input-id_" + _vm._uid
    }
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.newsletterEmail")) + " " + _vm._s(_vm.$translate("Ceres::Template.newsletterIsRequiredFootnote")))]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.email,
      expression: "email"
    }],
    attrs: {
      type: "email",
      autocomplete: "email",
      id: "email-input-id_" + _vm._uid,
      "data-testing": "nl-mail"
    },
    domProps: {
      value: _vm.email
    },
    on: {
      focus: function focus($event) {
        _vm.loadRecaptcha = true;
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.email = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.honeypot,
      expression: "honeypot"
    }],
    staticClass: "honey",
    attrs: {
      autocomplete: "none",
      type: "text",
      name: "username",
      tabindex: "-1"
    },
    domProps: {
      value: _vm.honeypot
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.honeypot = $event.target.value;
      }
    }
  })])]), _vm._v(" "), _vm.showPrivacyPolicyCheckbox ? _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "form-check small",
    attrs: {
      "data-validate": ""
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.privacyPolicyValue,
      expression: "privacyPolicyValue"
    }],
    staticClass: "form-check-input",
    attrs: {
      type: "checkbox",
      id: "privacy-policy-accept-id_" + _vm._uid,
      name: "privacy-policy-accept",
      "data-testing": "nl-policy"
    },
    domProps: {
      checked: Array.isArray(_vm.privacyPolicyValue) ? _vm._i(_vm.privacyPolicyValue, null) > -1 : _vm.privacyPolicyValue
    },
    on: {
      change: function change($event) {
        var $$a = _vm.privacyPolicyValue,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.privacyPolicyValue = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.privacyPolicyValue = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.privacyPolicyValue = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "form-check-label",
    attrs: {
      for: "privacy-policy-accept-id_" + _vm._uid
    },
    domProps: {
      innerHTML: _vm._s(_vm.privacyPolicyText)
    }
  })])]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "col-12 mt-3"
  }, [_c("div", {
    staticClass: "input-group-btn"
  }, [_c("button", {
    staticClass: "btn btn-block btn-primary btn-appearance",
    class: _vm.buttonSizeClass,
    attrs: {
      type: "button",
      disabled: _vm.isDisabled,
      "data-testing": "nl-send"
    },
    on: {
      click: _vm.validateData
    }
  }, [_c("icon", {
    attrs: {
      icon: "paper-plane-o",
      loading: _vm.isDisabled
    }
  }), _vm._v("\n                    " + _vm._s(_vm.$translate("Ceres::Template.newsletterSubscribeButtonLabel")) + "\n                ")], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "col-12 text-right small mt-2"
  }, [_vm._v(_vm._s(_vm.$translate("Ceres::Template.newsletterIsRequiredFootnote")) + " " + _vm._s(_vm.$translate("Ceres::Template.newsletterIsRequired")))])]), _vm._v(" "), !!_vm.$ceres.config.global.googleRecaptchaApiKey && _vm.loadRecaptcha ? _c("recaptcha") : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/app/components/newsletter/NewsletterInput.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/app/components/newsletter/NewsletterInput.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NewsletterInput_vue_vue_type_template_id_73e680cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewsletterInput.vue?vue&type=template&id=73e680cd */ "./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=73e680cd");
/* harmony import */ var _NewsletterInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsletterInput.vue?vue&type=script&lang=js */ "./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NewsletterInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewsletterInput_vue_vue_type_template_id_73e680cd__WEBPACK_IMPORTED_MODULE_0__["render"],
  _NewsletterInput_vue_vue_type_template_id_73e680cd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/app/components/newsletter/NewsletterInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsletterInput.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=73e680cd":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=73e680cd ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_template_id_73e680cd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NewsletterInput.vue?vue&type=template&id=73e680cd */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/app/components/newsletter/NewsletterInput.vue?vue&type=template&id=73e680cd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_template_id_73e680cd__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_NewsletterInput_vue_vue_type_template_id_73e680cd__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/app/mixins/buttonSizeProperty.mixin.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/app/mixins/buttonSizeProperty.mixin.js ***!
  \*****************************************************************/
/*! exports provided: ButtonSizePropertyMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonSizePropertyMixin", function() { return ButtonSizePropertyMixin; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);














function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var BUTTON_SIZES = ["btn-sm", "btn-lg"];
var LEGACY_CLASS_MAP = {
  "sm": "btn-sm",
  "md": "",
  "lg": "btn-lg"
};
var ButtonSizePropertyMixin = {
  props: {
    buttonSize: {
      type: [String, null],
      default: null,
      validator: function validator(value) {
        return [""].concat(BUTTON_SIZES, _toConsumableArray(Object.keys(LEGACY_CLASS_MAP))).indexOf(value) !== -1;
      }
    }
  },
  computed: {
    buttonSizeClass: function buttonSizeClass() {
      if (LEGACY_CLASS_MAP.hasOwnProperty(this.buttonSize)) {
        return LEGACY_CLASS_MAP[this.buttonSize];
      }
      return this.buttonSize;
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=ceres-client-17.js.map