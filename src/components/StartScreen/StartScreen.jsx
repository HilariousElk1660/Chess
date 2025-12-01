import React from "react";
import "./StartScreen.css";
import logoImage from "../../assets/logo.png"

const StartScreen = ({ onStart }) => {
    return (
        <div className="start-screen">
            <div className="start-content">

                {/* Logo or Icon (optional) */}
                <div className="logo-wrapper">
                    <span className="logo"><img src={logoImage} alt="" /></span>
                </div>

                {/* Title */}
                <h1 className="title">Ready to Play?</h1>

                {/* Subtitle */}
                <p className="subtitle">
                    A new game awaits. Make your first move.
                </p>

                {/* Start Button */}
                <button className="start-btn" onClick={onStart}>
                    Start Game
                </button>

            </div>
        </div>
    );
};

export default StartScreen;
