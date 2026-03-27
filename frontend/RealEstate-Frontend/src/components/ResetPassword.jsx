import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const ResetPassword = () => {

    const { token } = useParams()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const submitHandler = async (data) => {

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match ❌")
            return
        }

        try {
            const payload = {
                token: token,
                password: data.password
            }

            await axios.put("/user/resetpassword", payload)

            toast.success("Password Reset Successfully ✅")
            navigate("/login")

        } catch (err) {
            toast.error("Something went wrong ❌")
        }
    }

    return (
        <div style={styles.container}>

            <div style={styles.card}>
                <h2 style={styles.heading}>🔐 Reset Password</h2>

                <form onSubmit={handleSubmit(submitHandler)} style={styles.form}>

                    {/* New Password */}
                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Enter New Password"
                            style={styles.input}
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters required"
                                }
                            })}
                        />
                        <p style={styles.error}>{errors.password?.message}</p>
                    </div>

                    {/* Confirm Password */}
                    <div style={styles.inputGroup}>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            style={styles.input}
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: (value) =>
                                    value === watch("password") || "Passwords do not match"
                            })}
                        />
                        <p style={styles.error}>{errors.confirmPassword?.message}</p>
                    </div>

                    <button type="submit" style={styles.button}>
                        Reset Password
                    </button>

                </form>
            </div>
        </div>
    )
}

const styles = {
    container: {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea, #764ba2)"
    },
    card: {
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(10px)",
        padding: "40px",
        borderRadius: "15px",
        width: "350px",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        color: "white"
    },
    heading: {
        marginBottom: "20px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column"
    },
    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        outline: "none",
        fontSize: "14px"
    },
    error: {
        color: "#ff6b6b",
        fontSize: "12px",
        marginTop: "5px"
    },
    button: {
        marginTop: "10px",
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "#ff7a18",
        backgroundImage: "linear-gradient(to right, #ff7a18, #ffb347)",
        color: "white",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s"
    }
}