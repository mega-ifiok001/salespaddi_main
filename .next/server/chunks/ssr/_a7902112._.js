module.exports = {

"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7ff7d760957fab854dcb97e20b03fcbd472aa5ac05":"invalidateCacheAction"} */ __turbopack_context__.s({
    "invalidateCacheAction": (()=>invalidateCacheAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function invalidateCacheAction() {
    void (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).delete(`__clerk_invalidate_cache_cookie_${Date.now()}`);
}
;
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ invalidateCacheAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(invalidateCacheAction, "7ff7d760957fab854dcb97e20b03fcbd472aa5ac05", null);
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clerkMiddlewareRequestDataStorage": (()=>clerkMiddlewareRequestDataStorage),
    "clerkMiddlewareRequestDataStore": (()=>clerkMiddlewareRequestDataStore)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:async_hooks [external] (node:async_hooks, cjs)");
;
;
const clerkMiddlewareRequestDataStore = /* @__PURE__ */ new Map();
const clerkMiddlewareRequestDataStorage = new __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$async_hooks__$5b$external$5d$__$28$node$3a$async_hooks$2c$__cjs$29$__["AsyncLocalStorage"]();
;
 //# sourceMappingURL=middleware-storage.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "clerkClient": (()=>clerkClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$internal$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/backend/dist/internal.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HY4U44KT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/backend/dist/chunk-HY4U44KT.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/createClerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/headers-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/middleware-storage.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const clerkClient = async ()=>{
    var _a, _b;
    let requestData;
    try {
        const request = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRequestLike"])();
        const encryptedRequestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$headers$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getHeader"])(request, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$backend$2f$dist$2f$chunk$2d$HY4U44KT$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["constants"].Headers.ClerkRequestData);
        requestData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["decryptClerkRequestData"])(encryptedRequestData);
    } catch (err) {
        if (err && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrerenderingBailout"])(err)) {
            throw err;
        }
    }
    const options = (_b = (_a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$middleware$2d$storage$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkMiddlewareRequestDataStorage"].getStore()) == null ? void 0 : _a.get("requestData")) != null ? _b : requestData;
    if ((options == null ? void 0 : options.secretKey) || (options == null ? void 0 : options.publishableKey)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])(options);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$createClerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createClerkClientWithOptions"])({});
};
;
 //# sourceMappingURL=clerkClient.js.map
}}),
"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "currentUser": (()=>currentUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/auth.js [app-rsc] (ecmascript)");
;
;
;
async function currentUser() {
    __turbopack_context__.r("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)");
    const { userId } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$auth$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!userId) {
        return null;
    }
    return (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkClient"])()).users.getUser(userId);
}
;
 //# sourceMappingURL=currentUser.js.map
}}),
"[project]/node_modules/next/dist/server/lib/clone-response.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Clones a response by teeing the body so we can return two independent
 * ReadableStreams from it. This avoids the bug in the undici library around
 * response cloning.
 *
 * After cloning, the original response's body will be consumed and closed.
 *
 * @see https://github.com/vercel/next.js/pull/73274
 *
 * @param original - The original response to clone.
 * @returns A tuple containing two independent clones of the original response.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cloneResponse", {
    enumerable: true,
    get: function() {
        return cloneResponse;
    }
});
function cloneResponse(original) {
    // If the response has no body, then we can just return the original response
    // twice because it's immutable.
    if (!original.body) {
        return [
            original,
            original
        ];
    }
    const [body1, body2] = original.body.tee();
    const cloned1 = new Response(body1, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned1, 'url', {
        value: original.url
    });
    const cloned2 = new Response(body2, {
        status: original.status,
        statusText: original.statusText,
        headers: original.headers
    });
    Object.defineProperty(cloned2, 'url', {
        value: original.url
    });
    return [
        cloned1,
        cloned2
    ];
} //# sourceMappingURL=clone-response.js.map
}}),
"[project]/node_modules/next/dist/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Based on https://github.com/facebook/react/blob/d4e78c42a94be027b4dc7ed2659a5fddfbf9bd4e/packages/react/src/ReactFetch.js
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createDedupeFetch", {
    enumerable: true,
    get: function() {
        return createDedupeFetch;
    }
});
const _react = /*#__PURE__*/ _interop_require_wildcard(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _cloneresponse = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/clone-response.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]' // generateCacheKey(new Request('https://blank'));
;
function generateCacheKey(request) {
    // We pick the fields that goes into the key used to dedupe requests.
    // We don't include the `cache` field, because we end up using whatever
    // caching resulted from the first request.
    // Notably we currently don't consider non-standard (or future) options.
    // This might not be safe. TODO: warn for non-standard extensions differing.
    // IF YOU CHANGE THIS UPDATE THE simpleCacheKey ABOVE.
    return JSON.stringify([
        request.method,
        Array.from(request.headers.entries()),
        request.mode,
        request.redirect,
        request.credentials,
        request.referrer,
        request.referrerPolicy,
        request.integrity
    ]);
}
function createDedupeFetch(originalFetch) {
    const getCacheEntries = _react.cache((url)=>[]);
    return function dedupeFetch(resource, options) {
        if (options && options.signal) {
            // If we're passed a signal, then we assume that
            // someone else controls the lifetime of this object and opts out of
            // caching. It's effectively the opt-out mechanism.
            // Ideally we should be able to check this on the Request but
            // it always gets initialized with its own signal so we don't
            // know if it's supposed to override - unless we also override the
            // Request constructor.
            return originalFetch(resource, options);
        }
        // Normalize the Request
        let url;
        let cacheKey;
        if (typeof resource === 'string' && !options) {
            // Fast path.
            cacheKey = simpleCacheKey;
            url = resource;
        } else {
            // Normalize the request.
            // if resource is not a string or a URL (its an instance of Request)
            // then do not instantiate a new Request but instead
            // reuse the request as to not disturb the body in the event it's a ReadableStream.
            const request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
            if (request.method !== 'GET' && request.method !== 'HEAD' || request.keepalive) {
                // We currently don't dedupe requests that might have side-effects. Those
                // have to be explicitly cached. We assume that the request doesn't have a
                // body if it's GET or HEAD.
                // keepalive gets treated the same as if you passed a custom cache signal.
                return originalFetch(resource, options);
            }
            cacheKey = generateCacheKey(request);
            url = request.url;
        }
        const cacheEntries = getCacheEntries(url);
        for(let i = 0, j = cacheEntries.length; i < j; i += 1){
            const [key, promise] = cacheEntries[i];
            if (key === cacheKey) {
                return promise.then(()=>{
                    const response = cacheEntries[i][2];
                    if (!response) throw Object.defineProperty(new _invarianterror.InvariantError('No cached response'), "__NEXT_ERROR_CODE", {
                        value: "E579",
                        enumerable: false,
                        configurable: true
                    });
                    // We're cloning the response using this utility because there exists
                    // a bug in the undici library around response cloning. See the
                    // following pull request for more details:
                    // https://github.com/vercel/next.js/pull/73274
                    const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(response);
                    cacheEntries[i][2] = cloned2;
                    return cloned1;
                });
            }
        }
        // We pass the original arguments here in case normalizing the Request
        // doesn't include all the options in this environment.
        const promise = originalFetch(resource, options);
        const entry = [
            cacheKey,
            promise,
            null
        ];
        cacheEntries.push(entry);
        return promise.then((response)=>{
            // We're cloning the response using this utility because there exists
            // a bug in the undici library around response cloning. See the
            // following pull request for more details:
            // https://github.com/vercel/next.js/pull/73274
            const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(response);
            entry[2] = cloned2;
            return cloned1;
        });
    };
} //# sourceMappingURL=dedupe-fetch.js.map
}}),
"[project]/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    CachedRouteKind: null,
    IncrementalCacheKind: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    CachedRouteKind: function() {
        return CachedRouteKind;
    },
    IncrementalCacheKind: function() {
        return IncrementalCacheKind;
    }
});
var CachedRouteKind = /*#__PURE__*/ function(CachedRouteKind) {
    CachedRouteKind["APP_PAGE"] = "APP_PAGE";
    CachedRouteKind["APP_ROUTE"] = "APP_ROUTE";
    CachedRouteKind["PAGES"] = "PAGES";
    CachedRouteKind["FETCH"] = "FETCH";
    CachedRouteKind["REDIRECT"] = "REDIRECT";
    CachedRouteKind["IMAGE"] = "IMAGE";
    return CachedRouteKind;
}({});
var IncrementalCacheKind = /*#__PURE__*/ function(IncrementalCacheKind) {
    IncrementalCacheKind["APP_PAGE"] = "APP_PAGE";
    IncrementalCacheKind["APP_ROUTE"] = "APP_ROUTE";
    IncrementalCacheKind["PAGES"] = "PAGES";
    IncrementalCacheKind["FETCH"] = "FETCH";
    IncrementalCacheKind["IMAGE"] = "IMAGE";
    return IncrementalCacheKind;
}({}); //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/next/dist/lib/batcher.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Batcher", {
    enumerable: true,
    get: function() {
        return Batcher;
    }
});
const _detachedpromise = __turbopack_context__.r("[project]/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)");
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn(cacheKey, Promise.resolve);
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new _detachedpromise.DetachedPromise();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn(cacheKey, resolve);
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
} //# sourceMappingURL=batcher.js.map
}}),
"[project]/node_modules/next/dist/server/request-meta.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/* eslint-disable no-redeclare */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXT_REQUEST_META: null,
    addRequestMeta: null,
    getRequestMeta: null,
    removeRequestMeta: null,
    setRequestMeta: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_REQUEST_META: function() {
        return NEXT_REQUEST_META;
    },
    addRequestMeta: function() {
        return addRequestMeta;
    },
    getRequestMeta: function() {
        return getRequestMeta;
    },
    removeRequestMeta: function() {
        return removeRequestMeta;
    },
    setRequestMeta: function() {
        return setRequestMeta;
    }
});
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
} //# sourceMappingURL=request-meta.js.map
}}),
"[project]/node_modules/next/dist/server/base-http/helpers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isNodeNextRequest: null,
    isNodeNextResponse: null,
    isWebNextRequest: null,
    isWebNextResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isNodeNextRequest: function() {
        return isNodeNextRequest;
    },
    isNodeNextResponse: function() {
        return isNodeNextResponse;
    },
    isWebNextRequest: function() {
        return isWebNextRequest;
    },
    isWebNextResponse: function() {
        return isWebNextResponse;
    }
});
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge'; //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NextRequestAdapter: null,
    ResponseAborted: null,
    ResponseAbortedName: null,
    createAbortController: null,
    signalFromNodeResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NextRequestAdapter: function() {
        return NextRequestAdapter;
    },
    ResponseAborted: function() {
        return ResponseAborted;
    },
    ResponseAbortedName: function() {
        return ResponseAbortedName;
    },
    createAbortController: function() {
        return createAbortController;
    },
    signalFromNodeResponse: function() {
        return signalFromNodeResponse;
    }
});
const _requestmeta = __turbopack_context__.r("[project]/node_modules/next/dist/server/request-meta.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/utils.js [app-rsc] (ecmascript)");
const _request = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/request.js [app-rsc] (ecmascript)");
const _helpers = __turbopack_context__.r("[project]/node_modules/next/dist/server/base-http/helpers.js [app-rsc] (ecmascript)");
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args), this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") === 'edge' && (0, _helpers.isWebNextRequest)(request)) {
            "TURBOPACK unreachable";
        } else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, _helpers.isNodeNextRequest)(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw Object.defineProperty(new Error('Invariant: Unsupported NextRequest type'), "__NEXT_ERROR_CODE", {
                value: "E345",
                enumerable: false,
                configurable: true
            });
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = (0, _requestmeta.getRequestMeta)(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new _request.NextRequest(url, {
            method: request.method,
            headers: (0, _utils.fromNodeOutgoingHttpHeaders)(request.headers),
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new _request.NextRequest(request.url, {
            method: request.method,
            headers: (0, _utils.fromNodeOutgoingHttpHeaders)(request.headers),
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
} //# sourceMappingURL=next-request.js.map
}}),
"[project]/node_modules/next/dist/server/client-component-renderer-logger.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getClientComponentLoaderMetrics: null,
    wrapClientComponentLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getClientComponentLoaderMetrics: function() {
        return getClientComponentLoaderMetrics;
    },
    wrapClientComponentLoader: function() {
        return wrapClientComponentLoader;
    }
});
// Combined load times for loading client components
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod) {
    if (!('performance' in globalThis)) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            const result = ComponentMod.__next_app__.loadChunk(...args);
            // Avoid wrapping `loadChunk`'s result in an extra promise in case something like React depends on its identity.
            // We only need to know when it's settled.
            result.finally(()=>{
                clientComponentLoadTimes += performance.now() - startTime;
            });
            return result;
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
} //# sourceMappingURL=client-component-renderer-logger.js.map
}}),
"[project]/node_modules/next/dist/server/pipe-readable.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isAbortError: null,
    pipeToNodeResponse: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isAbortError: function() {
        return isAbortError;
    },
    pipeToNodeResponse: function() {
        return pipeToNodeResponse;
    }
});
const _nextrequest = __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/adapters/next-request.js [app-rsc] (ecmascript)");
const _detachedpromise = __turbopack_context__.r("[project]/node_modules/next/dist/lib/detached-promise.js [app-rsc] (ecmascript)");
const _tracer = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _clientcomponentrendererlogger = __turbopack_context__.r("[project]/node_modules/next/dist/server/client-component-renderer-logger.js [app-rsc] (ecmascript)");
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === _nextrequest.ResponseAbortedName;
}
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new _detachedpromise.DetachedPromise();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new _detachedpromise.DetachedPromise();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, _clientcomponentrendererlogger.getClientComponentLoaderMetrics)();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, _tracer.getTracer)().trace(_constants.NextNodeServerSpan.startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new _detachedpromise.DetachedPromise();
                }
            } catch (err) {
                res.end();
                throw Object.defineProperty(new Error('failed to write chunk to response', {
                    cause: err
                }), "__NEXT_ERROR_CODE", {
                    value: "E321",
                    enumerable: false,
                    configurable: true
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, _nextrequest.createAbortController)(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw Object.defineProperty(new Error('failed to pipe response', {
            cause: err
        }), "__NEXT_ERROR_CODE", {
            value: "E180",
            enumerable: false,
            configurable: true
        });
    }
} //# sourceMappingURL=pipe-readable.js.map
}}),
"[project]/node_modules/next/dist/server/render-result.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RenderResult;
    }
});
const _nodewebstreamshelper = __turbopack_context__.r("[project]/node_modules/next/dist/server/stream-utils/node-web-streams-helper.js [app-rsc] (ecmascript)");
const _pipereadable = __turbopack_context__.r("[project]/node_modules/next/dist/server/pipe-readable.js [app-rsc] (ecmascript)");
class RenderResult {
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @returns a new RenderResult instance
   */ static fromStatic(value) {
        return new RenderResult(value, {
            metadata: {}
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedBuffer(stream = false) {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: null responses cannot be unchunked'), "__NEXT_ERROR_CODE", {
                value: "E274",
                enumerable: false,
                configurable: true
            });
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new Error('Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E81",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, _nodewebstreamshelper.streamToBuffer)(this.readable);
        }
        return Buffer.from(this.response);
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: null responses cannot be unchunked'), "__NEXT_ERROR_CODE", {
                value: "E274",
                enumerable: false,
                configurable: true
            });
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw Object.defineProperty(new Error('Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                    value: "E81",
                    enumerable: false,
                    configurable: true
                });
            }
            return (0, _nodewebstreamshelper.streamToString)(this.readable);
        }
        return this.response;
    }
    /**
   * Returns the response if it is a stream, or throws an error if it is a
   * string.
   */ get readable() {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: null responses cannot be streamed'), "__NEXT_ERROR_CODE", {
                value: "E14",
                enumerable: false,
                configurable: true
            });
        }
        if (typeof this.response === 'string') {
            throw Object.defineProperty(new Error('Invariant: static responses cannot be streamed'), "__NEXT_ERROR_CODE", {
                value: "E151",
                enumerable: false,
                configurable: true
            });
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, _nodewebstreamshelper.streamFromBuffer)(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, _nodewebstreamshelper.chainStreams)(...this.response);
        }
        return this.response;
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ chain(readable) {
        if (this.response === null) {
            throw Object.defineProperty(new Error('Invariant: response is null. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
                value: "E258",
                enumerable: false,
                configurable: true
            });
        }
        // If the response is not an array of streams already, make it one.
        let responses;
        if (typeof this.response === 'string') {
            responses = [
                (0, _nodewebstreamshelper.streamFromString)(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            responses = this.response;
        } else if (Buffer.isBuffer(this.response)) {
            responses = [
                (0, _nodewebstreamshelper.streamFromBuffer)(this.response)
            ];
        } else {
            responses = [
                this.response
            ];
        }
        // Add the new stream to the array.
        responses.push(readable);
        // Update the response.
        this.response = responses;
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, _pipereadable.isAbortError)(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        await (0, _pipereadable.pipeToNodeResponse)(this.readable, res, this.waitUntil);
    }
} //# sourceMappingURL=render-result.js.map
}}),
"[project]/node_modules/next/dist/server/route-kind.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouteKind", {
    enumerable: true,
    get: function() {
        return RouteKind;
    }
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/server/response-cache/utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fromResponseCacheEntry: null,
    routeKindToIncrementalCacheKind: null,
    toResponseCacheEntry: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromResponseCacheEntry: function() {
        return fromResponseCacheEntry;
    },
    routeKindToIncrementalCacheKind: function() {
        return routeKindToIncrementalCacheKind;
    },
    toResponseCacheEntry: function() {
        return toResponseCacheEntry;
    }
});
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)");
const _renderresult = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/next/dist/server/render-result.js [app-rsc] (ecmascript)"));
const _routekind = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-kind.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
async function fromResponseCacheEntry(cacheEntry) {
    var _cacheEntry_value, _cacheEntry_value1;
    return {
        ...cacheEntry,
        value: ((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) === _types.CachedRouteKind.PAGES ? {
            kind: _types.CachedRouteKind.PAGES,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            pageData: cacheEntry.value.pageData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status
        } : ((_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind) === _types.CachedRouteKind.APP_PAGE ? {
            kind: _types.CachedRouteKind.APP_PAGE,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            postponed: cacheEntry.value.postponed,
            rscData: cacheEntry.value.rscData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status,
            segmentData: cacheEntry.value.segmentData
        } : cacheEntry.value
    };
}
async function toResponseCacheEntry(response) {
    var _response_value, _response_value1;
    if (!response) return null;
    return {
        isMiss: response.isMiss,
        isStale: response.isStale,
        cacheControl: response.cacheControl,
        isFallback: response.isFallback,
        value: ((_response_value = response.value) == null ? void 0 : _response_value.kind) === _types.CachedRouteKind.PAGES ? {
            kind: _types.CachedRouteKind.PAGES,
            html: _renderresult.default.fromStatic(response.value.html),
            pageData: response.value.pageData,
            headers: response.value.headers,
            status: response.value.status
        } : ((_response_value1 = response.value) == null ? void 0 : _response_value1.kind) === _types.CachedRouteKind.APP_PAGE ? {
            kind: _types.CachedRouteKind.APP_PAGE,
            html: _renderresult.default.fromStatic(response.value.html),
            rscData: response.value.rscData,
            headers: response.value.headers,
            status: response.value.status,
            postponed: response.value.postponed,
            segmentData: response.value.segmentData
        } : response.value
    };
}
function routeKindToIncrementalCacheKind(routeKind) {
    switch(routeKind){
        case _routekind.RouteKind.PAGES:
            return _types.IncrementalCacheKind.PAGES;
        case _routekind.RouteKind.APP_PAGE:
            return _types.IncrementalCacheKind.APP_PAGE;
        case _routekind.RouteKind.IMAGE:
            return _types.IncrementalCacheKind.IMAGE;
        case _routekind.RouteKind.APP_ROUTE:
            return _types.IncrementalCacheKind.APP_ROUTE;
        default:
            throw Object.defineProperty(new Error(`Unexpected route kind ${routeKind}`), "__NEXT_ERROR_CODE", {
                value: "E64",
                enumerable: false,
                configurable: true
            });
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/next/dist/server/response-cache/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ResponseCache;
    }
});
0 && __export(__turbopack_context__.r("[project]/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)"));
const _batcher = __turbopack_context__.r("[project]/node_modules/next/dist/lib/batcher.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/server/response-cache/utils.js [app-rsc] (ecmascript)");
_export_star(__turbopack_context__.r("[project]/node_modules/next/dist/server/response-cache/types.js [app-rsc] (ecmascript)"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
class ResponseCache {
    constructor(minimalMode){
        this.batcher = _batcher.Batcher.create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? '1' : '0'}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: _scheduler.scheduleOnNextTick
        });
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = 'minimalMode';
        this[minimalModeKey] = minimalMode;
    }
    async get(key, responseGenerator, context) {
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) {
            return responseGenerator({
                hasResolved: false,
                previousCacheEntry: null
            });
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false } = context;
        const response = await this.batcher.batch({
            key,
            isOnDemandRevalidate
        }, async (cacheKey, resolve)=>{
            var _this_previousCacheItem;
            // We keep the previous cache entry around to leverage when the
            // incremental cache is disabled in minimal mode.
            if (this.minimalMode && ((_this_previousCacheItem = this.previousCacheItem) == null ? void 0 : _this_previousCacheItem.key) === cacheKey && this.previousCacheItem.expiresAt > Date.now()) {
                return this.previousCacheItem.entry;
            }
            // Coerce the kindHint into a given kind for the incremental cache.
            const kind = (0, _utils.routeKindToIncrementalCacheKind)(context.routeKind);
            let resolved = false;
            let cachedResponse = null;
            try {
                cachedResponse = !this.minimalMode ? await incrementalCache.get(key, {
                    kind,
                    isRoutePPREnabled: context.isRoutePPREnabled,
                    isFallback
                }) : null;
                if (cachedResponse && !isOnDemandRevalidate) {
                    resolve(cachedResponse);
                    resolved = true;
                    if (!cachedResponse.isStale || context.isPrefetch) {
                        // The cached value is still valid, so we don't need
                        // to update it yet.
                        return null;
                    }
                }
                const cacheEntry = await responseGenerator({
                    hasResolved: resolved,
                    previousCacheEntry: cachedResponse,
                    isRevalidating: true
                });
                // If the cache entry couldn't be generated, we don't want to cache
                // the result.
                if (!cacheEntry) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                const resolveValue = await (0, _utils.fromResponseCacheEntry)({
                    ...cacheEntry,
                    isMiss: !cachedResponse
                });
                if (!resolveValue) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                // For on-demand revalidate wait to resolve until cache is set.
                // Otherwise resolve now.
                if (!isOnDemandRevalidate && !resolved) {
                    resolve(resolveValue);
                    resolved = true;
                }
                // We want to persist the result only if it has a cache control value
                // defined.
                if (resolveValue.cacheControl) {
                    if (this.minimalMode) {
                        this.previousCacheItem = {
                            key: cacheKey,
                            entry: resolveValue,
                            expiresAt: Date.now() + 1000
                        };
                    } else {
                        await incrementalCache.set(key, resolveValue.value, {
                            cacheControl: resolveValue.cacheControl,
                            isRoutePPREnabled,
                            isFallback
                        });
                    }
                }
                return resolveValue;
            } catch (err) {
                // When a path is erroring we automatically re-set the existing cache
                // with new revalidate and expire times to prevent non-stop retrying.
                if (cachedResponse == null ? void 0 : cachedResponse.cacheControl) {
                    const newRevalidate = Math.min(Math.max(cachedResponse.cacheControl.revalidate || 3, 3), 30);
                    const newExpire = cachedResponse.cacheControl.expire === undefined ? undefined : Math.max(newRevalidate + 3, cachedResponse.cacheControl.expire);
                    await incrementalCache.set(key, cachedResponse.value, {
                        cacheControl: {
                            revalidate: newRevalidate,
                            expire: newExpire
                        },
                        isRoutePPREnabled,
                        isFallback
                    });
                }
                // While revalidating in the background we can't reject as we already
                // resolved the cache entry so log the error here.
                if (resolved) {
                    console.error(err);
                    return null;
                }
                // We haven't resolved yet, so let's throw to indicate an error.
                throw err;
            }
        });
        return (0, _utils.toResponseCacheEntry)(response);
    }
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/dist/server/lib/patch-fetch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NEXT_PATCH_SYMBOL: null,
    createPatchedFetcher: null,
    patchFetch: null,
    validateRevalidate: null,
    validateTags: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NEXT_PATCH_SYMBOL: function() {
        return NEXT_PATCH_SYMBOL;
    },
    createPatchedFetcher: function() {
        return createPatchedFetcher;
    },
    patchFetch: function() {
        return patchFetch;
    },
    validateRevalidate: function() {
        return validateRevalidate;
    },
    validateTags: function() {
        return validateTags;
    }
});
const _constants = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/trace/constants.js [app-rsc] (ecmascript)");
const _tracer = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
const _constants1 = __turbopack_context__.r("[project]/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _dedupefetch = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/dedupe-fetch.js [app-rsc] (ecmascript)");
const _responsecache = __turbopack_context__.r("[project]/node_modules/next/dist/server/response-cache/index.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _cloneresponse = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/clone-response.js [app-rsc] (ecmascript)");
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const NEXT_PATCH_SYMBOL = Symbol.for('next-patch');
function isFetchPatched() {
    return globalThis[NEXT_PATCH_SYMBOL] === true;
}
function validateRevalidate(revalidateVal, route) {
    try {
        let normalizedRevalidate = undefined;
        if (revalidateVal === false) {
            normalizedRevalidate = _constants1.INFINITE_CACHE;
        } else if (typeof revalidateVal === 'number' && !isNaN(revalidateVal) && revalidateVal > -1) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== 'undefined') {
            throw Object.defineProperty(new Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`), "__NEXT_ERROR_CODE", {
                value: "E179",
                enumerable: false,
                configurable: true
            });
        }
        return normalizedRevalidate;
    } catch (err) {
        // handle client component error from attempting to check revalidate value
        if (err instanceof Error && err.message.includes('Invalid revalidate')) {
            throw err;
        }
        return undefined;
    }
}
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (typeof tag !== 'string') {
            invalidTags.push({
                tag,
                reason: 'invalid type, must be a string'
            });
        } else if (tag.length > _constants1.NEXT_CACHE_TAG_MAX_LENGTH) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${_constants1.NEXT_CACHE_TAG_MAX_LENGTH}`
            });
        } else {
            validTags.push(tag);
        }
        if (validTags.length > _constants1.NEXT_CACHE_TAG_MAX_ITEMS) {
            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(', '));
            break;
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
function trackFetchMetric(workStore, ctx) {
    var _workStore_requestEndedState;
    // If the static generation store is not available, we can't track the fetch
    if (!workStore) return;
    if ((_workStore_requestEndedState = workStore.requestEndedState) == null ? void 0 : _workStore_requestEndedState.ended) return;
    const isDebugBuild = (!!process.env.NEXT_DEBUG_BUILD || process.env.NEXT_SSG_FETCH_METRICS === '1') && workStore.isStaticGeneration;
    const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    workStore.fetchMetrics ??= [];
    workStore.fetchMetrics.push({
        ...ctx,
        end: performance.timeOrigin + performance.now(),
        idx: workStore.nextFetchId || 0
    });
}
function createPatchedFetcher(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
    // Create the patched fetch function. We don't set the type here, as it's
    // verified as the return value of this function.
    const patched = async (input, init)=>{
        var _init_method, _init_next;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = '';
            url.password = '';
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? '';
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || 'GET';
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === '1';
        // We don't track fetch metrics for internal fetches
        // so it's not critical that we have a start time, as it won't be recorded.
        // This is to workaround a flaky issue where performance APIs might
        // not be available and will require follow-up investigation.
        const fetchStart = isInternal ? undefined : performance.timeOrigin + performance.now();
        const workStore = workAsyncStorage.getStore();
        const workUnitStore = workUnitAsyncStorage.getStore();
        // During static generation we track cache reads so we can reason about when they fill
        let cacheSignal = workUnitStore && workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        const result = (0, _tracer.getTracer)().trace(isInternal ? _constants.NextNodeServerSpan.internalFetch : _constants.AppRenderSpan.fetch, {
            hideSpan,
            kind: _tracer.SpanKind.CLIENT,
            spanName: [
                'fetch',
                method,
                fetchUrl
            ].filter(Boolean).join(' '),
            attributes: {
                'http.url': fetchUrl,
                'http.method': method,
                'net.peer.name': url == null ? void 0 : url.hostname,
                'net.peer.port': (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            // If this is an internal fetch, we should not do any special treatment.
            if (isInternal) {
                return originFetch(input, init);
            }
            // If the workStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!workStore) {
                return originFetch(input, init);
            }
            // We should also fallback to the original fetch implementation if we
            // are in draft mode, it does not constitute a static generation.
            if (workStore.isDraftMode) {
                return originFetch(input, init);
            }
            const isRequestInput = input && typeof input === 'object' && typeof input.method === 'string';
            const getRequestMeta = (field)=>{
                // If request input is present but init is not, retrieve from input first.
                const value = init == null ? void 0 : init[field];
                return value || (isRequestInput ? input[field] : null);
            };
            let finalRevalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== 'undefined' ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            let currentFetchRevalidate = getNextField('revalidate');
            const tags = validateTags(getNextField('tags') || [], `fetch ${input.toString()}`);
            const revalidateStore = workUnitStore && (workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') ? workUnitStore : undefined;
            if (revalidateStore) {
                if (Array.isArray(tags)) {
                    // Collect tags onto parent caches or parent prerenders.
                    const collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
                    for (const tag of tags){
                        if (!collectedTags.includes(tag)) {
                            collectedTags.push(tag);
                        }
                    }
                }
            }
            const implicitTags = !workUnitStore || workUnitStore.type === 'unstable-cache' ? [] : workUnitStore.implicitTags;
            // Inside unstable-cache we treat it the same as force-no-store on the
            // page.
            const pageFetchCacheMode = workUnitStore && workUnitStore.type === 'unstable-cache' ? 'force-no-store' : workStore.fetchCache;
            const isUsingNoStore = !!workStore.isUnstableNoStore;
            let currentFetchCacheConfig = getRequestMeta('cache');
            let cacheReason = '';
            let cacheWarning;
            if (typeof currentFetchCacheConfig === 'string' && typeof currentFetchRevalidate !== 'undefined') {
                // If the revalidate value conflicts with the cache value, we should warn the user and unset the conflicting values.
                const isConflictingRevalidate = currentFetchCacheConfig === 'force-cache' && currentFetchRevalidate === 0 || // revalidate: >0 or revalidate: false and cache: no-store
                currentFetchCacheConfig === 'no-store' && (currentFetchRevalidate > 0 || currentFetchRevalidate === false);
                if (isConflictingRevalidate) {
                    cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`;
                    currentFetchCacheConfig = undefined;
                    currentFetchRevalidate = undefined;
                }
            }
            const hasExplicitFetchCacheOptOut = currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store' || // the fetch isn't explicitly caching and the segment level cache config signals not to cache
            // note: `pageFetchCacheMode` is also set by being in an unstable_cache context.
            pageFetchCacheMode === 'force-no-store' || pageFetchCacheMode === 'only-no-store';
            // If no explicit fetch cache mode is set, but dynamic = `force-dynamic` is set,
            // we shouldn't consider caching the fetch. This is because the `dynamic` cache
            // is considered a "top-level" cache mode, whereas something like `fetchCache` is more
            // fine-grained. Top-level modes are responsible for setting reasonable defaults for the
            // other configurations.
            const noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
            if (// which will signal the cache to not revalidate
            currentFetchCacheConfig === 'force-cache' && typeof currentFetchRevalidate === 'undefined') {
                currentFetchRevalidate = false;
            } else if (// we shouldn't set the revalidate to 0 as it's overridden
            // by the cache context
            (workUnitStore == null ? void 0 : workUnitStore.type) !== 'cache' && (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic)) {
                currentFetchRevalidate = 0;
            }
            if (currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store') {
                cacheReason = `cache: ${currentFetchCacheConfig}`;
            }
            finalRevalidate = validateRevalidate(currentFetchRevalidate, workStore.route);
            const _headers = getRequestMeta('headers');
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === 'function' ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get('authorization') || initHeaders.get('cookie');
            const isUnCacheableMethod = ![
                'get',
                'head'
            ].includes(((_getRequestMeta = getRequestMeta('method')) == null ? void 0 : _getRequestMeta.toLowerCase()) || 'get');
            /**
         * We automatically disable fetch caching under the following conditions:
         * - Fetch cache configs are not set. Specifically:
         *    - A page fetch cache mode is not set (export const fetchCache=...)
         *    - A fetch cache mode is not set in the fetch call (fetch(url, { cache: ... }))
         *      or the fetch cache mode is set to 'default'
         *    - A fetch revalidate value is not set in the fetch call (fetch(url, { revalidate: ... }))
         * - OR the fetch comes after a configuration that triggered dynamic rendering (e.g., reading cookies())
         *   and the fetch was considered uncacheable (e.g., POST method or has authorization headers)
         */ const hasNoExplicitCacheConfig = pageFetchCacheMode == undefined && // eslint-disable-next-line eqeqeq
            (currentFetchCacheConfig == undefined || // when considering whether to opt into the default "no-cache" fetch semantics,
            // a "default" cache config should be treated the same as no cache config
            currentFetchCacheConfig === 'default') && // eslint-disable-next-line eqeqeq
            currentFetchRevalidate == undefined;
            const autoNoCache = // eslint-disable-next-line eqeqeq
            hasNoExplicitCacheConfig && // we disable automatic no caching behavior during build time SSG so that we can still
            // leverage the fetch cache between SSG workers
            !workStore.isPrerendering || (hasUnCacheableHeader || isUnCacheableMethod) && revalidateStore && revalidateStore.revalidate === 0;
            if (hasNoExplicitCacheConfig && workUnitStore !== undefined && workUnitStore.type === 'prerender') {
                // If we have no cache config, and we're in Dynamic I/O prerendering, it'll be a dynamic call.
                // We don't have to issue that dynamic call.
                if (cacheSignal) {
                    cacheSignal.endRead();
                    cacheSignal = null;
                }
                return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, 'fetch()');
            }
            switch(pageFetchCacheMode){
                case 'force-no-store':
                    {
                        cacheReason = 'fetchCache = force-no-store';
                        break;
                    }
                case 'only-no-store':
                    {
                        if (currentFetchCacheConfig === 'force-cache' || typeof finalRevalidate !== 'undefined' && finalRevalidate > 0) {
                            throw Object.defineProperty(new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`), "__NEXT_ERROR_CODE", {
                                value: "E448",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheReason = 'fetchCache = only-no-store';
                        break;
                    }
                case 'only-cache':
                    {
                        if (currentFetchCacheConfig === 'no-store') {
                            throw Object.defineProperty(new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`), "__NEXT_ERROR_CODE", {
                                value: "E521",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        break;
                    }
                case 'force-cache':
                    {
                        if (typeof currentFetchRevalidate === 'undefined' || currentFetchRevalidate === 0) {
                            cacheReason = 'fetchCache = force-cache';
                            finalRevalidate = _constants1.INFINITE_CACHE;
                        }
                        break;
                    }
                default:
            }
            if (typeof finalRevalidate === 'undefined') {
                if (pageFetchCacheMode === 'default-cache' && !isUsingNoStore) {
                    finalRevalidate = _constants1.INFINITE_CACHE;
                    cacheReason = 'fetchCache = default-cache';
                } else if (pageFetchCacheMode === 'default-no-store') {
                    finalRevalidate = 0;
                    cacheReason = 'fetchCache = default-no-store';
                } else if (isUsingNoStore) {
                    finalRevalidate = 0;
                    cacheReason = 'noStore call';
                } else if (autoNoCache) {
                    finalRevalidate = 0;
                    cacheReason = 'auto no cache';
                } else {
                    // TODO: should we consider this case an invariant?
                    cacheReason = 'auto cache';
                    finalRevalidate = revalidateStore ? revalidateStore.revalidate : _constants1.INFINITE_CACHE;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${finalRevalidate}`;
            }
            if (// `revalidate: 0` values
            !(workStore.forceStatic && finalRevalidate === 0) && // we don't consider autoNoCache to switch to dynamic for ISR
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            revalidateStore && finalRevalidate < revalidateStore.revalidate) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (finalRevalidate === 0) {
                    if (workUnitStore && workUnitStore.type === 'prerender') {
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, 'fetch()');
                    } else {
                        (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                    }
                }
                // We only want to set the revalidate store's revalidate time if it
                // was explicitly set for the fetch call, i.e. currentFetchRevalidate.
                if (revalidateStore && currentFetchRevalidate === finalRevalidate) {
                    revalidateStore.revalidate = finalRevalidate;
                }
            }
            const isCacheableRevalidate = typeof finalRevalidate === 'number' && finalRevalidate > 0;
            let cacheKey;
            const { incrementalCache } = workStore;
            const useCacheOrRequestStore = (workUnitStore == null ? void 0 : workUnitStore.type) === 'request' || (workUnitStore == null ? void 0 : workUnitStore.type) === 'cache' ? workUnitStore : undefined;
            if (incrementalCache && (isCacheableRevalidate || (useCacheOrRequestStore == null ? void 0 : useCacheOrRequestStore.serverComponentsHmrCache))) {
                try {
                    cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = workStore.nextFetchId ?? 1;
            workStore.nextFetchId = fetchIdx + 1;
            let handleUnlock = ()=>Promise.resolve();
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    'cache',
                    'credentials',
                    'headers',
                    'integrity',
                    'keepalive',
                    'method',
                    'mode',
                    'redirect',
                    'referrer',
                    'referrerPolicy',
                    'window',
                    'duplex',
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        'signal'
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const { _ogBody, body, signal, ...otherInput } = init;
                    init = {
                        ...otherInput,
                        body: _ogBody || body,
                        signal: isStale ? undefined : signal
                    };
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: 'origin',
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale && fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: finalRevalidate === 0 || cacheReasonOverride ? 'skip' : 'miss',
                            cacheWarning,
                            status: res.status,
                            method: clonedInit.method || 'GET'
                        });
                    }
                    if (res.status === 200 && incrementalCache && cacheKey && (isCacheableRevalidate || (useCacheOrRequestStore == null ? void 0 : useCacheOrRequestStore.serverComponentsHmrCache))) {
                        const normalizedRevalidate = finalRevalidate >= _constants1.INFINITE_CACHE ? _constants1.CACHE_ONE_YEAR : finalRevalidate;
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            // We are prerendering at build time or revalidate time with dynamicIO so we need to
                            // buffer the response so we can guarantee it can be read in a microtask
                            const bodyBuffer = await res.arrayBuffer();
                            const fetchedData = {
                                headers: Object.fromEntries(res.headers.entries()),
                                body: Buffer.from(bodyBuffer).toString('base64'),
                                status: res.status,
                                url: res.url
                            };
                            // We can skip checking the serverComponentsHmrCache because we aren't in
                            // dev mode.
                            await incrementalCache.set(cacheKey, {
                                kind: _responsecache.CachedRouteKind.FETCH,
                                data: fetchedData,
                                revalidate: normalizedRevalidate
                            }, {
                                fetchCache: true,
                                fetchUrl,
                                fetchIdx,
                                tags
                            });
                            await handleUnlock();
                            // We return a new Response to the caller.
                            return new Response(bodyBuffer, {
                                headers: res.headers,
                                status: res.status,
                                statusText: res.statusText
                            });
                        } else {
                            // We're cloning the response using this utility because there
                            // exists a bug in the undici library around response cloning.
                            // See the following pull request for more details:
                            // https://github.com/vercel/next.js/pull/73274
                            const [cloned1, cloned2] = (0, _cloneresponse.cloneResponse)(res);
                            // We are dynamically rendering including dev mode. We want to return
                            // the response to the caller as soon as possible because it might stream
                            // over a very long time.
                            cloned1.arrayBuffer().then(async (arrayBuffer)=>{
                                var _useCacheOrRequestStore_serverComponentsHmrCache;
                                const bodyBuffer = Buffer.from(arrayBuffer);
                                const fetchedData = {
                                    headers: Object.fromEntries(cloned1.headers.entries()),
                                    body: bodyBuffer.toString('base64'),
                                    status: cloned1.status,
                                    url: cloned1.url
                                };
                                useCacheOrRequestStore == null ? void 0 : (_useCacheOrRequestStore_serverComponentsHmrCache = useCacheOrRequestStore.serverComponentsHmrCache) == null ? void 0 : _useCacheOrRequestStore_serverComponentsHmrCache.set(cacheKey, fetchedData);
                                if (isCacheableRevalidate) {
                                    await incrementalCache.set(cacheKey, {
                                        kind: _responsecache.CachedRouteKind.FETCH,
                                        data: fetchedData,
                                        revalidate: normalizedRevalidate
                                    }, {
                                        fetchCache: true,
                                        fetchUrl,
                                        fetchIdx,
                                        tags
                                    });
                                }
                            }).catch((error)=>console.warn(`Failed to set fetch cache`, input, error)).finally(handleUnlock);
                            return cloned2;
                        }
                    }
                    // we had response that we determined shouldn't be cached so we return it
                    // and don't cache it. This also needs to unlock the cache lock we acquired.
                    await handleUnlock();
                    return res;
                }).catch((error)=>{
                    handleUnlock();
                    throw error;
                });
            };
            let cacheReasonOverride;
            let isForegroundRevalidate = false;
            let isHmrRefreshCache = false;
            if (cacheKey && incrementalCache) {
                let cachedFetchData;
                if ((useCacheOrRequestStore == null ? void 0 : useCacheOrRequestStore.isHmrRefresh) && useCacheOrRequestStore.serverComponentsHmrCache) {
                    cachedFetchData = useCacheOrRequestStore.serverComponentsHmrCache.get(cacheKey);
                    isHmrRefreshCache = true;
                }
                if (isCacheableRevalidate && !cachedFetchData) {
                    handleUnlock = await incrementalCache.lock(cacheKey);
                    const entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                        kind: _responsecache.IncrementalCacheKind.FETCH,
                        revalidate: finalRevalidate,
                        fetchUrl,
                        fetchIdx,
                        tags,
                        softTags: implicitTags
                    });
                    if (hasNoExplicitCacheConfig) {
                        // We sometimes use the cache to dedupe fetches that do not specify a cache configuration
                        // In these cases we want to make sure we still exclude them from prerenders if dynamicIO is on
                        // so we introduce an artificial Task boundary here.
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            await (0, _scheduler.waitAtLeastOneReactRenderTask)();
                        }
                    }
                    if (entry) {
                        await handleUnlock();
                    } else {
                        // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                        cacheReasonOverride = 'cache-control: no-cache (hard refresh)';
                    }
                    if ((entry == null ? void 0 : entry.value) && entry.value.kind === _responsecache.CachedRouteKind.FETCH) {
                        // when stale and is revalidating we wait for fresh data
                        // so the revalidated entry has the updated data
                        if (workStore.isRevalidate && entry.isStale) {
                            isForegroundRevalidate = true;
                        } else {
                            if (entry.isStale) {
                                workStore.pendingRevalidates ??= {};
                                if (!workStore.pendingRevalidates[cacheKey]) {
                                    const pendingRevalidate = doOriginalFetch(true).then(async (response)=>({
                                            body: await response.arrayBuffer(),
                                            headers: response.headers,
                                            status: response.status,
                                            statusText: response.statusText
                                        })).finally(()=>{
                                        workStore.pendingRevalidates ??= {};
                                        delete workStore.pendingRevalidates[cacheKey || ''];
                                    });
                                    // Attach the empty catch here so we don't get a "unhandled
                                    // promise rejection" warning.
                                    pendingRevalidate.catch(console.error);
                                    workStore.pendingRevalidates[cacheKey] = pendingRevalidate;
                                }
                            }
                            cachedFetchData = entry.value.data;
                        }
                    }
                }
                if (cachedFetchData) {
                    if (fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: isHmrRefreshCache ? 'hmr' : 'hit',
                            cacheWarning,
                            status: cachedFetchData.status || 200,
                            method: (init == null ? void 0 : init.method) || 'GET'
                        });
                    }
                    const response = new Response(Buffer.from(cachedFetchData.body, 'base64'), {
                        headers: cachedFetchData.headers,
                        status: cachedFetchData.status
                    });
                    Object.defineProperty(response, 'url', {
                        value: cachedFetchData.url
                    });
                    return response;
                }
            }
            if (workStore.isStaticGeneration && init && typeof init === 'object') {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
                if (cache === 'no-store') {
                    // If enabled, we should bail out of static generation.
                    if (workUnitStore && workUnitStore.type === 'prerender') {
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, 'fetch()');
                    } else {
                        (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
                    }
                }
                const hasNextConfig = 'next' in init;
                const { next = {} } = init;
                if (typeof next.revalidate === 'number' && revalidateStore && next.revalidate < revalidateStore.revalidate) {
                    if (next.revalidate === 0) {
                        // If enabled, we should bail out of static generation.
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            return (0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, 'fetch()');
                        } else {
                            (0, _dynamicrendering.markCurrentScopeAsDynamic)(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                        }
                    }
                    if (!workStore.forceStatic || next.revalidate !== 0) {
                        revalidateStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            // if we are revalidating the whole page via time or on-demand and
            // the fetch cache entry is stale we should still de-dupe the
            // origin hit if it's a cache-able entry
            if (cacheKey && isForegroundRevalidate) {
                const pendingRevalidateKey = cacheKey;
                workStore.pendingRevalidates ??= {};
                let pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
                if (pendingRevalidate) {
                    const revalidatedResult = await pendingRevalidate;
                    return new Response(revalidatedResult.body, {
                        headers: revalidatedResult.headers,
                        status: revalidatedResult.status,
                        statusText: revalidatedResult.statusText
                    });
                }
                // We used to just resolve the Response and clone it however for
                // static generation with dynamicIO we need the response to be able to
                // be resolved in a microtask and cloning the response will never have
                // a body that can resolve in a microtask in node (as observed through
                // experimentation) So instead we await the body and then when it is
                // available we construct manually cloned Response objects with the
                // body as an ArrayBuffer. This will be resolvable in a microtask
                // making it compatible with dynamicIO.
                const pendingResponse = doOriginalFetch(true, cacheReasonOverride) // We're cloning the response using this utility because there
                // exists a bug in the undici library around response cloning.
                // See the following pull request for more details:
                // https://github.com/vercel/next.js/pull/73274
                .then(_cloneresponse.cloneResponse);
                pendingRevalidate = pendingResponse.then(async (responses)=>{
                    const response = responses[0];
                    return {
                        body: await response.arrayBuffer(),
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText
                    };
                }).finally(()=>{
                    var _workStore_pendingRevalidates;
                    // If the pending revalidate is not present in the store, then
                    // we have nothing to delete.
                    if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
                        return;
                    }
                    delete workStore.pendingRevalidates[pendingRevalidateKey];
                });
                // Attach the empty catch here so we don't get a "unhandled promise
                // rejection" warning
                pendingRevalidate.catch(()=>{});
                workStore.pendingRevalidates[pendingRevalidateKey] = pendingRevalidate;
                return pendingResponse.then((responses)=>responses[1]);
            } else {
                return doOriginalFetch(false, cacheReasonOverride);
            }
        });
        if (cacheSignal) {
            try {
                return await result;
            } finally{
                if (cacheSignal) {
                    cacheSignal.endRead();
                }
            }
        }
        return result;
    };
    // Attach the necessary properties to the patched fetch function.
    // We don't use this to determine if the fetch function has been patched,
    // but for external consumers to determine if the fetch function has been
    // patched.
    patched.__nextPatched = true;
    patched.__nextGetStaticStore = ()=>workAsyncStorage;
    patched._nextOriginalFetch = originFetch;
    globalThis[NEXT_PATCH_SYMBOL] = true;
    return patched;
}
function patchFetch(options) {
    // If we've already patched fetch, we should not patch it again.
    if (isFetchPatched()) return;
    // Grab the original fetch function. We'll attach this so we can use it in
    // the patched fetch function.
    const original = (0, _dedupefetch.createDedupeFetch)(globalThis.fetch);
    // Set the global fetch to the patched fetch.
    globalThis.fetch = createPatchedFetcher(original, options);
} //# sourceMappingURL=patch-fetch.js.map
}}),
"[project]/node_modules/next/dist/server/web/spec-extension/unstable-cache.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_cache", {
    enumerable: true,
    get: function() {
        return unstable_cache;
    }
});
const _constants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _patchfetch = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _responsecache = __turbopack_context__.r("[project]/node_modules/next/dist/server/response-cache/index.js [app-rsc] (ecmascript)");
let noStoreFetchIdx = 0;
async function cacheNewResult(result, incrementalCache, cacheKey, tags, revalidate, fetchIdx, fetchUrl) {
    await incrementalCache.set(cacheKey, {
        kind: _responsecache.CachedRouteKind.FETCH,
        data: {
            headers: {},
            // TODO: handle non-JSON values?
            body: JSON.stringify(result),
            status: 200,
            url: ''
        },
        revalidate: typeof revalidate !== 'number' ? _constants.CACHE_ONE_YEAR : revalidate
    }, {
        fetchCache: true,
        tags,
        fetchIdx,
        fetchUrl
    });
    return;
}
function unstable_cache(cb, keyParts, options = {}) {
    if (options.revalidate === 0) {
        throw Object.defineProperty(new Error(`Invariant revalidate: 0 can not be passed to unstable_cache(), must be "false" or "> 0" ${cb.toString()}`), "__NEXT_ERROR_CODE", {
            value: "E57",
            enumerable: false,
            configurable: true
        });
    }
    // Validate the tags provided are valid
    const tags = options.tags ? (0, _patchfetch.validateTags)(options.tags, `unstable_cache ${cb.toString()}`) : [];
    // Validate the revalidate options
    (0, _patchfetch.validateRevalidate)(options.revalidate, `unstable_cache ${cb.name || cb.toString()}`);
    // Stash the fixed part of the key at construction time. The invocation key will combine
    // the fixed key with the arguments when actually called
    // @TODO if cb.toString() is long we should hash it
    // @TODO come up with a collision-free way to combine keyParts
    // @TODO consider validating the keyParts are all strings. TS can't provide runtime guarantees
    // and the error produced by accidentally using something that cannot be safely coerced is likely
    // hard to debug
    const fixedKey = `${cb.toString()}-${Array.isArray(keyParts) && keyParts.join(',')}`;
    const cachedCb = async (...args)=>{
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
        // We must be able to find the incremental cache otherwise we throw
        const maybeIncrementalCache = (workStore == null ? void 0 : workStore.incrementalCache) || globalThis.__incrementalCache;
        if (!maybeIncrementalCache) {
            throw Object.defineProperty(new Error(`Invariant: incrementalCache missing in unstable_cache ${cb.toString()}`), "__NEXT_ERROR_CODE", {
                value: "E469",
                enumerable: false,
                configurable: true
            });
        }
        const incrementalCache = maybeIncrementalCache;
        const cacheSignal = workUnitStore && workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        try {
            // If there's no request store, we aren't in a request (or we're not in app
            // router)  and if there's no static generation store, we aren't in app
            // router. Default to an empty pathname and search params when there's no
            // request store or static generation store available.
            const requestStore = workUnitStore && workUnitStore.type === 'request' ? workUnitStore : undefined;
            const pathname = (requestStore == null ? void 0 : requestStore.url.pathname) ?? (workStore == null ? void 0 : workStore.route) ?? '';
            const searchParams = new URLSearchParams((requestStore == null ? void 0 : requestStore.url.search) ?? '');
            const sortedSearchKeys = [
                ...searchParams.keys()
            ].sort((a, b)=>{
                return a.localeCompare(b);
            });
            const sortedSearch = sortedSearchKeys.map((key)=>`${key}=${searchParams.get(key)}`).join('&');
            // Construct the complete cache key for this function invocation
            // @TODO stringify is likely not safe here. We will coerce undefined to null which will make
            // the keyspace smaller than the execution space
            const invocationKey = `${fixedKey}-${JSON.stringify(args)}`;
            const cacheKey = await incrementalCache.generateCacheKey(invocationKey);
            // $urlWithPath,$sortedQueryStringKeys,$hashOfEveryThingElse
            const fetchUrl = `unstable_cache ${pathname}${sortedSearch.length ? '?' : ''}${sortedSearch} ${cb.name ? ` ${cb.name}` : cacheKey}`;
            const fetchIdx = (workStore ? workStore.nextFetchId : noStoreFetchIdx) ?? 1;
            if (workStore) {
                workStore.nextFetchId = fetchIdx + 1;
                // We are in an App Router context. We try to return the cached entry if it exists and is valid
                // If the entry is fresh we return it. If the entry is stale we return it but revalidate the entry in
                // the background. If the entry is missing or invalid we generate a new entry and return it.
                // We update the store's revalidate property if the option.revalidate is a higher precedence
                if (workUnitStore && (workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy')) {
                    // options.revalidate === undefined doesn't affect timing.
                    // options.revalidate === false doesn't shrink timing. it stays at the maximum.
                    if (typeof options.revalidate === 'number') {
                        if (workUnitStore.revalidate < options.revalidate) {
                        // The store is already revalidating on a shorter time interval, leave it alone
                        } else {
                            workUnitStore.revalidate = options.revalidate;
                        }
                    }
                    // We need to accumulate the tags for this invocation within the store
                    const collectedTags = workUnitStore.tags;
                    if (collectedTags === null) {
                        workUnitStore.tags = tags.slice();
                    } else {
                        for (const tag of tags){
                            // @TODO refactor tags to be a set to avoid this O(n) lookup
                            if (!collectedTags.includes(tag)) {
                                collectedTags.push(tag);
                            }
                        }
                    }
                }
                const implicitTags = !workUnitStore || workUnitStore.type === 'unstable-cache' ? [] : workUnitStore.implicitTags;
                const isNestedUnstableCache = workUnitStore && workUnitStore.type === 'unstable-cache';
                if (// we should bypass cache similar to fetches
                !isNestedUnstableCache && workStore.fetchCache !== 'force-no-store' && !workStore.isOnDemandRevalidate && !incrementalCache.isOnDemandRevalidate && !workStore.isDraftMode) {
                    // We attempt to get the current cache entry from the incremental cache.
                    const cacheEntry = await incrementalCache.get(cacheKey, {
                        kind: _responsecache.IncrementalCacheKind.FETCH,
                        revalidate: options.revalidate,
                        tags,
                        softTags: implicitTags,
                        fetchIdx,
                        fetchUrl
                    });
                    if (cacheEntry && cacheEntry.value) {
                        // The entry exists and has a value
                        if (cacheEntry.value.kind !== _responsecache.CachedRouteKind.FETCH) {
                            // The entry is invalid and we need a special warning
                            // @TODO why do we warn this way? Should this just be an error? How are these errors surfaced
                            // so bugs can be reported
                            // @TODO the invocation key can have sensitive data in it. we should not log this entire object
                            console.error(`Invariant invalid cacheEntry returned for ${invocationKey}`);
                        // will fall through to generating a new cache entry below
                        } else {
                            // We have a valid cache entry so we will be returning it. We also check to see if we need
                            // to background revalidate it by checking if it is stale.
                            const cachedResponse = cacheEntry.value.data.body !== undefined ? JSON.parse(cacheEntry.value.data.body) : undefined;
                            if (cacheEntry.isStale) {
                                // In App Router we return the stale result and revalidate in the background
                                if (!workStore.pendingRevalidates) {
                                    workStore.pendingRevalidates = {};
                                }
                                const innerCacheStore = {
                                    type: 'unstable-cache',
                                    phase: 'render'
                                };
                                // We run the cache function asynchronously and save the result when it completes
                                workStore.pendingRevalidates[invocationKey] = _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args).then((result)=>{
                                    return cacheNewResult(result, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                                }) // @TODO This error handling seems wrong. We swallow the error?
                                .catch((err)=>console.error(`revalidating cache with key: ${invocationKey}`, err));
                            }
                            // We had a valid cache entry so we return it here
                            return cachedResponse;
                        }
                    }
                }
                const innerCacheStore = {
                    type: 'unstable-cache',
                    phase: 'render'
                };
                // If we got this far then we had an invalid cache entry and need to generate a new one
                const result = await _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args);
                if (!workStore.isDraftMode) {
                    cacheNewResult(result, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                }
                return result;
            } else {
                noStoreFetchIdx += 1;
                // We are in Pages Router or were called outside of a render. We don't have a store
                // so we just call the callback directly when it needs to run.
                // If the entry is fresh we return it. If the entry is stale we return it but revalidate the entry in
                // the background. If the entry is missing or invalid we generate a new entry and return it.
                if (!incrementalCache.isOnDemandRevalidate) {
                    // We aren't doing an on demand revalidation so we check use the cache if valid
                    const implicitTags = !workUnitStore || workUnitStore.type === 'unstable-cache' ? [] : workUnitStore.implicitTags;
                    const cacheEntry = await incrementalCache.get(cacheKey, {
                        kind: _responsecache.IncrementalCacheKind.FETCH,
                        revalidate: options.revalidate,
                        tags,
                        fetchIdx,
                        fetchUrl,
                        softTags: implicitTags
                    });
                    if (cacheEntry && cacheEntry.value) {
                        // The entry exists and has a value
                        if (cacheEntry.value.kind !== _responsecache.CachedRouteKind.FETCH) {
                            // The entry is invalid and we need a special warning
                            // @TODO why do we warn this way? Should this just be an error? How are these errors surfaced
                            // so bugs can be reported
                            console.error(`Invariant invalid cacheEntry returned for ${invocationKey}`);
                        // will fall through to generating a new cache entry below
                        } else if (!cacheEntry.isStale) {
                            // We have a valid cache entry and it is fresh so we return it
                            return cacheEntry.value.data.body !== undefined ? JSON.parse(cacheEntry.value.data.body) : undefined;
                        }
                    }
                }
                const innerCacheStore = {
                    type: 'unstable-cache',
                    phase: 'render'
                };
                // If we got this far then we had an invalid cache entry and need to generate a new one
                const result = await _workunitasyncstorageexternal.workUnitAsyncStorage.run(innerCacheStore, cb, ...args);
                cacheNewResult(result, incrementalCache, cacheKey, tags, options.revalidate, fetchIdx, fetchUrl);
                return result;
            }
        } finally{
            if (cacheSignal) {
                cacheSignal.endRead();
            }
        }
    };
    // TODO: once AsyncLocalStorage.run() returns the correct types this override will no longer be necessary
    return cachedCb;
} //# sourceMappingURL=unstable-cache.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return getSortedRoutes;
    }
});
class UrlNode {
    insert(urlPath) {
        this._insert(urlPath.split('/').filter(Boolean), [], false);
    }
    smoosh() {
        return this._smoosh();
    }
    _smoosh(prefix) {
        if (prefix === void 0) prefix = '/';
        const childrenPaths = [
            ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
        }
        if (this.restSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
        }
        if (this.optionalRestSlugName !== null) {
            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
        }
        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
                ...prev,
                ...curr
            ], []);
        if (this.slugName !== null) {
            routes.push(...this.children.get('[]')._smoosh(prefix + "[" + this.slugName + "]/"));
        }
        if (!this.placeholder) {
            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
            if (this.optionalRestSlugName != null) {
                throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
                    value: "E458",
                    enumerable: false,
                    configurable: true
                });
            }
            routes.unshift(r);
        }
        if (this.restSlugName !== null) {
            routes.push(...this.children.get('[...]')._smoosh(prefix + "[..." + this.restSlugName + "]/"));
        }
        if (this.optionalRestSlugName !== null) {
            routes.push(...this.children.get('[[...]]')._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
        }
        return routes;
    }
    _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
            this.placeholder = false;
            return;
        }
        if (isCatchAll) {
            throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
                value: "E392",
                enumerable: false,
                configurable: true
            });
        }
        // The next segment in the urlPaths list
        let nextSegment = urlPaths[0];
        // Check if the segment matches `[something]`
        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
            // Strip `[` and `]`, leaving only `something`
            let segmentName = nextSegment.slice(1, -1);
            let isOptional = false;
            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
                // Strip optional `[` and `]`, leaving only `something`
                segmentName = segmentName.slice(1, -1);
                isOptional = true;
            }
            if (segmentName.startsWith('…')) {
                throw Object.defineProperty(new Error("Detected a three-dot character ('…') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
                    value: "E147",
                    enumerable: false,
                    configurable: true
                });
            }
            if (segmentName.startsWith('...')) {
                // Strip `...`, leaving only `something`
                segmentName = segmentName.substring(3);
                isCatchAll = true;
            }
            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
                throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
                    value: "E421",
                    enumerable: false,
                    configurable: true
                });
            }
            if (segmentName.startsWith('.')) {
                throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
                    value: "E288",
                    enumerable: false,
                    configurable: true
                });
            }
            function handleSlug(previousSlug, nextSlug) {
                if (previousSlug !== null) {
                    // If the specific segment already has a slug but the slug is not `something`
                    // This prevents collisions like:
                    // pages/[post]/index.js
                    // pages/[id]/index.js
                    // Because currently multiple dynamic params on the same segment level are not supported
                    if (previousSlug !== nextSlug) {
                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
                        throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
                            value: "E337",
                            enumerable: false,
                            configurable: true
                        });
                    }
                }
                slugNames.forEach((slug)=>{
                    if (slug === nextSlug) {
                        throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
                            value: "E247",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
                        throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
                            value: "E499",
                            enumerable: false,
                            configurable: true
                        });
                    }
                });
                slugNames.push(nextSlug);
            }
            if (isCatchAll) {
                if (isOptional) {
                    if (this.restSlugName != null) {
                        throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
                            value: "E299",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    handleSlug(this.optionalRestSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.optionalRestSlugName = segmentName;
                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
                    nextSegment = '[[...]]';
                } else {
                    if (this.optionalRestSlugName != null) {
                        throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                            value: "E300",
                            enumerable: false,
                            configurable: true
                        });
                    }
                    handleSlug(this.restSlugName, segmentName);
                    // slugName is kept as it can only be one particular slugName
                    this.restSlugName = segmentName;
                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
                    nextSegment = '[...]';
                }
            } else {
                if (isOptional) {
                    throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
                        value: "E435",
                        enumerable: false,
                        configurable: true
                    });
                }
                handleSlug(this.slugName, segmentName);
                // slugName is kept as it can only be one particular slugName
                this.slugName = segmentName;
                // nextSegment is overwritten to [] so that it can later be sorted specifically
                nextSegment = '[]';
            }
        }
        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
        if (!this.children.has(nextSegment)) {
            this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
    }
    constructor(){
        this.placeholder = true;
        this.children = new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
    }
}
function getSortedRoutes(normalizedPages) {
    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
    // Only 1 dynamic segment per nesting level
    // So in the case that is test/integration/dynamic-routing it'll be this:
    // pages/[post]/comments.js
    // pages/blog/[post]/comment/[id].js
    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
    // So in this case `UrlNode` created here has `this.slugName === 'post'`
    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
    // Instead what has to be passed through is the upwards path's dynamic names
    const root = new UrlNode();
    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
    return root.smoosh();
}
function getSortedRouteObjects(objects, getter) {
    // We're assuming here that all the pathnames are unique, that way we can
    // sort the list and use the index as the key.
    const indexes = {};
    const pathnames = [];
    for(let i = 0; i < objects.length; i++){
        const pathname = getter(objects[i]);
        indexes[pathname] = i;
        pathnames[i] = pathname;
    }
    // Sort the pathnames.
    const sorted = getSortedRoutes(pathnames);
    // Map the sorted pathnames back to the original objects using the new sorted
    // index.
    return sorted.map((pathname)=>objects[indexes[pathname]]);
} //# sourceMappingURL=sorted-routes.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDynamicRoute", {
    enumerable: true,
    get: function() {
        return isDynamicRoute;
    }
});
const _interceptionroutes = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
// Identify /.*[param].*/ in route string
const TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
// Identify /[param]/ in route string
const TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
function isDynamicRoute(route, strict) {
    if (strict === void 0) strict = true;
    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
    }
    if (strict) {
        return TEST_STRICT_ROUTE.test(route);
    }
    return TEST_ROUTE.test(route);
} //# sourceMappingURL=is-dynamic.js.map
}}),
"[project]/node_modules/next/dist/shared/lib/router/utils/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getSortedRouteObjects: null,
    getSortedRoutes: null,
    isDynamicRoute: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getSortedRouteObjects: function() {
        return _sortedroutes.getSortedRouteObjects;
    },
    getSortedRoutes: function() {
        return _sortedroutes.getSortedRoutes;
    },
    isDynamicRoute: function() {
        return _isdynamic.isDynamicRoute;
    }
});
const _sortedroutes = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/sorted-routes.js [app-rsc] (ecmascript)");
const _isdynamic = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [app-rsc] (ecmascript)"); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    revalidatePath: null,
    revalidateTag: null,
    unstable_expirePath: null,
    unstable_expireTag: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    revalidatePath: function() {
        return revalidatePath;
    },
    revalidateTag: function() {
        return revalidateTag;
    },
    unstable_expirePath: function() {
        return unstable_expirePath;
    },
    unstable_expireTag: function() {
        return unstable_expireTag;
    }
});
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/index.js [app-rsc] (ecmascript)");
const _constants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/constants.js [app-rsc] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function revalidateTag(tag) {
    return revalidate([
        tag
    ], `revalidateTag ${tag}`);
}
function unstable_expirePath(originalPath, type) {
    if (originalPath.length > _constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH) {
        console.warn(`Warning: expirePath received "${originalPath}" which exceeded max length of ${_constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/unstable_expirePath`);
        return;
    }
    let normalizedPath = `${_constants.NEXT_CACHE_IMPLICIT_TAG_ID}${originalPath}`;
    if (type) {
        normalizedPath += `${normalizedPath.endsWith('/') ? '' : '/'}${type}`;
    } else if ((0, _utils.isDynamicRoute)(originalPath)) {
        console.warn(`Warning: a dynamic page path "${originalPath}" was passed to "expirePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/unstable_expirePath`);
    }
    return revalidate([
        normalizedPath
    ], `unstable_expirePath ${originalPath}`);
}
function unstable_expireTag(...tags) {
    return revalidate(tags, `unstable_expireTag ${tags.join(', ')}`);
}
function revalidatePath(originalPath, type) {
    if (originalPath.length > _constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH) {
        console.warn(`Warning: revalidatePath received "${originalPath}" which exceeded max length of ${_constants.NEXT_CACHE_SOFT_TAG_MAX_LENGTH}. See more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);
        return;
    }
    let normalizedPath = `${_constants.NEXT_CACHE_IMPLICIT_TAG_ID}${originalPath}`;
    if (type) {
        normalizedPath += `${normalizedPath.endsWith('/') ? '' : '/'}${type}`;
    } else if ((0, _utils.isDynamicRoute)(originalPath)) {
        console.warn(`Warning: a dynamic page path "${originalPath}" was passed to "revalidatePath", but the "type" parameter is missing. This has no effect by default, see more info here https://nextjs.org/docs/app/api-reference/functions/revalidatePath`);
    }
    return revalidate([
        normalizedPath
    ], `revalidatePath ${originalPath}`);
}
function revalidate(tags, expression) {
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (!store || !store.incrementalCache) {
        throw Object.defineProperty(new Error(`Invariant: static generation store missing in ${expression}`), "__NEXT_ERROR_CODE", {
            value: "E263",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workUnitStore) {
        if (workUnitStore.type === 'cache') {
            throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a "use cache" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E181",
                enumerable: false,
                configurable: true
            });
        } else if (workUnitStore.type === 'unstable-cache') {
            throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" inside a function cached with "unstable_cache(...)" which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E306",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore.phase === 'render') {
            throw Object.defineProperty(new Error(`Route ${store.route} used "${expression}" during render which is unsupported. To ensure revalidation is performed consistently it must always happen outside of renders and cached functions. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
                value: "E7",
                enumerable: false,
                configurable: true
            });
        }
        if (workUnitStore.type === 'prerender') {
            // dynamicIO Prerender
            const error = Object.defineProperty(new Error(`Route ${store.route} used ${expression} without first calling \`await connection()\`.`), "__NEXT_ERROR_CODE", {
                value: "E406",
                enumerable: false,
                configurable: true
            });
            (0, _dynamicrendering.abortAndThrowOnSynchronousRequestDataAccess)(store.route, expression, error, workUnitStore);
        } else if (workUnitStore.type === 'prerender-ppr') {
            // PPR Prerender
            (0, _dynamicrendering.postponeWithTracking)(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            // legacy Prerender
            workUnitStore.revalidate = 0;
            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E558",
                enumerable: false,
                configurable: true
            });
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
    if (!store.revalidatedTags) {
        store.revalidatedTags = [];
    }
    for (const tag of tags){
        if (!store.revalidatedTags.includes(tag)) {
            store.revalidatedTags.push(tag);
        }
    }
    // TODO: only revalidate if the path matches
    store.pathWasRevalidated = true;
} //# sourceMappingURL=revalidate.js.map
}}),
"[project]/node_modules/next/dist/server/web/spec-extension/unstable-no-store.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_noStore", {
    enumerable: true,
    get: function() {
        return unstable_noStore;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
function unstable_noStore() {
    const callingExpression = 'unstable_noStore()';
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!store) {
        // This generally implies we are being called in Pages router. We should probably not support
        // unstable_noStore in contexts outside of `react-server` condition but since we historically
        // have not errored here previously, we maintain that behavior for now.
        return;
    } else if (store.forceStatic) {
        return;
    } else {
        store.isUnstableNoStore = true;
        if (workUnitStore && workUnitStore.type === 'prerender') {
        // unstable_noStore() is a noop in Dynamic I/O.
        } else {
            (0, _dynamicrendering.markCurrentScopeAsDynamic)(store, workUnitStore, callingExpression);
        }
    }
} //# sourceMappingURL=unstable-no-store.js.map
}}),
"[project]/node_modules/next/dist/server/use-cache/cache-life.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cacheLife", {
    enumerable: true,
    get: function() {
        return cacheLife;
    }
});
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
function validateCacheLife(profile) {
    if (profile.stale !== undefined) {
        if (profile.stale === false) {
            throw Object.defineProperty(new Error('Pass `Infinity` instead of `false` if you want to cache on the client forever ' + 'without checking with the server.'), "__NEXT_ERROR_CODE", {
                value: "E407",
                enumerable: false,
                configurable: true
            });
        } else if (typeof profile.stale !== 'number') {
            throw Object.defineProperty(new Error('The stale option must be a number of seconds.'), "__NEXT_ERROR_CODE", {
                value: "E308",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.revalidate !== undefined) {
        if (profile.revalidate === false) {
            throw Object.defineProperty(new Error('Pass `Infinity` instead of `false` if you do not want to revalidate by time.'), "__NEXT_ERROR_CODE", {
                value: "E104",
                enumerable: false,
                configurable: true
            });
        } else if (typeof profile.revalidate !== 'number') {
            throw Object.defineProperty(new Error('The revalidate option must be a number of seconds.'), "__NEXT_ERROR_CODE", {
                value: "E233",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.expire !== undefined) {
        if (profile.expire === false) {
            throw Object.defineProperty(new Error('Pass `Infinity` instead of `false` if you want to cache on the server forever ' + 'without checking with the origin.'), "__NEXT_ERROR_CODE", {
                value: "E658",
                enumerable: false,
                configurable: true
            });
        } else if (typeof profile.expire !== 'number') {
            throw Object.defineProperty(new Error('The expire option must be a number of seconds.'), "__NEXT_ERROR_CODE", {
                value: "E3",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.revalidate !== undefined && profile.expire !== undefined) {
        if (profile.revalidate > profile.expire) {
            throw Object.defineProperty(new Error('If providing both the revalidate and expire options, ' + 'the expire option must be greater than the revalidate option. ' + 'The expire option indicates how many seconds from the start ' + 'until it can no longer be used.'), "__NEXT_ERROR_CODE", {
                value: "E656",
                enumerable: false,
                configurable: true
            });
        }
    }
    if (profile.stale !== undefined && profile.expire !== undefined) {
        if (profile.stale > profile.expire) {
            throw Object.defineProperty(new Error('If providing both the stale and expire options, ' + 'the expire option must be greater than the stale option. ' + 'The expire option indicates how many seconds from the start ' + 'until it can no longer be used.'), "__NEXT_ERROR_CODE", {
                value: "E655",
                enumerable: false,
                configurable: true
            });
        }
    }
}
function cacheLife(profile) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error('cacheLife() is only available with the experimental.useCache config.'), "__NEXT_ERROR_CODE", {
            value: "E627",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore || workUnitStore.type !== 'cache') {
        throw Object.defineProperty(new Error('cacheLife() can only be called inside a "use cache" function.'), "__NEXT_ERROR_CODE", {
            value: "E250",
            enumerable: false,
            configurable: true
        });
    }
    if (typeof profile === 'string') {
        const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
        if (!workStore) {
            throw Object.defineProperty(new Error('cacheLife() can only be called during App Router rendering at the moment.'), "__NEXT_ERROR_CODE", {
                value: "E94",
                enumerable: false,
                configurable: true
            });
        }
        if (!workStore.cacheLifeProfiles) {
            throw Object.defineProperty(new Error('cacheLifeProfiles should always be provided. This is a bug in Next.js.'), "__NEXT_ERROR_CODE", {
                value: "E294",
                enumerable: false,
                configurable: true
            });
        }
        // TODO: This should be globally available and not require an AsyncLocalStorage.
        const configuredProfile = workStore.cacheLifeProfiles[profile];
        if (configuredProfile === undefined) {
            if (workStore.cacheLifeProfiles[profile.trim()]) {
                throw Object.defineProperty(new Error(`Unknown cacheLife profile "${profile}" is not configured in next.config.js\n` + `Did you mean "${profile.trim()}" without the spaces?`), "__NEXT_ERROR_CODE", {
                    value: "E16",
                    enumerable: false,
                    configurable: true
                });
            }
            throw Object.defineProperty(new Error(`Unknown cacheLife profile "${profile}" is not configured in next.config.js\n` + 'module.exports = {\n' + '  experimental: {\n' + '    cacheLife: {\n' + `      "${profile}": ...\n` + '    }\n' + '  }\n' + '}'), "__NEXT_ERROR_CODE", {
                value: "E137",
                enumerable: false,
                configurable: true
            });
        }
        profile = configuredProfile;
    } else if (typeof profile !== 'object' || profile === null || Array.isArray(profile)) {
        throw Object.defineProperty(new Error('Invalid cacheLife() option. Either pass a profile name or object.'), "__NEXT_ERROR_CODE", {
            value: "E110",
            enumerable: false,
            configurable: true
        });
    } else {
        validateCacheLife(profile);
    }
    if (profile.revalidate !== undefined) {
        // Track the explicit revalidate time.
        if (workUnitStore.explicitRevalidate === undefined || workUnitStore.explicitRevalidate > profile.revalidate) {
            workUnitStore.explicitRevalidate = profile.revalidate;
        }
    }
    if (profile.expire !== undefined) {
        // Track the explicit expire time.
        if (workUnitStore.explicitExpire === undefined || workUnitStore.explicitExpire > profile.expire) {
            workUnitStore.explicitExpire = profile.expire;
        }
    }
    if (profile.stale !== undefined) {
        // Track the explicit stale time.
        if (workUnitStore.explicitStale === undefined || workUnitStore.explicitStale > profile.stale) {
            workUnitStore.explicitStale = profile.stale;
        }
    }
} //# sourceMappingURL=cache-life.js.map
}}),
"[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "cacheTag", {
    enumerable: true,
    get: function() {
        return cacheTag;
    }
});
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _patchfetch = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/patch-fetch.js [app-rsc] (ecmascript)");
function cacheTag(...tags) {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error('cacheTag() is only available with the experimental.useCache config.'), "__NEXT_ERROR_CODE", {
            value: "E628",
            enumerable: false,
            configurable: true
        });
    }
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (!workUnitStore || workUnitStore.type !== 'cache') {
        throw Object.defineProperty(new Error('cacheTag() can only be called inside a "use cache" function.'), "__NEXT_ERROR_CODE", {
            value: "E177",
            enumerable: false,
            configurable: true
        });
    }
    const validTags = (0, _patchfetch.validateTags)(tags, 'cacheTag()');
    if (!workUnitStore.tags) {
        workUnitStore.tags = validTags;
    } else {
        workUnitStore.tags.push(...validTags);
    }
} //# sourceMappingURL=cache-tag.js.map
}}),
"[project]/node_modules/next/cache.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const cacheExports = {
    unstable_cache: __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/unstable-cache.js [app-rsc] (ecmascript)").unstable_cache,
    revalidateTag: __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").revalidateTag,
    revalidatePath: __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").revalidatePath,
    unstable_expireTag: __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").unstable_expireTag,
    unstable_expirePath: __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/revalidate.js [app-rsc] (ecmascript)").unstable_expirePath,
    unstable_noStore: __turbopack_context__.r("[project]/node_modules/next/dist/server/web/spec-extension/unstable-no-store.js [app-rsc] (ecmascript)").unstable_noStore,
    unstable_cacheLife: __turbopack_context__.r("[project]/node_modules/next/dist/server/use-cache/cache-life.js [app-rsc] (ecmascript)").cacheLife,
    unstable_cacheTag: __turbopack_context__.r("[project]/node_modules/next/dist/server/use-cache/cache-tag.js [app-rsc] (ecmascript)").cacheTag
};
// https://nodejs.org/api/esm.html#commonjs-namespaces
// When importing CommonJS modules, the module.exports object is provided as the default export
module.exports = cacheExports;
// make import { xxx } from 'next/cache' work
exports.unstable_cache = cacheExports.unstable_cache;
exports.revalidatePath = cacheExports.revalidatePath;
exports.revalidateTag = cacheExports.revalidateTag;
exports.unstable_expireTag = cacheExports.unstable_expireTag;
exports.unstable_expirePath = cacheExports.unstable_expirePath;
exports.unstable_noStore = cacheExports.unstable_noStore;
exports.unstable_cacheLife = cacheExports.unstable_cacheLife;
exports.unstable_cacheTag = cacheExports.unstable_cacheTag;
}}),
"[project]/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const __TURBOPACK__default__export__ = {
    randomUUID: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomUUID
};
}}),
"[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>rng)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}}),
"[project]/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}}),
"[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}}),
"[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "unsafeStringify": (()=>unsafeStringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/native.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
;
function v4(options, buf, offset) {
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID && !buf && !options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$native$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].randomUUID();
    }
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["unsafeStringify"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}}),
"[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "v4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ /* eslint-disable node/no-deprecated-api */ var buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
var Buffer = buffer.Buffer;
// alternative to using Object.keys for old browsers
function copyProps(src, dst) {
    for(var key in src){
        dst[key] = src[key];
    }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
    module.exports = buffer;
} else {
    // Copy properties from require('buffer')
    copyProps(buffer, exports);
    exports.Buffer = SafeBuffer;
}
function SafeBuffer(arg, encodingOrOffset, length) {
    return Buffer(arg, encodingOrOffset, length);
}
SafeBuffer.prototype = Object.create(Buffer.prototype);
// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer);
SafeBuffer.from = function(arg, encodingOrOffset, length) {
    if (typeof arg === 'number') {
        throw new TypeError('Argument must not be a number');
    }
    return Buffer(arg, encodingOrOffset, length);
};
SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    var buf = Buffer(size);
    if (fill !== undefined) {
        if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
        } else {
            buf.fill(fill);
        }
    } else {
        buf.fill(0);
    }
    return buf;
};
SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return Buffer(size);
};
SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== 'number') {
        throw new TypeError('Argument must be a number');
    }
    return buffer.SlowBuffer(size);
};
}}),
"[project]/node_modules/jws/lib/data-stream.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*global module, process*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function DataStream(data) {
    this.buffer = null;
    this.writable = true;
    this.readable = true;
    // No input
    if (!data) {
        this.buffer = Buffer.alloc(0);
        return this;
    }
    // Stream
    if (typeof data.pipe === 'function') {
        this.buffer = Buffer.alloc(0);
        data.pipe(this);
        return this;
    }
    // Buffer or String
    // or Object (assumedly a passworded key)
    if (data.length || typeof data === 'object') {
        this.buffer = data;
        this.writable = false;
        process.nextTick((function() {
            this.emit('end', data);
            this.readable = false;
            this.emit('close');
        }).bind(this));
        return this;
    }
    throw new TypeError('Unexpected data type (' + typeof data + ')');
}
util.inherits(DataStream, Stream);
DataStream.prototype.write = function write(data) {
    this.buffer = Buffer.concat([
        this.buffer,
        Buffer.from(data)
    ]);
    this.emit('data', data);
};
DataStream.prototype.end = function end(data) {
    if (data) this.write(data);
    this.emit('end', data);
    this.emit('close');
    this.writable = false;
    this.readable = false;
};
module.exports = DataStream;
}}),
"[project]/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
function getParamSize(keySize) {
    var result = (keySize / 8 | 0) + (keySize % 8 === 0 ? 0 : 1);
    return result;
}
var paramBytesForAlg = {
    ES256: getParamSize(256),
    ES384: getParamSize(384),
    ES512: getParamSize(521)
};
function getParamBytesForAlg(alg) {
    var paramBytes = paramBytesForAlg[alg];
    if (paramBytes) {
        return paramBytes;
    }
    throw new Error('Unknown algorithm "' + alg + '"');
}
module.exports = getParamBytesForAlg;
}}),
"[project]/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var getParamBytesForAlg = __turbopack_context__.r("[project]/node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js [app-rsc] (ecmascript)");
var MAX_OCTET = 0x80, CLASS_UNIVERSAL = 0, PRIMITIVE_BIT = 0x20, TAG_SEQ = 0x10, TAG_INT = 0x02, ENCODED_TAG_SEQ = TAG_SEQ | PRIMITIVE_BIT | CLASS_UNIVERSAL << 6, ENCODED_TAG_INT = TAG_INT | CLASS_UNIVERSAL << 6;
function base64Url(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function signatureAsBuffer(signature) {
    if (Buffer.isBuffer(signature)) {
        return signature;
    } else if ('string' === typeof signature) {
        return Buffer.from(signature, 'base64');
    }
    throw new TypeError('ECDSA signature must be a Base64 string or a Buffer');
}
function derToJose(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    // the DER encoded param should at most be the param size, plus a padding
    // zero, since due to being a signed integer
    var maxEncodedParamLength = paramBytes + 1;
    var inputLength = signature.length;
    var offset = 0;
    if (signature[offset++] !== ENCODED_TAG_SEQ) {
        throw new Error('Could not find expected "seq"');
    }
    var seqLength = signature[offset++];
    if (seqLength === (MAX_OCTET | 1)) {
        seqLength = signature[offset++];
    }
    if (inputLength - offset < seqLength) {
        throw new Error('"seq" specified length of "' + seqLength + '", only "' + (inputLength - offset) + '" remaining');
    }
    if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "r"');
    }
    var rLength = signature[offset++];
    if (inputLength - offset - 2 < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", only "' + (inputLength - offset - 2) + '" available');
    }
    if (maxEncodedParamLength < rLength) {
        throw new Error('"r" specified length of "' + rLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var rOffset = offset;
    offset += rLength;
    if (signature[offset++] !== ENCODED_TAG_INT) {
        throw new Error('Could not find expected "int" for "s"');
    }
    var sLength = signature[offset++];
    if (inputLength - offset !== sLength) {
        throw new Error('"s" specified length of "' + sLength + '", expected "' + (inputLength - offset) + '"');
    }
    if (maxEncodedParamLength < sLength) {
        throw new Error('"s" specified length of "' + sLength + '", max of "' + maxEncodedParamLength + '" is acceptable');
    }
    var sOffset = offset;
    offset += sLength;
    if (offset !== inputLength) {
        throw new Error('Expected to consume entire buffer, but "' + (inputLength - offset) + '" bytes remain');
    }
    var rPadding = paramBytes - rLength, sPadding = paramBytes - sLength;
    var dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);
    for(offset = 0; offset < rPadding; ++offset){
        dst[offset] = 0;
    }
    signature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);
    offset = paramBytes;
    for(var o = offset; offset < o + sPadding; ++offset){
        dst[offset] = 0;
    }
    signature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);
    dst = dst.toString('base64');
    dst = base64Url(dst);
    return dst;
}
function countPadding(buf, start, stop) {
    var padding = 0;
    while(start + padding < stop && buf[start + padding] === 0){
        ++padding;
    }
    var needsSign = buf[start + padding] >= MAX_OCTET;
    if (needsSign) {
        --padding;
    }
    return padding;
}
function joseToDer(signature, alg) {
    signature = signatureAsBuffer(signature);
    var paramBytes = getParamBytesForAlg(alg);
    var signatureBytes = signature.length;
    if (signatureBytes !== paramBytes * 2) {
        throw new TypeError('"' + alg + '" signatures must be "' + paramBytes * 2 + '" bytes, saw "' + signatureBytes + '"');
    }
    var rPadding = countPadding(signature, 0, paramBytes);
    var sPadding = countPadding(signature, paramBytes, signature.length);
    var rLength = paramBytes - rPadding;
    var sLength = paramBytes - sPadding;
    var rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;
    var shortLength = rsBytes < MAX_OCTET;
    var dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);
    var offset = 0;
    dst[offset++] = ENCODED_TAG_SEQ;
    if (shortLength) {
        // Bit 8 has value "0"
        // bits 7-1 give the length.
        dst[offset++] = rsBytes;
    } else {
        // Bit 8 of first octet has value "1"
        // bits 7-1 give the number of additional length octets.
        dst[offset++] = MAX_OCTET | 1;
        // length, base 256
        dst[offset++] = rsBytes & 0xff;
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = rLength;
    if (rPadding < 0) {
        dst[offset++] = 0;
        offset += signature.copy(dst, offset, 0, paramBytes);
    } else {
        offset += signature.copy(dst, offset, rPadding, paramBytes);
    }
    dst[offset++] = ENCODED_TAG_INT;
    dst[offset++] = sLength;
    if (sPadding < 0) {
        dst[offset++] = 0;
        signature.copy(dst, offset, paramBytes);
    } else {
        signature.copy(dst, offset, paramBytes + sPadding);
    }
    return dst;
}
module.exports = {
    derToJose: derToJose,
    joseToDer: joseToDer
};
}}),
"[project]/node_modules/buffer-equal-constant-time/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*jshint node:true */ 'use strict';
var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer; // browserify
var SlowBuffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").SlowBuffer;
module.exports = bufferEq;
function bufferEq(a, b) {
    // shortcutting on type is necessary for correctness
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        return false;
    }
    // buffer sizes should be well-known information, so despite this
    // shortcutting, it doesn't leak any information about the *contents* of the
    // buffers.
    if (a.length !== b.length) {
        return false;
    }
    var c = 0;
    for(var i = 0; i < a.length; i++){
        /*jshint bitwise:false */ c |= a[i] ^ b[i]; // XOR
    }
    return c === 0;
}
bufferEq.install = function() {
    Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {
        return bufferEq(this, that);
    };
};
var origBufEqual = Buffer.prototype.equal;
var origSlowBufEqual = SlowBuffer.prototype.equal;
bufferEq.restore = function() {
    Buffer.prototype.equal = origBufEqual;
    SlowBuffer.prototype.equal = origSlowBufEqual;
};
}}),
"[project]/node_modules/jwa/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var crypto = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
var formatEcdsa = __turbopack_context__.r("[project]/node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var MSG_INVALID_ALGORITHM = '"%s" is not a valid algorithm.\n  Supported algorithms are:\n  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".';
var MSG_INVALID_SECRET = 'secret must be a string or buffer';
var MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';
var MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';
var supportsKeyObjects = typeof crypto.createPublicKey === 'function';
if (supportsKeyObjects) {
    MSG_INVALID_VERIFIER_KEY += ' or a KeyObject';
    MSG_INVALID_SECRET += 'or a KeyObject';
}
function checkIsPublicKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return;
    }
    if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.type !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.asymmetricKeyType !== 'string') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
    if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_VERIFIER_KEY);
    }
}
;
function checkIsPrivateKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return;
    }
    if (typeof key === 'object') {
        return;
    }
    throw typeError(MSG_INVALID_SIGNER_KEY);
}
;
function checkIsSecretKey(key) {
    if (Buffer.isBuffer(key)) {
        return;
    }
    if (typeof key === 'string') {
        return key;
    }
    if (!supportsKeyObjects) {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key !== 'object') {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (key.type !== 'secret') {
        throw typeError(MSG_INVALID_SECRET);
    }
    if (typeof key.export !== 'function') {
        throw typeError(MSG_INVALID_SECRET);
    }
}
function fromBase64(base64) {
    return base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function toBase64(base64url) {
    base64url = base64url.toString();
    var padding = 4 - base64url.length % 4;
    if (padding !== 4) {
        for(var i = 0; i < padding; ++i){
            base64url += '=';
        }
    }
    return base64url.replace(/\-/g, '+').replace(/_/g, '/');
}
function typeError(template) {
    var args = [].slice.call(arguments, 1);
    var errMsg = util.format.bind(util, template).apply(null, args);
    return new TypeError(errMsg);
}
function bufferOrString(obj) {
    return Buffer.isBuffer(obj) || typeof obj === 'string';
}
function normalizeInput(thing) {
    if (!bufferOrString(thing)) thing = JSON.stringify(thing);
    return thing;
}
function createHmacSigner(bits) {
    return function sign(thing, secret) {
        checkIsSecretKey(secret);
        thing = normalizeInput(thing);
        var hmac = crypto.createHmac('sha' + bits, secret);
        var sig = (hmac.update(thing), hmac.digest('base64'));
        return fromBase64(sig);
    };
}
var bufferEqual;
var timingSafeEqual = 'timingSafeEqual' in crypto ? function timingSafeEqual(a, b) {
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    return crypto.timingSafeEqual(a, b);
} : function timingSafeEqual(a, b) {
    if (!bufferEqual) {
        bufferEqual = __turbopack_context__.r("[project]/node_modules/buffer-equal-constant-time/index.js [app-rsc] (ecmascript)");
    }
    return bufferEqual(a, b);
};
function createHmacVerifier(bits) {
    return function verify(thing, signature, secret) {
        var computedSig = createHmacSigner(bits)(thing, secret);
        return timingSafeEqual(Buffer.from(signature), Buffer.from(computedSig));
    };
}
function createKeySigner(bits) {
    return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        // Even though we are specifying "RSA" here, this works with ECDSA
        // keys as well.
        var signer = crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));
        return fromBase64(sig);
    };
}
function createKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify(publicKey, signature, 'base64');
    };
}
function createPSSKeySigner(bits) {
    return function sign(thing, privateKey) {
        checkIsPrivateKey(privateKey);
        thing = normalizeInput(thing);
        var signer = crypto.createSign('RSA-SHA' + bits);
        var sig = (signer.update(thing), signer.sign({
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, 'base64'));
        return fromBase64(sig);
    };
}
function createPSSKeyVerifier(bits) {
    return function verify(thing, signature, publicKey) {
        checkIsPublicKey(publicKey);
        thing = normalizeInput(thing);
        signature = toBase64(signature);
        var verifier = crypto.createVerify('RSA-SHA' + bits);
        verifier.update(thing);
        return verifier.verify({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
            saltLength: crypto.constants.RSA_PSS_SALTLEN_DIGEST
        }, signature, 'base64');
    };
}
function createECDSASigner(bits) {
    var inner = createKeySigner(bits);
    return function sign() {
        var signature = inner.apply(null, arguments);
        signature = formatEcdsa.derToJose(signature, 'ES' + bits);
        return signature;
    };
}
function createECDSAVerifer(bits) {
    var inner = createKeyVerifier(bits);
    return function verify(thing, signature, publicKey) {
        signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');
        var result = inner(thing, signature, publicKey);
        return result;
    };
}
function createNoneSigner() {
    return function sign() {
        return '';
    };
}
function createNoneVerifier() {
    return function verify(thing, signature) {
        return signature === '';
    };
}
module.exports = function jwa(algorithm) {
    var signerFactories = {
        hs: createHmacSigner,
        rs: createKeySigner,
        ps: createPSSKeySigner,
        es: createECDSASigner,
        none: createNoneSigner
    };
    var verifierFactories = {
        hs: createHmacVerifier,
        rs: createKeyVerifier,
        ps: createPSSKeyVerifier,
        es: createECDSAVerifer,
        none: createNoneVerifier
    };
    var match = algorithm.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
    if (!match) throw typeError(MSG_INVALID_ALGORITHM, algorithm);
    var algo = (match[1] || match[3]).toLowerCase();
    var bits = match[2];
    return {
        sign: signerFactories[algo](bits),
        verify: verifierFactories[algo](bits)
    };
};
}}),
"[project]/node_modules/jws/lib/tostring.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*global module*/ var Buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)").Buffer;
module.exports = function toString(obj) {
    if (typeof obj === 'string') return obj;
    if (typeof obj === 'number' || Buffer.isBuffer(obj)) return obj.toString();
    return JSON.stringify(obj);
};
}}),
"[project]/node_modules/jws/lib/sign-stream.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*global module*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var DataStream = __turbopack_context__.r("[project]/node_modules/jws/lib/data-stream.js [app-rsc] (ecmascript)");
var jwa = __turbopack_context__.r("[project]/node_modules/jwa/index.js [app-rsc] (ecmascript)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var toString = __turbopack_context__.r("[project]/node_modules/jws/lib/tostring.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
function base64url(string, encoding) {
    return Buffer.from(string, encoding).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function jwsSecuredInput(header, payload, encoding) {
    encoding = encoding || 'utf8';
    var encodedHeader = base64url(toString(header), 'binary');
    var encodedPayload = base64url(toString(payload), encoding);
    return util.format('%s.%s', encodedHeader, encodedPayload);
}
function jwsSign(opts) {
    var header = opts.header;
    var payload = opts.payload;
    var secretOrKey = opts.secret || opts.privateKey;
    var encoding = opts.encoding;
    var algo = jwa(header.alg);
    var securedInput = jwsSecuredInput(header, payload, encoding);
    var signature = algo.sign(securedInput, secretOrKey);
    return util.format('%s.%s', securedInput, signature);
}
function SignStream(opts) {
    var secret = opts.secret || opts.privateKey || opts.key;
    var secretStream = new DataStream(secret);
    this.readable = true;
    this.header = opts.header;
    this.encoding = opts.encoding;
    this.secret = this.privateKey = this.key = secretStream;
    this.payload = new DataStream(opts.payload);
    this.secret.once('close', (function() {
        if (!this.payload.writable && this.readable) this.sign();
    }).bind(this));
    this.payload.once('close', (function() {
        if (!this.secret.writable && this.readable) this.sign();
    }).bind(this));
}
util.inherits(SignStream, Stream);
SignStream.prototype.sign = function sign() {
    try {
        var signature = jwsSign({
            header: this.header,
            payload: this.payload.buffer,
            secret: this.secret.buffer,
            encoding: this.encoding
        });
        this.emit('done', signature);
        this.emit('data', signature);
        this.emit('end');
        this.readable = false;
        return signature;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
SignStream.sign = jwsSign;
module.exports = SignStream;
}}),
"[project]/node_modules/jws/lib/verify-stream.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*global module*/ var Buffer = __turbopack_context__.r("[project]/node_modules/safe-buffer/index.js [app-rsc] (ecmascript)").Buffer;
var DataStream = __turbopack_context__.r("[project]/node_modules/jws/lib/data-stream.js [app-rsc] (ecmascript)");
var jwa = __turbopack_context__.r("[project]/node_modules/jwa/index.js [app-rsc] (ecmascript)");
var Stream = __turbopack_context__.r("[externals]/stream [external] (stream, cjs)");
var toString = __turbopack_context__.r("[project]/node_modules/jws/lib/tostring.js [app-rsc] (ecmascript)");
var util = __turbopack_context__.r("[externals]/util [external] (util, cjs)");
var JWS_REGEX = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function isObject(thing) {
    return Object.prototype.toString.call(thing) === '[object Object]';
}
function safeJsonParse(thing) {
    if (isObject(thing)) return thing;
    try {
        return JSON.parse(thing);
    } catch (e) {
        return undefined;
    }
}
function headerFromJWS(jwsSig) {
    var encodedHeader = jwsSig.split('.', 1)[0];
    return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));
}
function securedInputFromJWS(jwsSig) {
    return jwsSig.split('.', 2).join('.');
}
function signatureFromJWS(jwsSig) {
    return jwsSig.split('.')[2];
}
function payloadFromJWS(jwsSig, encoding) {
    encoding = encoding || 'utf8';
    var payload = jwsSig.split('.')[1];
    return Buffer.from(payload, 'base64').toString(encoding);
}
function isValidJws(string) {
    return JWS_REGEX.test(string) && !!headerFromJWS(string);
}
function jwsVerify(jwsSig, algorithm, secretOrKey) {
    if (!algorithm) {
        var err = new Error("Missing algorithm parameter for jws.verify");
        err.code = "MISSING_ALGORITHM";
        throw err;
    }
    jwsSig = toString(jwsSig);
    var signature = signatureFromJWS(jwsSig);
    var securedInput = securedInputFromJWS(jwsSig);
    var algo = jwa(algorithm);
    return algo.verify(securedInput, signature, secretOrKey);
}
function jwsDecode(jwsSig, opts) {
    opts = opts || {};
    jwsSig = toString(jwsSig);
    if (!isValidJws(jwsSig)) return null;
    var header = headerFromJWS(jwsSig);
    if (!header) return null;
    var payload = payloadFromJWS(jwsSig);
    if (header.typ === 'JWT' || opts.json) payload = JSON.parse(payload, opts.encoding);
    return {
        header: header,
        payload: payload,
        signature: signatureFromJWS(jwsSig)
    };
}
function VerifyStream(opts) {
    opts = opts || {};
    var secretOrKey = opts.secret || opts.publicKey || opts.key;
    var secretStream = new DataStream(secretOrKey);
    this.readable = true;
    this.algorithm = opts.algorithm;
    this.encoding = opts.encoding;
    this.secret = this.publicKey = this.key = secretStream;
    this.signature = new DataStream(opts.signature);
    this.secret.once('close', (function() {
        if (!this.signature.writable && this.readable) this.verify();
    }).bind(this));
    this.signature.once('close', (function() {
        if (!this.secret.writable && this.readable) this.verify();
    }).bind(this));
}
util.inherits(VerifyStream, Stream);
VerifyStream.prototype.verify = function verify() {
    try {
        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);
        var obj = jwsDecode(this.signature.buffer, this.encoding);
        this.emit('done', valid, obj);
        this.emit('data', valid);
        this.emit('end');
        this.readable = false;
        return valid;
    } catch (e) {
        this.readable = false;
        this.emit('error', e);
        this.emit('close');
    }
};
VerifyStream.decode = jwsDecode;
VerifyStream.isValid = isValidJws;
VerifyStream.verify = jwsVerify;
module.exports = VerifyStream;
}}),
"[project]/node_modules/jws/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/*global exports*/ var SignStream = __turbopack_context__.r("[project]/node_modules/jws/lib/sign-stream.js [app-rsc] (ecmascript)");
var VerifyStream = __turbopack_context__.r("[project]/node_modules/jws/lib/verify-stream.js [app-rsc] (ecmascript)");
var ALGORITHMS = [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
    'PS256',
    'PS384',
    'PS512',
    'ES256',
    'ES384',
    'ES512'
];
exports.ALGORITHMS = ALGORITHMS;
exports.sign = SignStream.sign;
exports.verify = VerifyStream.verify;
exports.decode = VerifyStream.decode;
exports.isValid = VerifyStream.isValid;
exports.createSign = function createSign(opts) {
    return new SignStream(opts);
};
exports.createVerify = function createVerify(opts) {
    return new VerifyStream(opts);
};
}}),
"[project]/node_modules/jsonwebtoken/decode.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-rsc] (ecmascript)");
module.exports = function(jwt, options) {
    options = options || {};
    var decoded = jws.decode(jwt, options);
    if (!decoded) {
        return null;
    }
    var payload = decoded.payload;
    //try parse the payload
    if (typeof payload === 'string') {
        try {
            var obj = JSON.parse(payload);
            if (obj !== null && typeof obj === 'object') {
                payload = obj;
            }
        } catch (e) {}
    }
    //return header if `complete` option is enabled.  header includes claims
    //such as `kid` and `alg` used to select the key within a JWKS needed to
    //verify the signature
    if (options.complete === true) {
        return {
            header: decoded.header,
            payload: payload,
            signature: decoded.signature
        };
    }
    return payload;
};
}}),
"[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var JsonWebTokenError = function(message, error) {
    Error.call(this, message);
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }
    this.name = 'JsonWebTokenError';
    this.message = message;
    if (error) this.inner = error;
};
JsonWebTokenError.prototype = Object.create(Error.prototype);
JsonWebTokenError.prototype.constructor = JsonWebTokenError;
module.exports = JsonWebTokenError;
}}),
"[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)");
var NotBeforeError = function(message, date) {
    JsonWebTokenError.call(this, message);
    this.name = 'NotBeforeError';
    this.date = date;
};
NotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);
NotBeforeError.prototype.constructor = NotBeforeError;
module.exports = NotBeforeError;
}}),
"[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)");
var TokenExpiredError = function(message, expiredAt) {
    JsonWebTokenError.call(this, message);
    this.name = 'TokenExpiredError';
    this.expiredAt = expiredAt;
};
TokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);
TokenExpiredError.prototype.constructor = TokenExpiredError;
module.exports = TokenExpiredError;
}}),
"[project]/node_modules/ms/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === 'string' && val.length > 0) {
        return parse(val);
    } else if (type === 'number' && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) {
        return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
        return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || 'ms').toLowerCase();
    switch(type){
        case 'years':
        case 'year':
        case 'yrs':
        case 'yr':
        case 'y':
            return n * y;
        case 'weeks':
        case 'week':
        case 'w':
            return n * w;
        case 'days':
        case 'day':
        case 'd':
            return n * d;
        case 'hours':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return n * h;
        case 'minutes':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return n * m;
        case 'seconds':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return n * s;
        case 'milliseconds':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return Math.round(ms / d) + 'd';
    }
    if (msAbs >= h) {
        return Math.round(ms / h) + 'h';
    }
    if (msAbs >= m) {
        return Math.round(ms / m) + 'm';
    }
    if (msAbs >= s) {
        return Math.round(ms / s) + 's';
    }
    return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
        return plural(ms, msAbs, d, 'day');
    }
    if (msAbs >= h) {
        return plural(ms, msAbs, h, 'hour');
    }
    if (msAbs >= m) {
        return plural(ms, msAbs, m, 'minute');
    }
    if (msAbs >= s) {
        return plural(ms, msAbs, s, 'second');
    }
    return ms + ' ms';
}
/**
 * Pluralization helper.
 */ function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}
}}),
"[project]/node_modules/jsonwebtoken/lib/timespan.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var ms = __turbopack_context__.r("[project]/node_modules/ms/index.js [app-rsc] (ecmascript)");
module.exports = function(time, iat) {
    var timestamp = iat || Math.floor(Date.now() / 1000);
    if (typeof time === 'string') {
        var milliseconds = ms(time);
        if (typeof milliseconds === 'undefined') {
            return;
        }
        return Math.floor(timestamp + milliseconds / 1000);
    } else if (typeof time === 'number') {
        return timestamp + time;
    } else {
        return;
    }
};
}}),
"[project]/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// Note: this is the semver.org version of the spec that it implements
// Not necessarily the package version of this code.
const SEMVER_SPEC_VERSION = '2.0.0';
const MAX_LENGTH = 256;
const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */ 9007199254740991;
// Max safe segment length for coercion.
const MAX_SAFE_COMPONENT_LENGTH = 16;
// Max safe length for a build identifier. The max length minus 6 characters for
// the shortest version with a build 0.0.0+BUILD.
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
const RELEASE_TYPES = [
    'major',
    'premajor',
    'minor',
    'preminor',
    'patch',
    'prepatch',
    'prerelease'
];
module.exports = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 0b001,
    FLAG_LOOSE: 0b010
};
}}),
"[project]/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const debug = typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args)=>console.error('SEMVER', ...args) : ()=>{};
module.exports = debug;
}}),
"[project]/node_modules/semver/internal/re.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
exports = module.exports = {};
// The actual regexps go on exports.re
const re = exports.re = [];
const safeRe = exports.safeRe = [];
const src = exports.src = [];
const safeSrc = exports.safeSrc = [];
const t = exports.t = {};
let R = 0;
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
// Replace some greedy regex tokens to prevent regex dos issues. These regex are
// used internally via the safeRe object since all inputs in this library get
// normalized first to trim and collapse all extra whitespace. The original
// regexes are exported for userland consumption and lower level usage. A
// future breaking change could export the safer regex only with a note that
// all input should have extra whitespace removed.
const safeRegexReplacements = [
    [
        '\\s',
        1
    ],
    [
        '\\d',
        MAX_LENGTH
    ],
    [
        LETTERDASHNUMBER,
        MAX_SAFE_BUILD_LENGTH
    ]
];
const makeSafeRegex = (value)=>{
    for (const [token, max] of safeRegexReplacements){
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
};
const createToken = (name, value, isGlobal)=>{
    const safe = makeSafeRegex(value);
    const index = R++;
    debug(name, index, value);
    t[name] = index;
    src[index] = value;
    safeSrc[index] = safe;
    re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    safeRe[index] = new RegExp(safe, isGlobal ? 'g' : undefined);
};
// The following Regular Expressions can be used for tokenizing,
// validating, and parsing SemVer version strings.
// ## Numeric Identifier
// A single `0`, or a non-zero digit followed by zero or more digits.
createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
createToken('NUMERICIDENTIFIERLOOSE', '\\d+');
// ## Non-numeric Identifier
// Zero or more digits, followed by a letter or hyphen, and then zero or
// more letters, digits, or hyphens.
createToken('NONNUMERICIDENTIFIER', `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
// ## Main Version
// Three dot-separated numeric identifiers.
createToken('MAINVERSION', `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})\\.` + `(${src[t.NUMERICIDENTIFIER]})`);
createToken('MAINVERSIONLOOSE', `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.` + `(${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version Identifier
// A numeric identifier, or a non-numeric identifier.
// Non-numberic identifiers include numberic identifiers but can be longer.
// Therefore non-numberic identifiers must go first.
createToken('PRERELEASEIDENTIFIER', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
createToken('PRERELEASEIDENTIFIERLOOSE', `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
// ## Pre-release Version
// Hyphen, followed by one or more dot-separated pre-release version
// identifiers.
createToken('PRERELEASE', `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
createToken('PRERELEASELOOSE', `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
// ## Build Metadata Identifier
// Any combination of digits, letters, or hyphens.
createToken('BUILDIDENTIFIER', `${LETTERDASHNUMBER}+`);
// ## Build Metadata
// Plus sign, followed by one or more period-separated build metadata
// identifiers.
createToken('BUILD', `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
// ## Full Version String
// A main version, followed optionally by a pre-release version and
// build metadata.
// Note that the only major, minor, patch, and pre-release sections of
// the version string are capturing groups.  The build metadata is not a
// capturing group, because it should not ever be used in version
// comparison.
createToken('FULLPLAIN', `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
createToken('FULL', `^${src[t.FULLPLAIN]}$`);
// like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
// also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
// common in the npm registry.
createToken('LOOSEPLAIN', `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
createToken('LOOSE', `^${src[t.LOOSEPLAIN]}$`);
createToken('GTLT', '((?:<|>)?=?)');
// Something like "2.*" or "1.2.x".
// Note that "x.x" is a valid xRange identifer, meaning "any version"
// Only the first item is strictly required.
createToken('XRANGEIDENTIFIERLOOSE', `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
createToken('XRANGEIDENTIFIER', `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
createToken('XRANGEPLAIN', `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:\\.(${src[t.XRANGEIDENTIFIER]})` + `(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGEPLAINLOOSE', `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})` + `(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?` + `)?)?`);
createToken('XRANGE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
createToken('XRANGELOOSE', `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
// Coercion.
// Extract anything that could conceivably be a part of a valid semver
createToken('COERCEPLAIN', `${'(^|[^\\d])' + '(\\d{1,'}${MAX_SAFE_COMPONENT_LENGTH}})` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?` + `(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
createToken('COERCE', `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
createToken('COERCEFULL', src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?` + `(?:${src[t.BUILD]})?` + `(?:$|[^\\d])`);
createToken('COERCERTL', src[t.COERCE], true);
createToken('COERCERTLFULL', src[t.COERCEFULL], true);
// Tilde ranges.
// Meaning is "reasonably at or greater than"
createToken('LONETILDE', '(?:~>?)');
createToken('TILDETRIM', `(\\s*)${src[t.LONETILDE]}\\s+`, true);
exports.tildeTrimReplace = '$1~';
createToken('TILDE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
createToken('TILDELOOSE', `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
// Caret ranges.
// Meaning is "at least and backwards compatible with"
createToken('LONECARET', '(?:\\^)');
createToken('CARETTRIM', `(\\s*)${src[t.LONECARET]}\\s+`, true);
exports.caretTrimReplace = '$1^';
createToken('CARET', `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
createToken('CARETLOOSE', `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
// A simple gt/lt/eq thing, or just "" to indicate "any version"
createToken('COMPARATORLOOSE', `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
createToken('COMPARATOR', `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
// An expression to strip any whitespace between the gtlt and the thing
// it modifies, so that `> 1.2.3` ==> `>1.2.3`
createToken('COMPARATORTRIM', `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
exports.comparatorTrimReplace = '$1$2$3';
// Something like `1.2.3 - 1.2.4`
// Note that these all use the loose form, because they'll be
// checked against either the strict or loose comparator form
// later.
createToken('HYPHENRANGE', `^\\s*(${src[t.XRANGEPLAIN]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAIN]})` + `\\s*$`);
createToken('HYPHENRANGELOOSE', `^\\s*(${src[t.XRANGEPLAINLOOSE]})` + `\\s+-\\s+` + `(${src[t.XRANGEPLAINLOOSE]})` + `\\s*$`);
// Star ranges basically just allow anything at all.
createToken('STAR', '(<|>)?=?\\s*\\*');
// >=0.0.0 is like a star
createToken('GTE0', '^\\s*>=\\s*0\\.0\\.0\\s*$');
createToken('GTE0PRE', '^\\s*>=\\s*0\\.0\\.0-0\\s*$');
}}),
"[project]/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// parse out just the options we care about
const looseOption = Object.freeze({
    loose: true
});
const emptyOpts = Object.freeze({});
const parseOptions = (options)=>{
    if (!options) {
        return emptyOpts;
    }
    if (typeof options !== 'object') {
        return looseOption;
    }
    return options;
};
module.exports = parseOptions;
}}),
"[project]/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const numeric = /^[0-9]+$/;
const compareIdentifiers = (a, b)=>{
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
        a = +a;
        b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
};
const rcompareIdentifiers = (a, b)=>compareIdentifiers(b, a);
module.exports = {
    compareIdentifiers,
    rcompareIdentifiers
};
}}),
"[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const { MAX_LENGTH, MAX_SAFE_INTEGER } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const { compareIdentifiers } = __turbopack_context__.r("[project]/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)");
class SemVer {
    constructor(version, options){
        options = parseOptions(options);
        if (version instanceof SemVer) {
            if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
                return version;
            } else {
                version = version.version;
            }
        } else if (typeof version !== 'string') {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
        }
        if (version.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        debug('SemVer', version, options);
        this.options = options;
        this.loose = !!options.loose;
        // this isn't actually relevant for versions, but keep it so that we
        // don't run into trouble passing this.options around.
        this.includePrerelease = !!options.includePrerelease;
        const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
        if (!m) {
            throw new TypeError(`Invalid Version: ${version}`);
        }
        this.raw = version;
        // these are actually numbers
        this.major = +m[1];
        this.minor = +m[2];
        this.patch = +m[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError('Invalid major version');
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError('Invalid minor version');
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError('Invalid patch version');
        }
        // numberify any prerelease numeric ids
        if (!m[4]) {
            this.prerelease = [];
        } else {
            this.prerelease = m[4].split('.').map((id)=>{
                if (/^[0-9]+$/.test(id)) {
                    const num = +id;
                    if (num >= 0 && num < MAX_SAFE_INTEGER) {
                        return num;
                    }
                }
                return id;
            });
        }
        this.build = m[5] ? m[5].split('.') : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join('.')}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(other) {
        debug('SemVer.compare', this.version, this.options, other);
        if (!(other instanceof SemVer)) {
            if (typeof other === 'string' && other === this.version) {
                return 0;
            }
            other = new SemVer(other, this.options);
        }
        if (other.version === this.version) {
            return 0;
        }
        return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
    }
    comparePre(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        // NOT having a prerelease is > having one
        if (this.prerelease.length && !other.prerelease.length) {
            return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
            return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
            return 0;
        }
        let i = 0;
        do {
            const a = this.prerelease[i];
            const b = other.prerelease[i];
            debug('prerelease compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    compareBuild(other) {
        if (!(other instanceof SemVer)) {
            other = new SemVer(other, this.options);
        }
        let i = 0;
        do {
            const a = this.build[i];
            const b = other.build[i];
            debug('build compare', i, a, b);
            if (a === undefined && b === undefined) {
                return 0;
            } else if (b === undefined) {
                return 1;
            } else if (a === undefined) {
                return -1;
            } else if (a === b) {
                continue;
            } else {
                return compareIdentifiers(a, b);
            }
        }while (++i)
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
        if (release.startsWith('pre')) {
            if (!identifier && identifierBase === false) {
                throw new Error('invalid increment argument: identifier is empty');
            }
            // Avoid an invalid semver results
            if (identifier) {
                const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
                if (!match || match[1] !== identifier) {
                    throw new Error(`invalid identifier: ${identifier}`);
                }
            }
        }
        switch(release){
            case 'premajor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'preminor':
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc('pre', identifier, identifierBase);
                break;
            case 'prepatch':
                // If this is already a prerelease, it will bump to the next version
                // drop any prereleases that might already exist, since they are not
                // relevant at this point.
                this.prerelease.length = 0;
                this.inc('patch', identifier, identifierBase);
                this.inc('pre', identifier, identifierBase);
                break;
            // If the input is a non-prerelease version, this acts the same as
            // prepatch.
            case 'prerelease':
                if (this.prerelease.length === 0) {
                    this.inc('patch', identifier, identifierBase);
                }
                this.inc('pre', identifier, identifierBase);
                break;
            case 'release':
                if (this.prerelease.length === 0) {
                    throw new Error(`version ${this.raw} is not a prerelease`);
                }
                this.prerelease.length = 0;
                break;
            case 'major':
                // If this is a pre-major version, bump up to the same major version.
                // Otherwise increment major.
                // 1.0.0-5 bumps to 1.0.0
                // 1.1.0 bumps to 2.0.0
                if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'minor':
                // If this is a pre-minor version, bump up to the same minor version.
                // Otherwise increment minor.
                // 1.2.0-5 bumps to 1.2.0
                // 1.2.1 bumps to 1.3.0
                if (this.patch !== 0 || this.prerelease.length === 0) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case 'patch':
                // If this is not a pre-release version, it will increment the patch.
                // If it is a pre-release it will bump up to the same patch version.
                // 1.2.0-5 patches to 1.2.0
                // 1.2.0 patches to 1.2.1
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            // This probably shouldn't be used publicly.
            // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
            case 'pre':
                {
                    const base = Number(identifierBase) ? 1 : 0;
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            base
                        ];
                    } else {
                        let i = this.prerelease.length;
                        while(--i >= 0){
                            if (typeof this.prerelease[i] === 'number') {
                                this.prerelease[i]++;
                                i = -2;
                            }
                        }
                        if (i === -1) {
                            // didn't increment anything
                            if (identifier === this.prerelease.join('.') && identifierBase === false) {
                                throw new Error('invalid increment argument: identifier already exists');
                            }
                            this.prerelease.push(base);
                        }
                    }
                    if (identifier) {
                        // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
                        // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
                        let prerelease = [
                            identifier,
                            base
                        ];
                        if (identifierBase === false) {
                            prerelease = [
                                identifier
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = prerelease;
                            }
                        } else {
                            this.prerelease = prerelease;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${release}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join('.')}`;
        }
        return this;
    }
}
module.exports = SemVer;
}}),
"[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const parse = (version, options, throwErrors = false)=>{
    if (version instanceof SemVer) {
        return version;
    }
    try {
        return new SemVer(version, options);
    } catch (er) {
        if (!throwErrors) {
            return null;
        }
        throw er;
    }
};
module.exports = parse;
}}),
"[project]/node_modules/semver/functions/valid.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const valid = (version, options)=>{
    const v = parse(version, options);
    return v ? v.version : null;
};
module.exports = valid;
}}),
"[project]/node_modules/semver/functions/clean.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const clean = (version, options)=>{
    const s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
};
module.exports = clean;
}}),
"[project]/node_modules/semver/functions/inc.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const inc = (version, release, options, identifier, identifierBase)=>{
    if (typeof options === 'string') {
        identifierBase = identifier;
        identifier = options;
        options = undefined;
    }
    try {
        return new SemVer(version instanceof SemVer ? version.version : version, options).inc(release, identifier, identifierBase).version;
    } catch (er) {
        return null;
    }
};
module.exports = inc;
}}),
"[project]/node_modules/semver/functions/diff.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const diff = (version1, version2)=>{
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
        return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
        // Going from prerelease -> no prerelease requires some special casing
        // If the low version has only a major, then it will always be a major
        // Some examples:
        // 1.0.0-1 -> 1.0.0
        // 1.0.0-1 -> 1.1.1
        // 1.0.0-1 -> 2.0.0
        if (!lowVersion.patch && !lowVersion.minor) {
            return 'major';
        }
        // If the main part has no difference
        if (lowVersion.compareMain(highVersion) === 0) {
            if (lowVersion.minor && !lowVersion.patch) {
                return 'minor';
            }
            return 'patch';
        }
    }
    // add the `pre` prefix if we are going to a prerelease version
    const prefix = highHasPre ? 'pre' : '';
    if (v1.major !== v2.major) {
        return prefix + 'major';
    }
    if (v1.minor !== v2.minor) {
        return prefix + 'minor';
    }
    if (v1.patch !== v2.patch) {
        return prefix + 'patch';
    }
    // high and low are preleases
    return 'prerelease';
};
module.exports = diff;
}}),
"[project]/node_modules/semver/functions/major.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const major = (a, loose)=>new SemVer(a, loose).major;
module.exports = major;
}}),
"[project]/node_modules/semver/functions/minor.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const minor = (a, loose)=>new SemVer(a, loose).minor;
module.exports = minor;
}}),
"[project]/node_modules/semver/functions/patch.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const patch = (a, loose)=>new SemVer(a, loose).patch;
module.exports = patch;
}}),
"[project]/node_modules/semver/functions/prerelease.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const prerelease = (version, options)=>{
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
};
module.exports = prerelease;
}}),
"[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const compare = (a, b, loose)=>new SemVer(a, loose).compare(new SemVer(b, loose));
module.exports = compare;
}}),
"[project]/node_modules/semver/functions/rcompare.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const rcompare = (a, b, loose)=>compare(b, a, loose);
module.exports = rcompare;
}}),
"[project]/node_modules/semver/functions/compare-loose.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const compareLoose = (a, b)=>compare(a, b, true);
module.exports = compareLoose;
}}),
"[project]/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const compareBuild = (a, b, loose)=>{
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
};
module.exports = compareBuild;
}}),
"[project]/node_modules/semver/functions/sort.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const sort = (list, loose)=>list.sort((a, b)=>compareBuild(a, b, loose));
module.exports = sort;
}}),
"[project]/node_modules/semver/functions/rsort.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const rsort = (list, loose)=>list.sort((a, b)=>compareBuild(b, a, loose));
module.exports = rsort;
}}),
"[project]/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const gt = (a, b, loose)=>compare(a, b, loose) > 0;
module.exports = gt;
}}),
"[project]/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const lt = (a, b, loose)=>compare(a, b, loose) < 0;
module.exports = lt;
}}),
"[project]/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const eq = (a, b, loose)=>compare(a, b, loose) === 0;
module.exports = eq;
}}),
"[project]/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const neq = (a, b, loose)=>compare(a, b, loose) !== 0;
module.exports = neq;
}}),
"[project]/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const gte = (a, b, loose)=>compare(a, b, loose) >= 0;
module.exports = gte;
}}),
"[project]/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const lte = (a, b, loose)=>compare(a, b, loose) <= 0;
module.exports = lte;
}}),
"[project]/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const eq = __turbopack_context__.r("[project]/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const cmp = (a, op, b, loose)=>{
    switch(op){
        case '===':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a === b;
        case '!==':
            if (typeof a === 'object') {
                a = a.version;
            }
            if (typeof b === 'object') {
                b = b.version;
            }
            return a !== b;
        case '':
        case '=':
        case '==':
            return eq(a, b, loose);
        case '!=':
            return neq(a, b, loose);
        case '>':
            return gt(a, b, loose);
        case '>=':
            return gte(a, b, loose);
        case '<':
            return lt(a, b, loose);
        case '<=':
            return lte(a, b, loose);
        default:
            throw new TypeError(`Invalid operator: ${op}`);
    }
};
module.exports = cmp;
}}),
"[project]/node_modules/semver/functions/coerce.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const coerce = (version, options)=>{
    if (version instanceof SemVer) {
        return version;
    }
    if (typeof version === 'number') {
        version = String(version);
    }
    if (typeof version !== 'string') {
        return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
        match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
    } else {
        // Find the right-most coercible string that does not share
        // a terminus with a more left-ward coercible string.
        // Eg, '1.2.3.4' wants to coerce '2.3.4', not '3.4' or '4'
        // With includePrerelease option set, '1.2.3.4-rc' wants to coerce '2.3.4-rc', not '2.3.4'
        //
        // Walk through the string checking with a /g regexp
        // Manually set the index so as to pick up overlapping matches.
        // Stop when we get a match that ends at the string end, since no
        // coercible string can be more right-ward without the same terminus.
        const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
        let next;
        while((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)){
            if (!match || next.index + next[0].length !== match.index + match[0].length) {
                match = next;
            }
            coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
        }
        // leave it in a clean state
        coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
        return null;
    }
    const major = match[2];
    const minor = match[3] || '0';
    const patch = match[4] || '0';
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : '';
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : '';
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
};
module.exports = coerce;
}}),
"[project]/node_modules/semver/internal/lrucache.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
class LRUCache {
    constructor(){
        this.max = 1000;
        this.map = new Map();
    }
    get(key) {
        const value = this.map.get(key);
        if (value === undefined) {
            return undefined;
        } else {
            // Remove the key from the map and add it to the end
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
    }
    delete(key) {
        return this.map.delete(key);
    }
    set(key, value) {
        const deleted = this.delete(key);
        if (!deleted && value !== undefined) {
            // If cache is full, delete the least recently used item
            if (this.map.size >= this.max) {
                const firstKey = this.map.keys().next().value;
                this.delete(firstKey);
            }
            this.map.set(key, value);
        }
        return this;
    }
}
module.exports = LRUCache;
}}),
"[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SPACE_CHARACTERS = /\s+/g;
// hoisted class for cyclic dependency
class Range {
    constructor(range, options){
        options = parseOptions(options);
        if (range instanceof Range) {
            if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
                return range;
            } else {
                return new Range(range.raw, options);
            }
        }
        if (range instanceof Comparator) {
            // just put it in the set and return
            this.raw = range.value;
            this.set = [
                [
                    range
                ]
            ];
            this.formatted = undefined;
            return this;
        }
        this.options = options;
        this.loose = !!options.loose;
        this.includePrerelease = !!options.includePrerelease;
        // First reduce all whitespace as much as possible so we do not have to rely
        // on potentially slow regexes like \s*. This is then stored and used for
        // future error messages as well.
        this.raw = range.trim().replace(SPACE_CHARACTERS, ' ');
        // First, split on ||
        this.set = this.raw.split('||')// map the range to a 2d array of comparators
        .map((r)=>this.parseRange(r.trim()))// throw out any comparator lists that are empty
        // this generally means that it was not a valid range, which is allowed
        // in loose mode, but will still throw if the WHOLE range is invalid.
        .filter((c)=>c.length);
        if (!this.set.length) {
            throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
        }
        // if we have any that are not the null set, throw out null sets.
        if (this.set.length > 1) {
            // keep the first one, in case they're all null sets
            const first = this.set[0];
            this.set = this.set.filter((c)=>!isNullSet(c[0]));
            if (this.set.length === 0) {
                this.set = [
                    first
                ];
            } else if (this.set.length > 1) {
                // if we have any that are *, then the range is just *
                for (const c of this.set){
                    if (c.length === 1 && isAny(c[0])) {
                        this.set = [
                            c
                        ];
                        break;
                    }
                }
            }
        }
        this.formatted = undefined;
    }
    get range() {
        if (this.formatted === undefined) {
            this.formatted = '';
            for(let i = 0; i < this.set.length; i++){
                if (i > 0) {
                    this.formatted += '||';
                }
                const comps = this.set[i];
                for(let k = 0; k < comps.length; k++){
                    if (k > 0) {
                        this.formatted += ' ';
                    }
                    this.formatted += comps[k].toString().trim();
                }
            }
        }
        return this.formatted;
    }
    format() {
        return this.range;
    }
    toString() {
        return this.range;
    }
    parseRange(range) {
        // memoize range parsing for performance.
        // this is a very hot path, and fully deterministic.
        const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
        const memoKey = memoOpts + ':' + range;
        const cached = cache.get(memoKey);
        if (cached) {
            return cached;
        }
        const loose = this.options.loose;
        // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
        const hr = loose ? re[t.HYPHENRANGELOOSE] : re[t.HYPHENRANGE];
        range = range.replace(hr, hyphenReplace(this.options.includePrerelease));
        debug('hyphen replace', range);
        // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
        range = range.replace(re[t.COMPARATORTRIM], comparatorTrimReplace);
        debug('comparator trim', range);
        // `~ 1.2.3` => `~1.2.3`
        range = range.replace(re[t.TILDETRIM], tildeTrimReplace);
        debug('tilde trim', range);
        // `^ 1.2.3` => `^1.2.3`
        range = range.replace(re[t.CARETTRIM], caretTrimReplace);
        debug('caret trim', range);
        // At this point, the range is completely trimmed and
        // ready to be split into comparators.
        let rangeList = range.split(' ').map((comp)=>parseComparator(comp, this.options)).join(' ').split(/\s+/)// >=0.0.0 is equivalent to *
        .map((comp)=>replaceGTE0(comp, this.options));
        if (loose) {
            // in loose mode, throw out any that are not valid comparators
            rangeList = rangeList.filter((comp)=>{
                debug('loose invalid filter', comp, this.options);
                return !!comp.match(re[t.COMPARATORLOOSE]);
            });
        }
        debug('range list', rangeList);
        // if any comparators are the null set, then replace with JUST null set
        // if more than one comparator, remove any * comparators
        // also, don't include the same comparator more than once
        const rangeMap = new Map();
        const comparators = rangeList.map((comp)=>new Comparator(comp, this.options));
        for (const comp of comparators){
            if (isNullSet(comp)) {
                return [
                    comp
                ];
            }
            rangeMap.set(comp.value, comp);
        }
        if (rangeMap.size > 1 && rangeMap.has('')) {
            rangeMap.delete('');
        }
        const result = [
            ...rangeMap.values()
        ];
        cache.set(memoKey, result);
        return result;
    }
    intersects(range, options) {
        if (!(range instanceof Range)) {
            throw new TypeError('a Range is required');
        }
        return this.set.some((thisComparators)=>{
            return isSatisfiable(thisComparators, options) && range.set.some((rangeComparators)=>{
                return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator)=>{
                    return rangeComparators.every((rangeComparator)=>{
                        return thisComparator.intersects(rangeComparator, options);
                    });
                });
            });
        });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
        if (!version) {
            return false;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        for(let i = 0; i < this.set.length; i++){
            if (testSet(this.set[i], version, this.options)) {
                return true;
            }
        }
        return false;
    }
}
module.exports = Range;
const LRU = __turbopack_context__.r("[project]/node_modules/semver/internal/lrucache.js [app-rsc] (ecmascript)");
const cache = new LRU();
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const { safeRe: re, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const isNullSet = (c)=>c.value === '<0.0.0-0';
const isAny = (c)=>c.value === '';
// take a set of comparators and determine whether there
// exists a version which can satisfy it
const isSatisfiable = (comparators, options)=>{
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while(result && remainingComparators.length){
        result = remainingComparators.every((otherComparator)=>{
            return testComparator.intersects(otherComparator, options);
        });
        testComparator = remainingComparators.pop();
    }
    return result;
};
// comprised of xranges, tildes, stars, and gtlt's at this point.
// already replaced the hyphen ranges
// turn into a set of JUST comparators.
const parseComparator = (comp, options)=>{
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
};
const isX = (id)=>!id || id.toLowerCase() === 'x' || id === '*';
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
const replaceTildes = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceTilde(c, options)).join(' ');
};
const replaceTilde = (comp, options)=>{
    const r = options.loose ? re[t.TILDELOOSE] : re[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('tilde', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        } else if (pr) {
            debug('replaceTilde pr', pr);
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        } else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        debug('tilde return', ret);
        return ret;
    });
};
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
const replaceCarets = (comp, options)=>{
    return comp.trim().split(/\s+/).map((c)=>replaceCaret(c, options)).join(' ');
};
const replaceCaret = (comp, options)=>{
    debug('caret', comp, options);
    const r = options.loose ? re[t.CARETLOOSE] : re[t.CARET];
    const z = options.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr)=>{
        debug('caret', comp, _, M, m, p, pr);
        let ret;
        if (isX(M)) {
            ret = '';
        } else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        } else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            } else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        } else if (pr) {
            debug('replaceCaret pr', pr);
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        } else {
            debug('no pr');
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                } else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            } else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        debug('caret return', ret);
        return ret;
    });
};
const replaceXRanges = (comp, options)=>{
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map((c)=>replaceXRange(c, options)).join(' ');
};
const replaceXRange = (comp, options)=>{
    comp = comp.trim();
    const r = options.loose ? re[t.XRANGELOOSE] : re[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr)=>{
        debug('xRange', comp, ret, gtlt, M, m, p, pr);
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            } else {
                // nothing is forbidden
                ret = '*';
            }
        } else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                } else {
                    m = +m + 1;
                    p = 0;
                }
            } else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                } else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        } else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        } else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        debug('xRange return', ret);
        return ret;
    });
};
// Because * is AND-ed with everything else in the comparator,
// and '' means "any version", just remove the *s entirely.
const replaceStars = (comp, options)=>{
    debug('replaceStars', comp, options);
    // Looseness is ignored here.  star is always as loose as it gets!
    return comp.trim().replace(re[t.STAR], '');
};
const replaceGTE0 = (comp, options)=>{
    debug('replaceGTE0', comp, options);
    return comp.trim().replace(re[options.includePrerelease ? t.GTE0PRE : t.GTE0], '');
};
// This function is passed to string.replace(re[t.HYPHENRANGE])
// M, m, patch, prerelease, build
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
// TODO build?
const hyphenReplace = (incPr)=>($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr)=>{
        if (isX(fM)) {
            from = '';
        } else if (isX(fm)) {
            from = `>=${fM}.0.0${incPr ? '-0' : ''}`;
        } else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${incPr ? '-0' : ''}`;
        } else if (fpr) {
            from = `>=${from}`;
        } else {
            from = `>=${from}${incPr ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        } else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        } else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        } else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        } else if (incPr) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    };
const testSet = (set, version, options)=>{
    for(let i = 0; i < set.length; i++){
        if (!set[i].test(version)) {
            return false;
        }
    }
    if (version.prerelease.length && !options.includePrerelease) {
        // Find the set of versions that are allowed to have prereleases
        // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
        // That should allow `1.2.3-pr.2` to pass.
        // However, `1.2.4-alpha.notready` should NOT be allowed,
        // even though it's within the range set by the comparators.
        for(let i = 0; i < set.length; i++){
            debug(set[i].semver);
            if (set[i].semver === Comparator.ANY) {
                continue;
            }
            if (set[i].semver.prerelease.length > 0) {
                const allowed = set[i].semver;
                if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
                    return true;
                }
            }
        }
        // Version has a -pre, but it's not one of the ones we like.
        return false;
    }
    return true;
};
}}),
"[project]/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const ANY = Symbol('SemVer ANY');
// hoisted class for cyclic dependency
class Comparator {
    static get ANY() {
        return ANY;
    }
    constructor(comp, options){
        options = parseOptions(options);
        if (comp instanceof Comparator) {
            if (comp.loose === !!options.loose) {
                return comp;
            } else {
                comp = comp.value;
            }
        }
        comp = comp.trim().split(/\s+/).join(' ');
        debug('comparator', comp, options);
        this.options = options;
        this.loose = !!options.loose;
        this.parse(comp);
        if (this.semver === ANY) {
            this.value = '';
        } else {
            this.value = this.operator + this.semver.version;
        }
        debug('comp', this);
    }
    parse(comp) {
        const r = this.options.loose ? re[t.COMPARATORLOOSE] : re[t.COMPARATOR];
        const m = comp.match(r);
        if (!m) {
            throw new TypeError(`Invalid comparator: ${comp}`);
        }
        this.operator = m[1] !== undefined ? m[1] : '';
        if (this.operator === '=') {
            this.operator = '';
        }
        // if it literally is just '>' or '' then allow anything.
        if (!m[2]) {
            this.semver = ANY;
        } else {
            this.semver = new SemVer(m[2], this.options.loose);
        }
    }
    toString() {
        return this.value;
    }
    test(version) {
        debug('Comparator.test', version, this.options.loose);
        if (this.semver === ANY || version === ANY) {
            return true;
        }
        if (typeof version === 'string') {
            try {
                version = new SemVer(version, this.options);
            } catch (er) {
                return false;
            }
        }
        return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
        if (!(comp instanceof Comparator)) {
            throw new TypeError('a Comparator is required');
        }
        if (this.operator === '') {
            if (this.value === '') {
                return true;
            }
            return new Range(comp.value, options).test(this.value);
        } else if (comp.operator === '') {
            if (comp.value === '') {
                return true;
            }
            return new Range(this.value, options).test(comp.semver);
        }
        options = parseOptions(options);
        // Special cases where nothing can possibly be lower
        if (options.includePrerelease && (this.value === '<0.0.0-0' || comp.value === '<0.0.0-0')) {
            return false;
        }
        if (!options.includePrerelease && (this.value.startsWith('<0.0.0') || comp.value.startsWith('<0.0.0'))) {
            return false;
        }
        // Same direction increasing (> or >=)
        if (this.operator.startsWith('>') && comp.operator.startsWith('>')) {
            return true;
        }
        // Same direction decreasing (< or <=)
        if (this.operator.startsWith('<') && comp.operator.startsWith('<')) {
            return true;
        }
        // same SemVer and both sides are inclusive (<= or >=)
        if (this.semver.version === comp.semver.version && this.operator.includes('=') && comp.operator.includes('=')) {
            return true;
        }
        // opposite directions less than
        if (cmp(this.semver, '<', comp.semver, options) && this.operator.startsWith('>') && comp.operator.startsWith('<')) {
            return true;
        }
        // opposite directions greater than
        if (cmp(this.semver, '>', comp.semver, options) && this.operator.startsWith('<') && comp.operator.startsWith('>')) {
            return true;
        }
        return false;
    }
}
module.exports = Comparator;
const parseOptions = __turbopack_context__.r("[project]/node_modules/semver/internal/parse-options.js [app-rsc] (ecmascript)");
const { safeRe: re, t } = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)");
const debug = __turbopack_context__.r("[project]/node_modules/semver/internal/debug.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = (version, range, options)=>{
    try {
        range = new Range(range, options);
    } catch (er) {
        return false;
    }
    return range.test(version);
};
module.exports = satisfies;
}}),
"[project]/node_modules/semver/ranges/to-comparators.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
// Mostly just for testing and legacy API reasons
const toComparators = (range, options)=>new Range(range, options).set.map((comp)=>comp.map((c)=>c.value).join(' ').trim().split(' '));
module.exports = toComparators;
}}),
"[project]/node_modules/semver/ranges/max-satisfying.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const maxSatisfying = (versions, range, options)=>{
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!max || maxSV.compare(v) === -1) {
                // compare(max, v, true)
                max = v;
                maxSV = new SemVer(max, options);
            }
        }
    });
    return max;
};
module.exports = maxSatisfying;
}}),
"[project]/node_modules/semver/ranges/min-satisfying.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const minSatisfying = (versions, range, options)=>{
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
        rangeObj = new Range(range, options);
    } catch (er) {
        return null;
    }
    versions.forEach((v)=>{
        if (rangeObj.test(v)) {
            // satisfies(v, range, options)
            if (!min || minSV.compare(v) === 1) {
                // compare(min, v, true)
                min = v;
                minSV = new SemVer(min, options);
            }
        }
    });
    return min;
};
module.exports = minSatisfying;
}}),
"[project]/node_modules/semver/ranges/min-version.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const minVersion = (range, loose)=>{
    range = new Range(range, loose);
    let minver = new SemVer('0.0.0');
    if (range.test(minver)) {
        return minver;
    }
    minver = new SemVer('0.0.0-0');
    if (range.test(minver)) {
        return minver;
    }
    minver = null;
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let setMin = null;
        comparators.forEach((comparator)=>{
            // Clone to avoid manipulating the comparator's semver object.
            const compver = new SemVer(comparator.semver.version);
            switch(comparator.operator){
                case '>':
                    if (compver.prerelease.length === 0) {
                        compver.patch++;
                    } else {
                        compver.prerelease.push(0);
                    }
                    compver.raw = compver.format();
                /* fallthrough */ case '':
                case '>=':
                    if (!setMin || gt(compver, setMin)) {
                        setMin = compver;
                    }
                    break;
                case '<':
                case '<=':
                    break;
                /* istanbul ignore next */ default:
                    throw new Error(`Unexpected operation: ${comparator.operator}`);
            }
        });
        if (setMin && (!minver || gt(minver, setMin))) {
            minver = setMin;
        }
    }
    if (minver && range.test(minver)) {
        return minver;
    }
    return null;
};
module.exports = minVersion;
}}),
"[project]/node_modules/semver/ranges/valid.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const validRange = (range, options)=>{
    try {
        // Return '*' instead of '' so that truthiness works.
        // This will throw if it's invalid anyway
        return new Range(range, options).range || '*';
    } catch (er) {
        return null;
    }
};
module.exports = validRange;
}}),
"[project]/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const { ANY } = Comparator;
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const outside = (version, range, hilo, options)=>{
    version = new SemVer(version, options);
    range = new Range(range, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch(hilo){
        case '>':
            gtfn = gt;
            ltefn = lte;
            ltfn = lt;
            comp = '>';
            ecomp = '>=';
            break;
        case '<':
            gtfn = lt;
            ltefn = gte;
            ltfn = gt;
            comp = '<';
            ecomp = '<=';
            break;
        default:
            throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    // If it satisfies the range it is not outside
    if (satisfies(version, range, options)) {
        return false;
    }
    // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.
    for(let i = 0; i < range.set.length; ++i){
        const comparators = range.set[i];
        let high = null;
        let low = null;
        comparators.forEach((comparator)=>{
            if (comparator.semver === ANY) {
                comparator = new Comparator('>=0.0.0');
            }
            high = high || comparator;
            low = low || comparator;
            if (gtfn(comparator.semver, high.semver, options)) {
                high = comparator;
            } else if (ltfn(comparator.semver, low.semver, options)) {
                low = comparator;
            }
        });
        // If the edge version comparator has a operator then our version
        // isn't outside it
        if (high.operator === comp || high.operator === ecomp) {
            return false;
        }
        // If the lowest version comparator has an operator and our version
        // is less than it then it isn't higher than the range
        if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
            return false;
        } else if (low.operator === ecomp && ltfn(version, low.semver)) {
            return false;
        }
    }
    return true;
};
module.exports = outside;
}}),
"[project]/node_modules/semver/ranges/gtr.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// Determine if version is greater than all the versions possible in the range.
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
const gtr = (version, range, options)=>outside(version, range, '>', options);
module.exports = gtr;
}}),
"[project]/node_modules/semver/ranges/ltr.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
// Determine if version is less than all the versions possible in the range
const ltr = (version, range, options)=>outside(version, range, '<', options);
module.exports = ltr;
}}),
"[project]/node_modules/semver/ranges/intersects.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const intersects = (r1, r2, options)=>{
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
};
module.exports = intersects;
}}),
"[project]/node_modules/semver/ranges/simplify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// given a set of versions and a range, create a "simplified" range
// that includes the same versions that the original range does
// If the original range is shorter than the simplified one, return that.
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
module.exports = (versions, range, options)=>{
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b)=>compare(a, b, options));
    for (const version of v){
        const included = satisfies(version, range, options);
        if (included) {
            prev = version;
            if (!first) {
                first = version;
            }
        } else {
            if (prev) {
                set.push([
                    first,
                    prev
                ]);
            }
            prev = null;
            first = null;
        }
    }
    if (first) {
        set.push([
            first,
            null
        ]);
    }
    const ranges = [];
    for (const [min, max] of set){
        if (min === max) {
            ranges.push(min);
        } else if (!max && min === v[0]) {
            ranges.push('*');
        } else if (!max) {
            ranges.push(`>=${min}`);
        } else if (min === v[0]) {
            ranges.push(`<=${max}`);
        } else {
            ranges.push(`${min} - ${max}`);
        }
    }
    const simplified = ranges.join(' || ');
    const original = typeof range.raw === 'string' ? range.raw : String(range);
    return simplified.length < original.length ? simplified : range;
};
}}),
"[project]/node_modules/semver/ranges/subset.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const { ANY } = Comparator;
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
// Complex range `r1 || r2 || ...` is a subset of `R1 || R2 || ...` iff:
// - Every simple range `r1, r2, ...` is a null set, OR
// - Every simple range `r1, r2, ...` which is not a null set is a subset of
//   some `R1, R2, ...`
//
// Simple range `c1 c2 ...` is a subset of simple range `C1 C2 ...` iff:
// - If c is only the ANY comparator
//   - If C is only the ANY comparator, return true
//   - Else if in prerelease mode, return false
//   - else replace c with `[>=0.0.0]`
// - If C is only the ANY comparator
//   - if in prerelease mode, return true
//   - else replace C with `[>=0.0.0]`
// - Let EQ be the set of = comparators in c
// - If EQ is more than one, return true (null set)
// - Let GT be the highest > or >= comparator in c
// - Let LT be the lowest < or <= comparator in c
// - If GT and LT, and GT.semver > LT.semver, return true (null set)
// - If any C is a = range, and GT or LT are set, return false
// - If EQ
//   - If GT, and EQ does not satisfy GT, return true (null set)
//   - If LT, and EQ does not satisfy LT, return true (null set)
//   - If EQ satisfies every C, return true
//   - Else return false
// - If GT
//   - If GT.semver is lower than any > or >= comp in C, return false
//   - If GT is >=, and GT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the GT.semver tuple, return false
// - If LT
//   - If LT.semver is greater than any < or <= comp in C, return false
//   - If LT is <=, and LT.semver does not satisfy every C, return false
//   - If GT.semver has a prerelease, and not in prerelease mode
//     - If no C has a prerelease and the LT.semver tuple, return false
// - Else return true
const subset = (sub, dom, options = {})=>{
    if (sub === dom) {
        return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set){
        for (const simpleDom of dom.set){
            const isSub = simpleSubset(simpleSub, simpleDom, options);
            sawNonNull = sawNonNull || isSub !== null;
            if (isSub) {
                continue OUTER;
            }
        }
        // the null set is a subset of everything, but null simple ranges in
        // a complex range should be ignored.  so if we saw a non-null range,
        // then we know this isn't a subset, but if EVERY simple range was null,
        // then it is a subset.
        if (sawNonNull) {
            return false;
        }
    }
    return true;
};
const minimumVersionWithPreRelease = [
    new Comparator('>=0.0.0-0')
];
const minimumVersion = [
    new Comparator('>=0.0.0')
];
const simpleSubset = (sub, dom, options)=>{
    if (sub === dom) {
        return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
        if (dom.length === 1 && dom[0].semver === ANY) {
            return true;
        } else if (options.includePrerelease) {
            sub = minimumVersionWithPreRelease;
        } else {
            sub = minimumVersion;
        }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
        if (options.includePrerelease) {
            return true;
        } else {
            dom = minimumVersion;
        }
    }
    const eqSet = new Set();
    let gt, lt;
    for (const c of sub){
        if (c.operator === '>' || c.operator === '>=') {
            gt = higherGT(gt, c, options);
        } else if (c.operator === '<' || c.operator === '<=') {
            lt = lowerLT(lt, c, options);
        } else {
            eqSet.add(c.semver);
        }
    }
    if (eqSet.size > 1) {
        return null;
    }
    let gtltComp;
    if (gt && lt) {
        gtltComp = compare(gt.semver, lt.semver, options);
        if (gtltComp > 0) {
            return null;
        } else if (gtltComp === 0 && (gt.operator !== '>=' || lt.operator !== '<=')) {
            return null;
        }
    }
    // will iterate one or zero times
    for (const eq of eqSet){
        if (gt && !satisfies(eq, String(gt), options)) {
            return null;
        }
        if (lt && !satisfies(eq, String(lt), options)) {
            return null;
        }
        for (const c of dom){
            if (!satisfies(eq, String(c), options)) {
                return false;
            }
        }
        return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    // if the subset has a prerelease, we need a comparator in the superset
    // with the same tuple and a prerelease, or it's not a subset
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    // exception: <1.2.3-0 is the same as <1.2.3
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === '<' && needDomLTPre.prerelease[0] === 0) {
        needDomLTPre = false;
    }
    for (const c of dom){
        hasDomGT = hasDomGT || c.operator === '>' || c.operator === '>=';
        hasDomLT = hasDomLT || c.operator === '<' || c.operator === '<=';
        if (gt) {
            if (needDomGTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
                    needDomGTPre = false;
                }
            }
            if (c.operator === '>' || c.operator === '>=') {
                higher = higherGT(gt, c, options);
                if (higher === c && higher !== gt) {
                    return false;
                }
            } else if (gt.operator === '>=' && !satisfies(gt.semver, String(c), options)) {
                return false;
            }
        }
        if (lt) {
            if (needDomLTPre) {
                if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
                    needDomLTPre = false;
                }
            }
            if (c.operator === '<' || c.operator === '<=') {
                lower = lowerLT(lt, c, options);
                if (lower === c && lower !== lt) {
                    return false;
                }
            } else if (lt.operator === '<=' && !satisfies(lt.semver, String(c), options)) {
                return false;
            }
        }
        if (!c.operator && (lt || gt) && gtltComp !== 0) {
            return false;
        }
    }
    // if there was a < or >, and nothing in the dom, then must be false
    // UNLESS it was limited by another range in the other direction.
    // Eg, >1.0.0 <1.0.1 is still a subset of <2.0.0
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
        return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
        return false;
    }
    // we needed a prerelease range in a specific tuple, but didn't get one
    // then this isn't a subset.  eg >=1.2.3-pre is not a subset of >=1.0.0,
    // because it includes prereleases in the 1.2.3 tuple
    if (needDomGTPre || needDomLTPre) {
        return false;
    }
    return true;
};
// >=1.2.3 is lower than >1.2.3
const higherGT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === '>' && a.operator === '>=' ? b : a;
};
// <=1.2.3 is higher than <1.2.3
const lowerLT = (a, b, options)=>{
    if (!a) {
        return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === '<' && a.operator === '<=' ? b : a;
};
module.exports = subset;
}}),
"[project]/node_modules/semver/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
'use strict';
// just pre-load all the stuff that index.js lazily exports
const internalRe = __turbopack_context__.r("[project]/node_modules/semver/internal/re.js [app-rsc] (ecmascript)");
const constants = __turbopack_context__.r("[project]/node_modules/semver/internal/constants.js [app-rsc] (ecmascript)");
const SemVer = __turbopack_context__.r("[project]/node_modules/semver/classes/semver.js [app-rsc] (ecmascript)");
const identifiers = __turbopack_context__.r("[project]/node_modules/semver/internal/identifiers.js [app-rsc] (ecmascript)");
const parse = __turbopack_context__.r("[project]/node_modules/semver/functions/parse.js [app-rsc] (ecmascript)");
const valid = __turbopack_context__.r("[project]/node_modules/semver/functions/valid.js [app-rsc] (ecmascript)");
const clean = __turbopack_context__.r("[project]/node_modules/semver/functions/clean.js [app-rsc] (ecmascript)");
const inc = __turbopack_context__.r("[project]/node_modules/semver/functions/inc.js [app-rsc] (ecmascript)");
const diff = __turbopack_context__.r("[project]/node_modules/semver/functions/diff.js [app-rsc] (ecmascript)");
const major = __turbopack_context__.r("[project]/node_modules/semver/functions/major.js [app-rsc] (ecmascript)");
const minor = __turbopack_context__.r("[project]/node_modules/semver/functions/minor.js [app-rsc] (ecmascript)");
const patch = __turbopack_context__.r("[project]/node_modules/semver/functions/patch.js [app-rsc] (ecmascript)");
const prerelease = __turbopack_context__.r("[project]/node_modules/semver/functions/prerelease.js [app-rsc] (ecmascript)");
const compare = __turbopack_context__.r("[project]/node_modules/semver/functions/compare.js [app-rsc] (ecmascript)");
const rcompare = __turbopack_context__.r("[project]/node_modules/semver/functions/rcompare.js [app-rsc] (ecmascript)");
const compareLoose = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-loose.js [app-rsc] (ecmascript)");
const compareBuild = __turbopack_context__.r("[project]/node_modules/semver/functions/compare-build.js [app-rsc] (ecmascript)");
const sort = __turbopack_context__.r("[project]/node_modules/semver/functions/sort.js [app-rsc] (ecmascript)");
const rsort = __turbopack_context__.r("[project]/node_modules/semver/functions/rsort.js [app-rsc] (ecmascript)");
const gt = __turbopack_context__.r("[project]/node_modules/semver/functions/gt.js [app-rsc] (ecmascript)");
const lt = __turbopack_context__.r("[project]/node_modules/semver/functions/lt.js [app-rsc] (ecmascript)");
const eq = __turbopack_context__.r("[project]/node_modules/semver/functions/eq.js [app-rsc] (ecmascript)");
const neq = __turbopack_context__.r("[project]/node_modules/semver/functions/neq.js [app-rsc] (ecmascript)");
const gte = __turbopack_context__.r("[project]/node_modules/semver/functions/gte.js [app-rsc] (ecmascript)");
const lte = __turbopack_context__.r("[project]/node_modules/semver/functions/lte.js [app-rsc] (ecmascript)");
const cmp = __turbopack_context__.r("[project]/node_modules/semver/functions/cmp.js [app-rsc] (ecmascript)");
const coerce = __turbopack_context__.r("[project]/node_modules/semver/functions/coerce.js [app-rsc] (ecmascript)");
const Comparator = __turbopack_context__.r("[project]/node_modules/semver/classes/comparator.js [app-rsc] (ecmascript)");
const Range = __turbopack_context__.r("[project]/node_modules/semver/classes/range.js [app-rsc] (ecmascript)");
const satisfies = __turbopack_context__.r("[project]/node_modules/semver/functions/satisfies.js [app-rsc] (ecmascript)");
const toComparators = __turbopack_context__.r("[project]/node_modules/semver/ranges/to-comparators.js [app-rsc] (ecmascript)");
const maxSatisfying = __turbopack_context__.r("[project]/node_modules/semver/ranges/max-satisfying.js [app-rsc] (ecmascript)");
const minSatisfying = __turbopack_context__.r("[project]/node_modules/semver/ranges/min-satisfying.js [app-rsc] (ecmascript)");
const minVersion = __turbopack_context__.r("[project]/node_modules/semver/ranges/min-version.js [app-rsc] (ecmascript)");
const validRange = __turbopack_context__.r("[project]/node_modules/semver/ranges/valid.js [app-rsc] (ecmascript)");
const outside = __turbopack_context__.r("[project]/node_modules/semver/ranges/outside.js [app-rsc] (ecmascript)");
const gtr = __turbopack_context__.r("[project]/node_modules/semver/ranges/gtr.js [app-rsc] (ecmascript)");
const ltr = __turbopack_context__.r("[project]/node_modules/semver/ranges/ltr.js [app-rsc] (ecmascript)");
const intersects = __turbopack_context__.r("[project]/node_modules/semver/ranges/intersects.js [app-rsc] (ecmascript)");
const simplifyRange = __turbopack_context__.r("[project]/node_modules/semver/ranges/simplify.js [app-rsc] (ecmascript)");
const subset = __turbopack_context__.r("[project]/node_modules/semver/ranges/subset.js [app-rsc] (ecmascript)");
module.exports = {
    parse,
    valid,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants.RELEASE_TYPES,
    compareIdentifiers: identifiers.compareIdentifiers,
    rcompareIdentifiers: identifiers.rcompareIdentifiers
};
}}),
"[project]/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [app-rsc] (ecmascript)");
module.exports = semver.satisfies(process.version, '>=15.7.0');
}}),
"[project]/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [app-rsc] (ecmascript)");
module.exports = semver.satisfies(process.version, '>=16.9.0');
}}),
"[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const ASYMMETRIC_KEY_DETAILS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/asymmetricKeyDetailsSupported.js [app-rsc] (ecmascript)");
const RSA_PSS_KEY_DETAILS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/rsaPssKeyDetailsSupported.js [app-rsc] (ecmascript)");
const allowedAlgorithmsForKeys = {
    'ec': [
        'ES256',
        'ES384',
        'ES512'
    ],
    'rsa': [
        'RS256',
        'PS256',
        'RS384',
        'PS384',
        'RS512',
        'PS512'
    ],
    'rsa-pss': [
        'PS256',
        'PS384',
        'PS512'
    ]
};
const allowedCurves = {
    ES256: 'prime256v1',
    ES384: 'secp384r1',
    ES512: 'secp521r1'
};
module.exports = function(algorithm, key) {
    if (!algorithm || !key) return;
    const keyType = key.asymmetricKeyType;
    if (!keyType) return;
    const allowedAlgorithms = allowedAlgorithmsForKeys[keyType];
    if (!allowedAlgorithms) {
        throw new Error(`Unknown key type "${keyType}".`);
    }
    if (!allowedAlgorithms.includes(algorithm)) {
        throw new Error(`"alg" parameter for "${keyType}" key type must be one of: ${allowedAlgorithms.join(', ')}.`);
    }
    /*
   * Ignore the next block from test coverage because it gets executed
   * conditionally depending on the Node version. Not ignoring it would
   * prevent us from reaching the target % of coverage for versions of
   * Node under 15.7.0.
   */ /* istanbul ignore next */ if (ASYMMETRIC_KEY_DETAILS_SUPPORTED) {
        switch(keyType){
            case 'ec':
                const keyCurve = key.asymmetricKeyDetails.namedCurve;
                const allowedCurve = allowedCurves[algorithm];
                if (keyCurve !== allowedCurve) {
                    throw new Error(`"alg" parameter "${algorithm}" requires curve "${allowedCurve}".`);
                }
                break;
            case 'rsa-pss':
                if (RSA_PSS_KEY_DETAILS_SUPPORTED) {
                    const length = parseInt(algorithm.slice(-3), 10);
                    const { hashAlgorithm, mgf1HashAlgorithm, saltLength } = key.asymmetricKeyDetails;
                    if (hashAlgorithm !== `sha${length}` || mgf1HashAlgorithm !== hashAlgorithm) {
                        throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${algorithm}.`);
                    }
                    if (saltLength !== undefined && saltLength > length >> 3) {
                        throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${algorithm}.`);
                    }
                }
                break;
        }
    }
};
}}),
"[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var semver = __turbopack_context__.r("[project]/node_modules/semver/index.js [app-rsc] (ecmascript)");
module.exports = semver.satisfies(process.version, '^6.12.0 || >=8.0.0');
}}),
"[project]/node_modules/jsonwebtoken/verify.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const JsonWebTokenError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)");
const NotBeforeError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-rsc] (ecmascript)");
const TokenExpiredError = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-rsc] (ecmascript)");
const decode = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/decode.js [app-rsc] (ecmascript)");
const timespan = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/timespan.js [app-rsc] (ecmascript)");
const validateAsymmetricKey = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-rsc] (ecmascript)");
const PS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-rsc] (ecmascript)");
const jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-rsc] (ecmascript)");
const { KeyObject, createSecretKey, createPublicKey } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const PUB_KEY_ALGS = [
    'RS256',
    'RS384',
    'RS512'
];
const EC_KEY_ALGS = [
    'ES256',
    'ES384',
    'ES512'
];
const RSA_KEY_ALGS = [
    'RS256',
    'RS384',
    'RS512'
];
const HS_ALGS = [
    'HS256',
    'HS384',
    'HS512'
];
if (PS_SUPPORTED) {
    PUB_KEY_ALGS.splice(PUB_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
    RSA_KEY_ALGS.splice(RSA_KEY_ALGS.length, 0, 'PS256', 'PS384', 'PS512');
}
module.exports = function(jwtString, secretOrPublicKey, options, callback) {
    if (typeof options === 'function' && !callback) {
        callback = options;
        options = {};
    }
    if (!options) {
        options = {};
    }
    //clone this object since we are going to mutate it.
    options = Object.assign({}, options);
    let done;
    if (callback) {
        done = callback;
    } else {
        done = function(err, data) {
            if (err) throw err;
            return data;
        };
    }
    if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {
        return done(new JsonWebTokenError('clockTimestamp must be a number'));
    }
    if (options.nonce !== undefined && (typeof options.nonce !== 'string' || options.nonce.trim() === '')) {
        return done(new JsonWebTokenError('nonce must be a non-empty string'));
    }
    if (options.allowInvalidAsymmetricKeyTypes !== undefined && typeof options.allowInvalidAsymmetricKeyTypes !== 'boolean') {
        return done(new JsonWebTokenError('allowInvalidAsymmetricKeyTypes must be a boolean'));
    }
    const clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);
    if (!jwtString) {
        return done(new JsonWebTokenError('jwt must be provided'));
    }
    if (typeof jwtString !== 'string') {
        return done(new JsonWebTokenError('jwt must be a string'));
    }
    const parts = jwtString.split('.');
    if (parts.length !== 3) {
        return done(new JsonWebTokenError('jwt malformed'));
    }
    let decodedToken;
    try {
        decodedToken = decode(jwtString, {
            complete: true
        });
    } catch (err) {
        return done(err);
    }
    if (!decodedToken) {
        return done(new JsonWebTokenError('invalid token'));
    }
    const header = decodedToken.header;
    let getSecret;
    if (typeof secretOrPublicKey === 'function') {
        if (!callback) {
            return done(new JsonWebTokenError('verify must be called asynchronous if secret or public key is provided as a callback'));
        }
        getSecret = secretOrPublicKey;
    } else {
        getSecret = function(header, secretCallback) {
            return secretCallback(null, secretOrPublicKey);
        };
    }
    return getSecret(header, function(err, secretOrPublicKey) {
        if (err) {
            return done(new JsonWebTokenError('error in secret or public key callback: ' + err.message));
        }
        const hasSignature = parts[2].trim() !== '';
        if (!hasSignature && secretOrPublicKey) {
            return done(new JsonWebTokenError('jwt signature is required'));
        }
        if (hasSignature && !secretOrPublicKey) {
            return done(new JsonWebTokenError('secret or public key must be provided'));
        }
        if (!hasSignature && !options.algorithms) {
            return done(new JsonWebTokenError('please specify "none" in "algorithms" to verify unsigned tokens'));
        }
        if (secretOrPublicKey != null && !(secretOrPublicKey instanceof KeyObject)) {
            try {
                secretOrPublicKey = createPublicKey(secretOrPublicKey);
            } catch (_) {
                try {
                    secretOrPublicKey = createSecretKey(typeof secretOrPublicKey === 'string' ? Buffer.from(secretOrPublicKey) : secretOrPublicKey);
                } catch (_) {
                    return done(new JsonWebTokenError('secretOrPublicKey is not valid key material'));
                }
            }
        }
        if (!options.algorithms) {
            if (secretOrPublicKey.type === 'secret') {
                options.algorithms = HS_ALGS;
            } else if ([
                'rsa',
                'rsa-pss'
            ].includes(secretOrPublicKey.asymmetricKeyType)) {
                options.algorithms = RSA_KEY_ALGS;
            } else if (secretOrPublicKey.asymmetricKeyType === 'ec') {
                options.algorithms = EC_KEY_ALGS;
            } else {
                options.algorithms = PUB_KEY_ALGS;
            }
        }
        if (options.algorithms.indexOf(decodedToken.header.alg) === -1) {
            return done(new JsonWebTokenError('invalid algorithm'));
        }
        if (header.alg.startsWith('HS') && secretOrPublicKey.type !== 'secret') {
            return done(new JsonWebTokenError(`secretOrPublicKey must be a symmetric key when using ${header.alg}`));
        } else if (/^(?:RS|PS|ES)/.test(header.alg) && secretOrPublicKey.type !== 'public') {
            return done(new JsonWebTokenError(`secretOrPublicKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInvalidAsymmetricKeyTypes) {
            try {
                validateAsymmetricKey(header.alg, secretOrPublicKey);
            } catch (e) {
                return done(e);
            }
        }
        let valid;
        try {
            valid = jws.verify(jwtString, decodedToken.header.alg, secretOrPublicKey);
        } catch (e) {
            return done(e);
        }
        if (!valid) {
            return done(new JsonWebTokenError('invalid signature'));
        }
        const payload = decodedToken.payload;
        if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {
            if (typeof payload.nbf !== 'number') {
                return done(new JsonWebTokenError('invalid nbf value'));
            }
            if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {
                return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));
            }
        }
        if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {
            if (typeof payload.exp !== 'number') {
                return done(new JsonWebTokenError('invalid exp value'));
            }
            if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));
            }
        }
        if (options.audience) {
            const audiences = Array.isArray(options.audience) ? options.audience : [
                options.audience
            ];
            const target = Array.isArray(payload.aud) ? payload.aud : [
                payload.aud
            ];
            const match = target.some(function(targetAudience) {
                return audiences.some(function(audience) {
                    return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;
                });
            });
            if (!match) {
                return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));
            }
        }
        if (options.issuer) {
            const invalid_issuer = typeof options.issuer === 'string' && payload.iss !== options.issuer || Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1;
            if (invalid_issuer) {
                return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));
            }
        }
        if (options.subject) {
            if (payload.sub !== options.subject) {
                return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));
            }
        }
        if (options.jwtid) {
            if (payload.jti !== options.jwtid) {
                return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));
            }
        }
        if (options.nonce) {
            if (payload.nonce !== options.nonce) {
                return done(new JsonWebTokenError('jwt nonce invalid. expected: ' + options.nonce));
            }
        }
        if (options.maxAge) {
            if (typeof payload.iat !== 'number') {
                return done(new JsonWebTokenError('iat required when maxAge is specified'));
            }
            const maxAgeTimestamp = timespan(options.maxAge, payload.iat);
            if (typeof maxAgeTimestamp === 'undefined') {
                return done(new JsonWebTokenError('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
            }
            if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {
                return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));
            }
        }
        if (options.complete === true) {
            const signature = decodedToken.signature;
            return done(null, {
                header: header,
                payload: payload,
                signature: signature
            });
        }
        return done(null, payload);
    });
};
}}),
"[project]/node_modules/lodash.includes/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', stringTag = '[object String]', symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array ? array.length : 0, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    if (value !== value) {
        return baseFindIndex(array, baseIsNaN, fromIndex);
    }
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) {
            return index;
        }
    }
    return -1;
}
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
    return value !== value;
}
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */ function baseValues(object, props) {
    return arrayMap(props, function(key) {
        return object[key];
    });
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object), nativeMax = Math.max;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];
    var length = result.length, skipIndexes = !!length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */ function includes(collection, value, fromIndex, guard) {
    collection = isArrayLike(collection) ? collection : values(collection);
    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
    var length = collection.length;
    if (fromIndex < 0) {
        fromIndex = nativeMax(length + fromIndex, 0);
    }
    return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
}
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */ function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
}
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */ function values(object) {
    return object ? baseValues(object, keys(object)) : [];
}
module.exports = includes;
}}),
"[project]/node_modules/lodash.isboolean/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var boolTag = '[object Boolean]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as a boolean primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isBoolean(false);
 * // => true
 *
 * _.isBoolean(null);
 * // => false
 */ function isBoolean(value) {
    return value === true || value === false || isObjectLike(value) && objectToString.call(value) == boolTag;
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
module.exports = isBoolean;
}}),
"[project]/node_modules/lodash.isinteger/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is an integer.
 *
 * **Note:** This method is based on
 * [`Number.isInteger`](https://mdn.io/Number/isInteger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
 * @example
 *
 * _.isInteger(3);
 * // => true
 *
 * _.isInteger(Number.MIN_VALUE);
 * // => false
 *
 * _.isInteger(Infinity);
 * // => false
 *
 * _.isInteger('3');
 * // => false
 */ function isInteger(value) {
    return typeof value == 'number' && value == toInteger(value);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = isInteger;
}}),
"[project]/node_modules/lodash.isnumber/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash 3.0.3 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var numberTag = '[object Number]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
 * as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */ function isNumber(value) {
    return typeof value == 'number' || isObjectLike(value) && objectToString.call(value) == numberTag;
}
module.exports = isNumber;
}}),
"[project]/node_modules/lodash.isplainobject/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** `Object#toString` result references. */ var objectTag = '[object Object]';
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */ function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
        try {
            result = !!(value + '');
        } catch (e) {}
    }
    return result;
}
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}}),
"[project]/node_modules/lodash.isstring/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash 4.0.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */ /** `Object#toString` result references. */ var stringTag = '[object String]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @type Function
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */ function isString(value) {
    return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
}
module.exports = isString;
}}),
"[project]/node_modules/lodash.once/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var FUNC_ERROR_TEXT = 'Expected a function';
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308, NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */ function before(n, func) {
    var result;
    if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    n = toInteger(n);
    return function() {
        if (--n > 0) {
            result = func.apply(this, arguments);
        }
        if (n <= 1) {
            func = undefined;
        }
        return result;
    };
}
/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */ function once(func) {
    return before(2, func);
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = once;
}}),
"[project]/node_modules/jsonwebtoken/sign.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const timespan = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/timespan.js [app-rsc] (ecmascript)");
const PS_SUPPORTED = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/psSupported.js [app-rsc] (ecmascript)");
const validateAsymmetricKey = __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/validateAsymmetricKey.js [app-rsc] (ecmascript)");
const jws = __turbopack_context__.r("[project]/node_modules/jws/index.js [app-rsc] (ecmascript)");
const includes = __turbopack_context__.r("[project]/node_modules/lodash.includes/index.js [app-rsc] (ecmascript)");
const isBoolean = __turbopack_context__.r("[project]/node_modules/lodash.isboolean/index.js [app-rsc] (ecmascript)");
const isInteger = __turbopack_context__.r("[project]/node_modules/lodash.isinteger/index.js [app-rsc] (ecmascript)");
const isNumber = __turbopack_context__.r("[project]/node_modules/lodash.isnumber/index.js [app-rsc] (ecmascript)");
const isPlainObject = __turbopack_context__.r("[project]/node_modules/lodash.isplainobject/index.js [app-rsc] (ecmascript)");
const isString = __turbopack_context__.r("[project]/node_modules/lodash.isstring/index.js [app-rsc] (ecmascript)");
const once = __turbopack_context__.r("[project]/node_modules/lodash.once/index.js [app-rsc] (ecmascript)");
const { KeyObject, createSecretKey, createPrivateKey } = __turbopack_context__.r("[externals]/crypto [external] (crypto, cjs)");
const SUPPORTED_ALGS = [
    'RS256',
    'RS384',
    'RS512',
    'ES256',
    'ES384',
    'ES512',
    'HS256',
    'HS384',
    'HS512',
    'none'
];
if (PS_SUPPORTED) {
    SUPPORTED_ALGS.splice(3, 0, 'PS256', 'PS384', 'PS512');
}
const sign_options_schema = {
    expiresIn: {
        isValid: function(value) {
            return isInteger(value) || isString(value) && value;
        },
        message: '"expiresIn" should be a number of seconds or string representing a timespan'
    },
    notBefore: {
        isValid: function(value) {
            return isInteger(value) || isString(value) && value;
        },
        message: '"notBefore" should be a number of seconds or string representing a timespan'
    },
    audience: {
        isValid: function(value) {
            return isString(value) || Array.isArray(value);
        },
        message: '"audience" must be a string or array'
    },
    algorithm: {
        isValid: includes.bind(null, SUPPORTED_ALGS),
        message: '"algorithm" must be a valid string enum value'
    },
    header: {
        isValid: isPlainObject,
        message: '"header" must be an object'
    },
    encoding: {
        isValid: isString,
        message: '"encoding" must be a string'
    },
    issuer: {
        isValid: isString,
        message: '"issuer" must be a string'
    },
    subject: {
        isValid: isString,
        message: '"subject" must be a string'
    },
    jwtid: {
        isValid: isString,
        message: '"jwtid" must be a string'
    },
    noTimestamp: {
        isValid: isBoolean,
        message: '"noTimestamp" must be a boolean'
    },
    keyid: {
        isValid: isString,
        message: '"keyid" must be a string'
    },
    mutatePayload: {
        isValid: isBoolean,
        message: '"mutatePayload" must be a boolean'
    },
    allowInsecureKeySizes: {
        isValid: isBoolean,
        message: '"allowInsecureKeySizes" must be a boolean'
    },
    allowInvalidAsymmetricKeyTypes: {
        isValid: isBoolean,
        message: '"allowInvalidAsymmetricKeyTypes" must be a boolean'
    }
};
const registered_claims_schema = {
    iat: {
        isValid: isNumber,
        message: '"iat" should be a number of seconds'
    },
    exp: {
        isValid: isNumber,
        message: '"exp" should be a number of seconds'
    },
    nbf: {
        isValid: isNumber,
        message: '"nbf" should be a number of seconds'
    }
};
function validate(schema, allowUnknown, object, parameterName) {
    if (!isPlainObject(object)) {
        throw new Error('Expected "' + parameterName + '" to be a plain object.');
    }
    Object.keys(object).forEach(function(key) {
        const validator = schema[key];
        if (!validator) {
            if (!allowUnknown) {
                throw new Error('"' + key + '" is not allowed in "' + parameterName + '"');
            }
            return;
        }
        if (!validator.isValid(object[key])) {
            throw new Error(validator.message);
        }
    });
}
function validateOptions(options) {
    return validate(sign_options_schema, false, options, 'options');
}
function validatePayload(payload) {
    return validate(registered_claims_schema, true, payload, 'payload');
}
const options_to_payload = {
    'audience': 'aud',
    'issuer': 'iss',
    'subject': 'sub',
    'jwtid': 'jti'
};
const options_for_objects = [
    'expiresIn',
    'notBefore',
    'noTimestamp',
    'audience',
    'issuer',
    'subject',
    'jwtid'
];
module.exports = function(payload, secretOrPrivateKey, options, callback) {
    if (typeof options === 'function') {
        callback = options;
        options = {};
    } else {
        options = options || {};
    }
    const isObjectPayload = typeof payload === 'object' && !Buffer.isBuffer(payload);
    const header = Object.assign({
        alg: options.algorithm || 'HS256',
        typ: isObjectPayload ? 'JWT' : undefined,
        kid: options.keyid
    }, options.header);
    function failure(err) {
        if (callback) {
            return callback(err);
        }
        throw err;
    }
    if (!secretOrPrivateKey && options.algorithm !== 'none') {
        return failure(new Error('secretOrPrivateKey must have a value'));
    }
    if (secretOrPrivateKey != null && !(secretOrPrivateKey instanceof KeyObject)) {
        try {
            secretOrPrivateKey = createPrivateKey(secretOrPrivateKey);
        } catch (_) {
            try {
                secretOrPrivateKey = createSecretKey(typeof secretOrPrivateKey === 'string' ? Buffer.from(secretOrPrivateKey) : secretOrPrivateKey);
            } catch (_) {
                return failure(new Error('secretOrPrivateKey is not valid key material'));
            }
        }
    }
    if (header.alg.startsWith('HS') && secretOrPrivateKey.type !== 'secret') {
        return failure(new Error(`secretOrPrivateKey must be a symmetric key when using ${header.alg}`));
    } else if (/^(?:RS|PS|ES)/.test(header.alg)) {
        if (secretOrPrivateKey.type !== 'private') {
            return failure(new Error(`secretOrPrivateKey must be an asymmetric key when using ${header.alg}`));
        }
        if (!options.allowInsecureKeySizes && !header.alg.startsWith('ES') && secretOrPrivateKey.asymmetricKeyDetails !== undefined && //KeyObject.asymmetricKeyDetails is supported in Node 15+
        secretOrPrivateKey.asymmetricKeyDetails.modulusLength < 2048) {
            return failure(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
        }
    }
    if (typeof payload === 'undefined') {
        return failure(new Error('payload is required'));
    } else if (isObjectPayload) {
        try {
            validatePayload(payload);
        } catch (error) {
            return failure(error);
        }
        if (!options.mutatePayload) {
            payload = Object.assign({}, payload);
        }
    } else {
        const invalid_options = options_for_objects.filter(function(opt) {
            return typeof options[opt] !== 'undefined';
        });
        if (invalid_options.length > 0) {
            return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + typeof payload + ' payload'));
        }
    }
    if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {
        return failure(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    }
    if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {
        return failure(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    }
    try {
        validateOptions(options);
    } catch (error) {
        return failure(error);
    }
    if (!options.allowInvalidAsymmetricKeyTypes) {
        try {
            validateAsymmetricKey(header.alg, secretOrPrivateKey);
        } catch (error) {
            return failure(error);
        }
    }
    const timestamp = payload.iat || Math.floor(Date.now() / 1000);
    if (options.noTimestamp) {
        delete payload.iat;
    } else if (isObjectPayload) {
        payload.iat = timestamp;
    }
    if (typeof options.notBefore !== 'undefined') {
        try {
            payload.nbf = timespan(options.notBefore, timestamp);
        } catch (err) {
            return failure(err);
        }
        if (typeof payload.nbf === 'undefined') {
            return failure(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
    }
    if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {
        try {
            payload.exp = timespan(options.expiresIn, timestamp);
        } catch (err) {
            return failure(err);
        }
        if (typeof payload.exp === 'undefined') {
            return failure(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        }
    }
    Object.keys(options_to_payload).forEach(function(key) {
        const claim = options_to_payload[key];
        if (typeof options[key] !== 'undefined') {
            if (typeof payload[claim] !== 'undefined') {
                return failure(new Error('Bad "options.' + key + '" option. The payload already has an "' + claim + '" property.'));
            }
            payload[claim] = options[key];
        }
    });
    const encoding = options.encoding || 'utf8';
    if (typeof callback === 'function') {
        callback = callback && once(callback);
        jws.createSign({
            header: header,
            privateKey: secretOrPrivateKey,
            payload: payload,
            encoding: encoding
        }).once('error', callback).once('done', function(signature) {
            // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
            if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
                return callback(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`));
            }
            callback(null, signature);
        });
    } else {
        let signature = jws.sign({
            header: header,
            payload: payload,
            secret: secretOrPrivateKey,
            encoding: encoding
        });
        // TODO: Remove in favor of the modulus length check before signing once node 15+ is the minimum supported version
        if (!options.allowInsecureKeySizes && /^(?:RS|PS)/.test(header.alg) && signature.length < 256) {
            throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${header.alg}`);
        }
        return signature;
    }
};
}}),
"[project]/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = {
    decode: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/decode.js [app-rsc] (ecmascript)"),
    verify: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/verify.js [app-rsc] (ecmascript)"),
    sign: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/sign.js [app-rsc] (ecmascript)"),
    JsonWebTokenError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/JsonWebTokenError.js [app-rsc] (ecmascript)"),
    NotBeforeError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/NotBeforeError.js [app-rsc] (ecmascript)"),
    TokenExpiredError: __turbopack_context__.r("[project]/node_modules/jsonwebtoken/lib/TokenExpiredError.js [app-rsc] (ecmascript)")
};
}}),
"[project]/node_modules/@stream-io/node-sdk/dist/index.es.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChannelOwnCapability": (()=>ChannelOwnCapability),
    "OwnCapability": (()=>OwnCapability),
    "StreamCall": (()=>StreamCall),
    "StreamChannel": (()=>StreamChannel),
    "StreamChatClient": (()=>StreamChatClient),
    "StreamClient": (()=>StreamClient),
    "StreamVideoClient": (()=>StreamVideoClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
const ChannelOwnCapability = {
    BAN_CHANNEL_MEMBERS: 'ban-channel-members',
    CAST_POLL_VOTE: 'cast-poll-vote',
    CONNECT_EVENTS: 'connect-events',
    CREATE_ATTACHMENT: 'create-attachment',
    DELETE_ANY_MESSAGE: 'delete-any-message',
    DELETE_CHANNEL: 'delete-channel',
    DELETE_OWN_MESSAGE: 'delete-own-message',
    FLAG_MESSAGE: 'flag-message',
    FREEZE_CHANNEL: 'freeze-channel',
    JOIN_CHANNEL: 'join-channel',
    LEAVE_CHANNEL: 'leave-channel',
    MUTE_CHANNEL: 'mute-channel',
    PIN_MESSAGE: 'pin-message',
    QUERY_POLL_VOTES: 'query-poll-votes',
    QUOTE_MESSAGE: 'quote-message',
    READ_EVENTS: 'read-events',
    SEARCH_MESSAGES: 'search-messages',
    SEND_CUSTOM_EVENTS: 'send-custom-events',
    SEND_LINKS: 'send-links',
    SEND_MESSAGE: 'send-message',
    SEND_POLL: 'send-poll',
    SEND_REACTION: 'send-reaction',
    SEND_REPLY: 'send-reply',
    SEND_RESTRICTED_VISIBILITY_MESSAGE: 'send-restricted-visibility-message',
    SEND_TYPING_EVENTS: 'send-typing-events',
    SET_CHANNEL_COOLDOWN: 'set-channel-cooldown',
    SHARE_LOCATION: 'share-location',
    SKIP_SLOW_MODE: 'skip-slow-mode',
    SLOW_MODE: 'slow-mode',
    TYPING_EVENTS: 'typing-events',
    UPDATE_ANY_MESSAGE: 'update-any-message',
    UPDATE_CHANNEL: 'update-channel',
    UPDATE_CHANNEL_MEMBERS: 'update-channel-members',
    UPDATE_OWN_MESSAGE: 'update-own-message',
    UPDATE_THREAD: 'update-thread',
    UPLOAD_FILE: 'upload-file'
};
const OwnCapability = {
    BLOCK_USERS: 'block-users',
    CHANGE_MAX_DURATION: 'change-max-duration',
    CREATE_CALL: 'create-call',
    CREATE_REACTION: 'create-reaction',
    ENABLE_NOISE_CANCELLATION: 'enable-noise-cancellation',
    END_CALL: 'end-call',
    JOIN_BACKSTAGE: 'join-backstage',
    JOIN_CALL: 'join-call',
    JOIN_ENDED_CALL: 'join-ended-call',
    MUTE_USERS: 'mute-users',
    PIN_FOR_EVERYONE: 'pin-for-everyone',
    READ_CALL: 'read-call',
    REMOVE_CALL_MEMBER: 'remove-call-member',
    SCREENSHARE: 'screenshare',
    SEND_AUDIO: 'send-audio',
    SEND_VIDEO: 'send-video',
    START_BROADCAST_CALL: 'start-broadcast-call',
    START_CLOSED_CAPTIONS_CALL: 'start-closed-captions-call',
    START_FRAME_RECORD_CALL: 'start-frame-record-call',
    START_RECORD_CALL: 'start-record-call',
    START_TRANSCRIPTION_CALL: 'start-transcription-call',
    STOP_BROADCAST_CALL: 'stop-broadcast-call',
    STOP_CLOSED_CAPTIONS_CALL: 'stop-closed-captions-call',
    STOP_FRAME_RECORD_CALL: 'stop-frame-record-call',
    STOP_RECORD_CALL: 'stop-record-call',
    STOP_TRANSCRIPTION_CALL: 'stop-transcription-call',
    UPDATE_CALL: 'update-call',
    UPDATE_CALL_MEMBER: 'update-call-member',
    UPDATE_CALL_PERMISSIONS: 'update-call-permissions',
    UPDATE_CALL_SETTINGS: 'update-call-settings'
};
function JWTUserToken(apiSecret, payload) {
    // make sure we return a clear error when jwt is shimmed (ie. browser build)
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"] == null || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign == null) {
        throw Error(`Unable to find jwt crypto, if you are getting this error is probably because you are trying to generate tokens on browser or React Native (or other environment where crypto functions are not available). Please Note: token should only be generated server-side.`);
    }
    const opts = Object.assign({
        algorithm: 'HS256',
        noTimestamp: true
    });
    if (payload.iat) {
        opts.noTimestamp = false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign(payload, apiSecret, opts);
}
function JWTServerToken(apiSecret, jwtOptions = {}) {
    const payload = {
        server: true
    };
    const opts = Object.assign({
        algorithm: 'HS256',
        noTimestamp: true
    }, jwtOptions);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign(payload, apiSecret, opts);
}
class StreamError extends Error {
    constructor(message, metadata, code, errorOptions){
        super(message, errorOptions);
        this.metadata = metadata;
        this.code = code;
    }
}
const getRateLimitFromResponseHeader = (responseHeaders)=>{
    const rateLimit = responseHeaders.has('x-ratelimit-limit') ? +responseHeaders.get('x-ratelimit-limit') : undefined;
    const rateLimitRemaining = responseHeaders.has('x-ratelimit-remaining') ? +responseHeaders.get('x-ratelimit-remaining') : undefined;
    const rateLimitReset = responseHeaders.has('x-ratelimit-reset') ? new Date(+responseHeaders.get('x-ratelimit-reset') * 1000) : undefined;
    const result = {
        rateLimit,
        rateLimitRemaining,
        rateLimitReset
    };
    return result;
};
class BaseApi {
    constructor(apiConfig){
        this.apiConfig = apiConfig;
        this.sendRequest = async (method, url, pathParams, queryParams, body)=>{
            queryParams = queryParams ?? {};
            queryParams.api_key = this.apiConfig.apiKey;
            const encodedParams = this.queryParamsStringify(queryParams);
            if (pathParams) {
                Object.keys(pathParams).forEach((paramName)=>{
                    url = url.replace(`{${paramName}}`, pathParams[paramName]);
                });
            }
            url += `?${encodedParams}`;
            const clientRequestId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])();
            const headers = {
                Authorization: this.apiConfig.token,
                'stream-auth-type': 'jwt',
                'Content-Type': 'application/json',
                'X-Stream-Client': 'stream-node-' + "0.4.26",
                'Accept-Encoding': 'gzip',
                'x-client-request-id': clientRequestId
            };
            const signal = AbortSignal.timeout(this.apiConfig.timeout);
            try {
                const response = await fetch(`${this.apiConfig.baseUrl}${url}`, {
                    signal,
                    method,
                    body: JSON.stringify(body),
                    headers,
                    dispatcher: this.dispatcher
                });
                const responseHeaders = response.headers;
                const metadata = {
                    clientRequestId,
                    responseHeaders,
                    responseCode: response.status,
                    rateLimit: getRateLimitFromResponseHeader(responseHeaders)
                };
                if (response.status < 200 || response.status >= 300) {
                    let error;
                    try {
                        error = await response.json();
                    } catch (_) {
                        throw new StreamError(`Stream error: ${response.status} - ${response.statusText}`, metadata, response.status);
                    }
                    throw new StreamError(`Stream error code ${error.code}: ${error.message}`, metadata, error.code, undefined);
                }
                const responseBody = await response.json();
                return {
                    body: responseBody,
                    metadata
                };
            } catch (error) {
                if (error instanceof StreamError) {
                    throw error;
                }
                const metadata = {
                    clientRequestId,
                    responseCode: error.status
                };
                if (error.name === 'AbortError' || error.name === 'TimeoutError') {
                    throw new StreamError(`The request was aborted due to to the ${this.apiConfig.timeout}ms timeout, you can set the timeout in the StreamClient constructor`, metadata, undefined, error);
                } else {
                    throw new StreamError(`The request failed due to an unexpected error`, metadata, error);
                }
            }
        };
        this.queryParamsStringify = (params)=>{
            const newParams = [];
            for(const k in params){
                const param = params[k];
                if (Array.isArray(param)) {
                    newParams.push(`${k}=${encodeURIComponent(param.join(','))}`);
                } else if (param instanceof Date) {
                    newParams.push(param.toISOString());
                } else if (typeof param === 'object') {
                    newParams.push(`${k}=${encodeURIComponent(JSON.stringify(param))}`);
                } else {
                    if (typeof param === 'string' || typeof param === 'number' || typeof param === 'boolean') {
                        newParams.push(`${k}=${encodeURIComponent(param)}`);
                    }
                }
            }
            return newParams.join('&');
        };
        this.dispatcher = this.apiConfig.agent;
    }
}
const decoders = {};
const decodeDatetimeType = (input)=>new Date(Math.floor(input / 1000000));
decoders.DatetimeType = decodeDatetimeType;
const decode = (typeMappings, input)=>{
    if (!input || Object.keys(typeMappings).length === 0) return input;
    Object.keys(typeMappings).forEach((key)=>{
        if (input[key] != null) {
            if (typeMappings[key]) {
                const decoder = decoders[typeMappings[key].type];
                if (decoder) {
                    if (typeMappings[key].isSingle) {
                        input[key] = decoder(input[key]);
                    } else {
                        Object.keys(input[key]).forEach((k)=>{
                            input[key][k] = decoder(input[key][k]);
                        });
                    }
                }
            }
        }
    });
    return input;
};
decoders.ActionLogResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        },
        target_user: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AppResponseFields = (input)=>{
    const typeMappings = {
        event_hooks: {
            type: 'EventHook',
            isSingle: false
        },
        call_types: {
            type: 'CallType',
            isSingle: false
        },
        channel_configs: {
            type: 'ChannelConfig',
            isSingle: false
        },
        push_notifications: {
            type: 'PushNotificationFields',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.AutomodDetails = (input)=>{
    const typeMappings = {
        result: {
            type: 'MessageModerationResult',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Ban = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        created_by: {
            type: 'User',
            isSingle: true
        },
        target: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BanResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        banned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockListResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockUsersResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.BlockedUserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        blocked_user: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallParticipantResponse = (input)=>{
    const typeMappings = {
        joined_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallRecording = (input)=>{
    const typeMappings = {
        end_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        start_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallReportResponse = (input)=>{
    const typeMappings = {
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        starts_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        session: {
            type: 'CallSessionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallSessionResponse = (input)=>{
    const typeMappings = {
        participants: {
            type: 'CallParticipantResponse',
            isSingle: false
        },
        accepted_by: {
            type: 'DatetimeType',
            isSingle: false
        },
        missed_by: {
            type: 'DatetimeType',
            isSingle: false
        },
        rejected_by: {
            type: 'DatetimeType',
            isSingle: false
        },
        ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        live_ended_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        live_started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        timer_ends_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStateResponseFields = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallStatsReportSummaryResponse = (input)=>{
    const typeMappings = {
        first_stats_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTranscription = (input)=>{
    const typeMappings = {
        end_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        start_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallType = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CampaignResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        segments: {
            type: 'Segment',
            isSingle: false
        },
        users: {
            type: 'UserResponse',
            isSingle: false
        },
        stats: {
            type: 'CampaignStatsResponse',
            isSingle: true
        },
        scheduled_for: {
            type: 'DatetimeType',
            isSingle: true
        },
        stop_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        sender: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CampaignStatsResponse = (input)=>{
    const typeMappings = {
        stats_completed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        stats_started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Channel = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        active_live_locations: {
            type: 'SharedLocation',
            isSingle: false
        },
        invites: {
            type: 'ChannelMember',
            isSingle: false
        },
        members: {
            type: 'ChannelMember',
            isSingle: false
        },
        config: {
            type: 'ChannelConfig',
            isSingle: true
        },
        created_by: {
            type: 'User',
            isSingle: true
        },
        truncated_by: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelConfig = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelConfigWithInfo = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMember = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        archived_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_accepted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMemberResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        archived_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_accepted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        invite_rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelMute = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelPushPreferences = (input)=>{
    const typeMappings = {
        disabled_until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        hide_messages_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        mute_expires_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        truncated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        members: {
            type: 'ChannelMember',
            isSingle: false
        },
        config: {
            type: 'ChannelConfigWithInfo',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        truncated_by: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelStateResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMember',
            isSingle: false
        },
        messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        pinned_messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        threads: {
            type: 'ThreadStateResponse',
            isSingle: false
        },
        hide_messages_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        active_live_locations: {
            type: 'SharedLocationResponseData',
            isSingle: false
        },
        pending_messages: {
            type: 'PendingMessageResponse',
            isSingle: false
        },
        read: {
            type: 'ReadStateResponse',
            isSingle: false
        },
        watchers: {
            type: 'UserResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        membership: {
            type: 'ChannelMember',
            isSingle: true
        },
        push_preferences: {
            type: 'ChannelPushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelStateResponseFields = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMember',
            isSingle: false
        },
        messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        pinned_messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        threads: {
            type: 'ThreadStateResponse',
            isSingle: false
        },
        hide_messages_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        active_live_locations: {
            type: 'SharedLocationResponseData',
            isSingle: false
        },
        pending_messages: {
            type: 'PendingMessageResponse',
            isSingle: false
        },
        read: {
            type: 'ReadStateResponse',
            isSingle: false
        },
        watchers: {
            type: 'UserResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        membership: {
            type: 'ChannelMember',
            isSingle: true
        },
        push_preferences: {
            type: 'ChannelPushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ChannelTypeConfig = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ChatActivityStatsResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageStatsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CheckResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Command = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ConfigResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CountByMinuteResponse = (input)=>{
    const typeMappings = {
        start_ts: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateBlockListResponse = (input)=>{
    const typeMappings = {
        blocklist: {
            type: 'BlockListResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateCallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateChannelTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateCommandResponse = (input)=>{
    const typeMappings = {
        command: {
            type: 'Command',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateGuestResponse = (input)=>{
    const typeMappings = {
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateImportResponse = (input)=>{
    const typeMappings = {
        import_task: {
            type: 'ImportTask',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CreateRoleResponse = (input)=>{
    const typeMappings = {
        role: {
            type: 'Role',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.CustomCheckResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeactivateUserResponse = (input)=>{
    const typeMappings = {
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteCallResponse = (input)=>{
    const typeMappings = {
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteChannelResponse = (input)=>{
    const typeMappings = {
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeleteReactionResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Device = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DeviceResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.DraftPayloadResponse = (input)=>{
    const typeMappings = {
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.DraftResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message: {
            type: 'DraftPayloadResponse',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        parent_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EgressRTMPResponse = (input)=>{
    const typeMappings = {
        started_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EntityCreatorResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        push_notifications: {
            type: 'PushNotificationSettingsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EventHook = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.EventResponse = (input)=>{
    const typeMappings = {
        event: {
            type: 'WSEvent',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ExportUserResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageResponse',
            isSingle: false
        },
        reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FlagDetails = (input)=>{
    const typeMappings = {
        automod: {
            type: 'AutomodDetails',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FlagFeedback = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.FullUserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        mutes: {
            type: 'UserMuteResponse',
            isSingle: false
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetActiveCallsStatusResponse = (input)=>{
    const typeMappings = {
        end_time: {
            type: 'DatetimeType',
            isSingle: true
        },
        start_time: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetApplicationResponse = (input)=>{
    const typeMappings = {
        app: {
            type: 'AppResponseFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetBlockListResponse = (input)=>{
    const typeMappings = {
        blocklist: {
            type: 'BlockListResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetBlockedUsersResponse = (input)=>{
    const typeMappings = {
        blocks: {
            type: 'BlockedUserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCallReportResponse = (input)=>{
    const typeMappings = {
        video_reactions: {
            type: 'VideoReactionsResponse',
            isSingle: false
        },
        chat_activity: {
            type: 'ChatActivityStatsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCallResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetChannelTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetCommandResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetConfigResponse = (input)=>{
    const typeMappings = {
        config: {
            type: 'ConfigResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetDraftResponse = (input)=>{
    const typeMappings = {
        draft: {
            type: 'DraftResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetImportResponse = (input)=>{
    const typeMappings = {
        import_task: {
            type: 'ImportTask',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetManyMessagesResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageWithChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetOrCreateCallResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetPushTemplatesResponse = (input)=>{
    const typeMappings = {
        templates: {
            type: 'PushTemplate',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetReactionsResponse = (input)=>{
    const typeMappings = {
        reactions: {
            type: 'Reaction',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetRepliesResponse = (input)=>{
    const typeMappings = {
        messages: {
            type: 'MessageResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.GetReviewQueueItemResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetSegmentResponse = (input)=>{
    const typeMappings = {
        segment: {
            type: 'SegmentResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetTaskResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GetThreadResponse = (input)=>{
    const typeMappings = {
        thread: {
            type: 'ThreadStateResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.GoLiveResponse = (input)=>{
    const typeMappings = {
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ImportTask = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        history: {
            type: 'ImportTaskHistory',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ImportTaskHistory = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ListBlockListResponse = (input)=>{
    const typeMappings = {
        blocklists: {
            type: 'BlockListResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListCallTypeResponse = (input)=>{
    const typeMappings = {
        call_types: {
            type: 'CallTypeResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListChannelTypesResponse = (input)=>{
    const typeMappings = {
        channel_types: {
            type: 'ChannelTypeConfig',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListCommandsResponse = (input)=>{
    const typeMappings = {
        commands: {
            type: 'Command',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListDevicesResponse = (input)=>{
    const typeMappings = {
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListImportsResponse = (input)=>{
    const typeMappings = {
        import_tasks: {
            type: 'ImportTask',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListPushProvidersResponse = (input)=>{
    const typeMappings = {
        push_providers: {
            type: 'PushProviderResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListRecordingsResponse = (input)=>{
    const typeMappings = {
        recordings: {
            type: 'CallRecording',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListRolesResponse = (input)=>{
    const typeMappings = {
        roles: {
            type: 'Role',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.ListTranscriptionsResponse = (input)=>{
    const typeMappings = {
        transcriptions: {
            type: 'CallTranscription',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.MarkReadResponse = (input)=>{
    const typeMappings = {
        event: {
            type: 'MessageReadEvent',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MemberResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMember',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.Message = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'Reaction',
            isSingle: false
        },
        mentioned_users: {
            type: 'User',
            isSingle: false
        },
        own_reactions: {
            type: 'Reaction',
            isSingle: false
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'User',
            isSingle: false
        },
        pinned_by: {
            type: 'User',
            isSingle: true
        },
        poll: {
            type: 'Poll',
            isSingle: true
        },
        quoted_message: {
            type: 'Message',
            isSingle: true
        },
        reminder: {
            type: 'MessageReminder',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocation',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageFlagResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        approved_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        rejected_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reviewed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        details: {
            type: 'FlagDetails',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        moderation_feedback: {
            type: 'FlagFeedback',
            isSingle: true
        },
        moderation_result: {
            type: 'MessageModerationResult',
            isSingle: true
        },
        reviewed_by: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageHistoryEntryResponse = (input)=>{
    const typeMappings = {
        message_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageModerationResult = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageReadEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponseCommonFields',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageReminder = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        remind_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'UserResponse',
            isSingle: false
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        pinned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocationResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageStatsResponse = (input)=>{
    const typeMappings = {
        count_over_time: {
            type: 'CountByMinuteResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.MessageWithChannelResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'UserResponse',
            isSingle: false
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        pinned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocationResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ModerationFlagResponse = (input)=>{
    const typeMappings = {
        review_queue_item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MuteChannelResponse = (input)=>{
    const typeMappings = {
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        channel_mute: {
            type: 'ChannelMute',
            isSingle: true
        },
        own_user: {
            type: 'OwnUser',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.MuteResponse = (input)=>{
    const typeMappings = {
        mutes: {
            type: 'UserMute',
            isSingle: false
        },
        own_user: {
            type: 'OwnUser',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.OwnUser = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        devices: {
            type: 'Device',
            isSingle: false
        },
        mutes: {
            type: 'UserMute',
            isSingle: false
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_engaged_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        push_preferences: {
            type: 'PushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.OwnUserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_mutes: {
            type: 'ChannelMute',
            isSingle: false
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        mutes: {
            type: 'UserMuteResponse',
            isSingle: false
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        push_preferences: {
            type: 'PushPreferences',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ParticipantCountByMinuteResponse = (input)=>{
    const typeMappings = {
        start_ts: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ParticipantCountOverTimeResponse = (input)=>{
    const typeMappings = {
        by_minute: {
            type: 'ParticipantCountByMinuteResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PendingMessageResponse = (input)=>{
    const typeMappings = {
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Poll = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_answers: {
            type: 'PollVote',
            isSingle: false
        },
        own_votes: {
            type: 'PollVote',
            isSingle: false
        },
        created_by: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollResponse = (input)=>{
    const typeMappings = {
        poll: {
            type: 'PollResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_answers: {
            type: 'PollVoteResponseData',
            isSingle: false
        },
        own_votes: {
            type: 'PollVoteResponseData',
            isSingle: false
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVote = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVoteResponse = (input)=>{
    const typeMappings = {
        vote: {
            type: 'PollVoteResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVoteResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PollVotesResponse = (input)=>{
    const typeMappings = {
        votes: {
            type: 'PollVoteResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PushNotificationFields = (input)=>{
    const typeMappings = {
        providers: {
            type: 'PushProvider',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PushNotificationSettingsResponse = (input)=>{
    const typeMappings = {
        disabled_until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PushPreferences = (input)=>{
    const typeMappings = {
        disabled_until: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PushProvider = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        disabled_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        push_templates: {
            type: 'PushTemplate',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.PushProviderResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        disabled_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.PushTemplate = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryBannedUsersResponse = (input)=>{
    const typeMappings = {
        bans: {
            type: 'BanResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallMembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallParticipantsResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        participants: {
            type: 'CallParticipantResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallStatsResponse = (input)=>{
    const typeMappings = {
        reports: {
            type: 'CallStatsReportSummaryResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCallsResponse = (input)=>{
    const typeMappings = {
        calls: {
            type: 'CallStateResponseFields',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryCampaignsResponse = (input)=>{
    const typeMappings = {
        campaigns: {
            type: 'CampaignResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryChannelsResponse = (input)=>{
    const typeMappings = {
        channels: {
            type: 'ChannelStateResponseFields',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryDraftsResponse = (input)=>{
    const typeMappings = {
        drafts: {
            type: 'DraftResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFeedModerationTemplate = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryFeedModerationTemplatesResponse = (input)=>{
    const typeMappings = {
        templates: {
            type: 'QueryFeedModerationTemplate',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryMessageFlagsResponse = (input)=>{
    const typeMappings = {
        flags: {
            type: 'MessageFlagResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryMessageHistoryResponse = (input)=>{
    const typeMappings = {
        message_history: {
            type: 'MessageHistoryEntryResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationConfigsResponse = (input)=>{
    const typeMappings = {
        configs: {
            type: 'ConfigResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationFlagsResponse = (input)=>{
    const typeMappings = {
        flags: {
            type: 'ModerationFlagResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryModerationLogsResponse = (input)=>{
    const typeMappings = {
        logs: {
            type: 'ActionLogResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryPollsResponse = (input)=>{
    const typeMappings = {
        polls: {
            type: 'PollResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryReactionsResponse = (input)=>{
    const typeMappings = {
        reactions: {
            type: 'ReactionResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryRemindersResponse = (input)=>{
    const typeMappings = {
        reminders: {
            type: 'ReminderResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryReviewQueueResponse = (input)=>{
    const typeMappings = {
        items: {
            type: 'ReviewQueueItemResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QuerySegmentTargetsResponse = (input)=>{
    const typeMappings = {
        targets: {
            type: 'SegmentTargetResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QuerySegmentsResponse = (input)=>{
    const typeMappings = {
        segments: {
            type: 'SegmentResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryThreadsResponse = (input)=>{
    const typeMappings = {
        threads: {
            type: 'ThreadStateResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.QueryUsersResponse = (input)=>{
    const typeMappings = {
        users: {
            type: 'FullUserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.Reaction = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionGroupResponse = (input)=>{
    const typeMappings = {
        first_reaction_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_reaction_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactionResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReactivateUserResponse = (input)=>{
    const typeMappings = {
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReadStateResponse = (input)=>{
    const typeMappings = {
        last_read: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReminderResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        remind_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ReviewQueueItemResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        actions: {
            type: 'ActionLogResponse',
            isSingle: false
        },
        bans: {
            type: 'Ban',
            isSingle: false
        },
        completed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        reviewed_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        assigned_to: {
            type: 'UserResponse',
            isSingle: true
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        },
        entity_creator: {
            type: 'EntityCreatorResponse',
            isSingle: true
        },
        feeds_v2_reaction: {
            type: 'Reaction',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction: {
            type: 'Reaction',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Role = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SearchResult = (input)=>{
    const typeMappings = {
        message: {
            type: 'SearchResultMessage',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SearchResultMessage = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        mentioned_users: {
            type: 'UserResponse',
            isSingle: false
        },
        own_reactions: {
            type: 'ReactionResponse',
            isSingle: false
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        message_text_updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        pin_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        pinned_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'UserResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        pinned_by: {
            type: 'UserResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        quoted_message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction_groups: {
            type: 'ReactionGroupResponse',
            isSingle: false
        },
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        },
        shared_location: {
            type: 'SharedLocationResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.Segment = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SegmentResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SegmentTargetResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SendMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SendReactionResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocation = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        end_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'Channel',
            isSingle: true
        },
        message: {
            type: 'Message',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocationResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        end_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocationResponseData = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        end_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SharedLocationsResponse = (input)=>{
    const typeMappings = {
        active_live_locations: {
            type: 'SharedLocationResponseData',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.StopLiveResponse = (input)=>{
    const typeMappings = {
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.SubmitActionResponse = (input)=>{
    const typeMappings = {
        item: {
            type: 'ReviewQueueItemResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadParticipant = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_read_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_thread_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        left_thread_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        thread_participants: {
            type: 'ThreadParticipant',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        parent_message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.ThreadStateResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        latest_replies: {
            type: 'MessageResponse',
            isSingle: false
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        read: {
            type: 'ReadStateResponse',
            isSingle: false
        },
        thread_participants: {
            type: 'ThreadParticipant',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        draft: {
            type: 'DraftResponse',
            isSingle: true
        },
        parent_message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.TruncateChannelResponse = (input)=>{
    const typeMappings = {
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsBatchResponse = (input)=>{
    const typeMappings = {
        counts_by_user: {
            type: 'UnreadCountsResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsChannel = (input)=>{
    const typeMappings = {
        last_read: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsResponse = (input)=>{
    const typeMappings = {
        channels: {
            type: 'UnreadCountsChannel',
            isSingle: false
        },
        threads: {
            type: 'UnreadCountsThread',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UnreadCountsThread = (input)=>{
    const typeMappings = {
        last_read: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateBlockListResponse = (input)=>{
    const typeMappings = {
        blocklist: {
            type: 'BlockListResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCallMembersResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCallResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'MemberResponse',
            isSingle: false
        },
        call: {
            type: 'CallResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCallTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateChannelPartialResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMemberResponse',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateChannelResponse = (input)=>{
    const typeMappings = {
        members: {
            type: 'ChannelMember',
            isSingle: false
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateChannelTypeResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateCommandResponse = (input)=>{
    const typeMappings = {
        command: {
            type: 'Command',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMemberPartialResponse = (input)=>{
    const typeMappings = {
        channel_member: {
            type: 'ChannelMemberResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMessagePartialResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateMessageResponse = (input)=>{
    const typeMappings = {
        message: {
            type: 'MessageResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateReminderResponse = (input)=>{
    const typeMappings = {
        reminder: {
            type: 'ReminderResponseData',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateThreadPartialResponse = (input)=>{
    const typeMappings = {
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpdateUsersResponse = (input)=>{
    const typeMappings = {
        users: {
            type: 'FullUserResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertConfigResponse = (input)=>{
    const typeMappings = {
        config: {
            type: 'ConfigResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertModerationTemplateResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertPushPreferencesResponse = (input)=>{
    const typeMappings = {
        user_preferences: {
            type: 'PushPreferences',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertPushProviderResponse = (input)=>{
    const typeMappings = {
        push_provider: {
            type: 'PushProviderResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UpsertPushTemplateResponse = (input)=>{
    const typeMappings = {
        template: {
            type: 'PushTemplate',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.User = (input)=>{
    const typeMappings = {
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_engaged_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserMute = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        target: {
            type: 'User',
            isSingle: true
        },
        user: {
            type: 'User',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserMuteResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        target: {
            type: 'UserResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserResponse = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        ban_expires: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        },
        devices: {
            type: 'DeviceResponse',
            isSingle: false
        },
        push_notifications: {
            type: 'PushNotificationSettingsResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.UserResponseCommonFields = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        updated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deactivated_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        deleted_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        last_active: {
            type: 'DatetimeType',
            isSingle: true
        },
        revoke_tokens_issued_before: {
            type: 'DatetimeType',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.VideoReactionOverTimeResponse = (input)=>{
    const typeMappings = {
        by_minute: {
            type: 'CountByMinuteResponse',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
decoders.VideoReactionsResponse = (input)=>{
    const typeMappings = {
        count_over_time: {
            type: 'VideoReactionOverTimeResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.WSEvent = (input)=>{
    const typeMappings = {
        created_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel_last_message_at: {
            type: 'DatetimeType',
            isSingle: true
        },
        channel: {
            type: 'ChannelResponse',
            isSingle: true
        },
        created_by: {
            type: 'UserResponse',
            isSingle: true
        },
        me: {
            type: 'OwnUserResponse',
            isSingle: true
        },
        member: {
            type: 'ChannelMember',
            isSingle: true
        },
        message: {
            type: 'MessageResponse',
            isSingle: true
        },
        poll: {
            type: 'PollResponseData',
            isSingle: true
        },
        poll_vote: {
            type: 'PollVoteResponseData',
            isSingle: true
        },
        reaction: {
            type: 'ReactionResponse',
            isSingle: true
        },
        thread: {
            type: 'ThreadResponse',
            isSingle: true
        },
        user: {
            type: 'UserResponse',
            isSingle: true
        }
    };
    return decode(typeMappings, input);
};
decoders.WrappedUnreadCountsResponse = (input)=>{
    const typeMappings = {
        channels: {
            type: 'UnreadCountsChannel',
            isSingle: false
        },
        threads: {
            type: 'UnreadCountsThread',
            isSingle: false
        }
    };
    return decode(typeMappings, input);
};
class CommonApi extends BaseApi {
    constructor(){
        super(...arguments);
        this.getApp = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/app', undefined, undefined);
            decoders.GetApplicationResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateApp = async (request)=>{
            const body = {
                async_url_enrich_enabled: request?.async_url_enrich_enabled,
                auto_translation_enabled: request?.auto_translation_enabled,
                before_message_send_hook_url: request?.before_message_send_hook_url,
                cdn_expiration_seconds: request?.cdn_expiration_seconds,
                channel_hide_members_only: request?.channel_hide_members_only,
                custom_action_handler_url: request?.custom_action_handler_url,
                disable_auth_checks: request?.disable_auth_checks,
                disable_permissions_checks: request?.disable_permissions_checks,
                enforce_unique_usernames: request?.enforce_unique_usernames,
                feeds_moderation_enabled: request?.feeds_moderation_enabled,
                feeds_v2_region: request?.feeds_v2_region,
                guest_user_creation_disabled: request?.guest_user_creation_disabled,
                image_moderation_enabled: request?.image_moderation_enabled,
                migrate_permissions_to_v2: request?.migrate_permissions_to_v2,
                moderation_enabled: request?.moderation_enabled,
                moderation_webhook_url: request?.moderation_webhook_url,
                multi_tenant_enabled: request?.multi_tenant_enabled,
                permission_version: request?.permission_version,
                reminders_interval: request?.reminders_interval,
                reminders_max_members: request?.reminders_max_members,
                revoke_tokens_issued_before: request?.revoke_tokens_issued_before,
                sns_key: request?.sns_key,
                sns_secret: request?.sns_secret,
                sns_topic_arn: request?.sns_topic_arn,
                sqs_key: request?.sqs_key,
                sqs_secret: request?.sqs_secret,
                sqs_url: request?.sqs_url,
                webhook_url: request?.webhook_url,
                allowed_flag_reasons: request?.allowed_flag_reasons,
                event_hooks: request?.event_hooks,
                image_moderation_block_labels: request?.image_moderation_block_labels,
                image_moderation_labels: request?.image_moderation_labels,
                user_search_disallowed_roles: request?.user_search_disallowed_roles,
                webhook_events: request?.webhook_events,
                apn_config: request?.apn_config,
                async_moderation_config: request?.async_moderation_config,
                datadog_info: request?.datadog_info,
                file_upload_config: request?.file_upload_config,
                firebase_config: request?.firebase_config,
                grants: request?.grants,
                huawei_config: request?.huawei_config,
                image_upload_config: request?.image_upload_config,
                moderation_dashboard_preferences: request?.moderation_dashboard_preferences,
                push_config: request?.push_config,
                xiaomi_config: request?.xiaomi_config
            };
            const response = await this.sendRequest('PATCH', '/api/v2/app', undefined, undefined, body);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listBlockLists = async (request)=>{
            const queryParams = {
                team: request?.team
            };
            const response = await this.sendRequest('GET', '/api/v2/blocklists', undefined, queryParams);
            decoders.ListBlockListResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createBlockList = async (request)=>{
            const body = {
                name: request?.name,
                words: request?.words,
                team: request?.team,
                type: request?.type
            };
            const response = await this.sendRequest('POST', '/api/v2/blocklists', undefined, undefined, body);
            decoders.CreateBlockListResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteBlockList = async (request)=>{
            const queryParams = {
                team: request?.team
            };
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/blocklists/{name}', pathParams, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getBlockList = async (request)=>{
            const queryParams = {
                team: request?.team
            };
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('GET', '/api/v2/blocklists/{name}', pathParams, queryParams);
            decoders.GetBlockListResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateBlockList = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const body = {
                team: request?.team,
                words: request?.words
            };
            const response = await this.sendRequest('PUT', '/api/v2/blocklists/{name}', pathParams, undefined, body);
            decoders.UpdateBlockListResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.checkPush = async (request)=>{
            const body = {
                apn_template: request?.apn_template,
                event_type: request?.event_type,
                firebase_data_template: request?.firebase_data_template,
                firebase_template: request?.firebase_template,
                message_id: request?.message_id,
                push_provider_name: request?.push_provider_name,
                push_provider_type: request?.push_provider_type,
                skip_devices: request?.skip_devices,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/check_push', undefined, undefined, body);
            decoders.CheckPushResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.checkSNS = async (request)=>{
            const body = {
                sns_key: request?.sns_key,
                sns_secret: request?.sns_secret,
                sns_topic_arn: request?.sns_topic_arn
            };
            const response = await this.sendRequest('POST', '/api/v2/check_sns', undefined, undefined, body);
            decoders.CheckSNSResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.checkSQS = async (request)=>{
            const body = {
                sqs_key: request?.sqs_key,
                sqs_secret: request?.sqs_secret,
                sqs_url: request?.sqs_url
            };
            const response = await this.sendRequest('POST', '/api/v2/check_sqs', undefined, undefined, body);
            decoders.CheckSQSResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteDevice = async (request)=>{
            const queryParams = {
                id: request?.id,
                user_id: request?.user_id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/devices', undefined, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listDevices = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const response = await this.sendRequest('GET', '/api/v2/devices', undefined, queryParams);
            decoders.ListDevicesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createDevice = async (request)=>{
            const body = {
                id: request?.id,
                push_provider: request?.push_provider,
                push_provider_name: request?.push_provider_name,
                user_id: request?.user_id,
                voip_token: request?.voip_token,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/devices', undefined, undefined, body);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.exportUsers = async (request)=>{
            const body = {
                user_ids: request?.user_ids
            };
            const response = await this.sendRequest('POST', '/api/v2/export/users', undefined, undefined, body);
            decoders.ExportUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listExternalStorage = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/external_storage', undefined, undefined);
            decoders.ListExternalStorageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createExternalStorage = async (request)=>{
            const body = {
                bucket: request?.bucket,
                name: request?.name,
                storage_type: request?.storage_type,
                gcs_credentials: request?.gcs_credentials,
                path: request?.path,
                aws_s3: request?.aws_s3,
                azure_blob: request?.azure_blob
            };
            const response = await this.sendRequest('POST', '/api/v2/external_storage', undefined, undefined, body);
            decoders.CreateExternalStorageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteExternalStorage = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/external_storage/{name}', pathParams, undefined);
            decoders.DeleteExternalStorageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateExternalStorage = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const body = {
                bucket: request?.bucket,
                storage_type: request?.storage_type,
                gcs_credentials: request?.gcs_credentials,
                path: request?.path,
                aws_s3: request?.aws_s3,
                azure_blob: request?.azure_blob
            };
            const response = await this.sendRequest('PUT', '/api/v2/external_storage/{name}', pathParams, undefined, body);
            decoders.UpdateExternalStorageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.checkExternalStorage = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('GET', '/api/v2/external_storage/{name}/check', pathParams, undefined);
            decoders.CheckExternalStorageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createGuest = async (request)=>{
            const body = {
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/guest', undefined, undefined, body);
            decoders.CreateGuestResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createImportURL = async (request)=>{
            const body = {
                filename: request?.filename
            };
            const response = await this.sendRequest('POST', '/api/v2/import_urls', undefined, undefined, body);
            decoders.CreateImportURLResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listImports = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/imports', undefined, undefined);
            decoders.ListImportsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createImport = async (request)=>{
            const body = {
                mode: request?.mode,
                path: request?.path
            };
            const response = await this.sendRequest('POST', '/api/v2/imports', undefined, undefined, body);
            decoders.CreateImportResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getImport = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/imports/{id}', pathParams, undefined);
            decoders.GetImportResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getOG = async (request)=>{
            const queryParams = {
                url: request?.url
            };
            const response = await this.sendRequest('GET', '/api/v2/og', undefined, queryParams);
            decoders.GetOGResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listPermissions = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/permissions', undefined, undefined);
            decoders.ListPermissionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getPermission = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/permissions/{id}', pathParams, undefined);
            decoders.GetCustomPermissionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listPushProviders = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/push_providers', undefined, undefined);
            decoders.ListPushProvidersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.upsertPushProvider = async (request)=>{
            const body = {
                push_provider: request?.push_provider
            };
            const response = await this.sendRequest('POST', '/api/v2/push_providers', undefined, undefined, body);
            decoders.UpsertPushProviderResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deletePushProvider = async (request)=>{
            const pathParams = {
                type: request?.type,
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/push_providers/{type}/{name}', pathParams, undefined);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getRateLimits = async (request)=>{
            const queryParams = {
                server_side: request?.server_side,
                android: request?.android,
                ios: request?.ios,
                web: request?.web,
                endpoints: request?.endpoints
            };
            const response = await this.sendRequest('GET', '/api/v2/rate_limits', undefined, queryParams);
            decoders.GetRateLimitsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listRoles = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/roles', undefined, undefined);
            decoders.ListRolesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createRole = async (request)=>{
            const body = {
                name: request?.name
            };
            const response = await this.sendRequest('POST', '/api/v2/roles', undefined, undefined, body);
            decoders.CreateRoleResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteRole = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/roles/{name}', pathParams, undefined);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getTask = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/tasks/{id}', pathParams, undefined);
            decoders.GetTaskResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteFile = async (request)=>{
            const queryParams = {
                url: request?.url
            };
            const response = await this.sendRequest('DELETE', '/api/v2/uploads/file', undefined, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.uploadFile = async (request)=>{
            const body = {
                file: request?.file,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/uploads/file', undefined, undefined, body);
            decoders.FileUploadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteImage = async (request)=>{
            const queryParams = {
                url: request?.url
            };
            const response = await this.sendRequest('DELETE', '/api/v2/uploads/image', undefined, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.uploadImage = async (request)=>{
            const body = {
                file: request?.file,
                upload_sizes: request?.upload_sizes,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/uploads/image', undefined, undefined, body);
            decoders.ImageUploadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryUsers = async (request)=>{
            const queryParams = {
                payload: request?.payload
            };
            const response = await this.sendRequest('GET', '/api/v2/users', undefined, queryParams);
            decoders.QueryUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateUsersPartial = async (request)=>{
            const body = {
                users: request?.users
            };
            const response = await this.sendRequest('PATCH', '/api/v2/users', undefined, undefined, body);
            decoders.UpdateUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateUsers = async (request)=>{
            const body = {
                users: request?.users
            };
            const response = await this.sendRequest('POST', '/api/v2/users', undefined, undefined, body);
            decoders.UpdateUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getBlockedUsers = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const response = await this.sendRequest('GET', '/api/v2/users/block', undefined, queryParams);
            decoders.GetBlockedUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.blockUsers = async (request)=>{
            const body = {
                blocked_user_id: request?.blocked_user_id,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/users/block', undefined, undefined, body);
            decoders.BlockUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deactivateUsers = async (request)=>{
            const body = {
                user_ids: request?.user_ids,
                created_by_id: request?.created_by_id,
                mark_channels_deleted: request?.mark_channels_deleted,
                mark_messages_deleted: request?.mark_messages_deleted
            };
            const response = await this.sendRequest('POST', '/api/v2/users/deactivate', undefined, undefined, body);
            decoders.DeactivateUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteUsers = async (request)=>{
            const body = {
                user_ids: request?.user_ids,
                calls: request?.calls,
                conversations: request?.conversations,
                messages: request?.messages,
                new_call_owner_id: request?.new_call_owner_id,
                new_channel_owner_id: request?.new_channel_owner_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/users/delete', undefined, undefined, body);
            decoders.DeleteUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getUserLiveLocations = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const response = await this.sendRequest('GET', '/api/v2/users/live_locations', undefined, queryParams);
            decoders.SharedLocationsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateLiveLocation = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const body = {
                created_by_device_id: request?.created_by_device_id,
                message_id: request?.message_id,
                end_at: request?.end_at,
                latitude: request?.latitude,
                longitude: request?.longitude
            };
            const response = await this.sendRequest('PUT', '/api/v2/users/live_locations', undefined, queryParams, body);
            decoders.SharedLocationResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.reactivateUsers = async (request)=>{
            const body = {
                user_ids: request?.user_ids,
                created_by_id: request?.created_by_id,
                restore_channels: request?.restore_channels,
                restore_messages: request?.restore_messages
            };
            const response = await this.sendRequest('POST', '/api/v2/users/reactivate', undefined, undefined, body);
            decoders.ReactivateUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.restoreUsers = async (request)=>{
            const body = {
                user_ids: request?.user_ids
            };
            const response = await this.sendRequest('POST', '/api/v2/users/restore', undefined, undefined, body);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unblockUsers = async (request)=>{
            const body = {
                blocked_user_id: request?.blocked_user_id,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/users/unblock', undefined, undefined, body);
            decoders.UnblockUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deactivateUser = async (request)=>{
            const pathParams = {
                user_id: request?.user_id
            };
            const body = {
                created_by_id: request?.created_by_id,
                mark_messages_deleted: request?.mark_messages_deleted
            };
            const response = await this.sendRequest('POST', '/api/v2/users/{user_id}/deactivate', pathParams, undefined, body);
            decoders.DeactivateUserResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.exportUser = async (request)=>{
            const pathParams = {
                user_id: request?.user_id
            };
            const response = await this.sendRequest('GET', '/api/v2/users/{user_id}/export', pathParams, undefined);
            decoders.ExportUserResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.reactivateUser = async (request)=>{
            const pathParams = {
                user_id: request?.user_id
            };
            const body = {
                created_by_id: request?.created_by_id,
                name: request?.name,
                restore_messages: request?.restore_messages
            };
            const response = await this.sendRequest('POST', '/api/v2/users/{user_id}/reactivate', pathParams, undefined, body);
            decoders.ReactivateUserResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
    }
}
class VideoApi extends BaseApi {
    constructor(){
        super(...arguments);
        this.getActiveCallsStatus = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/video/active_calls_status', undefined, undefined);
            decoders.GetActiveCallsStatusResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryUserFeedback = async (request)=>{
            const queryParams = {
                full: request?.full
            };
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter_conditions: request?.filter_conditions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/feedback', undefined, queryParams, body);
            decoders.QueryUserFeedbackResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryCallMembers = async (request)=>{
            const body = {
                id: request?.id,
                type: request?.type,
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter_conditions: request?.filter_conditions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/members', undefined, undefined, body);
            decoders.QueryCallMembersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryCallStats = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter_conditions: request?.filter_conditions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/stats', undefined, undefined, body);
            decoders.QueryCallStatsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getCall = async (request)=>{
            const queryParams = {
                members_limit: request?.members_limit,
                ring: request?.ring,
                notify: request?.notify,
                video: request?.video
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/video/call/{type}/{id}', pathParams, queryParams);
            decoders.GetCallResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateCall = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                starts_at: request?.starts_at,
                custom: request?.custom,
                settings_override: request?.settings_override
            };
            const response = await this.sendRequest('PATCH', '/api/v2/video/call/{type}/{id}', pathParams, undefined, body);
            decoders.UpdateCallResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getOrCreateCall = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                members_limit: request?.members_limit,
                notify: request?.notify,
                ring: request?.ring,
                video: request?.video,
                data: request?.data
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}', pathParams, undefined, body);
            decoders.GetOrCreateCallResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.blockUser = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                user_id: request?.user_id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/block', pathParams, undefined, body);
            decoders.BlockUserResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteCall = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                hard: request?.hard
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/delete', pathParams, undefined, body);
            decoders.DeleteCallResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.sendCallEvent = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                user_id: request?.user_id,
                custom: request?.custom,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/event', pathParams, undefined, body);
            decoders.SendCallEventResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.collectUserFeedback = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                rating: request?.rating,
                sdk: request?.sdk,
                sdk_version: request?.sdk_version,
                reason: request?.reason,
                user_session_id: request?.user_session_id,
                custom: request?.custom
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/feedback', pathParams, undefined, body);
            decoders.CollectUserFeedbackResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.goLive = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                recording_storage_name: request?.recording_storage_name,
                start_closed_caption: request?.start_closed_caption,
                start_hls: request?.start_hls,
                start_recording: request?.start_recording,
                start_transcription: request?.start_transcription,
                transcription_storage_name: request?.transcription_storage_name
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/go_live', pathParams, undefined, body);
            decoders.GoLiveResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.endCall = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/mark_ended', pathParams, undefined);
            decoders.EndCallResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateCallMembers = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                remove_members: request?.remove_members,
                update_members: request?.update_members
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/members', pathParams, undefined, body);
            decoders.UpdateCallMembersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.muteUsers = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                audio: request?.audio,
                mute_all_users: request?.mute_all_users,
                muted_by_id: request?.muted_by_id,
                screenshare: request?.screenshare,
                screenshare_audio: request?.screenshare_audio,
                video: request?.video,
                user_ids: request?.user_ids,
                muted_by: request?.muted_by
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/mute_users', pathParams, undefined, body);
            decoders.MuteUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryCallParticipants = async (request)=>{
            const queryParams = {
                limit: request?.limit
            };
            const pathParams = {
                id: request?.id,
                type: request?.type
            };
            const body = {
                filter_conditions: request?.filter_conditions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/participants', pathParams, queryParams, body);
            decoders.QueryCallParticipantsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.videoPin = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                session_id: request?.session_id,
                user_id: request?.user_id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/pin', pathParams, undefined, body);
            decoders.PinResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listRecordings = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/video/call/{type}/{id}/recordings', pathParams, undefined);
            decoders.ListRecordingsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getCallReport = async (request)=>{
            const queryParams = {
                session_id: request?.session_id
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/video/call/{type}/{id}/report', pathParams, queryParams);
            decoders.GetCallReportResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startRTMPBroadcasts = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                broadcasts: request?.broadcasts
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/rtmp_broadcasts', pathParams, undefined, body);
            decoders.StartRTMPBroadcastsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopAllRTMPBroadcasts = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/rtmp_broadcasts/stop', pathParams, undefined);
            decoders.StopAllRTMPBroadcastsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopRTMPBroadcast = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id,
                name: request?.name
            };
            const body = {};
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/rtmp_broadcasts/{name}/stop', pathParams, undefined, body);
            decoders.StopRTMPBroadcastsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startHLSBroadcasting = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_broadcasting', pathParams, undefined);
            decoders.StartHLSBroadcastingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startClosedCaptions = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                enable_transcription: request?.enable_transcription,
                external_storage: request?.external_storage,
                language: request?.language
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_closed_captions', pathParams, undefined, body);
            decoders.StartClosedCaptionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startFrameRecording = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                recording_external_storage: request?.recording_external_storage
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_frame_recording', pathParams, undefined, body);
            decoders.StartFrameRecordingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startRecording = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                recording_external_storage: request?.recording_external_storage
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_recording', pathParams, undefined, body);
            decoders.StartRecordingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startTranscription = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                enable_closed_captions: request?.enable_closed_captions,
                language: request?.language,
                transcription_external_storage: request?.transcription_external_storage
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/start_transcription', pathParams, undefined, body);
            decoders.StartTranscriptionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopHLSBroadcasting = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_broadcasting', pathParams, undefined);
            decoders.StopHLSBroadcastingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopClosedCaptions = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                stop_transcription: request?.stop_transcription
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_closed_captions', pathParams, undefined, body);
            decoders.StopClosedCaptionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopFrameRecording = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_frame_recording', pathParams, undefined);
            decoders.StopFrameRecordingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopLive = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                continue_closed_caption: request?.continue_closed_caption,
                continue_hls: request?.continue_hls,
                continue_recording: request?.continue_recording,
                continue_rtmp_broadcasts: request?.continue_rtmp_broadcasts,
                continue_transcription: request?.continue_transcription
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_live', pathParams, undefined, body);
            decoders.StopLiveResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopRecording = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_recording', pathParams, undefined);
            decoders.StopRecordingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.stopTranscription = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                stop_closed_captions: request?.stop_closed_captions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/stop_transcription', pathParams, undefined, body);
            decoders.StopTranscriptionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listTranscriptions = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/video/call/{type}/{id}/transcriptions', pathParams, undefined);
            decoders.ListTranscriptionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unblockUser = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                user_id: request?.user_id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/unblock', pathParams, undefined, body);
            decoders.UnblockUserResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.videoUnpin = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                session_id: request?.session_id,
                user_id: request?.user_id
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/unpin', pathParams, undefined, body);
            decoders.UnpinResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateUserPermissions = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                user_id: request?.user_id,
                grant_permissions: request?.grant_permissions,
                revoke_permissions: request?.revoke_permissions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/call/{type}/{id}/user_permissions', pathParams, undefined, body);
            decoders.UpdateUserPermissionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteRecording = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id,
                session: request?.session,
                filename: request?.filename
            };
            const response = await this.sendRequest('DELETE', '/api/v2/video/call/{type}/{id}/{session}/recordings/{filename}', pathParams, undefined);
            decoders.DeleteRecordingResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteTranscription = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id,
                session: request?.session,
                filename: request?.filename
            };
            const response = await this.sendRequest('DELETE', '/api/v2/video/call/{type}/{id}/{session}/transcriptions/{filename}', pathParams, undefined);
            decoders.DeleteTranscriptionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryCalls = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter_conditions: request?.filter_conditions
            };
            const response = await this.sendRequest('POST', '/api/v2/video/calls', undefined, undefined, body);
            decoders.QueryCallsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listCallTypes = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/video/calltypes', undefined, undefined);
            decoders.ListCallTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createCallType = async (request)=>{
            const body = {
                name: request?.name,
                external_storage: request?.external_storage,
                grants: request?.grants,
                notification_settings: request?.notification_settings,
                settings: request?.settings
            };
            const response = await this.sendRequest('POST', '/api/v2/video/calltypes', undefined, undefined, body);
            decoders.CreateCallTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteCallType = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/video/calltypes/{name}', pathParams, undefined);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getCallType = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('GET', '/api/v2/video/calltypes/{name}', pathParams, undefined);
            decoders.GetCallTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateCallType = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const body = {
                external_storage: request?.external_storage,
                grants: request?.grants,
                notification_settings: request?.notification_settings,
                settings: request?.settings
            };
            const response = await this.sendRequest('PUT', '/api/v2/video/calltypes/{name}', pathParams, undefined, body);
            decoders.UpdateCallTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getEdges = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/video/edges', undefined, undefined);
            decoders.GetEdgesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryAggregateCallStats = async (request)=>{
            const body = {
                from: request?.from,
                to: request?.to,
                report_types: request?.report_types
            };
            const response = await this.sendRequest('POST', '/api/v2/video/stats', undefined, undefined, body);
            decoders.QueryAggregateCallStatsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
    }
}
class CallApi {
    constructor(videoApi, type, id){
        this.videoApi = videoApi;
        this.type = type;
        this.id = id;
        this.get = (request)=>{
            return this.videoApi.getCall({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.update = (request)=>{
            return this.videoApi.updateCall({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.getOrCreate = (request)=>{
            return this.videoApi.getOrCreateCall({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.blockUser = (request)=>{
            return this.videoApi.blockUser({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.delete = (request)=>{
            return this.videoApi.deleteCall({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.sendCallEvent = (request)=>{
            return this.videoApi.sendCallEvent({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.collectUserFeedback = (request)=>{
            return this.videoApi.collectUserFeedback({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.goLive = (request)=>{
            return this.videoApi.goLive({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.end = ()=>{
            return this.videoApi.endCall({
                id: this.id,
                type: this.type
            });
        };
        this.updateCallMembers = (request)=>{
            return this.videoApi.updateCallMembers({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.muteUsers = (request)=>{
            return this.videoApi.muteUsers({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.queryCallParticipants = (request)=>{
            return this.videoApi.queryCallParticipants({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.videoPin = (request)=>{
            return this.videoApi.videoPin({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.listRecordings = ()=>{
            return this.videoApi.listRecordings({
                id: this.id,
                type: this.type
            });
        };
        this.getCallReport = (request)=>{
            return this.videoApi.getCallReport({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.startRTMPBroadcasts = (request)=>{
            return this.videoApi.startRTMPBroadcasts({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.stopAllRTMPBroadcasts = ()=>{
            return this.videoApi.stopAllRTMPBroadcasts({
                id: this.id,
                type: this.type
            });
        };
        this.stopRTMPBroadcast = (request)=>{
            return this.videoApi.stopRTMPBroadcast({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.startHLSBroadcasting = ()=>{
            return this.videoApi.startHLSBroadcasting({
                id: this.id,
                type: this.type
            });
        };
        this.startClosedCaptions = (request)=>{
            return this.videoApi.startClosedCaptions({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.startFrameRecording = (request)=>{
            return this.videoApi.startFrameRecording({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.startRecording = (request)=>{
            return this.videoApi.startRecording({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.startTranscription = (request)=>{
            return this.videoApi.startTranscription({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.stopHLSBroadcasting = ()=>{
            return this.videoApi.stopHLSBroadcasting({
                id: this.id,
                type: this.type
            });
        };
        this.stopClosedCaptions = (request)=>{
            return this.videoApi.stopClosedCaptions({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.stopFrameRecording = ()=>{
            return this.videoApi.stopFrameRecording({
                id: this.id,
                type: this.type
            });
        };
        this.stopLive = (request)=>{
            return this.videoApi.stopLive({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.stopRecording = ()=>{
            return this.videoApi.stopRecording({
                id: this.id,
                type: this.type
            });
        };
        this.stopTranscription = (request)=>{
            return this.videoApi.stopTranscription({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.listTranscriptions = ()=>{
            return this.videoApi.listTranscriptions({
                id: this.id,
                type: this.type
            });
        };
        this.unblockUser = (request)=>{
            return this.videoApi.unblockUser({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.videoUnpin = (request)=>{
            return this.videoApi.videoUnpin({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.updateUserPermissions = (request)=>{
            return this.videoApi.updateUserPermissions({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.deleteRecording = (request)=>{
            return this.videoApi.deleteRecording({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.deleteTranscription = (request)=>{
            return this.videoApi.deleteTranscription({
                id: this.id,
                type: this.type,
                ...request
            });
        };
    }
}
class StreamCall extends CallApi {
    constructor(){
        super(...arguments);
        this.create = this.getOrCreate;
        this.queryMembers = (request)=>{
            return this.videoApi.queryCallMembers({
                id: this.id,
                type: this.type,
                ...request ?? {}
            });
        };
    }
    get cid() {
        return `${this.type}:${this.id}`;
    }
}
class StreamVideoClient extends VideoApi {
    constructor({ streamClient, ...apiConfig }){
        super(apiConfig);
        this.call = (type, id)=>{
            return new StreamCall(this, type, id);
        };
        this.connectOpenAi = async (options)=>{
            let doCreateRealtimeClient;
            try {
                doCreateRealtimeClient = (await (()=>{
                    const e = new Error("Cannot find module '@stream-io/openai-realtime-api'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                })()).createRealtimeClient;
            } catch  {
                throw new Error('Cannot create Realtime API client. Is @stream-io/openai-realtime-api installed?');
            }
            if (!options.agentUserId) {
                throw new Error('"agentUserId" must by specified in options');
            }
            const token = this.streamClient.generateCallToken({
                user_id: options.agentUserId,
                call_cids: [
                    options.call.cid
                ],
                validity_in_seconds: options.validityInSeconds
            });
            const realtimeClient = doCreateRealtimeClient({
                baseUrl: this.apiConfig.baseUrl,
                call: options.call,
                streamApiKey: this.apiConfig.apiKey,
                streamUserToken: token,
                openAiApiKey: options.openAiApiKey,
                model: options.model
            });
            await realtimeClient.connect();
            return realtimeClient;
        };
        this.streamClient = streamClient;
    }
}
class ChatApi extends BaseApi {
    constructor(){
        super(...arguments);
        this.queryCampaigns = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                user_limit: request?.user_limit,
                sort: request?.sort,
                filter: request?.filter
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/campaigns/query', undefined, undefined, body);
            decoders.QueryCampaignsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getCampaign = async (request)=>{
            const queryParams = {
                prev: request?.prev,
                next: request?.next,
                limit: request?.limit
            };
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/campaigns/{id}', pathParams, queryParams);
            decoders.GetCampaignResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.startCampaign = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                scheduled_for: request?.scheduled_for,
                stop_at: request?.stop_at
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/campaigns/{id}/start', pathParams, undefined, body);
            decoders.StartCampaignResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.scheduleCampaign = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {};
            const response = await this.sendRequest('POST', '/api/v2/chat/campaigns/{id}/stop', pathParams, undefined, body);
            decoders.CampaignResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryChannels = async (request)=>{
            const body = {
                limit: request?.limit,
                member_limit: request?.member_limit,
                message_limit: request?.message_limit,
                offset: request?.offset,
                state: request?.state,
                user_id: request?.user_id,
                sort: request?.sort,
                filter_conditions: request?.filter_conditions,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels', undefined, undefined, body);
            decoders.QueryChannelsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteChannels = async (request)=>{
            const body = {
                cids: request?.cids,
                hard_delete: request?.hard_delete
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/delete', undefined, undefined, body);
            decoders.DeleteChannelsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.markChannelsRead = async (request)=>{
            const body = {
                user_id: request?.user_id,
                read_by_channel: request?.read_by_channel,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/read', undefined, undefined, body);
            decoders.MarkReadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getOrCreateDistinctChannel = async (request)=>{
            const pathParams = {
                type: request?.type
            };
            const body = {
                hide_for_creator: request?.hide_for_creator,
                state: request?.state,
                thread_unread_counts: request?.thread_unread_counts,
                data: request?.data,
                members: request?.members,
                messages: request?.messages,
                watchers: request?.watchers
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/query', pathParams, undefined, body);
            decoders.ChannelStateResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteChannel = async (request)=>{
            const queryParams = {
                hard_delete: request?.hard_delete
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}', pathParams, queryParams);
            decoders.DeleteChannelResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateChannelPartial = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                user_id: request?.user_id,
                unset: request?.unset,
                set: request?.set,
                user: request?.user
            };
            const response = await this.sendRequest('PATCH', '/api/v2/chat/channels/{type}/{id}', pathParams, undefined, body);
            decoders.UpdateChannelPartialResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateChannel = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                accept_invite: request?.accept_invite,
                cooldown: request?.cooldown,
                hide_history: request?.hide_history,
                reject_invite: request?.reject_invite,
                skip_push: request?.skip_push,
                user_id: request?.user_id,
                add_members: request?.add_members,
                add_moderators: request?.add_moderators,
                assign_roles: request?.assign_roles,
                demote_moderators: request?.demote_moderators,
                invites: request?.invites,
                remove_members: request?.remove_members,
                data: request?.data,
                message: request?.message,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}', pathParams, undefined, body);
            decoders.UpdateChannelResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteDraft = async (request)=>{
            const queryParams = {
                parent_id: request?.parent_id,
                user_id: request?.user_id
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}/draft', pathParams, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getDraft = async (request)=>{
            const queryParams = {
                parent_id: request?.parent_id,
                user_id: request?.user_id
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/channels/{type}/{id}/draft', pathParams, queryParams);
            decoders.GetDraftResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.sendEvent = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                event: request?.event
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/event', pathParams, undefined, body);
            decoders.EventResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteFile = async (request)=>{
            const queryParams = {
                url: request?.url
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}/file', pathParams, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.uploadFile = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                file: request?.file,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/file', pathParams, undefined, body);
            decoders.FileUploadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.hideChannel = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                clear_history: request?.clear_history,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/hide', pathParams, undefined, body);
            decoders.HideChannelResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteImage = async (request)=>{
            const queryParams = {
                url: request?.url
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/channels/{type}/{id}/image', pathParams, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.uploadImage = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                file: request?.file,
                upload_sizes: request?.upload_sizes,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/image', pathParams, undefined, body);
            decoders.ImageUploadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateMemberPartial = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                unset: request?.unset,
                set: request?.set
            };
            const response = await this.sendRequest('PATCH', '/api/v2/chat/channels/{type}/{id}/member', pathParams, queryParams, body);
            decoders.UpdateMemberPartialResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.sendMessage = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                message: request?.message,
                force_moderation: request?.force_moderation,
                keep_channel_hidden: request?.keep_channel_hidden,
                pending: request?.pending,
                skip_enrich_url: request?.skip_enrich_url,
                skip_push: request?.skip_push,
                pending_message_metadata: request?.pending_message_metadata
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/message', pathParams, undefined, body);
            decoders.SendMessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getManyMessages = async (request)=>{
            const queryParams = {
                ids: request?.ids
            };
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/channels/{type}/{id}/messages', pathParams, queryParams);
            decoders.GetManyMessagesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getOrCreateChannel = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                hide_for_creator: request?.hide_for_creator,
                state: request?.state,
                thread_unread_counts: request?.thread_unread_counts,
                data: request?.data,
                members: request?.members,
                messages: request?.messages,
                watchers: request?.watchers
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/query', pathParams, undefined, body);
            decoders.ChannelStateResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.markRead = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                message_id: request?.message_id,
                thread_id: request?.thread_id,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/read', pathParams, undefined, body);
            decoders.MarkReadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.showChannel = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/show', pathParams, undefined, body);
            decoders.ShowChannelResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.truncateChannel = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                hard_delete: request?.hard_delete,
                skip_push: request?.skip_push,
                truncated_at: request?.truncated_at,
                user_id: request?.user_id,
                member_ids: request?.member_ids,
                message: request?.message,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/truncate', pathParams, undefined, body);
            decoders.TruncateChannelResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.markUnread = async (request)=>{
            const pathParams = {
                type: request?.type,
                id: request?.id
            };
            const body = {
                message_id: request?.message_id,
                thread_id: request?.thread_id,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channels/{type}/{id}/unread', pathParams, undefined, body);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listChannelTypes = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/chat/channeltypes', undefined, undefined);
            decoders.ListChannelTypesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createChannelType = async (request)=>{
            const body = {
                automod: request?.automod,
                automod_behavior: request?.automod_behavior,
                max_message_length: request?.max_message_length,
                name: request?.name,
                blocklist: request?.blocklist,
                blocklist_behavior: request?.blocklist_behavior,
                connect_events: request?.connect_events,
                custom_events: request?.custom_events,
                mark_messages_pending: request?.mark_messages_pending,
                message_retention: request?.message_retention,
                mutes: request?.mutes,
                partition_size: request?.partition_size,
                partition_ttl: request?.partition_ttl,
                polls: request?.polls,
                push_notifications: request?.push_notifications,
                reactions: request?.reactions,
                read_events: request?.read_events,
                replies: request?.replies,
                search: request?.search,
                shared_locations: request?.shared_locations,
                skip_last_msg_update_for_system_msgs: request?.skip_last_msg_update_for_system_msgs,
                typing_events: request?.typing_events,
                uploads: request?.uploads,
                url_enrichment: request?.url_enrichment,
                user_message_reminders: request?.user_message_reminders,
                blocklists: request?.blocklists,
                commands: request?.commands,
                permissions: request?.permissions,
                grants: request?.grants
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/channeltypes', undefined, undefined, body);
            decoders.CreateChannelTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteChannelType = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/channeltypes/{name}', pathParams, undefined);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getChannelType = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/channeltypes/{name}', pathParams, undefined);
            decoders.GetChannelTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateChannelType = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const body = {
                automod: request?.automod,
                automod_behavior: request?.automod_behavior,
                max_message_length: request?.max_message_length,
                blocklist: request?.blocklist,
                blocklist_behavior: request?.blocklist_behavior,
                connect_events: request?.connect_events,
                custom_events: request?.custom_events,
                mark_messages_pending: request?.mark_messages_pending,
                mutes: request?.mutes,
                partition_size: request?.partition_size,
                partition_ttl: request?.partition_ttl,
                polls: request?.polls,
                push_notifications: request?.push_notifications,
                quotes: request?.quotes,
                reactions: request?.reactions,
                read_events: request?.read_events,
                reminders: request?.reminders,
                replies: request?.replies,
                search: request?.search,
                shared_locations: request?.shared_locations,
                skip_last_msg_update_for_system_msgs: request?.skip_last_msg_update_for_system_msgs,
                typing_events: request?.typing_events,
                uploads: request?.uploads,
                url_enrichment: request?.url_enrichment,
                user_message_reminders: request?.user_message_reminders,
                allowed_flag_reasons: request?.allowed_flag_reasons,
                blocklists: request?.blocklists,
                commands: request?.commands,
                permissions: request?.permissions,
                automod_thresholds: request?.automod_thresholds,
                grants: request?.grants
            };
            const response = await this.sendRequest('PUT', '/api/v2/chat/channeltypes/{name}', pathParams, undefined, body);
            decoders.UpdateChannelTypeResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.listCommands = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/chat/commands', undefined, undefined);
            decoders.ListCommandsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createCommand = async (request)=>{
            const body = {
                description: request?.description,
                name: request?.name,
                args: request?.args,
                set: request?.set
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/commands', undefined, undefined, body);
            decoders.CreateCommandResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteCommand = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/commands/{name}', pathParams, undefined);
            decoders.DeleteCommandResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getCommand = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/commands/{name}', pathParams, undefined);
            decoders.GetCommandResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateCommand = async (request)=>{
            const pathParams = {
                name: request?.name
            };
            const body = {
                description: request?.description,
                args: request?.args,
                set: request?.set
            };
            const response = await this.sendRequest('PUT', '/api/v2/chat/commands/{name}', pathParams, undefined, body);
            decoders.UpdateCommandResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryDrafts = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/drafts/query', undefined, undefined, body);
            decoders.QueryDraftsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.exportChannels = async (request)=>{
            const body = {
                channels: request?.channels,
                clear_deleted_message_text: request?.clear_deleted_message_text,
                export_users: request?.export_users,
                include_soft_deleted_channels: request?.include_soft_deleted_channels,
                include_truncated_messages: request?.include_truncated_messages,
                version: request?.version
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/export_channels', undefined, undefined, body);
            decoders.ExportChannelsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryMembers = async (request)=>{
            const queryParams = {
                payload: request?.payload
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/members', undefined, queryParams);
            decoders.MembersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryMessageHistory = async (request)=>{
            const body = {
                filter: request?.filter,
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/history', undefined, undefined, body);
            decoders.QueryMessageHistoryResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteMessage = async (request)=>{
            const queryParams = {
                hard: request?.hard,
                deleted_by: request?.deleted_by
            };
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/messages/{id}', pathParams, queryParams);
            decoders.DeleteMessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getMessage = async (request)=>{
            const queryParams = {
                show_deleted_message: request?.show_deleted_message
            };
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/messages/{id}', pathParams, queryParams);
            decoders.GetMessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateMessage = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                message: request?.message,
                skip_enrich_url: request?.skip_enrich_url,
                skip_push: request?.skip_push
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}', pathParams, undefined, body);
            decoders.UpdateMessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateMessagePartial = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                skip_enrich_url: request?.skip_enrich_url,
                user_id: request?.user_id,
                unset: request?.unset,
                set: request?.set,
                user: request?.user
            };
            const response = await this.sendRequest('PUT', '/api/v2/chat/messages/{id}', pathParams, undefined, body);
            decoders.UpdateMessagePartialResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.runMessageAction = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                form_data: request?.form_data,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}/action', pathParams, undefined, body);
            decoders.MessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.commitMessage = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {};
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}/commit', pathParams, undefined, body);
            decoders.MessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.sendReaction = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                reaction: request?.reaction,
                enforce_unique: request?.enforce_unique,
                skip_push: request?.skip_push
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}/reaction', pathParams, undefined, body);
            decoders.SendReactionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteReaction = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                id: request?.id,
                type: request?.type
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/messages/{id}/reaction/{type}', pathParams, queryParams);
            decoders.DeleteReactionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getReactions = async (request)=>{
            const queryParams = {
                limit: request?.limit,
                offset: request?.offset
            };
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/messages/{id}/reactions', pathParams, queryParams);
            decoders.GetReactionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryReactions = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}/reactions', pathParams, undefined, body);
            decoders.QueryReactionsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.translateMessage = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                language: request?.language
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}/translate', pathParams, undefined, body);
            decoders.MessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.undeleteMessage = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                message: request?.message,
                skip_enrich_url: request?.skip_enrich_url,
                skip_push: request?.skip_push
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{id}/undelete', pathParams, undefined, body);
            decoders.UpdateMessageResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.castPollVote = async (request)=>{
            const pathParams = {
                message_id: request?.message_id,
                poll_id: request?.poll_id
            };
            const body = {
                user_id: request?.user_id,
                user: request?.user,
                vote: request?.vote
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{message_id}/polls/{poll_id}/vote', pathParams, undefined, body);
            decoders.PollVoteResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.removePollVote = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                message_id: request?.message_id,
                poll_id: request?.poll_id,
                vote_id: request?.vote_id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/messages/{message_id}/polls/{poll_id}/vote/{vote_id}', pathParams, queryParams);
            decoders.PollVoteResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteReminder = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                message_id: request?.message_id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/messages/{message_id}/reminders', pathParams, queryParams);
            decoders.DeleteReminderResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateReminder = async (request)=>{
            const pathParams = {
                message_id: request?.message_id
            };
            const body = {
                remind_at: request?.remind_at,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('PATCH', '/api/v2/chat/messages/{message_id}/reminders', pathParams, undefined, body);
            decoders.UpdateReminderResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createReminder = async (request)=>{
            const pathParams = {
                message_id: request?.message_id
            };
            const body = {
                remind_at: request?.remind_at,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/messages/{message_id}/reminders', pathParams, undefined, body);
            decoders.ReminderResponseData?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getReplies = async (request)=>{
            const queryParams = {
                limit: request?.limit,
                offset: request?.offset,
                id_gte: request?.id_gte,
                id_gt: request?.id_gt,
                id_lte: request?.id_lte,
                id_lt: request?.id_lt,
                created_at_after_or_equal: request?.created_at_after_or_equal,
                created_at_after: request?.created_at_after,
                created_at_before_or_equal: request?.created_at_before_or_equal,
                created_at_before: request?.created_at_before,
                id_around: request?.id_around,
                created_at_around: request?.created_at_around,
                sort: request?.sort
            };
            const pathParams = {
                parent_id: request?.parent_id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/messages/{parent_id}/replies', pathParams, queryParams);
            decoders.GetRepliesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryMessageFlags = async (request)=>{
            const queryParams = {
                payload: request?.payload
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/moderation/flags/message', undefined, queryParams);
            decoders.QueryMessageFlagsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.muteChannel = async (request)=>{
            const body = {
                expiration: request?.expiration,
                user_id: request?.user_id,
                channel_cids: request?.channel_cids,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/moderation/mute/channel', undefined, undefined, body);
            decoders.MuteChannelResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unmuteChannel = async (request)=>{
            const body = {
                expiration: request?.expiration,
                user_id: request?.user_id,
                channel_cids: request?.channel_cids,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/moderation/unmute/channel', undefined, undefined, body);
            decoders.UnmuteResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createPoll = async (request)=>{
            const body = {
                name: request?.name,
                allow_answers: request?.allow_answers,
                allow_user_suggested_options: request?.allow_user_suggested_options,
                description: request?.description,
                enforce_unique_vote: request?.enforce_unique_vote,
                id: request?.id,
                is_closed: request?.is_closed,
                max_votes_allowed: request?.max_votes_allowed,
                user_id: request?.user_id,
                voting_visibility: request?.voting_visibility,
                options: request?.options,
                custom: request?.custom,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/polls', undefined, undefined, body);
            decoders.PollResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updatePoll = async (request)=>{
            const body = {
                id: request?.id,
                name: request?.name,
                allow_answers: request?.allow_answers,
                allow_user_suggested_options: request?.allow_user_suggested_options,
                description: request?.description,
                enforce_unique_vote: request?.enforce_unique_vote,
                is_closed: request?.is_closed,
                max_votes_allowed: request?.max_votes_allowed,
                user_id: request?.user_id,
                voting_visibility: request?.voting_visibility,
                options: request?.options,
                custom: request?.custom,
                user: request?.user
            };
            const response = await this.sendRequest('PUT', '/api/v2/chat/polls', undefined, undefined, body);
            decoders.PollResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryPolls = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter: request?.filter
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/polls/query', undefined, queryParams, body);
            decoders.QueryPollsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deletePoll = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                poll_id: request?.poll_id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/polls/{poll_id}', pathParams, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getPoll = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                poll_id: request?.poll_id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/polls/{poll_id}', pathParams, queryParams);
            decoders.PollResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updatePollPartial = async (request)=>{
            const pathParams = {
                poll_id: request?.poll_id
            };
            const body = {
                user_id: request?.user_id,
                unset: request?.unset,
                set: request?.set,
                user: request?.user
            };
            const response = await this.sendRequest('PATCH', '/api/v2/chat/polls/{poll_id}', pathParams, undefined, body);
            decoders.PollResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.createPollOption = async (request)=>{
            const pathParams = {
                poll_id: request?.poll_id
            };
            const body = {
                text: request?.text,
                position: request?.position,
                user_id: request?.user_id,
                custom: request?.custom,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/polls/{poll_id}/options', pathParams, undefined, body);
            decoders.PollOptionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updatePollOption = async (request)=>{
            const pathParams = {
                poll_id: request?.poll_id
            };
            const body = {
                id: request?.id,
                text: request?.text,
                user_id: request?.user_id,
                custom: request?.custom,
                user: request?.user
            };
            const response = await this.sendRequest('PUT', '/api/v2/chat/polls/{poll_id}/options', pathParams, undefined, body);
            decoders.PollOptionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deletePollOption = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                poll_id: request?.poll_id,
                option_id: request?.option_id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/polls/{poll_id}/options/{option_id}', pathParams, queryParams);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getPollOption = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                poll_id: request?.poll_id,
                option_id: request?.option_id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/polls/{poll_id}/options/{option_id}', pathParams, queryParams);
            decoders.PollOptionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryPollVotes = async (request)=>{
            const queryParams = {
                user_id: request?.user_id
            };
            const pathParams = {
                poll_id: request?.poll_id
            };
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter: request?.filter
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/polls/{poll_id}/votes', pathParams, queryParams, body);
            decoders.PollVotesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updatePushNotificationPreferences = async (request)=>{
            const body = {
                preferences: request?.preferences
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/push_preferences', undefined, undefined, body);
            decoders.UpsertPushPreferencesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getPushTemplates = async (request)=>{
            const queryParams = {
                push_provider_type: request?.push_provider_type,
                push_provider_name: request?.push_provider_name
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/push_templates', undefined, queryParams);
            decoders.GetPushTemplatesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.upsertPushTemplate = async (request)=>{
            const body = {
                event_type: request?.event_type,
                push_provider_type: request?.push_provider_type,
                enable_push: request?.enable_push,
                push_provider_name: request?.push_provider_name,
                template: request?.template
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/push_templates', undefined, undefined, body);
            decoders.UpsertPushTemplateResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryBannedUsers = async (request)=>{
            const queryParams = {
                payload: request?.payload
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/query_banned_users', undefined, queryParams);
            decoders.QueryBannedUsersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryReminders = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/reminders/query', undefined, undefined, body);
            decoders.QueryRemindersResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.search = async (request)=>{
            const queryParams = {
                payload: request?.payload
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/search', undefined, queryParams);
            decoders.SearchResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.querySegments = async (request)=>{
            const body = {
                filter: request?.filter,
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/segments/query', undefined, undefined, body);
            decoders.QuerySegmentsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteSegment = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('DELETE', '/api/v2/chat/segments/{id}', pathParams, undefined);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getSegment = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/segments/{id}', pathParams, undefined);
            decoders.GetSegmentResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteSegmentTargets = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                target_ids: request?.target_ids
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/segments/{id}/deletetargets', pathParams, undefined, body);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.segmentTargetExists = async (request)=>{
            const pathParams = {
                id: request?.id,
                target_id: request?.target_id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/segments/{id}/target/{target_id}', pathParams, undefined);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.querySegmentTargets = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter: request?.filter
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/segments/{id}/targets/query', pathParams, undefined, body);
            decoders.QuerySegmentTargetsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryThreads = async (request)=>{
            const body = {
                limit: request?.limit,
                member_limit: request?.member_limit,
                next: request?.next,
                participant_limit: request?.participant_limit,
                prev: request?.prev,
                reply_limit: request?.reply_limit,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/threads', undefined, undefined, body);
            decoders.QueryThreadsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getThread = async (request)=>{
            const queryParams = {
                reply_limit: request?.reply_limit,
                participant_limit: request?.participant_limit,
                member_limit: request?.member_limit
            };
            const pathParams = {
                message_id: request?.message_id
            };
            const response = await this.sendRequest('GET', '/api/v2/chat/threads/{message_id}', pathParams, queryParams);
            decoders.GetThreadResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.updateThreadPartial = async (request)=>{
            const pathParams = {
                message_id: request?.message_id
            };
            const body = {
                user_id: request?.user_id,
                unset: request?.unset,
                set: request?.set,
                user: request?.user
            };
            const response = await this.sendRequest('PATCH', '/api/v2/chat/threads/{message_id}', pathParams, undefined, body);
            decoders.UpdateThreadPartialResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unreadCounts = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/chat/unread', undefined, undefined);
            decoders.WrappedUnreadCountsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unreadCountsBatch = async (request)=>{
            const body = {
                user_ids: request?.user_ids
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/unread_batch', undefined, undefined, body);
            decoders.UnreadCountsBatchResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.sendUserCustomEvent = async (request)=>{
            const pathParams = {
                user_id: request?.user_id
            };
            const body = {
                event: request?.event
            };
            const response = await this.sendRequest('POST', '/api/v2/chat/users/{user_id}/event', pathParams, undefined, body);
            decoders.Response?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
    }
}
class ChannelApi {
    constructor(chatApi, type, id){
        this.chatApi = chatApi;
        this.type = type;
        this.id = id;
        this.delete = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.deleteChannel({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.updateChannelPartial = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.updateChannelPartial({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.update = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.updateChannel({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.deleteDraft = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.deleteDraft({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.getDraft = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.getDraft({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.sendEvent = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.sendEvent({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.deleteFile = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.deleteFile({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.uploadFile = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.uploadFile({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.hide = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.hideChannel({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.deleteImage = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.deleteImage({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.uploadImage = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.uploadImage({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.updateMemberPartial = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.updateMemberPartial({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.sendMessage = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.sendMessage({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.getManyMessages = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.getManyMessages({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.getOrCreate = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.getOrCreateChannel({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.markRead = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.markRead({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.show = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.showChannel({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.truncate = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.truncateChannel({
                id: this.id,
                type: this.type,
                ...request
            });
        };
        this.markUnread = (request)=>{
            if (!this.id) {
                throw new Error(`Channel isn't yet created, call getOrCreateDistinctChannel() before this operation`);
            }
            return this.chatApi.markUnread({
                id: this.id,
                type: this.type,
                ...request
            });
        };
    }
}
class StreamChannel extends ChannelApi {
    constructor(){
        super(...arguments);
        this.getOrCreate = (channel_get_or_create_request)=>{
            if (!this.id) {
                return this.chatApi.getOrCreateDistinctChannel({
                    type: this.type,
                    ...channel_get_or_create_request
                }).then((response)=>{
                    this.id = response.channel?.id;
                    return response;
                });
            } else {
                return this.chatApi.getOrCreateChannel({
                    id: this.id,
                    type: this.type,
                    ...channel_get_or_create_request
                });
            }
        };
    }
    get cid() {
        return `${this.type}:${this.id}`;
    }
    queryMembers(request) {
        return this.chatApi.queryMembers({
            payload: {
                id: this.id,
                type: this.type,
                ...request?.payload ?? {
                    filter_conditions: {}
                }
            }
        });
    }
}
class StreamChatClient extends ChatApi {
    constructor(){
        super(...arguments);
        this.channel = (type, id)=>{
            return new StreamChannel(this, type, id);
        };
    }
}
class ModerationApi extends BaseApi {
    constructor(){
        super(...arguments);
        this.ban = async (request)=>{
            const body = {
                target_user_id: request?.target_user_id,
                banned_by_id: request?.banned_by_id,
                channel_cid: request?.channel_cid,
                delete_messages: request?.delete_messages,
                ip_ban: request?.ip_ban,
                reason: request?.reason,
                shadow: request?.shadow,
                timeout: request?.timeout,
                banned_by: request?.banned_by
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/ban', undefined, undefined, body);
            decoders.BanResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.bulkImageModeration = async (request)=>{
            const body = {
                csv_file: request?.csv_file
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/bulk_image_moderation', undefined, undefined, body);
            decoders.BulkImageModerationResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.check = async (request)=>{
            const body = {
                config_key: request?.config_key,
                entity_creator_id: request?.entity_creator_id,
                entity_id: request?.entity_id,
                entity_type: request?.entity_type,
                config_team: request?.config_team,
                test_mode: request?.test_mode,
                user_id: request?.user_id,
                moderation_payload: request?.moderation_payload,
                options: request?.options,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/check', undefined, undefined, body);
            decoders.CheckResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.upsertConfig = async (request)=>{
            const body = {
                key: request?.key,
                async: request?.async,
                team: request?.team,
                user_id: request?.user_id,
                ai_image_config: request?.ai_image_config,
                ai_text_config: request?.ai_text_config,
                ai_video_config: request?.ai_video_config,
                automod_platform_circumvention_config: request?.automod_platform_circumvention_config,
                automod_semantic_filters_config: request?.automod_semantic_filters_config,
                automod_toxicity_config: request?.automod_toxicity_config,
                aws_rekognition_config: request?.aws_rekognition_config,
                block_list_config: request?.block_list_config,
                bodyguard_config: request?.bodyguard_config,
                google_vision_config: request?.google_vision_config,
                rule_builder_config: request?.rule_builder_config,
                user: request?.user,
                velocity_filter_config: request?.velocity_filter_config,
                video_call_rule_config: request?.video_call_rule_config
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/config', undefined, undefined, body);
            decoders.UpsertConfigResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.deleteConfig = async (request)=>{
            const queryParams = {
                team: request?.team
            };
            const pathParams = {
                key: request?.key
            };
            const response = await this.sendRequest('DELETE', '/api/v2/moderation/config/{key}', pathParams, queryParams);
            decoders.DeleteModerationConfigResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getConfig = async (request)=>{
            const queryParams = {
                team: request?.team
            };
            const pathParams = {
                key: request?.key
            };
            const response = await this.sendRequest('GET', '/api/v2/moderation/config/{key}', pathParams, queryParams);
            decoders.GetConfigResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryModerationConfigs = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/configs', undefined, undefined, body);
            decoders.QueryModerationConfigsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.customCheck = async (request)=>{
            const body = {
                entity_id: request?.entity_id,
                entity_type: request?.entity_type,
                flags: request?.flags,
                entity_creator_id: request?.entity_creator_id,
                user_id: request?.user_id,
                moderation_payload: request?.moderation_payload,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/custom_check', undefined, undefined, body);
            decoders.CustomCheckResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.v2DeleteTemplate = async ()=>{
            const response = await this.sendRequest('DELETE', '/api/v2/moderation/feeds_moderation_template', undefined, undefined);
            decoders.DeleteModerationTemplateResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.v2QueryTemplates = async ()=>{
            const response = await this.sendRequest('GET', '/api/v2/moderation/feeds_moderation_template', undefined, undefined);
            decoders.QueryFeedModerationTemplatesResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.v2UpsertTemplate = async (request)=>{
            const body = {
                name: request?.name,
                config: request?.config
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/feeds_moderation_template', undefined, undefined, body);
            decoders.UpsertModerationTemplateResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.flag = async (request)=>{
            const body = {
                entity_id: request?.entity_id,
                entity_type: request?.entity_type,
                entity_creator_id: request?.entity_creator_id,
                reason: request?.reason,
                user_id: request?.user_id,
                custom: request?.custom,
                moderation_payload: request?.moderation_payload,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/flag', undefined, undefined, body);
            decoders.FlagResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryModerationFlags = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                sort: request?.sort,
                filter: request?.filter
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/flags', undefined, undefined, body);
            decoders.QueryModerationFlagsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryModerationLogs = async (request)=>{
            const body = {
                limit: request?.limit,
                next: request?.next,
                prev: request?.prev,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/logs', undefined, undefined, body);
            decoders.QueryModerationLogsResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.mute = async (request)=>{
            const body = {
                target_ids: request?.target_ids,
                timeout: request?.timeout,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/mute', undefined, undefined, body);
            decoders.MuteResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.queryReviewQueue = async (request)=>{
            const body = {
                limit: request?.limit,
                lock_count: request?.lock_count,
                lock_duration: request?.lock_duration,
                lock_items: request?.lock_items,
                next: request?.next,
                prev: request?.prev,
                stats_only: request?.stats_only,
                user_id: request?.user_id,
                sort: request?.sort,
                filter: request?.filter,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/review_queue', undefined, undefined, body);
            decoders.QueryReviewQueueResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.getReviewQueueItem = async (request)=>{
            const pathParams = {
                id: request?.id
            };
            const response = await this.sendRequest('GET', '/api/v2/moderation/review_queue/{id}', pathParams, undefined);
            decoders.GetReviewQueueItemResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.submitAction = async (request)=>{
            const body = {
                action_type: request?.action_type,
                item_id: request?.item_id,
                user_id: request?.user_id,
                ban: request?.ban,
                custom: request?.custom,
                delete_activity: request?.delete_activity,
                delete_message: request?.delete_message,
                delete_reaction: request?.delete_reaction,
                delete_user: request?.delete_user,
                mark_reviewed: request?.mark_reviewed,
                unban: request?.unban,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/submit_action', undefined, undefined, body);
            decoders.SubmitActionResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unban = async (request)=>{
            const queryParams = {
                target_user_id: request?.target_user_id,
                channel_cid: request?.channel_cid,
                created_by: request?.created_by
            };
            const body = {
                unbanned_by_id: request?.unbanned_by_id,
                unbanned_by: request?.unbanned_by
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/unban', undefined, queryParams, body);
            decoders.UnbanResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
        this.unmute = async (request)=>{
            const body = {
                target_ids: request?.target_ids,
                user_id: request?.user_id,
                user: request?.user
            };
            const response = await this.sendRequest('POST', '/api/v2/moderation/unmute', undefined, undefined, body);
            decoders.UnmuteResponse?.(response.body);
            return {
                ...response.body,
                metadata: response.metadata
            };
        };
    }
}
class StreamModerationClient extends ModerationApi {
}
class StreamClient extends CommonApi {
    /**
     *
     * @param apiKey
     * @param secret
     * @param config config object
     */ constructor(apiKey, secret, config){
        const token = JWTServerToken(secret);
        const timeout = config?.timeout ?? StreamClient.DEFAULT_TIMEOUT;
        const chatBaseUrl = config?.basePath ?? 'https://chat.stream-io-api.com';
        const videoBaseUrl = config?.basePath ?? 'https://video.stream-io-api.com';
        super({
            apiKey,
            token,
            timeout,
            baseUrl: chatBaseUrl,
            agent: config?.agent
        });
        this.apiKey = apiKey;
        this.secret = secret;
        this.config = config;
        this.options = {};
        this.upsertUsers = (users)=>{
            const payload = {};
            users.forEach((u)=>{
                payload[u.id] = u;
            });
            return this.updateUsers({
                users: payload
            });
        };
        this.queryBannedUsers = (request)=>{
            return this.chat.queryBannedUsers(request);
        };
        /**
         *
         * @param payload
         * - user_id - the id of the user the token is for
         * - validity_in_seconds - how many seconds is the token valid for (starting from issued at), by default it's 1 hour, dicarded if exp is provided
         * - exp - when the token expires, unix timestamp in seconds
         * - iat - issued at date of the token, unix timestamp in seconds, by default it's now
         */ this.generateUserToken = (payload)=>{
            const defaultIat = Math.floor((Date.now() - 1000) / 1000);
            payload.iat = payload.iat ?? defaultIat;
            const validityInSeconds = payload.validity_in_seconds ?? 60 * 60;
            payload.exp = payload.exp ?? payload.iat + validityInSeconds;
            return JWTUserToken(this.secret, payload);
        };
        /**
         *
         * @param payload
         * - user_id - the id of the user the token is for
         * - validity_in_seconds - how many seconds is the token valid for (starting from issued at), by default it's 1 hour, dicarded if exp is provided
         * - exp - when the token expires, unix timestamp in seconds
         * - iat - issued at date of the token, unix timestamp in seconds, by default it's now
         */ this.generateCallToken = (payload)=>{
            return this.generateUserToken(payload);
        };
        /**
         *
         * @param userID
         * @param exp
         * @param iat deprecated, the default date will be set internally
         * @returns
         *
         * @deprecated use generateUserToken instead
         */ this.createToken = (userID, exp = Math.round(Date.now() / 1000) + 60 * 60, iat = Math.floor((Date.now() - 1000) / 1000))=>{
            const payload = {
                user_id: userID,
                exp,
                iat
            };
            return JWTUserToken(this.secret, payload);
        };
        /**
         *
         * @param userID
         * @param call_cids
         * @param exp
         * @param iat this is deprecated, the current date will be set internally
         * @returns
         *
         * @deprecated use generateCallToken instead
         */ this.createCallToken = (userIdOrObject, call_cids, exp = Math.round(Date.now() / 1000) + 60 * 60, iat = Math.floor((Date.now() - 1000) / 1000))=>{
            const payload = {
                exp,
                iat,
                call_cids,
                user_id: typeof userIdOrObject === 'string' ? userIdOrObject : userIdOrObject.user_id
            };
            if (typeof userIdOrObject === 'object' && userIdOrObject.role) {
                payload.role = userIdOrObject.role;
            }
            return JWTUserToken(this.secret, payload);
        };
        this.verifyWebhook = (requestBody, xSignature)=>{
            const key = Buffer.from(this.secret, 'utf8');
            const hash = __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', key).update(requestBody).digest('hex');
            try {
                return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].timingSafeEqual(Buffer.from(hash), Buffer.from(xSignature));
            } catch (err) {
                return false;
            }
        };
        this.video = new StreamVideoClient({
            streamClient: this,
            apiKey,
            token,
            timeout,
            baseUrl: videoBaseUrl,
            agent: config?.agent
        });
        this.chat = new StreamChatClient({
            apiKey,
            token,
            timeout,
            baseUrl: chatBaseUrl,
            agent: config?.agent
        });
        this.moderation = new StreamModerationClient({
            apiKey,
            token,
            timeout,
            baseUrl: chatBaseUrl,
            agent: config?.agent
        });
    }
}
StreamClient.DEFAULT_TIMEOUT = 3000;
;
 //# sourceMappingURL=index.es.mjs.map
}}),
"[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/actions/webinar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/actions/product.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/actions/stripe.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/actions/attendence.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/actions/webinar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/actions/product.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/actions/stripe.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/actions/attendence.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/webinar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/stripe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/attendence.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/actions/webinar.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/actions/product.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/actions/stripe.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/actions/attendence.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/actions/webinar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/actions/product.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/actions/stripe.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/actions/attendence.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "005ffcd77ad2e080e6e5ed6845cf521ba18d6feb0d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"]),
    "00a7df98030afb5e1b09c88b48979b8addae282911": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAccount"]),
    "4019a57e493a3346554356a48a0bf0d2e65bdc354d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebinarById"]),
    "6045b8d257ffdc76f15a4f97c70a0cdd31be9336ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeWebinarStatus"]),
    "7f01c67f60110dc8bdfb7e1d04b6780d6444e50952": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countWebinars"]),
    "7f02c687f5db63ca057db60300957549f9a1e3b015": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsByOwnerId"]),
    "7f08fb802401e542c3794f1dc23602f8b9ae0cf4bd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProduct"]),
    "7f0d0c6640a5404b00dc94ad062c0f63a4609a386d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTokenForHost"]),
    "7f23b033f4f2e4fda6826845ad2fefb445a91b7193": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buyProduct"]),
    "7f48ba0f67349b5555b761f395b55b64ee3700777a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteKeylessAction"]),
    "7f48c0a2dfc37f878145411fccb0b78c2741dec4e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneProduct"]),
    "7f4ad8a6c94d3ddb11a3553f9684969484bffa2974": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateRevenue"]),
    "7f55bc7f48bf45f0aec9dc767193fe85471c4c07ec": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStreamIoToken"]),
    "7f6c6f8eee509fa5771357b02ae390ef9bed9bafe9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProduct"]),
    "7f6dd16bac406af8e0572a9452ad4c4390c2fe9045": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeCallStatus"]),
    "7f7797c8a9e84949aa24e4c14748f65b7edc81d018": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebinarByPresenterId"]),
    "7f7daf4f1106fa5ed85d96ccfcbee1139a76340f69": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOrReadKeylessAction"]),
    "7f8f1829d9ec6cd5e586eca34dd651e1993326094e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripeDisconnect"]),
    "7f8f86695fa0eb59412fb98e3a7f26ece5d4ff5661": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["syncKeylessConfigAction"]),
    "7f963a588a1df845fec0fcd517bae714ef79b9edd2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerAttendee"]),
    "7fa02db967d0e797e738ab0e6c28f090d19da949b7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addStripeId"]),
    "7fa0c9393e1e9f798b87705469b8a93393e33c6889": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAndStartStream"]),
    "7fae278c30c6cefae4b949d4286835f37f4c727289": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateWebinar"]),
    "7fb35e4e0be70a284afcb6255726f082956518994b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countProducts"]),
    "7fbe4f6b3e17955cd5e695897eed8ce9456efde24d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createWebinar"]),
    "7fcdbf49e359ce5159b7812b3bb7a46c23dbd459c9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteWebinar"]),
    "7fcf7cdf7adeae1d18a5f9d505109971c3fe8f6d73": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeStatusOfProduct"]),
    "7fd1670a6f971de9b785e0c6e614e9b90a2a2b7f99": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeAttendenceType"]),
    "7ff2565aade817ebb320896b7e8538c21bfcca665f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"]),
    "7ff4bc4fcd3a91681a3c885dc217deb503e98e6f29": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAttendeeById"]),
    "7ff53e0ebb4a320192417f83edb1834979a7c5d20d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebinarAttendence"]),
    "7ff7d760957fab854dcb97e20b03fcbd472aa5ac05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["invalidateCacheAction"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/webinar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/stripe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/attendence.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/actions/webinar.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/actions/product.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/actions/stripe.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/actions/attendence.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/actions/auth.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE3 => \"[project]/src/actions/webinar.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE4 => \"[project]/src/actions/product.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE5 => \"[project]/src/actions/stripe.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE6 => \"[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE7 => \"[project]/src/actions/attendence.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "005ffcd77ad2e080e6e5ed6845cf521ba18d6feb0d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["005ffcd77ad2e080e6e5ed6845cf521ba18d6feb0d"]),
    "00a7df98030afb5e1b09c88b48979b8addae282911": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00a7df98030afb5e1b09c88b48979b8addae282911"]),
    "4019a57e493a3346554356a48a0bf0d2e65bdc354d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["4019a57e493a3346554356a48a0bf0d2e65bdc354d"]),
    "6045b8d257ffdc76f15a4f97c70a0cdd31be9336ef": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["6045b8d257ffdc76f15a4f97c70a0cdd31be9336ef"]),
    "7f01c67f60110dc8bdfb7e1d04b6780d6444e50952": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f01c67f60110dc8bdfb7e1d04b6780d6444e50952"]),
    "7f02c687f5db63ca057db60300957549f9a1e3b015": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f02c687f5db63ca057db60300957549f9a1e3b015"]),
    "7f08fb802401e542c3794f1dc23602f8b9ae0cf4bd": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f08fb802401e542c3794f1dc23602f8b9ae0cf4bd"]),
    "7f0d0c6640a5404b00dc94ad062c0f63a4609a386d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f0d0c6640a5404b00dc94ad062c0f63a4609a386d"]),
    "7f23b033f4f2e4fda6826845ad2fefb445a91b7193": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f23b033f4f2e4fda6826845ad2fefb445a91b7193"]),
    "7f48ba0f67349b5555b761f395b55b64ee3700777a": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f48ba0f67349b5555b761f395b55b64ee3700777a"]),
    "7f48c0a2dfc37f878145411fccb0b78c2741dec4e0": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f48c0a2dfc37f878145411fccb0b78c2741dec4e0"]),
    "7f4ad8a6c94d3ddb11a3553f9684969484bffa2974": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f4ad8a6c94d3ddb11a3553f9684969484bffa2974"]),
    "7f55bc7f48bf45f0aec9dc767193fe85471c4c07ec": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f55bc7f48bf45f0aec9dc767193fe85471c4c07ec"]),
    "7f6c6f8eee509fa5771357b02ae390ef9bed9bafe9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f6c6f8eee509fa5771357b02ae390ef9bed9bafe9"]),
    "7f6dd16bac406af8e0572a9452ad4c4390c2fe9045": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f6dd16bac406af8e0572a9452ad4c4390c2fe9045"]),
    "7f7797c8a9e84949aa24e4c14748f65b7edc81d018": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f7797c8a9e84949aa24e4c14748f65b7edc81d018"]),
    "7f7daf4f1106fa5ed85d96ccfcbee1139a76340f69": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f7daf4f1106fa5ed85d96ccfcbee1139a76340f69"]),
    "7f8f1829d9ec6cd5e586eca34dd651e1993326094e": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f8f1829d9ec6cd5e586eca34dd651e1993326094e"]),
    "7f8f86695fa0eb59412fb98e3a7f26ece5d4ff5661": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f8f86695fa0eb59412fb98e3a7f26ece5d4ff5661"]),
    "7f963a588a1df845fec0fcd517bae714ef79b9edd2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f963a588a1df845fec0fcd517bae714ef79b9edd2"]),
    "7fa02db967d0e797e738ab0e6c28f090d19da949b7": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa02db967d0e797e738ab0e6c28f090d19da949b7"]),
    "7fa0c9393e1e9f798b87705469b8a93393e33c6889": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fa0c9393e1e9f798b87705469b8a93393e33c6889"]),
    "7fae278c30c6cefae4b949d4286835f37f4c727289": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fae278c30c6cefae4b949d4286835f37f4c727289"]),
    "7fb35e4e0be70a284afcb6255726f082956518994b": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fb35e4e0be70a284afcb6255726f082956518994b"]),
    "7fbe4f6b3e17955cd5e695897eed8ce9456efde24d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fbe4f6b3e17955cd5e695897eed8ce9456efde24d"]),
    "7fcdbf49e359ce5159b7812b3bb7a46c23dbd459c9": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fcdbf49e359ce5159b7812b3bb7a46c23dbd459c9"]),
    "7fcf7cdf7adeae1d18a5f9d505109971c3fe8f6d73": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fcf7cdf7adeae1d18a5f9d505109971c3fe8f6d73"]),
    "7fd1670a6f971de9b785e0c6e614e9b90a2a2b7f99": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7fd1670a6f971de9b785e0c6e614e9b90a2a2b7f99"]),
    "7ff2565aade817ebb320896b7e8538c21bfcca665f": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff2565aade817ebb320896b7e8538c21bfcca665f"]),
    "7ff4bc4fcd3a91681a3c885dc217deb503e98e6f29": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff4bc4fcd3a91681a3c885dc217deb503e98e6f29"]),
    "7ff53e0ebb4a320192417f83edb1834979a7c5d20d": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff53e0ebb4a320192417f83edb1834979a7c5d20d"]),
    "7ff7d760957fab854dcb97e20b03fcbd472aa5ac05": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7ff7d760957fab854dcb97e20b03fcbd472aa5ac05"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/actions/webinar.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/actions/product.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/actions/stripe.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/actions/attendence.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$keyless$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2d$actions$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE3__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE4__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE5__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE6__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$streamIo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE7__$3d3e$__$225b$project$5d2f$src$2f$actions$2f$attendence$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(publicRoutes)/live-webinar/[liveWebinarId]/page/actions.js { ACTIONS_MODULE0 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/keyless-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server-actions.js [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/actions/auth.ts [app-rsc] (ecmascript)", ACTIONS_MODULE3 => "[project]/src/actions/webinar.ts [app-rsc] (ecmascript)", ACTIONS_MODULE4 => "[project]/src/actions/product.ts [app-rsc] (ecmascript)", ACTIONS_MODULE5 => "[project]/src/actions/stripe.ts [app-rsc] (ecmascript)", ACTIONS_MODULE6 => "[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)", ACTIONS_MODULE7 => "[project]/src/actions/attendence.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>"));}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_11 => \"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__next_app__": (()=>__next_app__),
    "pages": (()=>pages),
    "routeModule": (()=>routeModule),
    "tree": (()=>tree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "(publicRoutes)",
            {
                "children": [
                    "live-webinar",
                    {
                        "children": [
                            "[liveWebinarId]",
                            {
                                "children": [
                                    "__PAGE__",
                                    {},
                                    {
                                        metadata: {},
                                        "page": [
                                            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                                            "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx"
                                        ]
                                    }
                                ]
                            },
                            {
                                metadata: {}
                            }
                        ]
                    },
                    {
                        metadata: {}
                    }
                ]
            },
            {
                metadata: {},
                "layout": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/src/app/(publicRoutes)/layout.tsx"
                ],
                "not-found": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/node_modules/next/dist/client/components/not-found-error.js"
                ],
                "forbidden": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/node_modules/next/dist/client/components/forbidden-error.js"
                ],
                "unauthorized": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/node_modules/next/dist/client/components/unauthorized-error.js"
                ]
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["fillMetadataSegment"])("//", await props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/layout.tsx"
        ],
        "error": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/error.tsx"
        ],
        "loading": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/loading.tsx"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/not-found.tsx"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/forbidden-error.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/unauthorized-error.js"
        ]
    }
];
const pages = [
    "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx"
];
;
;
const __next_app_require__ = __turbopack_context__.r;
const __next_app_load_chunk__ = __turbopack_context__.l;
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/(publicRoutes)/live-webinar/[liveWebinarId]/page",
        pathname: "/live-webinar/[liveWebinarId]",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
}); //# sourceMappingURL=app-page.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_11 => \"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_11 => "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_11 => \"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_11 => "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_7 => \"[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_8 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_9 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_10 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_11 => \"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GlobalError"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForMetadata"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForMetadata": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForMetadata"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_11 => "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$error$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$src$2f$app$2f$not$2d$found$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_7__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_8__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_9__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_10__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_11__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/(publicRoutes)/live-webinar/[liveWebinarId]/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_7 => "[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_8 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_9 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_10 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_11 => "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_a7902112._.js.map