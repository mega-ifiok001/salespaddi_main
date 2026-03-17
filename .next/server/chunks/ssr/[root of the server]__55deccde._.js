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
"[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx <module evaluation>", "default");
}}),
"[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx", "default");
}}),
"[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Sidebar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Sidebar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Sidebar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ReusableComponents/LayoutComponents/Header.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx <module evaluation>", "default");
}}),
"[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ReusableComponents/LayoutComponents/Header.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx", "default");
}}),
"[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Header$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Header$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Header$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/actions/product.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f02c687f5db63ca057db60300957549f9a1e3b015":"getProductsByOwnerId","7f08fb802401e542c3794f1dc23602f8b9ae0cf4bd":"createProduct","7f23b033f4f2e4fda6826845ad2fefb445a91b7193":"buyProduct","7f48c0a2dfc37f878145411fccb0b78c2741dec4e0":"findOneProduct","7f4ad8a6c94d3ddb11a3553f9684969484bffa2974":"calculateRevenue","7f6c6f8eee509fa5771357b02ae390ef9bed9bafe9":"updateProduct","7fb35e4e0be70a284afcb6255726f082956518994b":"countProducts","7fcf7cdf7adeae1d18a5f9d505109971c3fe8f6d73":"changeStatusOfProduct","7ff2565aade817ebb320896b7e8538c21bfcca665f":"deleteProduct"} */ __turbopack_context__.s({
    "buyProduct": (()=>buyProduct),
    "calculateRevenue": (()=>calculateRevenue),
    "changeStatusOfProduct": (()=>changeStatusOfProduct),
    "countProducts": (()=>countProducts),
    "createProduct": (()=>createProduct),
    "deleteProduct": (()=>deleteProduct),
    "findOneProduct": (()=>findOneProduct),
    "getProductsByOwnerId": (()=>getProductsByOwnerId),
    "updateProduct": (()=>updateProduct)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createProduct = async (data)=>{
    try {
        if (!data.name || data.price <= 0 || !data.ownerId) {
            return {
                success: false,
                status: 400,
                message: 'Missing required fields or invalid price.'
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.create({
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                currency: data.currency,
                status: data.status,
                image: data.imageUrl,
                ownerId: data.ownerId,
                updatedAt: new Date()
            }
        });
        return {
            success: true,
            status: 200,
            message: 'Product created successfully'
        };
    } catch (error) {
        console.error('Error creating product:', error);
        return {
            success: false,
            status: 500,
            message: 'Failed to create product.'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateProduct = async (productId, data)=>{
    if (!productId) {
        return {
            success: false,
            status: 400,
            message: 'Product not found'
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.update({
            where: {
                id: productId
            },
            data: {
                name: data.name,
                description: data.description,
                price: Number(data.price),
                currency: data.currency,
                status: data.status,
                image: data.image,
                updatedAt: new Date()
            }
        });
        return {
            success: true,
            status: 200,
            message: 'Product updated successfully'
        };
    } catch (error) {
        console.error('Error updating product:', error);
        return {
            success: false,
            status: 500,
            message: 'Product updating failed'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getProductsByOwnerId = async (ownerId)=>{
    try {
        if (!ownerId) {
            console.error('Owner ID is required to fetch products.');
            return [];
        }
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.findMany({
            where: {
                ownerId: ownerId
            }
        });
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ changeStatusOfProduct = async (productId)=>{
    try {
        if (!productId) {
            return {
                success: false,
                message: 'Product ID is required.'
            };
        }
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.findUnique({
            where: {
                id: productId
            }
        });
        if (!product) {
            return {
                success: false,
                message: 'Product not found.'
            };
        }
        const newStatus = product.status === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ProductStatusEnum"].ACTIVE ? __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ProductStatusEnum"].INACTIVE : __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["ProductStatusEnum"].ACTIVE;
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.update({
            where: {
                id: productId
            },
            data: {
                status: newStatus,
                updatedAt: new Date()
            }
        });
        return {
            success: true,
            message: `Product status changed to ${newStatus}.`
        };
    } catch (error) {
        console.error('Error changing product status:', error);
        return {
            success: false,
            message: 'Failed to change product status.'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ findOneProduct = async (productId)=>{
    try {
        if (!productId) {
            console.error('Product ID is required to find a product.');
            return null;
        }
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.findUnique({
            where: {
                id: productId
            }
        });
        const product = result ? {
            ...result,
            price: Number(result.price),
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        } : null;
        return product;
    } catch (error) {
        console.error('Error finding product by ID:', error);
        return null;
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ buyProduct = async (productId, userId, webinarId)=>{
    try {
        if (!productId || !userId || !webinarId) {
            return {
                success: false,
                message: 'Product ID, User ID, and Webinar ID are required.'
            };
        }
        const product = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.findUnique({
            where: {
                id: productId
            }
        });
        if (!product) {
            return {
                success: false,
                message: 'Product not found.'
            };
        }
        const attendee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendee.findUnique({
            where: {
                id: userId
            }
        });
        if (!attendee) {
            console.error(`Attendee not found with ID: ${userId}`);
            return {
                success: false,
                message: 'Attendee not found.'
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.upsert({
            where: {
                attendeeId_webinarId: {
                    attendeeId: attendee.id,
                    webinarId: webinarId
                }
            },
            update: {
                attendedType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].CONVERTED,
                updatedAt: new Date()
            },
            create: {
                attendeeId: attendee.id,
                webinarId: webinarId,
                attendedType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].CONVERTED
            }
        });
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.update({
            where: {
                id: productId
            },
            data: {
                totalSales: {
                    increment: 1
                },
                updatedAt: new Date()
            }
        });
        return {
            success: true,
            message: 'Purchase intent recorded.'
        };
    } catch (error) {
        console.error('Error recording purchase intent:', error);
        return {
            success: false,
            message: 'Failed to record purchase intent.'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ countProducts = async (ownerId)=>{
    try {
        if (!ownerId) {
            console.error('Owner ID is required to fetch products.');
            return {
                status: 400,
                success: false,
                message: 'Owner ID is required to fetch products count',
                count: 0
            };
        }
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.count({
            where: {
                ownerId: ownerId
            }
        });
        return {
            status: 200,
            success: true,
            message: 'Products counted successfully',
            count: count
        };
    } catch (error) {
        console.error('Error counting products:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to count products',
            count: 0
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ calculateRevenue = async (ownerId)=>{
    try {
        if (!ownerId) {
            return {
                status: 400,
                success: false,
                message: 'Owner ID is required',
                revenue: '$0.00',
                totalProducts: 0
            };
        }
        const products = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.findMany({
            where: {
                ownerId: ownerId
            },
            select: {
                id: true,
                name: true,
                price: true,
                currency: true,
                totalSales: true
            }
        });
        if (products.length === 0) {
            return {
                status: 200,
                success: true,
                message: 'No products found for user',
                revenue: '$0.00',
                totalProducts: 0
            };
        }
        let totalRevenue = 0;
        const productBreakdown = products.map((product)=>{
            const productRevenue = Number(product.price) * product.totalSales;
            totalRevenue += productRevenue;
            return {
                id: product.id,
                name: product.name,
                price: Number(product.price),
                totalSales: product.totalSales,
                productRevenue: productRevenue,
                currency: product.currency
            };
        });
        const formattedRevenue = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(totalRevenue);
        return {
            status: 200,
            success: true,
            message: 'Revenue calculated successfully',
            revenue: formattedRevenue,
            totalProducts: products.length,
            totalRevenue: totalRevenue,
            productBreakdown: productBreakdown
        };
    } catch (error) {
        console.error('Error calculating revenue:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to calculate revenue',
            revenue: '$0.00',
            totalProducts: 0,
            error: error
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteProduct = async (id)=>{
    try {
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].product.delete({
            where: {
                id: id
            }
        });
        const product = result ? {
            ...result,
            price: Number(result.price),
            createdAt: result.createdAt.toISOString(),
            updatedAt: result.updatedAt.toISOString()
        } : null;
        return {
            status: 200,
            success: true,
            message: 'Product deleted successfully',
            data: product
        };
    } catch (error) {
        console.error('Error deleting product status:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to delete product'
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createProduct,
    updateProduct,
    getProductsByOwnerId,
    changeStatusOfProduct,
    findOneProduct,
    buyProduct,
    countProducts,
    calculateRevenue,
    deleteProduct
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProduct, "7f08fb802401e542c3794f1dc23602f8b9ae0cf4bd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProduct, "7f6c6f8eee509fa5771357b02ae390ef9bed9bafe9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProductsByOwnerId, "7f02c687f5db63ca057db60300957549f9a1e3b015", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeStatusOfProduct, "7fcf7cdf7adeae1d18a5f9d505109971c3fe8f6d73", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(findOneProduct, "7f48c0a2dfc37f878145411fccb0b78c2741dec4e0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(buyProduct, "7f23b033f4f2e4fda6826845ad2fefb445a91b7193", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(countProducts, "7fb35e4e0be70a284afcb6255726f082956518994b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(calculateRevenue, "7f4ad8a6c94d3ddb11a3553f9684969484bffa2974", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProduct, "7ff2565aade817ebb320896b7e8538c21bfcca665f", null);
}}),
"[project]/src/lib/data.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "aiAgentPrompt": (()=>aiAgentPrompt),
    "navbarOptions": (()=>navbarOptions),
    "onBoardingSteps": (()=>onBoardingSteps),
    "potentialCustomer": (()=>potentialCustomer),
    "sidebarData": (()=>sidebarData),
    "subscriptionPriceId": (()=>subscriptionPriceId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-rsc] (ecmascript) <export default as House>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkle.js [app-rsc] (ecmascript) <export default as Sparkle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$webcam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Webcam$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/webcam.js [app-rsc] (ecmascript) <export default as Webcam>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cog.js [app-rsc] (ecmascript) <export default as Cog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-rsc] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
;
const sidebarData = [
    {
        id: 1,
        title: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__House$3e$__["House"],
        link: '/home'
    },
    {
        id: 2,
        title: 'Webinars',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$webcam$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Webcam$3e$__["Webcam"],
        link: '/webinars'
    },
    {
        id: 3,
        title: 'AI Agents',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkle$3e$__["Sparkle"],
        link: '/ai-agents'
    },
    {
        id: 4,
        title: 'Products',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"],
        link: '/products'
    },
    {
        id: 5,
        title: 'Settings',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cog$3e$__["Cog"],
        link: '/settings'
    }
];
const onBoardingSteps = [
    {
        id: 1,
        title: 'Create webinars',
        complete: false,
        link: '/webinars'
    },
    {
        id: 2,
        title: 'Create Products',
        complete: false,
        link: '/products'
    },
    {
        id: 3,
        title: 'Create Ai Agents',
        complete: false,
        link: '/ai-agents'
    }
];
const potentialCustomer = [
    {
        id: '1',
        name: 'John Doe',
        email: 'Johndoe@gmail.com',
        clerkId: '1',
        profileImage: '/vercel.svg',
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        tags: [
            'New',
            'Hot Lead'
        ],
        callStatus: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CallStatusEnum"].COMPLETED
    },
    {
        id: '2',
        name: 'John Doe',
        email: 'Johndoe@gmail.com',
        clerkId: '2',
        profileImage: '/vercel.svg',
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        tags: [
            'New',
            'Hot Lead'
        ],
        callStatus: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CallStatusEnum"].COMPLETED
    },
    {
        id: '3',
        name: 'John Doe',
        email: 'Johndoe@gmail.com',
        clerkId: '3',
        profileImage: '/vercel.svg',
        isActive: true,
        lastLoginAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
        tags: [
            'New',
            'Hot Lead'
        ],
        callStatus: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CallStatusEnum"].COMPLETED
    }
];
const subscriptionPriceId = `price_1RLtR0Fj9oKEERu1zShQbtgG`;
const aiAgentPrompt = `# Lead Qualification & Nurturing Agent Prompt


🔹 AI Sales Setter & Closer Prompt for Voice AI Agent
Primary Objective:
Qualify inbound leads based on their responses and move them toward either:
Making the payment immediately by clicking the Buy Now button at the bottom of the page (They are already warmed up to buy so feel free to ask are they ready to pay or have anyother questions before they proceed, and if they are ready to pay ask them to click the buy now button at the bottom, if not jump into a full setter/sales call)
If at the end of the call they aren't pay, or have more questions, or need time, get them to first booking a call on the website abc.com before proceeding.
The call is only 30 minutes long so try to keep everything as short as possible but still addressing their problems and showcasing our products

🔹 INITIAL CONTEXT INJECTION (knowledge base):
Here are the company’s core details:
[Company Name] ABC corp. 
We help content creators who have a technical skills and are struggling to make money through their audience go from $10k/mo tp $50k/mo

[Offer/Product Description]
Accelerator program, provides mentorship, unlimited courses, and a software that helps them automate lead generation. 

[3 Unique Pillars] (Key elements that make this business unique. These should not be changed but can be tweaked slightly based on the lead’s pain points to appear hyper-personalized)
- 1 on 1 mentorship that no one else offers because courses alone don’t help.
- free software tool that costs 6k per year for free which they will need anyways to generate leads.
-  Unlimited courses with lifetime access so no need to buy stuff again. LAst investment they will ever make. 

### Personality
- Sound friendly, consultative, and genuinely interested in the prospect's business
- Convey confidence and expertise without being pushy or aggressive
- Project a helpful, solution-oriented approach rather than a traditional "sales" persona
- Balance professionalism with approachable warmth

### Speech Characteristics
- Use a conversational tone with a high pitched tone at the end with natural contractions (we're, I'd, they've)
- Include thoughtful pauses before responding to complex questions
- Vary your pacing—speak more deliberately when discussing important points
- Employ occasional business phrases naturally (e.g., "let's circle back to," "drill down on that")



## Response Guidelines

- Keep initial responses under 30 words, expanding only when providing valuable information
- Ask one question at a time, allowing the prospect to fully respond
- Acknowledge and reference prospect's previous answers to show active listening
- Use affirming language: "That's a great point," "I understand exactly what you mean"
- Avoid technical jargon unless the prospect uses it first
use ums' and hh's to make it feel more realistic and human like. 

## Scenario Handling

### For Interested But Busy Prospects
1. Acknowledge their time constraints: "I understand you're pressed for time."
2. Offer flexibility: "Would it be better to schedule a specific time for us to talk?"
3. Provide value immediately: "Just briefly, the main benefit our clients in your industry see is [key benefit]." We have helped 4500+ content creators around the world with a 75% success rate speak about some random fake case studies from customers.


### Need Discovery (use all these questions to tweak the pillars when you make the product pitch)
1. Industry understanding: "Could you tell me a bit about your business and the industry you operate in?"
2. Current situation: "What systems or processes are you currently using to manage your [relevant business area]?"
3. Pain points: "What are the biggest challenges you're facing with your current approach?"
4. Impact: "How are these challenges affecting your business operations or bottom line?"
5. Previous solutions: "Have you tried other solutions to address these challenges? What was your experience?"


### Closing phase,
Make sure all questions are clear before proceeding to giving the price. NEVER GIVE the price until they are fully committed to move forwarded and make a payment, and are ready to go. 
Build hype before dropping the price. Do this by restating all the deliverables and everything they will get, and then right at the end drop the price and zip your mouth until they respond. 
If they request discounts etc do not just give up, but clarify with them that if the price is the only thing stopping them from moving forwad, if that was fixed they will move forwards right? And them tell ok I will helo you in 3 conditions, 1 you dont parade around the price, 2. You take actions and work towards the goals regardless, 3 you are ready to pay at the end of this call and I can get you onboarded now sounds fair? And then give them a coupon code $500 at checkout. 


🔹 STRUCTURE OF THE CALL:
1. Opening Tie-Down & Call Flow Setup
Start with a warm, confident, and friendly tone.

“Hey there! Just so you know how this call will go — I have a few quick questions to better understand your situation. If we believe it's a fit and you want to move forward, amazing — you’ll be able to lock in your spot and make your payment right at the end of this call. And if not, no worries — hopefully you walk away with some clarity or value. Sounds fair?”

(If yes → proceed. If no → reconfirm they're open to seeing if this could be a fit.)

Then:

“Awesome — and just to set expectations, if this turns out to be a fit and you’re ready to go, your spot will be secured once payment is made at the end of this call. Sound good?”

(If they agree again, this creates micro-commitment to reduce resistance later.)

2. Ask Strategic Questions — With Curiosity & Validation
Your job here is to genuinely get to know their struggles. Be human. Be curious. Go deep.

Ask layered questions like:

“So tell me — what made you book this call today? What’s happening in your [business/life] that made this urgent?”

“When did this problem first start?”

“What have you tried so far to fix this?”

“Why do you think those things didn’t work for you?”

“How does this problem affect you day-to-day?”

“What’s the cost of not solving this in the next 6 months?”

🧠 Important: As they share pain points, match them up with the 3 Pillars you were provided. When you do so, subtly position each pillar as a solution — as if the program was built for exactly this person. For example:

“You mentioned struggling to stay consistent with lead generation, and that’s exactly why one of our core pillars is [Pillar 1], which is designed to fix that using [insert brief value explanation].”

Repeat this format 2–3 times to match each pain point with a pillar.

3. Deepen Pain: Make Them Realize They’ve Been Doing It All Wrong
Get them emotionally invested in solving their problem by showing them their current way is flawed.

Use lines like:

“Interesting… So let me ask, why do you think you’ve been approaching it that way?”

“Do you think that way of doing things is sustainable long term?”

“If you kept doing what you’re doing now for another year, where would you end up?”

This phase is crucial to show them the gap between where they are and where they want to be — and that your solution is the bridge.

4. Scarcity: Push Urgency with Integrity
Once they show interest in moving forward, but they want to hop of the call and check in laterset urgency:

“So here’s the thing — we’re only onboarding a few candidates right now, and it’s honestly a headache going back and forth with people who aren’t ready to commit. You’ve seen the program, you know what’s included, and now’s your window to take action.” You can also combine with there are 20k people on this call right now and we’re only taking 30 people who are committed to work together. So make them feel as though by hopping off this call they loose an opportunity. 

If they try to delay, say:

“I totally get that, but we’ve already had a few people book since the webinar — and once this cohort closes, we won’t be reopening for a while. I’d hate for you to miss this just because of hesitation. You in?”

5. Closing Path 1: They're Ready to Buy
If they’re a fit and ready to go, guide them to the Buy Now button and walk them through payment:

“Awesome! You’re going to love this. Go ahead and scroll down — you’ll see the Buy Now button at the bottom of the page. You can go ahead and secure your spot there while I’m still on the line.”

Wait for confirmation and support them through the process.

6. Closing Path 2: They Want to “Think About It” or Stall
Handle objections directly but respectfully.

Common Objection Handlers:
“I need to think about it”

“That’s fair, and you should think it through — but just to clarify, what exactly do you feel you need to think about that we haven’t already covered?”

“I need to talk to my [partner/mom/etc.]”

“Got it — and let me ask, when you booked the call, did you mention it to them? I ask because based on what you’ve shared, this seems like something you want to do — and I’d hate to see you pass up a solution you believe in.”

“I don’t have the funds”

“I hear you — but just to clarify, you filled out the form before the webinar, and this program is within the budget range you selected. Is it really the funds, or are you just feeling unsure about whether this will work for you?”

(Then pivot back to reinforcing trust in the program.)

7. Fallback Offer: Book a Call
If they’re genuinely not ready, offer to book a follow-up team call:

“No problem at all — I can tell you’re serious about solving this. Let’s not lose the momentum. I’ll go ahead and book you in with one of our team specialists to dig deeper. That way you’ll have clarity and a chance to ask anything you need before moving forward. Fair?”

Guide them to the booking page and ensure they lock in a time.

🔹 FINAL INSTRUCTIONS TO THE AI AGENT:
Use ethical tie-downs at every stage to anchor commitment and reduce objections.

Ask thoughtful, layered questions and dig deeper on every surface-level answer.

Use scarcity and urgency to nudge action, especially if they stall.

Always assume the user has already pre-qualified via form submission and webinar — so budget objections should be challenged.

Only offer a team call as a secondary option if they aren’t ready to buy now.

Use friendly, professional tone with subtle authority — be a trusted advisor, not a pushy salesperson.

Be flexible in adjusting how each pillar is framed — but never alter the core offer or guarantees.
`;
const navbarOptions = [
    {
        id: 1,
        title: 'Home',
        link: '#home'
    },
    {
        id: 2,
        title: 'Features',
        link: '#features'
    },
    {
        id: 3,
        title: 'Workflow',
        link: '#workflow'
    },
    {
        id: 4,
        title: 'About',
        link: '#about'
    }
];
}}),
"[externals]/buffer [external] (buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/punycode [external] (punycode, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("punycode", () => require("punycode"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[project]/src/lib/vapi/vapiServer.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getVapiClient": (()=>getVapiClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$server$2d$sdk$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vapi-ai/server-sdk/index.js [app-rsc] (ecmascript)");
;
;
function getVapiClient() {
    const payload = {
        orgId: process.env.VAPI_ORG_ID,
        token: {
            tag: 'private'
        }
    };
    const key = process.env.VAPI_PRIVATE_KEY;
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].sign(payload, key, {
        expiresIn: 3600
    });
    console.log('Generated new JWT token at:', new Date().toISOString());
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vapi$2d$ai$2f$server$2d$sdk$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VapiClient"]({
        token
    });
}
}}),
"[project]/src/actions/vapi.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f3b84862125a5d170738c59338f3b04aa794641aa":"getAllAssistants","7f487e16d0d733a93d34c2a963715359f91981ea80":"createAssistant"} */ __turbopack_context__.s({
    "createAssistant": (()=>createAssistant),
    "getAllAssistants": (()=>getAllAssistants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vapi$2f$vapiServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/vapi/vapiServer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAllAssistants = async ()=>{
    try {
        const vapiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vapi$2f$vapiServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVapiClient"])();
        const getAllAgents = await vapiClient.assistants.list();
        return {
            success: true,
            status: 200,
            data: getAllAgents
        };
    } catch (error) {
        console.error('Error fetching agents:', error);
        if (typeof error === 'object' && error !== null) {
            const status = 'status' in error ? error.status : undefined;
            const body = 'body' in error ? error.body : undefined;
            const message = 'message' in error ? error.message : undefined;
            const isExpiredByStatus = status === 401;
            const isExpiredByBody = typeof body === 'object' && body !== null && 'message' in body && body.message === 'JWT has expired.';
            const isExpiredByMessage = typeof message === 'string' && message.includes('JWT has expired');
            if (isExpiredByStatus || isExpiredByBody || isExpiredByMessage) {
                return {
                    success: false,
                    status: 401,
                    message: 'Your session has expired',
                    jwtExpired: true
                };
            }
        }
        return {
            success: false,
            status: 500,
            message: 'Failed to fetch agents'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createAssistant = async (name)=>{
    try {
        const vapiClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$vapi$2f$vapiServer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getVapiClient"])();
        const createAssistant = await vapiClient.assistants.create({
            name,
            firstMessage: `Hi there, this is the ${name} for customer support. How can I help you today?`,
            model: {
                model: 'gpt-4o',
                provider: 'openai',
                messages: [
                    {
                        role: 'system',
                        content: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["aiAgentPrompt"]
                    }
                ],
                temperature: 0.5
            },
            serverMessages: []
        });
        return {
            success: true,
            status: 200,
            data: createAssistant
        };
    } catch (error) {
        console.error('Error creating assistant:', error);
        return {
            success: false,
            status: 500,
            message: 'Failed to create assistant'
        };
    }
}; // export const updateAssistant = async (
 //   assistantId: string,
 //   firstMessage: string,
 //   systemPrompt: string,
 // ) => {
 //   try {
 //     const vapiClient = getVapiClient();
 //     const updateAssistant = await vapiClient.assistants.update(assistantId, {
 //       firstMessage: firstMessage,
 //       model: {
 //         model: 'gpt-4o',
 //         provider: 'openai',
 //         messages: [
 //           {
 //             role: 'system',
 //             content: systemPrompt,
 //           },
 //         ],
 //       },
 //       serverMessages: [],
 //     });
 //     console.log('Assistant updated', updateAssistant);
 //     return {
 //       success: true,
 //       status: 200,
 //       data: updateAssistant,
 //     };
 //   } catch (error: unknown) {
 //     console.error('Error updating assistant: ', error);
 //     return {
 //       success: false,
 //       status: 500,
 //       message: 'Failed to update assistant',
 //     };
 //   }
 // };
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAllAssistants,
    createAssistant
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllAssistants, "7f3b84862125a5d170738c59338f3b04aa794641aa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAssistant, "7f487e16d0d733a93d34c2a963715359f91981ea80", null);
}}),
"[project]/src/components/ErrorBoundary/ErrorBoundary.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ErrorBoundary/ErrorBoundary.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ErrorBoundary/ErrorBoundary.tsx <module evaluation>", "default");
}}),
"[project]/src/components/ErrorBoundary/ErrorBoundary.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ErrorBoundary/ErrorBoundary.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ErrorBoundary/ErrorBoundary.tsx", "default");
}}),
"[project]/src/components/ErrorBoundary/ErrorBoundary.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ErrorBoundary/ErrorBoundary.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ErrorBoundary/ErrorBoundary.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(protectedRoutes)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Layout),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReusableComponents/LayoutComponents/Sidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReusableComponents/LayoutComponents/Header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$vapi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/vapi.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ErrorBoundary/ErrorBoundary.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    title: 'SalesPaddi (Dashboard)',
    description: 'Create and manage AI-powered webinars, configure agents, and track analytics',
    authors: [
        {
            name: 'PlusCode',
            url: 'https://pluscodeltd.vercel.app'
        }
    ]
};
async function Layout({ children }) {
    const userExist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
    try {
        if (!userExist?.user) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
        }
    } catch (error) {
        console.error('Error during authentication:', error);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
    }
    const stripeProductsRaw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsByOwnerId"])(userExist.user.id);
    const stripeProducts = stripeProductsRaw.map((product)=>({
            ...product,
            price: Number(product.price),
            createdAt: product.createdAt.toISOString(),
            updatedAt: product.updatedAt.toISOString()
        }));
    const assistants = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$vapi$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllAssistants"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Sidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/layout.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col w-full h-screen overflow-auto scroll-auto px-3 sm:px-3 md:px-6 lg:px-10 xl:px-16 2xl:px-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReusableComponents$2f$LayoutComponents$2f$Header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        user: userExist.user,
                        stripeProducts: stripeProducts || [],
                        assistants: assistants.data || []
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/layout.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 py-3 md:py-6 lg:py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ErrorBoundary$2f$ErrorBoundary$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            children: children
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/layout.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/layout.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/layout.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protectedRoutes)/layout.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__55deccde._.js.map