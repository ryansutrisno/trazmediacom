## [1.2.3](https://github.com/ryansutrisno/trazmediacom/compare/v1.2.2...v1.2.3) (2026-08-07)

### Bug Fixes

* add w-full to terminal pre to prevent width change during typing ([9f876aa](https://github.com/ryansutrisno/trazmediacom/commit/9f876aaa355d78dba9eb8f0ef3c2ba6a1b1dd146))

## [1.2.2](https://github.com/ryansutrisno/trazmediacom/compare/v1.2.1...v1.2.2) (2026-08-07)

### Bug Fixes

* add min-height to terminal pre to prevent resize during typing animation ([244baa3](https://github.com/ryansutrisno/trazmediacom/commit/244baa379cb8c239eb1e2ef3bea8665b22eb3d92))

## [1.2.1](https://github.com/ryansutrisno/trazmediacom/compare/v1.2.0...v1.2.1) (2026-08-07)

### Bug Fixes

* rewrite terminal typing animation with reliable character-by-character typewriter ([ecb7d5c](https://github.com/ryansutrisno/trazmediacom/commit/ecb7d5c1ee9dd45a43b1df3e79ac10ba02afacf2))

## [1.2.0](https://github.com/ryansutrisno/trazmediacom/compare/v1.1.1...v1.2.0) (2026-08-07)

### Features

* add typing animation with scramble effect to hero terminal code ([6a3d986](https://github.com/ryansutrisno/trazmediacom/commit/6a3d9865046062fed62cd4bf1f669091195773dc))

## [1.1.1](https://github.com/ryansutrisno/trazmediacom/compare/v1.1.0...v1.1.1) (2026-08-07)

### Chores

* update og-image paths to use Thumbnail-Trazmedia files ([3e51254](https://github.com/ryansutrisno/trazmediacom/commit/3e51254323a37b66a44d628bb48952df9cbe2ebe))

## [1.1.0](https://github.com/ryansutrisno/trazmediacom/compare/v1.0.0...v1.1.0) (2026-08-07)

### Features

* bilingual OG images with locale-specific taglines (ID/EN) ([5d7bc81](https://github.com/ryansutrisno/trazmediacom/commit/5d7bc81a2ad36e05f290cc6dbbf4b18377587b5c))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* enlarge favicon and add og-image, fix release tag conflict ([45ce28e](https://github.com/ryansutrisno/trazmediacom/commit/45ce28ea85d54c45bd56dfecbace4ed6af26cd6a))
* remove domain/hosting FAQ and fix release workflow node version ([d83f7fb](https://github.com/ryansutrisno/trazmediacom/commit/d83f7fbf4dcb945941d5daa1411f7ae4c8760e8b))
* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))
* replace default Astro favicon with Trazmedia logo SVG + ICO ([31f6363](https://github.com/ryansutrisno/trazmediacom/commit/31f63634c25a2de16f48edd6074d453c1b9ab95e))

### Performance Improvements

* replace raw img tags with Astro Image component for automatic optimization ([c286dc2](https://github.com/ryansutrisno/trazmediacom/commit/c286dc22ce033ee942a5b306c07c23c4f44afaea))

### Documentation

* comprehensive README with full project structure and design system ([8b67bce](https://github.com/ryansutrisno/trazmediacom/commit/8b67bce5d8792cd6ab98e14d6918dd98a0dceae6))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([2bfd4be](https://github.com/ryansutrisno/trazmediacom/commit/2bfd4bebdd9e6c9a8582345f2691ad49bf09b0e4))
* **release:** 1.0.0 [skip ci] ([13f735d](https://github.com/ryansutrisno/trazmediacom/commit/13f735d15d6dead292c2e380937a2dd16b668b65))
* **release:** 1.0.0 [skip ci] ([8a9aa9b](https://github.com/ryansutrisno/trazmediacom/commit/8a9aa9b0842ee0149ad6f20ddee33e46e6bd5f0c))
* **release:** 1.0.0 [skip ci] ([c6afad0](https://github.com/ryansutrisno/trazmediacom/commit/c6afad068b11d7ffca1bb6741b2457b312ea88f7))
* **release:** 1.0.0 [skip ci] ([285651a](https://github.com/ryansutrisno/trazmediacom/commit/285651a4b63d9a0807d861ccc1881804cb13d145))
* **release:** 1.0.0 [skip ci] ([3fd344a](https://github.com/ryansutrisno/trazmediacom/commit/3fd344a28e127a02526f20193ad4d7c0bbd8bedb))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))
* **release:** 1.0.1 [skip ci] ([30cc55a](https://github.com/ryansutrisno/trazmediacom/commit/30cc55a95617dac34ec5f276f68a0f038d22dab8))

## [1.0.1](https://github.com/ryansutrisno/trazmediacom/compare/v1.0.0...v1.0.1) (2026-08-07)

### Performance Improvements

* replace raw img tags with Astro Image component for automatic optimization ([c286dc2](https://github.com/ryansutrisno/trazmediacom/commit/c286dc22ce033ee942a5b306c07c23c4f44afaea))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* enlarge favicon and add og-image, fix release tag conflict ([45ce28e](https://github.com/ryansutrisno/trazmediacom/commit/45ce28ea85d54c45bd56dfecbace4ed6af26cd6a))
* remove domain/hosting FAQ and fix release workflow node version ([d83f7fb](https://github.com/ryansutrisno/trazmediacom/commit/d83f7fbf4dcb945941d5daa1411f7ae4c8760e8b))
* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))
* replace default Astro favicon with Trazmedia logo SVG + ICO ([31f6363](https://github.com/ryansutrisno/trazmediacom/commit/31f63634c25a2de16f48edd6074d453c1b9ab95e))

### Documentation

* comprehensive README with full project structure and design system ([8b67bce](https://github.com/ryansutrisno/trazmediacom/commit/8b67bce5d8792cd6ab98e14d6918dd98a0dceae6))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([13f735d](https://github.com/ryansutrisno/trazmediacom/commit/13f735d15d6dead292c2e380937a2dd16b668b65))
* **release:** 1.0.0 [skip ci] ([8a9aa9b](https://github.com/ryansutrisno/trazmediacom/commit/8a9aa9b0842ee0149ad6f20ddee33e46e6bd5f0c))
* **release:** 1.0.0 [skip ci] ([c6afad0](https://github.com/ryansutrisno/trazmediacom/commit/c6afad068b11d7ffca1bb6741b2457b312ea88f7))
* **release:** 1.0.0 [skip ci] ([285651a](https://github.com/ryansutrisno/trazmediacom/commit/285651a4b63d9a0807d861ccc1881804cb13d145))
* **release:** 1.0.0 [skip ci] ([3fd344a](https://github.com/ryansutrisno/trazmediacom/commit/3fd344a28e127a02526f20193ad4d7c0bbd8bedb))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* remove domain/hosting FAQ and fix release workflow node version ([d83f7fb](https://github.com/ryansutrisno/trazmediacom/commit/d83f7fbf4dcb945941d5daa1411f7ae4c8760e8b))
* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))
* replace default Astro favicon with Trazmedia logo SVG + ICO ([31f6363](https://github.com/ryansutrisno/trazmediacom/commit/31f63634c25a2de16f48edd6074d453c1b9ab95e))

### Documentation

* comprehensive README with full project structure and design system ([8b67bce](https://github.com/ryansutrisno/trazmediacom/commit/8b67bce5d8792cd6ab98e14d6918dd98a0dceae6))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([8a9aa9b](https://github.com/ryansutrisno/trazmediacom/commit/8a9aa9b0842ee0149ad6f20ddee33e46e6bd5f0c))
* **release:** 1.0.0 [skip ci] ([c6afad0](https://github.com/ryansutrisno/trazmediacom/commit/c6afad068b11d7ffca1bb6741b2457b312ea88f7))
* **release:** 1.0.0 [skip ci] ([285651a](https://github.com/ryansutrisno/trazmediacom/commit/285651a4b63d9a0807d861ccc1881804cb13d145))
* **release:** 1.0.0 [skip ci] ([3fd344a](https://github.com/ryansutrisno/trazmediacom/commit/3fd344a28e127a02526f20193ad4d7c0bbd8bedb))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* remove domain/hosting FAQ and fix release workflow node version ([d83f7fb](https://github.com/ryansutrisno/trazmediacom/commit/d83f7fbf4dcb945941d5daa1411f7ae4c8760e8b))
* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))
* replace default Astro favicon with Trazmedia logo SVG + ICO ([31f6363](https://github.com/ryansutrisno/trazmediacom/commit/31f63634c25a2de16f48edd6074d453c1b9ab95e))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([c6afad0](https://github.com/ryansutrisno/trazmediacom/commit/c6afad068b11d7ffca1bb6741b2457b312ea88f7))
* **release:** 1.0.0 [skip ci] ([285651a](https://github.com/ryansutrisno/trazmediacom/commit/285651a4b63d9a0807d861ccc1881804cb13d145))
* **release:** 1.0.0 [skip ci] ([3fd344a](https://github.com/ryansutrisno/trazmediacom/commit/3fd344a28e127a02526f20193ad4d7c0bbd8bedb))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* remove domain/hosting FAQ and fix release workflow node version ([d83f7fb](https://github.com/ryansutrisno/trazmediacom/commit/d83f7fbf4dcb945941d5daa1411f7ae4c8760e8b))
* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))
* replace default Astro favicon with Trazmedia logo SVG + ICO ([31f6363](https://github.com/ryansutrisno/trazmediacom/commit/31f63634c25a2de16f48edd6074d453c1b9ab95e))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([285651a](https://github.com/ryansutrisno/trazmediacom/commit/285651a4b63d9a0807d861ccc1881804cb13d145))
* **release:** 1.0.0 [skip ci] ([3fd344a](https://github.com/ryansutrisno/trazmediacom/commit/3fd344a28e127a02526f20193ad4d7c0bbd8bedb))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))
* replace default Astro favicon with Trazmedia logo SVG + ICO ([31f6363](https://github.com/ryansutrisno/trazmediacom/commit/31f63634c25a2de16f48edd6074d453c1b9ab95e))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([3fd344a](https://github.com/ryansutrisno/trazmediacom/commit/3fd344a28e127a02526f20193ad4d7c0bbd8bedb))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Bug Fixes

* remove white background from logo SVGs for transparency ([ddb4762](https://github.com/ryansutrisno/trazmediacom/commit/ddb4762c55d6a71fb7d512291b6786b39eb725e2))

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([8f82c2a](https://github.com/ryansutrisno/trazmediacom/commit/8f82c2aa406df1099c6ab39cc1499ffadfa0a7db))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)

### Chores

* add graphify analysis outputs and serena project config ([2903ed8](https://github.com/ryansutrisno/trazmediacom/commit/2903ed8196bd6530bfb3843daf9228d75c1f7c5a))
* **release:** 1.0.0 [skip ci] ([2a18792](https://github.com/ryansutrisno/trazmediacom/commit/2a18792f526dda546f19341dfec52f21ff416fdb))

## 1.0.0 (2026-08-07)

### ⚠ BREAKING CHANGES

* Complete stack migration from Next.js 10 to Astro + Tailwind v4.
Multi-page structure replaces single-page landing. All routes now under /id/ and /en/.

### Features

* initial bilingual website setup ([3959275](https://github.com/ryansutrisno/trazmediacom/commit/3959275215767b882f90c9dfc9badbb90b7ffd14)), closes [#1F29E4](https://github.com/ryansutrisno/trazmediacom/issues/1F29E4) [#2890FF](https://github.com/ryansutrisno/trazmediacom/issues/2890FF)
