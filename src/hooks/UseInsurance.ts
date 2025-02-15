import axiosClient from "@/services/axios-client";
import { DocumentFormValues, DocumentUploadProps, UserFormValues, VehicleFormValues } from "@/types";
import { useState } from "react";
import { toast } from "react-toastify";

export default function useInsurance() {
    const client = axiosClient();
    const [loading, setLoading] = useState(false);

    const submitUserDetails = async (data: UserFormValues) => {
        try {
            //data.driver_license;
            const response = await client.post('/users', data);
            localStorage.setItem('userData', JSON.stringify(response.data));
            return response.data;
            //console.log("This is the response", response.data);
            
        } catch (error: any) {
            console.log('user error')
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            toast.error(errorMessage);
            //console.log(errorMessage);
            throw new Error(errorMessage);
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
            const errorMessage = resError?.message || resError?.data;
            console.log(errorMessage);
            throw new Error(errorMessage);
        }
    };

    const submitVehicleDetails = async (data: VehicleFormValues,) => {
        try {
            //const response = await client.post('/vehicles', data);
            const token = localStorage.getItem("authToken");
            const response = await client.post('/vehicles', data, {
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });
            console.log("This is the response", response.data);
            localStorage.setItem('vehicleData', JSON.stringify(response.data));
            return response.data;
        } catch (error: any) {
            console.log(error);
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            toast.error(errorMessage);
            console.log(errorMessage);
            throw new Error(errorMessage);
        }
    };

    const submitDocuments = async (data: DocumentUploadProps) => {
        try {
            const formData = new FormData();
            formData.append('user_id', data.user_id.toString());
            formData.append('type', data.type);
            if (data.document_type) {
                formData.append('document_type', data.document_type);
            }
    
            if (data.file) {
                formData.append('file', data.file);
            }
    
            const token = localStorage.getItem("authToken");
            const response = await client.post('/documents/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    ...(token ? { Authorization: `Bearer ${token}` } : {}), // Add token only if it exists
                },
            });
            console.log("This is the response", response.data);
            return response.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            console.log(errorMessage);
            throw new Error(errorMessage);
        }
    };

    const submitInsuranceDetails = async (/* userData: UserFormValues, */ vehicleData: VehicleFormValues, uploadData: DocumentFormValues) => {
        try {
            setLoading(true);
            /* //console.log('I am in insurance')
            const userResponse = await submitUserDetails(userData);
            //console.log('I am in insurance')
            console.log(userResponse);
            
            if (!userResponse.message.includes("successfully")) {
                console.log('didnt work')
                throw new Error("User details not submitted successfully");
            } */
            const userData = JSON.parse(localStorage.getItem("userData") ?? '');
            vehicleData.user_id = userData.id;
            //vehicleData.user_id = userResponse.data.id;
            const vehicleResponse = await submitVehicleDetails(vehicleData);
            console.log(vehicleResponse);
    
            let document: DocumentUploadProps | undefined = undefined;
            const validTypes = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];
            const maxSize = 2048 * 1024; // 2MB
    
            const validateFile = (file: File) => {
                if (!validTypes.includes(file.type)) {
                    throw new Error("Invalid file type. Only PDF, JPEG, PNG, and JPG are allowed.");
                }
                if (file.size > maxSize) {
                    throw new Error("File size exceeds the maximum limit of 2MB.");
                }
            };
    
            switch (true) {
                case !!uploadData.utility_bill?.name:
                    validateFile(uploadData.utility_bill);
                    document = {
                        user_id: vehicleResponse.vehicle.user_id,
                        type: "utility_bill",
                        file: uploadData.utility_bill as File & { type: "application/pdf" | "image/jpeg" | "image/png" }
                    };
                    break;
                case !!uploadData.nin?.name:
                    validateFile(uploadData.nin);
                    document = {
                        user_id: vehicleResponse.vehicle.user_id,
                        type: "government_id",
                        document_type: "international_passport",
                        file: uploadData.nin as File & { type: "image/jpeg" | "image/png" | "application/pdf" }
                    };
                    break;
                case !!uploadData.vehicleLicense?.name:
                    validateFile(uploadData.vehicleLicense);
                    document = {
                        user_id: vehicleResponse.vehicle.user_id,
                        type: "vehicle_license",
                        document_type: "driver_license",
                        file: uploadData.vehicleLicense as File & { type: "application/pdf" | "image/jpeg" | "image/png" }
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
            console.log(resError);
    
            const errorMessage = resError?.message || resError?.data || error.message;
            console.log(errorMessage);
            toast.error(errorMessage);

            setLoading(false);
            return null;
            //return { message: errorMessage };
        }
    };

    const initializePayment = async (userId: number | string) => {
        try {
            setLoading(true);
            
            console.log(userId)
            console.log(`${window.location.origin}/payments/callback`);
            const token = localStorage.getItem("authToken");
            const response = await client.post('/payments/initialize', {
                user_id: userId,
                callbackurl: `${window.location.origin}/payments/callback`
            },{
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });             
            setLoading(false);
            return response.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data || error.message;
            console.log(errorMessage);
            setLoading(false);
            return { message: errorMessage };
        }
    };

    const getCarType = async () => {
        try {
            setLoading(true);
            const res = await client.get('/cars');
            return res?.data?.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            console.log(errorMessage);
            setLoading(false);
        }
    };

    const getCarMakers = async () => {
        try {
            setLoading(true);
            const res = await client.get('/car/maker');
            return res?.data?.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            console.log(errorMessage);
            setLoading(false);
        }
    };

    const getCarModels = async () => {
        try {
            setLoading(true);
            const res = await client.get('/car/model');
            return res?.data?.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            console.log(errorMessage);
            setLoading(false);
        }
    };

    const getCategories = async () => {
        try {
            setLoading(true);
            const res = await client.get('/categories');
            return res?.data?.data;
        } catch (error: any) {
            const resError = error.response?.data;
            const errorMessage = resError?.message || resError?.data;
            console.log(errorMessage);
            setLoading(false);
        }
    };

    return {
        loading,
        submitUserDetails,
        submitVehicleDetails,
        getUserDetails,
        submitDocuments,
        submitInsuranceDetails,
        initializePayment,
        getCarType,
        getCarMakers,
        getCarModels,
        getCategories,
    };
}