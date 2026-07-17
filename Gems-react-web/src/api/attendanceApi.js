import axios from "axios";
import { dashboardData, weeklySummaryData } from '../mock/dashboardData';
import { attendanceData } from '../mock/attendanceData';

const api = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export const getDashboard = async () => {
    // Spring Boot Version
    // const response = await api.get("/dashboard");
    // return response.data;

    // Temporary Mock
    return Promise.resolve({
        ...dashboardData,
        weeklyChart: weeklySummaryData
    });
};

export const getAttendance = async () => {
    // Spring Boot Version
    // const response = await api.get("/attendance");
    // return response.data;

    // Temporary Mock
    return Promise.resolve(attendanceData);
};

export const checkIn = async () => {
    // Spring Boot Version
    // const response = await api.post("/attendance/check-in");
    // return response.data;

    // Temporary Mock
    return Promise.resolve({ success: true, message: "Checked in successfully" });
};

export const checkOut = async () => {
    // Spring Boot Version
    // const response = await api.post("/attendance/check-out");
    // return response.data;

    // Temporary Mock
    return Promise.resolve({ success: true, message: "Checked out successfully" });
};
