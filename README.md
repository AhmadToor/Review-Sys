# ReviewLore AI

<img src="public/logo.svg" alt="ReviewLore AI" width='200' />

ReviewLore AI is a powerful tool designed to help businesses manage their customer reviews efficiently using AI-generated responses. This project is built with React, TypeScript, and Vite, and leverages various modern libraries and tools to provide a seamless user experience.

## Features

- **AI-Generated Responses:** Automatically generate responses for customer reviews using AI.
- **Real-Time Data Synchronization:** Sync review data from Google Business in real-time.
- **Sentiment Analysis:** Tailor responses based on the sentiment of the review (positive, neutral, negative).
- **Bulk Replies:** Generate and manage responses for multiple reviews at once.
- **Custom Alerts:** Set up alerts for specific keywords, star ratings, review types, or sentiments.
- **Email Templates:** Create and manage email templates for responding to reviews.
- **User Authentication:** Secure user authentication and profile management.
- **Responsive Design:** Fully responsive design for a seamless experience on any device.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **State Management**: React Context API, React Query
- **Form Handling**: React Hook Form, Zod validation
- **Testing**: Vitest, React Testing Library, MSW
- **Build Tools**: Vite, SWC
- **Icons**: Lucide React
- **Rich Text Editing**: Lexical

## Installation

1. Clone the repository: 
   ```bash
   git clone https://github.com/AhmadToor/Review-Sys.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Review-Sys
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your web browser and navigate to http://localhost:5173

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=your_api_url
```

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run the test suite with:

```bash
npm test
```

For test coverage:

```bash
npm run test:coverage
```

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── _layouts/        # Layout components
│   ├── api/             # API configuration
│   ├── assets/          # Images, fonts, and SVGs
│   ├── components/      # Reusable components
│   ├── context/         # React context providers
│   ├── data/            # Mock data
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   ├── schema/          # Zod validation schemas
│   ├── services/        # API service functions
│   ├── test/            # Test utilities and mocks
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main App component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.cjs  # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── vitest.config.ts     # Vitest configuration
```

## Contributing

Contributions are welcome! Please submit a pull request with your changes.

## License

ReviewLore AI is licensed under the MIT License. See LICENSE for details.

## Contact

For questions or feedback, please email <ahmadtoor4321@gmail.com> or open an issue on this repository.

---

Crafted with ❤️ by [Ahmad Toor](https://github.com/AhmadToor)
