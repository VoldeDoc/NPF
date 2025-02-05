import axiosClient from "@/services/axios-client";
import { DocumentFormValues, DocumentUploadProps, UserFormValues, VehicleFormValues } from "@/types";
import { useState } from "react";

export default function useInsurance() {
    const client = axiosClient();
    const [loading, setLoading] = useState(false);

    const submitUserDetails = async (data: UserFormValues) => {
        try {
            const response = await client.post('/users', data);
            return response.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data
            console.log(errorMessage);
        }
    };

    const getUserDetails = async (id: string) => {
        try {
            const response = await client.get('/users/' + id);
            console.log("This is the response", response.data);
            return response.data;
        } catch (error: any) {
            const resError = error.response?.data;
            console.log(resError);
            const errorMessage = resError?.message || resError?.data
            console.log(errorMessage);
        }
    }

    const submitVehicleDetails = async (data: VehicleFormValues) => {
        try {
            const response = await client.post('/vehicles', data);
            console.log("This is the response", response.data);
            return response.data;
        } catch (error: any) {
            console.log(error);

            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data
            console.log(errorMessage);
        }
    };

    const submitDocuments = async (data: DocumentUploadProps) => {
        try {
            const response = await client.post('/documents/upload', data);
            console.log("This is the response", response.data);
            return response.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data
            console.log(errorMessage);
        }
    }

    const submitInsuranceDetails = async (userData: UserFormValues, vehicleData: VehicleFormValues, uploadData: DocumentFormValues) => {
        try {
            // return console.log(userData);
            setLoading(true);
            const userResponse = await submitUserDetails(userData)
            console.log(userResponse);
            if (!userResponse.message.includes("successfully")) {
                return new Error("User details not submitted successfully");
            }
            vehicleData.user_id = userResponse.data.id
            console.log(vehicleData);
            const vehicleResponse = await submitVehicleDetails(vehicleData)
            console.log(vehicleResponse);

            // if (!vehicleResponse.message.includes("successfully")) {
            //     return new Error("Vehicle details not submitted successfully");
            // }
            let document: DocumentUploadProps | undefined = undefined;
            switch (true) {
                case !!uploadData.utility_bill.name:
                    document = {
                        user_id: vehicleResponse.vehicle.user_id,
                        type: "utility_bill",
                        document_type: "driver_license",
                        file: uploadData.utility_bill
                    };
                    break;
                case !!uploadData.validId.name:
                    document = {
                        user_id: vehicleResponse.vehicle.user_id,
                        type: "government_id",
                        document_type: "international_passport",
                        file: uploadData.validId
                    };
                    break;
                case !!uploadData.vehicleLicense.name:
                    document = {
                        user_id: vehicleResponse.vehicle.user_id,
                        type: "vehicle_license",
                        document_type: "driver_license",
                        file: uploadData.vehicleLicense
                    };
                    break;
            }
            console.log(document);

            if (document) {
                const documentResponse = await submitDocuments(document);
                console.log(documentResponse);
                setLoading(false);
                return { message: "Insurance details submitted successfully", userId: documentResponse.data.user_id };
            } else {
                throw new Error("No valid document found to submit");
            }
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data
            console.log(errorMessage);
            setLoading(false);
        }
    }

    const initializePayment = async (userId: number) => {
        try {
            setLoading(true);
            const response = await client.post('/payments/initialize', {
                user_id: userId,
                callback_url: window.location.origin + "/payment/callback"
            });
            console.log(response);

            console.log("This is the response", response.data);
            setLoading(false);
            return response.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data
            console.log(errorMessage);
            setLoading(false);
        }
    }

    return {
        loading,
        submitUserDetails,
        submitVehicleDetails,
        getUserDetails,
        submitDocuments,
        submitInsuranceDetails,
        initializePayment
    };
}