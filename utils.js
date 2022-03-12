const complete = () => {
    const allBars = document.querySelectorAll('.bar');
    allBars.forEach(progressBar => {
        progressBar.setAttribute('style', 'width: 100%') ;
        progressBar.innerHTML = '100%';
    });
}

document.getElementById("btn").addEventListener("click", complete);

