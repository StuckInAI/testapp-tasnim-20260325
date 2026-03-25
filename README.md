# Next.js Todo App with SQLite

A full-stack Next.js 14 TypeScript todo application using SQLite and TypeORM, designed for production deployment on Coolify.

## Features

- **Full CRUD operations**: Create, read, update, and delete todos
- **TypeORM with SQLite**: Persistent data storage with TypeScript entities
- **Responsive UI**: Built with Tailwind CSS
- **Server Actions**: Mutations handled via server actions for better performance
- **Production-ready**: Includes Dockerfile and configuration for Coolify deployment

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd next-todo-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - The `.env` file is already included with `DATABASE_URL="file:./dev.db"`

4. Run database migrations (optional, as `synchronize` is enabled in dev):
   ```bash
   npm run migration:run
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment with Coolify

This app is configured for easy deployment on Coolify:

1. Ensure all files are at the repository root.
2. The `Dockerfile` and `docker-compose.yml` are provided for containerization.
3. In Coolify, connect your repository and deploy; it will automatically use the Dockerfile.
4. The SQLite database will be persisted via a volume in `docker-compose.yml`.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run migration:generate`: Generate a new migration
- `npm run migration:run`: Run pending migrations
- `npm run migration:revert`: Revert the last migration

## Project Structure

```
.
├── package.json
├── package-lock.json
├── next.config.js
├── Dockerfile
├── docker-compose.yml
├── public/
│   └── .empty
├── .env
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── lib/
│   │   ├── database.ts
│   │   ├── entities/
│   │   │   └── Todo.ts
│   │   └── repositories/
│   │       └── todoRepository.ts
│   └── components/
│       ├── TodoForm.tsx
│       ├── TodoList.tsx
│       └── TodoItem.tsx
└── README.md
```

## License

MIT
