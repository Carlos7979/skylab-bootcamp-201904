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

function Search({lang, onSearch}) {
    const literals = i18nSearch[lang]

    return <>
        <form onSubmit={event => {event.preventDefault(); onSearch(event.target.query.value) }}>
            <input type="text" name="query" />
            <button>{literals.search}</button>
        </form>
    </>
}