const textFields = document.querySelectorAll('input[type="text"]')
const emailFields = document.querySelectorAll('input[type="email"]')
const emailMessages = document.querySelectorAll('.email-message')
const submitButtons = document.querySelectorAll('input[type="submit"]')
const emptyFieldSectionP = document.querySelectorAll('.empty-field-section .paragraph')

const showEmptyMessage = () => {
    emptyFieldSectionP.forEach((p) => {
        p.classList.remove('d-none')
    })
}

const hideEmptyMessage = () => {
    emptyFieldSectionP.forEach((p) => {
        p.classList.add('d-none')
    })
}

const showEmailMessage = () => {
    emailMessages.forEach((message) => {
        message.classList.remove('d-none')
    })
}

const hideEmailMessage = () => {
    emailMessages.forEach((message) => {
        message.classList.add('d-none')
    })
}

const emptyFieldMessage = () => {
    submitButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            e.preventDefault()
            for (let i of textFields) {
                if (i.value === '') {
                    showEmptyMessage()
                } else if (i.value) {
                    hideEmptyMessage()
                }
            }
        })
    })
}

const emptyEmailMessage = () => {
    submitButtons.forEach((button) => {
        button.addEventListener('click', function(e) {
            e.preventDefault()
            for (let i of emailFields) {
                if (i.value === '') {
                    showEmailMessage()
                } else if (i.value) {
                    hideEmailMessage()
                }
            }
        })
    })
}

emptyFieldMessage()
emptyEmailMessage()