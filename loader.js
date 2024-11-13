//loader

const loaderProg = document.querySelector('.loader-progres');
const loaderCount = document.querySelector('.loader-bar-count')

function setProgress(count) {
    loaderCount.textContent = count + '%';
    switch (count) {
        case 10:
            loaderProg.innerHTML = '[▓░░░░░░░░░]'
            break;
        case 20:
            loaderProg.innerHTML = '[▓▓░░░░░░░░]'
            break;
        case 30:
            loaderProg.innerHTML = '[▓▓▓░░░░░░░]'
            break;
        case 40:
            loaderProg.innerHTML = '[▓▓▓▓░░░░░░]'
            break;
        case 50:
            loaderProg.innerHTML = '[▓▓▓▓▓░░░░░]'
            break;
        case 60:
            loaderProg.innerHTML = '[▓▓▓▓▓▓░░░░]'
            break;
        case 70:
            loaderProg.innerHTML = '[▓▓▓▓▓▓▓░░░]'
            break;
        case 80:
            loaderProg.innerHTML = '[▓▓▓▓▓▓▓▓░░]'
            break;
        case 90:
            loaderProg.innerHTML = '[▓▓▓▓▓▓▓▓▓░]'
            break;
        case 100:
            loaderProg.innerHTML = '[▓▓▓▓▓▓▓▓▓▓]'
            break;
        default:
            break;
    }
}

function onLoad() {
    let load = document.location.search.split('=')[1];
    console.log(load)
    if (load === 'no') {
        document.querySelector('.screen-open').style.display = 'none';
        document.querySelector('.screen-loader').style.display = 'none';

    } else {
        count = 0
        let interval = setInterval(() => {
            setProgress(count);
            count += 10;
            if (count > 100) {
                clearInterval(interval);
                setTimeout(() => {
                    document.querySelector('.screen-open').classList.add('anim');
                    document.querySelector('.screen-loader').classList.add('hidden-child')

                }, 300);
                setTimeout(() => {
                    document.querySelector('.screen-loader').classList.add('hidden')

                }, 1000)
            }
        }, 100);
    }


}
window.addEventListener('load', () => {
    onLoad();
})
