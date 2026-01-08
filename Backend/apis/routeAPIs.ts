import express from "express";
import dotenv from 'dotenv'; 
import cors from "cors";
dotenv.config();
import userRouter from "../routes/UserRoute";
import adminRouter from "../routes/AdminRoute";
import documentRouter from "../routes/DocumentRoute";
import authRouter from "../routes/AuthRoute";
import notificationsRouter from "../routes/NotificationRoute";
import analyticsRouter from "../routes/AnalyticsRoute";
import userEventsRouter from "../routes/UserEvent";
import workflowsRouter from "../routes/WorkflowsRoute";
import eventsRouter from "../routes/EventRoute";
import tasksRouter from "../routes/TaskRoute";
import userTasksRouter from "../routes/UserTaskRoute";
import taskCompleteRouter from "../routes/TaskCompletedRoute";
import reportsRouter from "../routes/ReportsRoute";
import exportRouter from "../routes/ExportRoute";
import recommendationsRouter from "../routes/RecommendationsRoute";
import searchRouter from "../routes/SearchRoute";
import metricsRouter from "../routes/MetricsRoute";
import logsRouter from "../routes/LogsRoute";
import AIpredictionsRouter from "../routes/AIpredictionsRoute";
import AItranslationsRouter from "../routes/AItranslationRoute";
import AIclassificationsRouter from "../routes/AIclassificationRoute";
import AIsummaryRouter from "../routes/AIsummaryRoute";
import settingsRouter from "../routes/SettingsRoute";

const APIs = express.Router();

APIs.use("/auth", authRouter);

APIs.use("/users", userRouter);
APIs.use("/admins", adminRouter); 
APIs.use("/documents", documentRouter);
APIs.use("/workflows", workflowsRouter);

APIs.use("/events", eventsRouter);
APIs.use("/user-events", userEventsRouter);
APIs.use("/analytics", analyticsRouter);

APIs.use("/tasks", tasksRouter);
APIs.use("/user-tasks", userTasksRouter);
APIs.use("/task-complete", taskCompleteRouter);

APIs.use("/reports", reportsRouter);
APIs.use("/notifications", notificationsRouter);

APIs.use("/predictions", AIpredictionsRouter);
APIs.use("/translations", AItranslationsRouter);
APIs.use("/classifications", AIclassificationsRouter);
APIs.use("/summaries", AIsummaryRouter);

APIs.use("/settings", settingsRouter);

APIs.use("/logs", logsRouter);
APIs.use("/metrics", metricsRouter);
APIs.use("/search", searchRouter);
APIs.use("/recommendations", recommendationsRouter);
APIs.use("/export", exportRouter);


export default APIs;