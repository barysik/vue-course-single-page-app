<template>
  <div class="static-nav-bar-wrapper">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link to="/" class="navbar-brand">Vue Course</router-link>
      <div id="navbarCollapse" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/users" class="nav-link" exact>Users</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/users/add" class="nav-link" exact
              >Add User</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
