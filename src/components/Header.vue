<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>

        <div class="collapse navbar-collapse" id="navbar">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" class="nav-item" to="/portfolio" active-class="active">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link tag="li" class="nav-item" to="/stocks" active-class="active">
                    <a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="nav-item">
                    <a class="nav-link" href="#" tabindex="-1">End Day</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" 
                       href="#" 
                       id="navbarDropdown" 
                       role="button" 
                       data-toggle="dropdown" 
                       aria-haspopup="true" 
                       aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Header',

        data() {
            return {}
        },
    }
</script>

<style scoped>
    nav {
        background-color: #e3f2fd;
    }
</style>
