let tab = document.querySelector('.tab-change')
tablAll = tab.querySelectorAll('p')
tab.onclick = (e) => {
    if (e.target.nodeName === 'P') {
        for (var i = 0; i < tablAll.length; i++) {
            tablAll[i].className = ''
        }
        e.target.className = 'active'
        document.querySelector('#text').innerHTML = e.target.innerHTML
    }
}