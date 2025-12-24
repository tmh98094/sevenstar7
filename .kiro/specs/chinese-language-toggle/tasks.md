# Implementation Plan

- [x] 1. Set up translation infrastructure and type definitions


  - Create translation types and interfaces in `src/translations/types.ts`
  - Define the complete `Translations` interface covering all content types
  - Set up translation file structure (`en.ts`, `zh.ts`, `index.ts`)
  - _Requirements: 5.2, 5.5_

- [x] 2. Extract and organize English translations


  - Extract all English content from `constants.tsx` into `src/translations/en.ts`
  - Organize content by category (nav, games, categories, testimonials, blog, ui, achievements, faq, footer)
  - Ensure all UI strings are captured and organized
  - Maintain backward compatibility with existing constants structure
  - _Requirements: 5.2, 5.5_

- [x] 3. Create Chinese translation data


  - Create `src/translations/zh.ts` with complete Chinese translations
  - Translate all navigation items, game titles, and descriptions
  - Translate all UI strings, buttons, and labels
  - Translate blog posts, testimonials, and FAQ content
  - Translate footer content and achievement descriptions
  - Ensure translation keys match English structure exactly
  - _Requirements: 1.3, 1.5, 3.1, 3.2, 3.3, 3.4, 3.5_

- [x] 4. Implement Language Context Provider


  - Create `src/contexts/LanguageContext.tsx` with React Context
  - Implement language state management (en/zh)
  - Implement toggleLanguage and setLanguage functions
  - Add localStorage persistence for language preference
  - Add fallback to sessionStorage if localStorage unavailable
  - Implement default language detection (English as default)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 6.2_

- [ ]* 4.1 Write property test for language context persistence
  - **Property 4: Language preference persistence**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.5**

- [ ]* 4.2 Write property test for storage fallback
  - **Property 8: Storage fallback functionality**
  - **Validates: Requirements 6.2**

- [x] 5. Create translation hook


  - Create `src/hooks/useTranslation.ts` custom hook
  - Implement translation function that accesses current language from context
  - Implement fallback to English for missing translations
  - Add error handling for invalid translation keys
  - Return both translation function and current language
  - _Requirements: 1.2, 6.3_

- [ ]* 5.1 Write property test for translation fallback
  - **Property 9: Translation fallback behavior**
  - **Validates: Requirements 6.3**

- [ ]* 5.2 Write property test for translation key consistency
  - **Property 5: Translation key consistency**
  - **Validates: Requirements 5.2**

- [x] 6. Build Language Toggle UI component


  - Create `src/components/LanguageToggle.tsx` component
  - Implement toggle button with current language indicator (EN/中文)
  - Add click handler to trigger language change
  - Style component to match luxury gold aesthetic
  - Create variants for header and mobile navigation
  - Add smooth transition animations
  - _Requirements: 4.1, 4.2, 4.4, 4.5_

- [ ]* 6.1 Write unit tests for Language Toggle component
  - Test button renders with correct language indicator
  - Test click handler triggers language change
  - Test component variants (header/mobile)
  - _Requirements: 4.1, 4.2, 4.5_

- [x] 7. Integrate Language Provider into App


  - Wrap App component with LanguageProvider in `App.tsx`
  - Ensure provider is at root level for global access
  - Test that language context is accessible throughout app
  - _Requirements: 1.1, 1.2_

- [x] 8. Add Language Toggle to Header component


  - Import and add LanguageToggle component to `components/Header.tsx`
  - Position toggle button in desktop navigation
  - Add toggle to mobile menu
  - Ensure toggle visibility in both scrolled and non-scrolled states
  - _Requirements: 4.1, 4.2, 4.5_

- [x] 9. Update navigation components with translations


  - Update `components/Header.tsx` to use translation hook for nav items
  - Update `components/Footer.tsx` to use translations for all footer content
  - Update `components/FloatingCTA.tsx` to use translated button text
  - Ensure all navigation labels are translated
  - _Requirements: 1.2, 1.5_

- [ ]* 9.1 Write property test for content type translation
  - **Property 2: Content type translation consistency**
  - **Validates: Requirements 1.3, 1.5, 3.1, 3.2, 3.3, 3.4, 3.5**

- [x] 10. Update game display components with translations



  - Update `components/GameCard.tsx` to use translations for game data
  - Update `components/GameShowcaseCard.tsx` to use translated content
  - Update `components/GameDetailModal.tsx` to use translations
  - Ensure game titles, descriptions, and provider names are translated
  - _Requirements: 1.3, 3.1_

- [x] 11. Update page components with translations


  - Update `pages/Home.tsx` to use translations for all content
  - Update `pages/GameLibrary.tsx` to use translated filters and labels
  - Update `pages/CategoryPage.tsx` to use translated category content
  - Update `pages/CrocoExclusive.tsx` to use translated content
  - Update `pages/PartnerProgram.tsx` to use translations
  - Update `pages/BlogList.tsx` and `pages/BlogDetail.tsx` to use translated blog content
  - _Requirements: 1.2, 1.5, 3.3_

- [ ]* 11.1 Write property test for page state preservation
  - **Property 3: Page state preservation**
  - **Validates: Requirements 1.4**

- [x] 12. Update testimonials and achievements with translations

  - Update testimonial rendering to use translated messages
  - Update achievement badges to use translated titles and descriptions
  - Ensure all testimonial and achievement content is translated
  - _Requirements: 1.5, 3.2, 3.4_

- [x] 13. Update FAQ and blog content with translations

  - Update FAQ rendering to use translated questions and answers
  - Update blog post rendering to use translated titles, excerpts, and content
  - Ensure all FAQ and blog content is properly translated
  - _Requirements: 3.3, 3.5_

- [x] 14. Implement Chinese character encoding support


  - Ensure HTML meta charset is set to UTF-8
  - Test Chinese character rendering across all components
  - Verify no encoding issues with special Chinese characters
  - Add font support for Chinese characters if needed
  - _Requirements: 6.4_

- [ ]* 14.1 Write property test for Chinese character rendering
  - **Property 10: Chinese character rendering**
  - **Validates: Requirements 6.4**

- [x] 15. Add debouncing and stability improvements


  - Add debounce to language toggle function to prevent rapid switching issues
  - Implement loading states during language transitions
  - Add error boundaries around translated content
  - Ensure smooth transitions between languages
  - _Requirements: 6.1_

- [ ]* 15.1 Write property test for rapid toggle stability
  - **Property 7: Rapid toggle stability**
  - **Validates: Requirements 6.1**

- [x] 16. Verify no external API dependencies


  - Audit code to ensure no translation API calls are made
  - Verify all translations are served from static files
  - Test language switching works offline
  - Monitor network requests during language changes
  - _Requirements: 5.5, 6.5_

- [ ]* 16.1 Write property test for no external API dependency
  - **Property 6: No external API dependency**
  - **Validates: Requirements 5.5**

- [ ]* 16.2 Write property test for network-independent operation
  - **Property 11: Network-independent operation**
  - **Validates: Requirements 6.5**

- [x] 17. Final integration testing and polish


  - Test complete user flow: toggle language, navigate pages, verify all content translates
  - Test language persistence across browser sessions
  - Test fallback behaviors (missing translations, storage unavailable)
  - Verify mobile responsiveness of language toggle
  - Test with different browsers and devices
  - Polish animations and transitions
  - _Requirements: All_

- [ ]* 17.1 Write property test for language toggle completeness
  - **Property 1: Language toggle completeness**
  - **Validates: Requirements 1.1, 1.2**

- [ ]* 17.2 Write property test for UI toggle visibility
  - **Property 12: UI toggle visibility**
  - **Validates: Requirements 4.2**

- [x] 18. Checkpoint - Ensure all tests pass


  - Ensure all tests pass, ask the user if questions arise.