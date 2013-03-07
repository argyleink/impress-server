(function(){

    var syncWithPresenter 	= true,
        el 					= document.querySelector('#impress');

    Hammer(el).on("hold", function() {
        impress().goto('birdseye');
    });

    Hammer(el).on("doubletap", function() {
        syncWithPresenter = syncWithPresenter ? false : true;
        syncWithPresenter ? api.followPresenter() : api.ignorePresenter();
    });
    
})()