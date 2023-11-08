import React from 'react'
import { useTranslation } from "react-i18next"

const MedenyHamor = () => {
  const { t } = useTranslation()
  return (
    <div>
      <h1>{t('title_medeny_hamor')}</h1>
      <ul>
        <li>{t('hamor_sub_title_history')}</li>
        <li>{t('hamor_sub_title_present')}</li>
        <li>{t('hamor_sub_title_future')}</li>
        <li>{t('hamor_sub_title_participation')}</li>
        <li>{t('hamor_sub_title_recommendation')}</li>
      </ul>
    </div>
  )
}

export default MedenyHamor