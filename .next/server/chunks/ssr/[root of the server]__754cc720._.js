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
"[project]/src/actions/webinar.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"4019a57e493a3346554356a48a0bf0d2e65bdc354d":"getWebinarById","6045b8d257ffdc76f15a4f97c70a0cdd31be9336ef":"changeWebinarStatus","7f01c67f60110dc8bdfb7e1d04b6780d6444e50952":"countWebinars","7f7797c8a9e84949aa24e4c14748f65b7edc81d018":"getWebinarByPresenterId","7fae278c30c6cefae4b949d4286835f37f4c727289":"updateWebinar","7fbe4f6b3e17955cd5e695897eed8ce9456efde24d":"createWebinar","7fcdbf49e359ce5159b7812b3bb7a46c23dbd459c9":"deleteWebinar"} */ __turbopack_context__.s({
    "changeWebinarStatus": (()=>changeWebinarStatus),
    "countWebinars": (()=>countWebinars),
    "createWebinar": (()=>createWebinar),
    "deleteWebinar": (()=>deleteWebinar),
    "getWebinarById": (()=>getWebinarById),
    "getWebinarByPresenterId": (()=>getWebinarByPresenterId),
    "updateWebinar": (()=>updateWebinar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function combineDateTime(date, timeStr, timeFormat) {
    const [hoursStr, minutesStr] = timeStr.split(':');
    let hours = Number.parseInt(hoursStr, 10);
    const minutes = Number.parseInt(minutesStr || '0', 10);
    if (timeFormat === 'PM' && hours < 12) {
        hours += 12;
    } else if (timeFormat === 'AM' && hours === 12) {
        hours = 0;
    }
    const result = new Date(date);
    result.setHours(hours, minutes, 0, 0);
    return result;
}
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createWebinar = async (formData)=>{
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
        if (!user) {
            return {
                status: 401,
                message: 'Unauthorized'
            };
        }
        // if (!user.user?.subscription) {
        //   return { status: 402, message: 'Subscription Required' };
        // }
        const presenterId = user.user?.id;
        console.log('Form Data', formData, presenterId);
        if (formData.cta.ctaType === 'BOOK_A_CALL') {
            if (user.user.bookACallWebinarsLimit <= 0) {
                return {
                    status: 400,
                    message: 'You have reached your limit for Book-a-Call webinars. Please upgrade your plan.'
                };
            }
        }
        if (!formData.basicInfo.webinarName) {
            return {
                status: 400,
                message: 'Webinar Name is required'
            };
        }
        if (!formData.basicInfo.date) {
            return {
                status: 400,
                message: 'Webinar Date is required'
            };
        }
        if (!formData.basicInfo.time) {
            return {
                status: 400,
                message: 'Webinar Time is required'
            };
        }
        const combinedDataTime = combineDateTime(formData.basicInfo.date, formData.basicInfo.time, formData.basicInfo.timeFormat || 'AM');
        // const now = new Date();
        // if (combinedDataTime < now) {
        //   return {
        //     status: 400,
        //     message: 'Webinar Date and Time must be in the future',
        //   };
        // }
        const data = {
            title: formData.basicInfo.webinarName,
            description: formData.basicInfo.description || '',
            thumbnail: formData.basicInfo.thumbnail || '',
            startTime: combinedDataTime,
            tags: formData.cta.tags || [],
            ctaLabel: formData.cta.ctaLabel || '',
            ctaType: formData.cta.ctaType,
            aiAgentId: formData.cta.aiAgent || null,
            lockChat: formData.additionalInfo.lockChat || false,
            couponCode: formData.additionalInfo.couponEnabled ? formData.additionalInfo.couponCode ?? null : null,
            priceId: formData.cta.priceId || null,
            couponEnabled: formData.additionalInfo.couponEnabled || false
        };
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].$transaction(async (tx)=>{
            const webinar = await tx.webinar.create({
                data: {
                    ...data,
                    presenterId: presenterId
                }
            });
            if (formData.cta.ctaType === 'BOOK_A_CALL') {
                await tx.user.update({
                    where: {
                        id: presenterId
                    },
                    data: {
                        bookACallWebinarsLimit: {
                            decrement: 1
                        }
                    }
                });
            }
            return webinar;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        return {
            status: 200,
            message: 'Webinar created successfully',
            webinarId: result.id,
            webinarLink: `/webinar/${result.id}`
        };
    } catch (error) {
        console.error('Error creating webinar:', error);
        return {
            status: 500,
            message: 'Failed to create webinar'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ updateWebinar = async (webinarId, formData)=>{
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
        if (!user) {
            return {
                status: 401,
                message: 'Unauthorized'
            };
        }
        if (!user.user?.subscription) {
            return {
                status: 402,
                message: 'Subscription Required'
            };
        }
        const presenterId = user.user?.id;
        console.log('Update Form Data', formData, presenterId, webinarId);
        const existingWebinar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.findUnique({
            where: {
                id: webinarId
            }
        });
        if (!existingWebinar) {
            return {
                status: 404,
                message: 'Webinar not found'
            };
        }
        if (existingWebinar.presenterId !== presenterId) {
            return {
                status: 403,
                message: 'Forbidden: You can only update your own webinars'
            };
        }
        const isChangingToBooKACall = existingWebinar.ctaType !== 'BOOK_A_CALL' && formData.cta.ctaType === 'BOOK_A_CALL';
        if (isChangingToBooKACall && user.user.bookACallWebinarsLimit <= 0) {
            return {
                status: 400,
                message: 'You have reached your limit for Book-a-Call webinars. Please upgrade your plan.'
            };
        }
        if (!formData.basicInfo.webinarName) {
            return {
                status: 400,
                message: 'Webinar Name is required'
            };
        }
        if (!formData.basicInfo.date) {
            return {
                status: 400,
                message: 'Webinar Date is required'
            };
        }
        if (!formData.basicInfo.time) {
            return {
                status: 400,
                message: 'Webinar Time is required'
            };
        }
        const combinedDataTime = combineDateTime(formData.basicInfo.date, formData.basicInfo.time, formData.basicInfo.timeFormat || 'AM');
        const updateData = {
            title: formData.basicInfo.webinarName,
            description: formData.basicInfo.description || '',
            thumbnail: formData.basicInfo.thumbnail || '',
            startTime: combinedDataTime,
            tags: formData.cta.tags || [],
            ctaLabel: formData.cta.ctaLabel || 'Webinar',
            ctaType: formData.cta.ctaType,
            aiAgentId: formData.cta.aiAgent || null,
            lockChat: formData.additionalInfo.lockChat || false,
            couponCode: formData.additionalInfo.couponEnabled ? formData.additionalInfo.couponCode ?? null : null,
            priceId: formData.cta.priceId || null,
            couponEnabled: formData.additionalInfo.couponEnabled || false
        };
        // Use transaction to update webinar and user limit
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].$transaction(async (tx)=>{
            // Update the webinar
            const updatedWebinar = await tx.webinar.update({
                where: {
                    id: webinarId
                },
                data: updateData
            });
            // Handle limit changes based on CTA type changes
            if (existingWebinar.ctaType === 'BOOK_A_CALL' && formData.cta.ctaType !== 'BOOK_A_CALL') {
                // Changed from BOOK_A_CALL to something else - refund the limit
                await tx.user.update({
                    where: {
                        id: presenterId
                    },
                    data: {
                        bookACallWebinarsLimit: {
                            increment: 1
                        }
                    }
                });
            } else if (isChangingToBooKACall) {
                // Changed to BOOK_A_CALL - decrement the limit
                await tx.user.update({
                    where: {
                        id: presenterId
                    },
                    data: {
                        bookACallWebinarsLimit: {
                            decrement: 1
                        }
                    }
                });
            }
            return updatedWebinar;
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/webinar/${webinarId}`);
        return {
            status: 200,
            message: 'Webinar updated successfully',
            webinarId: result.id,
            webinarLink: `/webinar/${result.id}`,
            data: result
        };
    } catch (error) {
        console.error('Error updating webinar:', error);
        return {
            status: 500,
            message: 'Failed to update webinar'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getWebinarByPresenterId = async (presenterId, webinarStatus)=>{
    try {
        let statusFilter;
        switch(webinarStatus){
            case 'upcoming':
                statusFilter = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebinarStatusEnum"].SCHEDULED;
                break;
            case 'ended':
                statusFilter = __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["WebinarStatusEnum"].ENDED;
                break;
            default:
                statusFilter = undefined;
        }
        const webinars = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.findMany({
            where: {
                presenterId: presenterId,
                webinarStatus: statusFilter
            },
            include: {
                presenter: {
                    select: {
                        id: true,
                        stripeConnectId: true,
                        email: true
                    }
                }
            }
        });
        return webinars;
    } catch (error) {
        console.error('Error fetching webinars:', error);
        return [];
    }
};
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getWebinarById(webinarId) {
    try {
        const webinar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.findUnique({
            where: {
                id: webinarId
            },
            include: {
                presenter: {
                    select: {
                        id: true,
                        name: true,
                        profileImage: true,
                        stripeConnectId: true,
                        email: true
                    }
                }
            }
        });
        return webinar;
    } catch (error) {
        console.error('Error fetching webinar by ID:', error);
        throw new Error('Webinar not found');
    }
}
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ changeWebinarStatus(webinarId, status) {
    try {
        const webinar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.update({
            where: {
                id: webinarId
            },
            data: {
                webinarStatus: status
            }
        });
        return {
            status: 200,
            success: true,
            message: 'Webinar status updated successfully',
            data: webinar
        };
    } catch (error) {
        console.error('Error updating webinar status:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to update webinar status'
        };
    }
}
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ deleteWebinar = async (webinarId)=>{
    try {
        const webinar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.delete({
            where: {
                id: webinarId
            }
        });
        return {
            status: 200,
            success: true,
            message: 'Webinar deleted successfully',
            data: webinar
        };
    } catch (error) {
        console.error('Error deleting webinar status:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to delete webinar'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ countWebinars = async (presenterId)=>{
    try {
        const count = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.count({
            where: {
                presenterId: presenterId
            }
        });
        return {
            status: 200,
            success: true,
            message: 'Webinars counted successfully',
            count: count
        };
    } catch (error) {
        console.error('Error counting webinars:', error);
        return {
            status: 500,
            success: false,
            message: 'Failed to count webinars',
            count: 0
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createWebinar,
    updateWebinar,
    getWebinarByPresenterId,
    getWebinarById,
    changeWebinarStatus,
    deleteWebinar,
    countWebinars
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createWebinar, "7fbe4f6b3e17955cd5e695897eed8ce9456efde24d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateWebinar, "7fae278c30c6cefae4b949d4286835f37f4c727289", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWebinarByPresenterId, "7f7797c8a9e84949aa24e4c14748f65b7edc81d018", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWebinarById, "4019a57e493a3346554356a48a0bf0d2e65bdc354d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeWebinarStatus, "6045b8d257ffdc76f15a4f97c70a0cdd31be9336ef", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteWebinar, "7fcdbf49e359ce5159b7812b3bb7a46c23dbd459c9", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(countWebinars, "7f01c67f60110dc8bdfb7e1d04b6780d6444e50952", null);
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
"[project]/src/lib/stream/streamClient.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getStreamClient": (()=>getStreamClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stream$2d$io$2f$node$2d$sdk$2f$dist$2f$index$2e$es$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stream-io/node-sdk/dist/index.es.mjs [app-rsc] (ecmascript)");
;
const getStreamClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stream$2d$io$2f$node$2d$sdk$2f$dist$2f$index$2e$es$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StreamClient"](("TURBOPACK compile-time value", "fcvmyqdqxyq6"), process.env.STREAM_SECRET);
}}),
"[project]/src/actions/streamIo.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f0d0c6640a5404b00dc94ad062c0f63a4609a386d":"getTokenForHost","7f55bc7f48bf45f0aec9dc767193fe85471c4c07ec":"getStreamIoToken","7fa0c9393e1e9f798b87705469b8a93393e33c6889":"createAndStartStream"} */ __turbopack_context__.s({
    "createAndStartStream": (()=>createAndStartStream),
    "getStreamIoToken": (()=>getStreamIoToken),
    "getTokenForHost": (()=>getTokenForHost)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stream$2f$streamClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stream/streamClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getStreamIoToken = async (attendee)=>{
    try {
        const newUser = {
            id: attendee?.id || 'guest',
            role: 'user',
            name: attendee?.name || 'Guest',
            image: `https://api.dicebear.com/7.x/initails/svg?seed=${attendee?.name || 'Guest'}`
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stream$2f$streamClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStreamClient"].upsertUsers([
            newUser
        ]);
        const validity = 60 * 60 * 60;
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stream$2f$streamClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStreamClient"].generateUserToken({
            user_id: attendee?.id || 'guest',
            validity_in_seconds: validity
        });
        return token;
    } catch (error) {
        console.error('Error generating Stream IO token', error);
        throw new Error('Failed to generate Stream IO token');
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getTokenForHost = async (userId, username, profilePic)=>{
    try {
        const newUser = {
            id: userId,
            role: 'user',
            name: username || 'Guest',
            image: profilePic || `https://api.dicebear.com/7.x/initails/svg?seed=${username}`
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stream$2f$streamClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStreamClient"].upsertUsers([
            newUser
        ]);
        const validity = 60 * 60 * 60;
        const token = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stream$2f$streamClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStreamClient"].generateUserToken({
            user_id: userId,
            validity_in_seconds: validity
        });
        return token;
    } catch (err) {
        console.error('Error generating Stream Io Token', err);
        throw new Error('Failed to generate Stream Io token');
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ createAndStartStream = async (webinar)=>{
    try {
        const checkWebinar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.findMany({
            where: {
                presenterId: webinar.presenterId,
                webinarStatus: 'LIVE'
            }
        });
        if (checkWebinar.length > 0) {
            throw new Error('You already have a live stream running');
        }
        const call = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stream$2f$streamClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStreamClient"].video.call('livestream', webinar.id);
        await call.getOrCreate({
            data: {
                created_by_id: webinar.presenterId,
                members: [
                    {
                        user_id: webinar.presenterId,
                        role: 'host'
                    }
                ]
            }
        });
        await call.goLive();
        console.log('Stream created and started successfully');
        return {
            success: true,
            callId: webinar.id
        };
    } catch (err) {
        console.error('Error creating and starting stream: ', err);
        throw new Error('Failed to create and start stream');
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getStreamIoToken,
    getTokenForHost,
    createAndStartStream
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getStreamIoToken, "7f55bc7f48bf45f0aec9dc767193fe85471c4c07ec", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTokenForHost, "7f0d0c6640a5404b00dc94ad062c0f63a4609a386d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAndStartStream, "7fa0c9393e1e9f798b87705469b8a93393e33c6889", null);
}}),
"[project]/src/actions/attendence.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f6dd16bac406af8e0572a9452ad4c4390c2fe9045":"changeCallStatus","7f963a588a1df845fec0fcd517bae714ef79b9edd2":"registerAttendee","7fd1670a6f971de9b785e0c6e614e9b90a2a2b7f99":"changeAttendenceType","7ff4bc4fcd3a91681a3c885dc217deb503e98e6f29":"getAttendeeById","7ff53e0ebb4a320192417f83edb1834979a7c5d20d":"getWebinarAttendence"} */ __turbopack_context__.s({
    "changeAttendenceType": (()=>changeAttendenceType),
    "changeCallStatus": (()=>changeCallStatus),
    "getAttendeeById": (()=>getAttendeeById),
    "getWebinarAttendence": (()=>getWebinarAttendence),
    "registerAttendee": (()=>registerAttendee)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prismaClient.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getWebinarAttendence = async (webinarId, options = {
    includeUsers: true,
    userLimit: 100
})=>{
    try {
        const webinar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.findUnique({
            where: {
                id: webinarId
            },
            select: {
                id: true,
                ctaType: true,
                tags: true,
                presenter: true,
                _count: {
                    select: {
                        attendances: true
                    }
                }
            }
        });
        if (!webinar) {
            return {
                success: false,
                status: 404,
                message: 'Webinar not found'
            };
        }
        const attendanceCounts = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.groupBy({
            by: [
                'attendedType'
            ],
            where: {
                webinarId
            },
            _count: {
                attendedType: true
            }
        });
        const result = {};
        for (const type of Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"])){
            if (type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].ADDED_TO_CART && webinar.ctaType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CtaTypeEnum"].BOOK_A_CALL) continue;
            if (type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].BREAKOUT_ROOM && webinar.ctaType !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CtaTypeEnum"].BOOK_A_CALL) continue;
            const countItem = attendanceCounts.find((item)=>{
                if (webinar.ctaType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CtaTypeEnum"].BOOK_A_CALL && type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].BREAKOUT_ROOM && item.attendedType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].ADDED_TO_CART) {
                    return true;
                }
                return item.attendedType === type;
            });
            result[type] = {
                count: countItem ? countItem._count.attendedType : 0,
                users: []
            };
        }
        if (options.includeUsers) {
            for (const type of Object.values(__TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"])){
                if (type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].ADDED_TO_CART && webinar.ctaType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CtaTypeEnum"].BOOK_A_CALL || type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].BREAKOUT_ROOM && webinar.ctaType !== __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CtaTypeEnum"].BOOK_A_CALL) {
                    continue;
                }
                const queryType = webinar.ctaType === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["CtaTypeEnum"].BOOK_A_CALL && type === __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].BREAKOUT_ROOM ? __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].ADDED_TO_CART : type;
                if (result[type].count > 0) {
                    const attendances = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.findMany({
                        where: {
                            webinarId,
                            attendedType: queryType
                        },
                        include: {
                            user: true
                        },
                        take: options.userLimit,
                        orderBy: {
                            createdAt: 'desc'
                        }
                    });
                    result[type].users = attendances.map((attendance)=>({
                            id: attendance.user.id,
                            name: attendance.user.name,
                            email: attendance.user.email,
                            attendedAt: attendance.joinedAt,
                            stripeConnectId: null,
                            callStatus: attendance.user.callStatus,
                            createdAt: attendance.user.createdAt,
                            updatedAt: attendance.user.updatedAt
                        }));
                }
            }
        }
        return {
            success: true,
            data: result,
            ctaType: webinar.ctaType,
            tags: webinar.tags || [],
            presenter: webinar.presenter
        };
    } catch (error) {
        console.error('Error fetching webinar attendance data:', error);
        return {
            success: false,
            message: 'Failed to fetch webinar attendance'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ registerAttendee = async ({ email, name, webinarId })=>{
    try {
        if (!webinarId || !email) {
            return {
                success: false,
                status: 400,
                message: 'Missing required parameters'
            };
        }
        const webinar = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].webinar.findUnique({
            where: {
                id: webinarId
            }
        });
        if (!webinar) {
            return {
                success: false,
                status: 404,
                message: 'Webinar not found'
            };
        }
        let attendee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendee.findUnique({
            where: {
                email
            }
        });
        if (!attendee) {
            attendee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendee.create({
                data: {
                    email,
                    name
                }
            });
        }
        const existingAttendence = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.findFirst({
            where: {
                attendeeId: attendee.id,
                webinarId: webinarId
            },
            include: {
                user: true
            }
        });
        if (existingAttendence) {
            return {
                success: true,
                status: 200,
                data: existingAttendence,
                message: 'You are already registered for this webinar'
            };
        }
        const attendance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.create({
            data: {
                attendedType: __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["AttendedTypeEnum"].REGISTERED,
                attendeeId: attendee.id,
                webinarId: webinarId,
                updatedAt: new Date()
            },
            include: {
                user: true
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/${webinarId}`);
        return {
            success: true,
            status: 200,
            data: attendance,
            message: 'Successfully Registered'
        };
    } catch (error) {
        console.error('Registration Error:', error);
        return {
            success: false,
            status: 500,
            error: error,
            message: 'Something went wrong'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ changeAttendenceType = async (attendeeId, webinarId, attendeeType)=>{
    try {
        const attendance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.update({
            where: {
                attendeeId_webinarId: {
                    attendeeId,
                    webinarId
                }
            },
            data: {
                attendedType: attendeeType
            }
        });
        return {
            success: true,
            status: 200,
            message: 'Attendance type updated sucessfully',
            data: attendance
        };
    } catch (error) {
        console.error('Error updating attendence type: ', error);
        return {
            success: false,
            status: 500,
            message: 'Failed to update attendence type'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getAttendeeById = async (id, webinarId)=>{
    try {
        const attendee = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendee.findUnique({
            where: {
                id
            }
        });
        const attendance = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendance.findFirst({
            where: {
                attendeeId: id,
                webinarId: webinarId
            }
        });
        if (!attendee || !attendance) {
            return {
                status: 404,
                success: false,
                message: 'Attendee not found'
            };
        }
        return {
            success: true,
            status: 200,
            message: 'Get attendee details successfully',
            data: attendee
        };
    } catch (error) {
        console.log('Error', error);
        return {
            status: 500,
            success: false,
            message: 'Something went wrong'
        };
    }
};
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ changeCallStatus = async (attendeeId, callStatus)=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prismaClient$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prismaClient"].attendee.update({
            where: {
                id: attendeeId
            },
            data: {
                callStatus: callStatus
            }
        });
        return {
            success: true,
            status: 200,
            message: 'Call status updated successfully'
        };
    } catch (error) {
        console.error('Error updating call status: ', error);
        return {
            success: false,
            status: 500,
            message: 'Failed to update call status'
        };
    }
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getWebinarAttendence,
    registerAttendee,
    changeAttendenceType,
    getAttendeeById,
    changeCallStatus
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getWebinarAttendence, "7ff53e0ebb4a320192417f83edb1834979a7c5d20d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(registerAttendee, "7f963a588a1df845fec0fcd517bae714ef79b9edd2", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeAttendenceType, "7fd1670a6f971de9b785e0c6e614e9b90a2a2b7f99", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAttendeeById, "7ff4bc4fcd3a91681a3c885dc217deb503e98e6f29", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeCallStatus, "7f6dd16bac406af8e0572a9452ad4c4390c2fe9045", null);
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
"[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(publicRoutes)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx", "default");
}}),
"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$_components$2f$RenderWebinar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$_components$2f$RenderWebinar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$_components$2f$RenderWebinar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/webinar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$_components$2f$RenderWebinar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/_components/RenderWebinar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const page = async ({ params, searchParams })=>{
    const { liveWebinarId } = await params;
    const { error } = await searchParams;
    const webinarData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getWebinarById"])(liveWebinarId);
    if (!webinarData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full min-h-screen flex justify-center items-center text-lg sm:text-4xl",
            children: "Webinar Not Found"
        }, void 0, false, {
            fileName: "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this);
    }
    const checkUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
    const apiKey = ("TURBOPACK compile-time value", "fcvmyqdqxyq6");
    const product = webinarData.priceId ? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findOneProduct"])(webinarData.priceId) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full h-screen ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$publicRoutes$292f$live$2d$webinar$2f5b$liveWebinarId$5d2f$_components$2f$RenderWebinar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            error: error,
            user: checkUser.user || null,
            webinar: webinarData,
            apiKey: apiKey,
            product: product
        }, void 0, false, {
            fileName: "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = page;
}}),
"[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(publicRoutes)/live-webinar/[liveWebinarId]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__754cc720._.js.map