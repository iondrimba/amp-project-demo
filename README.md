# HackDay - AMP Project Demo

## DOCS
* [AMP]
* [AMP-SAMPLES]

####  Objetivos

  - Verificar a possibilidade de implementar AMP nas páginas do Triborg
  - Verificar o esforço para tornar páginas de categorias em AMP
  - Fazer o translate automátizado das páginas do triborg para AMP via um serviço na hora de servir o html

![untitled-2](https://cloud.githubusercontent.com/assets/178548/24027368/cf438010-0aa5-11e7-8023-f68d9fda833e.jpg)

![untitled1-2](https://cloud.githubusercontent.com/assets/178548/24027392/f93345b8-0aa5-11e7-92c8-c373c29e7485.jpg)



 ##### Mudanças
* Remover todos scripts e stylesheet Tags

```html
<html [amp] lang="en">
```
```html
<meta charset="utf-8">
<script async src="https://cdn.ampproject.org/v0.js">
 ```
 * Para formulários
 ```html
 <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
 ```
 * Não permitidos
 ```html
 <input type=button>
 <input type=file>
 <input type=image>
 <input type=password>
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
       "http://image.svg"
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
<amp-img src="http://image.svg" [ width="87"]  [ height="18"]  alt="GetNinjas"></amp-img>
```

* Before - Picture components

```html
<picture class="media__image thumbnail__photo picture picture--cover">
    <source srcset="http://image_720x340.jpg"
    media="(min-resolution: 192dpi)" />
    <source srcset="http://image_360x170.jpg"
    media="(max-resolution: 191dpi)" />
    <img src="http://image_360x170.jpg"
    class="picture__image" alt="Controle de jardim">
 </picture>
```

* After - Picture components
```html
<div class="media__image thumbnail__photo picture picture--cover">
    <amp-img src="http://image.jpg"
    srcset="http://image 360w,http://image 720w"
    width="360"
    height="170"
    class="picture__image"
    alt="Controle de jardim"></amp-img>
 </div>
```
```html
<form id="request-form" class="form container" method="post" [ action-xhr="https://example.com/subscribe" ] target="_top">
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
