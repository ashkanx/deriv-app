/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","8483487e5b8462268ba74f7305dc240c"],["/css/app.css","f98d6ec8082622a58ad56501403a7cc3"],["/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/index.html","dd8c4c2d9654b044354ed980851aa2cd"],["/js/0.6d0f5e7ca376e2259ea4.js","3721bcfdeb2b440a0fdafc31acda457a"],["/js/1.6d0f5e7ca376e2259ea4.js","feb8a4abf7ca56cdfe3fc1d25f9d7167"],["/js/10.6d0f5e7ca376e2259ea4.js","ff24942d2049a24a5cb3959809233318"],["/js/11.6d0f5e7ca376e2259ea4.js","6f17e4ec1b8baf53da55759cf12d46dc"],["/js/12.6d0f5e7ca376e2259ea4.js","fc8fb9a9b735bbd0beabf45c19530f80"],["/js/13.6d0f5e7ca376e2259ea4.js","3547a69cce8f0c4f118a8e86f0777282"],["/js/14.6d0f5e7ca376e2259ea4.js","87800a575b97b5a01e0c5489907a5f4c"],["/js/15.6d0f5e7ca376e2259ea4.js","e8dd921febc321e6fe101b9f6eeeebb0"],["/js/16.6d0f5e7ca376e2259ea4.js","93f5f617ef6e4566d1c5001ae2467dad"],["/js/17.6d0f5e7ca376e2259ea4.js","296bd36a42a3dc8fdb8d2d297dd02523"],["/js/18.6d0f5e7ca376e2259ea4.js","014d046227ec646ba48a00dac71e19d7"],["/js/19.6d0f5e7ca376e2259ea4.js","e20d6db78da8a07c3cebaec69f0abca8"],["/js/2.6d0f5e7ca376e2259ea4.js","23c26a31234edf199747be5fb70a12e7"],["/js/20.6d0f5e7ca376e2259ea4.js","a109f3485bf5254afea75470c9d1b9be"],["/js/21.6d0f5e7ca376e2259ea4.js","01d22f6d10507819d74153cef5209cf3"],["/js/22.6d0f5e7ca376e2259ea4.js","c0022f7fbf69206efcea00473a65b5da"],["/js/23.6d0f5e7ca376e2259ea4.js","9985a4bf8cbce0bd4dd15f8073dd3fa9"],["/js/24.6d0f5e7ca376e2259ea4.js","4d77c937414a3bdf30996aaa641e0910"],["/js/25.6d0f5e7ca376e2259ea4.js","283fda2b8791ae2f2871b8600cd0d292"],["/js/26.6d0f5e7ca376e2259ea4.js","daf782e792289d44531b6cee24388ad2"],["/js/27.6d0f5e7ca376e2259ea4.js","8c3445eaa56a054f0433dce303b5926f"],["/js/28.6d0f5e7ca376e2259ea4.js","93790faafd2aff83b986d3fb7d57a7d1"],["/js/29.6d0f5e7ca376e2259ea4.js","7f43c5dc8d22b8ba5718d88aabae686c"],["/js/3.6d0f5e7ca376e2259ea4.js","c2f9068375a58f80f0ffc406812f3f54"],["/js/30.6d0f5e7ca376e2259ea4.js","561c990890cb862ce86021c8c31b3aa8"],["/js/31.6d0f5e7ca376e2259ea4.js","947ff32324aac581cf45d1d645aff3f9"],["/js/32.6d0f5e7ca376e2259ea4.js","0ad853b638744f143de9b173ac41d43d"],["/js/33.6d0f5e7ca376e2259ea4.js","c564a52213c043fc1576ab703e6f975c"],["/js/34.6d0f5e7ca376e2259ea4.js","ccc823957a8ad2790c07acc73abfc098"],["/js/35.6d0f5e7ca376e2259ea4.js","677a828e4fcf6d9d7a73ea9c325102c8"],["/js/36.6d0f5e7ca376e2259ea4.js","f34e8133b2b04722bae98d34863f60bf"],["/js/37.6d0f5e7ca376e2259ea4.js","31a8ecad2d79f9b5b6eae649d04cbfb6"],["/js/38.6d0f5e7ca376e2259ea4.js","d91b095828c24b673be41099cd6614c6"],["/js/39.6d0f5e7ca376e2259ea4.js","73880133f658c50a6a7cc9b6ad8a0f56"],["/js/4.6d0f5e7ca376e2259ea4.js","2d818e8b7e9ffe15e9f0934034484f2e"],["/js/40.6d0f5e7ca376e2259ea4.js","f1c26da46c5b981f6410dfa668e9f604"],["/js/404.6d0f5e7ca376e2259ea4.js","f7048b51fb0df6d6398722ed56993f43"],["/js/41.6d0f5e7ca376e2259ea4.js","b5f15ee454c8b9c64b3e0964f9f0dfb9"],["/js/42.6d0f5e7ca376e2259ea4.js","7261cced1848412af71925464ba1fb66"],["/js/43.6d0f5e7ca376e2259ea4.js","85defcc5e4bda9b45265fb807ac0a932"],["/js/44.6d0f5e7ca376e2259ea4.js","ed35d2d1be2024cada28b526315af730"],["/js/45.6d0f5e7ca376e2259ea4.js","1ff0936010182961f147d534099a6dcb"],["/js/46.6d0f5e7ca376e2259ea4.js","a55fb7e664ff8983784243e99e9b614a"],["/js/47.6d0f5e7ca376e2259ea4.js","cec779d42707dfd6d3ddf0b955dae96e"],["/js/48.6d0f5e7ca376e2259ea4.js","4086a2ade2ada4993cd68f17c464bc05"],["/js/49.6d0f5e7ca376e2259ea4.js","d74895d6be658f16c312334820068d57"],["/js/5.6d0f5e7ca376e2259ea4.js","c50573ebc5b275d5270f4834fa5090fd"],["/js/50.6d0f5e7ca376e2259ea4.js","2400d6da60d10ea333223e315363ea8e"],["/js/51.6d0f5e7ca376e2259ea4.js","e05d28fabd31574e9894e79ff5a1f20b"],["/js/52.6d0f5e7ca376e2259ea4.js","8d9805e45db236c19b658fe72eb118ba"],["/js/53.6d0f5e7ca376e2259ea4.js","3b03654cf37ba5352339b89317dd4313"],["/js/54.6d0f5e7ca376e2259ea4.js","f2f11c2f84c4b9718eb68b701be8a343"],["/js/55.6d0f5e7ca376e2259ea4.js","c91364c2e3b620ae6d2d8a1dfd6caadc"],["/js/56.6d0f5e7ca376e2259ea4.js","fed07db7a00f4cf5e250bd0cc6e793dc"],["/js/57.6d0f5e7ca376e2259ea4.js","95c186096147dab2983bd6d9deec0d43"],["/js/58.6d0f5e7ca376e2259ea4.js","3ff75442e65f10ed8465120b3f8fb3de"],["/js/59.6d0f5e7ca376e2259ea4.js","6645bb3f6379b2095ec1638ff8d1c6dc"],["/js/6.6d0f5e7ca376e2259ea4.js","fc448ffff2831cf07ad2b5f5a5aee436"],["/js/60.6d0f5e7ca376e2259ea4.js","b8117e73ee7b539b6dd62aada81cae48"],["/js/61.6d0f5e7ca376e2259ea4.js","78e998bdeca48b7ffb1c8f191693e95a"],["/js/62.6d0f5e7ca376e2259ea4.js","9010aebdecbbade51c1161b11ac1b7f7"],["/js/63.6d0f5e7ca376e2259ea4.js","3034b409dd724357edcaed5d0637ce23"],["/js/64.6d0f5e7ca376e2259ea4.js","12657355c4102ee134475d7df490552f"],["/js/65.6d0f5e7ca376e2259ea4.js","1a5a339f56d13d583b2ba52ffe86225b"],["/js/66.6d0f5e7ca376e2259ea4.js","5a6eb94e5c3e136f931d79dba22e513a"],["/js/67.6d0f5e7ca376e2259ea4.js","a6cb826faab188de91620bd4da83975e"],["/js/68.6d0f5e7ca376e2259ea4.js","d3b2a8f30a5bbe121b52fdffd1fc1ab6"],["/js/69.6d0f5e7ca376e2259ea4.js","f373cdbf758e48b8fba963be1efb3146"],["/js/7.6d0f5e7ca376e2259ea4.js","e1358f974d6e77e0640d2b660eb7f16a"],["/js/8.6d0f5e7ca376e2259ea4.js","308ab63a4e2d3a2865a9e71cb7623216"],["/js/9.6d0f5e7ca376e2259ea4.js","aa00e3e9cd224f92a2b09657ba43a667"],["/js/contract.6d0f5e7ca376e2259ea4.js","ce8ee3d57381db468dbaa693f14a098a"],["/js/open_positions.6d0f5e7ca376e2259ea4.js","e6f4e050c0b60bf8bca6306d45d77d2b"],["/js/open_positions~profit_table~statement.6d0f5e7ca376e2259ea4.js","38af828145fea7c6ee6279e53a99d953"],["/js/profit_table.6d0f5e7ca376e2259ea4.js","6ea4429b45d585e212b8b3ed948a80fc"],["/js/profit_table~statement.6d0f5e7ca376e2259ea4.js","0fec6805e2fe6cfc5d25267e840da5f2"],["/js/reports.6d0f5e7ca376e2259ea4.js","7566fde27d808505d84d075da8873f54"],["/js/smart_chart.6d0f5e7ca376e2259ea4.js","da1f2301d6adcb4653342c86f4d591b2"],["/js/statement.6d0f5e7ca376e2259ea4.js","cc7c8fc0508627b17f38170232614de3"],["/js/vendors~open_positions~profit_table~statement.6d0f5e7ca376e2259ea4.js","e768847847b59916e06084c2d3e167c0"],["/js/vendors~smart_chart.6d0f5e7ca376e2259ea4.js","f7d7d6b2c587f93a713a430483a5b306"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







