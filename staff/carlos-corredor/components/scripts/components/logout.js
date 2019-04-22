'use stric'

class Logout extends Component {
    constructor(container, onLogout){
        super(container)
        this.onLogout = onLogout
    }

    set onLogout(callback) {
        this.container.addEventListener('click', function(event){
            event.preventDefault()
            callback()
        })
    }
}