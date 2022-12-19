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
exports.loader = void 0;
var node_1 = require("@remix-run/node");
var react_1 = require("@remix-run/react");
var marked_1 = require("marked");
var tiny_invariant_1 = require("tiny-invariant");
var post_server_1 = require("~/models/post.server");
exports.loader = function (_a) {
    var params = _a.params;
    return __awaiter(void 0, void 0, void 0, function () {
        var post, html, posts;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    tiny_invariant_1["default"](params.slug, "params.slug is required");
                    return [4 /*yield*/, post_server_1.getPost(params.slug)];
                case 1:
                    post = _b.sent();
                    tiny_invariant_1["default"](post, "Post not found: " + params.slug);
                    html = marked_1.marked(post.markdown);
                    return [4 /*yield*/, post_server_1.getPosts()];
                case 2:
                    posts = _b.sent();
                    return [2 /*return*/, node_1.json({ post: post, html: html, posts: posts })];
            }
        });
    });
};
function PostSlug() {
    var _a = react_1.useLoaderData(), post = _a.post, html = _a.html, posts = _a.posts;
    return (React.createElement("div", { className: "mx-auto max-w-4xl" },
        React.createElement("h1", { className: "my-6 border-b-2 text-center text-3xl" }, post.title),
        React.createElement("div", { className: "grid grid-cols-4 gap-6 m-5" },
            React.createElement("nav", { className: "col-span-4 md:col-span-1" },
                "Recent Posts",
                React.createElement("ul", null, posts.map(function (post) { return (React.createElement("li", { key: post.slug },
                    React.createElement(react_1.Link, { to: post.slug, className: "text-blue-600 underline" }, post.title))); }))),
            React.createElement("main", { className: "col-span-4 md:col-span-3" },
                React.createElement(react_1.Outlet, null),
                React.createElement("div", { dangerouslySetInnerHTML: { __html: html } })))));
}
exports["default"] = PostSlug;
