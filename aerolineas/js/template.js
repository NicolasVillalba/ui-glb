/**
 * Created by nico on 09/05/17.
 */
function Template(url) {
    return new Promise((success, reject) => {

        let rq = new XMLHttpRequest();

        rq.open('get', url, true);

        rq.onload = function () {
            if(rq.status == 200)
                success(rq.response);
            else
                reject("Error loading page\n");
        };

        rq.onerror = function () {
            reject(Error('Error'))
        };
        rq.send();
    });
};