let counter = 0;
document.getElementById('clickableImage').addEventListener('click', function() {
    counter++;
    document.getElementById('clickCounter').textContent = counter;
    console.log('Image clicked ' + counter + ' times');
});