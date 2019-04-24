function Home(props) {
    return <main>
        <h1>Hello, {props.name}!</h1>
        <Search lang={props.lang} />
    </main>
}

