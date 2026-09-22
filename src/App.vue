<template>
  <div>
    <nav>
      <RouterLink to='/'>Home Page</RouterLink>
      |
      <RouterLink to='/assignment'>Assignment Page</RouterLink> 
      |
      <RouterLink to='/about'>About Page</RouterLink> 
    </nav>

    <br>
    <RouterView/>
  </div>
</template>