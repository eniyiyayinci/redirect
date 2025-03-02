!function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("clappr")) : "function" == typeof define && define.amd ? define(["clappr"], e) : "object" == typeof exports ? exports.ChromecastPlugin = e(require("clappr")) : t.ChromecastPlugin = e(t.Clappr)
}(this, function(t) {
    return function(t) {
        function e(i) {
            if (n[i])
                return n[i].exports;
            var r = n[i] = {
                exports: {},
                id: i,
                loaded: !1
            };
            return t[i].call(r.exports, r, r.exports, e),
            r.loaded = !0,
            r.exports
        }
        var n = {};
        return e.m = t,
        e.c = n,
        e.p = "/",
        e(0)
    }([function(t, e, n) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }()
          , s = function(t, e, n) {
            for (var i = !0; i; ) {
                var r = t
                  , o = e
                  , a = n;
                i = !1,
                null === r && (r = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== s) {
                    if ("value"in s)
                        return s.value;
                    var c = s.get;
                    if (void 0 === c)
                        return;
                    return c.call(a)
                }
                var u = Object.getPrototypeOf(r);
                if (null === u)
                    return;
                t = u,
                e = o,
                n = a,
                i = !0,
                s = u = void 0
            }
        }
          , c = n(1)
          , u = n(2)
          , l = i(u)
          , h = n(4)
          , p = i(h)
          , d = n(6)
          , f = i(d)
          , v = n(17)
          , g = i(v)
          , y = n(18)
          , m = i(y)
          , b = n(19)
          , k = i(b)
          , w = n(20)
          , P = i(w)
          , C = n(21)
          , M = i(C)
          , E = {
            IDLE: 0,
            ACTIVE: 1,
            WARNING: 2,
            ERROR: 3
        }
          , A = "9DFB77C0"
          , _ = {
            mp4: "video/mp4",
            ogg: "video/ogg",
            "3gpp": "video/3gpp",
            webm: "video/webm",
            mkv: "video/x-matroska",
            m3u8: "application/x-mpegurl",
            mpd: "application/dash+xml"
        };
        _.ogv = _.ogg,
        _["3gp"] = _["3gpp"];
        var T = function(t) {
            function e(t) {
                r(this, e),
                s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t),
                this.bootTryDelay = this.options.bootTryDelay || 500,
                this.bootMaxTryCount = this.options.bootMaxTryCount || 6,
                this.bootTryCount = 0,
                this.isBootable() ? (this.appId = this.options.appId || A,
                this.deviceState = E.IDLE,
                this.embedScript()) : this.disable()
            }
            return o(e, t),
            a(e, [{
                key: "version",
                get: function() {
                    return "0.1.1"
                }
            }, {
                key: "name",
                get: function() {
                    return "chromecast"
                }
            }, {
                key: "tagName",
                get: function() {
                    return "button"
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "chromecast-button",
                        type: "button"
                    }
                }
            }, {
                key: "events",
                get: function() {
                    return {
                        click: "click"
                    }
                }
            }, {
                key: "options",
                get: function() {
                    return this.core.options.chromecast || (this.core.options.chromecast = {})
                }
            }, {
                key: "container",
                get: function() {
                    return this.core.getCurrentContainer ? this.core.getCurrentContainer() : this.core.activeContainer
                }
            }, {
                key: "playback",
                get: function() {
                    return this.core.getCurrentPlayback ? this.core.getCurrentPlayback() : this.core.activePlayback
                }
            }], [{
                key: "Movie",
                get: function() {
                    return "movie"
                }
            }, {
                key: "TvShow",
                get: function() {
                    return "tv_show"
                }
            }, {
                key: "Generic",
                get: function() {
                    return "none"
                }
            }, {
                key: "version",
                get: function() {
                    return "0.1.1"
                }
            }]),
            a(e, [{
                key: "bindEvents",
                value: function() {
                    this.listenTo(this.core.mediaControl, c.Events.MEDIACONTROL_RENDERED, this.render),
                    c.Events.CORE_ACTIVE_CONTAINER_CHANGED ? this.listenTo(this.core, c.Events.CORE_ACTIVE_CONTAINER_CHANGED, this.containerChanged) : this.listenTo(this.core.mediaControl, c.Events.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged),
                    this.container && (this.listenTo(this.container, c.Events.CONTAINER_TIMEUPDATE, this.containerTimeUpdate),
                    this.listenTo(this.container, c.Events.CONTAINER_PLAY, this.containerPlay),
                    this.listenTo(this.container, c.Events.CONTAINER_ENDED, this.sessionStopped))
                }
            }, {
                key: "isBootable",
                value: function() {
                    return !!c.Browser.isChrome && (c.Browser.version <= 71 || this.isSecure())
                }
            }, {
                key: "isSecure",
                value: function() {
                    return "https:" === window.location.protocol
                }
            }, {
                key: "enable",
                value: function() {
                    s(Object.getPrototypeOf(e.prototype), "enable", this).call(this),
                    this.render(),
                    this.embedScript()
                }
            }, {
                key: "embedScript",
                value: function() {
                    var t = this;
                    if (window.chrome && window.chrome.cast && window.chrome.cast.isAvailable)
                        this.bootstrapCastApi();
                    else {
                        var e = document.createElement("script");
                        e.setAttribute("type", "text/javascript"),
                        e.setAttribute("async", "async"),
                        e.setAttribute("src", "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js"),
                        e.onload = function() {
                            return t.bootstrapCastApi()
                        }
                        ,
                        document.body.appendChild(e)
                    }
                }
            }, {
                key: "bootstrapCastApi",
                value: function() {
                    var t = this;
                    return this.bootTryCount++,
                    this.bootTryCount > this.bootMaxTryCount ? (this.bootTryCount = 0,
                    c.Log.warn("GCastApi bootstrap timeout"),
                    void this.disable()) : void (window.chrome ? (this.bootTryCount = 0,
                    window.chrome.cast && window.chrome.cast.isAvailable ? (this.appId = this.appId || A,
                    this.initializeCastApi()) : window.__onGCastApiAvailable = function(e, n) {
                        e ? (t.appId = t.appId || A,
                        t.initializeCastApi()) : (c.Log.warn("GCastApi error", n),
                        t.disable())
                    }
                    ) : setTimeout(function() {
                        t.bootstrapCastApi()
                    }, this.bootTryDelay))
                }
            }, {
                key: "initializeCastApi",
                value: function() {
                    var t = this
                      , e = chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
                      , n = new chrome.cast.SessionRequest(this.appId)
                      , i = new chrome.cast.ApiConfig(n,function(e) {
                        return t.sessionListener(e)
                    }
                    ,function(e) {
                        return t.receiverListener(e)
                    }
                    ,e);
                    chrome.cast.initialize(i, function() {
                        return c.Log.debug(t.name, "init success")
                    }, function() {
                        return c.Log.warn(t.name, "init error")
                    })
                }
            }, {
                key: "sessionListener",
                value: function(t) {
                    c.Log.debug(this.name, "new session id:" + t.sessionId),
                    this.newSession(t)
                }
            }, {
                key: "sessionUpdateListener",
                value: function() {
                    this.session && (c.Log.debug(this.name, this.session.status),
                    this.session.status === chrome.cast.SessionStatus.STOPPED && (this.sessionStopped(),
                    this.session = null))
                }
            }, {
                key: "receiverListener",
                value: function(t) {
                    t === chrome.cast.ReceiverAvailability.AVAILABLE ? (c.Log.debug(this.name, "receiver found"),
                    this.show()) : (c.Log.debug(this.name, "receiver list empty"),
                    this.hide())
                }
            }, {
                key: "launchSuccess",
                value: function(t) {
                    this.renderConnected(),
                    clearInterval(this.connectAnimInterval),
                    this.core.mediaControl.resetKeepVisible(),
                    c.Log.debug(this.name, "launch success - session: " + t.sessionId),
                    this.newSession(t)
                }
            }, {
                key: "launchError",
                value: function(t) {
                    c.Log.debug(this.name, "error on launch", t),
                    this.renderDisconnected(),
                    clearInterval(this.connectAnimInterval),
                    this.core.mediaControl.resetKeepVisible(),
                    this.container.play()
                }
            }, {
                key: "loadMediaSuccess",
                value: function(t, e) {
                    c.Log.debug(this.name, "new media session", e, "(", t, ")"),
                    this.originalPlayback = this.playback;
                    var n = (0,
                    f.default)({}, this.originalPlayback.options, {
                        currentMedia: e,
                        mediaControl: this.core.mediaControl,
                        poster: this.options.poster || this.core.options.poster,
                        settings: this.originalPlayback.settings
                    });
                    this.src = this.originalPlayback.src,
                    this.playbackProxy = new l.default(n),
                    this.playbackProxy.render(),
                    this.core.$el.addClass("chromecast-active"),
                    this.mediaSession = e,
                    this.originalPlayback.$el.remove();
                    var i = this.container;
                    i.$el.append(this.playbackProxy.$el),
                    i.stopListening(),
                    i.playback = this.playbackProxy,
                    i.bindEvents(),
                    i.settingsUpdate()
                }
            }, {
                key: "loadMediaError",
                value: function(t) {
                    c.Log.warn(this.name, "media error", t)
                }
            }, {
                key: "newSession",
                value: function(t) {
                    var e = this;
                    this.session = t,
                    this.deviceState = E.ACTIVE,
                    this.renderConnected(),
                    t.addUpdateListener(function() {
                        return e.sessionUpdateListener()
                    }),
                    this.containerPlay()
                }
            }, {
                key: "sessionStopped",
                value: function() {
                    this.renderDisconnected();
                    var t = this.currentTime
                      , e = void 0;
                    this.mediaSession && (e = this.mediaSession.playerState,
                    this.mediaSession = null),
                    this.core.$el.removeClass("chromecast-active"),
                    this.core.load(this.src || this.core.options.sources);
                    var n = this.container;
                    this.playbackProxy && ((this.playbackProxy.isPlaying() || "PAUSED" === e) && n.once(c.Events.CONTAINER_READY, function() {
                        n.play(),
                        n.playback.seek(100 * t / n.getDuration())
                    }),
                    this.playbackProxy.stop())
                }
            }, {
                key: "loadMedia",
                value: function() {
                    var t = this;
                    this.container.pause();
                    var e = this.container.options.src;
                    c.Log.debug(this.name, "loading... " + e);
                    var n = this.createMediaInfo(e)
                      , i = new chrome.cast.media.LoadRequest(n);
                    i.autoplay = !0,
                    this.currentTime && (i.currentTime = this.currentTime),
                    this.session.loadMedia(i, function(e) {
                        return t.loadMediaSuccess("loadMedia", e)
                    }, function(e) {
                        return t.loadMediaError(e)
                    })
                }
            }, {
                key: "createMediaInfo",
                value: function(t) {
                    var n = e.mimeTypeFor(t)
                      , i = new chrome.cast.media.MediaInfo(t);
                    i.contentType = this.options.contentType || n,
                    i.customData = this.options.customData;
                    var r = this.createMediaMetadata();
                    return i.metadata = r,
                    i
                }
            }, {
                key: "createMediaMetadata",
                value: function() {
                    this.options.media || (this.options.media = {});
                    var t = this.options.media.type
                      , n = this.createCastMediaMetadata(t);
                    return n.title = this.options.media.title,
                    n.subtitle = this.options.media.subtitle,
                    n.releaseDate = this.options.media.releaseDate,
                    t === e.TvShow ? (n.episode = this.options.media.episode,
                    n.originalAirdate = this.options.media.originalAirdate,
                    n.season = this.options.media.season,
                    n.seriesTitle = this.options.media.seriesTitle) : t === e.Movie && (n.studio = this.options.media.studio),
                    this.options.media.images && (n.images = this.options.media.images.map(function(t) {
                        return new chrome.cast.Image(t)
                    })),
                    !n.images && this.options.poster && (n.images = [new chrome.cast.Image(this.options.poster)]),
                    !n.images && this.core.options.poster && (n.images = [new chrome.cast.Image(this.core.options.poster)]),
                    n
                }
            }, {
                key: "createCastMediaMetadata",
                value: function(t) {
                    switch (t) {
                    case e.Movie:
                        return new chrome.cast.media.MovieMediaMetadata;
                    case e.TvShow:
                        return new chrome.cast.media.TvShowMediaMetadata;
                    default:
                        return new chrome.cast.media.GenericMediaMetadata
                    }
                }
            }, {
                key: "show",
                value: function() {
                    this.$el.show()
                }
            }, {
                key: "hide",
                value: function() {
                    this.$el.hide()
                }
            }, {
                key: "click",
                value: function() {
                    var t = this;
                    this.currentTime = this.container.getCurrentTime(),
                    this.container.pause(),
                    chrome.cast.requestSession(function(e) {
                        return t.launchSuccess(e)
                    }, function(e) {
                        return t.launchError(e)
                    }),
                    this.session || !function() {
                        var e = 0
                          , n = [m.default, k.default, P.default];
                        clearInterval(t.connectAnimInterval),
                        t.connectAnimInterval = setInterval(function() {
                            t.$el.html(n[e]),
                            e = (e + 1) % 3
                        }, 600),
                        t.core.mediaControl.setKeepVisible()
                    }()
                }
            }, {
                key: "containerChanged",
                value: function() {
                    this.stopListening(),
                    this.bindEvents()
                }
            }, {
                key: "containerTimeUpdate",
                value: function(t) {
                    this.currentTime = t.current
                }
            }, {
                key: "containerPlay",
                value: function() {
                    !this.session || this.mediaSession && "IDLE" !== this.mediaSession.playerState && "PAUSED" !== this.mediaSession.playerState || (c.Log.debug(this.name, "load media"),
                    this.loadMedia())
                }
            }, {
                key: "renderConnected",
                value: function() {
                    this.$el.html(M.default)
                }
            }, {
                key: "renderDisconnected",
                value: function() {
                    this.$el.html(g.default)
                }
            }, {
                key: "render",
                value: function() {
                    return this.session ? this.renderConnected() : this.renderDisconnected(),
                    this.core.mediaControl.$el.find(".media-control-right-panel[data-media-control]").append(this.$el),
                    this.$style && this.$style.remove(),
                    this.$style = c.Styler.getStyleFor(p.default, {
                        baseUrl: this.core.options.baseUrl
                    }),
                    this.core.$el.append(this.$style),
                    this
                }
            }], [{
                key: "mimeTypeFor",
                value: function(t) {
                    var e = (t.split("?")[0].match(/.*\.(.*)$/) || [])[1];
                    return _[e] ? _[e] : t.indexOf(".ism") > -1 ? "application/vnd.ms-sstr+xml" : void 0
                }
            }]),
            e
        }(c.UICorePlugin);
        e.default = T,
        t.exports = e.default
    }
    , function(e, n) {
        e.exports = t
    }
    , function(t, e, n) {
        "use strict";
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        function r(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1,
                    i.configurable = !0,
                    "value"in i && (i.writable = !0),
                    Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n),
                i && t(e, i),
                e
            }
        }()
          , s = function(t, e, n) {
            for (var i = !0; i; ) {
                var r = t
                  , o = e
                  , a = n;
                i = !1,
                null === r && (r = Function.prototype);
                var s = Object.getOwnPropertyDescriptor(r, o);
                if (void 0 !== s) {
                    if ("value"in s)
                        return s.value;
                    var c = s.get;
                    if (void 0 === c)
                        return;
                    return c.call(a)
                }
                var u = Object.getPrototypeOf(r);
                if (null === u)
                    return;
                t = u,
                e = o,
                n = a,
                i = !0,
                s = u = void 0
            }
        }
          , c = n(1)
          , u = n(3)
          , l = i(u)
          , h = 100
          , p = function(t) {
            function e(t) {
                var n = this;
                r(this, e),
                s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t),
                this.src = t.src,
                this.currentMedia = t.currentMedia,
                this.mediaControl = t.mediaControl,
                this.currentMedia.addUpdateListener(function() {
                    return n.onMediaStatusUpdate()
                }),
                this.settings = t.settings;
                var i = function(t) {
                    return "volume" != t
                };
                this.settings.default && (this.settings.default = this.settings.default.filter(i)),
                this.settings.left && (this.settings.left = this.settings.left.filter(i)),
                this.settings.right && (this.settings.right = this.settings.right.filter(i))
            }
            return o(e, t),
            a(e, [{
                key: "name",
                get: function() {
                    return "chromecast_playback"
                }
            }, {
                key: "template",
                get: function() {
                    return (0,
                    c.template)(l.default)
                }
            }, {
                key: "attributes",
                get: function() {
                    return {
                        class: "chromecast-playback"
                    }
                }
            }, {
                key: "isReady",
                get: function() {
                    return !0
                }
            }]),
            a(e, [{
                key: "render",
                value: function() {
                    var t = this.template();
                    this.$el.html(t),
                    this.options.poster ? this.$(".chromecast-playback-background").css("background-image", "url(" + this.options.poster + ")") : this.$(".chromecast-playback-background").css("background-color", "#666")
                }
            }, {
                key: "play",
                value: function() {
                    this.currentMedia.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.stopTimer(),
                    this.currentMedia.pause(),
                    this.getPlaybackType() === c.Playback.LIVE && this.trigger(c.Events.PLAYBACK_DVR, !0)
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopTimer(),
                    this.currentMedia.pause()
                }
            }, {
                key: "seek",
                value: function(t) {
                    var e = this;
                    this.stopTimer();
                    var n = new chrome.cast.media.SeekRequest;
                    n.currentTime = t,
                    this.currentMedia.seek(n, function() {
                        return e.startTimer()
                    }, function() {
                        return c.Log.warn("seek failed")
                    }),
                    this.getPlaybackType() === c.Playback.LIVE && this.trigger(c.Events.PLAYBACK_DVR, t < this.getDuration() - 30)
                }
            }, {
                key: "seekPercentage",
                value: function(t) {
                    if (t >= 0 && t <= 100) {
                        var e = this.getDuration();
                        this.seek(t * e / 100)
                    }
                }
            }, {
                key: "startTimer",
                value: function() {
                    var t = this;
                    this.timer = setInterval(function() {
                        return t.updateMediaControl()
                    }, h)
                }
            }, {
                key: "stopTimer",
                value: function() {
                    clearInterval(this.timer),
                    this.timer = null
                }
            }, {
                key: "getDuration",
                value: function() {
                    return this.currentMedia.media.duration
                }
            }, {
                key: "isPlaying",
                value: function() {
                    return "PLAYING" === this.currentMedia.playerState || "BUFFERING" === this.currentMedia.playerState
                }
            }, {
                key: "getPlaybackType",
                value: function() {
                    return this.currentMedia.liveSeekableRange ? c.Playback.LIVE : c.Playback.VOD
                }
            }, {
                key: "onMediaStatusUpdate",
                value: function() {
                    this.mediaControl.changeTogglePlay(),
                    this.isPlaying() && !this.timer && this.startTimer(),
                    "BUFFERING" === this.currentMedia.playerState ? (this.isBuffering = !0,
                    this.trigger(c.Events.PLAYBACK_BUFFERING, this.name)) : "PLAYING" === this.currentMedia.playerState ? (this.isBuffering && (this.isBuffering = !1,
                    this.trigger(c.Events.PLAYBACK_BUFFERFULL, this.name)),
                    this.prevState !== this.currentMedia.playerState && this.trigger(c.Events.PLAYBACK_PLAY, this.name)) : "IDLE" === this.currentMedia.playerState ? (this.isBuffering && (this.isBuffering = !1,
                    this.trigger(c.Events.PLAYBACK_BUFFERFULL, this.name)),
                    this.trigger(c.Events.PLAYBACK_ENDED, this.name)) : "PAUSED" === this.currentMedia.playerState && this.prevState !== this.currentMedia.playerState && this.trigger(c.Events.PLAYBACK_PAUSE, this.name),
                    this.prevState = this.currentMedia.playerState
                }
            }, {
                key: "updateMediaControl",
                value: function() {
                    var t = this.currentMedia.getEstimatedTime()
                      , e = this.currentMedia.media.duration;
                    this.trigger(c.Events.PLAYBACK_TIMEUPDATE, {
                        current: t,
                        total: e
                    }, this.name)
                }
            }, {
                key: "show",
                value: function() {
                    this.$el.show()
                }
            }, {
                key: "hide",
                value: function() {
                    this.$el.hide()
                }
            }]),
            e
        }(c.Playback);
        e.default = p,
        t.exports = e.default
    }
    , function(t, e) {
        t.exports = "<div class=chromecast-playback-background></div><div class=chromecast-playback-overlay></div>"
    }
    , function(t, e, n) {
        e = t.exports = n(5)(),
        e.push([t.id, ".chromecast-playback{height:100%;width:100%}.chromecast-playback .chromecast-playback-background,.chromecast-playback .chromecast-playback-overlay{position:absolute;height:100%;width:100%}.chromecast-playback .chromecast-playback-background{background-size:contain}.chromecast-playback .chromecast-playback-overlay{background-color:#000;opacity:.4}.chromecast-button{background:transparent;border:0;width:32px;height:32px;font-size:22px;line-height:32px;letter-spacing:0;margin:0 6px;color:#fff;opacity:.5;vertical-align:middle;text-align:left;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;transition:all .1s ease}.chromecast-button:hover{opacity:.75;text-shadow:hsla(0,0%,100%,.8) 0 0 5px}.chromecast-button:focus{outline:none}.chromecast-button svg{width:24px;height:24px}.chromecast-button svg #cast,.chromecast-button svg #cast-on,.chromecast-button svg #Path{fill:#fff;stroke:#fff;stroke-width:.5px}", ""])
    }
    , function(t, e) {
        t.exports = function() {
            var t = [];
            return t.toString = function() {
                for (var t = [], e = 0; e < this.length; e++) {
                    var n = this[e];
                    n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
                }
                return t.join("")
            }
            ,
            t.i = function(e, n) {
                "string" == typeof e && (e = [[null, e, ""]]);
                for (var i = {}, r = 0; r < this.length; r++) {
                    var o = this[r][0];
                    "number" == typeof o && (i[o] = !0)
                }
                for (r = 0; r < e.length; r++) {
                    var a = e[r];
                    "number" == typeof a[0] && i[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"),
                    t.push(a))
                }
            }
            ,
            t
        }
    }
    , function(t, e, n) {
        function i(t, e, n) {
            for (var i = -1, r = a(e), o = r.length; ++i < o; ) {
                var s = r[i]
                  , c = t[s]
                  , u = n(c, e[s], s, t, e);
                (u === u ? u === c : c !== c) && (void 0 !== c || s in t) || (t[s] = u)
            }
            return t
        }
        var r = n(7)
          , o = n(13)
          , a = n(9)
          , s = o(function(t, e, n) {
            return n ? i(t, e, n) : r(t, e)
        });
        t.exports = s
    }
    , function(t, e, n) {
        function i(t, e) {
            return null == e ? t : r(e, o(e), t)
        }
        var r = n(8)
          , o = n(9);
        t.exports = i
    }
    , function(t, e) {
        function n(t, e, n) {
            n || (n = {});
            for (var i = -1, r = e.length; ++i < r; ) {
                var o = e[i];
                n[o] = t[o]
            }
            return n
        }
        t.exports = n
    }
    , function(t, e, n) {
        function i(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
        function r(t) {
            return null != t && a(m(t))
        }
        function o(t, e) {
            return t = "number" == typeof t || d.test(t) ? +t : -1,
            e = null == e ? y : e,
            t > -1 && t % 1 == 0 && t < e
        }
        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= y
        }
        function s(t) {
            for (var e = u(t), n = e.length, i = n && t.length, r = !!i && a(i) && (p(t) || h(t)), s = -1, c = []; ++s < n; ) {
                var l = e[s];
                (r && o(l, i) || v.call(t, l)) && c.push(l)
            }
            return c
        }
        function c(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function u(t) {
            if (null == t)
                return [];
            c(t) || (t = Object(t));
            var e = t.length;
            e = e && a(e) && (p(t) || h(t)) && e || 0;
            for (var n = t.constructor, i = -1, r = "function" == typeof n && n.prototype === t, s = Array(e), u = e > 0; ++i < e; )
                s[i] = i + "";
            for (var l in t)
                u && o(l, e) || "constructor" == l && (r || !v.call(t, l)) || s.push(l);
            return s
        }
        var l = n(10)
          , h = n(11)
          , p = n(12)
          , d = /^\d+$/
          , f = Object.prototype
          , v = f.hasOwnProperty
          , g = l(Object, "keys")
          , y = 9007199254740991
          , m = i("length")
          , b = g ? function(t) {
            var e = null == t ? void 0 : t.constructor;
            return "function" == typeof e && e.prototype === t || "function" != typeof t && r(t) ? s(t) : c(t) ? g(t) : []
        }
        : s;
        t.exports = b
    }
    , function(t, e) {
        function n(t) {
            return !!t && "object" == typeof t
        }
        function i(t, e) {
            var n = null == t ? void 0 : t[e];
            return a(n) ? n : void 0
        }
        function r(t) {
            return o(t) && p.call(t) == s
        }
        function o(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function a(t) {
            return null != t && (r(t) ? d.test(l.call(t)) : n(t) && c.test(t))
        }
        var s = "[object Function]"
          , c = /^\[object .+?Constructor\]$/
          , u = Object.prototype
          , l = Function.prototype.toString
          , h = u.hasOwnProperty
          , p = u.toString
          , d = RegExp("^" + l.call(h).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = i
    }
    , function(t, e) {
        function n(t) {
            return r(t) && f.call(t, "callee") && (!g.call(t, "callee") || v.call(t) == l)
        }
        function i(t) {
            return null != t && a(t.length) && !o(t)
        }
        function r(t) {
            return c(t) && i(t)
        }
        function o(t) {
            var e = s(t) ? v.call(t) : "";
            return e == h || e == p
        }
        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= u
        }
        function s(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function c(t) {
            return !!t && "object" == typeof t
        }
        var u = 9007199254740991
          , l = "[object Arguments]"
          , h = "[object Function]"
          , p = "[object GeneratorFunction]"
          , d = Object.prototype
          , f = d.hasOwnProperty
          , v = d.toString
          , g = d.propertyIsEnumerable;
        t.exports = n
    }
    , function(t, e) {
        function n(t) {
            return !!t && "object" == typeof t
        }
        function i(t, e) {
            var n = null == t ? void 0 : t[e];
            return s(n) ? n : void 0
        }
        function r(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= y
        }
        function o(t) {
            return a(t) && f.call(t) == u
        }
        function a(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        function s(t) {
            return null != t && (o(t) ? v.test(p.call(t)) : n(t) && l.test(t))
        }
        var c = "[object Array]"
          , u = "[object Function]"
          , l = /^\[object .+?Constructor\]$/
          , h = Object.prototype
          , p = Function.prototype.toString
          , d = h.hasOwnProperty
          , f = h.toString
          , v = RegExp("^" + p.call(d).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , g = i(Array, "isArray")
          , y = 9007199254740991
          , m = g || function(t) {
            return n(t) && r(t.length) && f.call(t) == c
        }
        ;
        t.exports = m
    }
    , function(t, e, n) {
        function i(t) {
            return a(function(e, n) {
                var i = -1
                  , a = null == e ? 0 : n.length
                  , s = a > 2 ? n[a - 2] : void 0
                  , c = a > 2 ? n[2] : void 0
                  , u = a > 1 ? n[a - 1] : void 0;
                for ("function" == typeof s ? (s = r(s, u, 5),
                a -= 2) : (s = "function" == typeof u ? u : void 0,
                a -= s ? 1 : 0),
                c && o(n[0], n[1], c) && (s = a < 3 ? void 0 : s,
                a = 1); ++i < a; ) {
                    var l = n[i];
                    l && t(e, l, s)
                }
                return e
            })
        }
        var r = n(14)
          , o = n(15)
          , a = n(16);
        t.exports = i
    }
    , function(t, e) {
        function n(t, e, n) {
            if ("function" != typeof t)
                return i;
            if (void 0 === e)
                return t;
            switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n)
                }
                ;
            case 3:
                return function(n, i, r) {
                    return t.call(e, n, i, r)
                }
                ;
            case 4:
                return function(n, i, r, o) {
                    return t.call(e, n, i, r, o)
                }
                ;
            case 5:
                return function(n, i, r, o, a) {
                    return t.call(e, n, i, r, o, a)
                }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
        function i(t) {
            return t
        }
        t.exports = n
    }
    , function(t, e) {
        function n(t) {
            return function(e) {
                return null == e ? void 0 : e[t]
            }
        }
        function i(t) {
            return null != t && a(l(t))
        }
        function r(t, e) {
            return t = "number" == typeof t || c.test(t) ? +t : -1,
            e = null == e ? u : e,
            t > -1 && t % 1 == 0 && t < e
        }
        function o(t, e, n) {
            if (!s(n))
                return !1;
            var o = typeof e;
            if ("number" == o ? i(n) && r(e, n.length) : "string" == o && e in n) {
                var a = n[e];
                return t === t ? t === a : a !== a
            }
            return !1
        }
        function a(t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= u
        }
        function s(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }
        var c = /^\d+$/
          , u = 9007199254740991
          , l = n("length");
        t.exports = o
    }
    , function(t, e) {
        function n(t, e) {
            if ("function" != typeof t)
                throw new TypeError(i);
            return e = r(void 0 === e ? t.length - 1 : +e || 0, 0),
            function() {
                for (var n = arguments, i = -1, o = r(n.length - e, 0), a = Array(o); ++i < o; )
                    a[i] = n[e + i];
                switch (e) {
                case 0:
                    return t.call(this, a);
                case 1:
                    return t.call(this, n[0], a);
                case 2:
                    return t.call(this, n[0], n[1], a)
                }
                var s = Array(e + 1);
                for (i = -1; ++i < e; )
                    s[i] = n[i];
                return s[e] = a,
                t.apply(this, s)
            }
        }
        var i = "Expected a function"
          , r = Math.max;
        t.exports = n
    }
    , function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="ic_cast_black_24dp"><g id="ic_remove_circle_white_24dp"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" id="cast" fill="#000"></path><path id="bounds" d="M0 0h24v24H0z"></path></g></g></g></svg>'
    }
    , function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="ic_cast0_black_24dp"><g id="ic_remove_circle_white_24dp"><path d="M1 18v3h3c0-1.66-1.34-3-3-3z" id="Path" fill="#000"></path><path d="M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z" id="Path" opacity=".3" fill="#000"></path><path d="M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z" id="Path" opacity=".3" fill="#000"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" id="Path" fill="#000"></path><path id="bounds" d="M0 0h24v24H0z"></path></g></g></g></svg>'
    }
    , function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="ic_cast1_black_24dp"><g id="ic_remove_circle_white_24dp"><path d="M1 18v3h3c0-1.66-1.34-3-3-3z" id="Path" opacity=".3" fill="#000"></path><path d="M1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z" id="Path" fill="#000"></path><path d="M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z" id="Path" opacity=".3" fill="#000"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" id="cast" fill="#000"></path><path id="bounds" d="M0 0h24v24H0z"></path></g></g></g></svg>'
    }
    , function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="ic_cast2_black_24dp"><g id="ic_remove_circle_white_24dp"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zM1 14v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7z" id="Path" opacity=".3" fill="#000"></path><path d="M1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z" id="Path" fill="#000"></path><path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" id="cast" fill="#000"></path><path id="bounds" d="M0 0h24v24H0z"></path></g></g></g></svg>'
    }
    , function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg"><g id="Page-1" fill="none" fill-rule="evenodd"><g id="ic_cast_connected_black_24dp"><g id="ic_remove_circle_white_24dp"><path d="M1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm18-7H5v1.63c3.96 1.28 7.09 4.41 8.37 8.37H19V7zM1 10v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11zm20-7H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" id="cast-on" fill="#000"></path><path id="bounds" d="M0 0h24v24H0z"></path></g></g></g></svg>'
    }
    ])
});
//# sourceMappingURL=clappr-chromecast-plugin.min.js.map
