"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CatchBoundary = exports.ErrorBoundary = exports.loader = exports.meta = exports.links = void 0;
var node_1 = require("@remix-run/node");
var react_1 = require("@remix-run/react");
var react_2 = require("@remix-run/react");
var app_css_1 = require("./styles/app.css");
var session_server_1 = require("./session.server");
exports.links = function () {
    return [
        {
            rel: "stylesheet",
            href: app_css_1["default"]
        }
    ];
};
/* export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    }
  ];
};
 */
exports.meta = function () { return ({
    charset: "utf-8",
    title: "Remix Notes",
    viewport: "width=device-width,initial-scale=1"
}); };
function loader(_a) {
    var request = _a.request;
    return __awaiter(this, void 0, void 0, function () {
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = node_1.json;
                    _c = {};
                    return [4 /*yield*/, session_server_1.getUser(request)];
                case 1: return [2 /*return*/, _b.apply(void 0, [(_c.user = _d.sent(),
                            _c)])];
            }
        });
    });
}
exports.loader = loader;
// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
function App() {
    return (React.createElement(Document, { title: undefined },
        React.createElement(Layout, null,
            React.createElement(react_1.Outlet, null))));
}
exports["default"] = App;
function ErrorBoundary(_a) {
    var error = _a.error;
    console.error(error);
    return (React.createElement(Document, { title: "Error!" },
        React.createElement(Layout, null,
            React.createElement("div", null,
                React.createElement("h1", null, "There was an error"),
                React.createElement("p", null, error.message),
                React.createElement("hr", null),
                React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see.")))));
}
exports.ErrorBoundary = ErrorBoundary;
function CatchBoundary() {
    var caught = react_2.useCatch();
    var message;
    switch (caught.status) {
        case 401:
            message = (React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to."));
            break;
        case 404:
            message = (React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist."));
            break;
        default:
            throw new Error(caught.data || caught.statusText);
    }
    return (React.createElement(Document, { title: caught.status + " " + caught.statusText },
        React.createElement(Layout, null,
            React.createElement("h1", null,
                caught.status,
                ": ",
                caught.statusText),
            message)));
}
exports.CatchBoundary = CatchBoundary;
function Document(_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
            title ? React.createElement("title", null, title) : null,
            React.createElement(react_1.Meta, null),
            React.createElement(react_1.Links, null)),
        React.createElement("body", null,
            children,
            React.createElement(react_1.ScrollRestoration, null),
            React.createElement(react_1.Scripts, null),
            process.env.NODE_ENV === "development" && React.createElement(react_1.LiveReload, null))));
}
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("div", null,
        React.createElement("header", null,
            React.createElement("div", { className: "flex items-center justify-between flex-wrap bg-teal-500 p-6" },
                React.createElement(react_1.Link, { to: "/", title: "Remix" },
                    React.createElement(RemixLogo, null)),
                React.createElement("nav", { "aria-label": "Main navigation" },
                    React.createElement("div", { className: "w-full block flex-grow lg:flex lg:items-center lg:w-auto" },
                        React.createElement("div", { className: "text-sm lg:flex-grow" },
                            React.createElement(react_1.Link, { className: "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4", to: "/" }, "Home"),
                            React.createElement(react_1.Link, { className: "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4", to: "/posts" }, "Blogs"),
                            React.createElement(react_1.Link, { className: "block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4", to: "/posts/admin" }, "Admin")))))),
        React.createElement("div", null,
            React.createElement("div", null, children)),
        React.createElement("footer", null,
            React.createElement("div", null,
                React.createElement("p", null, "\u00A9")))));
}
function RemixLogo(props) {
    return (React.createElement("svg", __assign({ viewBox: "0 0 659 165", version: "1.1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": "remix-run-logo-title", role: "img", width: "106", height: "30", fill: "currentColor" }, props),
        React.createElement("title", { id: "remix-run-logo-title" }, "Remix Logo"),
        React.createElement("path", { d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z" }),
        React.createElement("path", { d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z" }),
        React.createElement("path", { d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z" }),
        React.createElement("path", { d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z" }),
        React.createElement("path", { d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z" })));
}
