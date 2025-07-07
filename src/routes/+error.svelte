<script lang="ts">
    import { page } from '$app/stores';

</script>

<style>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        flex-direction: column;
        gap: 50px;
    }
</style>

<body>
    <div class="container">
        <img src="https://http.cat/images/{$page.status}.jpg" alt="" id="ErrorImage" />
        <a href="/">Home</a>
    </div>
</body>
