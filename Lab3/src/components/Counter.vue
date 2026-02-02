<script setup>
import { ref } from "vue";

const isIncrementDisabled = ref(false);
const isDecrementDisabled = ref(false);

const count = ref(0);
const step = ref(1);
let storeNumber = null;

function increment() {
    if (count.value + step.value <= 100) {
        storeNumber = count.value;
        count.value += step.value;
        isDecrementDisabled.value = false;
    } else {
        storeNumber = count.value;
        count.value = 100;
        isIncrementDisabled.value = true;
    }
}

function decrement() {
    if (count.value - step.value >= 0) {
        storeNumber = count.value;
        count.value -= step.value;
        isIncrementDisabled.value = false;
    } else {
        storeNumber = count.value;
        count.value = 0;
        isDecrementDisabled.value = true;
    }
}

function reset() {
    count.value = 0;
    isIncrementDisabled.value = false;
    isDecrementDisabled.value = false;
}

function undo() {
    if (storeNumber !== null) {
        count.value = storeNumber;
        isIncrementDisabled.value = false;
        isDecrementDisabled.value = false;
        storeNumber = null;
    }
}
</script>

<template>
    <div class="app">
        <div class="card">
            <h1>Counter App</h1>
            <p>Click buttons to changs the number.</p>

            <div class="count">{{ count }}</div>

            <div class="row">
                <button
                    class="btn inc"
                    @click="increment"
                    :disabled="isIncrementDisabled"
                >
                    + Increase
                </button>
                <button
                    class="btn dec"
                    @click="decrement"
                    :disabled="isDecrementDisabled"
                >
                    - Decrease
                </button>
            </div>

            <div class="row">
                <button class="btn reset" @click="reset">Reset</button>
                <button
                    class="btn undo"
                    @click="undo"
                    :disabled="storeNumber === null"
                >
                    Undo
                </button>
            </div>

            <div class="hint">
                Step:<input type="number" min="1" v-model.number="step" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.app {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
}

.card {
    width: 400px;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
    text-align: center;
    margin-bottom: 5px;
}

p {
    text-align: center;
    color: gray;
    margin-bottom: 20px;
}

.count {
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
}

.row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.btn {
    flex: 1;
    padding: 10px;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.inc {
    background-color: #4caf50;
    color: white;
}

.dec {
    background-color: #f44336;
    color: white;
}

.reset {
    background-color: #2196f3;
    color: white;
}

.undo {
    background-color: #ff9800;
    color: white;
}

.btn:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
}

.hint {
    text-align: center;
    margin-top: 15px;
}

.hint input {
    width: 60px;
    padding: 5px;
    margin-left: 5px;
}
</style>
