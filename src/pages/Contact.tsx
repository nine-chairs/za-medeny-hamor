import React from 'react'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
        <h1>{t('title_contact')}</h1>
    </div>
  )
}

export default Contact