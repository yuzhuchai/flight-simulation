console.log(jQuery)

// making it fullscreen https://stackoverflow.com/questions/228377/could-a-website-force-the-browser-to-go-into-fullscreen-mode#:~:text=You%20could%20just%20tell%20the%20user%20to%20press%20F11.
// interesting read

// toggle fullscreen when enter the entertainment secetion 
$('#touch').on('click',()=>{
    console.log('clicked')
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        $('#welcomePage').hide();
        $('#inflightEntertainment').show();
    } 
})

$('#exit').on('click',()=>{

    console.log('clicked')
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            $('#welcomePage').show();
            $('#inflightEntertainment').hide();
        }
    } 
})