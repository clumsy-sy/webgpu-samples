let isLoggingEnable = true;

export function log(message : any) {
  if(isLoggingEnable) {
    console.log(message);
  }
}