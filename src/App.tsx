import { CatImage } from "./components/cat-image/CatImage";
import { Controls } from "./components/сontrols/Controls";

import styles from "./App.module.css";
import { useCatImage } from "./hooks/useCatImage";

function App() {
  const { imageUrl, enabled, autoRefresh, setEnabled, setAutoRefresh, getCat } =
    useCatImage();
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Controls
          enabled={enabled}
          autoRefresh={autoRefresh}
          onEnabledChange={setEnabled}
          onAutoRefreshChange={setAutoRefresh}
          onGetCat={getCat}
        />
        <CatImage imageUrl={imageUrl} />
      </div>
    </div>
  );
}

export default App;
