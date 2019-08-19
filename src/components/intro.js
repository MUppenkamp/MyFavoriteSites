export const _intro = (tappIntro) => {
    const tapp__intro = document.createElement('div');
    const title = document.createElement('h1');
    const firstP = document.createElement('p');
    const secondP = document.createElement('p');

    tapp__intro.classList.add('tapp__intro');

    tappIntro.appendChild(tapp__intro);
    tappIntro.appendChild(title);
    tappIntro.appendChild(firstP);
    tappIntro.appendChild(secondP);

    title.innerText = 'My favorite Sites';
    firstP.innerText = 'Hier findest du meine Lieblinsseeiten!';
    secondP.innerText = 'Du denkst, dass du eine ausergewöhnliche Seite hast? Dann registriere dich hier.';
}
