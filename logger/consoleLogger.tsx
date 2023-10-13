export interface LogFx {
    (message?: any, ...optionalParams: any[]): void;
}

export interface Logger {
    log: LogFx;
    warn: LogFx;
    error: LogFx;
}

export type LogLevel = 'log' | 'warn' | 'error';

const lambdaLog: LogFx = (message?: any, ...optionalParams: any[]) => {};

export class ConsoleLogger implements Logger {
    readonly log: LogFx;
    readonly warn: LogFx;
    readonly error!: LogFx;
    
    constructor(options?: { level?: LogLevel }) {
        const { level } = options || {}
        this.log = console.log.bind(console)
        this.warn = console.warn.bind(console);
        if (level === 'warn') {
            this.warn = lambdaLog;
            this.log = lambdaLog;
            return 
        }
        this.error = console.error.bind(console);
        if (level === 'error') {
            this.log = lambdaLog;
            return 
        }
    }
    // log(message?: any, ...optionalParams: any[]): void {
    //     console.log(message, ...optionalParams);
    // }
    // warn(message?: any, ...optionalParams: any[]): void {
    //     console.warn(message, ...optionalParams);
    // }
    // error(message?: any, ...optionalParams: any[]): void {
    //     console.error(message, ...optionalParams);
    // }
}
