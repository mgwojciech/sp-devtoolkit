export interface IPageContextInfoProvider {
    GetPageContextInfo(): Promise<string>;
}