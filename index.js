document.addEventListener('DOMContentLoaded', () => {

    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const resultDiv = document.getElementById('result');
    const customAlert = document.getElementById('custom-alert');
    const alertMessage = document.getElementById('alert-message');
    const closeAlertBtn = document.getElementById('close-alert-btn');


    const checkPalindrome = () => {
        if (!textInput) return; 

        const originalInput = textInput.value;

        if (originalInput.trim() === '') {
            if (customAlert && alertMessage) {
                alertMessage.textContent = 'Please input a value';
                customAlert.classList.remove('opacity-0', 'pointer-events-none');
                customAlert.classList.add('opacity-100');
            }
            return;
        }

        const cleanedInput = originalInput.toLowerCase().replace(/[^a-z0-9]/g, '');

        const reversedInput = cleanedInput.split('').reverse().join('');

        if (resultDiv) {
            let resultString = ''; 
            if (cleanedInput === reversedInput) {
                resultString = `<span class="font-bold text-cyan-400">${originalInput}</span>&nbsp;is a palindrome.`;
            } else {
                resultString = `<span class="font-bold text-amber-400">${originalInput}</span>&nbsp;is not a palindrome.`;
            }
            
            console.log("String a ser exibida:", resultString);
            
            resultDiv.innerHTML = resultString;
        }
    };

    if (checkBtn) {
        checkBtn.addEventListener('click', checkPalindrome);
    }

    if (textInput) {
        textInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                checkPalindrome();
            }
        });
    }

    if (closeAlertBtn && customAlert) {
        closeAlertBtn.addEventListener('click', () => {
            customAlert.classList.add('opacity-0', 'pointer-events-none');
            customAlert.classList.remove('opacity-100');
        });
    }
});