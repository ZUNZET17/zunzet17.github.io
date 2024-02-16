  document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.querySelector('.js-custom-txt');
    const imgInput = document.querySelector('.js-custom-img')
    const button = document.createElement('button');
    button.textContent = 'Clear fields.';
    document.querySelector('.js-custom-fields').appendChild(button);
    

    textInput.addEventListener('input', (event) => {
      if ( textInput.value ) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });

    imgInput.addEventListener('input', (event) => {
      if ( event.target.value ) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    });

    button.addEventListener('click', () => {
      textInput.value = "";
      imgInput.value = null;
      button.disabled = true
    })
  })
