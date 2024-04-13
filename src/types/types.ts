export interface RouteError {
  statusText?: string;
  message?: string;
}
export interface LoginContextType {
  InputUserNameLogin: React.ComponentType;
  InputUserPasswordLogin: React.ComponentType;
  ButtonEnterLogin: React.ComponentType;
  ButtonCancelLogin: React.ComponentType;
}