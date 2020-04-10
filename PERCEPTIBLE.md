# Documento para el análisis del criterio Percetptible  (WCAG 2.1)
    El objetivo de este documento es localizar faltas de accesibilidad 
    según el perceptible operable  de la WCAG



## Ejemplos de inclumplimiento de verificación A y AA


**Página web x: [traductor inglés-español Linguee](hhttps://www.deepl.com/translator)**


- No se cumple la pauta 1.1.1, que trata de ofrecer alternativas a contenido no textual
>   **1.1.1 Proporcionar equivalentes textuales**
>   En este caso varias de las imágenes de la página principal en la que nos encontramos
>   no tienen campo *alt* ni *tile* ni ninguna otra de las alternativas para este propósito.

```html
<img id="section4img" class="sectionimg" src="https://d1wigddrwdtsce.cloudfront.net/img5/about/chapter3p.jpg">
```

![miss-image-support](media/img/captura-linguee-imagen.PNG "En la imagen se muestra la ausencia de un campo de soporte para la alternativa textual a la imagen")

>   Además un video de presentación no tieneuna etiqueta *<track>* que se emplea para
>   incluir subtítulos que dan apoyo a las personas que requieren de una narración de la 
>   imágen. 
```html
<video src="https://d1wigddrwdtsce.cloudfront.net/img5/about/EN-ES/iOS-s.mp4" loop="" id="iPhoneGrossI"></video>
```

## Ejemplos de cumplimiento de verificación A y AA

**Página web x: [traductor inglés-español Linguee](hhttps://www.deepl.com/translator)**


- Se cumple la pauta 1.4, que trata sobre la facilidad de pericibir el contenido de la web
>   **1.4.3 Contraste mínimo**
>   Este criterio lo consideramos cumplido ya que existe bastante contraste entre los 
>   distintos elementos de la página inicial de la web. Se muestra un tono azul oscuro sobre
>   blanco.

![contrast-example-image](media/img/criterio-contraste-cumplido.png "imagen de demostración de cumplimiento del criterio 1.4.3 sobre el contraste en la página") 