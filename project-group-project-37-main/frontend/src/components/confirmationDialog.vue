<template>
    <div class="confirmation-dialog" v-if="show">
        <div class="dialog">
            <p>{{ message }}</p>
            <button @click="confirm">Confirm</button>
            <button @click="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: Boolean,
        message: String,
    },
    methods: {
        confirm() {
            this.$emit("confirmed");
        },
        cancel() {
            this.$emit("canceled");
        },
    },
};
</script>

<style scoped>
.confirmation-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog {
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}

button {
    margin: 5px;
}
</style>
