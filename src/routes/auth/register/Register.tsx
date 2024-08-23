import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/slices/auth-slice";
import { Link, useNavigate } from "react-router-dom";

const baseURL = import.meta.env.VITE_BASE_URL;

const Register: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      const response = await axios.post(`${baseURL}/register`, values);
      if (response.data.success) {
        const { token, user } = response.data.payload;

        dispatch(logIn({ token, user }));
        message.success("Registration successful!");
        navigate("/otp-verified");
      } else {
        message.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      message.error("An error occurred during registration.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container flex flex-col rounded-lg shadow-lg shadow-cyan-500/50 p-8 ">
      <h1 className="font-medium text-4xl text-center mb-6 text-[#1677FF]">
        Register
      </h1>
      <Form onFinish={onFinish}>
        <p className="mb-2">First Name</p>
        <Form.Item
          name="firstName"
          rules={[{ required: true, message: "Please enter your first name!" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <p className="mb-2">Last Name</p>
        <Form.Item
          name="lastName"
          rules={[{ required: true, message: "Please enter your last name!" }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <p className="mb-2">Email</p>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <p className="mb-2">Password</p>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <div className="flex w-full justify-between">
          <Button
            className="w-full text-sm text-center mb-5"
            disabled={loading}
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Register
          </Button>
        </div>
        <div className="flex gap-1">
          Already have an account?
          <Link to="/auth">
            <p className="text-[#1677FF]">Login</p>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;