import React, { Component } from 'react'
import literals from './literals'
import Results from '../Results'
import { Route, withRouter, Redirect, Switch, Link } from 'react-router-dom'
import logic from '../../logic';
import StopCode from '../StopCode';

class CodeSearch extends Component {
    state = { error: null, line: null, lines:[] , stop: null}

    handleSearch = stop_id =>
        logic.upcomingBusesByStop(stop_id)
            .then((lines) =>
                this.setState({ error:null, line: null, lines, stop:stop_id},() => this.props.history.push('/byidstop/results'))
            )
            .catch(error =>
                this.setState({ error: error.message })
            )


    render() {
        const {
            handleSearch,
            state: { lines, error, stop },
            props: { lang }
        } = this

        const { back} = literals[lang]

        return <main>
            <Switch>
            <Route exact path="/byidstop" render={() => logic.isUserLoggedIn ? <StopCode lang={lang} onSearch={handleSearch} error={error}/> : <Redirect to="/" />} />
            <Route path="/byidstop/results" render={() => logic.isUserLoggedIn ? <Results lang={lang} items={lines} stop={stop} error={error}/> : <Redirect to="/" />} />
            <Redirect to="/" />
            </Switch>
        </main>
    }
}

export default withRouter(CodeSearch)