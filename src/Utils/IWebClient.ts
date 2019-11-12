export interface IWebClient{
    CallWebService<T>(url: string, requestProperties: any):Promise<T>
}