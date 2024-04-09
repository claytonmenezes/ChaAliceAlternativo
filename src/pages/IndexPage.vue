<template>
  <q-page class="flex flex-center">
    <div>
      <q-list bordered class="rounded-borders">
        <q-expansion-item
          v-for="(item, index) in lista"
          :key="index"
          expand-separator
          :label="item.nome"
          :content-inset-level="1"
          style="max-width: 350px"
          :caption="`${item.itens.length} Presente(s)`"
        >
          <q-card>
            <q-card-section
              v-for="(subItem, subIndex) in item.itens"
              :key="subIndex"
            >
              {{ subItem.presente }}
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { listar } from "../utils/db";

const lista = ref([]);

onMounted(async () => {
  lista.value = await listar();
});
</script>
