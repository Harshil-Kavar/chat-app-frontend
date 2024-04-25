import React, { LazyExoticComponent, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { LayoutLoader } from "./components/layout/Loaders";

const Home: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./pages/Home")
);
const Chat: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./pages/Chat")
);
const Login: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./pages/Login")
);
const Groups: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./pages/Groups")
);
const AdminLogin: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./components/admin/AdminLogin")
);
const AdminDashboard: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./components/admin/AdminDashboard")
);
const UserManagement: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./components/admin/UserManagement")
);
const ChatManagement: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./components/admin/ChatManagement")
);
const MessageManagement: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./components/admin/MessageManagement")
);
const NotFoundPage: LazyExoticComponent<React.FC> = lazy(
  (): any => import("./pages/NotFoundPage")
);

let user = true;

const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chatID" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect="/">
                <Login />
              </ProtectedRoute>
            }
          />
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/chats" element={<ChatManagement />} />
          <Route path="/admin/massages" element={<MessageManagement />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
