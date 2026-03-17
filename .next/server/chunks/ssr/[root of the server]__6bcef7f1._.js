module.exports = {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "prismaClient": (()=>prismaClient)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prismaClient = globalThis.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalThis.prisma = prismaClient;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[project]/src/actions/stripe.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f8f1829d9ec6cd5e586eca34dd651e1993326094e":"stripeDisconnect","7fa02db967d0e797e738ab0e6c28f090d19da949b7":"addStripeId"} */ __turbopack_context__.s({
    "addStripeId": (()=>addStripeId),
    "stripeDisconnect": (()=>stripeDisconnect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__ = __turbopack_context__.i("[project]/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript) <export default as v4>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ addStripeId = async (userId)=>{
    try {
        if (!userId) {
            return {
                status: 400,
                success: false,
                message: 'User ID is required'
            };
        }
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.findUnique({
            where: {
                id: userId
            },
            select: {
                stripeConnectId: true
            }
        });
        if (existingUser?.stripeConnectId) {
            return {
                status: 200,
                success: true,
                message: 'Stripe account already connected',
                stripeConnectId: existingUser.stripeConnectId
            };
        }
        const demoStripeId = `acct_demo_${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__v4$3e$__["v4"])().replace(/-/g, '')}`;
        const updatedUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.update({
            where: {
                id: userId
            },
            data: {
                stripeConnectId: demoStripeId,
                subscription: true
            }
        });
        return {
            status: 200,
            success: true,
            message: ' Stripe account connected successfully',
            stripeConnectId: updatedUser.stripeConnectId
        };
    } catch (error) {
        console.error('Failed to add your Stripe ID:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to connect your Stripe account'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ stripeDisconnect = async (id)=>{
    try {
        if (!id) {
            return {
                status: 400,
                success: false,
                message: 'User is missing'
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.update({
            where: {
                id: id
            },
            data: {
                stripeConnectId: null,
                subscription: false
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/settings');
        return {
            status: 200,
            success: true,
            message: 'Stripe Account Disconnected'
        };
    } catch (error) {
        console.error('Failed to disconnect stripeAccount: ', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to disconnect stripeAccount'
        };
    }
}; // export const getAllProductsFromStripe = async () => {
 //   try {
 //     const currentUser = await onAuthenticateUser();
 //     if (!currentUser.user) {
 //       return {
 //         error: 'User not authenticated',
 //         status: 401,
 //         success: false,
 //       };
 //     }
 //     if (!currentUser.user.stripeCustomerId) {
 //       return {
 //         error: 'User does not have a Stripe customer ID',
 //         status: 401,
 //         success: false,
 //       };
 //     }
 //     const Products = await stripe.products.list(
 //       {},
 //       {
 //         stripeAccount: currentUser.user.stripeCustomerId,
 //       },
 //     );
 //     return {
 //       products: Products.data,
 //       success: true,
 //       status: 200,
 //     };
 //   } catch (error: unknown) {
 //     console.error('Error getting products from Stripe:', error);
 //     return {
 //       error: 'Failed getting products from Stripe',
 //       status: 500,
 //       success: false,
 //     };
 //   }
 // };
 // export const createCheckoutLink = async (
 //   priceId: string,
 //   stripeId: string,
 //   attendeeId: string,
 //   webinarId: string,
 //   bookCall: boolean = false,
 // ) => {
 //   try {
 //     const session = await stripe.checkout.sessions.create(
 //       {
 //         line_items: [
 //           {
 //             price: priceId,
 //             quantity: 1,
 //           },
 //         ],
 //         mode: 'payment',
 //         success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
 //         cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
 //         metadata: {
 //           attendeeId: attendeeId,
 //           webinarId: webinarId,
 //         },
 //       },
 //       {
 //         stripeAccount: stripeId,
 //       },
 //     );
 //     if (bookCall) {
 //       await changeAttendenceType(attendeeId, webinarId, 'ADDED_TO_CART');
 //     }
 //     return {
 //       success: true,
 //       status: 200,
 //       sessionUrl: session.url,
 //     };
 //   } catch (error: unknown) {
 //     console.log('Error creating checkout link', error);
 //     return {
 //       error: 'Error creating checkout link',
 //       status: 500,
 //       success: false,
 //     };
 //   }
 // };
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addStripeId,
    stripeDisconnect
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addStripeId, "7fa02db967d0e797e738ab0e6c28f090d19da949b7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(stripeDisconnect, "7f8f1829d9ec6cd5e586eca34dd651e1993326094e", null);
}}),
"[project]/src/actions/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"005ffcd77ad2e080e6e5ed6845cf521ba18d6feb0d":"onAuthenticateUser","00a7df98030afb5e1b09c88b48979b8addae282911":"deleteAccount"} */ __turbopack_context__.s({
    "deleteAccount": (()=>deleteAccount),
    "onAuthenticateUser": (()=>onAuthenticateUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/server/clerkClient.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/stripe.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ onAuthenticateUser() {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
        if (!user) {
            return {
                status: 403,
                user: null,
                message: 'User not authenticated'
            };
        }
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.findUnique({
            where: {
                clerkId: user.id
            }
        });
        if (existingUser) {
            return {
                status: 200,
                user: existingUser
            };
        }
        const userEmail = user.emailAddresses[0]?.emailAddress;
        const userName = [
            user.firstName,
            user.lastName
        ].filter(Boolean).join(' ') || 'No Name';
        const userData = {
            clerkId: user.id,
            email: userEmail || `clerk_${user.id}@temp.com`,
            name: userName,
            profileImage: user.imageUrl
        };
        const newUser = await createUserWithEmailConflictHandling(userData);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$stripe$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addStripeId"])(newUser.id);
            console.log('Stripe ID added successfully for user:', newUser.id);
        } catch (stripeError) {
            console.error('Failed to add Stripe ID:', stripeError);
        }
        return {
            status: 201,
            user: newUser
        };
    } catch (error) {
        console.error('Authentication error:', error);
        return {
            status: 500,
            user: null,
            message: error instanceof Error ? error.message : 'Internal server error'
        };
    }
}
async function createUserWithEmailConflictHandling(userData) {
    try {
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.create({
            data: userData
        });
    } catch (error) {
        if (error.code === 'P2002' && userData.email.includes('@')) {
            const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.findUnique({
                where: {
                    email: userData.email
                }
            });
            if (existingUser) {
                return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.update({
                    where: {
                        id: existingUser.id
                    },
                    data: {
                        clerkId: userData.clerkId,
                        name: userData.name,
                        profileImage: userData.profileImage
                    }
                });
            }
        }
        const uniqueEmail = `${userData.clerkId}_${Date.now()}@temp.com`;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.create({
            data: {
                ...userData,
                email: uniqueEmail
            }
        });
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteAccount() {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["currentUser"])();
        if (!user) {
            throw new Error('User not found. You must be logged in to delete your account.');
        }
        const client = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$server$2f$clerkClient$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clerkClient"])();
        const userInDb = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.findUnique({
            where: {
                clerkId: user.id
            }
        });
        await client.users.deleteUser(user.id);
        if (userInDb) {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].$transaction([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.deleteMany({
                    where: {
                        ownerId: userInDb.id
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.deleteMany({
                    where: {
                        presenterId: userInDb.id
                    }
                }),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].user.delete({
                    where: {
                        id: userInDb.id
                    }
                })
            ]);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            success: true,
            message: 'Account and all associated data deleted successfully.'
        };
    } catch (error) {
        console.error('Error deleting account:', error);
        return {
            success: false,
            message: 'An error occurred while deleting the account.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    onAuthenticateUser,
    deleteAccount
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(onAuthenticateUser, "005ffcd77ad2e080e6e5ed6845cf521ba18d6feb0d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAccount, "00a7df98030afb5e1b09c88b48979b8addae282911", null);
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/page.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx <module evaluation>", "default");
}}),
"[project]/src/app/page.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/page.tsx", "default");
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__6bcef7f1._.js.map