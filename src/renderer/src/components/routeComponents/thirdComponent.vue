<template>
    <div>
        <div class="drop-zone" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
            <div
                v-for="item in getList(1)"
                :key="item.id"
                class="drag-el"
                draggable="true"
                @dragstart="startDrag($event, item)"
            >
                {{ item.title }}
            </div>
        </div>
        <details>
            <summary>
                <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
                    <div
                        v-for="item in getList(2)"
                        :key="item.id"
                        class="drag-el"
                        draggable="true"
                        @dragstart="startDrag($event, item)"
                    >
                        {{ item.title }}
                    </div>
                </div>
            </summary>

            <div class="drop-zone" @drop="onDrop($event, 3)" @dragover.prevent @dragenter.prevent>
                <div
                    v-for="item in getList(3)"
                    :key="item.id"
                    class="drag-el"
                    draggable="true"
                    @dragstart="startDrag($event, item)"
                >
                    {{ item.title }}
                </div>
            </div>
        </details>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const items = ref([
            { id: 0, title: 'Item A', list: 1 },
            { id: 1, title: 'Item B', list: 1 },
            { id: 2, title: 'Item C', list: 2 },
            { id: 3, title: 'Item D', list: 2 },
            { id: 4, title: 'Item E', list: 3 },
            { id: 5, title: 'Item F', list: 3 },
            { id: 6, title: 'Item G', list: 4 },
            { id: 7, title: 'Item H', list: 4 },
            { id: 8, title: 'Item I', list: 5 },
            { id: 9, title: 'Item J', list: 5 },
            { id: 10, title: 'Item K', list: 6 },
            { id: 11, title: 'Item L', list: 6 },
            { id: 12, title: 'Item M', list: 7 },
            { id: 13, title: 'Item N', list: 7 },
            { id: 14, title: 'Item O', list: 8 },
            { id: 15, title: 'Item P', list: 8 },
            { id: 16, title: 'Item Q', list: 9 },
            { id: 17, title: 'Item R', list: 9 },
        ]);

        function getList(list) {
            return items.value.filter((item) => item.list == list);
        }

        function startDrag(event, item) {
            event.dataTransfer.dropEffect = 'move';
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('itemID', item.id);
        }
        function onDrop(event, list) {
            const itemID = event.dataTransfer.getData('itemID');
            const item = items.value.find((item) => item.id == itemID);


            item.list = list;
        }
        return { getList, startDrag, onDrop };
    },
};
</script>

<style scoped>
.drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
}

.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
}
.drag-el:hover {
    background-color: rgb(182, 201, 236);
}
</style>
