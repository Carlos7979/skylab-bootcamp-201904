const i18nHome = {
        en: {
            hello: 'Hello'
        },
        es: {
            hello: 'Hola'
        },
        ca: {
            hello: 'Hola'
        },
        ga: {
            hello: 'Hola'
        }
}

// function Home({lang, name}) {
//     return <main>
//         <h1>{i18nHome[lang].hello}, {name}!</h1>
//         <Search lang={lang} />
//     </main>
// }

const {Component} = React

class Home extends Component {
    state = {error: null, ducks: [], duck: null}

    handleSearch = query => {
        logic.searchDucks(query, (error, ducks) => {
            if (error) return this.setState({ error: error.message })

            this.setState({ 
                duck: null, 
                ducks: ducks.map(({ id, title, imageUrl: image, price }) => ({ id, title, image, price })) 
            })
        })
    }

    handleRetrieve = id =>
        logic.retrieveDuck(id, (error, { title, imageUrl: image, description, price }) => {
            if (error) return this.setState({ error: error.message })

            this.setState({ duck: { title, image, description, price } })
        })

    render() {
        const {
            handleSearch,
            handleRetrieve,
            state: {ducks, duck},
            props: {lang, name}
        } = this
        return <>
            <main>
                <h1>{i18nHome[lang].hello}, {name}!</h1>
                <Search lang={lang} onSearch={handleSearch} />
                {!duck && <Results list={ducks} onList={handleRetrieve} />}
                {duck && <Detail onDetail={duck}/>}
            </main>
        </>
    }
}