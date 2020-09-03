# nave_rs_desafio_rn_ts

# :question: Por quê? 
Este aplicativo foi desenvolvido como um teste para a empresa Navers.rs para por em prática o conhecimento em React Native, conhecimentos esses: </br>
 - Context: compartilhamento e gerenciamento de estados entre telas. </br>
 - Navegação entre telas, com gerenciamento de dados, drawer e permissões. </br>
 - Styled Components: desenvolvimento e estilização de componentes com este módulo. </br>
 - Comunicação com API Rest utilizando o axios. </br>
 - Modal para exibição de erros e confirmações de ações. </br>
 - Salvar o login aparelho. </br>


# :iphone: Preview

![https://github.com/diegodls/nave_rs_desafio_rn_ts/blob/assets/iOS.gif](https://github.com/diegodls/nave_rs_desafio_rn_ts/blob/assets/iOS.gif) 

# :rocket: Iniciando
Para executar este aplicativo. você deverá ter um [ambiente de trabalho configurado](https://www.google.com/) para o desenvolvimento em [React Native](https://reactnative.dev).</br>
Para testes foram utilizados o emulador do Mac Os Catalina e um dispositivo físico com sistema operacional Android.</br>

**Começando:**
* Clone o repositório com o comando `git clone` ([veja mais](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
* Abra um prompt de comando/cmd/terminal na pasta raiz ou navegue até ela, insira o comando `npx isntall` ou `npm install` ou `yarn install`, dependendo do gerenciador de pacotes que você usa, este comando serve para instalar os pacotes/módulos utilizado nesse projeto
* Após a instalação dos pacotes/módulos, você pode executar no emulador/dispositivo com o comando `npx react-native run-android` (ou yarn ios, ou yarn android, dependendo da versão).

# :nut_and_bolt: Módulos
Neste projeto foram utilizado os seguintes módulos:</br>
[axios](https://github.com/axios/axios) : Requisições HTTP (REST API), para comunicação com a api; </br>
[styled-components](https://styled-components.com/docs/basics#react-native) : Criação e estilização de componentes; </br>
[@react-native-community/async-storage](https://github.com/react-native-community/async-storage) : Salvar dados no aparelho </br>
[@react-navigation/native](https://reactnavigation.org/docs/getting-started) : Navegação entre as telas; </br>
[@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation/#installing-the-stack-navigator-library) : Criação das stacks para navegação entre as telas; </br>
[@react-navigation/drawer](https://reactnavigation.org/docs/drawer-based-navigation/) : Drawer pra navegação entre as telas(e outras opções caso queira); </br>
[@codler/react-native-keyboard-aware-scroll-view](https://www.npmjs.com/package/@codler/react-native-keyboard-aware-scroll-view) : Evitar que o teclado fique acima dos inputs; </br>

**E todas as dependências desses módulos que estão presentes em seus respectivos repositórios!**

# :clap: Agradecimentos
Agradecimentos a todos os desenvolvedores dos módulos acima.

# :page_with_curl: Notas/Problemas
- Estarei terminado o projeto, gostei bastante de colocar o conhecimento em prática e também do que aprendi desenvolvendo ele.</br>
- Por se tratar de uma aplicação de teste, partes dos códigos podem conter alguns 'erros' ou 'testes', ignore essas partes.</br>
- Devido a falta de algumas informações, certas decisões foram feitas, mas podem ser totalmente modificadas com certa conversa :beers:, tais como:</br>
-- Utilização de imagens .png como ícones e outros elementos; </br>
-- Elementos visuais; </br>
-- Componentização;</br>
-- Lógica;</br>

# :construction_worker: TODO
- [ ] Isolar a logíca dos componentes, tornando-os responsável apenas pela renderização;
- [ ] Context para os dados;
- [ ] Refatorar os componentes (diminuir os códigos);
- [ ] Terminar as demais funções e features
- Sinta-se livre para dar sugestões. :thumbsup:</br>

#  :rotating_light: Dificuldades
 - Criação dos componentes, uma vez que nem todos os componentes aceitam algumas props e algumas informações não ficaram implícitas;</br>
 - Estruturação da aplicação devido a informações não explícitas;

# :warning: Licença
Você pode usar este aplicativos para estudos, e apenas para estudo, está proibido a sua publicação ou apropriação do código.
