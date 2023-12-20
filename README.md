Простейшее приложение на базе next.js с использованием AppRouter и TypeScript

Список постов, при отркытии поста - показываем ещё список комментариев. По userId подтягиваем логин пользователя.

API: https://jsonplaceholder.typicode.com/


Внешний вид - любой бесплатный шаблон, хоть бутстрап. Важно показать работу со SCSS в формате CSS Modules.
Каждый пост на отдельном URL.
Посты должны подтягиваться так, чтобы поисковые роботы видели уже отредеренные страницы(т.е. через SSR и с использованием next seo).
Изобразить фейковую пагинацию(в jsonplaceholder нет пагинации, но можно прикинуться, что через page=2 оно отдает что-то другое).
Делаем фейковое API для авторизации по логину-паролю. Управление состоянием через https://github.com/storeon/storeon.
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
