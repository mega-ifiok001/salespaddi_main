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
"[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StripeConnectCard": (()=>StripeConnectCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const StripeConnectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StripeConnectCard() from the server but StripeConnectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx <module evaluation>", "StripeConnectCard");
}}),
"[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "StripeConnectCard": (()=>StripeConnectCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const StripeConnectCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StripeConnectCard() from the server but StripeConnectCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx", "StripeConnectCard");
}}),
"[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$StripeConnectCard$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$StripeConnectCard$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$StripeConnectCard$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountSettingsCard": (()=>AccountSettingsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AccountSettingsCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccountSettingsCard() from the server but AccountSettingsCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx <module evaluation>", "AccountSettingsCard");
}}),
"[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AccountSettingsCard": (()=>AccountSettingsCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const AccountSettingsCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccountSettingsCard() from the server but AccountSettingsCard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx", "AccountSettingsCard");
}}),
"[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$AccountSettingsCard$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$AccountSettingsCard$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$AccountSettingsCard$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "CompactDashboardCard": (()=>CompactDashboardCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
const CompactDashboardCard = ({ title, icon, children, link })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        href: `/${link}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 border rounded-lg bg-background shadow-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-md font-semibold text-primary",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 w-8 rounded-full bg-muted flex items-center justify-center",
                            children: icon
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between text-sm",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
}}),
"[project]/src/app/(protectedRoutes)/settings/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/product.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/actions/webinar.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ri/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideDollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-rsc] (ecmascript) <export default as LucideDollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LucidePackage$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/package.js [app-rsc] (ecmascript) <export default as LucidePackage>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideVideo$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-rsc] (ecmascript) <export default as LucideVideo>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$StripeConnectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/StripeConnectCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$AccountSettingsCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/AccountSettingsCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$CompactDashboardCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/_components/CompactDashboardCard.tsx [app-rsc] (ecmascript)");
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
    const { user } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onAuthenticateUser"])();
    if (!user) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/sign-in');
    }
    const isConnected = !!user.stripeConnectId;
    const [totalWebinars, totalProducts, revenueCount] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$webinar$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countWebinars"])(user.id),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["countProducts"])(user.id),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$actions$2f$product$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calculateRevenue"])(user.id)
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:px-3 space-y-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl md:text-2xl font-bold",
                        children: "Workspace Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mt-1",
                        children: "Manage your connections, content, and account"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$StripeConnectCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["StripeConnectCard"], {
                        isConnected: isConnected,
                        userId: user.id
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$AccountSettingsCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccountSettingsCard"], {
                        user: user
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$CompactDashboardCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CompactDashboardCard"], {
                        title: "Webinars",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideVideo$3e$__["LucideVideo"], {
                            className: "w-5 h-5 text-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                            lineNumber: 43,
                            columnNumber: 17
                        }, void 0),
                        link: 'webinars',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Total",
                                value: totalWebinars.count
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Payments",
                                value: isConnected ? 'Active' : 'Inactive'
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$CompactDashboardCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CompactDashboardCard"], {
                        title: "Products",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$package$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LucidePackage$3e$__["LucidePackage"], {
                            className: "w-5 h-5 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                            lineNumber: 55,
                            columnNumber: 17
                        }, void 0),
                        link: 'products',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Total",
                                value: totalProducts.count
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Store",
                                value: isConnected ? 'Live' : 'Pending'
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$CompactDashboardCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CompactDashboardCard"], {
                        title: "Revenue",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LucideDollarSign$3e$__["LucideDollarSign"], {
                            className: "w-5 h-5 text-purple-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                            lineNumber: 64,
                            columnNumber: 17
                        }, void 0),
                        link: 'products',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Total",
                                value: `${revenueCount.revenue}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Gateway",
                                value: isConnected ? 'Connected' : 'Missing'
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protectedRoutes$292f$settings$2f$_components$2f$CompactDashboardCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CompactDashboardCard"], {
                        title: "AI Agents",
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ri$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RiRobot3Line"], {
                            className: "w-5 h-5 text-orange-700"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                            lineNumber: 76,
                            columnNumber: 17
                        }, void 0),
                        link: 'ai-agents',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Total",
                                value: `${3}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatDisplay, {
                                label: "Mode",
                                value: isConnected ? 'Active' : 'Inactive'
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = page;
const StatDisplay = ({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-muted-foreground",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                lineNumber: 99,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-bold text-primary",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
                lineNumber: 100,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protectedRoutes)/settings/page.tsx",
        lineNumber: 98,
        columnNumber: 3
    }, this);
}}),
"[project]/src/app/(protectedRoutes)/settings/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(protectedRoutes)/settings/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=src_ce29c5c8._.js.map