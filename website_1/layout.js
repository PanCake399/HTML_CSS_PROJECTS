class MyHeader extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `
            <div class="topnav">
                <a href=""><img src="" alt="">Logo here</a>
                <a href="index.html">login</a>
                <a href="register.html">register</a>
            </div>
        `;
    }
}

customElements.define('my-header', MyHeader);