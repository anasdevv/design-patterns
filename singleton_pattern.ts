// Idea : A single instance must exist throughout the application.
// Hard to test because the global instance makes mocking difficult.
// can be tricky in multithreaded environment

class Logger {
  private static instance: Logger | null = null;
  private logs: string[] = [];

  //   private constructor ensures that object can't be created from outside world
  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      console.log('Logger instance created.');
    }
    return Logger.instance;
  }

  public log(message: string): void {
    this.logs.push(message);
    console.log(`Log added: ${message}`);
  }

  public showLogs(): void {
    console.log('All Logs:');
    this.logs.forEach((log, index) => {
      console.log(`${index + 1}: ${log}`);
    });
  }
}

// basic usage
const runSingletonExample = () => {
  const logger1 = Logger.getInstance();
  logger1.log('First log entry');

  const logger2 = Logger.getInstance();
  logger2.log('Second log entry');

  console.log('\nAre logger1 and logger2 the same instance?');
  console.log(logger1 === logger2);

  logger1.showLogs();
};

runSingletonExample();
