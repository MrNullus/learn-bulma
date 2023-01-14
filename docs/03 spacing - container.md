# Learn Bulma


## Spacing & Containers


### Spacing

#### Padding
Para mexer nesse espaçamento usa-se a diretiva: `p<direction>-<value>`
	
	- `<direction>` direção do padding, se não informado será o `<value>` será colocado em todas as direções do elemento;
	-  `<value>` valor do padding a ser inserido;

##### Directions 
- `py-<value>`
	- Mexer na direção `y` do elemento, isto é, colocar padding no top e no bottom dele

- `px-<value>`
	- Mexer na direção `x` do elemento, isto é, colocar padding no left e no right dele

+ **Exemplos**: 
```html
<p class="p-6">
	Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum aspernatur iste, obcaecati?
</p>
<h1 class="py-6">Hello, Bulma</h1>
<h2 class="px-4 py-2">Hello, Bulma</h2>
```


<br>
<hr>


### Containers