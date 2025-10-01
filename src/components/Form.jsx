import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation Schema
const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters")
    
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must not exceed 100 characters"),
  
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number")
    .min(10, "Phone number must be exactly 10 digits")
    .max(10, "Phone number must be exactly 10 digits"),
  
  program: yup
    .string()
    .required("Please select a program")
    .oneOf(["BCA", "BBA"], "Please select a valid program")
});

// Reusable Input Field Component
const InputField = ({ 
  label, 
  name, 
  type = "text", 
  placeholder, 
  register, 
  error, 
  className = "" 
}) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 ${
          error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
        } ${className}`}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <p 
          id={`${name}-error`}
          className="mt-2 text-sm text-red-600 flex items-center"
          role="alert"
        >
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
};

// Reusable Select Field Component
const SelectField = ({ 
  label, 
  name, 
  options, 
  placeholder, 
  control, 
  error, 
  className = "" 
}) => {
  return (
    <div className="mb-4">
      <label 
        htmlFor={name} 
        className="block text-sm font-medium text-slate-700 mb-2"
      >
        {label} <span className="text-red-500">*</span>
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <select
            id={name}
            {...field}
            className={`w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 bg-white ${
              error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
            } ${className}`}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${name}-error` : undefined}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && (
        <p 
          id={`${name}-error`}
          className="mt-2 text-sm text-red-600 flex items-center"
          role="alert"
        >
          <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error.message}
        </p>
      )}
    </div>
  );
};

// Main Form Component
const StudentRegistrationForm = ({ 
  onSubmit, 
  title = "Student Registration", 
  submitButtonText = "Register Now",
  className = "" 
}) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange" // Validate on change for better UX
  });

  const programOptions = [
    { value: "BCA", label: "BCA Programs - Bachelor of Computer Applications" },
    { value: "BBA", label: "BBA Programs - Bachelor of Business Administration" }
  ];

  const onFormSubmit = async (data) => {
    try {
      // Call the parent component's onSubmit function
      await onSubmit(data);
      
      // Reset form after successful submission
      reset();
      
      // You can add success notification here
      alert("Registration submitted successfully!");
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={`max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-slate-200 ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">
          {title}
        </h2>
        <p className="text-slate-600 text-center text-sm">
          Fill in your details to register for our programs
        </p>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)} noValidate>
        <InputField
          label="Full Name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          register={register}
          error={errors.name}
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="Enter your email address"
          register={register}
          error={errors.email}
        />

        <InputField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="Enter your 10-digit mobile number"
          register={register}
          error={errors.phone}
        />

        <SelectField
          label="Select Program"
          name="program"
          options={programOptions}
          placeholder="Choose your preferred program"
          control={control}
          error={errors.program}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 focus:ring-4 focus:ring-blue-500/50 focus:outline-none ${
            isSubmitting
              ? "bg-slate-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting...
            </div>
          ) : (
            submitButtonText
          )}
        </button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
