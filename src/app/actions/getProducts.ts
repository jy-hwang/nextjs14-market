import { PRODUCT_PER_PAGE } from "@/types/constants";

export interface ProductsParams {
    latitude?: number;
    longitude?: number;
    category?: string;
    skip?: number;
    page?: number;
}

export default async function getProducts(
    params: ProductsParams
) {
    try {
        const {
            latitude,
            longitude,
            category,
            skip,
        } = params;

        let query: any = {};

        if (category) {
            query.category = category;
        }

        if (latitude) {
            query.latitude = {
                gte: Number(latitude) - 0.01,
                lte: Number(latitude) + 0.01,
            };
        }

        if (longitude) {
            query.longitude = {
                gte: Number(longitude) - 0.01,
                lte: Number(longitude) + 0.01,
            };
        }
        console.log('***query :: ', query);

        const totalItems = await prisma.product.count({
            where: query
        })

        const products = await prisma.product.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc',
            },
            skip: skip? Number(skip) : 0,
            take : PRODUCT_PER_PAGE
        })

        return {
            data: products,
            totalItems
        }

    } catch (error: any) {
        throw new Error(error);
    }

}
