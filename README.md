# Soller: Solar Energy Web Page - ☀️

**Soller** is a web application designed to promote and facilitate solar energy solutions for residential customers. Built using modern web technologies as Next.js, TypeScript, and Tailwind CSS, the project focuses on providing an intuitive interface for users interested in solar power installations.

## 1. Project Goals - 🎯
- Create an engaging platform for solar energy solutions; 
- Provide easy access to solar power information and quotes;
- Showcase the benefits and services of solar energy;
- Enable user interactions for quote requests;
- Present testimonials from existing customers;
- Offer a responsive design for all device types.

## 2. Scope - 📝
The project currently encompasses:
- A landing page with multiple sections;
- Service showcase;
- Testimonial system;
- Quote request functionality;
- Responsive design (Mobile, Tablet, Desktop);
- Potential for multi-language support.

## 3. Key Features - 🌟

The **Soller Web Page** includes several modern design and functional features:

- A clean and modern UI/UX design that enhances user experience;
- A fully responsive layout that adjusts to different screen sizes;
- Reusable components for consistency across the site;
- Type-safe development with TypeScript;
- Optimized images using Next.js Image component for faster loading;
- Custom button component with different size and color variants;
- Testimonials carousel for user feedback;
- Service sections featuring engaging illustrations.

## 4. Configuration - 🛠

The project includes pre-configured support for:

- TypeScript for static type checking;
- Tailwind CSS for utility-first CSS styling;
- PostCSS for CSS preprocessing and transformations;
- Next.js for server-side rendering and static generation.

## 5. Technologies Used -  🚀
### Frontend:
- **Next.js** 15.0.0;
- **React** 19.0.0;
- **TypeScript**;
- **Tailwind CSS**;
- **React Icons**;
- **Tailwind Variants**.

### Development Tools:
- **Node.js**;
- **npm/yarn**;
- **Git**;
- **VS Code** (recommended).

## 6. Project Structure - 📁

```
src/
├── components/
│   ├── Header/
│   ├── Introduction/
│   ├── Services/
│   ├── SecondServices/
│   ├── Testimonials/
│   ├── LastPage/
│   └── Footer/
├── ui/
│   ├── Button/
│   ├── Card/
│   ├── Container/
│   ├── Typography/
│   └── Icons/
├── styles/
├── pages/
└── public/
```


The main components of the project include:

- **Header**: A responsive navigation bar that includes the logo, menu items, and contact information;
- **Introduction**: The hero section introducing the main value proposition of the company;
- **Services & SecondServices**: Two distinct service sections that showcase the company’s offerings, each with a unique layout;
- **Testimonials**: A carousel section that displays various customer reviews;
- **LastPage**: A final call-to-action (CTA) section with a MacBook illustration to engage users;
- **Footer**: A simple footer with the company’s logo, copyright information, and navigational links.

Each component is modular and built with reusability and scalability in mind, ensuring a clean structure and ease of maintenance.

### 🎨 Styling:

The project uses Tailwind CSS with custom configurations, providing a visually consistent and responsive design. Key styling features include:

- Custom color palette matching the company’s branding;
- Defined breakpoints for responsive behavior on various devices;
- Custom font (Roboto) for a modern look;
- Extended theme configurations for tailored design needs.

### 📱 Responsive Design and Compatibility:

The layout is fully responsive, adapting to different screen sizes with Tailwind’s breakpoints:

- Mobile: `sm` (640px);
- Tablet: `md` (768px);
- Desktop: `lg` (1024px);
- Wide: `xl` (1920px).


## 7. Getting Started - 🧑🏻‍💻

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/giacomosalsano/buzzvel.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open http://localhost:3000 in your browser to view the project.

#### This setup will allow you to run the application locally, making it easier to test and debug the project.


## 8. License - 📄

**All rights reserved. © 2023 Buzzvel, Inc.**
