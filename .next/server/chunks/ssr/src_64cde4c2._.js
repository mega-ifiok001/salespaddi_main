module.exports = {

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
"[project]/src/app/(protectedRoutes)/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protectedRoutes)/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx", "default");
}}),
"[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$products$2f$ProductPage$2f$ProductPage$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$products$2f$ProductPage$2f$ProductPage$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$products$2f$ProductPage$2f$ProductPage$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(protectedRoutes)/products/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$products$2f$ProductPage$2f$ProductPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/products/ProductPage/ProductPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const page = async ()=>{
    const userExist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
    if (!userExist?.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
    }
    const products = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductsByOwnerId"])(userExist.user.id);
    const productsForClient = products.map((product)=>({
            ...product,
            price: Number(product.price),
            createdAt: product.createdAt.toISOString(),
            updatedAt: product.updatedAt.toISOString()
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$products$2f$ProductPage$2f$ProductPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        user: userExist.user,
        products: productsForClient
    }, void 0, false, {
        fileName: "[project]/src/app/(protectedRoutes)/products/page.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = page;
}}),
"[project]/src/app/(protectedRoutes)/products/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protectedRoutes)/products/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_64cde4c2._.js.map