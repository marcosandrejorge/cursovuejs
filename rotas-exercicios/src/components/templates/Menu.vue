<template>
    <nav class="menu">
        <ul>
            <!-- exact é para que a url seja exatamente a que está no to="" -->
            <router-link to="/" tag="li" active-class="active" exact>
                <a>Início</a>
            </router-link>
            <router-link to="/usuario" tag="li" active-class="active">
                <a>Usuários</a>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style>

</style>