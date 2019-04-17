'use strict';

function Home(container, navigateToLanding) {
    Component.call(this, container);
    var link = this.container.children[1];
    link.addEventListener('click', function(event){
        event.preventDefault();
        navigateToLanding();
    })
}

Home.prototype = Object.create(Component.prototype);
Home.prototype.constructor = Home;

// this.container.addEventListener('click', function(event){
//     event.preventDefault();
//     navigchildrenateToLanding();
// })