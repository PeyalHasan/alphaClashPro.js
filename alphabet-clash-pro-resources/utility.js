function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getARandomAlphabet(){
    const alphabetString = 'asdfghjklpoiuytrewqzxcvbnm';
    const aplhabets = alphabetString.split('');
    
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const aplhabet =aplhabets[index];
    return aplhabet;
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
    document.getElementById('current-alphabte').toogle
}