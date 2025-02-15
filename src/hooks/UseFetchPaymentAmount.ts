import axiosClient from "@/services/axios-client";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useFetchPaymentAmount = (userId: number | string) => {
    const [amount, setAmount] = useState<number | null>(null);
    const [loadingAmount, setLoading] = useState<boolean>(false);
    const client = axiosClient();
    useEffect(() => {
        const fetchAmount = async () => {
            if (!userId) return;

            setLoading(true);
            try {
                const token = localStorage.getItem("authToken");
                const response = await client.post(
                    "/payment/price",
                    { user_id: userId },
                    {
                        headers: token ? { Authorization: `Bearer ${token}` } : {},
                    }
                );
                setAmount(response.data.amount);
            } catch (error: any) {
                const errorMessage = error.response?.data?.message || error.message;
                toast.error(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchAmount();
    }, [userId]);

    return { amount, loadingAmount };
};

export default useFetchPaymentAmount;
