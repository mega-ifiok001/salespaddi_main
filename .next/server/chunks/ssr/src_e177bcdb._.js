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
"[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx <module evaluation>", "default");
}}),
"[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx", "default");
}}),
"[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$OnBoarding$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$OnBoarding$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$OnBoarding$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
const FeatureCard = ({ Icon, heading, link })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: link,
        className: " group relative overflow-hidden px-8 py-6 flex flex-col items-start justify-center gap-14 rounded-xl border border-white/10 bg-secondary/60 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-400/20 via-green-500/10 to-lime-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 "
            }, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " pointer-events-none absolute -inset-[150%] bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.25),transparent_60%)] animate-spin-slow "
            }, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: Icon
            }, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "relative z-10 font-semibold text-xl text-primary",
                children: heading
            }, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FeatureCard;
}}),
"[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-rsc] (ecmascript) <export default as ArrowUpRight>");
;
;
;
const FeatureSectionLayout = ({ children, heading, link, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `p-6 sm:p-10 flex items-center justify-between flex-col gap-5 lg:gap-8 border rounded-2xl border-border bg-background-10 ${className}`,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full justify-between items-center flex flex-wrap gap-4 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "sm:w-[80%] font-semibold text-md lg:text-2xl text-primary",
                        children: heading
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: link,
                        className: "text-primary font-semibold text-lg flex items-center justify-center rounded-md opacity-50 gap-1 hoverthemeColor",
                        children: [
                            "View ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"], {}, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx",
                                lineNumber: 31,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FeatureSectionLayout;
}}),
"[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AIAgentsContent": (()=>AIAgentsContent),
    "SettingsContent": (()=>SettingsContent)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
const AIAgentsContent = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex items-center justify-center min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: "/ai-agents",
            className: "cursor-pointer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-32 h-32 mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-br from-blue-600 to-[#2c8c88] rounded-full flex items-center justify-center shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-card rounded-full flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl font-bold bg-gradient-to-r text-white bg-clip-text",
                                        children: "AI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 11,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                    lineNumber: 10,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 9,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 animate-spin",
                                style: {
                                    animationDuration: '20s'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full shadow-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 -right-2 transform -translate-y-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full shadow-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                        lineNumber: 8,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-4 -right-4 flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-green-400 rounded-full animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-blue-400 rounded-full animate-pulse",
                                style: {
                                    animationDelay: '0.5s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-purple-400 rounded-full animate-pulse",
                                style: {
                                    animationDelay: '1s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-4 -left-4 flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-orange-400 rounded-full animate-pulse",
                                style: {
                                    animationDelay: '1.5s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-pink-400 rounded-full animate-pulse",
                                style: {
                                    animationDelay: '2s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-indigo-400 rounded-full animate-pulse",
                                style: {
                                    animationDelay: '2.5s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const SettingsContent = ({ totalWebinars, stripeId, totalProducts, revenue })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex items-center justify-center min-h-[200px]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            href: "/settings",
            className: "cursor-pointer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-3 p-4 bg-card border-border rounded-lg shadow-lg border",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br from-gray-700 to-blue-800 p-3 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block w-2 h-2 bg-blue-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-white",
                                                children: "Webinars"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 81,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-white",
                                        children: totalWebinars
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br border border-border from-gray-700 to-green-800 p-3 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block w-2 h-2 bg-green-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-white",
                                                children: "Products"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-white",
                                        children: totalProducts
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br border border-border from-gray-700 to-purple-800 p-3 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block w-2 h-2 bg-purple-500 rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-white",
                                                children: "Revenue"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg font-bold text-white",
                                        children: revenue
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-br border border-border from-gray-700 to-orange-800 p-3 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "hidden sm:block w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-white",
                                                children: "Stripe"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-md font-bold text-white",
                                        children: !stripeId ? `InActive` : `Active`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 106,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -top-2 -right-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center animate-spin",
                            style: {
                                animationDuration: '3s'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-2 h-2 bg-gray-400 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                            lineNumber: 118,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -left-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-4 h-4 border-2 border-gray-300 rounded-full flex items-center justify-center animate-spin",
                            style: {
                                animationDuration: '4s',
                                animationDirection: 'reverse'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-1 h-1 bg-gray-300 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
            lineNumber: 75,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
};
;
}}),
"[project]/src/app/(protectedRoutes)/home/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$OnBoarding$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/_components/OnBoarding.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/_components/FeatureCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$FeatureSectionLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/_components/FeatureSectionLayout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$ExtraComponents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/_components/ExtraComponents.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/webinar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
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
const page = async ()=>{
    const userExist = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
    if (!userExist?.user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
    }
    const totalWebinars = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countWebinars"])(userExist.user.id);
    const totalProducts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countProducts"])(userExist.user.id);
    const RevenueCount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateRevenue"])(userExist.user.id);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full mx-auto h-full px-2 sm:px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3 sm:space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-primary font-medium text-2xl sm:text-2xl ubuntu-medium",
                                children: "Make your Selling and marketing process seamless and efficient with SalesPaddi"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$OnBoarding$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-1 sm:gap-3 lg:gap-5 w-full justify-evenly items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                Icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FaShoppingBag"], {
                                    className: "w-5 h-5 sm:w-10 sm:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                                    lineNumber: 37,
                                    columnNumber: 19
                                }, void 0),
                                heading: "Create products and attach them to your webinars",
                                smHeading: "Products",
                                link: "/products"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$FeatureCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                Icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IoCreateSharp"], {
                                    className: "w-5 h-5 sm:w-10 sm:h-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 19
                                }, void 0),
                                heading: "Host webinars and boost your business like never before",
                                smHeading: "Webinars",
                                link: "/webinars"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 sm:mt-7 2xl:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl bg-background-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$FeatureSectionLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        heading: "Understand user intent and customize your AI agents accordingly",
                        link: "/ai-agents",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$ExtraComponents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AIAgentsContent"], {}, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$FeatureSectionLayout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        heading: "Manage your Webinars, Products and add demo Stripe integration",
                        link: "/settings",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$home$2f$_components$2f$ExtraComponents$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SettingsContent"], {
                            totalWebinars: totalWebinars.count,
                            stripeId: userExist.user.stripeConnectId,
                            totalProducts: totalProducts.count,
                            revenue: RevenueCount.revenue
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protectedRoutes)/home/page.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = page;
}}),
"[project]/src/app/(protectedRoutes)/home/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protectedRoutes)/home/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_e177bcdb._.js.map