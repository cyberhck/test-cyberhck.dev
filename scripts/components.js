class CyberhckHeader extends HTMLElement {
    connectedCallback() {
        const headerTemplate = document.querySelector("template#header")
        this.innerHTML = headerTemplate.innerHTML
    }
}

class FaqCollapseIcon extends HTMLElement {
    connectedCallback() {
        const headerTemplate = document.querySelector("template#faq_collapse_icon")
        this.innerHTML = headerTemplate.innerHTML
    }
}

class QuestionIcon extends HTMLElement {
    connectedCallback() {
        const headerTemplate = document.querySelector("template#question_icon")
        this.innerHTML = headerTemplate.innerHTML
    }
}

window.customElements.define('question-icon', QuestionIcon)
window.customElements.define('cyberhck-header', CyberhckHeader)
window.customElements.define('faq-collapse-icon', FaqCollapseIcon)
