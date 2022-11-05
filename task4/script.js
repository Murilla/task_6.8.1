const testTextField = document.querySelector('#testTextField');
testTextField.addEventListener('click', function(event) {
testTextField.textContent = prompt ('Введите название интересующей вас ссылки');
event.preventDefault();
})


