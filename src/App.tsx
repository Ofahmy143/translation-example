import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

function App() {
  const { t } = useTranslation();

  return (
    <div className='App'>
      <LanguageSelector />
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export default App;
