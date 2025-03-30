"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expo_localization_1 = require("expo-localization");
var i18next_1 = require("i18next");
var react_i18next_1 = require("react-i18next");
var en_json_1 = require("./locales/en.json");
var fr_json_1 = require("./locales/fr.json");
var resources = {
    en: {
        translation: en_json_1.default,
    },
    fr: {
        translation: fr_json_1.default,
    },
};
var getLocale = function () {
    var _a;
    var local = (_a = (0, expo_localization_1.getLocales)()[0]) === null || _a === void 0 ? void 0 : _a.languageCode;
    return local !== null && local !== void 0 ? local : 'en';
};
i18next_1.default.use(react_i18next_1.initReactI18next).init({
    compatibilityJSON: 'v4',
    resources: resources,
    lng: getLocale(),
    fallbackLng: 'en',
    defaultNS: 'translation',
    interpolation: {
        escapeValue: false,
    },
});
exports.default = i18next_1.default;
