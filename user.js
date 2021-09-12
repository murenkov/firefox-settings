// Отключить предупреждение при входе в about:config
user_pref("general.warnOnAboutConfig", false);

// Отключение телеметрии
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.places", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("browser.newtabpage.activity-stream.prerender", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
user_pref("browser.newtabpage.enhanced", true);
user_pref("security.ssl.errorReporting.automatic", true);
user_pref("toolkit.identity.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Настройки местоположения
user_pref("browser.search.countryCode", "US");
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.hiddenOneOffs", "Bing,Amazon.com,Twitter");
user_pref("browser.search.region", "US");
user_pref("geo.wifi.uri", "");

// Настройка url
user_pref("browser.urlbar.clickSelectsAll", true);
user_pref("browser.urlbar.maxRichResults", 15);
user_pref("browser.urlbar.trimURLs", false);

// Отправка данных
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");

// Управление сенсорами
user_pref("device.sensors.enabled", false);
user_pref("device.sensors.motion.enabled", false);
user_pref("device.sensors.orientation.enabled", false);

// Отключение уведомлений
user_pref("dom.push.enabled", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);

// Экспериментальные возможности
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.supported", false);

// Управление расширениями
user_pref("extensions.pocket.enabled", false);

// Ускорение отрисовки
user_pref("gfx.use_text_smoothing_setting", true);
user_pref("gfx.webrender.enabled", true);
user_pref("gfx.webrender.highlight-painted-layers", false);
user_pref("layers.acceleration.force-enabled", true);

// Автоматический выбор языка на сайте
user_pref("intl.accept_languages", "en-us,en,ru");
user_pref("intl.locale.requested", "en-US");

// Настройки медиа
user_pref("media.autoplay.enabled", false);
user_pref("media.av1.enabled", true);

// Поведение на сайтах
user_pref("network.allow-experiments", false);
user_pref("network.cookie.prefsMigrated", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.tcp.tcp_fastopen_enable", true);
user_pref("network.trr.mode", 2);
user_pref("network.trr.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("network.warnOnAboutNetworking", false);

// Настройки приватности
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.firstparty.isolate", true);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);

// Контейнеры для аккаунтов
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("privacy.userContext.ui.enabled", true);

// Настроки режима чтения
user_pref("reader.color_scheme", "dark");
user_pref("reader.content_width", 6);
user_pref("reader.font_style", sans-serif);
user_pref("reader.font_size", 6);
user_pref("reader.line_height", 2);

// Тёмная тема gtk
user_pref("widget.chrome.allow-gtk-dark-theme", true);
user_pref("widget.content.allow-gtk-dark-theme", true);
