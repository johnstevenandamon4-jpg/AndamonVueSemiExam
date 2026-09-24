<template>
  <div>
    <nav class="navbar">
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/assignments">Assignments</RouterLink>
      |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>