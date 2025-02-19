import React from 'react';
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Locals = () => {

    const { i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "ar" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    return (
        <div className="nav-locales">

                <button
                    type="button"
                    //onClick={handleChangeLanguage}
                    className='btn-locales'
                >
                    <i className="far fa-globe" ></i>
                </button>
            </div>
    )
}

export default Locals;
