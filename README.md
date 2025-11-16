# 📱 Comprar App

> Projeto de estudo de React Native

Uma aplicação de lista de compras desenvolvida em React Native com Expo, criada para fins de aprendizado e prática das tecnologias mobile.

## 📋 Sobre o Projeto

O **Comprar App** é uma aplicação mobile que permite gerenciar uma lista de compras, onde você pode adicionar itens, marcar como concluídos ou pendentes, filtrar por status e remover itens. Os dados são persistidos localmente usando AsyncStorage.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma e ferramentas para desenvolvimento React Native
- **TypeScript** - Tipagem estática para JavaScript
- **AsyncStorage** - Armazenamento local assíncrono
- **Lucide React Native** - Biblioteca de ícones

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd comprar-app
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Como Executar

### Desenvolvimento

Inicie o servidor de desenvolvimento do Expo:
```bash
npm start
```

### Plataformas Específicas

- **Android:**
```bash
npm run android
```

- **iOS:**
```bash
npm run ios
```

- **Web:**
```bash
npm run web
```

## 🎯 Funcionalidades

- ✅ Adicionar novos itens à lista
- 🔄 Filtrar itens por status (Pendente/Concluído)
- ✔️ Marcar itens como concluídos ou pendentes
- 🗑️ Remover itens individuais
- 🧹 Limpar toda a lista
- 💾 Persistência de dados local com AsyncStorage

## 📁 Estrutura do Projeto

```
comprar-app/
├── src/
│   ├── app/
│   │   └── Home/          # Tela principal da aplicação
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Button/        # Componente de botão
│   │   ├── Filter/        # Componente de filtro
│   │   ├── Input/         # Componente de input
│   │   ├── Item/          # Componente de item da lista
│   │   └── StatusIcon/    # Ícone de status
│   ├── storage/           # Gerenciamento de armazenamento
│   │   └── itemsStorage.ts # Funções de persistência
│   └── types/             # Definições de tipos TypeScript
│       └── FilterStatus.ts # Enum de status de filtro
├── assets/                # Recursos visuais (ícones, logos)
└── package.json
```

## 🧩 Componentes Principais

- **Home**: Tela principal que gerencia o estado da lista e renderiza os componentes
- **Button**: Botão reutilizável para ações
- **Input**: Campo de entrada de texto
- **Filter**: Filtros para pendentes e concluídos
- **Item**: Item individual da lista com ações de status e remoção
- **itemsStorage**: Módulo de persistência com AsyncStorage

## 📝 Status dos Itens

- **PENDING**: Item pendente (ainda não comprado)
- **DONE**: Item concluído (já comprado)

## 🎓 Objetivos de Estudo

Este projeto foi desenvolvido para praticar:

- Componentes funcionais com React Hooks
- Gerenciamento de estado local
- Persistência de dados com AsyncStorage
- Navegação e estruturação de projetos React Native
- TypeScript em projetos React Native
- Boas práticas de organização de código

## 📄 Licença

Este é um projeto de estudo e aprendizado.

---

Desenvolvido como projeto de estudo de React Native 🚀

