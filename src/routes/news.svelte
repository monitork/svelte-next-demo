<script lang="ts" context="module">
    import type {News} from "../types";
    import {fetchAllNews} from "../repositories/news_repository";

    export const load = async () => {
        await fetchAllNews().then((posts: News[]) => {
            return {posts}
        }).catch(e => {
            this.error(e.status, e.message);
        });
    }
</script>


<script lang="ts">
    export let posts: News[];
</script>
