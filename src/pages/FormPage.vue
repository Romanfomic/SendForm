<template>
    <div>
        <button v-if="!showForm" v-on:click="start" id="start-button">Начать</button>
        <div v-else>
            <div v-on:click="exitForm" class="overlay" id="overlay"></div>
            <div class="popup" id="popup">
                <h2 class="popup-title">Введите данные:</h2>
                <div class="input-container">
                    <input v-model="formData[0]" type="text" class="input-field" placeholder="Имя">
                    <input v-model="formData[1]" type="text" class="input-field" placeholder="Фамилия">
                    <input v-model="formData[2]" type="text" class="input-field" placeholder="Email">
                    <input v-model="formData[3]" type="text" class="input-field" placeholder="Телефон">
                    <input v-model="formData[4]" type="text" class="input-field" placeholder="Адрес">
                </div>
                <button v-on:click="saveData" class="submit-btn" id="submitButton">Отправить</button>
            </div>
        </div>
        <!-- Поле вывода данных будет красным, если не все поля заполнены -->
        <div v-if="showData" class="data" :class="{ error: isData }">
            Данные:
            <p>{</p>
            <div v-for="(model, index) in formData">
                {{ index }}: {{ model }}
            </div>
            <p>}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showForm: false,
                showData: false,
                isData: false,
                formData: []
            }
        },
        methods: {
            start() {
                this.showForm = true;
                this.showData = false;
                this.isData = false;
            },
            saveData() {
                this.showForm = false;
                this.showData = true;
                // Проверка на заполненность данными
                if (this.formData.length === 0) {
                        this.isData = true;
                }
            },
            exitForm() {
                this.showForm = false;
            }
        }
    }
</script>

<style scoped>
    /* Стили для начальной кнопки */
    #start-button {
        margin: 10px;
        border: 0;
        background-color: deepskyblue;
        color: white;
        border-radius: 10px;
        padding: 8px;
        transition: transform 0.3s ease;
        cursor: pointer;
    }
    #start-button:hover{
        transform: scale(1.1);
    }
    /* Стиль для данных */
    .data {
        margin: 10px;
        border-radius: 10px;
        padding: 5px;
    }
    /* Стиль для отсутствия данных */
    .error {
        background-color: rgba( 255, 0, 0, 0.2) ;
    }
    /* Стили для затемненного фона */
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    }

    /* Стили для попапа */
    .popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 500px;
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        z-index: 10000;
    }

    /* Стили для кнопки "Отправить" */
    .submit-btn {
        margin-top: 10px;
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    /* Стили для полей ввода */
    .input-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    /* Стили для каждого поля ввода */
    .input-field {
        flex-basis: calc(50% - 5px);
        margin-bottom: 10px;
    }

    /* Стили для заголовка */
    .popup-title {
        margin-bottom: 10px;
    }
</style>