# Issue
Having a component that accesses auth in the `Root Layout` does not seem to work on initial run. 
 
## Code in question
```tsx
// apps/web/src/app/layout.tsx
  <html lang="en">
    <body className={inter.className}>
      <ClerkProvider>
        <Header /> {/* uses currentUser() under the hood */}
        {children}
      </ClerkProvider>
    </body>
  </html>
```

## Error
```
web:dev:  ⨯ Error: Clerk: auth() was called but Clerk can't detect usage of authMiddleware(). Please ensure the following:
web:dev: - authMiddleware() is used in your Next.js Middleware.
web:dev: - Your Middleware matcher is configured to match this route or page.
web:dev: - If you are using the src directory, make sure the Middleware file is inside of it.
```