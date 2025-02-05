import ProgressBar from "./ProgressBar";
import downArrow from "../../../assets/insurance/down-arrow.svg";
import { BackButton } from "./NextButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { VehicleFormValues } from "@/types";

const schema = yup.object().shape({
  //   user_id: yup.number().required("User ID is required"),
  vehicle_registration_number: yup
    .string()
    .required("Vehicle Registration Number is required"),
  value_amount: yup.number().required("Value Amount is required"),
  maker: yup.string().required("Make is required"),
  motor_type: yup.string().required("Motor Type is required"),
  model: yup.string().required("Model is required"),
  body_color: yup.string().required("Body Color is required"),
  year: yup.string().required("Car Year is required"),
  car_type: yup.string().required("Car Type is required"),
  chassis_number: yup.string().required("Chassis Number is required"),
  engine_number: yup.string().required("Engine Number is required"),
  with_effect_from: yup.string().required("Effect From date is required"),
});

const VehicleDetails = ({
  currentStep,
  setCurrentStep,
  //   userData,
  setVehicleData,
}: {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  //   userData: any;
  setVehicleData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm<VehicleFormValues>({
    resolver: yupResolver(schema),
  });

  //   useEffect(() => {
  //     console.log("this is user data", userData);

  //     if (userData && userData.id) {
  //       setValue("user_id", userData.id);
  //     }
  //   }, [userData, setValue]);

  const onSubmit: SubmitHandler<VehicleFormValues> = (data) => {
    console.log("Form submitted with data:", data); // Debug log
    // SubmitVehicleDetails(data)
    //   .then((response) => {
    //     console.log("Response from server:", response); // Debug log
    setCurrentStep((prev) => prev + 1);
    setVehicleData(data);
    //   })
    //   .catch((error) => {
    //     console.error("Error submitting vehicle details:", error);
    //   });
  };

  return (
    <section className="">
      <div className="mx-auto text-center space-y-3 md:space-y-5">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-black ">
          Third Party Motor Insurance
        </h2>
        <p className="text-[#00000080] font-medium text-sm md:text-base w-full md:w-[50%] lg:w-[40%] mx-auto text-center">
          Fill in your vehicle details beginning with year, below. Or enter your
          VIN and we can pre-fill some of the required information.
        </p>
      </div>

      <ProgressBar currentStep={currentStep} totalSteps={4} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        id="vehicle-details"
        className="mt-8 lg:mt-14 py-5 space-y-6 md:space-y-12 text-[#00000080] font-medium text-sm md:text-base"
      >
        <input type="hidden" {...register("user_id")} />

        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <label htmlFor="vehicle_registration_number">
              Vehicle Registration Number *
            </label>
            <input
              id="vehicle_registration_number"
              {...register("vehicle_registration_number")}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black"
            />
            {errors.vehicle_registration_number && (
              <p className="text-red-500">
                {errors.vehicle_registration_number.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="value_amount">Value Amount *</label>
            <input
              id="value_amount"
              placeholder="Between ₦1,000,000-₦10,000,000"
              {...register("value_amount")}
              type="number"
              min={1000000}
              max={10000000}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full text-black"
            />
            {errors.value_amount && (
              <p className="text-red-500">{errors.value_amount.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="maker">Make *</label>
            <div className="relative">
              <select
                id="maker"
                {...register("maker")}
                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full appearance-none text-black"
              >
                <option value="">Select Make</option>
                <option value="Toyota">Toyota</option>
                <option value="lexus">lexus</option>
                <option value="hilux">hilux</option>
              </select>
              <img
                src={downArrow}
                alt="down-arrow"
                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2"
              />
            </div>
            {errors.maker && (
              <p className="text-red-500">{errors.maker.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="model">Model *</label>
            <div className="relative">
              <select
                id="model"
                {...register("model")}
                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full appearance-none text-black"
              >
                <option value="">Select Model</option>
                <option value="Toyota">Toyota</option>
                <option value="lexus">lexus</option>
                <option value="hilux">hilux</option>
              </select>
              <img
                src={downArrow}
                alt="down-arrow"
                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2"
              />
            </div>
            {errors.model && (
              <p className="text-red-500">{errors.model.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="body_color">Body Color *</label>
            <div className="relative">
              <select
                id="body_color"
                {...register("body_color")}
                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full appearance-none text-black"
              >
                <option value="">Select Color</option>
                <option value="Toyota">Toyota</option>
                <option value="lexus">lexus</option>
                <option value="hilux">hilux</option>
              </select>
              <img
                src={downArrow}
                alt="down-arrow"
                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2"
              />
            </div>
            {errors.body_color && (
              <p className="text-red-500">{errors.body_color.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="year">Select year *</label>
            <div className="relative">
              <input
                id="year"
                type="number"
                {...register("year")}
                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w-full text-black"
              />
              <img
                src={downArrow}
                alt="down-arrow"
                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2"
              />
            </div>
            {errors.year && (
              <p className="text-red-500">{errors.year.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="car_type">Car Type *</label>
            <div className="relative">
              <select
                id="car_type"
                {...register("car_type")}
                className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full appearance-none text-black"
              >
                <option value="">Select Type</option>
                <option value="Toyota">Toyota</option>
                <option value="lexus">lexus</option>
                <option value="hilux">hilux</option>
              </select>
              <img
                src={downArrow}
                alt="down-arrow"
                className="w-10 h-10 absolute transform right-2 top-1/2 -translate-y-1/2"
              />
            </div>
            {errors.car_type && (
              <p className="text-red-500">{errors.car_type.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="chassis_number">Chassis Number</label>
            <input
              id="chassis_number"
              placeholder="Chassis Number"
              {...register("chassis_number")}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full text-black"
            />
            {errors.chassis_number && (
              <p className="text-red-500">{errors.chassis_number.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="engine_number">Motor Type *</label>
            <select
              id="motor_type"
              {...register("motor_type")}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full appearance-none text-black"
            >
              <option value="">Select Type</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
            {errors.motor_type && (
              <p className="text-red-500">{errors.motor_type.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="engine_number">Engine Number</label>
            <input
              id="engine_number"
              placeholder="Engine Number"
              {...register("engine_number")}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full text-black"
            />
            {errors.engine_number && (
              <p className="text-red-500">{errors.engine_number.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-4 w/full">
            <label htmlFor="with_effect_from">With Effect From *</label>
            <input
              id="with_effect_from"
              type="date"
              {...register("with_effect_from")}
              className="bg-inherit border border-[#BBBFBD] py-2.5 px-3.5 outline-none w/full text-black"
            />
            {errors.with_effect_from && (
              <p className="text-red-500">{errors.with_effect_from.message}</p>
            )}
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <BackButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <button
            type="submit"
            className="bg-[#1F8340] text-sm font-semibold text-white py-2.5 px-[52px] ml-auto block"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
};

export default VehicleDetails;
