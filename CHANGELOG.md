# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.6](https://github.com/studioalva-dev/bni-dashboard/compare/v0.1.5...v0.1.6) (2022-07-07)


### Features

* **auth:** add min and max length password check for change password ([#78](https://github.com/studioalva-dev/bni-dashboard/issues/78)) ([02e11a8](https://github.com/studioalva-dev/bni-dashboard/commit/02e11a861d5d783891cc1df2ad7d72bace740d33))
* **page:** my approval integration ([#66](https://github.com/studioalva-dev/bni-dashboard/issues/66)) ([8e85bec](https://github.com/studioalva-dev/bni-dashboard/commit/8e85bec45dda794860afb40cbd642db9d24ee568))
* **services:** add clear swr cache on login and logout ([#82](https://github.com/studioalva-dev/bni-dashboard/issues/82)) ([d8e75c5](https://github.com/studioalva-dev/bni-dashboard/commit/d8e75c549bbd85ed2d3eb85f433d57fd1f4e662b))
* **sso:** add notification toast when remove channel success ([#75](https://github.com/studioalva-dev/bni-dashboard/issues/75)) ([00f0351](https://github.com/studioalva-dev/bni-dashboard/commit/00f0351b1aa677169dba70f3e85acf385d4cf0fb))
* **user-management:** integrate api create, edit and delete in user-management ([#50](https://github.com/studioalva-dev/bni-dashboard/issues/50)) ([8be4eef](https://github.com/studioalva-dev/bni-dashboard/commit/8be4eefa4181d7973ba5f666d59cb316b8423013))
* **widget:** add needGetChildCif if on homepage ([#81](https://github.com/studioalva-dev/bni-dashboard/issues/81)) ([ab458c6](https://github.com/studioalva-dev/bni-dashboard/commit/ab458c60f3a02db7201713238c388359aecf6c39))
* **widget:** integrate cashflow detail dashboard ([#69](https://github.com/studioalva-dev/bni-dashboard/issues/69)) ([a432e00](https://github.com/studioalva-dev/bni-dashboard/commit/a432e00bce17be6f205a18fdffd822e817ca44b4))
* **widget:** integrate cashflow in homepage ([#70](https://github.com/studioalva-dev/bni-dashboard/issues/70)) ([81cfa50](https://github.com/studioalva-dev/bni-dashboard/commit/81cfa50aa1be0e476536e0468db39cadaedd934f))
* **widget:** integrate deposit summary ([#64](https://github.com/studioalva-dev/bni-dashboard/issues/64)) ([5806ecd](https://github.com/studioalva-dev/bni-dashboard/commit/5806ecd38963f154b7cdcdc6eeae8edc2ac0dbd2))
* **widget:** integrate deposit trend chart ([7bf5afe](https://github.com/studioalva-dev/bni-dashboard/commit/7bf5afe09550b326cd06404eb27d1e975576362e))
* **widget:** integrate liabilities dashboard ([#67](https://github.com/studioalva-dev/bni-dashboard/issues/67)) ([df46aa1](https://github.com/studioalva-dev/bni-dashboard/commit/df46aa1277e10bf1bc3569a2a02ccb9642c1748d))
* **widget:** integrate summary in homepage ([#71](https://github.com/studioalva-dev/bni-dashboard/issues/71)) ([ac50129](https://github.com/studioalva-dev/bni-dashboard/commit/ac501297ae3949689d33ce95aacce892c11b37ab))
* **widget:** select cif component ([#59](https://github.com/studioalva-dev/bni-dashboard/issues/59)) ([a4bce55](https://github.com/studioalva-dev/bni-dashboard/commit/a4bce551134c6b9e6200fc4133aeaea34fa4d001))
* **widget:** show y axis ticks fraction of 1000 ([#63](https://github.com/studioalva-dev/bni-dashboard/issues/63)) ([336c1cd](https://github.com/studioalva-dev/bni-dashboard/commit/336c1cdbbd186a91f16aa259df79e11445f681ad))


### Bug Fixes

* **calendar:** handle loading, add widget list events , and fix auto update events after delete, edit, and create. ([#61](https://github.com/studioalva-dev/bni-dashboard/issues/61)) ([53d6f4b](https://github.com/studioalva-dev/bni-dashboard/commit/53d6f4b274689a6480fb7b2a8cac168aff40b742))
* **component:** stepper form state value ([#83](https://github.com/studioalva-dev/bni-dashboard/issues/83)) ([efef457](https://github.com/studioalva-dev/bni-dashboard/commit/efef4575aa3806f35c4f04bf2470fb47aa3d4906))
* fix missing arg name ([14432c0](https://github.com/studioalva-dev/bni-dashboard/commit/14432c0c701e31cbaaf599ff281a5cd988e74c37))
* **page:** login promo, sidebar scroll, service nullable cifNo ([#77](https://github.com/studioalva-dev/bni-dashboard/issues/77)) ([9bec2f8](https://github.com/studioalva-dev/bni-dashboard/commit/9bec2f8b15e16383e10375a1c7036e5fe70d68e0))
* **service:** my approval get interval mutate ([#80](https://github.com/studioalva-dev/bni-dashboard/issues/80)) ([83f5bef](https://github.com/studioalva-dev/bni-dashboard/commit/83f5befbe87a9e8810b805b801c2c57e01ee4976))
* **services:** prevent multiple unauthorized toast ([#76](https://github.com/studioalva-dev/bni-dashboard/issues/76)) ([d98c0cd](https://github.com/studioalva-dev/bni-dashboard/commit/d98c0cd34bd8feda582d71b3b828c10932e91b43))
* **sso:** adjust connected channel item ([#58](https://github.com/studioalva-dev/bni-dashboard/issues/58)) ([6ca1d18](https://github.com/studioalva-dev/bni-dashboard/commit/6ca1d1815c0ef69b6d7acdb6ea11b4496333a480))
* **Toast&session:** handle toast error loop & add api ping ([#84](https://github.com/studioalva-dev/bni-dashboard/issues/84)) ([7ef69e3](https://github.com/studioalva-dev/bni-dashboard/commit/7ef69e3f365385f54d54d7195518daafaba23baf))


### Improvements

* **services:** disable error retry for swr hook ([#79](https://github.com/studioalva-dev/bni-dashboard/issues/79)) ([7194976](https://github.com/studioalva-dev/bni-dashboard/commit/7194976e96af01265c5776318dd074424244ee8b))
* **services:** set swr hook to be immutable ([#74](https://github.com/studioalva-dev/bni-dashboard/issues/74)) ([21ed9d0](https://github.com/studioalva-dev/bni-dashboard/commit/21ed9d079665613f78d257e527ff36fd7ff45e3e))
* **sso:** set onboarding to appear only on account without connected channel ([#73](https://github.com/studioalva-dev/bni-dashboard/issues/73)) ([7ac35fe](https://github.com/studioalva-dev/bni-dashboard/commit/7ac35fec373ccd586686ed5605ef5926eb3a74e1))
* **widget:** adjust cashflow integration ([#72](https://github.com/studioalva-dev/bni-dashboard/issues/72)) ([f603370](https://github.com/studioalva-dev/bni-dashboard/commit/f603370bc0782704ed9f549ab7ff48ab375a2c04))
* **widget:** make datasets optional ([#62](https://github.com/studioalva-dev/bni-dashboard/issues/62)) ([0f5e94a](https://github.com/studioalva-dev/bni-dashboard/commit/0f5e94acd8b5b3040d097fc35b08790cd3aba2a5))
* **widget:** prevent NaN when parsing currency, multiline VerticalList header on desktop ([#65](https://github.com/studioalva-dev/bni-dashboard/issues/65)) ([47c4397](https://github.com/studioalva-dev/bni-dashboard/commit/47c4397632d106ab9a76adafaf8ce1cf91d4c548))
* **widget:** set chart max bar thickness ([#68](https://github.com/studioalva-dev/bni-dashboard/issues/68)) ([097e7b9](https://github.com/studioalva-dev/bni-dashboard/commit/097e7b9e01ba0755500ea6ff2a728280cb08b283))

### [0.1.5](https://github.com/studioalva-dev/bni-dashboard/compare/v0.1.4...v0.1.5) (2022-06-11)


### Features

* **alert:** adjust alerts ([#57](https://github.com/studioalva-dev/bni-dashboard/issues/57)) ([4956a0e](https://github.com/studioalva-dev/bni-dashboard/commit/4956a0e880f2b2ce2b180e6035434c51720f4b70))
* **auth:** 💄 adjust login and forgot password UI ([#55](https://github.com/studioalva-dev/bni-dashboard/issues/55)) ([9416ca6](https://github.com/studioalva-dev/bni-dashboard/commit/9416ca6352f45eb837044d0230aa776a2f65e06b))
* **services:** add error message handling through axios interceptor ([#52](https://github.com/studioalva-dev/bni-dashboard/issues/52)) ([8c2659e](https://github.com/studioalva-dev/bni-dashboard/commit/8c2659ead3c56a84d4ad88a1ca075bc7476f8161))
* **sso:** 💄 adjust connect and remove service UI ([#56](https://github.com/studioalva-dev/bni-dashboard/issues/56)) ([0a37d10](https://github.com/studioalva-dev/bni-dashboard/commit/0a37d10bec9ae16bf5f07a6204e5f4ea26cff1c2))
* **sso:** add needcorporate checking for connect channel ([#54](https://github.com/studioalva-dev/bni-dashboard/issues/54)) ([5633b05](https://github.com/studioalva-dev/bni-dashboard/commit/5633b05bbce6289ed5f8dd2ae67d425d607f3119))
* **widget:** add ResponsiveTable component ([#53](https://github.com/studioalva-dev/bni-dashboard/issues/53)) ([c999c49](https://github.com/studioalva-dev/bni-dashboard/commit/c999c49246a10352fbebc185fbe99a2765e70cf6))

### [0.1.4](https://github.com/studioalva-dev/bni-dashboard/compare/v0.1.3...v0.1.4) (2022-06-09)


### Features

* **auth:** 💄 add image carousel to login and forgot password page ([#51](https://github.com/studioalva-dev/bni-dashboard/issues/51)) ([93b20b4](https://github.com/studioalva-dev/bni-dashboard/commit/93b20b4c6720689e61f14ef765bc4c2b1d5ec58f))
* **auth:** add change password page ([#27](https://github.com/studioalva-dev/bni-dashboard/issues/27)) ([3fdf857](https://github.com/studioalva-dev/bni-dashboard/commit/3fdf8573db965c4748fb055fe9caee292c4c40ef))
* **auth:** add generic error message ([#42](https://github.com/studioalva-dev/bni-dashboard/issues/42)) ([8167ccb](https://github.com/studioalva-dev/bni-dashboard/commit/8167ccbd0a2db8289b37497d855a2ee6f68fb032))
* **calendar:** integrate with api ([#22](https://github.com/studioalva-dev/bni-dashboard/issues/22)) ([726e050](https://github.com/studioalva-dev/bni-dashboard/commit/726e0500dff4f92432e3e4c9efd3cc83100f700f))
* **layout:** add mobile header ([#32](https://github.com/studioalva-dev/bni-dashboard/issues/32)) ([07f2775](https://github.com/studioalva-dev/bni-dashboard/commit/07f277589f95f4f9ce0a04624ef510f9ea9421f1))
* **layout:** add PageTitle component ([#43](https://github.com/studioalva-dev/bni-dashboard/issues/43)) ([ab02160](https://github.com/studioalva-dev/bni-dashboard/commit/ab02160746f636aa57a0d00b0258c5c2f1a14a4a))
* **layout:** masonry layout for widgets ([#46](https://github.com/studioalva-dev/bni-dashboard/issues/46)) ([e00c7b2](https://github.com/studioalva-dev/bni-dashboard/commit/e00c7b2f9fa9fcb957c3964222db591bfb519a15))
* **sso:** add redirect integration ([#36](https://github.com/studioalva-dev/bni-dashboard/issues/36)) ([877e6d0](https://github.com/studioalva-dev/bni-dashboard/commit/877e6d02eb8c5fbffd3c3a2f1cbae3e4d8caee85))
* **sso:** hide unused settings button in channel list option ([#48](https://github.com/studioalva-dev/bni-dashboard/issues/48)) ([7e4666b](https://github.com/studioalva-dev/bni-dashboard/commit/7e4666bad5a4f0299ff5feb1074bb18270b4fa61))
* **sso:** integrate channel selection ([#39](https://github.com/studioalva-dev/bni-dashboard/issues/39)) ([178ea64](https://github.com/studioalva-dev/bni-dashboard/commit/178ea642876818509728e95083a88c23e6fe8c79))
* **user-management:** slicing UI for user management  ([#23](https://github.com/studioalva-dev/bni-dashboard/issues/23)) ([dabda92](https://github.com/studioalva-dev/bni-dashboard/commit/dabda922ce5b5681041724468c680345cfd792cb))
* **widget:** add bar chart ([#44](https://github.com/studioalva-dev/bni-dashboard/issues/44)) ([13b7c9d](https://github.com/studioalva-dev/bni-dashboard/commit/13b7c9db3b9ea06b0d06fd66b782d47dafb2a88d))
* **widget:** add GridList and VerticalList view ([#45](https://github.com/studioalva-dev/bni-dashboard/issues/45)) ([40c43d2](https://github.com/studioalva-dev/bni-dashboard/commit/40c43d2e143cf1179b2924e5e53292dad0c819a0))
* **widget:** add LineChart and ProgressChart ([#34](https://github.com/studioalva-dev/bni-dashboard/issues/34)) ([d584da0](https://github.com/studioalva-dev/bni-dashboard/commit/d584da0ba02342ddbade44a952bf1fff5dd32eec))
* **widget:** add routes for individual page ([#47](https://github.com/studioalva-dev/bni-dashboard/issues/47)) ([f160a57](https://github.com/studioalva-dev/bni-dashboard/commit/f160a5797a2e66f6bf2d605f7c0d1aececda4f84))


### Bug Fixes

* **calendar-input:** handle input form endDate and endTime ([#21](https://github.com/studioalva-dev/bni-dashboard/issues/21)) ([c09b37b](https://github.com/studioalva-dev/bni-dashboard/commit/c09b37b73bfcf75493fe9ac5c4fdc4404c5a289f))
* **calendar:** handle error from api response, set zIndex header, and integrate api next month ([#38](https://github.com/studioalva-dev/bni-dashboard/issues/38)) ([70acde2](https://github.com/studioalva-dev/bni-dashboard/commit/70acde2c102947fc9685ee7c5d42723f956744ef))
* **user-management:** update UI to the latest one, and styling ([#25](https://github.com/studioalva-dev/bni-dashboard/issues/25)) ([576d8f9](https://github.com/studioalva-dev/bni-dashboard/commit/576d8f9e060d24598c592564dea5a81eeefe3399))


### Improvements

* **api:** put response interceptor through axios interceptor ([#24](https://github.com/studioalva-dev/bni-dashboard/issues/24)) ([8a8c45b](https://github.com/studioalva-dev/bni-dashboard/commit/8a8c45b252519cd21fa6313e5c161081003156cc))
* **auth:** add error toast ([#33](https://github.com/studioalva-dev/bni-dashboard/issues/33)) ([56546a9](https://github.com/studioalva-dev/bni-dashboard/commit/56546a9cf756efb599a8729c64714f142462ab4f))
* **auth:** adjust email field position in forgot password form ([d324718](https://github.com/studioalva-dev/bni-dashboard/commit/d324718afee54f34c3c2e83a5b1495b65dabdd7e))
* **auth:** adjust forgot password UI and integration ([#26](https://github.com/studioalva-dev/bni-dashboard/issues/26)) ([19ed423](https://github.com/studioalva-dev/bni-dashboard/commit/19ed423352eadeacf91b4b8281a51ac517a84b9e))
* **layout:** add landing layout, reduce re-render layout for each path ([#49](https://github.com/studioalva-dev/bni-dashboard/issues/49)) ([b2a31a8](https://github.com/studioalva-dev/bni-dashboard/commit/b2a31a88a7079e3d1ad406cae946d585e2a8cda1))
* **sso:** adjust redirect form attribute name ([#41](https://github.com/studioalva-dev/bni-dashboard/issues/41)) ([75b4b82](https://github.com/studioalva-dev/bni-dashboard/commit/75b4b822f0893e12b073e92b9b588a401d63e0af))
* **sso:** re-enable connected channel list api call ([#31](https://github.com/studioalva-dev/bni-dashboard/issues/31)) ([caf64ac](https://github.com/studioalva-dev/bni-dashboard/commit/caf64aca7f9537ce607020b5113b3bbea822e191))
* **sso:** temporarily use hardcoded channel selection for connect service ([#28](https://github.com/studioalva-dev/bni-dashboard/issues/28)) ([f50d46e](https://github.com/studioalva-dev/bni-dashboard/commit/f50d46e64d7e7608dd911faf2cd129027dd6edc5))

### [0.1.3](https://github.com/studioalva-dev/bni-dashboard/compare/v0.1.2...v0.1.3) (2022-05-29)


### Features

* **layout:** slicing shell UI ([#19](https://github.com/studioalva-dev/bni-dashboard/issues/19)) ([d394555](https://github.com/studioalva-dev/bni-dashboard/commit/d3945558021c75805366e01cad6960adba683b99))


### Bug Fixes

* **sso:** disable temporary for get connected channels ([36fe023](https://github.com/studioalva-dev/bni-dashboard/commit/36fe023ab84844c235301989109b1f3cc3ca095f))


### Improvements

* **sso:** adjust sso components styling ([#20](https://github.com/studioalva-dev/bni-dashboard/issues/20)) ([0c03281](https://github.com/studioalva-dev/bni-dashboard/commit/0c03281f81ee1564cc03196ea87cd622c77c9e2a))
* **sso:** prevent close when request is being processed ([#18](https://github.com/studioalva-dev/bni-dashboard/issues/18)) ([29f8a92](https://github.com/studioalva-dev/bni-dashboard/commit/29f8a92fa7321dc38402a72ec6f174fa8deb7c48))

### [0.1.2](https://github.com/studioalva-dev/bni-dashboard/compare/v0.1.1...v0.1.2) (2022-05-29)


### Features

* **sso:** ✨ add connected channels and remove channel ([#15](https://github.com/studioalva-dev/bni-dashboard/issues/15)) ([3e49824](https://github.com/studioalva-dev/bni-dashboard/commit/3e498240ecbfc9ab783453cf7bc334c30c344583))
* **sso:** ✨ integrate connect service ([#14](https://github.com/studioalva-dev/bni-dashboard/issues/14)) ([610b50d](https://github.com/studioalva-dev/bni-dashboard/commit/610b50d693d636b1177de875901284e83cc4d496))


### Improvements

* **sso:** add loading state for connect request ([#16](https://github.com/studioalva-dev/bni-dashboard/issues/16)) ([412136b](https://github.com/studioalva-dev/bni-dashboard/commit/412136bcaba0501370a36cbeb989d996b0662906))

### 0.1.1 (2022-05-28)


### Features

* add basic layout ([0d18c06](https://github.com/studioalva-dev/bni-dashboard/commit/0d18c06813478f9a03cb458b61702cf39f2bc0fa))
* **auth:** ✨ add forgot password page ([#12](https://github.com/studioalva-dev/bni-dashboard/issues/12)) ([1431403](https://github.com/studioalva-dev/bni-dashboard/commit/1431403a1f8192fea00e0c59b4dc0342e2421fac))
* **auth:** basic login flow ([#3](https://github.com/studioalva-dev/bni-dashboard/issues/3)) ([ed3581c](https://github.com/studioalva-dev/bni-dashboard/commit/ed3581cdecb0583c60752cc3fa51633b65bfaa73))
* **auth:** integrate logout ([#7](https://github.com/studioalva-dev/bni-dashboard/issues/7)) ([ebb1cc6](https://github.com/studioalva-dev/bni-dashboard/commit/ebb1cc6a4fde9da57297bd4b878873fbca0f5419))
* **auth:** integrate submit login ([#6](https://github.com/studioalva-dev/bni-dashboard/issues/6)) ([bc7d930](https://github.com/studioalva-dev/bni-dashboard/commit/bc7d9307d83d8c9a77906f7e4ac44add42ccff72))
* **auth:** slicing UI login form ([#11](https://github.com/studioalva-dev/bni-dashboard/issues/11)) ([80757cc](https://github.com/studioalva-dev/bni-dashboard/commit/80757cc4d6828fba46c26fd62c8081fcec9ec517))
* **calendar:** add calendar page ([#4](https://github.com/studioalva-dev/bni-dashboard/issues/4)) ([948530b](https://github.com/studioalva-dev/bni-dashboard/commit/948530b78a53b597dd4b908bdfb61a79898c8cdd))
* **sso:** add first time login onboarding ([#13](https://github.com/studioalva-dev/bni-dashboard/issues/13)) ([09dbee3](https://github.com/studioalva-dev/bni-dashboard/commit/09dbee3e699b9e61ce8d463912b10d6a850a7798))
* **sso:** slicing UI for connect service ([#2](https://github.com/studioalva-dev/bni-dashboard/issues/2)) ([e180eef](https://github.com/studioalva-dev/bni-dashboard/commit/e180eef8a19300d3c90e18129845f309363b4f1f))


### Bug Fixes

* **auth:** get latest token ([#8](https://github.com/studioalva-dev/bni-dashboard/issues/8)) ([11938c5](https://github.com/studioalva-dev/bni-dashboard/commit/11938c5c0625e45ebaa746c3aa85b47ce76880f2))
