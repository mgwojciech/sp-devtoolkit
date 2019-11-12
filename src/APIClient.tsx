import React, { Component } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button'
import 'office-ui-fabric-react/dist/sass/_References.scss'
import { IWebClient } from './Utils/IWebClient';

export interface APIClientProps {
    WebClient: IWebClient
}
export interface APIClientState {
    WebUrl: string,
    EndpointUrl: string,
    Method: string,
    Response: any,
    RequestBody?: string,
    Digests: { Site: string, Digest: string }[]
}

export class APIClient extends Component<APIClientProps, APIClientState> {

    constructor(props: APIClientProps, state: APIClientState) {
        super(props);

        this.state = {
            Response: "",
            WebUrl: "",
            EndpointUrl: "/_api/web",
            Method: "GET",
            Digests: []
        }
        this.UpdateWebUrl = this.UpdateWebUrl.bind(this);
        this.HandleClick = this.HandleClick.bind(this);
        this.UpdateEndpointUrl = this.UpdateEndpointUrl.bind(this);
        this.UpdateRequestBody = this.UpdateRequestBody.bind(this);
        this.UpdateMethod = this.UpdateMethod.bind(this);
    }

    private GetFormDigest(): Promise<string> {
        let self = this;
        let contextUrl: string = self.state.WebUrl + "/_api/contextinfo";

        let siteDigest = self.state.Digests.filter(d => {
            return d.Site === self.state.WebUrl
        })[0];
        if (siteDigest)
            return new Promise<string>(resolve => {
                resolve(siteDigest.Digest);
            });

        return self.props.WebClient.CallWebService(contextUrl, {
            method: "POST",
            headers: {accept: "application/json" },
        }).then((result: any) => {
            self.state.Digests.push({
                Site: self.state.WebUrl,
                Digest: result.FormDigestValue
            })
            self.forceUpdate();
            return result.FormDigestValue;
        })
    }

    private HandleClick() {
        var url = (this.state.WebUrl || "") + this.state.EndpointUrl;
        let self = this;
        if (self.state.Method != "GET") {
            self.GetFormDigest().then(digest=>{
            self.props.WebClient.CallWebService(url, {
                headers: {
                    accept: "application/json",
                    "X-RequestDigest": digest, 
                    "Content-Type": "application/json",
                    "IF-MATCH": "*",
                    "X-HTTP-Method":self.state.Method
                },
                method: "POST",
                body: self.state.RequestBody ? JSON.stringify(JSON.parse(self.state.RequestBody)) : null
            }).then(result => {
                self.setState({ ...self.state, Response: JSON.stringify(result, null, 4) })
            });
            })
        }

        else {
            self.props.WebClient.CallWebService(url, {
                headers: {accept: "application/json"},
                method: self.state.Method
            }).then(result => {
                self.setState({ ...self.state, Response: JSON.stringify(result, null, 4) })
            });
        }
    }

    private UpdateWebUrl(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) {
        if (newValue)
            this.setState({ ...this.state, WebUrl: newValue })
    }
    private UpdateEndpointUrl(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) {
        if (newValue)
            this.setState({ ...this.state, EndpointUrl: newValue })
    }
    private UpdateRequestBody(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) {
        if (newValue)
            this.setState({ ...this.state, RequestBody: newValue })
    }
    private UpdateMethod(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number) {
        if (option)
            this.setState({ ...this.state, Method: option.text })
    }
    render() {
        const selectedItem = this.state.Method;
        return <div>
            <TextField label="Web relative url" onChange={this.UpdateWebUrl} value={this.state.WebUrl} />
            <TextField label="API Endpoint" onChange={this.UpdateEndpointUrl} value={this.state.EndpointUrl} />
            <Dropdown
                label="Select HTTP Method"
                placeholder="Select method"
                selectedKey={selectedItem ? selectedItem : "GET"}
                onChange={this.UpdateMethod}
                options={[
                    { key: 'GET', text: 'GET' },
                    { key: 'POST', text: 'POST' },
                    { key: 'PATCH', text: 'PATCH' },
                    { key: 'MERGE', text: 'MERGE' },
                    { key: 'DELETE', text: 'DELETE' }
                ]}
                styles={{ dropdown: { width: 300 } }}
            />
            <TextField label="Body" multiline autoAdjustHeight onChange={this.UpdateRequestBody} />
            <PrimaryButton text="Send Query" onClick={this.HandleClick} allowDisabledFocus />
            <TextField label="Response" multiline autoAdjustHeight value={this.state.Response || ""} />
        </div>
    }
}