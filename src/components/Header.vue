<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <a class="navbar-brand" href="#">Top navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-item" to="/home" activeClass="active" tag="li">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link class="nav-item" to="/gallery" activeClass="active" tag="li">
                    <a class="nav-link">Gallery</a>
                </router-link>
                <!-- <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li> -->
            </ul>
            <ul class="navbar-nav">
                <router-link class="nav-item" to="/login" activeClass="active" tag="li">
                    <a class="nav-link">Login</a>
                </router-link>
                <router-link class="nav-item" to="/register" activeClass="active" tag="li">
                    <a class="nav-link">Register</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>