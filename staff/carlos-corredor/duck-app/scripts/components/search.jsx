const i18nSearch = {
    en: {
        search: 'Search',
    },
    es: {
        search: 'Buscar',
    },
    ca: {
        search: 'Cercar',
    },
    ga: {
        search: 'Buscar',
    }
}

function Search({lang}) {
    const literals = i18nSearch[lang]

    return <>
        <form>
            <input type="text" name="query" />
            <button>{literals.search}</button>
        </form>
    </>
}