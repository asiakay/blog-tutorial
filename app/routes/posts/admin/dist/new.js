"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
};
exports.__esModule = true;
exports.action = void 0;
var node_1 = require("@remix-run/node");
var react_1 = require("@remix-run/react");
var React = require("react");
function action(_a) {
    var request = _a.request;
    return __awaiter(this, void 0, void 0, function () {
        var formData, slug, title, markdown, note;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, request.formData()];
                case 1:
                    formData = _b.sent();
                    slug = formData.get("slug");
                    title = formData.get("title");
                    markdown = formData.get("markdown");
                    /*   if (typeof title !== "string" || title.length === 0) {
                        return json(
                          { errors: { title: "Title is required", body: null } },
                          { status: 400 }
                        );
                      }
                     */
                    if (typeof title !== "string" || title.length === 0) {
                        return [2 /*return*/, node_1.json({ errors: { title: "Title is required", body: null } }, { status: 400 })];
                    }
                    /*   if (typeof body !== "string" || body.length === 0) {
                        return json(
                          { errors: { title: null, body: "Body is required" } },
                          { status: 400 }
                        );
                      }
                     */
                    if (typeof slug !== "string" || slug.length === 0) {
                        return [2 /*return*/, node_1.json({ errors: { title: null, body: "Body is required" } }, { status: 400 })];
                    }
                    return [4 /*yield*/, createNote({ title: title, body: body, userId: userId })];
                case 2:
                    note = _b.sent();
                    return [2 /*return*/, node_1.redirect("/notes/" + note.id)];
            }
        });
    });
}
exports.action = action;
function NewNotePage() {
    var _a, _b, _c, _d, _e, _f;
    var actionData = react_1.useActionData();
    var titleRef = React.useRef(null);
    var bodyRef = React.useRef(null);
    React.useEffect(function () {
        var _a, _b, _c, _d;
        if ((_a = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _a === void 0 ? void 0 : _a.title) {
            (_b = titleRef.current) === null || _b === void 0 ? void 0 : _b.focus();
        }
        else if ((_c = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _c === void 0 ? void 0 : _c.body) {
            (_d = bodyRef.current) === null || _d === void 0 ? void 0 : _d.focus();
        }
    }, [actionData]);
    return (React.createElement(react_1.Form, { method: "post", style: {
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%"
        } },
        React.createElement("div", null,
            React.createElement("label", { className: "flex w-full flex-col gap-1" },
                React.createElement("span", null, "Title: "),
                React.createElement("input", { ref: titleRef, name: "title", className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose", "aria-invalid": ((_a = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _a === void 0 ? void 0 : _a.title) ? true : undefined, "aria-errormessage": ((_b = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _b === void 0 ? void 0 : _b.title) ? "title-error" : undefined })),
            ((_c = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _c === void 0 ? void 0 : _c.title) && (React.createElement("div", { className: "pt-1 text-red-700", id: "title-error" }, actionData.errors.title))),
        React.createElement("div", null,
            React.createElement("label", { className: "flex w-full flex-col gap-1" },
                React.createElement("span", null, "Body: "),
                React.createElement("textarea", { ref: bodyRef, name: "body", rows: 8, className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6", "aria-invalid": ((_d = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _d === void 0 ? void 0 : _d.body) ? true : undefined, "aria-errormessage": ((_e = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _e === void 0 ? void 0 : _e.body) ? "body-error" : undefined })),
            ((_f = actionData === null || actionData === void 0 ? void 0 : actionData.errors) === null || _f === void 0 ? void 0 : _f.body) && (React.createElement("div", { className: "pt-1 text-red-700", id: "body-error" }, actionData.errors.body))),
        React.createElement("div", { className: "text-right" },
            React.createElement("button", { type: "submit", className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400" }, "Save"))));
}
exports["default"] = NewNotePage;
