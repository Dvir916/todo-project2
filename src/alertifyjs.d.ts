declare module 'alertifyjs' {
    const alertify: AlertifyStatic;
    export default alertify;
  
    interface AlertifyStatic {
      alert(title: string, message: string): AlertifyDialog;
      success(message: string): AlertifyNotification;
      error(message: string): AlertifyNotification;
      warning(message: string): AlertifyNotification;
    }
  
    interface AlertifyDialog {
      setting(setting: string, value: any): AlertifyDialog;
      setting(settings: object): AlertifyDialog;
      setting(setting: string): any;
      close(): void;
    }
  
    interface AlertifyNotification {
      close(): void;
    }
  }
// alertify
//   .alert("This is an alert dialog.", function(){
//     alertify.message('OK');
//   });