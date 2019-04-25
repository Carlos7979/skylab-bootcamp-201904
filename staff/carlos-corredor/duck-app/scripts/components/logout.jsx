    const literals = {
        en: {
            logout: 'Logout'
        },
        es: {
            logout: 'Cerrar sesión'
        },
        ca: {
            logout: 'Tanca sessió'
        },
        ga: {
            logout: 'Finalizar sesión'
        }
    }

function Logout({onLogout, lang}){

    return <button onClick={onLogout} >{literals[lang].logout}</button>
}