export class LoggingServiceService {

  constructor() { }

  logStatusChange(status: string) {
    console.log('Status = ' + status);

  }
}
