import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
        <h1>{t('title_about')}</h1>
        <ul>
          <li>{t('about_sub_title_vision')}</li>
          <li>{t('about_sub_title_we_are')}</li>
          <li>{t('about_sub_title_we_propose')}</li>
          <li>{t('about_sub_title_our_activities')}</li>
          <li>{t('about_sub_title_media')}</li>
        </ul>
    </div>
  )
}

export default About