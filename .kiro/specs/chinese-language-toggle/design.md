# Design Document: Chinese Language Toggle

## Overview

The Chinese Language Toggle feature will enable SevenStar7 platform users to seamlessly switch between English and Simplified Chinese languages. The implementation follows a static translation approach where all Chinese content is pre-stored in the codebase alongside English content, ensuring instant language switching without external API dependencies.

The system consists of three main components:
1. **Language Context Provider**: React Context-based state management for current language selection
2. **Translation Data Structure**: Organized static data files containing pre-translated Chinese content
3. **UI Toggle Component**: User interface element for language selection with persistent storage

## Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Root                         │
│  ┌───────────────────────────────────────────────────────┐  │
│  │         LanguageProvider (Context)                    │  │
│  │  - Current Language State (en/zh)                     │  │
│  │  - Toggle Function                                    │  │
│  │  - LocalStorage Persistence                           │  │
│  └───────────────────────────────────────────────────────┘  │
│                           │                                  │
│         ┌─────────────────┼─────────────────┐               │
│         │                 │                 │               │
│    ┌────▼────┐      ┌────▼────┐      ┌────▼────┐          │
│    │ Header  │      │  Pages  │      │ Footer  │          │
│    │ Toggle  │      │Components│      │Content  │          │
│    └─────────┘      └─────────┘      └─────────┘          │
│         │                 │                 │               │
│         └─────────────────┼─────────────────┘               │
│                           │                                  │
│                  ┌────────▼────────┐                        │
│                  │ useTranslation  │                        │
│                  │     Hook        │                        │
│                  └────────┬────────┘                        │
│                           │                                  │
│                  ┌────────▼────────┐                        │
│                  │  Translation    │                        │
│                  │  Data Files     │                        │
│                  │  (en/zh)        │                        │
│                  └─────────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **Initialization**: App loads → LanguageProvider checks localStorage → Sets initial language
2. **User Toggle**: User clicks toggle → Context updates → All subscribed components re-render
3. **Content Rendering**: Component needs text → Calls useTranslation hook → Returns text in current language
4. **Persistence**: Language changes → Context saves to localStorage → Available on next visit

## Components and Interfaces

### 1. Language Context

**File**: `src/contexts/LanguageContext.tsx`

```typescript
interface LanguageContextType {
  language: 'en' | 'zh';
  toggleLanguage: () => void;
  setLanguage: (lang: 'en' | 'zh') => void;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}
```

**Responsibilities**:
- Maintain current language state
- Provide language toggle functionality
- Persist language preference to localStorage
- Expose language state to all child components

### 2. Translation Hook

**File**: `src/hooks/useTranslation.ts`

```typescript
interface UseTranslationReturn {
  t: (key: string) => string;
  language: 'en' | 'zh';
}
```

**Responsibilities**:
- Provide translation function to components
- Access current language from context
- Return translated strings based on current language
- Handle fallback to English if translation missing

### 3. Language Toggle Component

**File**: `src/components/LanguageToggle.tsx`

```typescript
interface LanguageToggleProps {
  className?: string;
  variant?: 'header' | 'mobile';
}
```

**Responsibilities**:
- Render language toggle button
- Display current language indicator
- Handle user click events
- Adapt styling based on variant (header/mobile)

### 4. Translation Data Structure

**Files**: 
- `src/translations/en.ts` (existing content structure)
- `src/translations/zh.ts` (Chinese translations)
- `src/translations/index.ts` (export aggregator)

```typescript
interface Translations {
  nav: {
    home: string;
    games: string;
    promotions: string;
    partner: string;
    blog: string;
    croco: string;
  };
  games: {
    [gameId: string]: {
      title: string;
      description?: string;
    };
  };
  categories: {
    [categoryId: string]: {
      title: string;
      description: string;
      longDescription: string;
      features: string[];
    };
  };
  testimonials: {
    [testimonialId: string]: {
      message: string;
      game: string;
    };
  };
  blog: {
    [blogId: string]: {
      title: string;
      excerpt: string;
      content: string;
      category: string;
      tags: string[];
    };
  };
  ui: {
    playNow: string;
    readMore: string;
    viewAll: string;
    // ... all UI strings
  };
  achievements: {
    [achievementId: string]: {
      title: string;
      description: string;
    };
  };
  faq: {
    [faqId: string]: {
      question: string;
      answer: string;
    };
  };
  footer: {
    mission: string;
    navigation: string;
    playerSupport: string;
    authority: string;
    // ... all footer strings
  };
}
```

## Data Models

### Language Preference Storage

**LocalStorage Key**: `sevenstar7_language`

**Value**: `"en"` | `"zh"`

**Structure**:
```typescript
{
  key: 'sevenstar7_language',
  value: 'en' | 'zh',
  expiry: null // No expiry, persists indefinitely
}
```

### Translation Data Organization

The translation data will mirror the existing constants.tsx structure but organized by language:

```
src/
  translations/
    en.ts          # English translations (extracted from constants.tsx)
    zh.ts          # Chinese translations (manually provided)
    index.ts       # Export aggregator
    types.ts       # TypeScript interfaces for translations
```

Each translation file exports a complete `Translations` object with all content in that language.

## 
## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the prework analysis, the following properties have been identified to validate the Chinese Language Toggle system:

**Property 1: Language toggle completeness**
*For any* application state, when the language toggle is activated, all visible content should change to the selected language immediately
**Validates: Requirements 1.1, 1.2**

**Property 2: Content type translation consistency**
*For any* content type (games, categories, testimonials, blog posts, achievements, FAQ), when Chinese language is selected, all content of that type should display in Chinese
**Validates: Requirements 1.3, 1.5, 3.1, 3.2, 3.3, 3.4, 3.5**

**Property 3: Page state preservation**
*For any* page state (URL, scroll position, form data), when language is toggled, the page state should remain unchanged
**Validates: Requirements 1.4**

**Property 4: Language preference persistence**
*For any* language selection, the choice should be immediately stored in browser storage and restored on next application load
**Validates: Requirements 2.1, 2.2, 2.3, 2.5**

**Property 5: Translation key consistency**
*For any* translation key used across multiple components, it should return the same translated content in the same language
**Validates: Requirements 5.2**

**Property 6: No external API dependency**
*For any* language switching operation, no external network requests should be made for translation data
**Validates: Requirements 5.5**

**Property 7: Rapid toggle stability**
*For any* sequence of rapid language toggles, the system should remain stable and end in a consistent state
**Validates: Requirements 6.1**

**Property 8: Storage fallback functionality**
*For any* browser storage availability state, the language system should continue functioning with appropriate fallback mechanisms
**Validates: Requirements 6.2**

**Property 9: Translation fallback behavior**
*For any* missing translation data, the system should display English content as fallback without errors
**Validates: Requirements 6.3**

**Property 10: Chinese character rendering**
*For any* Chinese content with special characters, the system should render the content correctly without encoding issues
**Validates: Requirements 6.4**

**Property 11: Network-independent operation**
*For any* network condition, language switching should work immediately since all translations are stored locally
**Validates: Requirements 6.5**

**Property 12: UI toggle visibility**
*For any* viewport size, the language toggle button should be visible and accessible in the appropriate navigation area
**Validates: Requirements 4.2**

## Error Handling

### 1. Missing Translation Data
- **Scenario**: Translation key exists in English but not in Chinese
- **Handling**: Fall back to English content gracefully
- **User Experience**: Content displays in English without error messages
- **Logging**: Log missing translations for future content updates

### 2. LocalStorage Unavailable
- **Scenario**: Browser blocks localStorage access or storage is full
- **Handling**: Use sessionStorage as fallback, then in-memory state
- **User Experience**: Language preference persists for session only
- **Logging**: Log storage issues for debugging

### 3. Invalid Language Code
- **Scenario**: Corrupted localStorage contains invalid language code
- **Handling**: Reset to default English language
- **User Experience**: App loads in English, user can re-select preference
- **Logging**: Log invalid language codes for monitoring

### 4. Component Rendering Errors
- **Scenario**: Translation function throws error during rendering
- **Handling**: Catch errors in translation hook, return English fallback
- **User Experience**: Content displays in English, app remains functional
- **Logging**: Log translation errors with component context

### 5. Rapid State Changes
- **Scenario**: User rapidly toggles language multiple times
- **Handling**: Debounce toggle function to prevent race conditions
- **User Experience**: Smooth transitions, final state is consistent
- **Logging**: Log excessive toggle attempts for UX analysis

## Testing Strategy

### Unit Testing Approach

**Translation Hook Tests**:
- Test translation function returns correct strings for each language
- Test fallback behavior when translation keys are missing
- Test hook integration with language context

**Language Context Tests**:
- Test initial language detection from localStorage
- Test language toggle functionality
- Test persistence to localStorage
- Test fallback when localStorage is unavailable

**Language Toggle Component Tests**:
- Test button renders with correct current language indicator
- Test click handler triggers language change
- Test component adapts to different variants (header/mobile)

### Property-Based Testing Approach

The property-based testing will use **React Testing Library** with **@fast-check/jest** for generating test data and scenarios. Each property will run a minimum of 100 iterations to ensure comprehensive coverage.

**Property Test Configuration**:
- **Library**: @fast-check/jest for property-based testing
- **Iterations**: 100 minimum per property test
- **Test Environment**: jsdom with React Testing Library
- **Generators**: Custom generators for translation keys, content types, and UI states

**Key Property Tests**:

1. **Translation Completeness**: Generate random content structures and verify all content translates correctly
2. **State Persistence**: Generate random language selections and verify persistence/restoration
3. **Fallback Behavior**: Generate scenarios with missing translations and verify English fallback
4. **UI Consistency**: Generate different viewport sizes and verify toggle visibility
5. **Performance**: Generate rapid toggle sequences and verify system stability

**Test Data Generators**:
- Translation key generator (valid keys from translation files)
- Content type generator (games, testimonials, blog posts, etc.)
- Language code generator (valid: en/zh, invalid: random strings)
- UI state generator (different page contexts, scroll positions)

The property-based tests will complement unit tests by validating system behavior across a wide range of inputs and edge cases, ensuring the language toggle system works reliably under all conditions.