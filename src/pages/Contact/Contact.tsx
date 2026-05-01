import React, { useState } from "react";
import styles from "./Contact.module.css";

interface FormData {
    name: string;
    company: string;
    email: string;
    mobile: string;
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    message: string;
    receiveSample: boolean;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        email: "",
        address: "",
        mobile: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        message: "",
        receiveSample: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [touched, setTouched] = useState<Record<string, boolean>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        // Mark field as touched and validate
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));

        // Validate the field on change
        validateField(name, type === "checkbox" ? checked : value);
    };

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name } = e.target;
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};
        const requiredFields = [
            "name",
            "email",
            "mobile",
            "address",
            "city",
            "state",
            "country",
            "postalCode",
            "message",
        ];

        // Check required fields
        requiredFields.forEach((key) => {
            if (!formData[key as keyof FormData]) {
                const fieldLabel =
                    key === "postalCode"
                        ? "Postal Code"
                        : key.charAt(0).toUpperCase() + key.slice(1);
                newErrors[key] = `The ${fieldLabel} is required`;
            }
        });

        // Email validation
        if (formData.email && !isValidEmail(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Mobile validation (10-15 digits, international format)
        if (formData.mobile && !isValidMobile(formData.mobile)) {
            newErrors.mobile =
                "Please enter a valid mobile number (10-15 digits)";
        }

        // Postal Code validation (numeric)
        if (formData.postalCode && !isValidPostalCode(formData.postalCode)) {
            newErrors.postalCode =
                "Please enter a valid postal code (numbers only)";
        }

        // Name validation (minimum 2 characters)
        if (formData.name && formData.name.length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        // Message validation (minimum 10 characters)
        if (formData.message && formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        // Address validation (minimum 5 characters)
        if (formData.address && formData.address.length < 5) {
            newErrors.address = "Address must be at least 5 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidMobile = (mobile: string): boolean => {
        const mobileRegex = /^[\d\s\-\+\(\)]{10,15}$/;
        return mobileRegex.test(mobile.replace(/\s/g, ""));
    };

    const isValidPostalCode = (postalCode: string): boolean => {
        const postalCodeRegex = /^[0-9]{5,10}$/;
        return postalCodeRegex.test(postalCode.replace(/\s/g, ""));
    };

    const validateField = (fieldName: string, value: any): void => {
        const newErrors = { ...errors };
        const requiredFields = [
            "name",
            "email",
            "mobile",
            "address",
            "city",
            "state",
            "country",
            "postalCode",
            "message",
        ];

        if (requiredFields.includes(fieldName)) {
            // Check if required
            if (!value) {
                const fieldLabel =
                    fieldName === "postalCode"
                        ? "Postal Code"
                        : fieldName.charAt(0).toUpperCase() +
                          fieldName.slice(1);
                newErrors[fieldName] = `The ${fieldLabel} is required`;
            } else {
                // Run specific validations
                switch (fieldName) {
                    case "email":
                        if (!isValidEmail(value)) {
                            newErrors.email =
                                "Please enter a valid email address";
                        } else {
                            delete newErrors.email;
                        }
                        break;
                    case "mobile":
                        if (!isValidMobile(value)) {
                            newErrors.mobile =
                                "Please enter a valid mobile number (10-15 digits)";
                        } else {
                            delete newErrors.mobile;
                        }
                        break;
                    case "postalCode":
                        if (!isValidPostalCode(value)) {
                            newErrors.postalCode =
                                "Please enter a valid postal code (numbers only)";
                        } else {
                            delete newErrors.postalCode;
                        }
                        break;
                    case "name":
                        if (value.length < 2) {
                            newErrors.name =
                                "Name must be at least 2 characters";
                        } else {
                            delete newErrors.name;
                        }
                        break;
                    case "message":
                        if (value.length < 10) {
                            newErrors.message =
                                "Message must be at least 10 characters";
                        } else {
                            delete newErrors.message;
                        }
                        break;
                    case "address":
                        if (value.length < 5) {
                            newErrors.address =
                                "Address must be at least 5 characters";
                        } else {
                            delete newErrors.address;
                        }
                        break;
                    default:
                        if (!value) {
                            const fieldLabel =
                                fieldName.charAt(0).toUpperCase() +
                                fieldName.slice(1);
                            newErrors[fieldName] =
                                `The ${fieldLabel} is required`;
                        } else {
                            delete newErrors[fieldName];
                        }
                }
            }
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Mark all required fields as touched on submit
        const requiredFields = [
            "name",
            "email",
            "mobile",
            "address",
            "city",
            "state",
            "country",
            "postalCode",
            "message",
        ];
        const allTouched = requiredFields.reduce(
            (acc, field) => {
                acc[field] = true;
                return acc;
            },
            {} as Record<string, boolean>,
        );
        setTouched(allTouched);

        if (validateForm()) {
            console.log("Form Data:", formData);
            // Reset form or show success message
        }
    };


    return (
        <main className={styles.contact}>
            <div className={styles.row2}>
                <div
                    className={styles.mapContainer}
                >
                    <div
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.1744763989195!2d78.09956259206709!3d10.950189464935383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fba049d30fb%3A0x95f852d4569aa13e!2sSri+Vinayaga+Organic+Cotton+Wadding+Industries!5e0!3m2!1sen!2sin!4v1457959574006"
                            width="100%"
                            className={styles.map}
                            title="Company Location"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className={styles.row1}>
                <div className={styles.formColumn}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.firstRow}>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Name <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.name && errors.name && (
                                    <span className={styles.error}>
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>
                        </div>
                        <div className={styles.secondRow}>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Email{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.email && errors.email && (
                                    <span className={styles.error}>
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Mobile{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="mobile"
                                    placeholder="Enter Mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.mobile && errors.mobile && (
                                    <span className={styles.error}>
                                        {errors.mobile}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.thirdRow}>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Address{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Enter Address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.address && errors.address && (
                                    <span className={styles.error}>
                                        {errors.address}
                                    </span>
                                )}
                            </div>
                            <div className={styles.fieldGroup}>
                                {" "}
                                <label>
                                    City <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Enter City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.city && errors.city && (
                                    <span className={styles.error}>
                                        {errors.city}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.fourthRow}>
                            <div className={styles.fieldGroup}>
                                <label>
                                    State{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    placeholder="Enter State"
                                    value={formData.state}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.state && errors.state && (
                                    <span className={styles.error}>
                                        {errors.state}
                                    </span>
                                )}
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Country{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    placeholder="Enter Country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.country && errors.country && (
                                    <span className={styles.error}>
                                        {errors.country}
                                    </span>
                                )}
                            </div>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Postal Code{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    placeholder="Enter Postal Code"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.input}
                                />
                                {touched.postalCode && errors.postalCode && (
                                    <span className={styles.error}>
                                        {errors.postalCode}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.fifthRow}>
                            <div className={styles.fieldGroup}>
                                <label>
                                    Message{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </label>

                                <textarea
                                    name="message"
                                    placeholder="Enter Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={styles.textarea}
                                />
                                {touched.message && errors.message && (
                                    <span className={styles.error}>
                                        {errors.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.checkboxGroup}>
                            <label className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    name="receiveSample"
                                    checked={formData.receiveSample}
                                    onChange={handleChange}
                                    className={styles.checkbox}
                                />
                                I want to receive a free sample
                            </label>
                        </div>
                        <button type="submit" className={styles.submitButton}>
                            Submit
                        </button>
                    </form>
                </div>
                <div className={styles.cardColumn}>
                    <div className={styles.card}>
                        <h2>Head Office</h2>{" "}
                        <p>
                            <strong>
                                SRI VINAYAGA ORGANIC COTTON WADDING INDUSTRIES
                            </strong>
                        </p>
                        <p>SF-346/B9, Annai Nagar, Gandhi Gramam,</p>
                        <p>Karur, Tamilnadu, India - 639004</p>
                        <p style={{ marginTop: "1rem" }}>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:nataraj@vinayagaorgwad.com">
                                nataraj@vinayagaorgwad.com
                            </a>
                        </p>
                        <p>
                            <strong>Phone:</strong> +91 - 4324 - 246196
                        </p>
                        <p>
                            <strong>Mobile:</strong> +91-9943495000,
                        </p>
                        <p>9943494000, 9843292052</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
