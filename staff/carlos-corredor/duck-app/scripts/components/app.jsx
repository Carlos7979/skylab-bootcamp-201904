const { Component, /* Fragment */ } = React

class App extends Component {
    state = { lang: i18n.language, visible: logic.isUserLoggedIn ? 'home' : 'landing', error: null, name: null }

    handleLanguageChange = lang => this.setState({ lang: i18n.language = lang })

    handleRegisterNavigation = () => this.setState({ visible: 'register' })

    handleLoginNavigation = () => this.setState({ visible: 'login' })

    handleRegister = (name, surname, email, password) => {
        try{
            logic.registerUser(name, surname, email, password, error => {
                if (error) return this.setState({ error: error.message })
    
                this.setState({ visible: 'register-ok', error: null})
            })
        } catch ({ message }) {
            this.setState({error: message})
        }
    }

    handleLogin = (username, password) => {
        try {
            logic.loginUser(username, password, error => {
                if (error) return this.setState({ error: error.message })
    
                logic.retrieveUser((error, user) => {
                    if (error) return this.setState({ error: error.message })
    
                    this.setState({ visible: 'home', name: user.name })
                })
            })
        } catch ({ message }) {
            this.setState({error: message})
        }
    }

    handleLogout = () => {
        logic.logoutUser()
        this.setState({ visible: 'landing'})
    }

    componentDidMount() {
        logic.isUserLoggedIn && logic.retrieveUser((error, user) => {
            if (error) return this.setState({ error: error.message })

            this.setState({ name: user.name })
        })
    }

    render() {
        const {
            state: { lang, visible, error, name },
            handleLanguageChange,
            handleRegisterNavigation,
            handleLoginNavigation,
            handleRegister,
            handleLogin,
            handleLogout,
        } = this

        // return <Fragment>
        return <>
            <LanguageSelector onLanguageChange={handleLanguageChange} lang={lang}/>

            {visible === 'home' && <Logout onLogout={handleLogout} lang={lang}/>}

            {visible === 'landing' && <Landing lang={lang} onRegister={handleRegisterNavigation} onLogin={handleLoginNavigation} />}

            {visible === 'register' && <Register lang={lang} onRegister={handleRegister} error={error}/>}

            {visible === 'register-ok' && <RegisterOk lang={lang} onLogin={handleLoginNavigation} error={error}/>}

            {visible === 'login' && <Login lang={lang} onLogin={handleLogin} error={error} />}

            {visible === 'home' && <Home lang={lang} name={name} />}
        </>
        // </Fragment>
    }
}