<template>

    <nav class="container">
        <router-link class="route_link home" to="/Home">Aura</router-link>
        <router-link v-for="item in list" :key="item" class="route_link" :to="item.to">{{ item.title }}</router-link>
    </nav>

</template>

<script>

export default{
    data() {
        return {
            list: [
                { title: "List", to: "/List" },
                { title: "Calendar", to: "/Calendar" },
                { title: "Markdown", to: "/Markdown" },
                { title: "Slider", to: "/Slider" },
            ]
        }
    }
}

</script>

<style>
    
    .container {
        padding: 10px;
        border-bottom: 2px solid rgb(34, 34, 34);
        background-color: #fff;
        position: fixed;
        top: 0px;
        width: 100%;
    }
    .route_link {
        font-size: 20px;
        padding: 0px 10px;
        text-decoration: none;
    }
    .route_link:hover {
        color: rgba(34, 34, 34, 0.7);
        transition-duration: 0.2s;
    }
    .home{
        font-size: 25px;
        font-weight: bold;
    }
</style>
