# HackDay - AMP Project Demo

## DOCS
* [AMP]
* [AMP-SAMPLES]

####  Objetivos

  - Verificar a possibilidade de implementar AMP nas páginas do Triborg
  - Verificar o esforço para tornar páginas de categorias em AMP

 ##### Mudanças
* Remover todos script e link rel="stylesheet" Tags

```html
<html [amp] lang="en">
```
```html
<meta charset="utf-8">
<script async src="https://cdn.ampproject.org/v0.js">
 ```
```html
<meta name="viewport" content="width=device-width,  [minimum-scale=1], initial-scale=1.0" />
```
```html
<link rel="canonical" href="//canonical" />
```
```html
<script type="application/ld+json">
{
     "@context": "http://schema.org",
     "@type": "NewsArticle",
     "headline": "Automatização residencial- tenha o controle da sua casa na sua mão",
     "datePublished": "2015-10-07T12:02:41Z",
     "image": [
       "https://cms-images.getninjas.com.br/uploads/cluster/icon_file_name/1/2912711d8edef97d19342d3b268a5fcf.svg"
     ]
}
</script>
```

```html
<style [amp-custom]>
    ALL STYLE INLINE
</style>
```
* AMP Boilerplate
```html
<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
```

* All images become **<amp-img></amp-img>**
```html
<amp-img src="https://cms-assets.getninjas.com.br/assets/getninjas-da43884dec4918b4bc2777518b6da17597f5f2e2d75cec8f141271c746c5207b.svg" [ width="87"]  [ height="18"]  alt="GetNinjas"></amp-img>
```

* Before - Picture components

```html
<picture class="media__image thumbnail__photo picture picture--cover">
    <source srcset="https://cms-images.getninjas.com.br/uploads/component/detailed_image/image/94/f70b47bb6d852cf195ef32759f0495e9_720x340.jpg"
    media="(min-resolution: 192dpi)" />
    <source srcset="https://cms-images.getninjas.com.br/uploads/component/detailed_image/image/94/f70b47bb6d852cf195ef32759f0495e9_360x170.jpg"
    media="(max-resolution: 191dpi)" />
    <img src="https://cms-images.getninjas.com.br/uploads/component/detailed_image/image/94/f70b47bb6d852cf195ef32759f0495e9_360x170.jpg"
    class="picture__image" alt="Controle de jardim">
 </picture>
```

* After - Picture components
```html
<div class="media__image thumbnail__photo picture picture--cover">
    <amp-img src="https://cms-images.getninjas.com.br/uploads/component/detailed_image/image/94/f70b47bb6d852cf195ef32759f0495e9_360x170.jpg"
    srcset="https://cms-images.getninjas.com.br/uploads/component/detailed_image/image/94/f70b47bb6d852cf195ef32759f0495e9_360x170.jpg 360w,
    https://cms-images.getninjas.com.br/uploads/component/detailed_image/image/94/f70b47bb6d852cf195ef32759f0495e9_720x340.jpg 720w"
    width="360"
    height="170"
    class="picture__image"
    alt="Controle de jardim"></amp-img>
 </div>
```

```html
<amp-youtube width="480"
    height="270"
    layout="responsive"
    data-videoid="v89Ak2GUP-A">
</amp-youtube>
```

[AMP]: <https://www.ampproject.org/>
[AMP-SAMPLES]: <https://ampbyexample.com/>
