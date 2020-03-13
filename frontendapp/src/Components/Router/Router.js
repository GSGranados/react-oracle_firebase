import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../../App'
import ConsultIndex from '../Consults/ConsultIndex'
import VoiceConsults from '../Consults/VoiceConsults/VoiceConsults'
import MeetConsults from '../Consults/MeetConsults/MeetConsults'
import ChatConsults from '../Consults/ChatConsults/ChatConsults'
import List from '../../Components/IssueManagement/List';
import Show from '../IssueManagement/Show'
import Edit from '../IssueManagement/Edit'
class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App}></Route>
                        <Switch>
                        <Route exact path="/consults/" component={ConsultIndex}></Route>
                        <Route path="/consults/voice" component={VoiceConsults}></Route>
                        <Route path="/consults/meet" component={MeetConsults}></Route>
                        <Route path="/consults/chat" component={ChatConsults}></Route>
                        <Route exact path="/issues/" component={List}></Route>
                        <Route path="/issues/:id" component={Show}></Route>
                        <Route path="/issues/edit/:id" component={Edit}></Route> 
                        </Switch>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;