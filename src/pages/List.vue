<template>
  <div class="list_content">
      <h1 class="title">My Favorite TV Series</h1>
      <form @submit.prevent="addItem">
        <section class="input_section">
            <label class="input_label">分類</label>
            <select name="" id="" class="dropdown" v-model="newItemcate">
                <option value="en">美劇</option>
                <option value="kn">韓劇</option>
                <option value="cn">陸劇</option>
            </select>
            <label class="input_label">名稱</label>
            <input type="text" class="name_input" placeholder="輸入名稱" v-model.trim.lazy="newItem">
            <input type="submit" value="送出" class="submit_btn">
        </section>
        <section class="result_section">
            <ul class="result_cate">
                <li v-for="(item, index) in seriesCate('en')" :key="index">
                    <p>{{ item.name }}</p>
                    <span class="del_btn" @click="delItem(item.name)">X</span>
                </li>
            </ul>
            <ul class="result_cate center_result">
                <li v-for="(item, index) in seriesCate('kn')" :key="index">
                    <p>{{ item.name }}</p>
                    <span class="del_btn" @click="delItem(item.name)">X</span>
                </li>
            </ul>
            <ul class="result_cate">
                <li v-for="(item, index) in seriesCate('cn')" :key="index">
                    <p>{{ item.name }}</p>
                    <span class="del_btn" @click="delItem(item.name)">X</span>
                </li>
            </ul>
        </section>
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            newItemcate: "en",
            newItem: "",
            series: [
                { 'category':'en', 'name': 'SHERLOCK HOLMES' },
                { 'category':'en', 'name': "FRIENDS" },
                { 'category':'en', 'name': "LUCIFER" },
                { 'category':'kn', 'name': "主君的太陽" },
                { 'category':'kn', 'name': "鬼怪" },
                { 'category':'cn', 'name': "三生三世十里桃花" },
                { 'category':'cn', 'name': "微微一笑很傾城" },
            ]
        }
    },
    methods: {
        addItem() {
            if (this.newItem != "") {
                this.series.push({ 'category':this.newItemcate, 'name': this.newItem })
                this.newItem = ""
            } else {
                alert('請輸入名稱')
            }
            
        },
        delItem(search) {
            this.series = this.series.filter(item => item.name != search)
            return this.series
        },
        seriesCate(cate) {
            return this.series.filter(item => item.category == cate)
        }
    }
}
</script>

<style>

    .list_content {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        font-weight: bold;
        /* min-width: 50%; */
    }
    .title {
        padding: 20px;
    }
    .result_section {
        padding: 10px 0px;
        display: flex;
        flex-direction: row;            /* default value; can be omitted */
        justify-content: center;
    }
    .result_cate {
        padding: 0px 15px;
    }
    .center_result {
        border-left: 2px solid rgb(34, 34, 34);
        border-right: 2px solid rgb(34, 34, 34);
    }
    .input_section {
        padding: 10px 0px;
        display: flex;
        flex-direction: row;            /* default value; can be omitted */
        justify-content: center;
        align-items: center;
    }
    .input_label {
        padding: 0px 10px;
    }
    .dropdown {
        font-weight: bold;
        padding: 5px 10px;
        border: 2px solid rgb(34, 34, 34);
        border-radius: 30px;
        outline: none;
    }
    .dropdown option {
        font-weight: bold;
    }
    .name_input {
        padding: 5px 10px;
        border: 2px solid rgb(34, 34, 34);
        border-radius: 30px;
        outline: none;
    }
    .submit_btn {
        font-weight: bold;
        cursor: pointer;
        background-color: rgb(34, 34, 34);
        color: white;
        padding: 5px 10px;
        margin-left: 10px !important;
        border: none;
        border-radius: 30px;
    }
    .submit_btn:hover {
        background-color: rgba(34, 34, 34, 0.9);
        transition-duration: 0.2s;
    }
    li {
        padding: 5px 0px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center; 
    }
    li:before {
        content: "． ";
    }
    li p {
        padding-right: 20px;
    }
    .del_btn {
        cursor: pointer;
    }
    .del_btn:hover {
        color: rgba(34, 34, 34, 0.7);
        transition-duration: 0.2s;
    }
    
</style>