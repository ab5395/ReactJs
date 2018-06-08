import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

interface TokenDataState {
    tokenData: any;
}

export class TokenClass {
    access_token: string = "";
    token_type: string = "";
    expires_in: number = 0;
    userName: string = "";
} 

export class CreateToken extends React.Component<RouteComponentProps<{}>, TokenDataState> {
    constructor() {
        super();
        this.state = { tokenData: null };
    }
    public render() {
    return  (
        <button className="btn" onClick={this.handleSave}>Cancel</button>
        )
    }


    private handleSave() {
debugger;
        var details = {
            'userName': 'abh@narola.email',
            'password': '123456',
            'grant_type': 'password'
        };
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
       let formBody1 = formBody.join("&");
        
        fetch('http://localhost:53798/api/Account/GetToken', {
          method: 'GET',
          headers: {
           'Accept': '*/*',
           'Content-type': 'application/json; charset=utf-8',
            'Origin':'http://localhost:5000',
          },
          mode:'cors'
        }).then((response) => {            
            let data1=response.json();
            data1=response.text();
        }).then((responseJson) => {
            debugger;
            let data=responseJson;
        })
        


    }

    
}