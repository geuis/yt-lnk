var YT_FORMATS = {
    '5': {'ext': 'flv', 'width': 400, 'height': 240},
    '6': {'ext': 'flv', 'width': 450, 'height': 270},
    '13': {'ext': '3gp'},
    '17': {'ext': '3gp', 'width': 176, 'height': 144},
    '18': {'ext': 'mp4', 'width': 640, 'height': 360},
    '22': {'ext': 'mp4', 'width': 1280, 'height': 720},
    '34': {'ext': 'flv', 'width': 640, 'height': 360},
    '35': {'ext': 'flv', 'width': 854, 'height': 480},
    '36': {'ext': '3gp', 'width': 320, 'height': 240},
    '37': {'ext': 'mp4', 'width': 1920, 'height': 1080},
    '38': {'ext': 'mp4', 'width': 4096, 'height': 3072},
    '43': {'ext': 'webm', 'width': 640, 'height': 360},
    '44': {'ext': 'webm', 'width': 854, 'height': 480},
    '45': {'ext': 'webm', 'width': 1280, 'height': 720},
    '46': {'ext': 'webm', 'width': 1920, 'height': 1080},

    // 3d videos
    '82': {'ext': 'mp4', 'height': 360, 'format_note': '3D', 'preference': -20},
    '83': {'ext': 'mp4', 'height': 480, 'format_note': '3D', 'preference': -20},
    '84': {'ext': 'mp4', 'height': 720, 'format_note': '3D', 'preference': -20},
    '85': {'ext': 'mp4', 'height': 1080, 'format_note': '3D', 'preference': -20},
    '100': {'ext': 'webm', 'height': 360, 'format_note': '3D', 'preference': -20},
    '101': {'ext': 'webm', 'height': 480, 'format_note': '3D', 'preference': -20},
    '102': {'ext': 'webm', 'height': 720, 'format_note': '3D', 'preference': -20},

    // Apple HTTP Live Streaming
    '92': {'ext': 'mp4', 'height': 240, 'format_note': 'HLS', 'preference': -10},
    '93': {'ext': 'mp4', 'height': 360, 'format_note': 'HLS', 'preference': -10},
    '94': {'ext': 'mp4', 'height': 480, 'format_note': 'HLS', 'preference': -10},
    '95': {'ext': 'mp4', 'height': 720, 'format_note': 'HLS', 'preference': -10},
    '96': {'ext': 'mp4', 'height': 1080, 'format_note': 'HLS', 'preference': -10},
    '132': {'ext': 'mp4', 'height': 240, 'format_note': 'HLS', 'preference': -10},
    '151': {'ext': 'mp4', 'height': 72, 'format_note': 'HLS', 'preference': -10},

    // DASH mp4 video
    '133': {'ext': 'mp4', 'height': 240, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '134': {'ext': 'mp4', 'height': 360, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '135': {'ext': 'mp4', 'height': 480, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '136': {'ext': 'mp4', 'height': 720, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '137': {'ext': 'mp4', 'height': 1080, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '138': {'ext': 'mp4', 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},  // Height can vary (https://github.com/rg3/youtube-dl/issues/4559)
    '160': {'ext': 'mp4', 'height': 144, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '264': {'ext': 'mp4', 'height': 1440, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '298': {
        'ext': 'mp4',
        'height': 720,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'fps': 60,
        'vcodec': 'h264'
    },
    '299': {
        'ext': 'mp4',
        'height': 1080,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'fps': 60,
        'vcodec': 'h264'
    },
    '266': {
        'ext': 'mp4',
        'height': 2160,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'vcodec': 'h264'
    },

    // Dash mp4 audio
    '139': {
        'ext': 'm4a',
        'format_note': 'DASH audio',
        'acodec': 'aac',
        'vcodec': 'none',
        'abr': 48,
        'preference': -50,
        'container': 'm4a_dash'
    },
    '140': {
        'ext': 'm4a',
        'format_note': 'DASH audio',
        'acodec': 'aac',
        'vcodec': 'none',
        'abr': 128,
        'preference': -50,
        'container': 'm4a_dash'
    },
    '141': {
        'ext': 'm4a',
        'format_note': 'DASH audio',
        'acodec': 'aac',
        'vcodec': 'none',
        'abr': 256,
        'preference': -50,
        'container': 'm4a_dash'
    },

    // Dash webm
    '167': {
        'ext': 'webm',
        'height': 360,
        'width': 640,
        'format_note': 'DASH video',
        'acodec': 'none',
        'container': 'webm',
        'vcodec': 'VP8',
        'preference': -40
    },
    '168': {
        'ext': 'webm',
        'height': 480,
        'width': 854,
        'format_note': 'DASH video',
        'acodec': 'none',
        'container': 'webm',
        'vcodec': 'VP8',
        'preference': -40
    },
    '169': {
        'ext': 'webm',
        'height': 720,
        'width': 1280,
        'format_note': 'DASH video',
        'acodec': 'none',
        'container': 'webm',
        'vcodec': 'VP8',
        'preference': -40
    },
    '170': {
        'ext': 'webm',
        'height': 1080,
        'width': 1920,
        'format_note': 'DASH video',
        'acodec': 'none',
        'container': 'webm',
        'vcodec': 'VP8',
        'preference': -40
    },
    '218': {
        'ext': 'webm',
        'height': 480,
        'width': 854,
        'format_note': 'DASH video',
        'acodec': 'none',
        'container': 'webm',
        'vcodec': 'VP8',
        'preference': -40
    },
    '219': {
        'ext': 'webm',
        'height': 480,
        'width': 854,
        'format_note': 'DASH video',
        'acodec': 'none',
        'container': 'webm',
        'vcodec': 'VP8',
        'preference': -40
    },
    '278': {
        'ext': 'webm',
        'height': 144,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'container': 'webm',
        'vcodec': 'VP9'
    },
    '242': {'ext': 'webm', 'height': 240, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '243': {'ext': 'webm', 'height': 360, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '244': {'ext': 'webm', 'height': 480, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '245': {'ext': 'webm', 'height': 480, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '246': {'ext': 'webm', 'height': 480, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '247': {'ext': 'webm', 'height': 720, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '248': {'ext': 'webm', 'height': 1080, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '271': {'ext': 'webm', 'height': 1440, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '272': {'ext': 'webm', 'height': 2160, 'format_note': 'DASH video', 'acodec': 'none', 'preference': -40},
    '302': {
        'ext': 'webm',
        'height': 720,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'fps': 60,
        'vcodec': 'VP9'
    },
    '303': {
        'ext': 'webm',
        'height': 1080,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'fps': 60,
        'vcodec': 'VP9'
    },
    '308': {
        'ext': 'webm',
        'height': 1440,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'fps': 60,
        'vcodec': 'VP9'
    },
    '313': {
        'ext': 'webm',
        'height': 2160,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'vcodec': 'VP9'
    },
    '315': {
        'ext': 'webm',
        'height': 2160,
        'format_note': 'DASH video',
        'acodec': 'none',
        'preference': -40,
        'fps': 60,
        'vcodec': 'VP9'
    },

    // Dash webm audio
    '171': {'ext': 'webm', 'vcodec': 'none', 'format_note': 'DASH audio', 'abr': 128, 'preference': -50},
    '172': {'ext': 'webm', 'vcodec': 'none', 'format_note': 'DASH audio', 'abr': 256, 'preference': -50},

    // Dash webm audio with opus inside
    '249': {
        'ext': 'webm',
        'vcodec': 'none',
        'format_note': 'DASH audio',
        'acodec': 'opus',
        'abr': 50,
        'preference': -50
    },
    '250': {
        'ext': 'webm',
        'vcodec': 'none',
        'format_note': 'DASH audio',
        'acodec': 'opus',
        'abr': 70,
        'preference': -50
    },
    '251': {
        'ext': 'webm',
        'vcodec': 'none',
        'format_note': 'DASH audio',
        'acodec': 'opus',
        'abr': 160,
        'preference': -50
    },

    // RTMP (unnamed)
    '_rtmp': {'protocol': 'rtmp'},
}

// QueryString - begin

// This is public domain code written in 2011 by Jan Wolter and distributed
// for free at http://unixpapa.com/js/querystring.html
//
// Query String Parser
//
//    qs= new QueryString()
//    qs= new QueryString(string)
//
//        Create a query string object based on the given query string. If
//        no string is given, we use the one from the current page by default.
//
//    qs.value(key)
//
//        Return a value for the named key.  If the key was not defined,
//        it will return undefined. If the key was multiply defined it will
//        return the last value set. If it was defined without a value, it
//        will return an empty string.
//
//   qs.values(key)
//
//        Return an array of values for the named key. If the key was not
//        defined, an empty array will be returned. If the key was multiply
//        defined, the values will be given in the order they appeared on
//        in the query string.
//
//   qs.keys()
//
//        Return an array of unique keys in the query string.  The order will
//        not necessarily be the same as in the original query, and repeated
//        keys will only be listed once.
//
//    QueryString.decode(string)
//
//        This static method is an error tolerant version of the builtin
//        function decodeURIComponent(), modified to also change pluses into
//        spaces, so that it is suitable for query string decoding. You
//        shouldn't usually need to call this yourself as the value(),
//        values(), and keys() methods already decode everything they return.
//
// Note: W3C recommends that ; be accepted as an alternative to & for
// separating query string fields. To support that, simply insert a semicolon
// immediately after each ampersand in the regular expression in the first
// function below.

function QueryString(qs) {
    this.dict = {};

    // If no query string  was passed in use the one from the current page
    if (!qs) qs = location.search;

    // Delete leading question mark, if there is one
    if (qs.charAt(0) == '?') qs = qs.substring(1);

    // Parse it
    var re = /([^=&]+)(=([^&]*))?/g;
    while (match = re.exec(qs)) {
        var key = decodeURIComponent(match[1].replace(/\+/g, ' '));
        var value = match[3] ? QueryString.decode(match[3]) : '';
        if (this.dict[key])
            this.dict[key].push(value);
        else
            this.dict[key] = [value];
    }
}

QueryString.decode = function (s) {
    s = s.replace(/\+/g, ' ');
    s = s.replace(/%([EF][0-9A-F])%([89AB][0-9A-F])%([89AB][0-9A-F])/gi,
        function (code, hex1, hex2, hex3) {
            var n1 = parseInt(hex1, 16) - 0xE0;
            var n2 = parseInt(hex2, 16) - 0x80;
            if (n1 == 0 && n2 < 32) return code;
            var n3 = parseInt(hex3, 16) - 0x80;
            var n = (n1 << 12) + (n2 << 6) + n3;
            if (n > 0xFFFF) return code;
            return String.fromCharCode(n);
        });
    s = s.replace(/%([CD][0-9A-F])%([89AB][0-9A-F])/gi,
        function (code, hex1, hex2) {
            var n1 = parseInt(hex1, 16) - 0xC0;
            if (n1 < 2) return code;
            var n2 = parseInt(hex2, 16) - 0x80;
            return String.fromCharCode((n1 << 6) + n2);
        });
    s = s.replace(/%([0-7][0-9A-F])/gi,
        function (code, hex) {
            return String.fromCharCode(parseInt(hex, 16));
        });
    return s;
};

QueryString.prototype.value = function (key) {
    var a = this.dict[key];
    return a ? a[a.length - 1] : undefined;
};

QueryString.prototype.values = function (key) {
    var a = this.dict[key];
    return a ? a : [];
};

QueryString.prototype.keys = function () {
    var a = [];
    for (var key in this.dict)
        a.push(key);
    return a;
};

// QueryString - end

var Queue = function () {
    var previous = new $.Deferred().resolve();

    return function (fn, fail) {
        return previous = previous.then(fn, fail || fn);
    };
};

var queue = Queue(); // lower case for idiomatic use

var LAST_PLAYER_URL = null;
var LAST_FUNC = null;

function log(s) {
    try {
        console.log(s);
    } catch (ignore) {
    }
}

function download(url) {
    log('Downloading webpage ' + url);

    var deferred = $.Deferred();

    $.get('http://query.yahooapis.com/v1/public/yql', {
        q: 'select * from xClient where url="' + url + '" and ua="' + navigator.userAgent + '"',
        format: 'json',
        env: 'store://datatables.org/alltableswithkeys',
        callback: ''
    }).done(function (data) {
        deferred.resolve(data.query.results.resources.content);
    });

    return deferred.promise();
}

function extractId(url) {
    var r = /^http(s?):\/\/www\.youtube\.com\/watch\?v=(.+)/.exec(url);
    return r !== null ? r[2] : null;
}

function searchRegex(regex, string, defaultValue) {
    var r = regex.exec(string);

    if (r !== null) {
        return r[1];
    } else {
        return defaultValue;
    }
}

function parseQS(s) {
    var qs = new QueryString(s);

    var obj = {};

    var keys = qs.keys();
    var size = keys.length;

    for (var i = 0; i < size; i++) {
        var k = keys[i];
        obj[k] = qs.values(k);
    }

    return obj;
}

function decryptSignature(s, playerUrl) {
    var deferred = $.Deferred();

    if (playerUrl === null) {
        log('Cannot decrypt signature without player_url');
        deferred.resolve(null);
    }

    if (playerUrl.indexOf('//') === 0) {
        playerUrl = 'https:' + playerUrl;
    }

    download(playerUrl).done(function (jscode) {

        var func = null;

        if (LAST_PLAYER_URL === playerUrl && LAST_FUNC !== null) {
            func = LAST_FUNC;
        } else {

            var r = /\.sig\|\|([a-zA-Z0-9$]+)\(/.exec(jscode);
            if (r === null) {
                log("Couldn't find the signature code with regex");
            }

            var funcname = r[1];

            var ast = esprima.parse(jscode);

            function traverse(object, visitor) {
                var key, child;

                if (visitor.call(null, object) === false) {
                    return;
                }
                for (key in object) {
                    if (object.hasOwnProperty(key)) {
                        child = object[key];
                        if (typeof child === 'object' && child !== null) {
                            traverse(child, visitor);
                        }
                    }
                }
            }

            traverse(ast, function (node) {
                if (node.type === 'FunctionDeclaration' && node.id.name == funcname) {
                    func = eval('(' + escodegen.generate(node) + ')');
                }

                if (node.type === 'VariableDeclarator') {
                    try {
                        eval(escodegen.generate(node));
                    } catch (ignore) {
                    }
                }
            });

            LAST_PLAYER_URL = playerUrl;
            LAST_FUNC = func;
        }

        var signature = func(s);
        deferred.resolve(signature);
    });

    return deferred.promise();
}

function parseDashManifest(video_id, dash_manifest_url, player_url, age_gate) {
    var deferred = $.Deferred();

    var r = /\/s\/([\w\.]+)/.exec(dash_manifest_url);

    if (r !== null) {
        var s = r[1];

        var formats = [];

        decryptSignature(s, player_url).done(function (dec_s) {
            dash_manifest_url = dash_manifest_url.replace(new RegExp('/s/' + s), '/signature/' + dec_s);

            download(dash_manifest_url).done(function (dash_doc) {
                dash_doc = $.parseXML(dash_doc);

                $(dash_doc).find('AdaptationSet').each(function (index, elemSet) {
                    var mimeType = $(elemSet).attr('mimeType');

                    $(elemSet).find('Representation').each(function (index, elemRep) {
                        var url_el = $(elemRep).find('BaseURL');

                        if (mimeType.indexOf('audio/') === 0 || mimeType.indexOf('video/') === 0) {

                            var format_id = $(elemRep).attr('id');
                            var video_url = $(url_el).text();
                            var filesize = parseInt($(url_el).attr('yt:contentLength'));

                            var f = {
                                format_id: format_id,
                                url: video_url,
                                widt: parseInt($(elemRep).attr('width')),
                                height: parseInt($(elemRep).attr('height')),
                                filesize: filesize
                            }

                            formats.push(f);
                        }
                    });
                });

                deferred.resolve(formats);
            });
        });
    } else {
        deferred.resolve(null);
    }

    return deferred.promise();
}

function extractSupport(video_id, video_webpage, age_gate, embed_webpage, video_info) {
    var deferred = $.Deferred();

    function fail(s) {
        log(s);
        deferred.resolve(null);
        return deferred.promise();
    }

    if (!video_info.hasOwnProperty('token')) {
        if (video_info.hasOwnProperty('reason')) {
            return fail('YouTube said: ' + video_info['reason'][0]);
        }
        else {
            return fail('"token" parameter not in video info for unknown reason');
        }
    }

    var view_count = 0;
    if (video_info.hasOwnProperty('view_count')) {
        view_count = parseInt(video_info['view_count'][0]);
    }

    // Check for "rental" videos
    if (video_info.hasOwnProperty('ypc_video_rental_bar_text') && !video_info.hasOwnProperty('author')) {
        return fail('"rental" videos not supported');
    }

    //Start extracting information
    //self.report_information_extraction(video_id)

    // uploader
    if (!video_info.hasOwnProperty('author')) {
        return fail('Unable to extract uploader name');
    }

    var video_uploader = decodeURIComponent(video_info['author'][0]);

    // uploader_id
    var video_uploader_id = null;

    var mobj = /<link itemprop="url" href="http:\/\/www.youtube.com\/(?:user|channel)\/([^"]+)">/.exec(video_webpage);
    if (mobj !== null) {
        video_uploader_id = mobj[1];
    }
    else {
        //return fail('unable to extract uploader nickname');
        log('unable to extract uploader nickname');
    }

    // title
    var video_title = '_';
    if (video_info.hasOwnProperty('title')) {
        video_title = video_info['title'][0];
    }
    else {
        return fail('Unable to extract video title');
    }

    // thumbnail image
    // We try first to get a high quality image:
    var video_thumbnail = null;
    var m_thumb = /<span itemprop="thumbnail".*?href="(.*?)">/.exec(video_webpage);
    if (m_thumb !== null) {
        video_thumbnail = m_thumb[1];
    } else if (!video_info.hasOwnProperty('thumbnail_url')) {
        return fail('unable to extract video thumbnail');
    } else {
        video_thumbnail = decodeURIComponent(video_info['thumbnail_url'][0]);
    }

    // upload date
    var upload_date = null;
    mobj = /id="eow-date.*?>(.*?)<\/span>/.exec(video_webpage);
    if (mobj === null) {
        mobj = /id="watch-uploader-info".*?>.*?(?:Published|Uploaded|Streamed live) on (.*?)<\/strong>/.exec(video_webpage);
    }
    if (mobj !== null) {
        upload_date = new Date(mobj[1]);
        //upload_date = ' '.join(re.sub(r'[/,-]', r' ', mobj.group(1)).split())
        //upload_date = unified_strdate(upload_date)
    }

    // TODO: categories

    // description
    // TODO:

    function extract_count(count_name) {
        var count = searchRegex(new RegExp('id="watch-' + count_name + '"[^>]*>.*?([\d,]+)\s*<\/span>'), video_webpage, null);
        if (count !== null) {
            return parseInt(count.replace(',', ''));
        }
        return null;
    }

    var like_count = extract_count('like');
    var dislike_count = extract_count('dislike');

    // subtitles
    // TODO:
    //video_subtitles = self.extract_subtitles(video_id, video_webpage)
    //automatic_captions = self.extract_automatic_captions(video_id, video_webpage)

    var video_duration = null;
    if (!video_info.hasOwnProperty('length_seconds')) {
        return fail('unable to extract video duration');
    }
    else {
        video_duration = parseInt(decodeURIComponent(video_info['length_seconds'][0]));
    }

    // TODO:
    // annotations
    //video_annotations = None
    //if self._downloader.params.get('writeannotations', False):
    //  video_annotations = self._extract_annotations(video_id)

    var formats = [];

    if (video_info.hasOwnProperty('conn') && video_info['conn'][0].startswith('rtmp')) {
        return fail('RTMP not supported');
    } else if (video_info.hasOwnProperty('url_encoded_fmt_stream_map') || video_info.hasOwnProperty('adaptive_fmts')) {
        var encodedUrlMap = '';
        if (video_info.hasOwnProperty('url_encoded_fmt_stream_map')) {
            encodedUrlMap = encodedUrlMap + ',' + video_info['url_encoded_fmt_stream_map'][0];
        }
        if (video_info.hasOwnProperty('adaptive_fmts')) {
            encodedUrlMap = encodedUrlMap + ',' + video_info['adaptive_fmts'][0];
        }
        if (encodedUrlMap.indexOf('rtmpe%3Dyes') !== -1) {
            return fail('rtmpe downloads are not supported');
            return;
        }

        var arr = encodedUrlMap.split(',');
        var size = arr.length;

        for (var i = 0; i < size; i++) {
            if (arr[i].length == 0) {
                continue;
            }

            var urlData = parseQS(arr[i]);

            if (!urlData.hasOwnProperty('itag') || !urlData.hasOwnProperty('url')) {
                continue;
            }

            var formatId = urlData['itag'][0];
            var url = urlData['url'][0];

            if (url.indexOf('ratebypass') === -1) {
                url += '&ratebypass=yes';
            }

            if (urlData.hasOwnProperty('sig')) {
                url += '&signature=' + urlData['sig'][0];
                formats.push({
                    format_id: formatId,
                    url: url
                });
            } else if (urlData.hasOwnProperty('s')) {
                var encrypted_sig = urlData['s'][0];
                var ASSETS_RE = /"assets":.+?"js":\s*("[^"]+")/;

                var jsplayer_url_json = searchRegex(ASSETS_RE, age_gate ? embed_webpage : video_webpage);

                // TODO:
                /*
                 if not jsplayer_url_json and not age_gate:
                 # We need the embed website after all
                 if embed_webpage is None:
                 embed_url = proto + '://www.youtube.com/embed/%s' % video_id
                 embed_webpage = self._download(
                 embed_url, video_id, 'Downloading embed webpage')
                 jsplayer_url_json = self._searchRegex(
                 ASSETS_RE, embed_webpage, 'JS player URL')
                 */

                var playerUrl = JSON.parse(jsplayer_url_json);

                queue((function (formatId, url) {
                    decryptSignature(encrypted_sig, playerUrl).done(function (signature) {
                        url += '&signature=' + signature;
                        formats.push({
                            format_id: formatId,
                            url: url
                        });
                    });
                })(formatId, url));
            } else if (url.indexOf('signature') !== -1) { // already decrypted
                formats.push({
                    format_id: formatId,
                    url: url
                });
            }
        }
    } else if (video_info.hasOwnProperty('hlsvp')) {
        return fail('HLS not supported');
    } else {
        return fail('no conn, hlsvp or url_encoded_fmt_stream_map information found in video info');
    }

    function buildResult(formats) {
        var size = formats.length;

        for (var i = 0; i < size; i++) {
            var fmt = formats[i];
            var master = YT_FORMATS[fmt['format_id']];

            $.extend(fmt, master);
        }

        return {
            'id': video_id,
            'uploader': video_uploader,
            'uploader_id': video_uploader_id,
            'upload_date': upload_date,
            'title': video_title,
            'thumbnail': video_thumbnail,
            //'description': video_description,
            //'categories': video_categories,
            //'subtitles': video_subtitles,
            //'automatic_captions': automatic_captions,
            'duration': video_duration,
            'age_limit': age_gate ? 18 : 0,
            //'annotations': video_annotations,
            'webpage_url': 'https://www.youtube.com/watch?v=' + video_id,
            'view_count': view_count,
            'like_count': like_count,
            'dislike_count': dislike_count,
            //'average_rating': float_or_none(video_info.get('avg_rating', [None])[0]),
            'formats': formats
        }
    }

    // Look for the DASH manifest
    if (video_info.hasOwnProperty('dashmpd')) {
        var dashManifestUrl = video_info['dashmpd'][0];

        queue(function () {
            parseDashManifest(video_id, dashManifestUrl, playerUrl, age_gate).done(function (fmts) {
                deferred.resolve(buildResult(fmts ? formats.concat(fmts) : formats));
            });
        });
    }

    return deferred.promise();
}

function extract(url) {

    var deferred = $.Deferred();

    var video_id = extractId(url);

    // Get video webpage
    url = 'https://www.youtube.com/watch?v=' + video_id + '&gl=US&hl=en&has_verified=1&bpctr=9999999999';

    download(url).done(function (video_webpage) {
        var age_gate = false;

        if (/player-age-gate-content">/i.test(video_webpage)) {
            age_gate = true;
            // We simulate the access to the video from www.youtube.com/v/{video_id}
            // this can be viewed without login into Youtube
            url = 'https://www.youtube.com/embed/' + video_id;
            download(url).done(function (embed_webpage) {
                var sts = searchRegex(/"sts"\s*:\s*(\d+)/, embed_webpage);
                var videoInfoUrl = 'https://www.youtube.com/get_video_info?video_id=' + video_id + '&eurl=' + encodeURIComponent('https://youtube.googleapis.com/v/' + video_id) + '&sts=' + sts;
                download(videoInfoUrl).done(function (video_info_webpage) {
                    var video_info = parseQS(video_info_webpage);
                    extractSupport(video_id, video_webpage, age_gate, embed_webpage, video_info).done(function (result) {
                        deferred.resolve(result);
                    });
                });
            });
        } else {
            age_gate = false;
            var videoInfoUrl = 'https://www.youtube.com/get_video_info?&video_id=' + video_id + '&el=detailpage&ps=default&eurl=&gl=US&hl=en'
            download(videoInfoUrl).done(function (video_info_webpage) {
                var video_info = parseQS(video_info_webpage);
                extractSupport(video_id, video_webpage, age_gate, '', video_info).done(function (result) {
                    deferred.resolve(result);
                });
            });
        }
    });

    return deferred.promise();
}
