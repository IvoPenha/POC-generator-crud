# Gerador de CRUD usando Yo

Bem-vindo ao **Gerador de CRUD**! Este gerador Yeoman ajuda você a criar rapidamente um novo módulo CRUD com uma estrutura consistente para o seu projeto. 🚀

## Funcionalidades

- Gera um novo módulo dentro da pasta `src/useCases`.
- Cria automaticamente um arquivo de serviço em TypeScript.
- Aceita um nome de banco de dados personalizado como parâmetro opcional.

## Pré-requisitos

Antes de usar este gerador, certifique-se de ter o [Node.js](https://nodejs.org/) instalado. Você também precisará ter o Yeoman instalado globalmente em seu sistema.

```bash
npm install -g yo
```

## Instalação

Para começar a usar o Gerador de CRUD, você precisará clonar este repositório e linkar o gerador globalmente:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/IvoPenha/POC-generator-crud.git
   ```

2. **Navegue até o diretório clonado:**

   ```bash
   cd crud-generator
   ```

3. **Link o gerador globalmente com npm ou yarn:**

   Com npm:

   ```bash
   npm link
   ```

   Ou, se preferir usar yarn:

   ```bash
   yarn link
   ```

## Uso

Depois de instalar e linkar o gerador, você pode usá-lo para gerar um novo módulo CRUD:

```bash
yo crud <nome> --bd <nomeDoBancoDeDados>
```

### Exemplo:

```bash
yo crud user --bd meuBancoDeDados
```

Isso criará uma nova pasta `src/useCases/user` com um arquivo `user.ts` dentro dela, usando `meuBancoDeDados` como o nome do banco de dados.

### Opções:

- `<nome>`: O nome do seu módulo (por exemplo, `user`).
- `--bd <nomeDoBancoDeDados>`: O nome da tabela no banco de dados a ser usado na entidade (por exemplo, `usuarios`).
