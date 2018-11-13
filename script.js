function selectAll() {
    dst.select();
    setTimeout(() => {
        document.execCommand('copy')
    }, 200);
}

function dowork() {
    var fr = new FileReader();
    fr.onload = (e) => {
        dst.value = fr.result;
        makeLink(src.files[0].name, fr.result);
    }
    fr.readAsDataURL(src.files[0]);
}

function makeLink (name = 'download', href = dst.value) {
    let li = document.createElement('li');
    li.innerHTML = name.link(href);
    results.appendChild(li)
}