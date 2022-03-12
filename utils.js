function complete(){
    const all = document.querySelectorAll('.bar')
    all.forEach(anchor => {
        anchor.setAttribute('style', 'width: 100%') ;
        anchor.innerHTML = '100%';
    });
}

