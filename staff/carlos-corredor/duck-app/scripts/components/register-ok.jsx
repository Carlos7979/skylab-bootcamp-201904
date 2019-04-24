const i18nRegisterOK = {
    en: {
        successProceedTo: 'User successfully registered, you can proceed to',
        login: 'Login'
    },
    es: {
        successProceedTo: '[TODO es] User successfully registered, you can proceed to',
        login: 'Iniciar sesión'
    },
    ca: {
        successProceedTo: '[TODO ca] User successfully registered, you can proceed to',
        login: 'Inici de sessió'
    },
    ga: {
        successProceedTo: '[TODO ga] User successfully registered, you can proceed to',
        login: 'Inicio da sesión'
    }
}

function RegisterOk ({lang, onLogin}){
    const literals  = i18nRegisterOK[lang]

    return <>
    {literals.successProceedTo}<a href="" onClick={e => {
        e.preventDefault()
        onLogin()
    }}>{literals.login}</a>
    </>
}