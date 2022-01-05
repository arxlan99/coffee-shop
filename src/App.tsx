import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CardDetailPage from "./pages/CardDetailPage";
import GiftCardPage from "./pages/GiftCardsPage";
import { connect } from "react-redux";

const App = (props: any) => {
  useEffect(() => {
    window.addEventListener("storage", (e: any) => {
      window.location.reload();
    });
  }, [props]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/gift-cards">
          <Route index element={<GiftCardPage />}></Route>
          {props.user.uid ? (
            <Route path=":id" element={<CardDetailPage />}></Route>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
