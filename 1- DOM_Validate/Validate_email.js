function check() {
    const pattern = /^[A-z0-9]+[A-z0-9]*@[A-z0-9]+(\.[A-z0-9]+)$/;
    let input = document.getElementById('input').value
    if (pattern.test(input)) {
        return alert('Successfully!')
    } else {return alert('Please input again!')}
}