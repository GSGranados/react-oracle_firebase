import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../../App'
import ConsultIndex from '../Consults/ConsultIndex'
import VoiceConsults from '../Consults/VoiceConsults/VoiceConsults'

class Router extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App}></Route>
                        <Switch>
                        <Route exact path="/consults" component={ConsultIndex}></Route>
                        <Route path="/consults/voice" component={VoiceConsults}></Route>
                        </Switch>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router;