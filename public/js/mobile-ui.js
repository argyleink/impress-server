(function(){

    var syncWithPresenter 	= true,
        el 					= document.querySelector('#impress'),
        supportsVibrate 	= "vibrate" in navigator;

    Hammer(el).on("pinch", function() {
        impress().goto('birdseye');
    });

    Hammer(el).on("hold", function() {
        if (supportsVibrate)
            navigator.vibrate(200);

        syncWithPresenter = syncWithPresenter ? false : true;
        syncWithPresenter ? api.followPresenter() : api.ignorePresenter();
        
    });
    
})()