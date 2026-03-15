# Alternar 2 Abas

Extensão simples para **alternar automaticamente entre duas abas do
navegador** em um intervalo fixo de tempo.

Útil para **exibir dashboards, gráficos ou páginas de monitoramento** em
um monitor ou TV conectada ao computador.

------------------------------------------------------------------------

## Funcionalidades

-   Alterna automaticamente entre **duas abas da mesma janela**
-   Controle simples **ON / OFF** clicando no ícone da extensão
-   Não depende de **pop-ups**
-   Usa apenas a API oficial `tabs.update`
-   Não requer instalação de softwares externos

------------------------------------------------------------------------

## Instalação

1.  Abra o navegador e acesse:

```{=html}
<!-- -->
```
    chrome://extensions

2.  Ative o **Modo do desenvolvedor**.

3.  Clique em **Carregar sem compactação** (*Load unpacked*).

4.  Selecione a pasta onde estão os arquivos da extensão.

Após carregar, aparecerá **um ícone cinza na barra do navegador**.

------------------------------------------------------------------------

## Como usar

1.  Abra **duas abas** que deseja alternar (na mesma janela do
    navegador).

Exemplo:

-   Dashboard 1
-   Dashboard 2

2.  Clique no **ícone da extensão**.

A extensão exibirá a badge:

    ON

e começará a alternar automaticamente entre as abas.

Para **parar a alternância**, clique novamente no ícone.

------------------------------------------------------------------------

## Configuração

O intervalo de alternância pode ser alterado no arquivo `background.js`.

Basta modificar a constante:

    INTERVALO_MS

Exemplo:

``` javascript
const INTERVALO_MS = 20000; // 20 segundos
```

------------------------------------------------------------------------

## Casos de uso

-   Monitores de **dashboards**
-   Exibição de **gráficos de monitoramento**
-   Alternância de **páginas informativas**
-   Painéis de acompanhamento em equipes

------------------------------------------------------------------------

## Licença

Uso livre para fins pessoais ou internos.
