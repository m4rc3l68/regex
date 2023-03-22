`Caracteres especiais utilizadas em expressões regulares.`

\
Aplicado conforme as seguintes regras:

Uma barra invertida que preceda um caractere não especial significa que o caractere seguinte é especial e não deve ser interpretado de forma literal. Por exemplo, o caractere 'b' quando não precedido de uma barra invertida significará uma ocorrência do próprio caractere 'b' minúsculo, porém se precedido da barra invertida '\b' ele passará a significar a ocorrência do caractere especial [fronteira do caractere](#special-word-boundary).

Quando a barra invertida preceder um caractere especial isso significará que o próximo caractere deve ser interpretado de forma literal. Por exemplo o padrão /a*/, que selecionará a ocorrência de zero ou mais caracteres 'a' quando utilizado sem a \ para escape. Por outro lado no padrão /a\*/ o asterisco deixa de ter seu significado especial, pois a '\' de escape fará com que o '*' seja interpretado de forma literal, passando o padrão a selecionar o caractere 'a' seguido do caractere '\*'.

Quando utilizar o construtor RegExp("padrao"), não se esqueça de fazer o escape do caractere \, já que esse caractere é também utilizado como caractere de escape em strings.

^
Corresponde ao início do texto. Se a flag multilinhas é setada para true, também se aplica imediatamente após um caractere de quebra de linha.

Por exemplo, /^A/ não corresponde ao 'A' em "Um Alvo", mas corresponde ao 'A' em "Alvo Encontrado".

Este caractere tem um significado diferente quando aparece como o primeiro caractere em um conjunto padrão de caracteres. Veja conjunto de caracteres negados ou complementados para detalhes e mais exemplos.

$
Corresponde ao final do texto. Se a flag multilinhas é setada para true, também se aplica imediatamente antes de um caractere de quebra de linha.

Por exemplo, /r$/ não corresponde ao 'r' em "corre", mas acha correspondência em "correr".

-\*-
Corresponde a expressão que o precede repetida 0 ou mais vezes. Equivalente a {0,}

Por exemplo, /bo\*/ acha uma correspondência para 'boooo' em "Scoob doo" e 'b' em "A bird warbled", mas nenhuma em "A goat grunted".

-\+-
Corresponde a expressão que o precede repetido 1 ou mais vezes. Equivalente a {1,}.

Por exemplo, /a+/ acha correspondência para o 'a' em "candy" e todos os "as" em "caaaaaaandy", mas nâo encontra em "cn

?
Corresponde a expressão que o precede repetido 0 ou 1 vez. Equivalente à {0,1}.

Por exemplo, /e?le?/ encontra o 'el' em "angel" e o 'le' em "angle" e também o 'l' em "oslo".

Se usado imediatamente após qualquer um dos quantificadores \*, +, ? ou {}, faz o quantificador não guloso (combinando o número mínimo de vezes), como um oposto para o padrão que é guloso (combinar o número máximo possível). Por exemplo, aplicando /\d+/ em "123abc" encontra "123". Mas aplicando /\d+?/, apenas "1" será encontrado.

Também usado em declarações lookahead, descritas sob x(?=y) e x(?!y)logo abaixo na tabela.

.
(O ponto decimal) corresponde com qualquer caracter, exceto o caracter de nova linha.

Por exemplo, /.n/ acha correspondência para o 'an' e 'on' em "nove dias restantes para onze de agosto.", mas não encontra 'no' em 'nove'.

(x)
Pesquisa correspondência com o caractere 'x' e memoriza-o, como a o exemplo a seguir mostra. Os parênteses são chamados parênteses de captura.

Por exemplo, o '(foo)' e '(bar)' no padrão /(foo) (bar) \1 \2/ encontra e memoriza a primeira das duas palavras na string "foo bar foo bar". O \1 e \2 no padrão combina as duas últimas palavras da string. Note que \1, \2, \n são utilizados na parte correspondente do regex.

(?:x)
Pesquisa correspondência com o caractere 'x' porém não o memoriza. Os parênteses são chamados de parênteses de não-captura e permitem que você defina uma subexpressão para operadores de expressão regular trabalhar com eles. Considere essa expressão de exemplo /(?:foo){1,2}/. Se a expressão era /foo{1,2}/, o {1,2} poderia ser aplicado apenas para o último 'o' em 'foo'. Com os parênteses de não-captura, o {1,2} é aplicado para toda a palavra 'foo'.

x(?=y)
Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y'. Isso é chamado de lookahead->Olhe para frente.

Por exemplo, /Jack(?=Sprat)/ busca 'Jack' apenas se é seguido por 'Sprat'. /Jack(?=Sprat|Frost)/ busca 'Jack' apenas se ele é seguido por 'Sprat' ou 'Frost'. No entanto, 'Sprat' nem 'Frost' faz parte do resultado retornado.

x(?!y)
Pesquisa correspondência em 'x' apenas se 'x' NÃO é seguido por 'y'. Isso é chamado negação lookahead->Não olhe para frente.

Por exemplo, /\d+(?!\.)/ encontra um número apenas se ele não for seguido por um ponto decimal. A expressão regular /\d+(?!\.)/.exec("3.141") encontra '141' mas não '3.141'.

x|y
Pesquisa correspondência em 'x' ou 'y'.

Por exemplo, /verde|vermelha/ encontra 'verde' em "maçã verde" e 'vermelha' em "maçã vermelha."

{n}
Pesquisa n ocorrências correspondentes ao caracter precedido. Onde, n deve ser um inteiro positivo.

Por exemplo, /a{2}/ não encontra o 'a' em "candy," mas encontra-o se houver a quantidade de a's informarda em "caandy," e os dois primeiros a's em "caaandy."

{n,m}
Pesquisa a n menor correspondência e a m maior correspondência do caractere precedido. Quando n ou m é zero, ele poderá ser omitido. Onde, n e m devem ser inteiros positivo.

Por exemplo, /a{1,3}/ não encontra nada em "cndy", mas encontra o 'a' em "candy", encontra os dois primeiros a's em "caandy," e encontra os três primeiros a's em "caaaaaaandy". Observe que, ao fazer a correspondência de "caaaaaaandy", serão encontrados apenas os "aaa", mesmo que a string tenha mais a's.

[xyz]
Um CONJUNTO de caracteres. Pesquisa correspondência para qualquer um dos caracteres entre colchetes. Você pode especificar um intervalo de caracteres usando hífen. Caracteres especiais (como o ponto (.) e o asterisco(\*)) não tem significado algum quando está dentro de um CONJUNTO de caracteres. Não necessita utilizar escape neles. Mas, se utilizar escape também irá funcionar.

Por exemplo, [abcd] é o mesmo que [a-d]. Com a expressão será encontrado o 'b' em "beijo" e o 'c' em "chop". A expressão /[a-z.]+/ e /[\w.]+/ ambos encontraram as letras que formam "test.i.ng".

[^xyz]
Um conjunto de caracteres negados ou complementados. Isto é, combina com qualquer coisa que não esteja listado entre os colchetes. Você pode especificar um intervalo de caracteres usando hífen. Tudo que funciona no conjunto de caracteres (apresentado acima) também funciona aqui.

Por exemplo, [^abc] é o mesmo que [^a-c]. Com a expressão será encontrado inicialmente 'e' em "beijo" e 'h' em "chop."

[\b]
Pesquisa correspondência com espaço em branco (U+0008). É preciso utilizar os colchetes se você quer encontrar um espaço em branco. (Não confunda-o com \b.)

\b
Pesquisa correspondência em uma fronteira de caractere. Uma fronteira de caractere corresponde a posição onde um caractere/palavra não é seguido ou antecedido por outro caractere/palavra. Isto é, em fronteira de caractere não pode haver nenhum caractere ou espaço, seu tamanho deve ser vazio. (não confunda-o com [\b].)

Exemplos:
/\bmoo/ encontra a substring 'moo' em "moon" ;
/oo\b/ não encontra o 'oo' em "moon", devido o 'oo' ser seguido por 'n' que é um caractere;
/oon\b/ encontra a substring 'oon' em "moon", devido 'oon' ser o fim da string, ou seja, não é seguido por nenhum caractere;
/\w\b\w/ não encontrará nada, pois o caractere nunca será seguido por um não caractere e um caractere.

Nota: O mecanismo de expressão regular no JavaScript define um conjunto específico de caracteres para serem caracteres "palavras". Qualquer caractere que não esteja neste conjunto é considerado uma quebra de palavra. Este conjunto de caractere é bastante limitado: consiste apenas no alfabeto romano tanto maiúsculo como minúsculo, digítos decimais, e o caractere sublinhado. Caracteres acentuados, tal como "é" ou "ã" são, infelizmente, tratados como palavras quebradas.

\B
Pesquisa correspondência que não seja em uma fronteira de caractere. Para a correspondência é associada uma posição onde o caractere anterior e o próximo tem as mesmas características: ambos são caractere/palavra, ou ambos não sejam caractere/palavra. O início e o fim de uma string não considerados como não caractere/palavra.

Por exemplo, /\B../ encontra correspondente 'oo' em "boolean", e /y\B./ encontra correspondente 'ye' em "possibly yesterday."

\cX
Onde X é um caractere pertencente ao conjunto A-Z. Encontra correspondência de um caractere de controle em uma string.

Por exemplo, /\cM/ encontra correspondente control-M (U+000D) em uma string.

\d
Encontra correspondência com um número. Equivalente a [0-9].

Por exemplo, /\d/ ou /[0-9]/ encontra correspondente '8' em "Dróide BB8".

\D
Encontra correspondência com um caractere que não seja número. Equivalente a [^0-9].

Por exemplo, /\D/ ou /[^0-9]/ econtra correspondente 'C' em "C3 está ativada."

\f
Encontra correspondência com um caractere de escape avanço de página (U+000C).

\n
Encontra correspondência com um caractere de escape quebra de linha (U+000A).

\r
Encontra correspondência com um caractere de escape retorno de carro (U+000D).

\s
Encontra correspondência com um único caractere de espaço em branco, espaço, tabulação, avanço de página, quebra de linha. Equivalente a [ \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000].

Por exemplo, /\s\w\*/ encontra correspondente ' bar' em "foo bar."

\S
Encontra correspondência em um único caractere que não seja espaço em branco. Equivalente a [^ \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000].

Por exemplo, /\S\w\*/ encontra correspondente 'foo' em "foo bar."

\t
Encontra correspondência em uma tabulação (U+0009).

\v
Encontra correspondência em uma tabulação vertical (U+000B).

\w
Encontra correspondência de qualquer caractere alfanumérico incluindo underline. Equivalente a [A-Za-z0-9_].

Por exemplo, /\w/ encontra correspondente 'a' em "apple," '5' em "$5.28," e '3' em "3D."

\W
Encontra correspondência em um não caractere. Equivalente a [^a-za-z0-9_].

Por exemplo, /\W/ ou /[^a-za-z0-9_]/ encontra correspondente '%' em "50%."

\num
Onde num é um inteiro positivo. Faz referência a substring pertencente à um grupo. Um grupo é definido entre (parênteses). Grupos são numerados de 1 até 9.

Por exemplo, /(muito) (cacique) pra \2 \1/ encontra 'muito cacique pra cacique muito' em 'Na aldeia tem muito cacique pra cacique muito.'

\xhh
Encontra correspondência com o código hh (dois valores hexadecimal).

\uhhhh
Encontra correspondência com o código hhh (três valores hexadecimal).

\u{hhhh} (funciona apenas com a flag u) Encontra correspondência com o valor Unicode hhhh (dígitos hexadecimais).

`Usando Parênteses`
Usar parênteses em volta de qualquer parte de uma expressão regular faz com que essa parte seja lembrada para ser usada depois, como descrito em Usando as Substrings entre Parênteses na Expressão Regular.

Por Exemplo, a expressão /Capitulo (\d+)\.\d*/ ilustra caracteres adicionais escapados e especiais e indica que parte do padrão deve ser lembrado. Corresponde precisamente aos caracteres 'Capitulo ' seguidos por um ou mais caracteres numéricos (\d significa qualquer caracter numérico e + significa 1 ou mais vezes), seguidos por um ponto decimal (que é um caracter especial; preceder com um \ significa que a expressão regular deve buscar pelo caracter literal '.'), seguido por qualquer caracter numérico 0 ou mais vezes (\d significa caracter numérico, * significa 0 ou mais vezes). Além disso, os parenteses são usados para relembrar os primeiros caracteres numéricos correspondentes.

Esse padrão é encontrado em "Abra o capitulo 4.3, parágrafo 6" o '4' é relembrado. O padrão não é encontrado em "Capitulo 3 e 4", porque essa string não tem um período após o '3'.

Para encontrar uma substring sem que a correspondência seja relembrada, dentro dos parênteses inicie o padrão com ?:. Por exemplo, (?:\d+) corresponde a um ou mais caracteres numéricos mas não relembra os caracteres correspondentes.

`Trabalhando com expressões regulares`
Expressões Regulares são usadas com os metodos test e exec do objeto RegExpe com os metodos match, replace, search, e split do objeto String. Estes metodos são explicados em detalhe em JavaScript Reference.

Metodo Descrição
exec (en-US) Um método RegExp que execute uma pesquisa por uma correspondência em uma string. _Retorna um array de informações_.
test (en-US) Um método RegExp que testa uma correspondência em uma string. _Retorna true ou false_.
match (en-US) Um método String que executa uma pesquisa por uma correspondência em uma string. _Retorna uma array de informações ou null_ caso não haja uma correspondência.
search (en-US) Um método String que testa uma correspondência em uma string. _Retorna o indice da correspondência ou -1_ se o teste falhar.
replace (en-US) Um método String que executa uma pesquisa por uma correspondência em uma string, e substitui a substring correspondênte por uma substring de substituição.
split (en-US) Um método String que usa uma expressão regular ou uma string fixa para quebrar uma string dentro de um array de substrings.
Quando você quer saber se um padrão é encontrado em uma string, use o método _test_ ou _search_; para mais informações (mas execução mais lenta) use o método exec ou match. Se você usar exec ou match e se houver correspondência, estes métodos retornam um array e atualizam as propriedades do objeto da expressão regular associada e também do objeto da expressão regular pre-definida RegExp. Se não houver corespondência, o método exec retorna null (convertido para false).

# Resultado usando o método .exec() de RegExp.

PS C:\Users\marce\regex\js> node regex.js
[ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
[ 'dbb', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
[ 'dbbd', 'bb', index: 1, input: 'cdbbdbsbz', groups: undefined ]
