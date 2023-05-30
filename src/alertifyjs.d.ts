declare module 'alertifyjs' {
    const alertify: AlertifyStatic;
    export default alertify;
  
    interface AlertifyStatic {
      alert(title: string, message: string, callback?: () => void): void;
      success(message: string): AlertifyNotification;
      error(message: string): AlertifyNotification;
      warning(message: string): AlertifyNotification;
      message(message: string): AlertifyNotification;
    }
  }
