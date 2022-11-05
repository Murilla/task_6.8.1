const consoleLog = document.querySelector('#consoleLog');
const alertInf = document.querySelector('#alert');
const promptInf = document.querySelector('#prompt');
consoleLog.addEventListener('click', () => 
{
alert('Служит для вывода информации в консоль');   
})
alertInf.addEventListener('click', () => 
{
alert('Простой способ вывести информацию. Показывает диалоговое окно с сообщением и кнопкой OK');   
})
promptInf.addEventListener('click', () => 
{
alert('«Cобрат» функции alert(). Отображает диалоговое окно с запросом на ввод текста.');   
})
