import React, { useContext } from 'react';
import { darkTheme } from '../../constants/themeConstants';
import { useTheme } from '../hooks/useTheme';
import styles from './toggleButton.module.css';
import Switch from 'react-switch';
import { AppContext, AppContextProps } from '../../contexts/appContext';
const ToggleButton: React.FC = () => {

  const context = useContext(AppContext) as AppContextProps;

  const [toggleDarkTheme] = useTheme(context);

  return (

    <div className={styles.container} style={{ color: context.theme.values.fontPrimary }}>

      <label className={styles.label}>
        <span>Dark Theme</span>
        <Switch
          onChange={toggleDarkTheme}
          checked={context.theme.name === darkTheme.name} />
      </label>
    </div>
  )
}

export default ToggleButton;