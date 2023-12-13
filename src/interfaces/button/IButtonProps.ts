export interface IButtonProps{
    label: string;
    onClick: () => void;
    loading?: boolean;
    className?: string;
    solid?: boolean;
    disabled?: boolean;
    warning?: boolean;
    outline?: boolean;
    icon?: string | React.ReactNode; 
  }