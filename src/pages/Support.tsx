import React from 'react'
import { useTranslation } from "react-i18next"

const Support = () => {
  const { t } = useTranslation()
  return (
    <h1>{t('title_support')}</h1>
  )
}

export default Support