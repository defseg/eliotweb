// TODO: This is bad. Don't use it.

function wordToElement(word, count=0) {
    const it = document.createElement('div')

    const wordEl = document.createElement('span')
    wordEl.innerText = word
    it.appendChild(wordEl)

    const countEl = document.createElement('span')
    countEl.innerText = count
    it.appendChild(countEl)

    const buttonEl = document.createElement('button')
    buttonEl.innerText = '+'
    buttonEl.addEventListener("click", ev => {
        let count = +(countEl.innerText)
        count++
        countEl.innerText = count

        // PUT = update existing record. search term: "HTTP verbs"
        fetch(`/words/${word}/increment`, {method: 'PUT'}).then(res => res.text()).then(res => console.log(res))
    })
    it.appendChild(buttonEl)

    return it
}

function launchApp(el) {
    el.innerText = "Loading words..."

    fetch("/words").then(res => res.json()).then(res => {
        el.innerText = ""
        for (let item of res) {
            el.appendChild(wordToElement(item.word, item.total_count))
        }
    }).catch(err => console.error(err))
}