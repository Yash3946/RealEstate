import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const Forgotpassword = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const submitHandler = async (data) => {
        try {
            const res = await axios.post("/user/forgotpassword", data)

            if (res.status === 200) {
                alert("Reset link sent to your email ✅")
                navigate("/")
            }
        } catch (err) {
            alert("Something went wrong ❌")
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.card}>

                <h2 style={styles.title}>Forgot Password 🔐</h2>
                <p style={styles.subtitle}>
                    Enter your email to receive reset link
                </p>

                <form onSubmit={handleSubmit(submitHandler)} style={styles.form}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required"
                        })}
                        style={styles.input}
                    />

                    {errors.email && (
                        <p style={styles.error}>{errors.email.message}</p>
                    )}

                    <button type="submit" style={styles.button}>
                        Send Reset Link
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
        background: "#fff",
        padding: "40px",
        borderRadius: "15px",
        width: "350px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        textAlign: "center"
    },
    title: {
        marginBottom: "10px",
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: "14px",
        color: "#666",
        marginBottom: "20px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "15px"
    },
    input: {
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none",
        fontSize: "14px"
    },
    button: {
        padding: "12px",
        borderRadius: "8px",
        border: "none",
        background: "#667eea",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
        transition: "0.3s"
    },
    error: {
        color: "red",
        fontSize: "12px",
        margin: "0"
    }
}