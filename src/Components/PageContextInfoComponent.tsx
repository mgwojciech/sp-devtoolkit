import { APIClientProps } from "../APIClient";
import React, { Component } from 'react';
import { IPageContextInfoProvider } from "../Utils/IPageContextInfoProvider";
import ReactJson from 'react-json-view'

export class PageContextInfoComponent extends Component<{
    PageContextInfoProvider: IPageContextInfoProvider;
    OnContextObtained?: (pageContextInfo: any) => void;
}, {
    Info: any;
}> {
    constructor(props: { PageContextInfoProvider: IPageContextInfoProvider,OnContextObtained?: (pageContextInfo: any) => void }) {
        super(props);
        props.PageContextInfoProvider.GetPageContextInfo().then((info)=>{
            if(this.props.OnContextObtained)
                this.props.OnContextObtained(info);
            this.setState({Info: info});
        })
    }
    render() {
        return (
            (this.state &&
            <ReactJson src={this.state.Info} />)
        )
    }
}