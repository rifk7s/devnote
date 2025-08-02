# 🎇 DevNote

<div align="center">


### Simple, Fast, and Smart Notes for Developers.

A modern, AI-powered note-taking application designed specifically for developers. Build, organize, and enhance your coding knowledge with intelligent features.

![Next.js](https://img.shields.io/badge/Next.js-15.4.5-black?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle_ORM-0.44.4-C5F74F?style=flat&logo=drizzle&logoColor=black)
![Better Auth](https://img.shields.io/badge/Better_Auth-1.3.4-8B5CF6?style=flat&logo=auth0&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16+-4169E1?style=flat&logo=postgresql&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-ff1744.svg?style=flat)](https://github.com/rifk7s/devnote)

</div>

> [!IMPORTANT]
> DevNote is currently in active development. While the core features are stable, new AI-powered capabilities and developer tools are being added regularly. Star the repo to stay updated!

## ✨ Features

> [!NOTE]
> DevNote is built with modern web technologies to provide a seamless development experience. The application leverages AI-powered features to enhance productivity and code organization.

- **🔐 Secure Authentication** - Complete auth system with email verification, password reset, and Google OAuth
- **🎨 Modern UI/UX** - Beautiful, responsive interface built with Tailwind CSS and Radix UI
- **🌙 Theme Support** - Light/dark mode with system preference detection
- **📧 Email Integration** - Automated emails for verification and password reset using Resend
- **🎭 Smooth Animations** - Polished user experience with Motion animations
- **⚡ Type Safety** - Built with TypeScript for reliable, maintainable code
- **🗄️ Database Integration** - PostgreSQL with Drizzle ORM for efficient data management
- **📝 AI-Powered Notes** - Intelligent note-taking specifically designed for developers
- **🔍 Code Snippet Management** - Organize and search through your code snippets efficiently
- **🏗️ Project Organization** - Structure your development knowledge by projects and topics

> [!TIP]
> **Performance Optimized**: DevNote uses modern React patterns with Next.js 15 App Router, ensuring fast loading times and smooth interactions. The application is optimized for both desktop and mobile development workflows.

## 🛠️ Tech Stack

> [!IMPORTANT]
> DevNote utilizes cutting-edge technologies to deliver a robust and scalable developer experience. The stack is carefully chosen for performance, type safety, and developer productivity.

### Frontend
- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **UI Components:** Radix UI, Lucide React
- **Animations:** Motion (Framer Motion successor)
- **Forms:** React Hook Form with Zod validation

### Backend & Database
- **Database:** PostgreSQL (Neon)
- **ORM:** Drizzle ORM
- **Authentication:** Better Auth
- **Email Service:** Resend with React Email templates

### Development Tools
- **Package Manager:** pnpm
- **Linting:** ESLint
- **Code Formatting:** Prettier

> [!WARNING]
> **Prerequisites**: Node.js 19+ and pnpm are required for optimal development experience. Other package managers may cause dependency conflicts.

## 🚀 Quick Start

> [!TIP]
> DevNote is designed to be deployment-ready out of the box. Follow these steps to get your development environment running quickly.

1. **Clone the repository**
   ```bash
   git clone https://github.com/rifk7s/devnote.git
   cd devnote
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Configure your database, auth providers, and email service
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

> [!NOTE]
> For production deployment, you'll need to configure your PostgreSQL database, Google OAuth credentials, and Resend API key. Check the `.env.example` file for required environment variables.

## 📝 Project Structure

> [!NOTE]
> DevNote follows Next.js 15 App Router conventions for optimal organization and maintainability.

```
devnote/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Dashboard pages
│   └── (auth)/           # Authentication pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── forms/            # Form components
│   └── emails/           # Email templates
├── db/                   # Database configuration
├── lib/                  # Utility functions and configs
└── server/               # Server-side utilities
```

## 🎯 What Makes DevNote Special

> [!IMPORTANT]
> DevNote isn't just another note-taking app - it's specifically crafted for developers who need to organize, enhance, and leverage their coding knowledge effectively.

### 🧠 AI-Powered Intelligence
- **Smart Code Organization** - Automatically categorize and tag your notes
- **Context-Aware Suggestions** - Get relevant code snippets and documentation
- **Intelligent Search** - Find what you need with semantic search capabilities

### 🔧 Developer-First Features
- **Code Snippet Management** - Store, organize, and quickly access your code snippets
- **Project-Based Organization** - Keep notes organized by projects and technologies
- **Syntax Highlighting** - Beautiful code rendering with multiple language support
- **Markdown Support** - Rich text editing with full Markdown compatibility

### 🚀 Modern Development Experience
- **Fast Performance** - Built with Next.js 15 for lightning-fast interactions
- **Type Safety** - Full TypeScript support for reliable development
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Dark/Light Theme** - Easy on the eyes during long coding sessions

## ⚠️ Development Status

> [!CAUTION]
> This project is in active development. While core features are stable, expect frequent updates and potential breaking changes. Always backup your data and test thoroughly before using in production environments.

## 🚧 Roadmap

> [!NOTE]
> Upcoming features and improvements planned for DevNote:

- [ ] **Advanced AI Integration** - Enhanced code understanding and suggestions
- [ ] **Real-time Collaboration** - Share and collaborate on notes with team members
- [ ] **Plugin System** - Extensible architecture for custom integrations
- [ ] **Mobile Apps** - Native iOS and Android applications
- [ ] **Advanced Search** - Full-text search with filters and tags
- [ ] **Export Options** - Export notes to various formats (PDF, Markdown, etc.)



## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) - The React Framework for Production
- UI components powered by [Radix UI](https://radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Database management with [Drizzle ORM](https://orm.drizzle.team/)

---




