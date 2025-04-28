export interface CatImageProps {
  imageUrl: string;
}

export interface ControlsProps {
  enabled: boolean;
  autoRefresh: boolean;
  onEnabledChange: (value: boolean) => void;
  onAutoRefreshChange: (value: boolean) => void;
  onGetCat: () => void;
}
