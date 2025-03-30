<template>
    <div class="min-h-screen flex flex-col">
      <Header />
      <main class="flex-grow">
        <slot name="default" />
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  </script>