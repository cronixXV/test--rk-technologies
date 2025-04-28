import styles from "./Controls.module.css";

import { ControlsProps } from "../../types/types";

export const Controls = ({
  enabled,
  autoRefresh,
  onEnabledChange,
  onAutoRefreshChange,
  onGetCat,
}: ControlsProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => onEnabledChange(e.target.checked)}
        />
        Enabled
      </label>

      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={autoRefresh}
          onChange={(e) => onAutoRefreshChange(e.target.checked)}
        />
        Auto-refresh every 5 second
      </label>

      <button className={styles.button} onClick={onGetCat}>
        Get cat
      </button>
    </div>
  );
};
