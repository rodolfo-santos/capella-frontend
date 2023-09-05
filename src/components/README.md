# Components Directory

## Overview

The `components` directory contains the reusable Vue components of the application. These components are building blocks that can be utilized in various parts of the application such as in views, layouts, or even within other components.

## Responsibilities

1. **Reusability**: Components are designed to be reusable to ensure a DRY (Don't Repeat Yourself) codebase.
2. **Encapsulation**: Each component encapsulates its own logic and presentation. This helps in maintaining a separation of concerns and promotes modularity.
3. **Interactivity**: Components often contain event handlers or methods that handle user interactions.

## Directory Structure

- **/common**: Components that are generic and can be used across the application, like buttons, modals, and inputs.
- **/layout**: Components that define the structure of a page or view, such as headers, footers, and sidebars.
- **/specific**: Components that are specialized for specific scenarios or views, often not reusable outside that context.

## Usage

To use a component in a Vue file:

```vue
<template>
  <div>
    <CustomButton :onClick="someMethod">Click Me</CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/common/CustomButton.vue'

export default {
  components: {
    CustomButton
  },
  methods: {
    someMethod() {
      // Do something
    }
  }
}
</script>
```

## Tips

1. Naming Convention: Adopt a consistent naming convention for your components. PascalCase is commonly used for Vue component names.
2. Props: Use props to pass data into child components, maintaining a one-way data flow.
3. Scoped Styles: To ensure component styles don't leak into global styles, consider using scoped styles in your component's style tag.
