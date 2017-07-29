window.onload = function() {
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === 'back') {
            try {
                var page = document.getElementsByClassName('page');
                var pageid = page ? page[0].id : '';
                if (pageid === 'main') {
                    tizen.application.getCurrentApplication().exit();
                } else {
                    window.history.back();
                }
            } catch (e) {
                // catch (ignore) {
                window.history.back();
            }
        } else if (e.keyName === 'menu') {
            alert('There is no menu!');
        }
    });
};