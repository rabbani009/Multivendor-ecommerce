import http from "./httpService"


// Help center
export const helpCenter = async (slug, catId, subCatId, qus ) => {
    if (!qus) return await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/help/${slug}?catId=${catId}&subCatId=${subCatId}`)
    return await http.get(`${process.env.NEXT_PUBLIC_BASE_URL}/help/${slug}?catId=${catId}&subCatId=${subCatId}&question=${qus}`)
}
