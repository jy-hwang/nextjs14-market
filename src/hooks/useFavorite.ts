import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

interface UseFavoriteProps {
    productId: string;
    currentUser: User | null | undefined;
}

const useFavorite = ({ productId, currentUser }: UseFavoriteProps) => {

    const router = useRouter();

    const hasFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(productId);
    }, [currentUser, productId])

    const toggleFavorite = async (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        if (!currentUser) {
            return;
        }

        try {
            let request;

            if (hasFavorite) {
                request = () => axios.delete(`/api/favorites/${productId}`);
            } else {
                request = () => axios.post(`/api/favorites/${productId}`);
            }

            await request();
            router.refresh();

        } catch (error) {

        }

    }

    return {
        hasFavorite,
        toggleFavorite,
    }

}

export default useFavorite;

