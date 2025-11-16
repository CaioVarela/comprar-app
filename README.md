# 📱 Comprar App

> React Native Study Project

A shopping list application developed with React Native and Expo, created for learning and practicing mobile technologies.

## 📋 About the Project

**Comprar App** is a mobile application that allows you to manage a shopping list, where you can add items, mark them as completed or pending, filter by status, and remove items. Data is persisted locally using AsyncStorage.

## 🚀 Technologies Used

- **React Native** - Framework for mobile development
- **Expo** - Platform and tools for React Native development
- **TypeScript** - Static typing for JavaScript
- **AsyncStorage** - Asynchronous local storage
- **Lucide React Native** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd comprar-app
```

2. Install dependencies:
```bash
npm install
```

## ▶️ How to Run

### Development

Start the Expo development server:
```bash
npm start
```

### Specific Platforms

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

## 🎯 Features

- ✅ Add new items to the list
- 🔄 Filter items by status (Pending/Completed)
- ✔️ Mark items as completed or pending
- 🗑️ Remove individual items
- 🧹 Clear the entire list
- 💾 Local data persistence with AsyncStorage

## 📁 Project Structure

```
comprar-app/
├── src/
│   ├── app/
│   │   └── Home/          # Main application screen
│   ├── components/        # Reusable components
│   │   ├── Button/        # Button component
│   │   ├── Filter/        # Filter component
│   │   ├── Input/         # Input component
│   │   ├── Item/          # List item component
│   │   └── StatusIcon/    # Status icon
│   ├── storage/           # Storage management
│   │   └── itemsStorage.ts # Persistence functions
│   └── types/             # TypeScript type definitions
│       └── FilterStatus.ts # Filter status enum
├── assets/                # Visual resources (icons, logos)
└── package.json
```

## 🧩 Main Components

- **Home**: Main screen that manages the list state and renders components
- **Button**: Reusable button for actions
- **Input**: Text input field
- **Filter**: Filters for pending and completed items
- **Item**: Individual list item with status and removal actions
- **itemsStorage**: Persistence module with AsyncStorage

## 📝 Item Status

- **PENDING**: Pending item (not yet purchased)
- **DONE**: Completed item (already purchased)

## 🎓 Learning Objectives

This project was developed to practice:

- Functional components with React Hooks
- Local state management
- Data persistence with AsyncStorage
- Navigation and React Native project structure
- TypeScript in React Native projects
- Code organization best practices

## 📄 License

This is a study and learning project.

---

Developed as a React Native study project 🚀

